import { CaseEntry } from "@/types/case"
// Material icons (react-icons/md) aliased to the previous lucide names.
import {
  MdEco as Leaf,
  MdAccountBalance as Landmark,
  MdAccountBalanceWallet as Wallet,
  MdSwapHoriz as ArrowLeftRight,
  MdHub as Network,
  MdHowToVote as Vote,
  MdApartment as Building2,
  MdDescription as ScrollText,
  MdMemory as Cpu,
  MdFingerprint as Fingerprint,
  MdScience as FlaskConical,
  MdArchive as Archive,
  MdSchema as Workflow,
  MdPieChart as PieChart,
  MdRadio as Radio,
  MdCopyright as Copyright,
  MdCardGiftcard as Gift,
  MdBolt as Zap,
  MdGppMaybe as ShieldAlert,
  MdMonitorHeart as HeartPulse,
  MdShowChart as Activity,
  MdShield as Shield,
  MdSearch as Search,
  MdLayers as Layers,
  MdStorage as Database,
  MdLocalShipping as Truck,
  MdBalance as Scale,
  MdWidgets as Boxes,
  MdLock as LockKeyhole,
  MdVerifiedUser as ShieldCheck,
  MdFavorite as Heart,
  MdPsychology as BrainCircuit,
  MdSync as RefreshCw,
  MdBusinessCenter as Briefcase,
  MdLock as Lock,
  MdPublic as Globe,
  MdDataObject as Braces,
  MdFingerprint as FingerprintPattern,
  MdBuild as Hammer,
  MdSync as RefreshCcw,
  MdDns as Server,
  MdBadge as IdCardLanyard,
  MdSecurity as ShieldCog,
  MdAutoAwesome as Sparkles,
  MdTerminal as SquareTerminal,
  MdMonitorHeart as ScanHeart,
  MdQrCodeScanner as ScanLine,
  MdQrCode2 as QrCode,
  MdGroups as Users,
} from "react-icons/md"

export const solutions: CaseEntry[] = [
  //========================================tokenized-asset
  {
    slug: "tokenized-asset",
    icon: Boxes,
    eyebrow: "RWA Execution Engine v2.0",
    headline1: "Digitize real world value.",
    headline2: "Unlock instant liquidity.",
    heroDescription:
      "Convert physical infrastructure, private equity, and commercial real estate into highly divisible, programmable digital assets using the Cerulea execution engine.",
    heroCta: "Contact Us",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      {
        title: "Visual Schema Definition",
        description:
          "Define your asset completely without writing smart contracts. Cerulea Studio provides a visual environment to set total supply, divisibility, and programmable behaviors.",
      },
      {
        title: "Embedded Compliance",
        description:
          "Bind token transfer logic directly to an on-chain KYC resolver. If a buyer does not possess a verified identity credential, the network mathematically blocks the transaction.",
      },
      {
        title: "Atomic Escrow Settlement",
        description:
          "Buyers lock stablecoins in a programmable escrow, which releases funds to the seller the exact millisecond the fractional token ownership is officially reassigned on the ledger.",
      },
      {
        title: "Automated Dividend Routing",
        description:
          "Connect asset treasuries to yield routers. Corporate profits are proportionally distributed to thousands of token holders globally in a single, gas optimized network transaction.",
      },
      {
        title: "Granular Divisibility",
        description:
          "Physical assets can be fragmented down to 18 decimal places. This absolute divisibility unlocks massive global retail liquidity pools previously inaccessible to heavy enterprise assets.",
      },
      {
        title: "Interoperable Standards",
        description:
          "Assets are compiled using globally recognized token standards. This ensures native compatibility with secondary market exchanges, institutional custodians, and decentralized finance protocols.",
      },
    ],
    lifecycleTitle: "The Asset Lifecycle State Machine",
    lifecycleSubtitle:
      "Follow the exact cryptographic progression of a physical asset as it is digitized, regulated, and traded on the Cerulea network.",
    lifecycleSteps: [
      {
        icon: Landmark,
        label: "Asset Origination & Minting",
        description:
          "The physical asset is mapped into a cryptographic data model. The total supply, divisibility, and foundational metadata are permanently anchored to the ledger.",
        logFilename: "cerulea.mint.v2",
        logLines: [
          {
            time: "08:20:53",
            text: "[SYS] Initializing Cerulea Studio schema compiler...",
            tone: "primary",
          },
          {
            time: "08:20:53",
            text: "[CMD] Define RWA_Asset { supply: 1000000, type: fractional }",
            tone: "secondary",
          },
          {
            time: "08:20:53",
            text: "[AUTH] Verifying Oracle feed for physical anchor...",
            tone: "success",
          },
          {
            time: "08:20:53",
            text: "[OK] Asset successfully minted to issuer treasury.",
            tone: "muted",
          },
        ],
      },
      {
        icon: ShieldCheck,
        label: "Identity & KYC Integration",
        description:
          "Before any asset can be transferred, the network enforces strict identity checks. The asset is programmatically locked to verified wallets within authorized jurisdictions.",
        logFilename: "cerulea.kyc.v2",
        logLines: [
          {
            time: "09:02:11",
            text: "[SYS] Fetching jurisdictional rule engine...",
            tone: "primary",
          },
          {
            time: "09:02:12",
            text: "[CMD] Require Identity_Proof == true",
            tone: "default",
          },
          {
            time: "09:02:13",
            text: "[CMD] Require Region != Restricted_Zone",
            tone: "muted",
          },
          {
            time: "09:02:13",
            text: "[OK] Compliance hooks permanently attached to asset transfer function.",
            tone: "success",
          },
        ],
      },
      {
        icon: RefreshCw,
        label: "Fractional Trading & Escrow",
        description:
          "The asset is made available on decentralized or enterprise marketplaces. Atomic swaps guarantee that capital and digital shares change hands simultaneously without friction.",
        logFilename: "cerulea.escrow.v2",
        logLines: [
          {
            time: "10:15:44",
            text: "[SYS] Initiating atomic swap sequence...",
            tone: "default",
          },
          {
            time: "10:15:45",
            text: "[AUTH] Verifying buyer stablecoin balance...",
            tone: "secondary",
          },
          {
            time: "10:15:46",
            text: "[AUTH] Verifying seller asset ownership...",
            tone: "secondary",
          },
          {
            time: "10:15:46",
            text: "[OK] Escrow conditions met. Balances updated simultaneously.",
            tone: "success",
          },
        ],
      },
      {
        icon: Activity,
        label: "Automated Yield Routing",
        description:
          "Revenue generated by the physical asset is automatically distributed to all fractional token holders proportionally. Complex dividend payouts occur instantly.",
        logFilename: "cerulea.executor.v2",
        logLines: [
          {
            time: "08:20:53",
            text: "[SYS] Corporate revenue deposit detected.",
            tone: "default",
          },
          {
            time: "08:20:53",
            text: "[CMD] Calculate holding percentages for 14,204 wallets...",
            tone: "primary",
          },
          {
            time: "08:20:53",
            text: "[SYS] Executing mass stablecoin transfer...",
            tone: "primary",
          },
          {
            time: "08:20:53",
            text: "[OK] Dividends successfully routed to all active stakeholders.",
            tone: "success",
          },
        ],
      },
    ],
    logSystemName: "Operational log system",
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea does not deploy basic tokens. It compiles highly secure, multi-layered programmable assets designed specifically for regulated enterprise environments.",
    layers: [
      {
        icon: Braces,
        title: "Layer 01: Ownership Record",
        subtitle: "The Digital Asset Ledger",
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Digital Asset Ledger",
          description:
            "Acting as the Core Ledger, this manages the mathematical execution of the asset, including fractional divisibility, maximum supply caps, and securely tracking which wallet addresses hold the tokens.",
          platformFunction: "Ownership Tracking",
        },
        codeSnippet: `contract AssetLedger is Initializable {
  uint256 private _totalSupply;
  mapping(address => uint256) private _balances;

  function _transfer(address sender, address recipient, uint256 amount) internal {
    _balances[sender] = _balances[sender].sub(amount);
    _balances[recipient] = _balances[recipient].add(amount);
    emit Transfer(sender, recipient, amount);
  }
}`,
        simAction: "Simulate Balance Update",
        simulateDescription:
          "Run a live mint simulation: issue fractional shares to a test wallet and watch total supply and balance updates propagate through the ledger in real time.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Accessing Level 1 Storage...", tone: "default" },
          { text: "Deducting 500 units from 0x8F1...C33...", tone: "default" },
          { text: "Adding 500 units to 0x4A2...B91...", tone: "default" },
          { text: "Emitting Transfer Event to Network Indexers...", tone: "default" },
          { text: "[SUCCESS] State trie updated and hashed to block 14092281.", tone: "success" },
        ],
      },
      {
        icon: FingerprintPattern,
        title: "Layer 02: Compliance Check",
        subtitle: "The Identity Gatekeeper",
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Gatekeeper",
          description:
            "Functioning as a Compliance Interceptor, this layer pauses every transaction milliseconds before it executes. It queries a decentralized registry to ensure both the sender and receiver possess valid KYC credentials.",
          platformFunction: "Automated KYC/AML",
        },
        codeSnippet: `modifier onlyVerified(address _to) {
  require(
    identityRegistry.isVerified(_to),
    "Err: Receiver lacks valid KYC claim"
  );
  require(
    complianceRules.canTransfer(msg.sender, _to),
    "Err: Jurisdictional restriction"
  );
  _;
}`,
        simAction: "Simulate Token Transfer",
        simulateDescription:
          "Simulate a transfer to an unverified wallet and watch the compliance gate reject it instantly.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting transfer request...", tone: "default" },
          { text: "Querying KYC registry for 0x7B9...F21...", tone: "default" },
          { text: "Validation failed: Recipient wallet is unverified.", tone: "muted" },
          { text: "[REJECTED] Transfer blocked by Compliance Gatekeeper.", tone: "success" },
        ],
      },
      {
        icon: Hammer,
        title: "Layer 03: Admin Controls",
        subtitle: "The Corporate Override",
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Corporate Override",
          description:
            "To comply with global securities laws, institutions require strict Corporate Governance. This layer injects administrative functions that require multi-signature approvals to freeze compromised wallets or recover stolen assets.",
          platformFunction: "Asset Recovery",
        },
        codeSnippet: `function forcedTransfer(address from, address to, uint256 amount) 
  external 
  onlyAgent 
{
  require(isFrozen[from] == true, "Wallet must be frozen first");
  _transfer(from, to, amount);
  emit ForcedTransfer(from, to, amount, msg.sender);
}`,
        simAction: "Simulate Asset Recovery",
        simulateDescription:
          "Trigger a pause event and observe every pending transfer across the network halt simultaneously.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Authenticating Issuer multi-sig...", tone: "default" },
          { text: "Broadcasting network-wide Pause command...", tone: "default" },
          { text: "Halting all pending asset transfers...", tone: "muted" },
          { text: "[SUCCESS] Asset contract paused globally.", tone: "success" },
        ],
      },
      {
        icon: ArrowLeftRight,
        title: "Layer 04: Automated Payouts",
        subtitle: "The Dividend Distributor",
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Dividend Distributor",
          description:
            "Operating as the Yield Router, this financial engine automatically intercepts corporate revenue deposits, takes a snapshot of the cap table, and calculates proportionate dividend distributions for all current stakeholders.",
          platformFunction: "Revenue Splitting",
        },
        codeSnippet: `function depositDividends() external payable {
  uint256 snapshotId = _snapshot();
  uint256 dividendPerToken = msg.value.div(totalSupplyAt(snapshotId));
  
  for(uint i=0; i < stakeholders.length; i++) {
    uint256 payout = balanceAt(stakeholders[i], snapshotId) * dividendPerToken;
    payable(stakeholders[i]).transfer(payout);
  }
}`,
        simAction: "Simulate Yield Distribution",
        simulateDescription:
          "Inject a simulated revenue event and watch the pro-rata payout calculation run live across a sample holder set.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Calculating revenue distribution...", tone: "default" },
          { text: "Identifying 4,082 current fractional holders...", tone: "default" },
          { text: "Routing pro-rata yield to all registered wallets...", tone: "default" },
          { text: "[SUCCESS] Yield distributed. Oracle synced.", tone: "success" },
        ],
      },
    ],

    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Asset Tokenization is a horizontal capability. Here is how different sectors utilize this execution model to unify liquidity.",
    sectors: [
      {
        icon: Building2,
        title: "Commercial Real Estate",
        description:
          "Divide massive corporate properties into thousands of digital shares. This allows property managers to raise capital globally without relying entirely on highly centralized legacy investment banks.",
        assetTypes: [
          "Commercial Office Towers",
          "Hospitality & Resorts",
          "Land Deeds",
        ],
      },
      {
        icon: Briefcase,
        title: "Private Credit & Bonds",
        description:
          "Issue corporate debt as a tokenized asset. The smart contract automatically calculates interest rates and executes dividend distributions to thousands of global lenders simultaneously.",
        assetTypes: [
          "Corporate Bonds",
          "Invoice Factoring",
          "SME Lending Pools",
        ],
      },
      {
        icon: Boxes,
        title: "Commodities & Supply Chain",
        description:
          "Tokenize physical inventory locked in transit. A Bill of Lading becomes a liquid digital asset that can be instantly traded between distributors while the physical goods are still crossing the ocean.",
        assetTypes: [
          "Precious Metals",
          "Agricultural Output",
          "Bills of Lading",
        ],
      },
    ],

    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are migrating legacy financial cap tables or deploying native decentralized assets to open marketplaces, Cerulea provides the exact routing required.",
    tracks: [
      {
        title: "Track A: Enterprise Registry Bridging",
        description:
          "For institutional asset managers and real estate firms. Legacy HTTP requests from portfolio management software are translated into secure token minting logic automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          {
            label: "Legacy Asset Registry",
            sublabel: "ERP / Cap Table Database",
            icon: Database,
            accent: false,
          },
          {
            label: "Cerulea API Gateway",
            sublabel: "Data Validation & Translation",
            icon: Zap,
            accent: true,
          },
          {
            label: "Cerulea Private Chain",
            sublabel: "Regulated Asset State",
            icon: Server,
            accent: true,
          },
        ],
      },
      {
        title: "Track B: Native Open Market Execution",
        description:
          "For native Web3 platforms and decentralized exchanges (DEXs). Bypass legacy middleware and route atomic trade logic directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "ATOMIC SWAP"],
        nodes: [
          {
            label: "Retail Investor Portal",
            sublabel: "React DApp & Digital Wallets",
            icon: Lock,
            accent: false,
          },
          {
            label: "Decentralized Exchange",
            sublabel: "AMM or Orderbook Router",
            icon: Network,
            accent: true,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Final Settlement Ledger",
            icon: Globe,
            accent: true,
          },
        ],
      },
    ],

    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building custom identity protocols and ZKP logic from scratch requires specialized cryptographers and massive security audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Logical Complexity",
      ruleCount: 156,
      sliderPercent: 78,
      traditionalMonths: 45,
      ceruleaWeeks: 16,
      methodology:
        "The legacy development timeline utilizes Web3 enterprise benchmarks. Writing custom Solidity logic, negotiating data standards, and deploying fragile middleware for an average application takes a baseline of 6 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your business rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
  },


  //========================================decentralized-identity
  {
    slug: "decentralized-identity",
    icon: Fingerprint,
    eyebrow: "Decentralized Identity",
    headline1: "Verify credentials.",
    headline2: "Provably secure smart contracts.",
    heroDescription:
      "Deploy self-sovereign identity frameworks, secure zero-trust perimeters, and issue verifiable credentials without risking sensitive user data using the Cerulea execution engine.",
    heroCta: "Contact Us",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      {
        title: "Verifiable Credentials",
        description:
          "Institutions sign digital claims using W3C standards. These credentials live in the user's wallet, completely replacing vulnerable centralized identity databases.",
      },
      {
        title: "Zero-Knowledge Proofs",
        description:
          "Utilize zk-SNARKs to prove a statement is true (e.g., credit score > 700) without ever revealing the underlying sensitive data to the verifying application or the blockchain.",
      },
      {
        title: "Decentralized Identifiers",
        description:
          "Replace rigid email/password combinations with globally unique, user-controlled DIDs anchored directly to the Cerulea ledger for absolute sovereign control.",
      },
      {
        title: "Zero-Knowledge Proofs",
        description:
          "Utilize zk-SNARKs to prove a statement is true (e.g., credit score > 700) without ever revealing the underlying sensitive data to the verifying application or the blockchain.",
      },
      {
        title: "Sybil Resistance",
        description:
          "Bind decentralized identities to physical biometrics or trusted institutional KYC logic, ensuring that one human mathematically equals exactly one network account.",
      },
      {
        title: "Selective Disclosure",
        description:
          "Users share only the precise data points required for a transaction. Reveal citizenship to a bank while keeping home address and date of birth completely hidden.",
      },
    ],
    lifecycleTitle: "The Authentication Lifecycle",
    lifecycleSubtitle:
      "Follow the exact cryptographic flow of identity issuance, sovereign storage, and privacy-preserving verification on the network.",
    lifecycleSteps: [
      {
        label: "Credential Issuance",
        description:
          "A trusted institution (like a bank or university) cryptographically signs a digital claim about a user and sends the Verifiable Credential directly to the user's decentralized wallet.",
        icon: Building2,
        logFilename: "cerulea_execution_engine.log",
        logLines: [
          {
            text: "[SYS] Initializing Issuer Node connection...",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[CMD] Construct VerifiableCredential { subject: DID_192A, claim: 'Over_21' }",
            time: "08:20:53",
            tone: "muted",
          },
          {
            text: "[AUTH] Applying institutional ECDSA signature...",
            time: "08:20:53",
            tone: "success",
          },
          {
            text: "[AUTH] Applying institutional ECDSA signature...",
            time: "08:20:53",
            tone: "secondary",
          },
        ],
      },
      {
        label: "Sovereign Storage",
        description:
          "The credential lives exclusively in the user's own wallet, never touching a centralized database that could be breached.",
        icon: Shield,
        logFilename: "cerulea_execution_engine.log",
        logLines: [
          {
            text: "[SYS] Detecting incoming credential payload...",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[CMD] Verify issuer public key against Cerulea Registry...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[AUTH] Validation successful. Securing payload in local enclave.",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[OK] Credential ready for selective disclosure.",
            time: "08:20:53",
            tone: "error",
          },
        ],
      },
      {
        label: "Zero-Knowledge Presentation",
        description:
          "When required, the user generates a proof about the credential without revealing the underlying raw data.",
        icon: RefreshCcw,
        logFilename: "cerulea_execution_engine.log",
        logLines: [
          {
            text: "[SYS] Intercepting challenge payload from Verifier Portal...",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[CMD] Generate zk-SNARK proof for statement: age > 21",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[AUTH] Compiling cryptographic witness...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[OK] Proof generated and submitted to Verifier Smart Contract.",
            time: "08:20:53",
            tone: "secondary",
          },
        ],
      },
      {
        label: "Cryptographic Verification",
        description:
          "The verifying party checks the proof against the issuer's public key, confirming validity in milliseconds.",
        icon: Activity,
        logFilename: "cerulea_execution_engine.log",
        logLines: [
          {
            text: "[SYS] Receiving zk-SNARK payload on Cerulea L1...",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[CMD] Execute verifyProof(a, b, c, publicSignals)",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[SYS] Cross-referencing Issuer revocation registry...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[OK] Verification successful. Triggering access grant.",
            time: "08:20:53",
            tone: "success",
          },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea handles sensitive identity data through specialized, siloed contract modules. This architectural isolation ensures mathematically guaranteed privacy and rapid credential revocation.",
    layers: [
      {
        title: "Layer 01: Identifier Mapping",
        subtitle: "The DID Registry",
        icon: Server,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The DID Registry",
          description:
            "This is the foundational database. It does not store personal data. It maps Decentralized Identifiers (DIDs) to current public keys and service endpoints, allowing any party to cryptographically verify who signed a specific document or credential.",
          platformFunction: "Identifier Mapping",
        },
        codeSnippet: `contract DIDRegistry {
  mapping(address => DIDDocument) private _identities;

  function setAttribute(bytes32 name, bytes memory value, uint256 validity) external {
    _identities[msg.sender].attributes[name] = Attribute(value, block.timestamp + validity);
    emit DIDAttributeChanged(msg.sender, name, value, validity);
  }
}`,
        simAction: "Simulate DID Registration",
        simulateDescription: "Simulate this step to see execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling DID Document for address 0x7B2...F11...", tone: "default" },
          { text: "Resolving Ed25519 public key parameters...", tone: "default" },
          { text: "Executing setAttribute() on L1 Registry...", tone: "default" },
          { text: "Emitting DIDAttributeChanged Event to network...", tone: "default" },
          { text: "[SUCCESS] Identifier permanently anchored to block 184920.", tone: "success" },
        ],
      },
      {
        title: "Layer 02: Credential Hashing",
        subtitle: "The Credential Issuer",
        icon: IdCardLanyard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credential Issuer",
          description:
            "Used by universities, governments, or banks to issue claims. This contract manages the revocation list. If an employee is fired or a driver license is suspended, the issuer updates the registry hash, instantly invalidating the credential globally.",
          platformFunction: "Credential Hashing",
        },
        codeSnippet: `contract ClaimIssuer is AccessControl {
  mapping(bytes32 => bool) public revokedClaims;

  function revokeClaim(bytes32 claimHash) external onlyAdmin {
    revokedClaims[claimHash] = true;
    emit ClaimRevoked(claimHash, block.timestamp);
  }

  function isRevoked(bytes32 claimHash) external view returns (bool) {
    return revokedClaims[claimHash];
  }
}`,
        simAction: "Simulate Credential Revocation",
        simulateDescription: "Simulate this step to see execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initiating administrative revocation sequence...", tone: "default" },
          { text: "Targeting credential hash: 0x9a8b...1f2c", tone: "default" },
          { text: "Executing revokeClaim() function...", tone: "default" },
          { text: "Updating global state trie...", tone: "default" },
          { text: "[SUCCESS] Credential instantly invalidated across all connected systems.", tone: "success" },
        ],
      },
      {
        title: "Layer 03: Mathematical Proofing",
        subtitle: "The ZK Verifier",
        icon: FingerprintPattern,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The ZK Verifier",
          description:
            "The cryptographic heavy lifter. This contract takes complex mathematical proofs submitted by users and determines if they are true (e.g., 'User is over 18' or 'User is a US Citizen') without ever seeing the user actual birthday or passport number.",
          platformFunction: "Mathematical Proofing",
        },
        codeSnippet: `contract ZKVerifier {
  function verifyProof(
    uint[2] calldata a,
    uint[2][2] calldata b,
    uint[2] calldata c,
    uint[1] calldata input
  ) external view returns (bool) {
    require(verifierContract.verifyTx(a, b, c, input), "Invalid ZK Proof");
    return true;
  }
}`,
        simAction: "Simulate ZKP Verification",
        simulateDescription: "Simulate this step to see execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving zk-SNARK payload from client wallet...", tone: "default" },
          { text: "Loading elliptic curve pairing parameters...", tone: "default" },
          { text: "Executing verification algorithm against public inputs...", tone: "default" },
          { text: "Mathematical validation returned: TRUE.", tone: "default" },
          { text: "[SUCCESS] Proof accepted without exposing underlying PII.", tone: "success" },
        ],
      },
      {
        title: "Layer 04: Social & Admin Rescue",
        subtitle: "The Recovery Oracle",
        icon: ShieldCog,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Recovery Oracle",
          description:
            "If an employee loses their device, they lose their identity. This module allows a predefined set of \"Guardians\" (like an IT department or trusted family members) to sign a multi-sig transaction that migrates the identity profile to a brand new hardware key.",
          platformFunction: "Social & Admin Rescue",
        },
        codeSnippet: `function initiateRecovery(address oldKey, address newKey) external {
  require(guardians[msg.sender] == true, "Unauthorized guardian");
  recoveryVotes[oldKey][newKey]++;
  
  if (recoveryVotes[oldKey][newKey] >= requiredSignatures) {
    _transferIdentity(oldKey, newKey);
    emit IdentityRecovered(oldKey, newKey);
  }
}`,
        simAction: "Simulate Key Recovery",
        simulateDescription: "Simulate this step to see execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recovery request initiated for compromised key 0x33A...B12.", tone: "default" },
          { text: "Logging Guardian 1 signature... (1/3)", tone: "default" },
          { text: "Logging Guardian 2 signature... (2/3)", tone: "default" },
          { text: "Logging Guardian 3 signature... (3/3)", tone: "default" },
          { text: "Threshold reached. Executing _transferIdentity()...", tone: "default" },
          { text: "[SUCCESS] Access restored securely to new hardware key.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Decentralized Identity is a horizontal platform capability. Here is how different sectors utilize this execution model to unify verification.",
    sectors: [
      {
        icon: Landmark,
        title: "Financial Services & Banking",
        description:
          "Execute strict global KYC and AML compliance checks without forcing users to upload plaintext passports to vulnerable central databases. Onboard clients frictionlessly using portable digital credentials.",
        assetTypes: [
          "Reusable KYC Onboarding",
          "Accredited Investor Verification",
          "Anti-Money Laundering",
        ],
      },
      {
        icon: Briefcase,
        title: "Healthcare & Medical Records",
        description:
          "Give patients total sovereignty over their medical history. Doctors request cryptographic access to records, and smart contracts ensure strict HIPAA compliance while generating an unalterable audit trail of access.",
        assetTypes: [
          "Patient Data Sovereignty",
          "Doctor Credential Verification",
          "Clinical Trial Consent",
        ],
      },
      {
        icon: Boxes,
        title: "Cybersecurity & Zero-Trust",
        description:
          "Replace vulnerable enterprise passwords with decentralized Public Key Infrastructure (PKI). Employees authenticate to internal networks via verifiable hardware signatures, completely eliminating credential stuffing attacks.",
        assetTypes: [
          "Zero-Trust Network Access",
          "Decentralized SSO",
          "IoT Device Authentication",
        ],
      },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy Identity Access Management (IAM) systems or deploying native Web3 authentication, Cerulea provides the exact routing required.",
    tracks: [
      {
        title: "Track A: Enterprise IAM Bridging",
        description:
          "For CISO teams and corporate IT. Legacy HTTP requests from existing active directories are translated into secure Web3 cryptographic signatures automatically.",
        nodes: [
          {
            label: "Legacy Identity Core",
            sublabel: "Active Directory / Okta",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API Gateway",
            sublabel: "Data Validation & Hashing",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chain",
            sublabel: "Sovereign Audit Log",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native Web3 Authentication",
        description:
          "For zero-trust DApps and decentralized physical infrastructure. Bypass legacy middleware and route ZK proofs directly to the public execution layer.",
        nodes: [
          {
            label: "Client / Edge Device",
            sublabel: "React App & Digital Wallets",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Decentralized Oracles",
            sublabel: "ZK Verifier Nodes",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Access Control Logic",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["ZKP SIGNATURE", "STATE EXECUTION"],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building custom identity protocols and ZKP logic from scratch requires specialized cryptographers and massive security audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Identity Parameters & Integrations",
      ruleCount: 15,
      sliderPercent: 45,
      traditionalMonths: 45,
      ceruleaWeeks: 16,
      methodology:
        "The legacy development timeline utilizes Web3 cybersecurity benchmarks. Writing custom Zero-Knowledge circuits, negotiating W3C data standards, and deploying fragile middleware for an average logical application requires a baseline of 6 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your business rules into pre audited, battle tested WebAssembly identity binaries instantly, entirely bypassing the manual cryptographic coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },



  //========================================iot-depin
  {
    slug: "iot-depin",
    icon: Radio,
    eyebrow: "IoT & DePIN",
    headline1: "Connect physical hardware.",
    headline2: "Decentralize infrastructure.",
    heroDescription:
      "Deploy sovereign networks of sensors and machines powered by autonomous token incentives. Bridge the physical world to immutable ledger state seamlessly.",
    heroCta: "Contact Us",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      {
        title: "Cryptographic Device Identity",
        description:
          "Every physical sensor or antenna holds a unique private key. This prevents malicious actors from spoofing hardware data, ensuring absolute trust in network telemetry.",
      },
      {
        title: "Trustless Data Ingestion",
        description:
          "Decentralized oracle networks securely transport off-chain MQTT payloads into the smart contract state, mathematically validating the device signatures before recording the data.",
      },
      {
        title: "Automated Micropayments",
        description:
          "High-throughput consensus enables machines to pay each other fractions of a cent per byte of data or kilowatt of energy instantly, bypassing expensive payment gateways completely.",
      },
      {
        title: "Proof of Physical Work",
        description:
          "Smart contracts analyze sensor telemetry to confirm that physical tasks (like providing 5G coverage or maintaining cold-chain temperatures) were executed correctly before releasing capital.",
      },
      {
        title: "Edge Compute Bridging",
        description:
          "Heavy data processing occurs locally on the physical hardware. Only the lightweight, cryptographic proof of that computation is anchored to the global ledger, ensuring massive scalability.",
      },
      {
        title: "Agnostic Hardware Standards",
        description:
          "The execution logic relies strictly on mathematical signatures, allowing enterprise networks to integrate equipment from dozens of different manufacturers securely into a single decentralized protocol.",
      },
    ],
    lifecycleTitle: "The DePIN Lifecycle",
    lifecycleSubtitle:
      "Follow the exact cryptographic progression of a physical device as it boots up, validates its environment, and earns programmatic rewards.",
    lifecycleSteps: [
      {
        label: "Hardware Provisioning",
        description:
          "A physical device generates a cryptographic keypair inside its secure enclave. The public key is registered on the ledger, establishing a permanent, unforgeable identity for the machine.",
        icon: Building2,
        logFilename: "cerulea_hardware_engine.log",
        logLines: [
          {
            text: "[SYS] Intercepting secure enclave boot sequence...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[CMD] Generate secp256k1 keypair for Device_MAC_91A",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[AUTH] Submitting public key to DeviceRegistry...",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[OK] Hardware identity successfully anchored to ledger.",
            time: "08:20:53",
            tone: "success",
          },
        ],
      },
      {
        label: "Cryptographic Telemetry",
        description:
          "The device begins operating, streaming data (like bandwidth usage, temperature, or location). Every data packet is signed by the hardware private key before transmission.",
        icon: Shield,
        logFilename: "cerulea_hardware_engine.log",
        logLines: [
          {
            text: "[SYS] Initializing MQTT sensor data stream...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[CMD] Sign payload: { uptime: 99.8, bandwidth: 45GB }",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[AUTH] Verifying hardware signature against L1 registry...",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[OK] Payload authenticated. Routing to Oracle Network.",
            time: "08:20:53",
            tone: "success",
          },
        ],
      },
      {
        label: "Proof of Physical Work",
        description:
          "The network mathematically confirms that the device performed its required physical task correctly and on schedule.",
        icon: RefreshCcw,
        logFilename: "cerulea_hardware_engine.log",
        logLines: [
          {
            text: "[SYS] Receiving batch payload from 50 edge devices...",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[CMD] Execute Proof_of_Coverage spatial validation...",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[SYS] Cross-referencing latency and triangulation bounds...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[OK] Physical work mathematically verified.",
            time: "08:20:53",
            tone: "success",
          },
        ],
      },
      {
        label: "Autonomous Micropayments",
        description:
          "Upon verified performance, the smart contract releases fractional token rewards directly to the device's wallet.",
        icon: Activity,
        logFilename: "cerulea_hardware_engine.log",
        logLines: [
          {
            text: "[SYS] Triggering IncentiveRouter for Epoch 491...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[CMD] Calculate pro-rata rewards based on valid uptime...",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[SYS] Executing high-throughput token disbursement...",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[OK] 0.054 USDC routed to operator wallet. Cycle complete.",
            time: "08:20:53",
            tone: "success",
          },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea manages physical infrastructure through highly specialized, modular smart contracts. This layered approach ensures that untrusted hardware can be safely integrated into a decentralized economy.",
    layers: [
      {
        title: "LAYER 01: BASE STANDARD",
        subtitle: "The Device Registry",
        icon: Braces,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Device Registry",
          description:
            "The foundational data structure for DePIN. It maps a physical hardware identifier (like a MAC address or serial number) to a cryptographic wallet, ensuring that machines can hold capital, sign transactions, and be governed by network rules.",
          platformFunction: "Hardware Identity",
        },
        codeSnippet: `contract DeviceRegistry {
  struct Device {
    address owner;
    bool isActive;
    uint256 registeredAt;
  }
  
  mapping(address => Device) public nodes;

  function provisionDevice(address hardwareKey) external {
    require(nodes[hardwareKey].owner == address(0), "Registered");
    nodes[hardwareKey] = Device(msg.sender, true, block.timestamp);
    emit NodeProvisioned(hardwareKey, msg.sender);
  }
}`,
        simAction: "Simulate Device Boot",
        simulateDescription:
          "Simulate a hardware node boot sequence: generate a cryptographic keypair inside the secure enclave and anchor the device identity to the ledger.",
        simulateTitle: "Simulate Device Boot",
        simulateLogs: [
          { text: "Hardware node powered on. Generating private key...", tone: "default" },
          { text: "Connecting to Web3 RPC endpoint...", tone: "default" },
          { text: "Checking Level 1 Storage for existing hardware ID...", tone: "default" },
          { text: "Executing provisionDevice() on L1 Registry...", tone: "default" },
          { text: "[SUCCESS] Sensor successfully mapped to Operator Wallet.", tone: "success" },
        ],
      },
      {
        title: "LAYER 02: INGESTION ENGINE",
        subtitle: "The Telemetry Oracle",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Telemetry Oracle",
          description:
            "Blockchains cannot read external data natively. This middleware contract securely receives off-chain sensor payloads, verifies the cryptographic signature of the transmitting hardware, and commits the validated state to the execution layer.",
          platformFunction: "Data Validation",
        },
        codeSnippet: `contract TelemetryOracle is AccessControl {
  mapping(address => uint256) public latestUptime;

  function commitTelemetry(address node, uint256 uptime, bytes calldata signature) external {
    require(_verifySignature(node, uptime, signature), "Invalid Signer");
    require(uptime > latestUptime[node], "Stale payload");
    
    latestUptime[node] = uptime;
    emit TelemetryCommitted(node, uptime);
  }
}`,
        simAction: "Simulate Data Ingestion",
        simulateDescription:
          "Ingest and validate live MQTT telemetry streams from remote hardware edge nodes in real time.",
        simulateTitle: "Simulate Data Ingestion",
        simulateLogs: [
          { text: "Intercepting MQTT data packet from edge device...", tone: "default" },
          { text: "Extracting payload: Uptime 99.98%...", tone: "default" },
          { text: "Recovering ECDSA signature to verify origin...", tone: "default" },
          { text: "[PASS] Signature matches registered hardware key.", tone: "success" },
          { text: "[SUCCESS] Validated telemetry committed to network state.", tone: "success" },
        ],
      },
      {
        title: "LAYER 03: FINANCIAL ENGINE",
        subtitle: "The Incentive Router",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Incentive Router",
          description:
            "This is the economic core of a DePIN network. It reads the validated telemetry data and automatically calculates and distributes tokenized rewards to the human operators who deploy and maintain the physical hardware.",
          platformFunction: "Automated Micropayments",
        },
        codeSnippet: `function distributeEpochRewards(address[] calldata activeNodes) external onlyAdmin {
  uint256 baseReward = currentEpochPool / activeNodes.length;
  
  for(uint i=0; i < activeNodes.length; i++) {
    if (oracle.latestUptime(activeNodes[i]) > minimumThreshold) {
      _mint(registry.ownerOf(activeNodes[i]), baseReward);
    }
  }
}`,
        simAction: "Simulate Token Payout",
        simulateDescription:
          "Calculate and disburse pro-rata incentive rewards to active node operators based on verified uptime.",
        simulateTitle: "Simulate Token Payout",
        simulateLogs: [
          { text: "Initializing Epoch 491 reward distribution...", tone: "default" },
          { text: "Querying Telemetry Oracle for active node array...", tone: "default" },
          { text: "Calculating pro-rata baseline reward: 12.5 Tokens...", tone: "default" },
          { text: "Filtering nodes below 95% minimum uptime requirement...", tone: "default" },
          { text: "[SUCCESS] Batch transaction settled. Operators compensated.", tone: "success" },
        ],
      },
      {
        title: "LAYER 04: GOVERNANCE ENGINE",
        subtitle: "The Slashing Module",
        icon: ShieldAlert,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Slashing Module",
          description:
            "Physical networks require strict quality control. If a device is detected submitting spoofed data or drops offline frequently, this smart contract automatically penalizes the operator by burning their staked collateral or revoking their device identity.",
          platformFunction: "Network Security",
        },
        codeSnippet: `function penalizeNode(address node, uint256 downtime) external onlyOracle {
  require(registry.isActive(node), "Node inactive");
  
  if (downtime > criticalFaultThreshold) {
    registry.deactivate(node);
    _burn(stakedCollateral[node], slashingPenalty);
    emit NodeSlashed(node, slashingPenalty);
  }
}`,
        simAction: "Simulate Hardware Fault",
        simulateDescription:
          "Detect offline anomalies or data tampering and execute programmatic operator stake penalties.",
        simulateTitle: "Simulate Hardware Fault",
        simulateLogs: [
          { text: "Anomaly detected: Node 0x99A...11F offline for 48 hours.", tone: "default" },
          { text: "Triggering algorithmic penalizeNode() function...", tone: "default" },
          { text: "Checking critical fault parameters...", tone: "default" },
          { text: "Confirmed violation of service level agreement.", tone: "default" },
          { text: "[SUCCESS] Operator stake slashed. Node identity revoked.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Decentralized Identity is a horizontal platform capability. Here is how different sectors utilize this execution model to unify verification.",
    sectors: [
      {
        icon: Radio,
        title: "Telecommunications",
        description:
          "Deploy global 5G and WiFi hotspots by crowdsourcing the physical hardware. Independent operators deploy antennas and receive programmatic revenue directly from data consumers without relying on centralized carrier monopolies.",
        assetTypes: [
          "Decentralized 5G Corridors",
          "IoT Data Networks (LoRaWAN)",
          "Bandwidth Marketplaces",
        ],
      },
      {
        icon: Zap,
        title: "Energy & Smart Grids",
        description:
          "Connect residential solar panels and battery storage directly to a decentralized ledger. Citizens can automatically sell excess energy back to the micro-grid and earn verified carbon offset credits.",
        assetTypes: [
          "P2P Energy Trading",
          "Electric Vehicle (EV) Charging",
          "Tokenized Renewable Yield",
        ],
      },
      {
        icon: Truck,
        title: "Supply Chain & Logistics",
        description:
          "Anchor real-time spatial telemetry from delivery fleets and shipping containers. Smart contracts verify that temperature controls were maintained during transit before authorizing vendor payments.",
        assetTypes: [
          "Cold-Chain Monitoring",
          "Fleet Spatial Telemetry",
          "Automated Customs Auditing",
        ],
      },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy SCADA systems or routing native hardware telemetry, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise SCADA Bridging",
        description:
          "For industrial manufacturers and enterprise supply chains. Legacy IoT Core platforms are securely hashed and anchored into Web3 execution logic seamlessly.",
        nodes: [
          {
            label: "Legacy IoT Core",
            sublabel: "AWS IoT / Siemens MindSphere",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API Gateway",
            sublabel: "Data Validation & Hashing",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chain",
            sublabel: "Sovereign Audit Ledger",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native DePIN Execution",
        description:
          "For distributed IoT sensors and hardware architecture. Bypass legacy middleware and route sensor state hashes directly to the public execution layer.",
        nodes: [
          {
            label: "Physical Edge Device",
            sublabel: "Antennas & Hardware Wallets",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Decentralized Oracles",
            sublabel: "Data Validation Nodes",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Micropayment Routing Ledger",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["JSON-RPC PAYLOAD", "STATE EXECUTION"],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building custom hardware validation logic, telemetry indexing, and micropayment channels from scratch requires massive engineering overhead. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Hardware Logic Rules & Integrations",
      ruleCount: 15,
      sliderPercent: 28,
      traditionalMonths: 45,
      ceruleaWeeks: 16,
      methodology:
        "The legacy development timeline utilizes Web3 infrastructure benchmarks. Writing custom telemetry logic, negotiating data standards with hardware manufacturers, and deploying fragile middleware for an average application takes a baseline of 6 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your routing rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },



  //========================================data-integrity-audit-trails
  {
    slug: "data-integrity-audit-trails",
    icon: ScrollText,
    eyebrow: "Data Integrity & Audit Trails",
    headline1: "Generate immutable logs.",
    headline2: "Prove absolute truth.",
    heroDescription:
      "Replace vulnerable centralized databases with cryptographically secured, append-only ledgers. Prove data integrity instantly for SOC2, HIPAA, and legal compliance.",
    heroCta: "Contact Us",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      {
        title: "Append-Only Architecture",
        description:
          "Traditional server logs can be deleted by a compromised admin. Cerulea ledgers only allow new data to be written, making it mathematically impossible to cover tracks after a breach.",
      },
      {
        title: "Storage Abstraction",
        description:
          "Blockchains are terrible for holding heavy files. Cerulea solves this by keeping the heavy PDF or dataset off-chain, and only writing the lightweight SHA-256 fingerprint to the actual smart contract.",
      },
      {
        title: "Timestamped Provenance",
        description:
          "Every hash anchored to the network inherits the block timestamp. This provides absolute, unforgeable proof that a specific document existed at an exact second in history.",
      },
      {
        title: "Multi-Party Attestation",
        description:
          "Multiple independent organizations can co-sign a data hash on the ledger. If an aviation manufacturer and a safety inspector sign the same engine log, absolute trust is established.",
      },
      {
        title: "Zero-Friction Audits",
        description:
          "Turn grueling quarterly compliance audits into instant algorithmic checks. Regulators use an API to instantly cross-reference your internal data against the immutable ledger.",
      },
      {
        title: "GDPR Pruning Models",
        description:
          "Comply with the Right to be Forgotten by destroying the off-chain access pointer. The immutable hash remains to prove operational compliance, but the personal data is entirely disconnected.",
      },
    ],
    lifecycleTitle: "The Audit Lifecycle",
    lifecycleSubtitle:
      "Follow the exact cryptographic progression of a piece of data as it is ingested, hashed, anchored, and independently verified.",
    lifecycleSteps: [
      {
        label: "Event Ingestion",
        description:
          "A critical event occurs in an external system, such as a database update, a server login, or a sensor reading. The raw payload is captured by the Cerulea API gateway.",
        icon: Building2,
        logFilename: "cerulea_hardware_engine.log",
        logLines: [
          {
            text: "[SYS] Detecting incoming web-hook from SAP ERP...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[CMD] Extract payload: { user: 491, action: 'UPDATE_RECORD', doc: 'Q3_FIN' }",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[AUTH] Validating API key signature...",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[OK] Payload accepted into processing queue.",
            time: "08:20:53",
            tone: "success",
          },
        ],
      },
      {
        label: "Cryptographic Hashing",
        description:
          "The raw data is not placed on the blockchain. Instead, it runs through a SHA-256 algorithm to generate a unique, irreversible mathematical fingerprint of the exact file state.",
        icon: Shield,
        logFilename: "cerulea_hardware_engine.log",
        logLines: [
          {
            text: "[SYS] Initializing SHA-256 encryption engine...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[CMD] Execute keccak256(abi.encodePacked(payload))",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[SYS] Generating output hash: 0x8a9b...4f2e",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[OK] Cryptographic fingerprint successfully compiled.",
            time: "08:20:53",
            tone: "success",
          },
        ],
      },
      {
        label: "Ledger Anchoring",
        description:
          "The hash and a network timestamp are permanently anchored to the immutable ledger. The state change is propagated to all validator nodes simultaneously.",
        icon: RefreshCcw,
        logFilename: "cerulea_hardware_engine.log",
        logLines: [
          {
            text: "[SYS] Initiating L1 transaction sequence...",
            time: "08:20:53",
            tone: "secondary",
          },
          {
            text: "[CMD] call LogRegistry.anchor(0x8a9b...4f2e)",
            time: "08:20:53",
            tone: "primary",
          },
          {
            text: "[SYS] Awaiting block confirmation...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[OK] Hash permanently anchored at block 1930491.",
            time: "08:20:53",
            tone: "success",
          },
        ],
      },
      {
        label: "Absolute Verification",
        description:
          "Years later, an auditor submits the original document to the verification portal. The engine re-hashes the file and compares it to the ledger to prove the data was never altered.",
        icon: Activity,
        logFilename: "cerulea_hardware_engine.log",
        logLines: [
          {
            text: "[SYS] Auditor uploaded file: Q3_FIN.pdf...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[CMD] Calculating current file hash...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[SYS] Querying block 1930491 for historical anchor...",
            time: "08:20:53",
            tone: "default",
          },
          {
            text: "[OK] Hashes match perfectly. Data integrity verified.",
            time: "08:20:53",
            tone: "default",
          },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea handles compliance logs through highly specialized, modular smart contracts. This layered approach ensures absolute immutability while respecting complex privacy laws.",
    layers: [
      {
        title: "Layer 01: Immutable Storage",
        subtitle: "The Hash Registry",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Hash Registry",
          description:
            "The core data structure for audit compliance. It does not hold sensitive files. It maps a chronological timestamp to a specific cryptographic hash (bytes32). Once written, the network consensus rules make it mathematically impossible to delete or modify the entry.",
          platformFunction: "Immutable Storage",
        },
        codeSnippet: `contract AuditRegistry {
  struct LogEntry {
    address author;
    uint256 timestamp;
    string metadataURI;
  }
  
  mapping(bytes32 => LogEntry) public anchoredHashes;

  function anchorHash(bytes32 fileHash, string calldata uri) external {
    require(anchoredHashes[fileHash].timestamp == 0, "Hash exists");
    anchoredHashes[fileHash] = LogEntry(msg.sender, block.timestamp, uri);
    emit HashAnchored(fileHash, msg.sender);
  }
}`,
        simAction: "Simulate Data Anchoring",
        simulateDescription:
          "Anchor a unique SHA-256 file fingerprint to the append-only ledger and verify its uniqueness against existing records.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving SHA-256 fingerprint: 0x3d4a...9b1f", tone: "default" },
          { text: "Checking Level 1 Storage for hash collisions...", tone: "default" },
          { text: "[PASS] Hash is entirely unique.", tone: "success" },
          { text: "Executing anchorHash() function...", tone: "default" },
          { text: "[SUCCESS] State trie updated. Fingerprint permanently secured.", tone: "success" },
        ],
      },
      {
        title: "Layer 02: Write Permissions",
        subtitle: "The Access Controller",
        icon: Layers,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Access Controller",
          description:
            "Not everyone is allowed to write to an enterprise audit log. This middleware uses Role-Based Access Control (RBAC) to ensure only mathematically whitelisted server identities and API keys can anchor hashes to the registry.",
          platformFunction: "Immutable Storage",
        },
        codeSnippet: `contract AccessController is AccessControl {
  bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR");

  modifier onlyAuditor() {
    require(hasRole(AUDITOR_ROLE, msg.sender), "Err: Unauthorized");
    _;
  }

  function grantAuditor(address account) external onlyRole(DEFAULT_ADMIN) {
    grantRole(AUDITOR_ROLE, account);
  }
}
`,
        simAction: "Simulate Write Request",
        simulateDescription:
          "Simulate a write request from a server node: verify its role permissions against the AccessController before permitting log entry.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting anchor request from address 0x11A...C92...", tone: "default" },
          { text: "Querying AccessController for active roles...", tone: "default" },
          { text: "Checking AUDITOR_ROLE assignment...", tone: "default" },
          { text: "[PASS] Sender is an authorized compliance node.", tone: "success" },
          { text: "[SUCCESS] Transaction authorized to proceed.", tone: "success" },
        ],
      },
      {
        title: "Layer 03: Data Validation",
        subtitle: "The Cryptographic Verifier",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cryptographic Verifier",
          description:
            "A public read-only function used by external regulators. It takes an off-chain data payload, hashes it in real-time on the client side, and queries the smart contract to mathematically prove if the document existed at a specific point in time.",
          platformFunction: "Immutable Storage",
        },
        codeSnippet: `function verifyDocument(bytes32 targetHash) external view returns (bool, address, uint256) {
  LogEntry memory entry = anchoredHashes[targetHash];
  
  if (entry.timestamp == 0) {
    return (false, address(0), 0);
  }
  
  return (true, entry.author, entry.timestamp);
}`,
        simAction: "Simulate File Audit",
        simulateDescription:
          "Simulate a verification request. The system hashes your input data and checks the ledger for a matching cryptographic anchor.",
        simulateTitle: "Interactive Verification",
        simulateLogs: [
          { text: " Regulators submitted file for verification...", tone: "default" },
          { text: "Generating local keccak256 fingerprint...", tone: "default" },
          { text: "Querying Smart Contract state for 0x3d4a...9b1f...", tone: "default" },
          { text: "Record found. Timestamp: 1735689600. Author: 0x11A...C92.", tone: "default" },
          { text: "[SUCCESS] Mathematical proof of existence confirmed.", tone: "success" },
        ],
      },
      {
        title: "Layer 04: Right to be Forgotten",
        subtitle: "The GDPR Pruner",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The GDPR Pruner",
          description:
            "Blockchains are immutable, which normally conflicts with GDPR data deletion laws. This module stores PII off-chain and only anchors the pointer. When a user requests data deletion, the contract burns the cryptographic pointer, rendering the off-chain data inaccessible and compliant with deletion laws.",
          platformFunction: "Right to be Forgotten",
        },
        codeSnippet: `function pruneRecord(bytes32 fileHash) external onlyAdmin {
  require(anchoredHashes[fileHash].timestamp != 0, "No record");
  
  // Erase the off-chain URI pointer, keep the hash to prove deletion
  anchoredHashes[fileHash].metadataURI = "PRUNED_GDPR_COMPLIANCE";
  
  emit RecordPruned(fileHash, block.timestamp, msg.sender);
}`,
        simAction: "Simulate GDPR Deletion",
        simulateDescription:
          "Simulate a GDPR deletion request: burn the off-chain storage pointer while leaving the chronological hash anchor intact to prove historical execution without storing sensitive data.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Received Right-to-be-Forgotten legal request.", tone: "default" },
          { text: "Locating specific file hash 0x3d4a...9b1f...", tone: "default" },
          { text: "Executing pruneRecord() function...", tone: "default" },
          { text: "Overwriting metadata pointer to [PRUNED_GDPR_COMPLIANCE]...", tone: "default" },
          { text: "[SUCCESS] Reference destroyed. GDPR compliance achieved.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Decentralized storage is a horizontal capability. Here is how different sectors utilize this model to unify sensitive archival data.",
    sectors: [
      {
        icon: Building2,
        title: "Aviation & Aerospace",
        description:
          "Track multi-tier aircraft maintenance logs. Mechanics and safety inspectors co-sign engine repair hashes, guaranteeing that critical safety data was never backdated or manipulated.",
        assetTypes: [
          "Maintenance Logs",
          "Parts Provenance",
          "Compliance Audits",
        ],
      },
      {
        icon: Layers,
        title: "Legal & Compliance",
        description:
          "Establish an undeniable chain of custody for digital evidence and intellectual property filings. Courts can instantly verify the exact microsecond a document was authored and sealed.",
        assetTypes: [
          "Evidence Chain of Custody",
          "IP Registration",
          "Contract Sealing",
        ],
      },
      {
        icon: ScanHeart,
        title: "Healthcare & Life Sciences",
        description:
          "Anchor clinical trial data to prevent selective reporting. Regulators can algorithmically verify that pharmaceutical test results were not altered prior to FDA submission.",
        assetTypes: [
          "Clinical Trial Logs",
          "MHIPAA Access Trails",
          "Drug Provenance",
        ],
      },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy ERP databases or routing native IoT edge telemetry, Cerulea provides the exact infrastructure logging required.",
    tracks: [
      {
        title: "Track A: Enterprise ERP Bridging",
        description:
          "For compliance officers and IT operations. Legacy HTTP server logs are securely hashed and anchored into Web3 execution logic seamlessly.",
        nodes: [
          {
            label: "Legacy Database Core",
            sublabel: "SAP / Oracle Server",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API Gateway",
            sublabel: "SHA-256 Translation",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chain",
            sublabel: "Sovereign Audit Ledger",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native Edge Logging",
        description:
          "For distributed IoT sensors and hardware architecture. Bypass legacy middleware and route sensor state hashes directly to the public execution layer.",
        nodes: [
          {
            label: "Physical Edge Device",
            sublabel: "IoT Sensors & Wallets",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Decentralized Oracles",
            sublabel: "Data Validation Nodes",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Final Settlement Ledger",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["JSON-RPC PAYLOAD", "STATE EXECUTION"],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building custom compliance logging systems and role-based access controllers from scratch requires specialized engineers and massive external audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Hardware Logic Rules & Integrations",
      ruleCount: 15,
      sliderPercent: 15,
      traditionalMonths: 45,
      ceruleaWeeks: 16,
      methodology:
        "The legacy development timeline utilizes data governance benchmarks. Writing custom hashing logic, negotiating compliance standards with external regulators, and deploying fragile middleware for an average application takes a baseline of 6 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your routing rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },


  //========================================carbon-credit-trading
  {
    slug: "carbon-credit-trading",
    icon: Leaf,
    eyebrow: "Platform Use Case",
    headline1: "Tokenize the atmosphere.",
    headline2: "Guarantee carbon integrity.",
    heroDescription: "Convert verifiable sequestration into liquid digital assets. Deploy high-integrity carbon marketplaces with real-time oracle verification and atomic retirement certificates.",
    heroCta: "Deploy Credit Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Real-Time dMRV", description: "Replace slow manual audits. Smart contracts ingest satellite and IoT data to continuously verify environmental impact, ensuring that every credit represents a mathematically proven tonne of carbon." },
      { title: "Fractional Offsetting", description: "High-throughput consensus enables micro-offsets. Small businesses or retail consumers can purchase fractions of a carbon credit to offset specific products or transactions instantly at checkout." },
      { title: "Verifiable Retirement", description: "Guarantee single-count retirement. When a credit is retired, the smart contract executes a permanent burn of the token and issues a cryptographic receipt linked to the specific corporate buyer." },
      { title: "Supply-Side Transparency", description: "Trace every credit back to its origin. Buyers can query the block height of the sequestration event, the specific drone footage or satellite scan used, and the verified project developer." },
      { title: "Automated Grant Routing", description: "Connect sequestration targets directly to capital. Global environmental grants are automatically released to local project operators based on verified environmental success milestones." },
      { title: "Marketplace Liquidity", description: "Turn environmental impact into a liquid asset class. Credits are compiled using global standards, allowing them to be traded on decentralized or enterprise marketplaces with zero OTC friction." },
    ],
    lifecycleTitle: "The Carbon Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of an ecological offset from project initiation to corporate retirement.",
    lifecycleSteps: [
      {
        label: "Project Origination",
        description: "A carbon sequestration project (like a reforestation initiative) is registered. The smart contract anchors its geographical coordinates, methodology, and expected baseline sequestration to the ledger.",
        icon: Landmark,
        logFilename: "cerulea_carbon_engine.log",
        logLines: [
          { text: "[SYS] Initializing Eco-Asset Manifest...", time: "08:20:53", tone: "default" },
          { text: "[CMD] registerProject { type: \"FORESTRY\", area: \"AMZ_88\", methodology: \"VERRA_VM0047\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying satellite coordinates and baseline data...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Project registered. State anchored at block 1966020.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "MRV Data Ingestion",
        description: "Digital Measurement, Reporting, and Verification (dMRV) begins. IoT sensors and satellite oracles stream real-time biomass data to the contract to prove sequestration has actually occurred.",
        icon: Wallet,
        logFilename: "cerulea_carbon_engine.log",
        logLines: [
          { text: "[SYS] Polling Biomass Satellite Oracle...", time: "08:20:53", tone: "default" },
          { text: "[CMD] queryNDVI(proj_id: \"AMZ_88\", timeframe: \"1YR\")", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Metric validated: 15,000 tonnes of CO2e sequestered.", time: "08:20:53", tone: "default" },
          { text: "[OK] Verification successful. Authorized to mint credits.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Credit Tokenization",
        description: "The smart contract mints carbon credits as non-fungible or semi-fungible tokens. Each credit holds an immutable link back to its specific batch of verified sequestration data.",
        icon: ArrowLeftRight,
        logFilename: "cerulea_carbon_engine.log",
        logLines: [
          { text: "[SYS] Executing Minting Authority protocol...", time: "08:20:53", tone: "default" },
          { text: "[CMD] mintCredits(Project: \"AMZ_88\", amount: 15000, serial: \"2025-BR-88\")", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Sealing cryptographic proof of verification...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Credits distributed to project owner wallet.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Final Retirement",
        description: "A corporation purchases the credits to offset their emissions. The smart contract \"burns\" the tokens, permanently removing them from circulation and issuing a verifiable retirement certificate.",
        icon: Network,
        logFilename: "cerulea_carbon_engine.log",
        logLines: [
          { text: "[SYS] Detecting retirement intent from Corp_0x992...", time: "08:20:53", tone: "default" },
          { text: "[CMD] retire(15000, reason: \"FY2025_ESG_OFFSET\")", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Permanent burn executed. Generating cryptographic proof...", time: "08:20:53", tone: "default" },
          { text: "[OK] Certificate issued. Double-counting mathematically impossible.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea handles environmental assets through specialized, modular smart contracts. This layered approach ensures that carbon impact is verified, tokenized, and retired without any risk of double-counting.",
    layers: [
      {
        title: "Identity & Metadata",
        subtitle: "The Asset Passport",
        icon: Vote,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Asset Passport",
          description: "The foundational data layer. It manages the unique identifiers and serial numbers for every carbon credit. It stores immutable links back to the project source, vintage year, and specific methodology used for measurement.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet: "contract CarbonRegistry {\n  struct CreditBatch {\n    address projectOwner;\n    uint256 vintage;\n    string methodology;\n    bytes32 dataProof;\n    bool isRetired;\n  }\n  \n  mapping(uint256 => CreditBatch) public registry;\n\n  function mint(uint256 id, bytes32 proof) external onlyAuthority {\n    registry[id] = CreditBatch(msg.sender, 2025, \"VM0047\", proof, false);\n  }\n}",
        simAction: "Simulate Asset Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling credit metadata for Vintage 2025...", tone: "default" },
          { text: "Hashing project methodology documents...", tone: "default" },
          { text: "Locking Project Owner ID: 0x7B2...F11...", tone: "default" },
          { text: "Writing batch state to Level 1 Storage...", tone: "default" },
          {text: "[SUCCESS] 15,000 credits registered on-chain.",tone:"success"}
        ],
      },
      {
        title: "Impact Validation",
        subtitle: "The Verification Hook",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verification Hook",
          description: "Bypasses manual auditors. This module connects to satellite and IoT data feeds to verify that carbon was actually sequestered before any credit is released for trade, preventing \"greenwashing\" at the protocol level.",
          platformFunction: "Impact Validation",
        },
        codeSnippet: "contract MRVOracle {\n  function validateImpact(uint256 projectId) external returns (bool) {\n    (uint256 carbonValue, bytes memory signature) = satelliteProvider.getLatest(projectId);\n    require(verifyProvider(signature), \"Invalid Data Source\");\n    return carbonValue >= threshold;\n  }\n}",
        simAction: "Simulate Impact Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying NASA NDVI satellite data stream...", tone: "default" },
          { text: "Extracting biomass density for sector BR_AMZ_88...", tone: "default" },
          { text: "Mathematical verification of growth metrics...", tone: "default" },
          { text: "[PASS] Delta matches requested credit volume.", tone: "success" },
          { text: "[SUCCESS] Impact verified. Authorized to unlock tokens.", tone: "success" },
        ],
      },
      {
        title: "Anti-Double Counting",
        subtitle: "The Burn Protocol",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Burn Protocol",
          description: "The end-of-life executor. When a credit is used to offset an emission, this contract permanently disables the token. It creates an irreversible state change that prevents the same credit from being sold again.",
          platformFunction: "Anti-Double Counting",
        },
        codeSnippet: "function retireCredits(uint256 batchId, uint256 amount) external {\n    require(!registry[batchId].isRetired, \"Already Retired\");\n    _burn(msg.sender, batchId, amount);\n    registry[batchId].isRetired = true;\n    emit OffsetCertified(msg.sender, batchId, amount);\n}",
        simAction: "Simulate Credit Retirement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer initiating offset for 500 tonnes CO2...", tone: "default" },
          { text: "Validating ownership of Batch #8842...", tone: "default" },
          { text: "Executing permanent burn of 500 units...", tone: "default" },
          { text: "Updating global retirement registry...", tone: "default" },
          { text: "[SUCCESS] Credits destroyed. Retirement certificate generated.", tone: "success" },
        ],
      },
      {
        title: "Instant Settlement",
        subtitle: "The Atomic Market",
        icon: Cpu,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Atomic Market",
          description: "Eliminates OTC settlement risk. This contract bundles the credit transfer and the stablecoin payment into a single atomic transaction, ensuring project developers receive capital the exact millisecond a buyer clicks purchase.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet: "function atomicTrade(uint256 batchId, uint256 price) external payable {\n    address seller = registry[batchId].owner;\n    _transferCredits(seller, msg.sender, batchId);\n    payable(seller).transfer(msg.value);\n    emit TradeSettled(batchId, seller, msg.sender, msg.value);\n}",
        simAction: "Simulate Atomic Trade",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer locking 25,000 USDC in trade escrow...", tone: "default" },
          { text: "Verifying Batch #8842 availability in Seller wallet...", tone: "default" },
          { text: "Executing dual-state swap in single block...", tone: "default" },
          { text: "[SUCCESS] Capital to developer. Credits to corporate buyer.", tone: "success" },
          { text: "Transaction settled with absolute finality.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Carbon Credit Trading is a horizontal capability. Here is how different sectors utilize this model to accelerate the transition to Net Zero.",
    sectors: [
      { icon: Fingerprint, title: "Energy & Utilities", description: "Automate the issuance of Renewable Energy Certificates (RECs). Solar and wind grids stream output telemetry directly to the ledger, which tokenizes the energy impact and allows utilities to sell verified offsets to industrial clients.", assetTypes: ["Grid RECs", "Renewable Bonds", "Decentralized Grids"] },
      { icon: FlaskConical, title: "Aviation & Transportation", description: "Embed offsetting directly into the passenger experience. Airlines utilize high-throughput ledgers to allow millions of travelers to purchase and retire specific sequestration tokens at the point of booking.", assetTypes: ["Retail Flight Offsets", "SAF Provenance", "Fleet Emissions Logs"] },
      { icon: Archive, title: "Heavy Industry & Manufacturing", description: "Manage compliance with sovereign carbon tax regimes. Industrial facilities anchor their emission telemetry to the ledger and automatically trade against their carbon allowances in a real-time decentralized order book.", assetTypes: ["Emissions Allowances", "Compliance Audit Logs", "Supply Chain Scope 3"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy environmental registries or routing native Web3 impact data, Cerulea provides the exact infrastructure routing required.",
    tracks: [
      {
        title: "Track A: Institutional Registry Bridging",
        description: "For global carbon registries like Verra or Gold Standard. Legacy HTTP requests from existing environmental databases are translated into secure on-chain batch identifiers automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Eco-Registry", sublabel: "Standard Body Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Data Hashing & Verification", icon: PieChart, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Inventory Ledger", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Decarbonization Execution",
        description: "For decentralized climate DApps and P2P offsetting. Bypass legacy middle-men and route satellite data signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Edge Device / App", sublabel: "IoT Sensors & Mobile Wallets", icon: Copyright, accent: false },
          { label: "Decentralized Oracles", sublabel: "Impact Data Tallying", icon: Gift, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Retirement Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom dMRV indexers and non-fungible retirement protocols from scratch requires specialized sustainability engineers and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Sequestration Rules & Oracles",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes ReFi infrastructure benchmarks. Writing custom ERC-721 retirement logic, negotiating data standards with satellite providers, and deploying fragile middleware for an average application takes a baseline of 9 months. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your environmental rules into pre audited, battle tested WebAssembly (WASM) binaries instantly.",
    },
    logSystemName: "Operational log system",
  },
  
  //========================================cbdcs-stablecoins
  {
    slug: "cbdcs-stablecoins",
    icon: ShieldAlert,
    eyebrow: "Platform Use Case",
    headline1: "Architect sovereign currencies.",
    headline2: "Digitize national treasuries.",
    heroDescription: "Deploy Central Bank Digital Currencies (CBDCs) and institutional stablecoins with mathematically guaranteed reserve audits, strict AML compliance, and zero-knowledge privacy.",
    heroCta: "Deploy Currency Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Programmable Monetary Policy", description: "Central banks can encode inflation rates, interest yields, and stimulus distribution logic directly into the currency's execution layer, automating macroeconomic actions." },
      { title: "Automated Proof of Reserves", description: "Decentralized oracles continuously audit physical bank accounts in real time. The smart contract mathematically prevents minting if physical fiat collateral does not match the token supply." },
      { title: "Dynamic Tiered KYC", description: "The ledger enforces transaction limits natively. Unverified retail wallets are capped at low daily volumes, while fully credentialed institutional nodes can route unlimited liquidity." },
      { title: "Zero-Knowledge Privacy", description: "Citizens retain financial privacy. Retail CBDC transactions can utilize advanced cryptography to verify balances and settle transfers without exposing payer identities to the public state." },
      { title: "Offline Payment Syncing", description: "Support disaster resilience. Hardware wallets can conduct encrypted peer-to-peer transfers offline, automatically reconciling with the central ledger once network connectivity is restored." },
      { title: "Interbank Settlement", description: "Deploy dedicated Wholesale CBDCs designed strictly for financial institutions, allowing immediate cross-border atomic clearing without relying on slow correspondent banking networks." },
    ],
    lifecycleTitle: "The Currency Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a sovereign currency as it is minted by a treasury, audited, and circulated through the economy.",
    lifecycleSteps: [
      {
        label: "Treasury Minting",
        description: "The Central Bank or Corporate Treasury locks physical fiat currency in a trusted reserve. Multi-signature governance executes a smart contract to mint the exact digital equivalent.",
        icon: HeartPulse,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Initializing Minting Authority protocol...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Construct MintRequest { asset: e-USD, amount: 500,000,000 }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Awaiting 5/7 Board of Governors signatures...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Quorum reached. Digital supply generated and anchored.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Wholesale Distribution",
        description: "The newly minted digital currency is routed to authorized commercial banks or regional treasury nodes via high-throughput institutional payment channels.",
        icon: Activity,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Fetching Tier-1 Commercial Bank registry...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Execute transfer(Commercial_Bank_A, 100,000,000)", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying institutional compliance credentials...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Wholesale liquidity successfully distributed.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Regulated Retail Transfer",
        description: "A retail user initiates a peer-to-peer payment. The network intercepts the transfer to mathematically verify that neither party is on an active sanctions list before settling the funds.",
        icon: Shield,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Intercepting retail transfer payload...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Query Decentralized AML Oracle for Receiver 0x9A2...F44", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Validating Zero-Knowledge proof of citizenship...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Compliance verified. Atomic settlement executed.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Supply Burn & Redemption",
        description: "A commercial entity requests to convert digital currency back to physical fiat. The smart contract burns the digital tokens and automatically issues a SWIFT or RTGS clearing instruction.",
        icon: Search,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Redemption request detected from Institutional Node.", time: "08:20:53", tone: "default" },
          { text: "[CMD] Execute burn(e-USD, 25,000,000)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Pushing API webhook to legacy core banking system...", time: "08:20:53", tone: "default" },
          { text: "[OK] Tokens destroyed. Physical fiat released from reserve.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "A sovereign CBDC requires absolute precision. Cerulea handles macroeconomic logic through specialized, deeply regulated contract modules designed to protect national security.",
    layers: [
      {
        title: "Balance Management",
        subtitle: "The Reserve Ledger",
        icon: Layers,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reserve Ledger",
          description: "The foundational data structure for the sovereign currency. It strictly manages decimal precision, total circulating supply, and account balances while exposing standardized interfaces for institutional wallets.",
          platformFunction: "Balance Management",
        },
        codeSnippet: "contract CBDCLedger is Initializable {\n  uint256 private _totalSupply;\n  mapping(address => uint256) private _balances;\n\n  function _transfer(address sender, address recipient, uint256 amount) internal {\n    _balances[sender] = _balances[sender].sub(amount);\n    _balances[recipient] = _balances[recipient].add(amount);\n    emit Transfer(sender, recipient, amount);\n  }\n}",
        simAction: "Simulate Ledger Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Accessing Level 1 Storage...", tone: "default" },
          { text: "Deducting 50,000 e-USD from 0x8F1...C33...", tone: "default" },
          { text: "Adding 50,000 e-USD to 0x4A2...B91...", tone: "default" },
          { text: "Emitting Transfer Event to Network Indexers...", tone: "default" },
          { text: "[SUCCESS] State trie updated and hashed to block 2104992.", tone: "success" },
        ],
      },
      {
        title: "Supply Control",
        subtitle: "The Minting Authority",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Minting Authority",
          description: "Governments and treasuries require absolute control over inflation. This module enforces strict multi-signature governance, requiring cryptographically verified consent from multiple board members before expanding or contracting the currency supply.",
          platformFunction: "Supply Control",
        },
        codeSnippet: "contract MintingAuthority {\n  function mint(address target, uint256 amount) external {\n    require(multiSig.hasQuorum(currentProposal), \"Missing signatures\");\n    require(oracle.verifyReserves() >= totalSupply() + amount, \"Unbacked\");\n    \n    _mint(target, amount);\n    emit SupplyExpanded(amount, block.timestamp);\n  }\n}",
        simAction: "Simulate Supply Expansion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initiating multi-sig governance protocol...", tone: "default" },
          { text: "Received 5 of 7 required Treasury signatures.", tone: "default" },
          { text: "Querying Chainlink Oracle for physical reserve audit...", tone: "default" },
          { text: "[PASS] Fiat reserves match requested mint volume.", tone: "success" },
          { text: "[SUCCESS] 10,000,000 units added to circulating supply.", tone: "success" },
        ],
      },
      {
        title: "Automated AML",
        subtitle: "The Compliance Hook",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Hook",
          description: "Unlike permissionless crypto, sovereign currencies must obey international law. This middleware hook pauses every transaction to query decentralized OFAC and AML registries, automatically freezing funds tied to illicit activity.",
          platformFunction: "Automated AML",
        },
        codeSnippet: "modifier checkCompliance(address from, address to) {\n  require(!amlOracle.isSanctioned(from), \"Err: Sender Flagged\");\n  require(!amlOracle.isSanctioned(to), \"Err: Receiver Flagged\");\n  require(volumeTracker.getDaily(from) <= kycLimits[from], \"Limit Exceeded\");\n  _;\n}",
        simAction: "Simulate AML Screening",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting transfer request...", tone: "default" },
          { text: "Extracting destination address 0x9A4...2B1...", tone: "default" },
          { text: "Querying decentralized AML and OFAC watchlists...", tone: "default" },
          { text: "Evaluating 24-hour sender volume limits against KYC tier...", tone: "default" },
          { text: "[SUCCESS] Compliance checks passed. Proceeding.", tone: "success" },
        ],
      },
      {
        title: "Shielded Transfers",
        subtitle: "The Privacy Engine",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Privacy Engine",
          description: "To protect civilian privacy, retail CBDC transfers can utilize Zero-Knowledge (ZK) proofs. This contract validates the mathematical legitimacy of a transaction (proving sufficient funds) without exposing the sender identity or balance to the public ledger.",
          platformFunction: "Shielded Transfers",
        },
        codeSnippet: "function executeShieldedTransfer(bytes calldata zkProof, bytes32 nullifier) external {\n  require(!nullifierHashes[nullifier], \"Double spend detected\");\n  require(zkVerifier.verifyTx(zkProof), \"Invalid ZKP\");\n  \n  nullifierHashes[nullifier] = true;\n  _updateEncryptedState();\n  emit ShieldedTransferExecuted();\n}",
        simAction: "Simulate Shielded Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving zk-SNARK payload from retail mobile wallet...", tone: "default" },
          { text: "Verifying cryptographic nullifier to prevent double-spending...", tone: "default" },
          { text: "Executing elliptic curve pairing validation...", tone: "default" },
          { text: "Mathematical validation returned: TRUE.", tone: "default" },
          { text: "[SUCCESS] Funds routed anonymously. State encrypted.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Fiat tokenization is a horizontal capability. Here is how different sectors utilize this execution model to unify centralized liquidity.",
    sectors: [
      { icon: Boxes, title: "Central & Commercial Banks", description: "Central banks deploy sovereign retail CBDCs to modernize their national economy, while commercial banks utilize strictly regulated wholesale stablecoins for high-speed interbank clearing.", assetTypes: ["Retail CBDCs", "Wholesale Settlement", "Programmable Stimulus"] },
      { icon: LockKeyhole, title: "Corporate Treasuries", description: "Multinational enterprises deploy internal, closed-loop stablecoins to instantly route capital between global subsidiaries without incurring devastating FX conversion rates and SWIFT wire fees.", assetTypes: ["Internal Treasury Routing", "Vendor Escrow Payments", "Payroll Disbursement"] },
      { icon: ShieldCheck, title: "FinTech & DeFi Protocols", description: "DeFi lending pools and algorithmic trading platforms utilize rigorously backed enterprise stablecoins to provide users with a secure, non-volatile unit of account for margin trading and yield generation.", assetTypes: ["Algorithmic Trading Pairs", "DeFi Lending Collateral", "Yield Farming Reserves"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are integrating core banking architecture or deploying native Web3 payment portals, Cerulea provides the exact infrastructure routing required.",
    tracks: [
      {
        title: "Track A: Institutional Treasury Bridging",
        description: "For central banks and enterprise treasuries. Legacy RTGS networks are securely bridged to the blockchain to manage the issuance and destruction of digital currency.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Banking Core", sublabel: "RTGS / Central Bank DB", icon: Heart, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reserve Validation", icon: BrainCircuit, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Minting Ledger", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Retail Execution",
        description: "For retail CBDC wallets and Neo-banks. Route peer-to-peer transfers securely through decentralized AML oracle networks directly to the execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Retail Payment App", sublabel: "Digital Wallets & PoS", icon: Briefcase, accent: false },
          { label: "Decentralized Oracles", sublabel: "Sanctions & KYC Checks", icon: Lock, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Settlement Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom macroeconomic compliance ledgers and multi-sig minting protocols from scratch requires specialized engineers and massive external audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Compliance Rules & Features",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology: "The legacy development timeline utilizes institutional DeFi benchmarks. Writing custom ERC-20 monetary policy, negotiating compliance data standards with oracle networks, and deploying fragile middleware for an average currency takes a baseline of 8 months, plus significant variable time for necessary SEC-compliant security audits. Building the exact same logical architecture via Cerulea requires a baseline of 3 weeks. This acceleration is achieved because Cerulea Studio visually translates your monetary rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================cross-border-settlements
  {
    slug: "cross-border-settlements",
    icon: Braces,
    eyebrow: "Platform Use Case",
    headline1: "Bypass correspondent banks.",
    headline2: "Settle globally in milliseconds.",
    heroDescription: "Eliminate SWIFT delays, wire fees, and trapped capital. Deploy atomic smart contracts to route, convert, and settle international transactions instantly.",
    heroCta: "Contact Us",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Atomic Swaps", description: "Execution and currency delivery occur simultaneously within a single ledger block. This absolute finality mathematically eliminates counterparty risk and chargeback fraud." },
      { title: "Fiat-Pegged Liquidity", description: "Transactions are settled using enterprise-grade stablecoins backed 1:1 by physical currency, completely insulating corporate treasuries from cryptocurrency price volatility." },
      { title: "Automated Market Makers", description: "Foreign exchange routing bypasses institutional order books entirely. Decentralized liquidity pools algorithmicly determine fair exchange rates in real time without broker spreads." },
      { title: "ISO 20022 Translation", description: "Cerulea automatically translates blockchain transaction hashes into standard ISO 20022 messaging formats, allowing legacy core banking software to process Web3 payments natively." },
      { title: "Embedded AML Interceptors", description: "Smart contracts are programmed to hold execution until decentralized oracle networks confirm the destination wallet is not present on global OFAC or sanctions watchlists." },
      { title: "Gas-Abstracted Routing", description: "Enterprise clients do not need to hold native crypto tokens to pay for network fees. Network execution costs are silently abstracted and paid by background treasury relayers." },
    ],
    lifecycleTitle: "The Clearing Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a global payment as it is verified, converted, and settled on the Cerulea network.",
    lifecycleSteps: [
      {
        label: "Payment Initiation",
        description: "The sender initiates a payment in their local fiat currency. The front-end application generates a cryptographic payload detailing the target destination, required currency, and maximum acceptable slippage.",
        icon: FingerprintPattern,
        logFilename: "cerulea_clearing_engine.log",
        logLines: [
          { text: "[SYS] Intercepting payment intent payload...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Construct TransferRequest { src: USD, dst: EUR, amount: 50000 }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying sender wallet signature...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Intent verified. Requesting foreign exchange oracle rates.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Oracle Sanctions Check",
        description: "Before any funds leave the originating wallet, the transaction is cross-referenced against global OFAC and AML watchlists via decentralized compliance oracles.",
        icon: Hammer,
        logFilename: "cerulea_clearing_engine.log",
        logLines: [
          { text: "[SYS] Triggering zero-knowledge AML check...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Query Decentralized Identity Registry for Receiver 0x8F2...B91", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Awaiting multiple oracle attestations...", time: "08:20:53", tone: "default" },
          { text: "[OK] Clean entity status confirmed. Proceeding to routing.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Liquidity Routing (FX Swap)",
        description: "The smart contract searches connected Decentralized Exchanges (DEXs) or enterprise liquidity pools to find the optimal exchange rate, locking in the conversion path atomically.",
        icon: RefreshCcw,
        logFilename: "cerulea_clearing_engine.log",
        logLines: [
          { text: "[SYS] Initializing cross-chain liquidity aggregator...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Route: USDC -> Wrapped EUR", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Simulating pool depth and slippage parameters...", time: "08:20:53", tone: "default" },
          { text: "[OK] Optimal execution path secured. Locking liquidity.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Atomic Finality",
        description: "The entire transaction executes in a single block. The sender is debited, the FX swap occurs, and the receiver is credited simultaneously. If any step fails, the entire transaction reverts automatically.",
        icon: Server,
        logFilename: "cerulea_clearing_engine.log",
        logLines: [
          { text: "[SYS] Executing multi-step atomic transaction...", time: "08:20:53", tone: "default" },
          { text: "[CMD] burn(USDC, 50000) && mint(wEUR, 46102)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Updating receiver balance on ledger state...", time: "08:20:53", tone: "default" },
          { text: "[OK] Transaction settled with absolute finality. Block 19024881.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea handles global capital flows through highly specialized, modular smart contracts. This layered approach ensures liquidity routing, regulatory compliance, and atomic finality occur safely in a single transaction.",
    layers: [
      {
        title: "Capital Digitization",
        subtitle: "The Fiat-Pegged Ledger",
        icon: IdCardLanyard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fiat-Pegged Ledger",
          description: "The foundational data structure for institutional stablecoins. It ensures that digital tokens minted on the network maintain a strict 1-to-1 mathematical parity with physical fiat reserves held in trusted custodial bank accounts.",
          platformFunction: "Capital Digitization",
        },
        codeSnippet: "contract ReserveLedger is Initializable {\n  uint256 public totalFiatReserves;\n  \n  function mint(address to, uint256 amount) external onlyCustodian {\n    require(verifyReserveOracle() >= totalSupply() + amount, \"Insufficient Reserves\");\n    _mint(to, amount);\n    emit CapitalDigitized(to, amount);\n  }\n}",
        simAction: "Simulate Reserve Minting",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Connecting to Custodial Bank API via Chainlink Node...", tone: "default" },
          { text: "Auditing physical USD reserve balances...", tone: "default" },
          { text: "[PASS] Reserves exceed current token supply.", tone: "success" },
          { text: "Executing mint() for 5,000,000 USDC...", tone: "default" },
          { text: "[SUCCESS] Capital successfully digitized into network state.", tone: "success" },
        ],
      },
      {
        title: "Automated Compliance",
        subtitle: "The Sanctions Interceptor",
        icon: ShieldCog,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sanctions Interceptor",
          description: "International finance requires strict adherence to Anti-Money Laundering (AML) laws. This middleware hook pauses every cross-border execution to verify that the receiving wallet is not flagged on global regulatory watchlists.",
          platformFunction: "Automated Compliance",
        },
        codeSnippet: "modifier checkSanctions(address recipient) {\n  require(\n    !ofacOracle.isSanctioned(recipient),\n    \"Err: Destination address flagged\"\n  );\n  require(\n    volumeTracker.getDailyVolume(msg.sender) <= maxLimit,\n    \"Err: Exceeds daily transfer limit\"\n  );\n  _;\n}",
        simAction: "Simulate AML Screening",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting cross-border transfer request...", tone: "default" },
          { text: "Extracting destination address 0x9A4...2B1...", tone: "default" },
          { text: "Querying decentralized OFAC watchlists...", tone: "default" },
          { text: "Evaluating 24-hour sender volume limits...", tone: "default" },
          { text: "[SUCCESS] Compliance checks passed. Proceeding.", tone: "success" },
        ],
      },
      {
        title: "Algorithmic Conversion",
        subtitle: "The FX Router",
        icon: Sparkles,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The FX Router",
          description: "Bypasses traditional correspondent banks. This automated market maker (AMM) logic utilizes mathematical bonding curves to swap one fiat-pegged stablecoin for another instantly, ensuring optimal conversion rates with zero intermediary spread.",
          platformFunction: "Algorithmic Conversion",
        },
        codeSnippet: "function executeFXSwap(address tokenIn, address tokenOut, uint256 amountIn, uint256 minOut) \n  external returns (uint256 amountOut) \n{\n  amountOut = liquidityPool.getDerivedRate(tokenIn, tokenOut, amountIn);\n  require(amountOut >= minOut, \"Err: Excessive slippage\");\n  \n  _transfer(msg.sender, address(this), amountIn);\n  _transfer(address(this), msg.sender, amountOut);\n}",
        simAction: "Simulate FX Swap",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initiating JPY to USD currency swap...", tone: "default" },
          { text: "Calculating invariant curve: x * y = k...", tone: "default" },
          { text: "Validating requested slippage tolerance (0.5%)...", tone: "default" },
          { text: "[PASS] Expected output 8,402 USD.", tone: "success" },
          { text: "[SUCCESS] Liquidity pools rebalanced atomically.", tone: "success" },
        ],
      },
      {
        title: "Atomic Delivery",
        subtitle: "The Clearing Vault",
        icon: SquareTerminal,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Clearing Vault",
          description: "The final executor. This contract bundles the compliance check, the FX swap, and the final payment delivery into a single atomic transaction. If any step fails due to liquidity drops or regulatory flags, the entire action reverts, ensuring capital is never stuck in transit.",
          platformFunction: "Atomic Delivery",
        },
        codeSnippet: "function atomicSettle(PaymentParams calldata params) external nonReentrant {\n  _pullFunds(msg.sender, params.amount);\n  \n  uint256 swapped = _fxRouter.executeFXSwap(params.src, params.dst, params.amount);\n  _complianceHook.checkSanctions(params.receiver);\n  \n  _deliverFunds(params.receiver, swapped);\n  emit GlobalSettlement(msg.sender, params.receiver, swapped);\n}",
        simAction: "Simulate Atomic Clearing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Bundling transaction payload into unified block state...", tone: "default" },
          { text: "Step 1/3: Escrowing 10,000 GBP from sender...", tone: "default" },
          { text: "Step 2/3: Executing FX Router protocol...", tone: "default" },
          { text: "Step 3/3: Delivering 12,850 USD to receiver...", tone: "default" },
          { text: "[SUCCESS] All conditions met. State updated with absolute finality.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Atomic settlement is a horizontal capability. Here is how different sectors utilize this execution model to unify global liquidity.",
    sectors: [
      { icon: ScanHeart, title: "Remittance & Neo-Banking", description: "Enable retail customers to send money internationally to family or vendors. Cerulea handles the currency conversion and settlement instantly, allowing neo-banks to offer zero-fee global transfers.", assetTypes: ["P2P Global Remittance", "Retail FX Exchange", "Wallet Load/Unload"] },
      { icon: ScanLine, title: "Multinational B2B Procurement", description: "Enterprise supply chains require massive capital to move across borders to pay foreign manufacturers. Smart contracts eliminate the 3-day clearing delay, ensuring vendors ship goods faster.", assetTypes: ["Vendor Invoice Clearing", "Global Payroll Distribution", "Trade Finance Escrow"] },
      { icon: QrCode, title: "E-Commerce & Digital Marketplaces", description: "Allow global customers to pay in their local currency while the merchant receives their preferred fiat natively. Atomic conversion completely eliminates costly payment gateway surcharges.", assetTypes: ["Merchant Payouts", "Dynamic Checkout Pricing", "Gig Economy Payouts"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bypassing legacy SWIFT messaging or routing native Web3 stablecoins, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise SWIFT Bridging",
        description: "For institutional banks and corporate treasuries. Legacy ISO 20022 and SWIFT messaging formats are securely ingested and translated into atomic smart contract executions.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Banking Core", sublabel: "SWIFT / ISO 20022 Server", icon: Users, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Message Translation", icon: Leaf, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Regulated Clearing State", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native DeFi Remittance",
        description: "For retail remittance apps and Web3 neo-banks. Bypass legacy middleware entirely and route atomic stablecoin transfers directly to the public execution layer.",
        connectorLabels: ["JSON-RPC PAYLOAD", "ATOMIC CLEARING"],
        nodes: [
          { label: "Retail Payment App", sublabel: "React DApp & Digital Wallets", icon: Wallet, accent: false },
          { label: "Decentralized Liquidity", sublabel: "AMM Routing Protocol", icon: ArrowLeftRight, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Settlement Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom liquidity pools and SWIFT integration middleware from scratch requires specialized engineers and massive external audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Payment Corridors & Integrations",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes FinTech infrastructure benchmarks. Writing custom settlement logic, negotiating data standards with liquidity providers, and deploying fragile middleware for an average application takes a baseline of 6 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your routing rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================cryptographic-voting-systems
  {
    slug: "cryptographic-voting-systems",
    icon: Vote,
    eyebrow: "Platform Use Case",
    headline1: "Verify every ballot.",
    headline2: "Guarantee tamper-proof elections.",
    heroDescription: "Deploy end-to-end verifiable voting frameworks for national elections, corporate boards, and DAOs. Execute tamper-proof tallies with zero-knowledge voter privacy.",
    heroCta: "Deploy Voting Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "End-to-End Verifiability", description: "Every voter receives a cryptographic receipt. This allows them to verify their vote was recorded correctly without exposing their choice, while anyone can verify the final tally math is perfect." },
      { title: "Zero-Knowledge Identity", description: "Bypass the privacy trade-off. Use ZK-Proofs to confirm a voter is eligible (e.g., is over 18 and a citizen) without ever recording their name or PII on the blockchain ledger." },
      { title: "Homomorphic Tallying", description: "Execute mathematical operations on encrypted data. Smart contracts count the votes while they are still in their encrypted state, ensuring the result is only revealed at the deadline." },
      { title: "Sybil Resistance", description: "Bind digital identities to physical biometrics or trusted government credentials. Cerulea mathematically guarantees that one human equals exactly one vote, preventing automated spam attacks." },
      { title: "Anti-Coercion Protocols", description: "Deploy mix-networks or decoy ballot logic. These advanced cryptographic structures allow voters to change their minds safely, preventing external parties from verifying how they voted." },
      { title: "Global Tally Audit", description: "The entire election history is a chain of hashes. Independent observers run their own nodes to verify the election in real time, making it impossible to inject fake ballots or delete real ones." },
    ],
    lifecycleTitle: "The Election State Machine",
    lifecycleSubtitle: "",
    lifecycleSteps: [
      {
        label: "Voter Credentialing",
        description: "A user proves their eligibility to vote (e.g., citizenship or shareholding) using a decentralized identity. The system issues a blind cryptographic credential that allows them to vote anonymously.",
        icon: Building2,
        logFilename: "cerulea_voting_engine.log",
        logLines: [
          { text: "[SYS] Initializing Identity Resolver...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Verify Credential { type: \"Citizen_ID\", region: \"District_12\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Generating blind signature for voter wallet...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Voter registered. Anonymous ballot token issued.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Ballot Submission",
        description: "The voter signs their choice using their private key. The choice is encrypted before being sent to the ledger, ensuring that no one, not even the network admins, can see the vote before the tally.",
        icon: ScrollText,
        logFilename: "cerulea_voting_engine.log",
        logLines: [
          { text: "[SYS] Receiving encrypted ballot payload...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Execute castVote(Encrypted_Payload, Voter_Proof)", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying ZK-Proof of eligibility...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Ballot accepted and anchored to block 1977021.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Homomorphic Tallying",
        description: "Votes are counted while still encrypted. Using homomorphic encryption, the smart contract mathematically combines the encrypted choices to find the winner without ever decrypting individual ballots.",
        icon: Cpu,
        logFilename: "cerulea_voting_engine.log",
        logLines: [
          { text: "[SYS] Voting period closed. Starting Tally Phase...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Execute addEncryptedBallots(Election_ID_99)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Processing 150,000 cryptographic witnesses...", time: "08:20:53", tone: "default" },
          { text: "[OK] Final aggregate sum calculated in encrypted state.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Verifiable Decryption",
        description: "The aggregate result is decrypted using a threshold of keys held by independent trustees. A mathematical proof of the tally is published, allowing anyone to verify the results are correct.",
        icon: Fingerprint,
        logFilename: "cerulea_voting_engine.log",
        logLines: [
          { text: "[SYS] Collecting 5 of 7 Trustee decryption shares...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Reveal Result { Option_A: 82%, Option_B: 18% }", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Compiling proof of tally integrity...", time: "08:20:53", tone: "default" },
          { text: "[OK] Election finalized. Results anchored for public audit.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea handles digital democracy through specialized, modular smart contracts. This layered approach ensures that identity, privacy, and tallies are managed with absolute mathematical integrity.",
    layers: [
      {
        title: "Vote Storage",
        subtitle: "The Immutable Urn",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immutable Urn",
          description: "The foundational layer that stores the encrypted vote payloads. It ensures that once a vote is cast, it cannot be deleted or modified. Every entry is chronologically anchored to the ledger with a cryptographic link to the previous vote.",
          platformFunction: "Vote Storage",
        },
        codeSnippet: "contract BallotRegistry {\n  struct Vote {\n    bytes32 encryptedChoice;\n    bytes zkProof;\n    uint256 blockTimestamp;\n  }\n  \n  mapping(uint256 => Vote[]) public ballots;\n\n  function castBallot(uint256 id, bytes32 choice, bytes calldata proof) external {\n    ballots[id].push(Vote(choice, proof, block.timestamp));\n    emit BallotCast(id, block.timestamp);\n  }\n}",
        simAction: "Simulate Vote Cast",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting encrypted choice: 0x8a9b...f2e1...", tone: "default" },
          { text: "Checking Level 1 Storage for duplicate signatures...", tone: "default" },
          { text: "[PASS] Vote is unique and valid.", tone: "success" },
          { text: "Writing ballot to persistent ledger state...", tone: "default" },
          { text: "[SUCCESS] Encrypted choice secured in block 2104992.", tone: "success" },
        ],
      },
      {
        title: "Sybil Resistance",
        subtitle: "The Eligibility Gate",
        icon: Archive,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Eligibility Gate",
          description: "This layer enforces \"one person, one vote\" without compromising privacy. It utilizes Zero-Knowledge proofs to verify the voter holds a valid credential from an authorized registry without revealing the voters actual identity.",
          platformFunction: "Sybil Resistance",
        },
        codeSnippet: "contract IdentityVerifier {\n  function verifyEligibility(bytes calldata zkProof, bytes32 nullifier) \n    external view returns (bool) \n  {\n    require(!usedNullifiers[nullifier], \"Already voted\");\n    require(zkSnark.verify(zkProof), \"Invalid Credential\");\n    return true;\n  }\n}",
        simAction: "Simulate ID Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving ZK-Proof from voter wallet...", tone: "default" },
          { text: "Verifying nullifier 0x992...a1f against used list...", tone: "default" },
          { text: "[PASS] Voter has not cast a previous ballot.", tone: "success" },
          { text: "Executing ZK-SNARK verification on credential...", tone: "default" },
          { text: "[SUCCESS] Eligibility confirmed. Privacy maintained.", tone: "success" },
        ],
      },
      {
        title: "Election Logic",
        subtitle: "The Consensus Counter",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consensus Counter",
          description: "The logic center that determines the winner. It can be configured for First-Past-The-Post, Ranked-Choice, or Quadratic voting. It aggregates the encrypted ballots into a final result using purely mathematical execution.",
          platformFunction: "Election Logic",
        },
        codeSnippet: "contract TallyEngine {\n  function calculateTally(uint256 id) external onlyTrustees {\n    for(uint i=0; i < ballots[id].length; i++) {\n      _sumEncrypted(ballots[id][i].encryptedChoice);\n    }\n    emit TallyCompleted(id, block.timestamp);\n  }\n}",
        simAction: "Simulate Rank Tally",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Closing voting period for Election #99...", tone: "default" },
          { text: "Initializing batch aggregation protocol...", tone: "default" },
          { text: "Tallying 150,000 ballots using homomorphic math...", tone: "default" },
          { text: "Consolidating Option A, B, and C totals...", tone: "default" },
          { text: "[SUCCESS] Final aggregate sum compiled and sealed.", tone: "success" },
        ],
      },
      {
        title: "Outcome Anchoring",
        subtitle: "The Truth Bridge",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Truth Bridge",
          description: "The final layer that pushes the verified result to external systems (like a corporate boardroom dashboard or a government registry). It generates a cryptographic proof of the entire election that anyone can verify independently.",
          platformFunction: "Outcome Anchoring",
        },
        codeSnippet: "contract ResultOracle {\n  function finalizeResult(uint256 id, bytes32 resultHash) external {\n    require(verifier.isTallyVerified(id, resultHash), \"Integrity Fail\");\n    externalRegistry.anchorResult(id, resultHash);\n    emit ElectionFinalized(id, resultHash);\n  }\n}",
        simAction: "Simulate Final Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling full election integrity proof...", tone: "default" },
          { text: "Trustee quorum signed: 5 of 7 verified.", tone: "default" },
          { text: "Anchoring final result hash to Government L1...", tone: "default" },
          { text: "Pushing webhook to Corporate Dashboard...", tone: "default" },
          { text: "[SUCCESS] Result definitively anchored for public audit.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Cryptographic voting is a horizontal capability. Here is how different sectors utilize this execution model to unify collective trust.",
    sectors: [
      { icon: Radio, title: "Public Governance & Elections", description: "Modernize national and local voting. Smart contracts provide a tamper-proof \"digital urn\" that can be audited by millions of citizens in real time, drastically reducing the cost and time required for manual ballot recounts.", assetTypes: ["National Referendums", "District Council Votes", "Citizen Registries"] },
      { icon: Copyright, title: "Corporate Boardrooms", description: "Enable frictionless proxy voting for global shareholders. Fractional shareowners cast ballots directly from their digital wallets, with the smart contract automatically executing the resulting boardroom resolution or budget payout.", assetTypes: ["Shareholder Resolutions", "Budget Allocation", "Executive Appointments"] },
      { icon: Gift, title: "Unions & Cooperatives", description: "Decentralize member decision-making. Unions utilize quadratic voting to ensure that specialized interests are balanced fairly across the entire membership, with results anchored to a sovereign consortium ledger.", assetTypes: ["Collective Bargaining", "Co-op Profit Sharing", "Internal Policy Polling"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy identity databases or routing native cryptographic ballots, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Institutional Identity Bridging",
        description: "For governments and large enterprises. Legacy HTTP requests from existing citizen or employee databases are translated into secure ZK-ballot tokens automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy ID Database", sublabel: "Government / HR Server", icon: Zap, accent: false },
          { label: "Cerulea API Gateway", sublabel: "ZK-Token Translation", icon: ShieldAlert, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Tally State", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Verifiable Democracy",
        description: "For community referendums and decentralized collectives. Bypass legacy middleware and route cryptographic choice signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Citizen Mobile App", sublabel: "React Client & Node JS", icon: Activity, accent: false },
          { label: "Consensus Network", sublabel: "ZK-Verifier Protocol", icon: Shield, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Settlement Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom homomorphic tally engines and ZK-credential registries from scratch requires specialized world-class cryptographers and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Voting Parameters & Integrations",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 22,
      ceruleaWeeks: 7,
      methodology: "The legacy development timeline utilizes Web3 cybersecurity benchmarks. Writing custom homomorphic encryption tally logic, negotiating W3C identity data standards, and deploying fragile middleware for an average voting application takes a baseline of 12 months. Building the exact same logical architecture via Cerulea requires a baseline of 4 weeks. This acceleration is achieved because Cerulea Studio visually translates your democratic rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual cryptographic coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================daos-corporate-governance
  {
    slug: "daos-corporate-governance",
    icon: Layers,
    eyebrow: "Platform Use Case",
    headline1: "Digitize boardrooms.",
    headline2: "Automate corporate actions.",
    heroDescription: "Replace slow proxy voting and opaque treasury management with mathematically guaranteed governance frameworks executed directly on the Cerulea engine.",
    heroCta: "Deploy Governance Contracts",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Cryptographic Tallying", description: "Votes are cast via digital signatures directly on the ledger. This guarantees absolute transparency and makes it mathematically impossible to manipulate or double-count proxy votes." },
      { title: "Quadratic Weighting", description: "Deploy advanced voting math. Quadratic algorithms reduce the disproportionate power of massive \"whale\" accounts, enforcing more equitable, democratic decisions across retail shareholders." },
      { title: "Delegated Liquid Democracy", description: "Stakeholders can securely delegate their voting power to trusted proxy representatives. If the proxy votes against the user's wishes, the delegation can be instantly revoked before the deadline." },
      { title: "Automated Execution", description: "When a vote passes, the resulting action is executed autonomously by the smart contract. There is no reliance on a manual central treasury to wire funds or honor the community's decision." },
      { title: "Timelock Security", description: "Passed proposals enter a mandatory cryptographic waiting period before execution. This ensures that minority stakeholders have time to exit the network if a hostile takeover occurs." },
      { title: "Verifiable Corporate Actions", description: "Every single board resolution, treasury payout, and protocol upgrade is permanently hashed to the public state, providing an instant, immutable audit trail for external regulators." },
    ],
    lifecycleTitle: "The Governance Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a corporate resolution from initial proposal to autonomous network execution.",
    lifecycleSteps: [
      {
        label: "Proposal Submission",
        description: "A stakeholder holding the required minimum token weight submits a cryptographic proposal. This payload contains the exact executable code that will run if the vote passes.",
        icon: Database,
        logFilename: "cerulea_consensus_engine.log",
        logLines: [
          { text: "[SYS] Intercepting proposal transaction payload...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Construct Proposal { target: Treasury, action: \"transfer(50k USDC)\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying proposer holds > 1% total supply...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Proposal anchored to ledger. Voting period scheduled.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Cryptographic Voting",
        description: "Stakeholders cast their votes by signing a transaction with their private keys. The system calculates their voting power based on the historical token snapshot at the exact block the proposal was created.",
        icon: Truck,
        logFilename: "cerulea_consensus_engine.log",
        logLines: [
          { text: "[SYS] Voting period activated at block 19445100...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Ingesting signatures from Delegated Proxies...", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Validating signature and historical token weight...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] 4.5M FOR / 1.2M AGAINST. Signatures cryptographically sealed.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Consensus & Quorum Check",
        description: "When the voting period ends, the smart contract tallies the exact token weights. It mathematically determines if the minimum participation quorum and majority thresholds were met.",
        icon: Scale,
        logFilename: "cerulea_consensus_engine.log",
        logLines: [
          { text: "[SYS] Voting deadline reached. Halting signature ingestion...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Calculate final tally vs required 20% Quorum...", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Quorum Achieved (31.4%). Majority threshold passed (78%).", time: "08:20:53", tone: "default" },
          { text: "[OK] Proposal status updated to: QUEUED.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Autonomous Execution",
        description: "After passing a mandatory security timelock, the smart contract autonomously executes the original code payload. Funds are moved or parameters are changed without any human administration.",
        icon: Boxes,
        logFilename: "cerulea_consensus_engine.log",
        logLines: [
          { text: "[SYS] 48-hour security timelock expired.", time: "08:20:53", tone: "default" },
          { text: "[CMD] Triggering autonomous execution protocol...", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Routing 50,000 USDC from DAO Treasury to Grantee...", time: "08:20:53", tone: "default" },
          { text: "[OK] Execution confirmed. Corporate state updated definitively.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea compiles multi-layered governance frameworks capable of handling billions of dollars in enterprise treasury value with mathematical certainty.",
    layers: [
      {
        title: "Weight & Delegation",
        subtitle: "The Voting Ledger",
        icon: LockKeyhole,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Voting Ledger",
          description: "The foundational token layer. Unlike standard tokens, this contract maintains a chronological checkpoint of all account balances. It allows stakeholders to temporarily delegate their voting weight to trusted proxies without transferring the actual financial asset.",
          platformFunction: "Weight & Delegation",
        },
        codeSnippet: "contract GovernanceToken is ERC20Votes {\n  function delegate(address delegatee) external {\n    _delegate(msg.sender, delegatee);\n    emit DelegateChanged(msg.sender, currentDelegate, delegatee);\n  }\n\n  function getPastVotes(address account, uint256 blockNumber) \n    external view returns (uint256)\n  {\n    return _getPastVotes(account, blockNumber);\n  }\n}",
        simAction: "Simulate Vote Delegation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Stakeholder 0x8F1...C33 initiating delegation...", tone: "default" },
          { text: "Selecting Proxy Address: 0x4A2...B91...", tone: "default" },
          { text: "Executing delegate() function...", tone: "default" },
          { text: "Shifting 250,000 voting weight to proxy...", tone: "default" },
          { text: "[SUCCESS] Checkpoint updated at block 19445100.", tone: "success" },
        ],
      },
      {
        title: "Action Definition",
        subtitle: "The Proposal Core",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proposal Core",
          description: "This module acts as the digital boardroom. It ingests complex, multi-step transaction payloads (the actual code to be executed). It strictly enforces proposal thresholds, ensuring only heavily invested stakeholders can initiate network-wide votes.",
          platformFunction: "Action Definition",
        },
        codeSnippet: "contract DAOBoardroom {\n  struct Proposal {\n    address[] targets;\n    bytes[] calldatas;\n    uint256 startBlock;\n    uint256 endBlock;\n  }\n\n  function propose(address[] targets, bytes[] calldatas, string desc) \n    external returns (uint256 proposalId)\n  {\n    require(getVotes(msg.sender) >= proposalThreshold, \"Weight too low\");\n    // ...store proposal logic\n  }\n}",
        simAction: "Simulate Proposal Creation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting propose() transaction...", tone: "default" },
          { text: "Querying Layer 1 for sender's token weight...", tone: "default" },
          { text: "[PASS] Sender holds 1.5% of total supply (Threshold is 1%).", tone: "default" },
          { text: "Compiling target execution calldata...", tone: "default" },
          { text: "[SUCCESS] Proposal 84 queued for voting period.", tone: "success" },
        ],
      },
      {
        title: "Algorithmic Tallying",
        subtitle: "The Consensus Calculator",
        icon: Heart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consensus Calculator",
          description: "This contract contains the logic for counting votes. It can be configured for simple 1-token-1-vote counting, or advanced Quadratic Voting which mathematically reduces the power of massive \"whale\" accounts to elevate the voices of retail community members.",
          platformFunction: "Algorithmic Tallying",
        },
        codeSnippet: "function castVote(uint256 proposalId, uint8 support) external {\n  uint256 weight = token.getPastVotes(msg.sender, proposalSnapshot(proposalId));\n  \n  if (useQuadraticVoting) {\n    weight = math.sqrt(weight);\n  }\n  \n  proposalVotes[proposalId][support] += weight;\n  emit VoteCast(msg.sender, proposalId, support, weight);\n}",
        simAction: "Simulate Quadratic Vote",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving signature from wallet 0x33A...B12...", tone: "default" },
          { text: "Checking historical block snapshot for token balance...", tone: "default" },
          { text: "Raw token balance: 10,000. Applying Quadratic formula...", tone: "default" },
          { text: "Final voting weight calculated: 100 votes.", tone: "default" },
          { text: "[SUCCESS] 100 votes added to 'FOR' tally.", tone: "success" },
        ],
      },
      {
        title: "Delayed Execution",
        subtitle: "The Execution Timelock",
        icon: BrainCircuit,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Execution Timelock",
          description: "The ultimate security failsafe. Even if a malicious proposal somehow achieves a quorum, this contract forces a mandatory waiting period (e.g., 48 hours) before execution. This gives the community or corporate board time to halt the action if the protocol is under attack.",
          platformFunction: "Delayed Execution",
        },
        codeSnippet: "contract TimelockController {\n  function schedule(bytes32 id, uint256 delay) external onlyRole(PROPOSER) {\n    require(delay >= getMinDelay(), \"Delay too short\");\n    timestamps[id] = block.timestamp + delay;\n  }\n\n  function execute(address target, bytes calldata data) external payable {\n    require(block.timestamp >= timestamps[id], \"Timelock active\");\n    (bool success, ) = target.call{value: msg.value}(data);\n    require(success, \"Execution failed\");\n  }\n}",
        simAction: "Simulate Timelock Execution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Attempting to execute Proposal 84...", tone: "default" },
          { text: "Checking Timelock status...", tone: "default" },
          { text: "[PASS] Mandatory 48-hour delay has expired.", tone: "default" },
          { text: "Firing target smart contract calldata...", tone: "default" },
          { text: "[SUCCESS] Treasury funds routed autonomously.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Cryptographic voting is a horizontal capability. Here is how different sectors utilize this execution model to unify decision making.",
    sectors: [
      { icon: RefreshCw, title: "Investment Syndicates & VCs", description: "Form on-chain venture funds where global Limited Partners (LPs) vote on which startups to fund. The treasury smart contract automatically routes the capital if the deal quorum is reached.", assetTypes: ["Deal Flow Voting", "Automated Treasury Escrow", "LP Cap Table Management"] },
      { icon: Briefcase, title: "Corporate Boardrooms", description: "Eliminate manual proxy voting logistics. Issue fractional corporate shares that allow institutional and retail investors to vote on executive board actions securely and transparently.", assetTypes: ["Shareholder Resolutions", "Delegated Proxy Voting", "Transparent Audits"] },
      { icon: Lock, title: "Open-Source & Web3 Protocols", description: "Decentralize the management of massive software protocols. Global developers propose code upgrades and token holders vote to merge the PR, executing the software update autonomously.", assetTypes: ["Protocol Upgrades", "Grant Distributions", "Community Signaling"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy corporate proxy software or running a native Web3 collective, Cerulea provides the exact infrastructure routing required.",
    tracks: [
      {
        title: "Track A: Enterprise Shareholder Bridging",
        description: "For institutional boards. Legacy HTTP requests from proxy voting platforms are translated into secure smart contract signatures seamlessly.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Proxy Software", sublabel: "Broadridge / Broadridge API", icon: Globe, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Signature Translation", icon: Braces, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Tally Ledger", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Web3 DAO Execution",
        description: "For native Web3 protocols and investment clubs. Route cryptographic signatures directly from DApps to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Voter Portal", sublabel: "React DApp & Digital Wallets", icon: Hammer, accent: false },
          { label: "Consensus Network", sublabel: "Validator Weight Checking", icon: RefreshCcw, accent: true },
          { label: "Cerulea Public L1", sublabel: "Treasury Routing Protocol", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom governance algorithms and timelock security parameters from scratch requires specialized engineers and massive external audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Governance Parameters & Integrations",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes Web3 enterprise benchmarks. Writing custom governance logic, negotiating quorum thresholds, and deploying fragile middleware for an average application takes a baseline of 6 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your business rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================decentralized-ai-compute
  {
    slug: "decentralized-ai-compute",
    icon: IdCardLanyard,
    eyebrow: "Platform Use Case",
    headline1: "Verify every inference.",
    headline2: "Decentralize AI compute.",
    heroDescription: "Deploy decentralized GPU clusters and verifiable AI inference networks. Distribute compute tasks across a sovereign fabric of nodes with mathematical proof of execution.",
    heroCta: "Deploy Compute Clusters",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Verifiable Inference", description: "Bypass the \"black box\" problem. Use Zero-Knowledge proofs to mathematically verify that a specific AI model was run correctly on specific input data without re-calculating the model on-chain." },
      { title: "Sovereign GPU Orchestration", description: "Eliminate reliance on centralized cloud providers. Cerulea allows organizations to build private compute grids using distributed hardware, managed entirely by smart contract governance." },
      { title: "Automated Compute Escrow", description: "Requesters lock capital in an atomic vault. Funds are only released to the hardware provider once the network cryptographically validates the successful completion of the AI task." },
      { title: "Weight Confidentiality", description: "Protect proprietary models. Deploy tasks using Trusted Execution Environments (TEEs) where model weights remain encrypted even while being processed by third-party hardware nodes." },
      { title: "Edge Intelligence Bridging", description: "Route AI tasks directly to edge hardware. Cerulea enables low-latency localized compute for IoT and robotics while maintaining a global immutable audit trail of every decision." },
      { title: "Incentivized Data Training", description: "Decentralize the training process. Distribute micro-rewards to data providers and hardware operators based on the verified mathematical contribution to model performance improvements." },
    ],
    lifecycleTitle: "The Compute Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of an AI task from initial request to verified result settlement.",
    lifecycleSteps: [
      {
        label: "Model Request Submission",
        description: "A developer or application submits an AI inference or training task. The request defines the required hardware parameters, such as GPU VRAM and TFLOPS, and locks the bounty in escrow.",
        icon: ShieldCog,
        logFilename: "cerulea_neural_engine.log",
        logLines: [
          { text: "[SYS] Intercepting AI Compute payload...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Define Task { type: \"Inference\", model: \"Llama-3-70B\", vram_req: \"48GB\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Escrowing 250 USDC from requester wallet...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Task anchored. Broadcasting compute requirements to worker nodes.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Deterministic Matching",
        description: "The smart contract analyzes active worker telemetry. It matches the task to a verified compute provider that meets the exact hardware requirements and jurisdictional compliance rules.",
        icon: Sparkles,
        logFilename: "cerulea_neural_engine.log",
        logLines: [
          { text: "[SYS] Scanning Global Cluster Registry...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Find Node { status: \"IDLE\", hardware_verified: true, region: \"US_EAST\" }", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Selecting Provider_0x992 (A100 Cluster)...", time: "08:20:53", tone: "default" },
          { text: "[OK] Handshake established. Routing encrypted weights to provider.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Off-Chain Execution",
        description: "The worker node executes the AI task in a secure environment. The heavy computation happens off-chain, but the node generates a lightweight cryptographic proof of the execution.",
        icon: SquareTerminal,
        logFilename: "cerulea_neural_engine.log",
        logLines: [
          { text: "[SYS] Initializing local WASM neural environment...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Loading model weights into VRAM...", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Execution cycle started. Processing 4,096 tokens...", time: "08:20:53", tone: "default" },
          { text: "[OK] Computation complete. Generating zk-SNARK execution proof.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Cryptographic Settlement",
        description: "The smart contract verifies the cryptographic proof. If the math checks out, the escrowed funds are released to the provider instantly and the AI output is returned to the user.",
        icon: ScanHeart,
        logFilename: "cerulea_neural_engine.log",
        logLines: [
          { text: "[SYS] Receiving result and ZK-Proof on Cerulea L1...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Execute verifyExecution(proof_data, output_hash)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Verification Status: [VALID]. Releasing escrow...", time: "08:20:53", tone: "default" },
          { text: "[OK] Rewards settled to provider. Result delivered to DApp.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages distributed AI through specialized, modular smart contracts. This architecture ensures compute integrity while automating reward settlement across global GPU clusters.",
    layers: [
      {
        title: "Job Definition",
        subtitle: "The Task Ledger",
        icon: ScanLine,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Task Ledger",
          description: "The foundational data layer. It registers the exact parameters of every AI task, including the model architecture, the required hardware tier, and the cryptographic hash of the input data to ensure zero-tampering.",
          platformFunction: "Job Definition",
        },
        codeSnippet: "contract ComputeRegistry {\n  struct AITask {\n    address requester;\n    bytes32 inputHash;\n    uint16 vramRequired;\n    uint256 bounty;\n    bool isProcessed;\n  }\n  \n  mapping(uint256 => AITask) public jobs;\n\n  function postJob(bytes32 input, uint16 vram) external payable {\n    jobs[jobCount++] = AITask(msg.sender, input, vram, msg.value, false);\n    emit JobBroadcast(jobCount, vram);\n  }\n}",
        simAction: "Simulate Job Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling task manifest for LLM Inference...", tone: "default" },
          { text: "Locking 250 USDC into Task Escrow #491...", tone: "default" },
          { text: "Setting hardware constraint: H100_80GB_NODE...", tone: "default" },
          { text: "Writing job state to Level 1 Storage...", tone: "default" },
          { text: "[SUCCESS] AI Task successfully broadcast to network.", tone: "success" },
        ],
      },
      {
        title: "Resource Pairing",
        subtitle: "The Orchestration Logic",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Orchestration Logic",
          description: "This module acts as the networks dispatcher. It maintains a real-time table of available GPU clusters and their performance telemetry, pairing compute supply with demand via deterministic execution.",
          platformFunction: "Resource Pairing",
        },
        codeSnippet: "contract ResourceMatcher {\n  function matchWorker(uint256 jobId) external returns (address) {\n    Worker memory w = getBestIdleWorker(jobs[jobId].vramRequired);\n    require(w.addr != address(0), \"No hardware available\");\n    activeTasks[jobId] = w.addr;\n    return w.addr;\n  }\n}",
        simAction: "Simulate Node Matching",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting MatchRequest for Job #491...", tone: "default" },
          { text: "Querying Global Worker Registry for idle GPUs...", tone: "default" },
          { text: "Node 0x4A2 (RTX 4090) rejected: Insufficient VRAM.", tone: "default" },
          { text: "Node 0x7B2 (A100 Cluster) selected: Hardware Match.", tone: "default" },
          { text: "[SUCCESS] Provider 0x7B2 assigned to execution path.", tone: "success" },
        ],
      },
      {
        title: "Mathematical Integrity",
        subtitle: "The ZK-Inference Prover",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The ZK-Inference Prover",
          description: "The cryptographic core. It takes the output generated by the worker and its accompanying ZK-Proof to verify that the AI was actually run on the correct data without re-executing the heavy model on-chain.",
          platformFunction: "Mathematical Integrity",
        },
        codeSnippet: "contract ZKProver {\n  function verifyAIResult(uint256 jobId, bytes calldata proof) external view returns (bool) {\n    require(verifier.verify(proof, jobs[jobId].inputHash), \"Invalid Computation\");\n    return true;\n  }\n}",
        simAction: "Simulate Result Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving Inference Result for Job #491...", tone: "default" },
          { text: "Loading ZK-SNARK verification parameters...", tone: "default" },
          { text: "Cross-referencing compute trace against input hash...", tone: "default" },
          { text: "[PASS] Cryptographic witness confirms valid execution.", tone: "default" },
          { text: "[SUCCESS] AI output verified as authentic.", tone: "success" },
        ],
      },
      {
        title: "Automated Settlement",
        subtitle: "The Financial Router",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Financial Router",
          description: "The final settlement layer. Once verification is complete, this contract releases the bounty to the hardware provider and routes a small protocol fee to the network treasury, concluding the cycle.",
          platformFunction: "Automated Settlement",
        },
        codeSnippet: "function finalizeJob(uint256 jobId) external onlyVerifier {\n    address worker = activeTasks[jobId];\n    uint256 payout = jobs[jobId].bounty;\n    \n    payable(worker).transfer(payout * 95 / 100);\n    payable(treasury).transfer(payout * 5 / 100);\n    delete jobs[jobId];\n}",
        simAction: "Simulate Bounty Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Triggering atomic settlement for Job #491...", tone: "default" },
          { text: "Calculating pro-rata worker payout (237.50 USDC)...", tone: "default" },
          { text: "Calculating network protocol fee (12.50 USDC)...", tone: "default" },
          { text: "Executing parallel state transfers...", tone: "default" },
          { text: "[SUCCESS] Capital settled. Reward cycle finalized.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Decentralized AI is a horizontal capability. Here is how different sectors utilize this model to unify intelligence and compute power.",
    sectors: [
      { icon: Landmark, title: "LLM Inference & Agents", description: "Deploy large language models across a sovereign grid. Companies can run massive model inference without sending sensitive data to a single cloud provider, ensuring privacy through distributed cryptographic execution.", assetTypes: ["Private LLM Clusters", "Autonomous AI Agents", "Edge NLP Processing"] },
      { icon: Wallet, title: "Distributed Model Training", description: "Train foundational models using crowdsourced hardware. The network manages the distribution of gradient updates and verifies the mathematical contribution of each worker node to prevent adversarial data poisoning.", assetTypes: ["Crowdsourced Training", "Federated Learning", "Fine-Tuning Markets"] },
      { icon: ArrowLeftRight, title: "Rendering & Visual Compute", description: "Execute heavy visual tasks like 3D rendering or high-resolution image generation. Smart contracts handle the partitioning of frames across the network and reassemble the results after cryptographic verification.", assetTypes: ["Render Farm Networks", "Generative Art Engines", "Spatial Asset Design"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy enterprise AI workloads or deploying native decentralized inference, Cerulea provides the exact routing required.",
    tracks: [
      {
        title: "Track A: Enterprise AI Hybrid Bridging",
        description: "For institutional data teams. Legacy HTTP requests from internal AI pipelines are translated into secure decentralized compute tasks automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Internal AI Pipeline", sublabel: "Python / PyTorch Env", icon: Network, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Workload Translation", icon: Vote, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Worker Registry", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Verifiable Inference",
        description: "For Web3 AI DApps and agents. Bypass legacy middleware and route cryptographic compute signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "AI Agent / DApp", sublabel: "React Client & Node JS", icon: ScrollText, accent: false },
          { label: "Consensus Network", sublabel: "ZK-Verifier Protocol", icon: Cpu, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Settlement Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom ZK-proving circuits for AI models and distributed GPU indexing software from scratch requires world-class cryptographers and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Model Provers & Cluster Integrations",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes Web3 cryptography benchmarks. Writing custom Zero-Knowledge circuits for model verification, negotiating P2P networking protocols for GPU orchestration, and deploying fragile middleware for an average AI application takes a baseline of 6 months. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your neural compute rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================decentralized-storage-archiving
  {
    slug: "decentralized-storage-archiving",
    icon: FlaskConical,
    eyebrow: "Platform Use Case",
    headline1: "Resilient, decentralized archival.",
    headline2: "Unify siloed data.",
    heroDescription: "Deploy redundant storage clusters with cryptographic proofs of possession, self-healing shard replication, and permanent archival anchoring on the Cerulea grid.",
    heroCta: "Deploy Storage Nodes",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Erasure-Coded Redundancy", description: "Bypass the fragility of single-server storage. Files are split into shards and distributed globally. If multiple nodes fail, the network uses mathematical parity to reconstruct the original data perfectly." },
      { title: "Self-Healing Protocols", description: "Automate network health. When the ledger detects that a storage node has gone offline, it autonomously triggers a replication sequence to restore the required redundancy level on a new node." },
      { title: "Proof of Space-Time", description: "Remove the need to trust \"honest nodes\". Storage providers must submit periodic cryptographic proofs that they are physically reserving the requested space and maintaining the data over time." },
      { title: "Content-Addressable Ids", description: "Files are retrieved by their cryptographic fingerprint (CID), not a URL. This ensures that the data you retrieve is exactly what you uploaded, making data tampering mathematically impossible." },
      { title: "De-duplicated Storage", description: "Optimize global disk space. The network identifies duplicate shards across different users and only stores one physical copy while maintaining independent ownership records, drastically reducing costs." },
      { title: "Cold Archive Economics", description: "Deploy long-term storage models. By utilizing underused enterprise hardware and autonomous incentive cycles, Cerulea provides archival costs significantly lower than centralized cloud giants." },
    ],
    lifecycleTitle: "The Archival Lifecycle",
    lifecycleSubtitle: "Follow the cryptographic progression of a file as it is encrypted, sharded, distributed, and independently verified.",
    lifecycleSteps: [
      {
        label: "Encryption & Sharding",
        description: "A file is encrypted locally and split into small, redundant chunks (shards) using erasure coding. This ensures that even if several storage nodes go offline, the file remains fully reconstructible.",
        icon: Archive,
        logFilename: "cerulea_storage_engine.log",
        logLines: [
          { text: "[SYS] Initializing local encryption engine...", time: "08:20:53", tone: "default" },
          { text: "[CMD] shardFile { size: \"4GB\", redundancy: \"3x\", shards: 256 }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Generating AES-256 keys for User_0x7B2...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] File sharded and encrypted. Preparing global distribution.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Global Distribution",
        description: "The shards are distributed across a decentralized network of independent storage providers. The smart contract anchors the location of each shard to a content-addressed identifier (CID).",
        icon: Workflow,
        logFilename: "cerulea_storage_engine.log",
        logLines: [
          { text: "[SYS] Scanning for whitelisted Storage Nodes...", time: "08:20:53", tone: "default" },
          { text: "[CMD] distributeShards(CID: \"QmXoy...39\", count: 256)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Routing shards via P2P protocol to 45 unique locations...", time: "08:20:53", tone: "default" },
          { text: "[OK] Distribution complete. Redundancy verified across 3 continents.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Proof of Replication",
        description: "Nodes must prove they are actually storing the unique shards assigned to them. They generate cryptographic proofs (PoRep) that are verified by the smart contract every few minutes.",
        icon: PieChart,
        logFilename: "cerulea_storage_engine.log",
        logLines: [
          { text: "[SYS] Initiating mandatory Proof_of_Replication cycle...", time: "08:20:53", tone: "default" },
          { text: "[CMD] generateProof(Node_99, CID: \"QmXoy...39\")", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Validating cryptographic witness on L1...", time: "08:20:53", tone: "default" },
          { text: "[OK] Node_99 verified. Integrity attestation anchored to block 198820.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Atomic Retrieval",
        description: "When the user requests the file, the network fetches the required shards from the fastest available nodes. The shards are reassembled and decrypted locally by the user wallet.",
        icon: Radio,
        logFilename: "cerulea_storage_engine.log",
        logLines: [
          { text: "[SYS] Fetch request detected: \"Archive_2024.zip\"", time: "08:20:53", tone: "default" },
          { text: "[CMD] getShardsFrom(Global_Index_Table)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Reassembling 256 shards... Decrypting payload...", time: "08:20:53", tone: "default" },
          { text: "[OK] File successfully retrieved with absolute integrity.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages distributed archives through specialized, modular smart contracts. This layered approach ensures that content identifiers, integrity proofs, and economic incentives are handled with absolute security.",
    layers: [
      {
        title: "Job & CID Mapping",
        subtitle: "The Metadata Index",
        icon: Copyright,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Metadata Index",
          description: "The foundational data layer. It maps specific users to their content identifiers (CIDs) and storage contracts. It maintains the \"directory\" of where data shards are located across the decentralized grid.",
          platformFunction: "Job & CID Mapping",
        },
        codeSnippet: "contract StorageRegistry {\n  struct StorageOrder {\n    address user;\n    string cid;\n    uint256 size;\n    uint256 expiry;\n    bool isVerified;\n  }\n  \n  mapping(string => StorageOrder) public fileTable;\n\n  function registerFile(string calldata cid, uint256 size) external payable {\n    fileTable[cid] = StorageOrder(msg.sender, cid, size, block.timestamp + 365 days, false);\n  }\n}",
        simAction: "Simulate Metadata Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling storage manifest for 'Backup_V1.sql'...", tone: "default" },
          { text: "Locking 50.00 USDC into renewal escrow...", tone: "default" },
          { text: "Generating CID: QmXoyp...vS39...", tone: "default" },
          { text: "Writing entry to Level 1 Storage Registry...", tone: "default" },
          { text: "[SUCCESS] Metadata permanently anchored to network index.", tone: "success" },
        ],
      },
      {
        title: "Continuous Verification",
        subtitle: "The Integrity Guard",
        icon: Gift,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Integrity Guard",
          description: "Bypasses the \"trust\" requirement. This module periodically challenges storage nodes to submit cryptographic proofs that they still possess the data. It verifies Proof of Space-Time (PoSt) natively on the ledger.",
          platformFunction: "Continuous Verification",
        },
        codeSnippet: "contract ProvingHook {\n  function submitProof(string calldata cid, bytes calldata proof) external {\n    require(verifier.verifyPoSt(cid, msg.sender, proof), \"Invalid Proof\");\n    registry.markVerified(cid);\n    emit ProofAccepted(cid, msg.sender);\n  }\n}",
        simAction: "Simulate State Challenge",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Issuing periodic challenge to Node_0x4A2...", tone: "default" },
          { text: "Receiving ZK-SNARK proof of data possession...", tone: "default" },
          { text: "Executing on-chain verification protocol...", tone: "default" },
          { text: "[PASS] Proof mathematically valid. Data is safe.", tone: "default" },
          { text: "[SUCCESS] Node reputation incremented by +1.0.", tone: "success" },
        ],
      },
      {
        title: "Streaming & Delivery",
        subtitle: "The Access Router",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Access Router",
          description: "The logic core for getting data back. It manages retrieval permissions and handles the atomic exchange between users paying for data and nodes serving shards, ensuring high-speed delivery.",
          platformFunction: "Streaming & Delivery",
        },
        codeSnippet: "function initiateRetrieval(string calldata cid) external payable {\n    address provider = selectFastestNode(cid);\n    Escrow.lock(msg.value);\n    _routeRequest(provider, cid);\n  }\n\n  function finalizeRetrieval(string calldata cid) external {\n    Escrow.releaseToProvider(cid);\n  }\n}",
        simAction: "Simulate Data Fetch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "User 0x7B2 requesting 'Report.pdf'...", tone: "default" },
          { text: "Identifying nearest node with CID availability...", tone: "default" },
          { text: "Opening sub-cent payment channel to Provider...", tone: "default" },
          { text: "Streaming shards through encrypted tunnel...", tone: "default" },
          { text: "[SUCCESS] 24 MB retrieved. Escrow released to Node.", tone: "success" },
        ],
      },
      {
        title: "Network Security",
        subtitle: "The Fault Protocol",
        icon: ShieldAlert,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fault Protocol",
          description: "The final accountability layer. If a node fails a proof challenge or loses data shards, this contract autonomously burns their staked collateral and triggers the re-replication of the missing data to new nodes.",
          platformFunction: "Network Security",
        },
        codeSnippet: "function faultDetected(address node, string calldata cid) external onlyProver {\n    uint256 penalty = registry.getStake(node) * 10 / 100;\n    _burn(node, penalty);\n    _triggerReplication(cid);\n    emit NodeSlashed(node, penalty);\n  }",
        simAction: "Simulate Node Fault",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Anomaly detected: Node_0x4A2 offline for 3 cycles.", tone: "default" },
          { text: "Proving cycle 482 timed out. Status: [FAILED].", tone: "default" },
          { text: "Triggering algorithmic Slasher protocol...", tone: "default" },
          { text: "Burning 500 Tokens from node collateral...", tone: "default" },
          { text: "[SUCCESS] Security enforced. Re-replicating CID shards.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Decentralized storage is a horizontal capability. Here is how different sectors utilize this model to unify sensitive archival data.",
    sectors: [
      { icon: HeartPulse, title: "Healthcare & Patient Records", description: "Archive heavy medical imaging (DICOM) and EHR data with zero-trust encryption. Sharding across decentralized nodes ensures that no single provider holds the complete patient record, drastically reducing the impact of data breaches.", assetTypes: ["MRI / Scan Archiving", "PII Data Vaults", "HIPAA Compliance Logs"] },
      { icon: Activity, title: "Legal & Regulatory Discovery", description: "Secure evidence and compliance documents with unalterable content-addressing. By utilizing decentralized cold storage, law firms can store petabytes of case files for decades with absolute proof that the data was never modified.", assetTypes: ["Chain of Custody", "Permanent Evidence", "SEC Compliance Backups"] },
      { icon: Shield, title: "Media Preservation & AI Training", description: "Archive massive cultural datasets and AI training weights across a globally distributed fabric. Content creators retain absolute keys over their master assets while ensuring the data is physically resilient against hardware failure.", assetTypes: ["Model Weight Archiving", "Master Audio/Video", "Global Content Delivery"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy server backups or routing native sharded data, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Cold-Storage Bridging",
        description: "For corporate data centers. Legacy HTTP requests from backup software are securely encrypted and translated into sharded decentralized storage logic automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Storage Core", sublabel: "NetApp / AWS S3 Gateway", icon: Search, accent: false },
          { label: "Cerulea Storage Node", sublabel: "Encryption & Sharding", icon: Layers, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Index Ledger", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native P2P Grid Archiving",
        description: "For distributed DApps and Web3 portals. Bypass legacy middleware and route cryptographic content signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "End-User Terminal", sublabel: "DApp & Content Manager", icon: Truck, accent: false },
          { label: "Decentralized Grid", sublabel: "Storage Provider Nodes", icon: Scale, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Settlement Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom sharding logic and Proof-of-Space-Time verifiers from scratch requires world-class backend engineering and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Archival Rules & Node Types",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes Web3 infrastructure benchmarks. Writing custom sharding logic, negotiating content-addressing standards with decentralized storage protocols, and deploying fragile middleware for an average archival application takes a baseline of 6 months. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your archival rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================decentralized-science-desci
  {
    slug: "decentralized-science-desci",
    icon: LockKeyhole,
    eyebrow: "Platform Use Case",
    headline1: "Verify research.",
    headline2: "Unlock research funding.",
    heroDescription: "Deploy decentralized science frameworks for transparent R&D, peer-review attestations, and IP-NFT monetization using the Cerulea execution engine.",
    heroCta: "Deploy Science Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Fractional Research Ownership", description: "Bypass monolithic institutional control. Researchers can issue fractional ownership tokens to funders and contributors, ensuring direct stake in the assets commercial future." },
      { title: "Verifiable Data Repositories", description: "Guarantee research integrity. Researchers anchor cryptographic hashes of raw lab datasets to the ledger, proving results were not altered prior to publication." },
      { title: "Incentivized Peer Review", description: "Automate high-quality peer review. Smart contracts reward domain experts with tokens or reputation scores for verified reviews, removing the current non-compensated labor model." },
      { title: "IP-NFT Patenting", description: "Tokenize intellectual property directly at the point of discovery. Intellectual Property NFTs (IP-NFTs) manage the legal and financial rights to research outputs without legal friction." },
      { title: "Quadratic Funding Rounds", description: "Deploy fair capital distribution. Smart contracts automatically match community contributions with large-scale grants, ensuring funding follows scientific utility rather than politics." },
      { title: "Open Access State", description: "Remove the paywalls of legacy journals. Research results and citations are stored as accessible network state, allowing for automated, transparent impact-factor calculations." },
    ],
    lifecycleTitle: "The Research Lifecycle",
    lifecycleSubtitle: "Follow the cryptographic progression of a scientific hypothesis from funding to verified commercialization.",
    lifecycleSteps: [
      {
        label: "Research Proposal",
        description: "A scientist or lab anchors a research abstract and resource requirements to the ledger. This establishes immutable priority and authorship of the hypothesis.",
        icon: ShieldCheck,
        logFilename: "cerulea_desci_engine.log",
        logLines: [
          { text: "[SYS] Initializing Research Manifest...", time: "08:20:53", tone: "default" },
          { text: "[CMD] anchorThesis(title: \"Longevity_B3\", author: 0x7B2, hash: 0x89a...)", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying institutional credentials...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Research ID #401 initialized. Proof-of-priority established.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Quadratic Funding",
        description: "The community and institutional partners contribute capital. Smart contracts utilize quadratic funding math to prioritize projects with the most unique contributors.",
        icon: Heart,
        logFilename: "cerulea_desci_engine.log",
        logLines: [
          { text: "[SYS] Opening Funding Epoch 12...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Calculate match_ratio(votes: 490, total_pot: 50k USDC)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Executing algorithmic treasury distribution...", time: "08:20:53", tone: "default" },
          { text: "[OK] 12,400 USDC routed to Research_Vault_401.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Verifiable Peer Review",
        description: "Independent reviewers submit cryptographic attestations. Reviewer identities are verified while their specific raw data remains private via zero-knowledge proofs.",
        icon: BrainCircuit,
        logFilename: "cerulea_desci_engine.log",
        logLines: [
          { text: "[SYS] Intercepting Peer_Review_Packet...", time: "08:20:53", tone: "default" },
          { text: "[CMD] verifyReviewer(id: 0x992, credential_hash: 0x4f2...)", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Executing ZK-Proof validation for domain expertise...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Review verified. Scientific confidence metric updated.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "IP-NFT Issuance",
        description: "The finalized research and resulting patents are tokenized as IP-NFTs. Licensing revenue is automatically split between the researchers, reviewers, and funders.",
        icon: RefreshCw,
        logFilename: "cerulea_desci_engine.log",
        logLines: [
          { text: "[SYS] Detecting Patent_Approval_Event...", time: "08:20:53", tone: "default" },
          { text: "[CMD] mintIPNFT(subject: \"Longevity_B3\", supply: 1,000,000)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Deploying royalty splitter contract...", time: "08:20:53", tone: "default" },
          { text: "[OK] Ownership fractionalized. Licensing revenue streams active.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages distributed research through specialized, modular smart contracts. This layered approach ensures scientific priority, automates funding, and protects intellectual property.",
    layers: [
      {
        title: "Authorship & Priority",
        subtitle: "The Research Anchor",
        icon: Briefcase,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Research Anchor",
          description: "The foundational layer that holds the mathematical hash of research datasets and abstracts. It prevents \"scooping\" by establishing a permanent, chronological record of discovery that is globally verifiable.",
          platformFunction: "Authorship & Priority",
        },
        codeSnippet: "contract ResearchRegistry {\n  struct Paper {\n    address author;\n    bytes32 dataHash;\n    uint256 blockTime;\n    bool isPeerReviewed;\n  }\n  \n  mapping(uint256 => Paper) public researchState;\n\n  function anchorResearch(bytes32 hash) external {\n    researchState[paperCount++] = Paper(msg.sender, hash, block.timestamp, false);\n    emit ResearchAnchored(msg.sender, hash);\n  }\n}",
        simAction: "Simulate Thesis Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling research manifest for Project 'Alpha-Neuro'...", tone: "default" },
          { text: "Generating SHA-256 fingerprint of raw lab data...", tone: "default" },
          { text: "Executing anchorResearch() on Cerulea L1...", tone: "default" },
          { text: "Writing authorship struct to Level 1 Storage...", tone: "default" },
          { text: "[SUCCESS] Scientific priority established at block 195021.", tone: "success" },
        ],
      },
      {
        title: "Capital Distribution",
        subtitle: "The Quadratic Treasury",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Quadratic Treasury",
          description: "Bypasses traditional grant bureaucracy. This module manages capital pools and utilizes Quadratic Funding algorithms to distribute matching funds based on the breadth of community support.",
          platformFunction: "Capital Distribution",
        },
        codeSnippet: "contract QuadraticTreasury {\n  function distributeMatching(uint256 projectId) external onlyAdmin {\n    uint256 match = math.calculateQF(projectVotes[projectId], totalPool);\n    require(address(this).balance >= match, \"Underfunded\");\n    payable(projectWallet[projectId]).transfer(match);\n  }\n}",
        simAction: "Simulate Match Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Evaluating Epoch 12 participation metrics...", tone: "default" },
          { text: "Project #401 detected with 492 unique donors...", tone: "default" },
          { text: "Executing Quadratic Funding formula (x = sum(sqrt(c))^2)...", tone: "default" },
          { text: "Authorizing matching payout: 12,400 USDC...", tone: "default" },
          { text: "[SUCCESS] Treasury funds routed autonomously to Lab.", tone: "success" },
        ],
      },
      {
        title: "Integrity Validation",
        subtitle: "The Peer-Review Engine",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Peer-Review Engine",
          description: "A specialized credentialing hook. It allows verified subject-matter experts to sign off on research findings. The contract checks the reviewers DID (Decentralized Identity) for valid academic credentials before accepting the attestation.",
          platformFunction: "Integrity Validation",
        },
        codeSnippet: "contract ReviewEngine {\n  function submitReview(uint256 paperId, bool passes) external {\n    require(identityRegistry.hasCredential(msg.sender, \"PhD\"), \"Unauthorized\");\n    registry.updateReviewStatus(paperId, passes);\n    _rewardReviewer(msg.sender);\n  }\n}",
        simAction: "Simulate Peer Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving signature from Reviewer 0x992...", tone: "default" },
          { text: "Querying DID Registry for PhD Credential...", tone: "default" },
          { text: "[PASS] Reviewer identity verified via Harvard_Registry.", tone: "default" },
          { text: "Updating research status to 'Peer_Reviewed'...", tone: "default" },
          { text: "[SUCCESS] Attestation anchored. Confidence metric increased.", tone: "success" },
        ],
      },
      {
        title: "Monetization & Rights",
        subtitle: "The Ownership Token",
        icon: Braces,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Token",
          description: "The final layer that tokenizes the intellectual property. It manages fractional ownership of patent rights and automatically splits licensing revenue or commercialization profits among researchers and early funders.",
          platformFunction: "Monetization & Rights",
        },
        codeSnippet: "contract IPVault is ERC1155 {\n  function depositRoyalty(uint256 tokenId) external payable {\n    Stake[] memory members = royaltySplits[tokenId];\n    for(uint i=0; i < members.length; i++) {\n      payable(members[i].wallet).transfer(msg.value * members[i].bps / 10000);\n    }\n  }\n}",
        simAction: "Simulate Royalty Split",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting licensing payment: 5,000 USDC...", tone: "default" },
          { text: "Querying IP-NFT cap-table for Project #401...", tone: "default" },
          { text: "Calculating pro-rata splits (Researchers: 60%, Funders: 40%)...", tone: "default" },
          { text: "Executing 12 parallel atomic transfers...", tone: "default" },
          { text: "[SUCCESS] Revenue distributed to all stakeholders.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "DeSci is a horizontal architectural model. Here is how different scientific domains utilize this model to accelerate the pace of human discovery.",
    sectors: [
      { icon: FingerprintPattern, title: "Biotech & Longevity", description: "Fund expensive, high-risk clinical trials through community-led DAOs. Decentralized ownership of therapeutic IP ensures that life-saving drugs can be commercialized without exclusively relying on Big Pharma licensing.", assetTypes: ["Clinical Trial DAOs", "IP-NFT Patenting", "Open Lab Registries"] },
      { icon: Hammer, title: "Machine Learning & AI Research", description: "Verify the authenticity of AI training datasets. Distributed researchers contribute data and weights to foundational models, receiving micro-royalties every time the model is utilized for commercial inference.", assetTypes: ["Model Weight IP", "Dataset Verification", "Compute Credit Swap"] },
      { icon: RefreshCcw, title: "Environmental & Climate Tech", description: "Anchor sensor telemetry from carbon capture facilities or solar grids. Mathematical proof of environmental impact allows for the issuance of high-integrity, non-forgeable carbon credits.", assetTypes: ["Impact Verification", "Carbon Asset Minting", "Green Grant Funding"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy university grant software or routing native community-led R&D, Cerulea provides the exact routing required.",
    tracks: [
      {
        title: "Track A: Academic Grant Bridging",
        description: "For universities and government research bodies. Legacy HTTP requests from existing ERP systems are translated into secure funding tokens automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Research Core", sublabel: "University Grant DB", icon: Server, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Data Hashing & Mapping", icon: IdCardLanyard, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Funding Ledger", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native DeSci Ecosystem",
        description: "For community researchers and patient DAOs. Bypass legacy journals and route peer-review signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Researcher DApp", sublabel: "React Portal & Wallets", icon: Sparkles, accent: false },
          { label: "Consensus Network", sublabel: "Validator Review Tallying", icon: SquareTerminal, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Payout Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom research funding math and multi-sig reviewer registries from scratch requires specialized engineers and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Grant Parameters & Reviewers",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 20,
      ceruleaWeeks: 6,
      methodology: "The legacy development timeline utilizes R&D infrastructure benchmarks. Writing custom Quadratic Funding math, negotiating data standards with academic bodies, and deploying fragile middleware for an average research application takes a baseline of 12 months. Building the exact same logical architecture via Cerulea requires a baseline of 3 weeks. This acceleration is achieved because Cerulea Studio visually translates your discovery rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================fractional-ownership
  {
    slug: "fractional-ownership",
    icon: ScanLine,
    eyebrow: "Platform Use Case",
    headline1: "Liquify monolith assets.",
    headline2: "Open access to ownership.",
    heroDescription: "Convert illiquid assets into tradable, globally accessible digital shares. Deploy fractional ownership models with automated secondary markets, pro-rata yield distribution, and decentralized governance.",
    heroCta: "Deploy Fractional Ownership Models",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Pro-Rata Yield Distribution", description: "Automate income management. Smart contracts continuously monitor revenue entry and mathematically split the capital across thousands of stakeholders instantly based on their exact ownership percentage." },
      { title: "Secondary Market Liquidity", description: "Bypass 30-day real estate settlement cycles. Tokenized shares are traded on decentralized order books or AMMs, providing owners with 24/7 liquidity and T+0 settlement finality." },
      { title: "Automated Cap-Table Audit", description: "The ledger serves as the definitive source of truth. Every ownership change is permanently recorded, eliminating the need for manual shareholder registries and providing regulators with an instant audit trail." },
      { title: "Programmable Governance", description: "Grant rights to fractional owners. Smart contracts handle the collection of cryptographic votes, allowing a distributed group of owners to make collective decisions on asset management or sales." },
      { title: "Deed-to-State Anchoring", description: "Ensure legal parity. Cerulea anchors high-resolution scans of physical deeds and legal contracts to the blockchain state, creating an unalterable bridge between the physical world and digital tokens." },
      { title: "Zero-Friction Compliance", description: "Embed KYC/AML directly into the token. Shares can only be traded between wallets that hold a valid, ledger-anchored compliance credential, automating regulatory adherence globally." },
    ],
    lifecycleTitle: "The Partitioning Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a physical asset as it is vaulted, tokenized, and distributed across a global investor base.",
    lifecycleSteps: [
      {
        label: "Asset Neutralization",
        description: "A physical asset (real estate, fine art, or machinery) is appraised and legally secured in a custodial vehicle. The smart contract anchors the assets legal deeds and valuation certificates to the ledger.",
        icon: QrCode,
        logFilename: "cerulea_partition_engine.log",
        logLines: [
          { text: "[SYS] Initializing Asset Neutralization protocol...", time: "08:20:53", tone: "default" },
          { text: "[CMD] vaultAsset { type: \"REAL_ESTATE\", val: 5M, deed_hash: 0x892... }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying appraisal signatures from Node_7A...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Asset secured. Digital twin anchored to block 2011942.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Fractional Partitioning",
        description: "The monolithic asset is partitioned into millions of programmable digital shares. The smart contract defines the issuance limit and ensures the total share value exactly matches the vaulted assets worth.",
        icon: Users,
        logFilename: "cerulea_partition_engine.log",
        logLines: [
          { text: "[SYS] Initializing Partitioning Engine...", time: "08:20:53", tone: "default" },
          { text: "[CMD] mintShares(Asset_ID: 991, supply: 1,000,000, type: \"ERC20\")", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Validating reserve-to-token mathematical parity...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] 1,000,000 equity-tokens minted to primary issuance pool.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Secondary Market Flow",
        description: "Investors purchase and trade shares instantly on a global secondary market. The smart contract manages the real-time cap-table updates, ensuring ownership changes are reflected in one block interval.",
        icon: Leaf,
        logFilename: "cerulea_partition_engine.log",
        logLines: [
          { text: "[SYS] Intercepting secondary market trade...", time: "08:20:53", tone: "default" },
          { text: "[CMD] executeTrade { buyer: 0x7B2, seller: 0x4A2, shares: 500 }", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Updating pro-rata distribution table...", time: "08:20:53", tone: "default" },
          { text: "[OK] Trade settled. Cap-table rebalanced atomically.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Yield & Payout Execution",
        description: "The asset generates revenue (e.g., rental income or machine usage fees). The smart contract automatically harvests this income and routes it pro-rata to every shareholder wallet.",
        icon: Landmark,
        logFilename: "cerulea_partition_engine.log",
        logLines: [
          { text: "[SYS] Revenue deposit detected: 25,000 USDC.", time: "08:20:53", tone: "default" },
          { text: "[CMD] distributeYield(Asset_ID: 991, bps: 10000)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Executing 4,200 parallel sub-cent transfers...", time: "08:20:53", tone: "default" },
          { text: "[OK] Yield settled to all stakeholders. Epoch 12 complete.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages shared ownership through specialized, modular smart contracts. This layered approach ensures that physical legal titles, share partitions, and revenue distributions are handled with absolute cryptographic safety.",
    layers: [
      {
        title: "Deed & Legal Storage",
        subtitle: "The Digital Anchor",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Digital Anchor",
          description: "The foundational data layer. It stores the cryptographic hash of the physical assets legal documentation, appraisal reports, and provenance. This layer ensures that the digital shares are mathematically linked to a verified physical reality.",
          platformFunction: "Deed & Legal Storage",
        },
        codeSnippet: "contract AssetRegistry {\n  struct PhysicalAsset {\n    address custodian;\n    bytes32 legalDeedHash;\n    uint256 valuation;\n    bool isFrozen;\n  }\n  \n  mapping(uint256 => PhysicalAsset) public assets;\n\n  function anchorAsset(uint256 id, bytes32 deed) external onlyAdmin {\n    assets[id] = PhysicalAsset(msg.sender, deed, 0, false);\n    emit AssetAnchored(id, deed);\n  }\n}",
        simAction: "Simulate Asset Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting deed metadata for 'Industrial_Complex_B'...", tone: "default" },
          { text: "Hashing valuation certificate via SHA-256...", tone: "default" },
          { text: "Locking custodian identity to wallet 0x8F1...C33...", tone: "default" },
          { text: "Writing struct to Level 1 Storage...", tone: "default" },
          { text: "[SUCCESS] Physical asset permanently anchored to ledger.", tone: "success" },
        ],
      },
      {
        title: "Equity Minting",
        subtitle: "The Partitioning Core",
        icon: ArrowLeftRight,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Partitioning Core",
          description: "Bypasses the complexity of traditional stock issuance. This module converts the assets value into a specific supply of tokens (ERC-20 or ERC-1155), enforcing strict minting rules that prevent inflationary dilution.",
          platformFunction: "Equity Minting",
        },
        codeSnippet: "contract ShareTokenizer is ERC20 {\n  function fractionate(uint256 assetId, uint256 supply) external {\n    require(registry.exists(assetId), \"Asset not found\");\n    require(totalSupply() == 0, \"Already partitioned\");\n    \n    _mint(msg.sender, supply);\n    emit EquityIssued(assetId, supply);\n  }\n}",
        simAction: "Simulate Share Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting fractionation request for Asset #991...", tone: "default" },
          { text: "Validating ownership permissions for Caller...", tone: "default" },
          { text: "Executing _mint() for 1,000,000 shares...", tone: "default" },
          { text: "Updating state trie for block 2104992...", tone: "default" },
          { text: "[SUCCESS] Digital equity successfully generated.", tone: "success" },
        ],
      },
      {
        title: "Shareholder Voting",
        subtitle: "The Owners Council",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Owners Council",
          description: "Ensures that fractional owners retain control. This layer utilizes the token balances to weight voting power, allowing shareholders to vote on asset maintenance, sales, or management decisions directly through the contract.",
          platformFunction: "Shareholder Voting",
        },
        codeSnippet: "function castVote(uint256 proposalId, bool support) external {\n  uint256 weight = tokenizer.balanceOf(msg.sender);\n  require(weight > 0, \"No standing\");\n  \n  proposalVotes[proposalId][support] += weight;\n  emit VoteRecorded(msg.sender, weight, support);\n}",
        simAction: "Simulate Owner Vote",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Opening Proposal #42: 'Renovate Asset_991'...", tone: "default" },
          { text: "Receiving signature from stakeholder 0x4A2...B91...", tone: "default" },
          { text: "Verifying token weight: 5,000 Shares (0.5%)...", tone: "default" },
          { text: "[PASS] Vote successfully added to 'FOR' tally.", tone: "default" },
          { text: "[SUCCESS] Quorum logic monitoring in progress.", tone: "success" },
        ],
      },
      {
        title: "Automated Payouts",
        subtitle: "The Yield Distributor",
        icon: Vote,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Yield Distributor",
          description: "The financial executor. When rental income or profits enter the vault, this contract automatically calculates the pro-rata split for every individual shareholder and pushes the capital to their wallets instantly.",
          platformFunction: "Automated Payouts",
        },
        codeSnippet: "function distribute(uint256 totalAmount) external payable {\n    for (uint i=0; i < shareholders.length; i++) {\n      uint256 share = (totalAmount * balanceOf(shareholders[i])) / totalSupply();\n      payable(shareholders[i]).transfer(share);\n    }\n    emit DividendsPaid(totalAmount);\n  }",
        simAction: "Simulate Yield Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Revenue deposit detected: 25,000.00 USDC...", tone: "default" },
          { text: "Querying current cap-table for 4,200 participants...", tone: "default" },
          { text: "Executing high-throughput batch transfer protocol...", tone: "default" },
          { text: "Processing sub-cent transfers to retail wallets...", tone: "default" },
          { text: "[SUCCESS] Yield distribution settled atomically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Fractional Ownership is a horizontal capability. Here is how different sectors utilize this model to unlock latent asset value.",
    sectors: [
      { icon: Building2, title: "Commercial Real Estate", description: "Democratize institutional real estate investments. By tokenizing office buildings or residential complexes, property developers can raise capital from a global base of retail investors, while the smart contract handles automated monthly rent payouts.", assetTypes: ["Rent-Yield Tokens", "Equity Exit Liquidity", "Maintenance DAOs"] },
      { icon: ScrollText, title: "Fine Art & Collectibles", description: "Enable micro-ownership of high-value masterpieces. Gallerists tokenize iconic works of art, allowing investors to hold shares in the assets appreciation, while the smart contract manages authentication and insurance metadata.", assetTypes: ["Masterwork Shares", "Provenance Registry", "Curatorial Voting"] },
      { icon: Cpu, title: "Heavy Machinery & Fleet", description: "Unify capital for industrial equipment. Multiple companies co-own expensive logistics fleets or medical MRI machines, with the smart contract automatically charging for usage time and distributing the revenue to the co-owners.", assetTypes: ["Usage-Fee Splitting", "Telemetry Audits", "Co-op Fleet Mgmt"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy property registries or routing native Web3 shares, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Property Bridging",
        description: "For institutional real estate and asset managers. Legacy HTTP requests from existing deed registries are securely hashed and anchored into tokenized equity logic automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Property Core", sublabel: "Real Estate / Legal DB", icon: Fingerprint, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Deed Hash Mapping", icon: FlaskConical, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Cap-Table State", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Asset Execution",
        description: "For decentralized equity pools and P2P trading. Bypass legacy middleware and route cryptographic ownership signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Investor Interface", sublabel: "React Client & Node JS", icon: Workflow, accent: false },
          { label: "Consensus Network", sublabel: "Validator Share Tallying", icon: PieChart, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Payout Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom cap-table indexers and multi-party yield distribution engines from scratch requires specialized financial engineering and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Equity Rules & Stakeholders",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes Web3 asset-management benchmarks. Writing custom pro-rata yield math, negotiating legal standards for digital twins, and deploying fragile dividend middleware for an average application takes a baseline of 10 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your equity rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================secure-healthcare-data-sharing
  {
    slug: "secure-healthcare-data-sharing",
    icon: Copyright,
    eyebrow: "Platform Use Case",
    headline1: "Own your medical records.",
    headline2: "Unify provider data.",
    heroDescription: "Deploy patient sovereign health networks with granular consent management, secure cryptographic handovers, and HIPAA compliant audit trails powered by Cerulea.",
    heroCta: "Deploy Healthcare Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Decentralized Patient IDs", description: "Bypass the central patient index. Cerulea utilizes W3C compliant DIDs to give patients absolute control over their identity keys, ensuring they are the definitive root of trust for their own records." },
      { title: "Zero-Knowledge Consent", description: "Verify permissions without exposing data. Use ZK-Proofs to mathematically confirm a patient has granted access to a specific provider without ever recording sensitive PII on the public ledger." },
      { title: "Encrypted Record Sharding", description: "Medical data is encrypted and sharded before storage. The ledger only holds the cryptographic pointers and reassembly logic, ensuring data is physically resilient and practically unhackable." },
      { title: "Interoperable State Rails", description: "Connect disparate EMR systems. Because the consent and ownership logic exists on a universal ledger, different hospital networks can exchange records securely using the same source of truth." },
      { title: "Real-Time Compliance Audit", description: "Replace quarterly HIPAA audits with instant verification. Compliance officers use the ledger to audit the chronological record of data handovers, proving data integrity and privacy adherence." },
      { title: "Programmatic Break-Glass", description: "Enable emergency access logic. In critical situations, verified emergency personnel can bypass standard consent using a multi-sig protocol, with the event automatically flagged for forensic review." },
    ],
    lifecycleTitle: "The Exchange Lifecycle",
    lifecycleSubtitle: "Follow the cryptographic progression of a medical record as it is authored, protected by consent, and securely shared with providers.",
    lifecycleSteps: [
      {
        label: "Patient Sovereignty",
        description: "A patient generates a Decentralized Identifier (DID) within a secure enclave. This cryptographic identity allows them to own their medical records across all providers without a central database.",
        icon: Gift,
        logFilename: "cerulea_health_engine.log",
        logLines: [
          { text: "[SYS] Initializing Healthcare DID Enclave...", time: "08:20:53", tone: "default" },
          { text: "[CMD] generateIdentity { type: \"PATIENT\", id: \"P_992_ALPHA\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Anchoring public key 0x7B2...F11 to MedicalRegistry...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Patient identity enrolled. Sovereignty established.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Granular Consent",
        description: "The patient defines a cryptographic consent policy. They grant a specific doctor temporary access to a specific record (e.g., an MRI scan) using a zero-knowledge attribute check.",
        icon: Zap,
        logFilename: "cerulea_health_engine.log",
        logLines: [
          { text: "[SYS] Intercepting Consent Authorization...", time: "08:20:53", tone: "default" },
          { text: "[CMD] grantAccess { doctor: 0x992, resource: \"MRI_SCAN_7A\", duration: \"24H\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Validating patient digital signature...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Consent anchored to block 2049182. Access keys generated.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Encrypted Data Routing",
        description: "When the doctor requests the record, the smart contract verifies the active consent and routes a cryptographically wrapped pointer to the doctor terminal. The data remains encrypted in transit.",
        icon: ShieldAlert,
        logFilename: "cerulea_health_engine.log",
        logLines: [
          { text: "[SYS] Processing Data Retrieval Request...", time: "08:20:53", tone: "default" },
          { text: "[CMD] verifyConsent(Doctor: 0x992, Resource: \"MRI_SCAN_7A\")", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Fetching encrypted pointer from off-chain storage...", time: "08:20:53", tone: "default" },
          { text: "[OK] Data routed. Handshake established via secure relayer.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Permanent Audit Log",
        description: "Every access event is cryptographically sealed on the ledger. Compliance officers can algorithmically verify HIPAA adherence by auditing the unalterable history of data handovers.",
        icon: HeartPulse,
        logFilename: "cerulea_health_engine.log",
        logLines: [
          { text: "[SYS] Finalizing Data Exchange Event...", time: "08:20:53", tone: "default" },
          { text: "[CMD] generateForensicHash(Exchange_ID_4821)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Writing compliance anchor to L1 block 2049190...", time: "08:20:53", tone: "default" },
          { text: "[OK] Session terminated. Immutable audit log finalized.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages sensitive medical data through specialized, modular smart contracts. This layered approach ensures that identity, consent, and exchange are handled with absolute cryptographic safety.",
    layers: [
      {
        title: "Identity & Metadata",
        subtitle: "The Sovereign Ledger",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sovereign Ledger",
          description: "The foundational layer that holds the mapping between patients and their encrypted record pointers. It does not store raw medical data. It maintains the cryptographic index of ownership and authorship.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet: "contract PatientRegistry {\n  struct Record {\n    address patient;\n    bytes32 dataHash;\n    string storageURI;\n    bool isFrozen;\n  }\n  \n  mapping(bytes32 => Record) public medicalIndex;\n\n  function anchorRecord(bytes32 id, string calldata uri) external {\n    medicalIndex[id] = Record(msg.sender, id, uri, false);\n    emit RecordAnchored(id, msg.sender);\n  }\n}",
        simAction: "Simulate Identity Enroll",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initializing Patient DID: P_992_ALPHA...", tone: "default" },
          { text: "Hashing MRI scan metadata pointer...", tone: "default" },
          { text: "Locking authorship to wallet 0x8F1...C33...", tone: "default" },
          { text: "Writing record index to Level 1 Storage...", tone: "default" },
          { text: "[SUCCESS] Patient state successfully anchored.", tone: "success" },
        ],
      },
      {
        title: "Granular Access Control",
        subtitle: "The Permission Engine",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Permission Engine",
          description: "The logic center for HIPAA compliance. This module evaluates if a provider has the necessary cryptographic permission to access a record. It manages time-based access and emergency break-glass protocols.",
          platformFunction: "Granular Access Control",
        },
        codeSnippet: "contract ConsentGatekeeper {\n  function hasConsent(address doctor, bytes32 recordId) external view returns (bool) {\n    Permission memory p = activePermissions[doctor][recordId];\n    return p.isValid && block.timestamp <= p.expiry;\n  }\n\n  function authorize(address doctor, bytes32 id, uint256 time) external {\n    activePermissions[doctor][id] = Permission(true, block.timestamp + time);\n  }\n}",
        simAction: "Simulate Consent Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting request from Doctor 0x99A...", tone: "default" },
          { text: "Querying Consent Registry for record MRI_SCAN_7A...", tone: "default" },
          { text: "[PASS] Active 24-hour consent window found.", tone: "default" },
          { text: "Verifying requester identity via DID attestation...", tone: "default" },
          { text: "[SUCCESS] Authorization granted. Fetching data pointer.", tone: "success" },
        ],
      },
      {
        title: "Encrypted Handshakes",
        subtitle: "The Exchange Router",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Exchange Router",
          description: "The active engine for data movement. It facilitates the atomic exchange of record keys between patient storage and provider terminals. It ensures that data remains sharded and encrypted until reaching the authorized destination.",
          platformFunction: "Encrypted Handshakes",
        },
        codeSnippet: "function initiateTransfer(address to, bytes32 recordId) external onlyGatekeeper {\n    bytes32 keyHash = computeExchangeKey(msg.sender, to, recordId);\n    _routeEncryptedPointer(to, registry.getURI(recordId), keyHash);\n    emit DataExchanged(recordId, to, block.timestamp);\n  }",
        simAction: "Simulate Secure Route",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Generating one-time exchange key for Doctor...", tone: "default" },
          { text: "Encrypting storage pointer via AES-GCM...", tone: "default" },
          { text: "Pushing cryptographically wrapped payload to Provider...", tone: "default" },
          { text: "Monitoring for successful decryption signal...", tone: "default" },
          { text: "[SUCCESS] Data exchange completed via secure relay.", tone: "success" },
        ],
      },
      {
        title: "Unalterable Logging",
        subtitle: "The Compliance Finalizer",
        icon: Layers,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Finalizer",
          description: "The final layer for legal accountability. It creates a high-integrity trail of every interaction with a medical record. It is designed for regulatory auditing, proving who saw what data and exactly when.",
          platformFunction: "Unalterable Logging",
        },
        codeSnippet: "contract ForensicAuditor {\n  function logAccess(bytes32 recordId, address actor, string calldata action) external {\n    bytes32 auditHash = keccak256(abi.encode(recordId, actor, action, block.timestamp));\n    historicalLogs.push(auditHash);\n    emit ComplianceEvent(auditHash);\n  }\n}",
        simAction: "Simulate Audit Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating session metadata: { ID: 4821, Actor: 0x99A }...", tone: "default" },
          { text: "Generating SHA-256 fingerprint of access trace...", tone: "default" },
          { text: "Executing anchorAudit() on Cerulea L1...", tone: "default" },
          { text: "Distributing forensic hash to compliance nodes...", tone: "default" },
          { text: "[SUCCESS] Compliance trail permanently sealed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Patient-sovereign data sharing is a horizontal capability. Here is how different sectors utilize this model to unify medical discovery.",
    sectors: [
      { icon: Database, title: "Clinical Health Networks", description: "Eliminate fax machines and physical CD-ROMs. Specialty clinics utilize Cerulea to request instant, patient-authorized access to MRI scans and bloodwork from distant primary care networks, significantly reducing diagnostic time.", assetTypes: ["Cross-Network EMR", "Radiology Exchange", "Emergency Break-Glass"] },
      { icon: Truck, title: "Pharmaceutical R&D", description: "Gather real-world evidence (RWE) directly from patient cohorts. Pharma researchers can issue tokenized incentives to patients who share anonymized clinical data, ensuring higher compliance and data diversity for clinical trials.", assetTypes: ["Trial Recruitment", "Anonymized Telemetry", "Outcome Verification"] },
      { icon: Scale, title: "Health Insurance & Underwriting", description: "Accelerate the underwriting process. Applicants grant insurance providers temporary, verifiable access to their ledger-anchored medical history, eliminating the manual collection of medical records and reducing policy issuance time from weeks to hours.", assetTypes: ["Claims Validation", "History Verification", "Risk Attribute Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy hospital databases or routing native patient mobile wallets, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise EMR Bridging",
        description: "For institutional health systems. Legacy HTTP requests from existing software (Epic, Cerner) are securely hashed and translated into sovereign DID identities automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy EMR Core", sublabel: "Epic / Cerner Database", icon: Boxes, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Metadata Translation", icon: LockKeyhole, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Index Ledger", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Sovereign Health Execution",
        description: "For patient DApps and decentralized clinics. Bypass legacy middle-men and route cryptographic identity signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Patient Mobile App", sublabel: "React DApp & Secure Vault", icon: Heart, accent: false },
          { label: "Consensus Network", sublabel: "Consent Verification Nodes", icon: BrainCircuit, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Payout Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom ZK-consent circuits and unalterable medical audit registries from scratch requires specialized world-class cryptographers and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Consent Rules & Provider Types",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 22,
      ceruleaWeeks: 7,
      methodology: "The legacy development timeline utilizes Web3 cybersecurity benchmarks. Writing custom Zero-Knowledge circuits for HIPAA-compliant consent, negotiating HL7 FHIR data standards between providers, and deploying fragile encryption middleware for an average healthcare application takes a baseline of 12 months. Building the exact same logical architecture via Cerulea requires a baseline of 4 weeks. This acceleration is achieved because Cerulea Studio visually translates your regulatory rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",

    },
    logSystemName: "Operational log system",
  },
  //========================================cross-chain-interoperability
  {
    slug: "cross-chain-interoperability",
    icon: Briefcase,
    eyebrow: "Platform Use Case",
    headline1: "Bridge fragmented networks.",
    headline2: "Unify fragmented liquidity.",
    heroDescription: "Deploy secure cross-chain bridges and universal state messengers. Enable seamless value and data movement between private subnets and public L1 ledgers using the Cerulea grid.",
    heroCta: "Deploy Interoperability Layers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Universal State Bridging", description: "Bypass the limitation of isolated chains. Cerulea enables the atomic transfer of arbitrary data, not just tokens, allowing a smart contract on one network to trigger logic on another network trustlessly." },
      { title: "Wrapped Asset Parity", description: "Ensure 1:1 value matching. Smart contracts manage the locking and minting of wrapped assets, utilizing mathematical supply invariants to prevent inflationary double-spending across network boundaries." },
      { title: "Relayer Aggregation", description: "Eliminate single points of failure. The protocol utilizes a decentralized set of independent relayer nodes that must reach consensus on source chain events before the message is propagated forward." },
      { title: "ZK-Light Clients", description: "Deploy trustless security models. Cerulea utilizes Zero-Knowledge proofs to verify the validity of destination chains without needing to download their entire history, enabling massive scalability." },
      { title: "Cross-Chain Governance", description: "Unify DAO decision-making. Stakeholders on different chains can cast votes that are aggregated into a single universal result, which then triggers autonomous execution on a primary network." },
      { title: "Deterministic Message Delivery", description: "Ensure reliability. Interop contracts use chronological sequence nonces and re-try logic to guarantee that every cross-chain message is delivered exactly once and in the correct order." },
    ],
    lifecycleTitle: "The Interoperability Lifecycle",
    lifecycleSubtitle: "Follow the cryptographic progression of a cross-chain packet as it is encoded, relayed, verified, and settled across network boundaries.",
    lifecycleSteps: [
      {
        label: "Source Chain Locking",
        description: "A user initiates a cross-chain transfer by locking an asset or state on the source chain. The smart contract anchors the transaction and emits a cryptographic message event.",
        icon: Lock,
        logFilename: "cerulea_bridge_engine.log",
        logLines: [
          { text: "[SYS] Initializing Cross-Chain Messenger...", time: "08:20:53", tone: "default" },
          { text: "[CMD] lockAsset { id: \"BCH_772\", amount: 1000, dstChain: \"ETH_L1\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Generating source-chain receipt hash...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] State locked at block 1999201. Emitting relay event.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Relayer Attestation",
        description: "Independent relayer nodes or ZK-provers detect the event. They generate a mathematical proof of the source chain state and prepare the payload for the destination network.",
        icon: Globe,
        logFilename: "cerulea_bridge_engine.log",
        logLines: [
          { text: "[SYS] Relayer Node_92 intercepting source event...", time: "08:20:53", tone: "default" },
          { text: "[CMD] fetchProof(Source_Tx_0x4A2, Block: 1999201)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Generating ZK-SNARK state witness...", time: "08:20:53", tone: "default" },
          { text: "[OK] Mathematical proof compiled. Validated across 15 nodes.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Message Propagation",
        description: "The proven payload is transmitted to the destination chain. The interoperability protocol manages the jurisdictional routing and ensures the message format is compatible with the target runtime.",
        icon: Braces,
        logFilename: "cerulea_bridge_engine.log",
        logLines: [
          { text: "[SYS] Pushing payload to Destination Gateway...", time: "08:20:53", tone: "default" },
          { text: "[CMD] submitProof(Target: \"ETH_L1\", Payload: 0x9f2a...)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Verifying relayer signatures and ZK-witness...", time: "08:20:53", tone: "default" },
          { text: "[OK] Message integrity verified. Routing to target logic.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Destination Execution",
        description: "The destination smart contract receives the verified message and executes the final state change, such as minting a wrapped asset or triggering a remote governance vote.",
        icon: FingerprintPattern,
        logFilename: "cerulea_bridge_engine.log",
        logLines: [
          { text: "[SYS] Receiving cross-chain execution trigger...", time: "08:20:53", tone: "default" },
          { text: "[CMD] mintWrapped(User: 0x7B2, Original_ID: \"BCH_772\")", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Updating destination ledger state...", time: "08:20:53", tone: "default" },
          { text: "[OK] Interoperability cycle complete. Finality achieved.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages network interoperability through specialized, modular smart contracts. This layered approach ensures that cross-chain messages, assets, and security proofs are handled with absolute integrity.",
    layers: [
      {
        title: "Universal Data Format",
        subtitle: "The Protocol Standard",
        icon: Hammer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Protocol Standard",
          description: "The foundational layer defining how cross-chain packets are structured. It manages the sequence numbers, source/destination chain IDs, and the standardized payload encoding required for network-agnostic communication.",
          platformFunction: "Universal Data Format",
        },
        codeSnippet: "contract MessengerRegistry {\n  struct Packet {\n    uint16 srcChainId;\n    uint16 dstChainId;\n    uint64 sequence;\n    bytes payload;\n  }\n  \n  function send(uint16 dstChainId, bytes calldata payload) external payable {\n    _outboundPackets[sequence++] = Packet(localId, dstChainId, sequence, payload);\n    emit MessageSent(dstChainId, sequence, payload);\n  }\n}",
        simAction: "Simulate Message Encode",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling cross-chain instruction for Chain_ID 102...", tone: "default" },
          { text: "Encoding payload: { action: 'MINT', asset: 'CBC-77' }...", tone: "default" },
          { text: "Attaching unique sequence nonce: 49122...", tone: "default" },
          { text: "Writing packet metadata to source state...", tone: "default" },
          { text: "[SUCCESS] Message successfully standardized for relay.", tone: "success" },
        ],
      },
      {
        title: "State Synchronization",
        subtitle: "The Asset Interceptor",
        icon: RefreshCcw,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Asset Interceptor",
          description: "Bypasses siloed execution. This module handles the logic for locking or burning assets on one network and signaling the counterpart. It ensures that the total supply of tokenized value remains mathematically constant across all connected chains.",
          platformFunction: "State Synchronization",
        },
        codeSnippet: "contract BridgeHook {\n  function lockAndSignal(address asset, uint256 amt) external {\n    IERC20(asset).transferFrom(msg.sender, address(this), amt);\n    messenger.send(targetChainId, abi.encode(msg.sender, asset, amt));\n    emit AssetLocked(asset, amt, msg.sender);\n  }\n}",
        simAction: "Simulate Asset Lock",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting lock request for 50,000 USDC...", tone: "default" },
          { text: "Transferring capital to local bridge vault...", tone: "default" },
          { text: "Constructing signal payload for Ethereum L1...", tone: "default" },
          { text: "Triggering internal call to MessengerRegistry...", tone: "default" },
          { text: "[SUCCESS] Capital isolated on source. Signal emitted.", tone: "success" },
        ],
      },
      {
        title: "Multi-Network Routing",
        subtitle: "The Propagation Logic",
        icon: Server,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Propagation Logic",
          description: "The networks dispatcher. It manages the incentivization and verification of independent relayer nodes. This layer ensures that messages are delivered to the correct destination gateway while preventing replay attacks.",
          platformFunction: "Multi-Network Routing",
        },
        codeSnippet: "contract RelayerRouter {\n  function deliver(bytes calldata proof, bytes calldata message) external {\n    require(!isProcessed(keccak256(message)), \"Replay Detected\");\n    require(verifier.validate(proof), \"Invalid Relayer Signature\");\n    \n    _processMessage(message);\n    emit MessageDelivered(keccak256(message));\n  }\n}",
        simAction: "Simulate Route Deliver",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Relayer Node_44 submitting packet proof...", tone: "default" },
          { text: "Checking anti-replay registry for message hash...", tone: "default" },
          { text: "[PASS] Message is unique and fresh.", tone: "default" },
          { text: "Verifying aggregate signatures from validator set...", tone: "default" },
          { text: "[SUCCESS] Packet authorized for destination execution.", tone: "success" },
        ],
      },
      {
        title: "Trustless Finality",
        subtitle: "The Mathematical Guardian",
        icon: IdCardLanyard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Mathematical Guardian",
          description: "The ultimate security layer. Instead of relying on honest-relayer assumptions, this contract uses Zero-Knowledge proofs to mathematically verify that the source chain state change actually occurred, providing trustless interoperability.",
          platformFunction: "Trustless Finality",
        },
        codeSnippet: "contract ZKVerifier {\n  function verifyState(bytes32 root, bytes calldata proof) external view returns (bool) {\n    require(snarkVerifier.verify(root, proof), \"Math: Invalid Proof\");\n    return true;\n  }\n}",
        simAction: "Simulate ZK-Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving ZK-SNARK state witness for block 1999201...", tone: "default" },
          { text: "Loading source-chain state root hash...", tone: "default" },
          { text: "Executing pairing-check validation on elliptic curve...", tone: "default" },
          { text: "[PASS] Mathematical proof of state confirmed.", tone: "default" },
          { text: "[SUCCESS] Trustless bridge finality achieved.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Network Interoperability is a horizontal capability. Here is how different sectors utilize this model to unify fragmented infrastructure.",
    sectors: [
      { icon: ShieldCog, title: "Institutional Liquidity Aggregation", description: "Unify capital across disparate subnets. Institutional banks utilize Cerulea to route stablecoin liquidity between private settlement ledgers and public L1 corridors, ensuring they always have access to global depth without silos.", assetTypes: ["Cross-Chain Sweep", "Universal Payouts", "Netting Settlement"] },
      { icon: Sparkles, title: "Multichain Gaming & Metaverse", description: "Enable interoperable digital assets. Players can move character items or land deeds between different game worlds and chains securely, with the smart contract handling the atomic burn-and-mint sequence in the background.", assetTypes: ["Inventory Portability", "Cross-World IDs", "Metaverse Trading"] },
      { icon: SquareTerminal, title: "Hybrid Network Security", description: "Anchor private consortium state to public L1s. Enterprises run high-throughput transactions on their private Cerulea subnets while using interoperability hooks to periodically \"checkpoint\" the hash of their state to Ethereum for massive security.", assetTypes: ["L1 Checkpointing", "Audit Snapshots", "Rollup Finality"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging private enterprise subnets or routing native L1 state updates, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Subnet Bridging",
        description: "For corporate consortiums. Legacy HTTP events from internal private chains are securely translated into public L1 state checkpoints automatically.",
        connectorLabels: ["MESSENGER HOOK", "WASM COMPILATION"],
        nodes: [
          { label: "Cerulea Private Subnet", sublabel: "High-Speed Execution", icon: ScanHeart, accent: false },
          { label: "Interoperability Gateway", sublabel: "State Hash Encoding", icon: ScanLine, accent: true },
          { label: "Multichain Interface", sublabel: "React Client & Bridge UI", icon: QrCode, accent: true },
        ],
      },
      {
        title: "Track B: Native Multichain Execution",
        description: "For decentralized bridges and multichain DApps. Bypass legacy gateways and route cryptographic state signatures directly between public L1/L2 execution layers.",
        connectorLabels: ["WALLET SIGNATURE", "TRADITIONAL DEPLOYMENT"],
        nodes: [
          { label: "Multichain Interface", sublabel: "React Client & Bridge UI", icon: Users, accent: false },
          { label: "Relayer Network", sublabel: "Proof Tallying Nodes", icon: Leaf, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Payout Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom ZK-light clients and relayer incentivization engines from scratch requires specialized network engineers and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Connected Networks & Assets",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 20,
      ceruleaWeeks: 7,
      methodology: "The legacy development timeline utilizes Web3 infrastructure benchmarks. Writing custom relayer software, negotiating state standards between chains, and deploying fragile bridge middleware for an average interoperability application takes a baseline of 12 months. Building the exact same logical architecture via Cerulea requires a baseline of 4 weeks. This acceleration is achieved because Cerulea Studio visually translates your routing rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================ip-royalty-management
  {
    slug: "ip-royalty-management",
    icon: Wallet,
    eyebrow: "Platform Use Case",
    headline1: "Secure intellectual property.",
    headline2: "Capture every royalty.",
    heroDescription: "Convert rigid legal copyrights into liquid digital assets. Deploy automated royalty engines with sub-second payment splits, programmable licensing, and unalterable proof of origin.",
    heroCta: "Deploy IP Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Immutable Provenance", description: "Establish absolute proof of creation. By anchoring a cryptographic hash of a creative work to the ledger, creators can mathematically prove they authored a specific asset at an exact point in time." },
      { title: "Programmable Revenue Splits", description: "Bypass manual accounting and middle-man delays. Smart contracts automatically divide every incoming payment across all stakeholders proportionally, ensuring everyone is paid in real time." },
      { title: "Smart Licensing Portals", description: "Enable self-serve usage rights. Organizations can purchase standardized usage licenses (sync, mechanical, distribution) directly from the asset, with the contract issuing usage keys upon payment." },
      { title: "Cap-Table Liquidity", description: "Stakeholders can trade or sell their future royalty rights on secondary markets. This turns long-term intellectual property into liquid capital for creators and institutional investors alike." },
      { title: "Cross-Platform Interoperability", description: "Ensure your IP rights follow your asset everywhere. Because ownership is anchored to a universal ledger, streaming platforms and marketplaces can query the same source of truth for distribution logic." },
      { title: "Cryptographic Watermarking", description: "Bind the digital file state to the ledger UID. This creates a permanent link between the creative content and its legal metadata, making it impossible to scrub ownership data from the file header." },
    ],
    lifecycleTitle: "The IP Lifecycle State Machine",
    lifecycleSubtitle: "",
    lifecycleSteps: [
      {
        label: "IP Registration",
        description: "The creator anchors their work to the ledger. This generates a unique cryptographic fingerprint (hash) of the digital asset, establishing an unalterable proof of authorship and timestamp.",
        icon: ArrowLeftRight,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Ingesting digital asset manifest...", time: "08:20:53", tone: "default" },
          { text: "[CMD] generateHash(asset_path: \"master_track_v1.wav\")", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying creator signature 0x7B2...F11", time: "08:20:53", tone: "secondary" },
          { text: "[OK] IP anchored to block 1955820. Provenance established.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Ownership Fractionalization",
        description: "The IP rights are split into programmable shares. This allows multiple contributors (producers, writers, investors) to hold direct, transparent stakes in the future revenue of the asset.",
        icon: Network,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Initializing Cap-Table definition...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Split rights: { Producer: 40%, Writer: 40%, Label: 20% }", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Deploying fractional equity contract...", time: "08:20:53", tone: "default" },
          { text: "[OK] 1,000,000 IP-Shares minted to stakeholder registry.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Automated Licensing",
        description: "A third party requests usage rights (e.g., for a film sync). The smart contract automatically executes the license agreement once the payment is detected in the escrow vault.",
        icon: Vote,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Detecting license request from Netflix_Node_04...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Escrow check: 5,000 USDC detected.", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Executing LicenseGrant(type: \"Sync\", duration: \"Perpetual\")", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Digital license issued. Usage authorized.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Micro-Royalty Routing",
        description: "Every time the asset is consumed, the generated revenue is instantly split and routed to all stakeholders according to the cap-table logic, bypassing manual accounting cycles.",
        icon: Building2,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Revenue deposit detected: 1.20 USDC.", time: "08:20:53", tone: "default" },
          { text: "[CMD] Calculating pro-rata splits for 3 stakeholders...", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Routing: 0.48 to Producer, 0.48 to Writer, 0.24 to Label.", time: "08:20:53", tone: "default" },
          { text: "[OK] All micro-royalties settled with absolute finality.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages intellectual property through highly specialized, modular smart contracts. This layered approach ensures that creative rights, usage permissions, and payouts are handled securely and transparently.",
    layers: [
      {
        title: "Proof of Authorship",
        subtitle: "The Metadata Anchor",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Metadata Anchor",
          description: "The foundational database layer. It maps a unique digital identifier (UID) to the creators wallet and the assets permanent metadata (IPFS/Arweave links). This layer establishes the \"source of truth\" for who owns the original rights.",
          platformFunction: "Proof of Authorship",
        },
        codeSnippet: "contract IPRegistry {\n  struct Asset {\n    address creator;\n    bytes32 assetHash;\n    uint256 blockTime;\n    string metadataURI;\n  }\n  \n  mapping(bytes32 => Asset) public ipTable;\n\n  function registerIP(bytes32 uid, string calldata uri) external {\n    ipTable[uid] = Asset(msg.sender, uid, block.timestamp, uri);\n    emit IPRegistered(uid, msg.sender);\n  }\n}",
        simAction: "Simulate IP Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling asset manifest for 'Cinematic_Score_A'...", tone: "default" },
          { text: "Generating cryptographic UID via keccak256...", tone: "default" },
          { text: "Executing registerIP() on Cerulea L1...", tone: "default" },
          { text: "Emitting IPRegistered Event to indexers...", tone: "default" },
          { text: "[SUCCESS] Work permanently secured in state trie.", tone: "success" },
        ],
      },
      {
        title: "Permission Logic",
        subtitle: "The Usage Engine",
        icon: Cpu,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Usage Engine",
          description: "This module governs how the asset can be used. It defines the \"Smart License\", a programmable agreement that automatically grants access keys or usage rights once specific financial or temporal conditions are met.",
          platformFunction: "Permission Logic",
        },
        codeSnippet: "contract SmartLicense {\n  function purchaseLicense(bytes32 assetId) external payable {\n    require(msg.value >= licensePrice[assetId], \"Insufficient Funds\");\n    activeLicenses[msg.sender][assetId] = block.timestamp + 365 days;\n    royaltyRouter.deposit{value: msg.value}(assetId);\n  }\n}",
        simAction: "Simulate License Buy",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting inbound payment for 'Sync_License'...", tone: "default" },
          { text: "Validating amount: 5,000 USDC...", tone: "default" },
          { text: "Updating activeLicenses mapping for buyer...", tone: "default" },
          { text: "Triggering internal call to Royalty Router...", tone: "default" },
          { text: "[SUCCESS] Usage rights authorized for 12 months.", tone: "success" },
        ],
      },
      {
        title: "Automated Payouts",
        subtitle: "The Splitter Protocol",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Splitter Protocol",
          description: "The financial core. It holds the \"Cap Table\" for the asset. When license revenue or streaming payouts enter the contract, this router mathematically divides the capital and pushes it instantly to every stakeholder wallet.",
          platformFunction: "Automated Payouts",
        },
        codeSnippet: "function distribute(bytes32 assetId) public payable {\n  Stake[] memory splits = capTable[assetId];\n  for(uint i=0; i < splits.length; i++) {\n    uint256 payout = (msg.value * splits[i].bps) / 10000;\n    payable(splits[i].account).transfer(payout);\n  }\n}",
        simAction: "Simulate Split Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting streaming revenue: 50.00 USDC...", tone: "default" },
          { text: "Querying cap table for asset 0x8A...2E...", tone: "default" },
          { text: "Calculating pro-rata splits for 4 stakeholders...", tone: "default" },
          { text: "Executing 4 parallel atomic transfers...", tone: "default" },
          { text: "[SUCCESS] All stakeholders settled in sub-second.", tone: "success" },
        ],
      },
      {
        title: "Governance & Recovery",
        subtitle: "The Legal Safeguard",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Legal Safeguard",
          description: "Regulated IP requires an override mechanism. This layer allows a designated legal oracle or multi-sig board to pause royalty flows or reassign authorship in the event of a copyright dispute or court order.",
          platformFunction: "Governance & Recovery",
        },
        codeSnippet: "function pauseRoyalty(bytes32 assetId) external onlyOracle {\n  isPaused[assetId] = true;\n  emit RoyaltyHalted(assetId, block.timestamp);\n}\n\nfunction reassignRights(bytes32 assetId, address newOwner) \n  external onlyOracle \n{\n  registry.updateOwner(assetId, newOwner);\n}",
        simAction: "Simulate Legal Halt",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Received signed court order payload via Oracle...", tone: "default" },
          { text: "Matching Asset ID against copyright claim database...", tone: "default" },
          { text: "[ACTIVE] Dispute detected. Triggering pauseRoyalty()...", tone: "default" },
          { text: "Halting all outbound capital flows for asset...", tone: "default" },
          { text: "[SUCCESS] Asset state locked pending legal resolution.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Intellectual Property tokenization is a horizontal capability. Here is how different sectors utilize this model to unlock latent asset value.",
    sectors: [
      { icon: Archive, title: "Entertainment & Streaming", description: "Manage complex film and music rights. Creators can issue fractional ownership to their fanbase or early investors, while the smart contract handles micro-payouts from streaming platforms automatically.", assetTypes: ["Music Royalty Splits", "Film Sync Licensing", "Digital Merchandising"] },
      { icon: Workflow, title: "Visual Art & Fashion", description: "Enable resale royalties for physical and digital art. Every time an artwork is traded on a secondary market, a percentage of the sale is mathematically routed back to the original artist.", assetTypes: ["Resale Royalty Rules", "Couture Provenance", "Digital Twins (NFC)"] },
      { icon: PieChart, title: "Software & SaaS", description: "Digitize enterprise software licenses. Manage tiered API access and seat licenses through smart contract keys, allowing for trustless B2B licensing without manual fulfillment cycles.", assetTypes: ["API Access Tokens", "SDK Licensing", "Open Source Funding"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy IP catalogs or routing native Web3 royalties, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Rights Bridging",
        description: "For labels and production houses. Legacy IP databases are securely hashed and anchored into smart contract licensing logic automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Rights DB", sublabel: "Internal IP Registry", icon: Radio, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Rights Validation", icon: Copyright, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Licensing State", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Creator Economy",
        description: "For independent DApps and NFT marketplaces. Bypass legacy middleware and route royalty signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Creator Portal", sublabel: "React App & Web3 Wallets", icon: Zap, accent: false },
          { label: "Decentralized Routing", sublabel: "Validator Split Checking", icon: ShieldAlert, accent: true },
          { label: "Cerulea Public L1", sublabel: "Atomic Payment Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom royalty split algorithms and multi-party cap table indexers from scratch requires specialized engineers and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required IP Rules & Payout Routes",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes Web3 creative economy benchmarks. Writing custom royalty distribution logic, negotiating metadata standards for digital twins, and deploying fragile middleware for an average IP application takes a baseline of 6 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your business rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================loyalty-reward-programs
  {
    slug: "loyalty-reward-programs",
    icon: Activity,
    eyebrow: "Platform Use Case",
    headline1: "Un-silo consumer value.",
    headline2: "Unify loyalty rewards.",
    heroDescription: "Convert rigid point systems into liquid digital assets. Deploy interoperable reward networks with instant partner clearing, automated gamification, and total consumer privacy.",
    heroCta: "Deploy Reward Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Interoperable Value", description: "Bypass the limitation of single-brand points. Standardized token logic allows different brands to honor each others rewards instantly, creating a unified liquid economy for consumers." },
      { title: "Instant Partner Clearing", description: "Traditional inter-brand reconciliation takes weeks. Cerulea executes atomic swaps that settle payments between partners the millisecond a user redeems a point." },
      { title: "Secondary Market Access", description: "Allow users to trade or sell high-value loyalty status and points on regulated marketplaces. This turns dead equity into an active incentive, driving higher brand engagement." },
      { title: "Programmatic Expiration", description: "Manage liability automatically. Points are programmed to self-burn or reclaim to treasury after periods of inactivity, keeping brand balance sheets optimized without manual accounting." },
      { title: "Zero-Knowledge Attributes", description: "Verify user tiers (e.g., \"Is Platinum Member\") using cryptographic proofs. Brands can offer personalized experiences without needing access to sensitive user PII or purchase history." },
      { title: "Frictionless DApp Portals", description: "Replace plastic cards and fragmented apps. Users manage their entire global reward portfolio in a single secure wallet, improving UX and increasing redemption velocity." },
    ],
    lifecycleTitle: "The Reward Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a loyalty point from initial issuance to atomic cross-brand redemption.",
    lifecycleSteps: [
      {
        label: "Reward Issuance",
        description: "A customer completes a purchase or action. The enterprise CRM triggers a smart contract to mint reward units, anchoring the value to the user wallet with specific metadata (e.g., expiration, tier level).",
        icon: Shield,
        logFilename: "cerulea_loyalty_engine.log",
        logLines: [
          { text: "[SYS] Ingesting POS event from Store_221...", time: "08:20:53", tone: "default" },
          { text: "[CMD] mintRewards(User_0x9A2, amount: 500, type: \"PREMIUM\")", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Validating brand signature...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Rewards anchored to ledger. User notified via DApp.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Cross-Brand Liquidity",
        description: "The user chooses to redeem points at a partner brand. The smart contract acts as an atomic escrow, locking the points and verifying the exchange rate between different loyalty currencies.",
        icon: Search,
        logFilename: "cerulea_loyalty_engine.log",
        logLines: [
          { text: "[SYS] Initializing redemption handshake...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Escrow: 500 Brand_A_Points -> 50 Brand_B_Credits", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Querying automated liquidity pool for rates...", time: "08:20:53", tone: "default" },
          { text: "[OK] Liquidity locked. Awaiting partner confirmation.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Atomic Redemption",
        description: "The partner brand confirms the redemption. The original points are burned, the new credits are issued, and the clearing payment is settled between the brands in a single atomic transaction.",
        icon: Layers,
        logFilename: "cerulea_loyalty_engine.log",
        logLines: [
          { text: "[SYS] Partner_B scan confirmed...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Execute burn(Brand_A_Points) && mint(Brand_B_Credits)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Routing inter-brand settlement in stablecoin...", time: "08:20:53", tone: "default" },
          { text: "[OK] Settlement complete. Redemption finalized.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "State Maintenance",
        description: "Expired or inactive rewards are automatically reclaimed by the treasury to optimize network state. The system ensures the ledger remains lean and only active value is tracked.",
        icon: Database,
        logFilename: "cerulea_loyalty_engine.log",
        logLines: [
          { text: "[SYS] Scanning for expired points (Block > 1928000)...", time: "08:20:53", tone: "default" },
          { text: "[CMD] burnExpired(Epoch_74)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Reclaiming 12,400 inactive units to treasury...", time: "08:20:53", tone: "default" },
          { text: "[OK] Ledger state pruned. Optimization complete.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea compiles multi-layered reward frameworks designed to handle massive retail volume with high-throughput settlement and absolute data privacy.",
    layers: [
      {
        title: "Balance Architecture",
        subtitle: "The Reward Registry",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reward Registry",
          description: "The foundational layer managing the supply of loyalty units. It tracks pro-rata ownership, supports fractional point values, and handles the logic for transfers, minting, and burning within a specific brand ecosystem.",
          platformFunction: "Balance Architecture",
        },
        codeSnippet: "contract RewardLedger is Initializable {\n  mapping(address => uint256) private _rewardBalances;\n  \n  function _mint(address account, uint256 amount) internal {\n    _totalSupply += amount;\n    _rewardBalances[account] += amount;\n    emit Issued(account, amount);\n  }\n}",
        simAction: "Simulate Point Minting",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting customer purchase: $500 USD...", tone: "default" },
          { text: "Calculating multiplier for Gold Tier (1.5x)...", tone: "default" },
          { text: "Executing _mint() for 750 units...", tone: "default" },
          { text: "Updating state trie for wallet 0x8F1...C33...", tone: "default" },
          { text: "[SUCCESS] Reward balance updated in block 2104992.", tone: "success" },
        ],
      },
      {
        title: "Partner Settlement",
        subtitle: "The Interop Router",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Interop Router",
          description: "Bypasses siloed databases. This contract manages whitelisted partner addresses and allows users to swap points between brands using predefined exchange rates or dynamic liquidity pools.",
          platformFunction: "Partner Settlement",
        },
        codeSnippet: "contract PartnerGateway {\n  mapping(address => uint256) public rates;\n\n  function swapPoints(address targetBrand, uint256 amount) external {\n    require(isWhitelisted(targetBrand), \"Not a partner\");\n    uint256 exchangeVal = amount * rates[targetBrand];\n    ledger.burn(msg.sender, amount);\n    partnerLedger.mint(msg.sender, exchangeVal);\n  }\n}",
        simAction: "Simulate Brand Swap",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "User initiating swap: Airline -> Hotel...", tone: "default" },
          { text: "Checking whitelist for Hotel_Group_Alpha...", tone: "default" },
          { text: "[PASS] Partner verified.", tone: "default" },
          { text: "Executing burn-and-mint atomic sequence...", tone: "default" },
          { text: "[SUCCESS] Value successfully migrated across brand boundaries.", tone: "success" },
        ],
      },
      {
        title: "Reward Logic",
        subtitle: "The Gamification Engine",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Gamification Engine",
          description: "Automates engagement strategies. This layer injects conditional modifiers (e.g., \"Triple points on birthdays\" or \"Bonus points for sustainable purchases\") into the issuance flow without manual intervention.",
          platformFunction: "Reward Logic",
        },
        codeSnippet: "function applyModifiers(address user, uint256 baseAmount) public view returns (uint256) {\n  uint256 multiplier = 100;\n  if (userProfile.isBirthday(user)) multiplier += 50;\n  if (userProfile.isSustainableChoice(user)) multiplier += 20;\n  return (baseAmount * multiplier) / 100;\n}",
        simAction: "Simulate Bonus Logic",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Purchase detected in 'Eco-Friendly' category...", tone: "default" },
          { text: "Querying UserProfile for birthday status...", tone: "default" },
          { text: "[ACTIVE] Birthday detected. Applying +50% bonus.", tone: "default" },
          { text: "[ACTIVE] Eco-Choice detected. Applying +20% bonus.", tone: "default" },
          { text: "[SUCCESS] Final issuance adjusted from 100 to 170 points.", tone: "success" },
        ],
      },
      {
        title: "PII Protection",
        subtitle: "The Identity Abstraction",
        icon: LockKeyhole,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Abstraction",
          description: "To protect consumer data, rewards are linked to a cryptographic DID (Decentralized Identifier). Brands can verify a user loyalty tier or balance without ever accessing their name, email, or phone number.",
          platformFunction: "PII Protection",
        },
        codeSnippet: "contract PrivacyShield {\n  function verifyTier(bytes32 userId, uint8 requiredTier) external view returns (bool) {\n    uint8 currentTier = registry.getTier(userId);\n    return currentTier >= requiredTier;\n  }\n\n  function getMaskedBalance(bytes32 userId) external view returns (uint256) {\n    return registry.balanceOf(userId);\n  }\n}",
        simAction: "Simulate Tier Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Retailer requesting proof of 'Diamond' status...", tone: "default" },
          { text: "User submitting ZK-Proof of tier ownership...", tone: "default" },
          { text: "Verifying signature against DIDRegistry...", tone: "default" },
          { text: "[PASS] User is Diamond level. Data masked.", tone: "default" },
          { text: "[SUCCESS] Access granted to VIP Lounge without exposing ID.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Loyalty tokenization is a horizontal capability. Here is how different sectors utilize this model to increase consumer lifetime value.",
    sectors: [
      { icon: ShieldCheck, title: "Global Retail & E-Commerce", description: "Unify siloed rewards across multiple sub-brands. High-frequency retail environments benefit from Ceruleas high-throughput consensus, allowing for sub-second reward issuance and redemption during checkout.", assetTypes: ["Multi-Brand Coalition", "Cash-Back Stablecoins", "Discount Coupon Vaults"] },
      { icon: Heart, title: "Travel & Hospitality", description: "Issue airline miles or hotel points as tradable assets. By enabling a secondary market for status and miles, travel brands increase the perceived value of their program without increasing their underlying cost basis.", assetTypes: ["Mileage Marketplaces", "VIP Tier Tokenization", "Access Pass NFTs"] },
      { icon: BrainCircuit, title: "Financial Services & FinTech", description: "Deploy credit card reward ecosystems where points are actually fractional shares of an investment fund or a gold-pegged asset, providing users with real appreciating value instead of eroding points.", assetTypes: ["Asset-Backed Rewards", "Yield-Generating Points", "Crypto-Rebate Cards"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy POS systems or deploying native mobile wallets, Cerulea provides the exact infrastructure routing required.",
    tracks: [
      {
        title: "Track A: Enterprise CRM Bridging",
        description: "For institutional retail brands. Legacy purchase data from Salesforce or SAP is translated into secure reward token minting logic automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy CRM Core", sublabel: "Salesforce / SAP Database", icon: RefreshCw, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Issuance Validation", icon: Briefcase, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Reward State", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Mobile Wallet Execution",
        description: "For native Web3 rewards and direct consumer portals. Bypass legacy middleware and route mobile app signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Reward DApp", sublabel: "React Portal & Digital Wallets", icon: Globe, accent: false },
          { label: "Decentralized Liquidity", sublabel: "Swap & Tally Nodes", icon: Braces, accent: true },
          { label: "Cerulea Public L1", sublabel: "Atomic Swap Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom cross-brand reward swap logic and high-frequency retail indexers from scratch requires specialized engineers and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Reward Modifiers & Integrations",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes Web3 retail benchmarks. Writing custom loyalty logic, negotiating data standards between partners, and deploying fragile middleware for an average application takes a baseline of 6 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your engagement rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================microtransactions-streaming
  {
    slug: "microtransactions-streaming",
    icon: Hammer,
    eyebrow: "Platform Use Case",
    headline1: "Stream value per byte.",
    headline2: "Near-zero transaction fees.",
    heroDescription: "Deploy high-throughput payment channels for real-time content streaming, pay-per-use APIs, and machine-to-machine economies using Cerulea high-speed state routing.",
    heroCta: "Deploy Micropayment Channels",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "State Channel Architecture", description: "Execute thousands of transactions per second off-chain. By moving micro-payments into secure state channels, the network eliminates the bottleneck of global block confirmation for every sub-cent transfer." },
      { title: "Zero-Gas Increments", description: "Drive the cost of small transfers to near zero. Because individual micro-transactions are signed off-chain and only the final aggregate state is anchored, users can stream value for the cost of a single L1 transaction." },
      { title: "Pay-Per-Millisecond Billing", description: "Enable absolute precision. Content platforms can bill users down to the exact second of consumption, while API providers can charge precisely per byte of outbound data transferred." },
      { title: "Machine-to-Machine Flow", description: "Un-silo the IoT economy. Autonomous machines use Cerulea payment channels to pay each other for sensor data, electricity, or bandwidth without any human administration or credit card fees." },
      { title: "Deterministic Rebalancing", description: "Automate liquidity management. High-volume payment hubs utilize smart contracts to automatically rebalance their channel deposits, ensuring they can always route capital across the network." },
      { title: "Atomic Fraud Protection", description: "The ledger acts as a neutral judge. In the event of a dispute, any party can submit their latest signed state to the reconciler, which mathematically determines the correct payout and penalizes the malicious actor." },
    ],
    lifecycleTitle: "The Streaming Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a microtransaction stream from initial deposit to global block finality.",
    lifecycleSteps: [
      {
        label: "Channel Initialization",
        description: "A user or machine opens a high-velocity payment channel by locking a base deposit into a smart contract. This establishes a secure off-chain environment for unlimited sub-cent transfers.",
        icon: RefreshCcw,
        logFilename: "cerulea_stream_logic.log",
        logLines: [
          { text: "[SYS] Initializing Payment Channel...", time: "08:20:53", tone: "default" },
          { text: "[CMD] openChannel { user: 0x7B2, deposit: 50.00 USDC }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying cryptographic signature...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Channel established. Ready for streaming execution.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Continuous Streaming",
        description: "Value begins to flow. For every second of video watched or kilobyte of data processed, a signed state update is exchanged off-chain. These updates are nearly instant and incur zero gas fees.",
        icon: Server,
        logFilename: "cerulea_stream_logic.log",
        logLines: [
          { text: "[SYS] Detecting active data stream...", time: "08:20:53", tone: "default" },
          { text: "[CMD] updateState { seq: 1042, balance_delta: -0.0001 USDC }", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Exchanging off-chain cryptographic witnesses...", time: "08:20:53", tone: "default" },
          { text: "[OK] Stream active. Tallying 1,000 updates per second.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Periodic Reconciliation",
        description: "The off-chain state is periodically reconciled. The smart contract validates the latest aggregate signature from both parties, ensuring the total net balance is accurate without hashing every single tiny transfer.",
        icon: IdCardLanyard,
        logFilename: "cerulea_stream_logic.log",
        logLines: [
          { text: "[SYS] Reached reconciliation checkpoint...", time: "08:20:53", tone: "default" },
          { text: "[CMD] verifyAggregate(Latest_State_Proof)", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Validating dual-party counter-signatures...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] State valid. Updating internal balance pointers.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Final Settlement",
        description: "The channel is closed definitively. The final net balance is written to the Cerulea L1 ledger in a single transaction. The original deposit is split and released to both parties with absolute finality.",
        icon: ShieldCog,
        logFilename: "cerulea_stream_logic.log",
        logLines: [
          { text: "[SYS] Close request detected from node 0x7B2...", time: "08:20:53", tone: "default" },
          { text: "[CMD] finalizeSettlement(final_balance: 48.92 USDC)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Pushing final state update to block 2049188...", time: "08:20:53", tone: "default" },
          { text: "[OK] Channel closed. 1.08 USDC routed to provider.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages high-frequency capital through specialized, modular smart contracts. This layered approach ensures that millions of sub-cent updates can be processed off-chain while retaining the full security of the main ledger.",
    layers: [
      {
        title: "Channel Identity",
        subtitle: "The Metadata Ledger",
        icon: Sparkles,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Metadata Ledger",
          description: "The foundational data layer. It manages the identities of the participants and the initial capital deposits. It ensures that every streaming channel has a unique, verifiable pointer on the main execution layer.",
          platformFunction: "Channel Identity",
        },
        codeSnippet: "contract StreamRegistry {\n  struct Channel {\n    address sender;\n    address recipient;\n    uint256 deposit;\n    uint256 nonce;\n    bool isOpen;\n  }\n  \n  mapping(bytes32 => Channel) public activeChannels;\n\n  function open(address to) external payable {\n    bytes32 id = keccak256(abi.encode(msg.sender, to));\n    activeChannels[id] = Channel(msg.sender, to, msg.value, 0, true);\n  }\n}",
        simAction: "Simulate Channel Boot",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling channel parameters for User_0x992...", tone: "default" },
          { text: "Locking 50.00 USDC into isolated vault state...", tone: "default" },
          { text: "Generating unique Channel_UID via keccak256...", tone: "default" },
          { text: "Writing metadata to Level 1 Storage...", tone: "default" },
          { text: "[SUCCESS] Payment corridor permanently registered.", tone: "success" },
        ],
      },
      {
        title: "Signature Validation",
        subtitle: "The Off-Chain Interceptor",
        icon: SquareTerminal,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Off-Chain Interceptor",
          description: "Bypasses block times. This module validates the cryptographic \"handshakes\" that happen off-chain. It ensures that every micro-payment update is backed by a valid digital signature before allowing it to influence the final settlement.",
          platformFunction: "Signature Validation",
        },
        codeSnippet: "contract StateHook {\n  function verifyUpdate(bytes32 id, uint256 amount, bytes calldata sig) \n    public view returns (bool) \n  {\n    bytes32 message = keccak256(abi.encode(id, amount));\n    return Recoverer.verify(message, sig) == registry.getSender(id);\n  }\n}",
        simAction: "Simulate State Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting off-chain update #10,481...", tone: "default" },
          { text: "Extracting delta: 0.00052 USDC...", tone: "default" },
          { text: "Recovering ECDSA signature from payload...", tone: "default" },
          { text: "[PASS] Signature matches registered Sender wallet.", tone: "default" },
          { text: "[SUCCESS] High-frequency update validated.", tone: "success" },
        ],
      },
      {
        title: "Delta Calculation",
        subtitle: "The Math Processor",
        icon: ScanHeart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Math Processor",
          description: "The active logic core. It calculates the net difference between the initial deposit and the final streamed amount. It handles the complex integer math required for sub-cent precision without losing accuracy over millions of cycles.",
          platformFunction: "Delta Calculation",
        },
        codeSnippet: "function calculateNet(uint256 deposit, uint256 streamed) \n  internal pure returns (uint256, uint256) \n{\n  require(streamed <= deposit, \"Overdrawn\");\n  return (streamed, deposit - streamed);\n}",
        simAction: "Simulate Final Tally",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting aggregate stream total: 1.2842 USDC...", tone: "default" },
          { text: "Checking against initial vault deposit: 50.00 USDC...", tone: "default" },
          { text: "Calculating pro-rata splits for closure...", tone: "default" },
          { text: "[PASS] Balance verified. No overdraft detected.", tone: "default" },
          { text: "[SUCCESS] Net settlement values calculated.", tone: "success" },
        ],
      },
      {
        title: "Dispute Resolution",
        subtitle: "The Settlement Guard",
        icon: ScanLine,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Settlement Guard",
          description: "The final security layer. If one party goes offline or attempts to submit an old state, this contract manages the \"challenge period.\" It allows the honest party to submit a newer proof to prevent theft of the deposited funds.",
          platformFunction: "Dispute Resolution",
        },
        codeSnippet: "function challengeSettlement(bytes32 id, bytes calldata proof) external {\n  require(block.timestamp < expiry[id], \"Challenge period over\");\n  if (verifyUpdate(id, proof)) {\n    registry.updateWinningState(id, proof);\n  }\n}",
        simAction: "Simulate Dispute Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Closing channel. Opening 24-hour challenge window...", tone: "default" },
          { text: "Monitoring for adversarial state submissions...", tone: "default" },
          { text: "[PASS] No counter-proofs detected within timeframe.", tone: "default" },
          { text: "Executing release(Final_State) function...", tone: "default" },
          { text: "[SUCCESS] Funds distributed. Block finality achieved.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Sub-cent payment routing is a horizontal capability. Here is how different sectors utilize this model to unify real-time value flow.",
    sectors: [
      { icon: QrCode, title: "IoT & Connected Hardware", description: "Enable machines to trade resources autonomously. Sensors can pay each other for bandwidth or power in micro-increments, allowing for self-sustaining decentralized physical infrastructure networks (DePIN) without manual billing cycles.", assetTypes: ["P2P Grid Trading", "Bandwidth Marketplaces", "Sensor Data Feeds"] },
      { icon: Users, title: "Media & Digital Content", description: "Replace restrictive subscription models with fluid pay-as-you-go. Users pay a fraction of a cent per page viewed or minute of audio streamed, providing creators with immediate revenue while reducing barrier to entry for consumers.", assetTypes: ["Pay-per-minute Video", "Article Micropayments", "Creator Tipping"] },
      { icon: Leaf, title: "SaaS & API Economies", description: "Modernize developer ecosystems. APIs can charge users per individual request or per 1,000 tokens of LLM processing, enabling a granular pay-per-use model that scales perfectly with consumption.", assetTypes: ["API Call Credits", "Compute-per-Request", "Cloud Seat Fractionalizing"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy billing systems or routing native off-chain state updates, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Billing Bridging",
        description: "For institutional SaaS and media platforms. Legacy usage data from existing databases is securely hashed and anchored into state-channel settlement logic automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Billing Core", sublabel: "Stripe / Zuora Database", icon: Landmark, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Channel State Mapping", icon: Wallet, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Payout State", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Off-Chain Execution",
        description: "For IoT devices and decentralized streaming apps. Bypass legacy middleware and route cryptographic update signatures directly to the high-speed state reconciler.",
        connectorLabels: ["WALLET SIGNATURE", "STATE RECONCILIATION"],
        nodes: [
          { label: "End-User App / Device", sublabel: "React Portal & Hardware Wallets", icon: Network, accent: false },
          { label: "State Channel Network", sublabel: "Off-Chain Tally Nodes", icon: Vote, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Payout Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom state channels and cryptographic reconcilers from scratch requires world-class backend engineering and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Billing Intervals & Channels",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology: "The legacy development timeline utilizes Web3 performance benchmarks. Writing custom state channel logic, negotiating data standards with IoT protocols, and deploying fragile middleware for an average application takes a baseline of 6 months, plus additional variable time for necessary third party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 1 week. This acceleration is achieved because Cerulea Studio visually translates your high-frequency rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================parametric-insurance-payouts
  {
    slug: "parametric-insurance-payouts",
    icon: ScrollText,
    eyebrow: "Platform Use Case",
    headline1: "Automate policy payouts.",
    headline2: "Automate claims processing.",
    heroDescription: "Deploy deterministic insurance contracts that trigger instant, mathematically guaranteed payouts based entirely on verifiable real-world oracle data.",
    heroCta: "Deploy Insurance Contracts",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Deterministic Execution", description: "Smart contracts execute strictly as coded. If a predefined condition is met, the payout triggers automatically. This completely removes subjective human interpretation from the claims process." },
      { title: "Oracle Ingestion", description: "Connect policies to decentralized oracle networks. This allows the blockchain to securely access real-world data like seismology reports, flight radars, and agricultural weather telemetry." },
      { title: "Automated Escrow", description: "Capital is pre-funded into programmatic escrow vaults. The network mathematically guarantees that the insurer has the exact liquidity required to cover the policy if the event occurs." },
      { title: "Trustless Verification", description: "Because the data payload and the payout logic are both permanently anchored to a public or consortium ledger, third-party auditors can instantly verify that the claim was settled fairly." },
      { title: "Micro-Premiums", description: "High-throughput consensus architecture enables micro-insurance models. Users can purchase highly specific policies for fractions of a cent, allowing coverage for localized, short-term risks." },
      { title: "Algorithmic Actuaries", description: "Integrate complex data models directly into the underwriting logic. Premium pricing updates dynamically in real-time based on live environmental risk factors ingested by the network." },
    ],
    lifecycleTitle: "The Parametric Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a smart policy from underwriting to automated claim execution.",
    lifecycleSteps: [
      {
        label: "Policy Underwriting",
        description: "The insurer and the client agree to specific mathematical parameters. The smart contract is deployed, locking the maximum potential payout securely into an immutable escrow vault.",
        icon: Cpu,
        logFilename: "cerulea_policy_engine.log",
        logLines: [
          { text: "[SYS] Initializing Parametric Policy Compiler...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Define Risk { type: \"DROUGHT\", threshold: \"< 5cm rainfall\", duration: \"30 days\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying Insurer treasury collateral deposit...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] 500,000 USDC locked in escrow. Policy active.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Oracle Telemetry Ingestion",
        description: "The smart contract continuously monitors external data feeds via decentralized oracles. This guarantees the network receives tamper-proof data regarding real-world events like weather or flight statuses.",
        icon: Fingerprint,
        logFilename: "cerulea_policy_engine.log",
        logLines: [
          { text: "[SYS] Polling Decentralized Oracle Network...", time: "08:20:53", tone: "default" },
          { text: "[CMD] GET https://api.noaa.gov/weather/region_7A", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Awaiting multiple node consensus for data validity...", time: "08:20:53", tone: "default" },
          { text: "[OK] Data validated. Current rainfall metric: 3.2cm.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Deterministic Trigger",
        description: "Once the oracle data crosses the exact mathematical threshold defined in the policy, the smart contract state changes automatically. No human claims adjuster is required to verify the event.",
        icon: FlaskConical,
        logFilename: "cerulea_policy_engine.log",
        logLines: [
          { text: "[SYS] Evaluating telemetry against Policy ID 8842...", time: "08:20:53", tone: "default" },
          { text: "[CMD] conditionCheck(currentRainfall < thresholdRainfall)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Condition met (3.2cm < 5.0cm).", time: "08:20:53", tone: "default" },
          { text: "[OK] Policy threshold breached. Initiating settlement sequence.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Autonomous Payout",
        description: "The execution engine releases the capital from escrow directly to the policyholder wallet. The entire claims and payout process is resolved in milliseconds.",
        icon: Archive,
        logFilename: "cerulea_policy_engine.log",
        logLines: [
          { text: "[SYS] Triggering Escrow Execution Vault...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Execute transfer(PolicyHolder_Wallet, 500000)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Updating ledger state and closing policy contract...", time: "08:20:53", tone: "default" },
          { text: "[OK] Settlement complete. Zero administrative intervention.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea compiles multi-layered parametric policies capable of safely ingesting external data and managing significant escrow value with zero administrative friction.",
    layers: [
      {
        title: "Contract State Tracking",
        subtitle: "The Policy Registry",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Policy Registry",
          description: "The foundational data structure. It registers the exact parameters of the insurance agreement, including the identities of the insured and the insurer, the specific trigger thresholds, and the policy expiration block.",
          platformFunction: "Contract State Tracking",
        },
        codeSnippet: "contract PolicyRegistry {\n  struct Policy {\n    address insured;\n    uint256 payoutAmount;\n    uint256 triggerThreshold;\n    uint256 expirationTime;\n    bool isActive;\n  }\n  \n  mapping(uint256 => Policy) public policies;\n\n  function createPolicy(uint256 id, address client, uint256 threshold) external {\n    policies[id] = Policy(client, msg.value, threshold, block.timestamp + 365 days, true);\n  }\n}",
        simAction: "Simulate Policy Creation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling policy parameters for Client 0x7B2...F11...", tone: "default" },
          { text: "Setting trigger threshold to 500 units...", tone: "default" },
          { text: "Locking provided capital into specific contract index...", tone: "default" },
          { text: "Writing struct to Level 1 Storage...", tone: "default" },
          { text: "[SUCCESS] Policy #8842 actively registered on network.", tone: "success" },
        ],
      },
      {
        title: "Payment Automation",
        subtitle: "The Premium Router",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Premium Router",
          description: "This module handles the continuous collection of insurance premiums. It can process microscopic streaming payments per second or handle traditional monthly bulk transfers, automatically voiding the policy if the user defaults.",
          platformFunction: "Payment Automation",
        },
        codeSnippet: "contract PremiumRouter {\n  mapping(uint256 => uint256) public nextPaymentDue;\n\n  function payPremium(uint256 policyId) external payable {\n    require(msg.value == requiredPremium, \"Incorrect amount\");\n    nextPaymentDue[policyId] = block.timestamp + 30 days;\n    _routeToTreasury(msg.value);\n  }\n\n  function checkDefault(uint256 policyId) external {\n    if(block.timestamp > nextPaymentDue[policyId]) {\n      registry.voidPolicy(policyId);\n    }\n  }\n}",
        simAction: "Simulate Premium Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting inbound stablecoin transfer...", tone: "default" },
          { text: "Validating amount against Policy #8842 required premium...", tone: "default" },
          { text: "Updating nextPaymentDue timestamp...", tone: "default" },
          { text: "Routing capital to Insurer Treasury pool...", tone: "default" },
          { text: "[SUCCESS] Premium processed. Policy remains active.", tone: "success" },
        ],
      },
      {
        title: "Telemetry Validation",
        subtitle: "The Oracle Interceptor",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Oracle Interceptor",
          description: "Smart contracts cannot access the internet directly. This module connects to decentralized Oracle Networks (like Chainlink) to securely pull external Web2 data (like weather APIs or flight trackers) into the Web3 execution environment.",
          platformFunction: "Telemetry Validation",
        },
        codeSnippet: "contract OracleInterceptor {\n  function requestTelemetry(bytes32 jobId) external {\n    Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);\n    req.add(\"get\", \"https://api.aviationstack.com/v1/flights\");\n    req.add(\"path\", \"data.0.flight_status\");\n    sendChainlinkRequest(req, oracleFee);\n  }\n\n  function fulfill(bytes32 _requestId, string memory status) public recordChainlinkFulfillment(_requestId) {\n    latestStatus = status;\n    executionVault.evaluateTrigger(status);\n  }\n}",
        simAction: "Simulate Oracle Ingestion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Firing data request to decentralized Oracle nodes...", tone: "default" },
          { text: "Oracles pinging external Web2 API endpoint...", tone: "default" },
          { text: "Consolidating responses to prevent single-source manipulation...", tone: "default" },
          { text: "Returning cryptographically signed result: 'CANCELLED'...", tone: "default" },
          { text: "[SUCCESS] External state securely anchored to ledger.", tone: "success" },
        ],
      },
      {
        title: "Atomic Payouts",
        subtitle: "The Execution Vault",
        icon: Copyright,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Execution Vault",
          description: "The final executor. Once the Oracle Interceptor confirms a threshold breach, this contract instantly releases the locked escrow funds to the policyholder. It mathematically guarantees that if the event happens, the payout cannot be stopped.",
          platformFunction: "Atomic Payouts",
        },
        codeSnippet: "contract ExecutionVault {\n  function evaluateTrigger(uint256 policyId, uint256 currentMetric) external onlyOracle {\n    Policy memory p = registry.getPolicy(policyId);\n    require(p.isActive, \"Policy voided\");\n    \n    if (currentMetric >= p.triggerThreshold) {\n      registry.markClaimed(policyId);\n      payable(p.insured).transfer(p.payoutAmount);\n      emit PayoutExecuted(policyId, p.insured, p.payoutAmount);\n    }\n  }\n}",
        simAction: "Simulate Trigger Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving validated telemetry from Oracle Interceptor...", tone: "default" },
          { text: "Evaluating metric against Policy #8842 threshold...", tone: "default" },
          { text: "[PASS] Threshold exceeded. Trigger condition met.", tone: "default" },
          { text: "Unlocking 500,000 USDC from escrow vault...", tone: "default" },
          { text: "[SUCCESS] Capital routed to insured wallet. Policy closed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Parametric logic is a horizontal execution model. Here is how different sectors utilize this to automate risk management.",
    sectors: [
      { icon: Gift, title: "Agriculture & Crop Protection", description: "Protect global food supply chains. Smart contracts ingest satellite and IoT weather data. If drought conditions breach the agreed threshold, farmers receive financial relief instantly without waiting for a manual adjuster.", assetTypes: ["Drought & Flood Protection", "Yield Failure Escrow", "Micro-Farmer Insurance"] },
      { icon: Zap, title: "Travel & Aviation Risk", description: "Eliminate horrible customer service loops. If an external flight radar oracle detects a cancellation or severe delay, the policy triggers automatically, sending compensation directly to the traveler's wallet while they are still at the airport.", assetTypes: ["Flight Delay Payouts", "Lost Baggage Tracking", "Travel Interruption Shield"] },
      { icon: ShieldAlert, title: "Supply Chain Logistics", description: "Secure international shipping. Smart policies monitor port authorities and IoT container sensors. If transit exceeds a time threshold or cold chain temperatures fail, the cargo owner is instantly reimbursed.", assetTypes: ["Cold-Chain Failures", "Port Congestion Delays", "Maritime Incident Coverage"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy underwriting software or routing decentralized oracle data, Cerulea provides the exact infrastructure routing required.",
    tracks: [
      {
        title: "Track A: Enterprise Underwriting Bridging",
        description: "For institutional carriers and re-insurers. Legacy HTTP requests from actuarial software are translated into secure policy escrow logic automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Insurer Core", sublabel: "Guidewire / Actuarial DB", icon: HeartPulse, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Policy Parameter Validation", icon: Activity, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Escrow State", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Oracle Execution",
        description: "For distributed risk pools and DeFi insurance. Bypass legacy middleware and route decentralized data telemetry directly to the public execution layer.",
        connectorLabels: ["JSON", "STATE EXECUTION"],
        nodes: [
          { label: "External Event Data", sublabel: "Weather APIs & Flight Logs", icon: Search, accent: false },
          { label: "Decentralized Oracles", sublabel: "Data Consensus Nodes", icon: Layers, accent: true },
          { label: "Cerulea Public L1", sublabel: "Trigger & Payout Logic", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom oracle interceptors and multi-condition execution vaults from scratch requires specialized actuaries and massive external audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Actuarial Conditions & Oracles",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes Web3 DeFi benchmarks. Writing custom oracle validation logic, negotiating data standards with API providers, and deploying fragile escrow middleware for an average policy application takes a baseline of 6 months, plus significant variable time for necessary third-party security audits. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your actuarial rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================smart-legal-escrow
  {
    slug: "smart-legal-escrow",
    icon: Truck,
    eyebrow: "Platform Use Case",
    headline1: "Execute trustless agreements.",
    headline2: "Trustless by design.",
    heroDescription: "Convert rigid legal escrows into programmable digital vaults. Deploy conditional settlement contracts with automated arbitration, multi-sig security, and atomic capital release.",
    heroCta: "Deploy Escrow Contracts",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Conditional Settlement", description: "Capital is only released when specific mathematical conditions are met. This removes the need for a central escrow agent to manually verify documents, reducing transaction time from days to milliseconds." },
      { title: "Multi-Sig Arbitration", description: "Assign independent legal oracles to serve as arbitrators. In the event of a dispute, these entities must provide a cryptographic signature to force a refund or payout, ensuring fair resolution." },
      { title: "Time-Locked Liquidity", description: "Program mandatory \"cooling-off\" periods directly into the contract state. Funds remain untouchable until a specific block height or timestamp is reached, protecting both parties from impulsive actions." },
      { title: "Automated KYC Compliance", description: "Integrate identity registries directly. Escrow contracts will automatically reject deposits or releases if a participants cryptographic identity does not hold active compliance credentials." },
      { title: "Atomic Handover", description: "For digital assets, the handover and payment occur in a single state change. The buyer receives the asset UID at the exact microsecond the seller receives the stablecoin capital." },
      { title: "Verifiable Audit Trail", description: "Every step of the agreement, from funding to dispute to final settlement, is permanently hashed to the ledger, providing an unalterable forensic record for legal and financial auditors." },
    ],
    lifecycleTitle: "The Escrow Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a legal agreement as it is funded, verified, and settled on the network.",
    lifecycleSteps: [
      {
        label: "Agreement Definition",
        description: "The buyer and seller define the mathematical conditions for the release of funds. These parameters, including price, inspection periods, and oracle requirements, are compiled into a unique contract instance.",
        icon: Scale,
        logFilename: "cerulea_settlement_engine.log",
        logLines: [
          { text: "[SYS] Initializing Escrow logic builder...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Define Agreement { buyer: 0x7B2, seller: 0x992, amount: 1.2M, condition: \"DOC_VERIFIED\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Generating contract salt and deploying instance...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Agreement initialized. Awaiting capital deposit.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Capital Funding",
        description: "The buyer deposits the agreed stablecoin capital into the immutable escrow vault. The funds are held in a trustless state where neither the buyer nor the seller can move them unilaterally.",
        icon: Boxes,
        logFilename: "cerulea_settlement_engine.log",
        logLines: [
          { text: "[SYS] Detecting inbound capital from Buyer_0x7B2...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Deposit: 1,200,000 USDC", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Locking capital in isolated contract storage...", time: "08:20:53", tone: "default" },
          { text: "[OK] Funding confirmed. Timelock and condition monitoring activated.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Condition Verification",
        description: "The smart contract monitors the external environment. Once the required conditions (like a title transfer scan or a legal document signature) are verified by an oracle, the state change is triggered.",
        icon: LockKeyhole,
        logFilename: "cerulea_settlement_engine.log",
        logLines: [
          { text: "[SYS] Polling Legal_Registry_Oracle...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Query status: TITLE_TRANSFER_ID_481", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Oracle Attestation Received: [CONFIRMED]", time: "08:20:53", tone: "default" },
          { text: "[OK] Release conditions met. Initiating atomic settlement.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Atomic Release",
        description: "The contract autonomously releases the capital to the seller while simultaneously transferring the digital asset keys or deeds to the buyer. If any step fails, the capital remains protected.",
        icon: ShieldCheck,
        logFilename: "cerulea_settlement_engine.log",
        logLines: [
          { text: "[SYS] Triggering Escrow Settlement Module...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Execute transfer(Seller_0x992, 1.2M)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Updating ledger state and closing escrow...", time: "08:20:53", tone: "default" },
          { text: "[OK] Settlement complete. Transaction finalized with absolute finality.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages trustless agreements through specialized, siloed contract modules. This architectural isolation ensures that capital preservation and execution logic are handled with absolute security.",
    layers: [
      {
        title: "Capital Preservation",
        subtitle: "Capital Custody Logic",
        icon: Heart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "Capital Custody Logic",
          description: "The foundational holding layer. It ensures that capital is held in a strictly isolated account on the ledger. Funds can only be moved via internal calls from the higher logic layers, preventing direct withdrawal or tampering.",
          platformFunction: "Capital Preservation",
        },
        codeSnippet: "contract EscrowVault is Initializable {\n  uint256 public lockedBalance;\n  \n  function deposit() external payable onlyBuyer {\n    lockedBalance += msg.value;\n    emit FundsLocked(msg.sender, msg.value);\n  }\n\n  function _release(address to, uint256 amount) internal {\n    require(amount <= lockedBalance, \"Insufficent\");\n    payable(to).transfer(amount);\n  }\n}",
        simAction: "Simulate Funds Lock",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initializing capital isolation protocol...", tone: "default" },
          { text: "Ingesting 1,200,000 USDC from Buyer...", tone: "default" },
          { text: "Writing balance to restricted contract storage...", tone: "default" },
          { text: "Disabling manual withdraw() function...", tone: "default" },
          { text: "[SUCCESS] Capital secured. Vault state locked.", tone: "success" },
        ],
      },
      {
        title: "Trigger Execution",
        subtitle: "The Logic Interceptor",
        icon: BrainCircuit,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Logic Interceptor",
          description: "This module acts as the contracts brain. It evaluates incoming data from trusted oracles or multi-sig signatures against the predefined agreement conditions. It is the only module capable of authorizing the vault to release capital.",
          platformFunction: "Trigger Execution",
        },
        codeSnippet: "contract ConditionVerifier {\n  function checkConditions(bytes32 agreementId) external view returns (bool) {\n    return oracle.isConditionMet(agreementId) && block.timestamp >= timelock[agreementId];\n  }\n\n  function authorizeRelease(bytes32 id) external {\n    require(checkConditions(id), \"Conditions not met\");\n    vault.release(seller, amount);\n  }\n}",
        simAction: "Simulate Logic Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying Oracle for 'Inspection_Passed' flag...", tone: "default" },
          { text: "Checking block time against 24h cooling-off period...", tone: "default" },
          { text: "[PASS] Oracle attestation valid.", tone: "default" },
          { text: "[PASS] Timelock expired.", tone: "default" },
          { text: "[SUCCESS] Logic verified. Triggering release sequence.", tone: "success" },
        ],
      },
      {
        title: "Corporate Governance",
        subtitle: "The Arbitration Oracle",
        icon: RefreshCw,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Arbitration Oracle",
          description: "A fail-safe layer for complex legal disputes. It defines a third-party arbitrator address (like a law firm multi-sig) that can pause the escrow or force a refund if the original conditions are contested by either party.",
          platformFunction: "Corporate Governance",
        },
        codeSnippet: "function openDispute(string calldata reason) external {\n  require(msg.sender == buyer || msg.sender == seller, \"No standing\");\n  isDisputed = true;\n  emit DisputeOpened(reason);\n}\n\nfunction resolve(uint8 resolution) external onlyArbitrator {\n  if (resolution == REFUND) _release(buyer, amount);\n  else if (resolution == PAYOUT) _release(seller, amount);\n}",
        simAction: "Simulate Dispute",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer initiating Dispute Protocol #882...", tone: "default" },
          { text: "Freezing all capital movement in Vault...", tone: "default" },
          { text: "Alerting assigned Arbitrator: [Jones & Associates]...", tone: "default" },
          { text: "Awaiting Arbitrator multi-sig resolution...", tone: "default" },
          { text: "[SUCCESS] Payout paused. Governance active.", tone: "success" },
        ],
      },
      {
        title: "Fee & Tax Splitting",
        subtitle: "The Distribution Core",
        icon: Briefcase,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Distribution Core",
          description: "The final distribution engine. It handles the complex math of splitting the released capital, automatically deducting platform fees, legal taxes, or commission splits before the final amount reaches the seller.",
          platformFunction: "Fee & Tax Splitting",
        },
        codeSnippet: "function executeDistribution(address seller, uint256 total) internal {\n  uint256 fee = (total * platformBps) / 10000;\n  uint256 tax = (total * taxBps) / 10000;\n  \n  payable(platformTreasury).transfer(fee);\n  payable(taxAuth).transfer(tax);\n  payable(seller).transfer(total - fee - tax);\n}",
        simAction: "Simulate Fee Split",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initializing distribution for 1,200,000 USDC...", tone: "default" },
          { text: "Calculating platform fee (0.5%): 6,000 USDC...", tone: "default" },
          { text: "Calculating legal withholding (1.0%): 12,000 USDC...", tone: "default" },
          { text: "Routing net balance to Seller wallet...", tone: "default" },
          { text: "[SUCCESS] Multi-party settlement settled atomically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Trustless escrow is a horizontal capability. Here is how different sectors utilize this execution model to unify complex transactions.",
    sectors: [
      { icon: Lock, title: "Real Estate & Title Transfer", description: "Eliminate 30-day closing cycles. Stablecoin capital is held in the smart vault and only released the millisecond the digital land deed is cryptographically transferred, bypassing manual escrow delays.", assetTypes: ["Deed Handover", "Rental Security Deposits", "Earnest Money Vaults"] },
      { icon: Globe, title: "M&A and Corporate Finance", description: "Manage massive acquisition capital. Smart contracts enforce complex earn-out structures, where capital is released in tranches only after the acquired entity meets specific verifiable performance KPIs.", assetTypes: ["KPI-Based Earn-outs", "Milestone Grant Escrow", "Secured Asset Purchase"] },
      { icon: Braces, title: "High-Value Digital Marketplaces", description: "Secure the purchase of domain names, luxury digital fashion, or gaming infrastructure. Trustless escrow ensures that the buyer cannot receive the digital asset without the capital being locked and verified.", assetTypes: ["Domain Name Escrow", "Gaming Node Swap", "Fractional Art Sales"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy banking infrastructure or deploying native Web3 settlements, Cerulea provides the exact routing required.",
    tracks: [
      {
        title: "Track A: Enterprise Financial Bridging",
        description: "For institutional banks and legal firms. Legacy HTTP requests from core banking software are translated into secure policy escrow logic automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Banking Core", sublabel: "Fiserv / Jack Henry DB", icon: FingerprintPattern, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Escrow Logic Mapping", icon: Hammer, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Payout Ledger", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Atomic Execution",
        description: "For decentralized marketplaces and P2P trades. Bypass legacy middleware and route cryptographic agreement signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Escrow Portal", sublabel: "React Client & Node JS", icon: Server, accent: false },
          { label: "Decentralized Oracles", sublabel: "Condition Consensus Nodes", icon: IdCardLanyard, accent: true },
          { label: "Cerulea Public L1", sublabel: "Atomic Vault Release", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom multi-sig vaults and oracle-linked arbitration systems from scratch requires specialized legal engineering and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Escrow Parameters & Participants",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology: "The legacy development timeline utilizes Web3 legal infrastructure benchmarks. Writing custom settlement vaults, negotiating data standards with arbitration bodies, and deploying fragile middleware for an average application takes a baseline of 4 months. Building the exact same logical architecture via Cerulea requires a baseline of 1 week. This acceleration is achieved because Cerulea Studio visually translates your legal rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================traceability-provenance
  {
    slug: "traceability-provenance",
    icon: Sparkles,
    eyebrow: "Platform Use Case",
    headline1: "Trace every item.",
    headline2: "Full supply chain visibility.",
    heroDescription: "Deploy end to end tracking networks with cryptographic custody handoffs, real time IoT monitoring, and unalterable Digital Product Passports.",
    heroCta: "Deploy Traceability Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Digital Product Passports", description: "Every physical asset holds a unique digital identity on the ledger. This passport aggregates all historical data, from raw material sourcing to final retail delivery, in one verifiable thread." },
      { title: "Multi-Party Attestation", description: "Custody handovers require dual-party cryptographic signatures. This ensures that the digital ledger and the physical movement of goods are always perfectly synchronized across independent vendors." },
      { title: "IoT Condition Monitoring", description: "Integrate hardware sensors directly into the smart contract. If temperature or shock thresholds are breached during transit, the contract automatically triggers a compliance flag or insurance claim." },
      { title: "Tokenized Inventory", description: "Convert physical shipments into liquid digital assets. This allows for automated invoice factoring and trade finance, where capital is released the moment a digital custody scan is verified." },
      { title: "Anti-Counterfeit Proofs", description: "Blockchain provenance eliminates the possibility of cloning serial numbers. Each digital ID is mathematically unique and tied to a verified manufacturer wallet, exposing fakes instantly." },
      { title: "Consumer Transparency", description: "Grant end-users absolute visibility. Consumers scan a product to view its entire journey, from ethical sourcing certifications to the carbon footprint generated during shipping." },
    ],
    lifecycleTitle: "The Traceability Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a physical product from the point of origin to final delivery.",
    lifecycleSteps: [
      {
        label: "Batch Initialization",
        description: "A manufacturer creates a digital twin for a physical production batch. Global identifiers like GTIN or serial numbers are cryptographically anchored to a Digital Product Passport.",
        icon: SquareTerminal,
        logFilename: "cerulea_provenance_engine.log",
        logLines: [
          { text: "[SYS] Initializing Provenance Engine...", time: "08:20:53", tone: "default" },
          { text: "[CMD] CreateBatch { id: \"BCH_992\", origin: \"Factory_7A\", qty: 5000 }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Generating unique SHA-256 batch fingerprint...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Batch initialized and anchored to block 1955021.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Custody Handover",
        description: "As goods move from the factory to a logistics provider, a multi-signature transaction reassigns the \"Responsible Wallet.\" Both parties must sign to confirm the physical transfer.",
        icon: ScanHeart,
        logFilename: "cerulea_provenance_engine.log",
        logLines: [
          { text: "[SYS] Transfer request detected from Factory_7A...", time: "08:20:53", tone: "default" },
          { text: "[CMD] ReassignCustody(BCH_992, Logistics_Partner_Blue)", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Awaiting Logistics_Partner_Blue digital signature...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Custody reassigned. Chronological handoff log updated.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Condition Validation",
        description: "IoT sensors on shipping containers stream telemetry to the ledger. If temperature or humidity breaches safe limits, the batch is automatically flagged as non-compliant.",
        icon: ScanLine,
        logFilename: "cerulea_provenance_engine.log",
        logLines: [
          { text: "[SYS] Ingesting IoT telemetry for Batch BCH_992...", time: "08:20:53", tone: "default" },
          { text: "[CMD] telemetryCheck(temp: -18.2C, threshold: < -15C)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Condition verified. Integrity remains intact.", time: "08:20:53", tone: "default" },
          { text: "[OK] Environmental state valid. Proceeding to port entry.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Final Delivery Audit",
        description: "The retailer scans the received goods. The smart contract executes a final state change, releasing payment to the manufacturer and providing a full audit trail to the consumer.",
        icon: QrCode,
        logFilename: "cerulea_provenance_engine.log",
        logLines: [
          { text: "[SYS] Final destination scan detected: Retail_Node_14...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Execute finalizeBatch(BCH_992)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Reconciling 14 independent custody signatures...", time: "08:20:53", tone: "default" },
          { text: "[OK] Provenance chain complete. Releasing automated escrow.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages global logistics through highly specialized, modular smart contracts. This layered approach ensures absolute provenance while integrating real-time physical sensor data.",
    layers: [
      {
        title: "Identity & Metadata",
        subtitle: "The Asset Passport",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Asset Passport",
          description: "The foundational layer that holds the unique identifier for every physical item or batch. It acts as a Digital Product Passport, storing immutable links to manufacturing data, raw material origins, and certifications.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet: "contract BatchRegistry {\n  struct Batch {\n    address manufacturer;\n    bytes32 dataHash;\n    uint256 createdAt;\n    bool isCommitted;\n  }\n  \n  mapping(bytes32 => Batch) public registry;\n\n  function initializeBatch(bytes32 id, bytes32 metadata) external {\n    registry[id] = Batch(msg.sender, metadata, block.timestamp, true);\n  }\n}",
        simAction: "Simulate Batch Creation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initializing Digital Product Passport...", tone: "default" },
          { text: "Hashing bill of materials (BOM) payload...", tone: "default" },
          { text: "Locking manufacturer identity to batch 0x3d...4f...", tone: "default" },
          { text: "Writing metadata pointer to L1 storage...", tone: "default" },
          { text: "[SUCCESS] Batch permanently registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Multi-Sig Handovers",
        subtitle: "The Transfer Interceptor",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transfer Interceptor",
          description: "Manages the change of ownership. It requires an atomic handshake between the current holder and the next logistics node. This prevents \"phantom\" shipments where goods are moved without a digital record.",
          platformFunction: "Multi-Sig Handovers",
        },
        codeSnippet: "function transferCustody(bytes32 batchId, address nextHolder) external {\n  require(currentHolder[batchId] == msg.sender, \"Not current holder\");\n  pendingTransfers[batchId] = nextHolder;\n}\n\nfunction acceptCustody(bytes32 batchId) external {\n  require(pendingTransfers[batchId] == msg.sender, \"Unauthorized\");\n  currentHolder[batchId] = msg.sender;\n}",
        simAction: "Simulate Custody Swap",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Sender (Manufacturer) initiating handoff...", tone: "default" },
          { text: "Receiver (Carrier) scanning QR code identifier...", tone: "default" },
          { text: "Requesting cryptographic signature from Carrier wallet...", tone: "default" },
          { text: "Validating dual-party signature agreement...", tone: "default" },
          { text: "[SUCCESS] Responsible party updated in ledger state.", tone: "success" },
        ],
      },
      {
        title: "Chronological Telemetry",
        subtitle: "The State Logger",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The State Logger",
          description: "A specialized engine for append-only status updates. It records real-time IoT events (e.g., \"Left Port\", \"Customs Cleared\", \"Temperature Spike\") without modifying the original batch identity.",
          platformFunction: "Chronological Telemetry",
        },
        codeSnippet: "contract StateLogger {\n  event StateUpdate(bytes32 indexed batchId, string status, uint256 time);\n\n  function logEvent(bytes32 batchId, string calldata status) external onlyAuthorized {\n    emit StateUpdate(batchId, status, block.timestamp);\n    ledger.updateLatestState(batchId, status);\n  }\n}",
        simAction: "Simulate Event Logging",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting sensor payload: GPS_Lat: 40.7, Lon: -74.0...", tone: "default" },
          { text: "Mapping 'ARRIVAL_AT_PORT' status to batch 0x3d...4f...", tone: "default" },
          { text: "Generating network-wide event broadcast...", tone: "default" },
          { text: "Updating chronological trace history...", tone: "default" },
          { text: "[SUCCESS] Event permanently anchored with block time.", tone: "success" },
        ],
      },
      {
        title: "Automated Certification",
        subtitle: "The Compliance Verifier",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Verifier",
          description: "The logic layer that allows regulators or customers to verify the entire history. It mathematically reconstructs the chain of custody to prove there are zero gaps in the data from factory to consumer.",
          platformFunction: "Automated Certification",
        },
        codeSnippet: "function verifyProvenance(bytes32 batchId) external view returns (address[] memory) {\n  return chainOfCustody[batchId];\n}\n\nfunction checkIntegrity(bytes32 batchId) external view returns (bool) {\n  return _validateFullSignatureChain(batchId);\n}",
        simAction: "Simulate Integrity Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator initiating deep-dive audit of Batch BCH_992...", tone: "default" },
          { text: "Reconstructing 14-point signature chain...", tone: "default" },
          { text: "Verifying every block hash back to batch origin...", tone: "default" },
          { text: "Checking for data tampering or missing handoffs...", tone: "default" },
          { text: "[SUCCESS] Provenance chain 100% mathematically intact.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Supply Chain Traceability is a horizontal capability. Here is how different sectors utilize this execution model to unify provenance data.",
    sectors: [
      { icon: ArrowLeftRight, title: "Pharma & Cold-Chain", description: "Track vaccine and medication shipments across global corridors. Smart contracts ensure that life-saving drugs never leave their required temperature bounds, automatically invalidating the batch if compliance fails.", assetTypes: ["Biologics & Vaccines", "Clinical Trial Samples", "Serial Number Tracking"] },
      { icon: Network, title: "Luxury & High-Value Goods", description: "Capture the multi-billion dollar counterfeit market. Brands issue unique Digital Twin NFTs for watches, handbags, and fine art, allowing secondary market buyers to verify authenticity with a single scan.", assetTypes: ["Luxury Watches", "Designer Apparel", "Memorabilia"] },
      { icon: Vote, title: "Food & Agriculture", description: "Provide absolute farm-to-table visibility. Retailers scan agricultural yields to verify organic certifications, fair-trade compliance, and precise harvest locations anchored to the ledger at source.", assetTypes: ["Organic Produce", "Livestock Tracking", "Seafood Handovers"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy ERP systems or routing native QR-code signatures, Cerulea provides the exact infrastructure routing required.",
    tracks: [
      {
        title: "Track A: Enterprise Supply Chain Bridging",
        description: "For institutional logistics firms. Legacy HTTP requests from existing ERP databases are translated into secure provenance hashes automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Logistics Core", sublabel: "SAP / Oracle WMS", icon: Building2, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Data Hashing & Verification", icon: ScrollText, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Custody State", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Peer-to-Peer Traceability",
        description: "For decentralized cooperatives and D2C brands. Bypass legacy middleware and route mobile wallet signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Operator Mobile App", sublabel: "React DApp & QR Scanners", icon: Fingerprint, accent: false },
          { label: "Decentralized Oracles", sublabel: "Data Consensus Nodes", icon: FlaskConical, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Settlement Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom provenance indexers and multi-sig handover protocols from scratch requires massive engineering overhead. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Logistics Nodes & Handover Rules",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes logistics infrastructure benchmarks. Writing custom custody logic, negotiating data standards with carriers, and deploying fragile middleware for an average application takes a baseline of 6 months. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your supply chain rules into pre audited, battle tested WebAssembly (WASM) binaries instantly.",







    },
    logSystemName: "Operational log system",
  },
  //========================================corporate-treasury-defi-yield
  {
    slug: "corporate-treasury-defi-yield",
    icon: Workflow,
    eyebrow: "Platform Use Case",
    headline1: "Automate capital routing.",
    headline2: "Put idle treasury to work.",
    heroDescription: "Convert rigid corporate cash into high-velocity digital assets. Deploy automated treasury frameworks to route capital into institutional DeFi yield protocols with real-time risk management.",
    heroCta: "Deploy Treasury Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Algorithmic Allocation", description: "Bypass manual investment committees. Define your risk appetite in Cerulea Studio and let smart contracts automatically deploy capital across whitelisted DeFi protocols based on real-time yields." },
      { title: "Programmable Risk Guardrails", description: "Enforce institutional security. Smart contracts monitor protocol health factors natively, triggering automatic capital withdrawals the exact millisecond a protocol LTV breaches your safety threshold." },
      { title: "Real-Time Audit Trail", description: "Replace quarterly reports with persistent visibility. Every transaction, yield harvest, and protocol swap is anchored to the ledger, providing an unalterable forensic record for auditors and boards." },
      { title: "Institutional Stablecoin Access", description: "Execute using 1:1 fiat-backed stablecoins. Complete isolation from cryptocurrency price volatility ensures that your underlying capital principal remains stable while earning decentralized interest." },
      { title: "Atomic Position Rebalancing", description: "Optimize for alpha. The execution engine performs multi-protocol swaps in a single ledger block, ensuring that capital is always located in the highest-yield, lowest-risk environment without slippage." },
      { title: "Gas-Abstracted Harvesting", description: "Eliminate operational overhead. Cerulea handles the network fees and background execution of yield harvesting silently, delivering the net return directly to your corporate dashboard." },
    ],
    lifecycleTitle: "The Treasury Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of corporate capital from initial onboarding to automated yield generation and rebalancing.",
    lifecycleSteps: [
      {
        label: "Capital Onboarding",
        description: "Idle corporate fiat is converted into institutional stablecoins. The smart contract anchors the entry balance and establishes the ownership registry for the treasury pool.",
        icon: PieChart,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Initializing Treasury Ingestion...", time: "08:20:53", tone: "default" },
          { text: "[CMD] depositFunds(amount: 5,000,000, asset: \"USDC\")", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying institutional bank wire confirmation...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Capital anchored. Pool liquidity increased to 12.5M.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Programmatic Allocation",
        description: "Based on the predefined risk-policy, the treasury engine routes capital into whitelisted DeFi protocols. Funds are deployed across lending markets and liquidity pools autonomously.",
        icon: Radio,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Scanning whitelisted protocol health...", time: "08:20:53", tone: "default" },
          { text: "[CMD] routeCapital(AAVE_V3: 2M, COMPOUND_V3: 3M)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Executing cross-protocol atomic deposits...", time: "08:20:53", tone: "default" },
          { text: "[OK] Allocation successful. Current projected APY: 5.2%.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Real-Time Risk Monitoring",
        description: "The smart contract continuously monitors protocol LTV ratios and external market volatility via oracles. It provides a real-time, unalterable audit trail of capital health.",
        icon: Copyright,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Polling Protocol_Oracle_Network...", time: "08:20:53", tone: "default" },
          { text: "[CMD] getHealthFactor(provider: \"AAVE_V3\", pool: \"USDC\")", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Metric validated: Health_Factor 1.82 (Threshold 1.1).", time: "08:20:53", tone: "default" },
          { text: "[OK] Risk parameters within nominal bounds. No action required.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Harvest & Rebalance",
        description: "Yield is automatically harvested and reinvested. If protocol conditions change, the smart contract executes an atomic rebalancing sequence to move capital to higher-performing or lower-risk venues.",
        icon: Gift,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Yield Threshold Reached (Epoch 49)...", time: "08:20:53", tone: "default" },
          { text: "[CMD] harvestYield() && reinvest(POOL_STRATEGY_A)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Execution complete. Hashing receipt to block 2011921.", time: "08:20:53", tone: "default" },
          { text: "[OK] Treasury rebalanced. Net cumulative yield: +24,201 USDC.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages corporate wealth through specialized, modular smart contracts. This layered approach ensures that capital preservation, compliance, and yield generation occur with absolute safety.",
    layers: [
      {
        title: "Capital Preservation",
        subtitle: "The Asset Custodian",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Asset Custodian",
          description: "The foundational holding layer. It ensures that corporate assets are held in a strictly isolated state. Only authorized logic hooks can move capital, and all withdrawals are governed by multi-sig administrative rules.",
          platformFunction: "Capital Preservation",
        },
        codeSnippet: "contract TreasuryVault is Initializable {\n  uint256 public totalReserve;\n  mapping(address => uint256) public assetBalances;\n\n  function _moveFunds(address to, uint256 amount) internal {\n    require(amount <= totalReserve, \"Insufficient reserves\");\n    totalReserve -= amount;\n    payable(to).transfer(amount);\n  }\n}",
        simAction: "Simulate Vault Lock",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initializing capital isolation sequence...", tone: "default" },
          { text: "Locking 5,000,000 USDC into contract storage...", tone: "default" },
          { text: "Disabling direct external withdrawal functions...", tone: "default" },
          { text: "Writing immutable reserve audit point to L1 state...", tone: "default" },
          { text: "[SUCCESS] Capital secured. Only Strategy Router authorized.", tone: "success" },
        ],
      },
      {
        title: "Whitelist Enforcement",
        subtitle: "The Policy Gatekeeper",
        icon: ShieldAlert,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Policy Gatekeeper",
          description: "Bypasses regulatory risk. This layer ensures that capital is only ever routed to protocols that have been mathematically whitelisted by the board. It enforces strict AML and jurisdictional boundaries on every outflow.",
          platformFunction: "Whitelist Enforcement",
        },
        codeSnippet: "modifier onlyWhitelisted(address target) {\n  require(whitelist.isApproved(target), \"Err: Protocol Not Approved\");\n  require(compliance.checkSanctions(target), \"Err: Sanctions Alert\");\n  _;\n}\n\nfunction deploy(address protocol, uint256 amt) external onlyWhitelisted(protocol) {\n  vault.transfer(protocol, amt);\n}",
        simAction: "Simulate Protocol Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting deployment request to 'Curve_Finance'...", tone: "default" },
          { text: "Querying whitelist registry for active audit status...", tone: "default" },
          { text: "Checking regional compliance for target protocol nodes...", tone: "default" },
          { text: "[PASS] Protocol verified for institutional allocation.", tone: "muted" },
          { text: "[SUCCESS] Authorization granted. Proceeding to execution.", tone: "success" },
        ],
      },
      {
        title: "Yield Optimization",
        subtitle: "The Allocation Engine",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Allocation Engine",
          description: "The brain of the treasury. It handles the complex logic of interacting with third-party DeFi protocols. It automatically manages position sizing, yield harvesting, and stablecoin swapping to maximize risk-adjusted returns.",
          platformFunction: "Yield Optimization",
        },
        codeSnippet: "function rebalance(address from, address to, uint256 amount) external {\n  Protocol(from).withdraw(amount);\n  Protocol(to).deposit(amount);\n  emit StrategyRebalanced(from, to, amount, block.timestamp);\n}\n\nfunction harvest() external {\n  uint256 yield = Protocol.claimRewards();\n  _swapAndReinvest(yield);\n}",
        simAction: "Simulate Capital Swap",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initiating rebalance: Compound -> Aave...", tone: "default" },
          { text: "Withdrawing 2,000,000 USDC from Compound pool...", tone: "default" },
          { text: "Executing atomic deposit into Aave V3 market...", tone: "default" },
          { text: "[PASS] New projected APY: +0.45%...", tone: "muted" },
          { text: "[SUCCESS] Positions rebalanced in single transaction.", tone: "success" },
        ],
      },
      {
        title: "Automated De-risking",
        subtitle: "The Circuit Breaker",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Circuit Breaker",
          description: "The ultimate safety layer. It continuously polls oracles for protocol health factors. If a protocol LTV drops below a critical threshold or a hack is detected, this contract autonomously pulls all capital back to the secure vault.",
          platformFunction: "Automated De-risking",
        },
        codeSnippet: "function monitorHealth(address protocol) external {\n  uint256 health = oracle.getProtocolHealth(protocol);\n  if (health < criticalThreshold) {\n    Protocol(protocol).emergencyWithdrawAll();\n    isEmergencyMode = true;\n    emit EmergencyExitTriggered(protocol);\n  }\n}",
        simAction: "Simulate Emergency Exit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Anomaly detected in 'Protocol_Beta' pool LTV...", tone: "default" },
          { text: "Health Factor dropped to 1.05 (Alert Threshold 1.1)...", tone: "default" },
          { text: "Triggering algorithmic Circuit Breaker...", tone: "default" },
          { text: "Executing emergencyWithdrawAll() function...", tone: "default" },
          { text: "[SUCCESS] 3.5M USDC recovered to Vault. Capital safe.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Automated yield routing is a horizontal capability. Here is how different sectors utilize this model to optimize their capital efficiency.",
    sectors: [
      { icon: Shield, title: "Multinational Corporations", description: "Manage idle cash across dozens of global subsidiaries. Instead of capital sitting in zero-interest regional bank accounts, multinational treasuries use Cerulea to route daily operational surpluses into high-liquidity stablecoin lending markets.", assetTypes: ["Cross-Border Sweep", "Operational Payouts", "Tax Reserve Optimization"] },
      { icon: Search, title: "Real Estate Investment Trusts (REITs)", description: "REITs often hold massive rental income reserves before quarterly distribution. By utilizing automated yield routers, these funds can earn interest on their treasury in the 90-day window between rent collection and shareholder payout.", assetTypes: ["Dividend Vaults", "CapEx Reserve Growth", "Tenant Deposit Escrow"] },
      { icon: Layers, title: "Asset Management & Endowment Funds", description: "Universities and non-profits can deploy \"Impact Treasuries\" where the generated DeFi yield is automatically routed to fund specific social or environmental grants, creating a perpetual self-funding machine.", assetTypes: ["Self-Sovereign Grants", "Endowment Payouts", "Strategic Reserves"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy ERP financial data or routing native Web3 capital, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Treasury Bridging",
        description: "For corporate CFO offices. Legacy HTTP requests from portfolio software (NetSuite, Oracle) are translated into secure tokenized treasury allocations automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Financial ERP", sublabel: "NetSuite / Oracle DB", icon: Database, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Allocation Translation", icon: Truck, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Treasury State", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Web3 Yield Routing",
        description: "For native Web3 apps and treasury collectives. Bypass legacy middleware and route cryptographic allocation signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Treasury Portal", sublabel: "React DApp & Node JS", icon: Boxes, accent: false },
          { label: "Consensus Network", sublabel: "Yield-Route Verification", icon: LockKeyhole, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Payout Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom multi-protocol yield harvesters and real-time risk circuit breakers from scratch requires specialized financial engineering and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Yield Strategies & Risk Rules",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology: "The legacy development timeline utilizes Web3 treasury infrastructure benchmarks. Writing custom yield routing logic, negotiating data standards with protocol aggregators, and deploying fragile risk middleware for an average application takes a baseline of 6 months. Building the exact same logical architecture via Cerulea requires a baseline of 1 week. This acceleration is achieved because Cerulea Studio visually translates your fiduciary rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",

    },
    logSystemName: "Operational log system",
  },
  //========================================enterprise-workflow-automation
  {
    slug: "enterprise-workflow-automation",
    icon: Heart,
    eyebrow: "Platform Use Case",
    headline1: "Digitize enterprise logic.",
    headline2: "Automate every handover.",
    heroDescription: "Convert rigid business processes into autonomous state machines. Deploy automated workflows with deterministic execution, multi-party verification, and unalterable audit logs.",
    heroCta: "Deploy Automation Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Deterministic State Routing", description: "Remove ambiguity from business processes. Smart contracts act as the definitive router, moving workflows forward only when every cryptographic requirement has been mathematically met." },
      { title: "Event-Driven Triggers", description: "Connect to existing systems. Cerulea executes logic based on real-time events from ERPs, CRMs, or IoT devices, ensuring your blockchain state is always synced with your physical operations." },
      { title: "Multi-Party Attestation", description: "Complex workflows often require inter-departmental trust. Cerulea enforces dual-signature or multi-sig approval requirements, ensuring no single entity can bypass the corporate protocol." },
      { title: "Immutable Process Integrity", description: "Guarantee tamper-proof workflows. Because the workflow steps are defined in code on a decentralized ledger, they cannot be backdated, modified, or deleted after the fact." },
      { title: "Automated Financial Clearing", description: "Merge logic with capital. Once a workflow reaches its terminal state (e.g., successful project delivery), the contract can automatically release stablecoin capital, concluding the transaction." },
      { title: "Forensic Audit Trails", description: "Generate instant compliance reports. Every participant, timestamp, and state change is cryptographically sealed, turning weeks of audit work into a second-long cryptographic verification." },
    ],
    lifecycleTitle: "The Automation Lifecycle",
    lifecycleSubtitle: "Follow the cryptographic progression of an enterprise process from initial modeling to unalterable forensic finality.",
    lifecycleSteps: [
      {
        label: "Workflow Modeling",
        description: "The business process is mapped into a deterministic state machine. Each transition requirement, from approval signatures to external API triggers, is defined as a smart contract rule.",
        icon: BrainCircuit,
        logFilename: "cerulea_workflow_engine.log",
        logLines: [
          { text: "[SYS] Initializing Workflow Schema compiler...", time: "08:20:53", tone: "default" },
          { text: "[CMD] Define Step { name: \"PAYMENT_RELEASE\", require: [\"FINANCE_SIG\", \"PROCUREMENT_SIG\"] }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Verifying administrative role permissions...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Workflow logic anchored to ledger. Monitoring for state changes.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Event Ingestion",
        description: "An external event (like an invoice upload or a sensor reading) enters the network. The Cerulea API gateway translates the HTTP event into a cryptographically signed transaction.",
        icon: RefreshCw,
        logFilename: "cerulea_workflow_engine.log",
        logLines: [
          { text: "[SYS] Detecting inbound webhook from SAP ERP...", time: "08:20:53", tone: "default" },
          { text: "[CMD] ingestEvent(Event_ID: 9942, type: \"INVOICE_SUBMITTED\")", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Validating ERP system cryptographic signature...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Event authenticated. Transitioning workflow to: PENDING_APPROVAL.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Deterministic Execution",
        description: "The smart contract evaluates the current state. Once all requirements are met (e.g., dual-signatures provided), the contract autonomously triggers the next action without manual human routing.",
        icon: Briefcase,
        logFilename: "cerulea_workflow_engine.log",
        logLines: [
          { text: "[SYS] Requirements Check: { SIG_1: OK, SIG_2: OK, FUNDS: OK }", time: "08:20:53", tone: "default" },
          { text: "[CMD] executeTransition(current: \"PENDING\", next: \"EXECUTED\")", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Triggering external payment gateway via secure relayer...", time: "08:20:53", tone: "default" },
          { text: "[OK] Autonomous action successful. Updating global state.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Verifiable Finality",
        description: "The completed workflow is cryptographically sealed. Every step, timestamp, and participating entity is permanently hashed, providing an undeniable audit trail for compliance.",
        icon: Lock,
        logFilename: "cerulea_workflow_engine.log",
        logLines: [
          { text: "[SYS] Workflow ID 4921 reached terminal state.", time: "08:20:53", tone: "default" },
          { text: "[CMD] generateAuditProof(Workflow_ID_4921)", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Anchoring completion hash to L1 block 2049182...", time: "08:20:53", tone: "default" },
          { text: "[OK] Process finalized. Immutable forensic log generated.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages enterprise processes through highly specialized, modular smart contracts. This layered approach ensures that workflow definitions, access controls, and finality are handled with absolute integrity.",
    layers: [
      {
        title: "Workflow Mapping",
        subtitle: "The State Definition",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The State Definition",
          description: "The foundational layer that stores the map of the entire business process. It defines every possible state (e.g., Pending, Approved, Rejected) and the mathematical conditions required to move between them.",
          platformFunction: "Workflow Mapping",
        },
        codeSnippet: "contract ProcessRegistry {\n  enum State { NULL, PENDING, ACTIVE, COMPLETED }\n  struct Workflow {\n    State currentState;\n    address[] requiredSigners;\n    mapping(address => bool) hasSigned;\n  }\n\n  function initializeProcess(address[] calldata signers) external {\n    Workflow storage w = workflows[processCount++];\n    w.requiredSigners = signers;\n    w.currentState = State.PENDING;\n  }\n}",
        simAction: "Simulate Workflow Init",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling multi-step business logic...", tone: "default" },
          { text: "Setting required approval quorum: 2 of 3...", tone: "default" },
          { text: "Locking departmental wallet identities...", tone: "default" },
          { text: "Writing process schema to Level 1 Storage...", tone: "default" },
          { text: "[SUCCESS] Workflow #9942 initialized in state: PENDING.", tone: "success" },
        ],
      },
      {
        title: "Role-Based Control",
        subtitle: "The Access Interceptor",
        icon: Braces,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Access Interceptor",
          description: "Security is enforced at the protocol level. This layer verifies that only authorized personnel or specific enterprise systems can provide inputs or trigger state changes within the workflow.",
          platformFunction: "Role-Based Control",
        },
        codeSnippet: "contract StateInterceptor is AccessControl {\n  bytes32 public constant MANAGER_ROLE = keccak256(\"MANAGER\");\n\n  modifier onlyAuthorized(uint256 id) {\n    require(hasRole(MANAGER_ROLE, msg.sender), \"Err: Unauthorized\");\n    _;\n  }\n\n  function provideApproval(uint256 id) external onlyAuthorized(id) {\n    registry.markApproval(id, msg.sender);\n  }\n}",
        simAction: "Simulate Auth Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting approval request from 0x8F1...C33...", tone: "default" },
          { text: "Querying AccessController for Active Directory mapping...", tone: "default" },
          { text: "[PASS] Sender holds valid 'MANAGER' cryptographic role.", tone: "default" },
          { text: "Logging authorized signature to workflow state...", tone: "default" },
          { text: "[SUCCESS] Transaction authorized. Progressing logic.", tone: "success" },
        ],
      },
      {
        title: "Event-Driven Payouts",
        subtitle: "The Execution Logic",
        icon: FingerprintPattern,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Execution Logic",
          description: "The active engine. It monitors the state. When all internal conditions (signatures) and external conditions (oracle data) are met, this layer automatically executes the final outcome, such as releasing funds.",
          platformFunction: "Event-Driven Payouts",
        },
        codeSnippet: "function checkAndExecute(uint256 id) public {\n  if (registry.isReady(id)) {\n    registry.updateState(id, State.COMPLETED);\n    _releaseFunds(id);\n    emit ProcessExecuted(id, block.timestamp);\n  }\n}",
        simAction: "Simulate Auto-Execution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Running condition check for Workflow #9942...", tone: "default" },
          { text: "Evaluating internal signatures: 2/2 Found.", tone: "default" },
          { text: "Evaluating external oracle status: 'DELIVERED'...", tone: "default" },
          { text: "Triggering autonomous payout module...", tone: "default" },
          { text: "[SUCCESS] Process executed. State updated to COMPLETED.", tone: "success" },
        ],
      },
      {
        title: "Forensic Proofing",
        subtitle: "The Finality Engine",
        icon: Hammer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Finality Engine",
          description: "The final layer for corporate accountability. It aggregates every signature, timestamp, and metadata point into a single cryptographic hash anchored to the ledger for permanent, unalterable auditing.",
          platformFunction: "Forensic Proofing",
        },
        codeSnippet: "contract Finalizer {\n  function anchorAuditProof(uint256 id) external onlyTrigger {\n    bytes32 proof = keccak256(abi.encode(registry.getWorkflow(id)));\n    historicalProofs[id] = proof;\n    emit AuditProofSealed(id, proof, block.timestamp);\n  }\n}",
        simAction: "Simulate Audit Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating workflow execution trace...", tone: "default" },
          { text: "Generating SHA-256 fingerprint of process history...", tone: "default" },
          { text: "Executing anchorAuditProof() on Cerulea L1...", tone: "default" },
          { text: "Distributing forensic hash to compliance nodes...", tone: "default" },
          { text: "[SUCCESS] Audit trail permanently sealed at block 2049182.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Workflow automation is a horizontal execution model. Here is how different sectors utilize this model to unify operational logic.",
    sectors: [
      { icon: RefreshCcw, title: "Manufacturing & Procurement", description: "Secure the purchase order cycle. Smart contracts monitor quality control scans and logistics handovers, automatically releasing milestone payments to vendors once physical benchmarks are cryptographically verified.", assetTypes: ["Milestone Payouts", "Inventory Reorder Bots", "Vendor Performance Logs"] },
      { icon: Server, title: "Human Resources & Talent", description: "Automate the employee lifecycle. Issue digital employment credentials upon hiring and automatically revoke system access keys and trigger severance payouts the millisecond an offboarding status is anchored to the ledger.", assetTypes: ["Access Credentialing", "Automated Payroll", "Share Option Vesting"] },
      { icon: IdCardLanyard, title: "Legal & Contract Operations", description: "Execute complex multi-party agreements. Smart contracts manage the sequential flow of signatures across external law firms, corporate boards, and regulatory agencies, ensuring no step is skipped and every action is verified.", assetTypes: ["Signature Chaining", "Compliance Deadlines", "Evidence Sealing"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy enterprise ERP systems or routing native Web3 smart contracts, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise System Bridging",
        description: "For corporate IT teams. Legacy HTTP events from existing software (SAP, Oracle, Workday) are securely ingested and translated into deterministic smart contract state changes.",
        connectorLabels: ["HTTPS / WEBHOOK", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Software Core", sublabel: "ERP / HRIS Database", icon: ShieldCog, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Translation", icon: Sparkles, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium State Machine", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Web3 Automation",
        description: "For decentralized organizations and automated DApps. Bypass legacy middle-men and route cryptographic signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "DApp Interface", sublabel: "React Client & Digital Wallets", icon: ScanHeart, accent: false },
          { label: "Consensus Network", sublabel: "Validator Condition Checking", icon: ScanLine, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Settlement Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom multi-signature workflows and state-routing engines from scratch requires specialized backend engineering and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Process States & Signers",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology: "The legacy development timeline utilizes Web3 enterprise benchmarks. Writing custom state-routing logic, negotiating data standards with legacy ERP vendors, and deploying fragile middleware for an average application takes a baseline of 6 months. Building the exact same logical architecture via Cerulea requires a baseline of 1 week. This acceleration is achieved because Cerulea Studio visually translates your business rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
  //========================================zero-trust-network-access
  {
    slug: "zero-trust-network-access",
    icon: Users,
    eyebrow: "Platform Use Case",
    headline1: "Eliminate the perimeter.",
    headline2: "Authenticate via cryptography.",
    heroDescription: "Replace vulnerable VPNs and passwords with decentralized identity gateways. Deploy zero-trust access models where every connection is cryptographically verified on the Cerulea ledger.",
    heroCta: "Deploy Zero-Trust Gateways",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle: "Transform complex blockchain development into a visual workflow.",
    mechanics: [
      { title: "Identity-Based Routing", description: "Bypass the inherent weakness of IP-based security. Access is granted based on the cryptographic signature of the entity, ensuring that your network is invisible to anyone without valid ledger-anchored keys." },
      { title: "Zero-Knowledge Auth", description: "Verify clearances without exposing credentials. Use ZK-Proofs to mathematically confirm that a user has the required permission level without ever transmitting their name, password, or PII." },
      { title: "Continuous Re-Validation", description: "Replace \"login once, access forever\" with continuous verification. Smart contracts enforce rolling heartbeat challenges, requiring devices to prove their integrity every few minutes to maintain active sessions." },
      { title: "Least Privilege Enforcement", description: "Automate granular permissions. Smart contracts handle the mapping of specific resource IDs to specific cryptographic identities, ensuring users only see what they are mathematically authorized to see." },
      { title: "Global Kill-Switch", description: "Execute instant security updates. When a threat is detected, an admin can invalidate an identity on the ledger. This state change propagates across all global gateways in a single block interval." },
      { title: "Immutable Access Logs", description: "Generate unalterable forensic trails. Every authentication attempt and resource access event is hashed to the ledger, making it impossible for internal actors or hackers to scrub their traces." },
    ],
    lifecycleTitle: "The Authentication Lifecycle",
    lifecycleSubtitle: "Follow the exact cryptographic progression of a secure network session from enrollment to autonomous revocation.",
    lifecycleSteps: [
      {
        label: "Identity Enrollment",
        description: "The user or machine generates a unique cryptographic DID (Decentralized Identifier). This root of trust is anchored to the ledger, replacing traditional passwords with public-key infrastructure.",
        icon: Leaf,
        logFilename: "cerulea_security_engine.log",
        logLines: [
          { text: "[SYS] Initializing Secure Enclave...", time: "08:20:53", tone: "default" },
          { text: "[CMD] generateIdentity { type: \"EMPLOYEE\", id: \"DEV_882\" }", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Anchoring public key 0x7B2...F11 to DID Registry...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Identity enrolled. Cryptographic root established.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Cryptographic Challenge",
        description: "When access is requested, the network issues a challenge. The user must sign a random nonce using their private key to prove ownership of the identity without ever transmitting sensitive data.",
        icon: Landmark,
        logFilename: "cerulea_security_engine.log",
        logLines: [
          { text: "[SYS] Intercepting access request to \"SECURE_SRV_01\"...", time: "08:20:53", tone: "default" },
          { text: "[CMD] IssueChallenge(Nonce: 0x9f22...88a)", time: "08:20:53", tone: "primary" },
          { text: "[AUTH] Awaiting wallet signature...", time: "08:20:53", tone: "secondary" },
          { text: "[OK] Signature verified. Identity proof accepted.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Real-Time Policy Validation",
        description: "The smart contract cross-references the identity against active permissions and environmental factors like time, location, or device health stored on-chain.",
        icon: Wallet,
        logFilename: "cerulea_security_engine.log",
        logLines: [
          { text: "[SYS] Evaluating Policy Matrix for DEV_882...", time: "08:20:53", tone: "default" },
          { text: "[CMD] checkPermissions(subject: \"DEV_882\", resource: \"SSH_PROD\")", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Attribute Check: { Time: WITHIN_WINDOW, Health: COMPLIANT }", time: "08:20:53", tone: "default" },
          { text: "[OK] Access policy satisfied. Generating session token.", time: "08:20:53", tone: "success" },
        ],
      },
      {
        label: "Instant Revocation",
        description: "Access can be revoked at the ledger level in a single block. All gateways globally receive the state update simultaneously, instantly locking out compromised identities.",
        icon: ArrowLeftRight,
        logFilename: "cerulea_security_engine.log",
        logLines: [
          { text: "[SYS] Detecting Anomaly: Unauthorized login attempt from Proxy_IP.", time: "08:20:53", tone: "default" },
          { text: "[CMD] revokeIdentity(id: \"DEV_882\")", time: "08:20:53", tone: "primary" },
          { text: "[SYS] Updating global blacklist at block 2044810...", time: "08:20:53", tone: "default" },
          { text: "[OK] Access keys invalidated globally. Session terminated.", time: "08:20:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription: "Cerulea manages network security through specialized, modular smart contracts. This layered approach ensures that identities, permissions, and session health are handled with absolute integrity.",
    layers: [
      {
        title: "DID Management",
        subtitle: "The Root of Trust",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Root of Trust",
          description: "The foundational data layer. It stores the mapping between human or machine entities and their public cryptographic keys. This registry serves as the definitive source of truth for all authentication events across the enterprise.",
          platformFunction: "DID Management",
        },
        codeSnippet: "contract IdentityRegistry {\n  struct Identity {\n    address publicKey;\n    bytes32 roleHash;\n    uint256 enrolledAt;\n    bool isValid;\n  }\n  \n  mapping(address => Identity) public users;\n\n  function enroll(address user, bytes32 role) external onlyAdmin {\n    users[user] = Identity(user, role, block.timestamp, true);\n    emit UserEnrolled(user, role);\n  }\n}",
        simAction: "Simulate Identity Enroll",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Received enrollment request for Employee_99...", tone: "default" },
          { text: "Verifying administrative multi-sig signature...", tone: "default" },
          { text: "[PASS] Authorization confirmed.", tone: "default" },
          { text: "Writing identity struct to Level 1 Storage...", tone: "default" },
          { text: "[SUCCESS] Root identity anchored at block 2104992.", tone: "success" },
        ],
      },
      {
        title: "Permission Logic",
        subtitle: "The Policy Gatekeeper",
        icon: Vote,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Policy Gatekeeper",
          description: "The logic center for granular control. It defines which cryptographic identities are allowed to access specific network resources. It utilizes attribute-based access control (ABAC) to enforce complex, multi-factor rules natively.",
          platformFunction: "Permission Logic",
        },
        codeSnippet: "contract AccessHook {\n  function checkAccess(address user, bytes32 resourceId) external view returns (bool) {\n    Identity memory id = registry.getUser(user);\n    require(id.isValid, \"Identity Invalid\");\n    return policyEngine.hasPermission(id.roleHash, resourceId);\n  }\n}",
        simAction: "Simulate Permission Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Intercepting access attempt to 'PROD_DATABASE'...", tone: "default" },
          { text: "Querying Identity Registry for user 0x8F1...C33...", tone: "default" },
          { text: "Evaluating Policy Engine for 'DB_ADMIN' role...", tone: "default" },
          { text: "[PASS] User holds required cryptographic clearance.", tone: "default" },
          { text: "[SUCCESS] Authorization granted for current session.", tone: "success" },
        ],
      },
      {
        title: "Persistence Tracking",
        subtitle: "The Continuous Monitor",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Continuous Monitor",
          description: "Bypasses \"login once\" vulnerabilities. This layer tracks the state of active sessions. It requires periodic re-attestations and automatically invalidates session keys if a device is reported lost or a risk score increases.",
          platformFunction: "Persistence Tracking",
        },
        codeSnippet: "contract SessionSentinel {\n  mapping(bytes32 => uint256) public sessionExpiry;\n\n  function refreshSession(bytes32 sessionId, bytes calldata proof) external {\n    require(verifyProof(proof), \"Invalid Proof\");\n    sessionExpiry[sessionId] = block.timestamp + 3600;\n    emit SessionExtended(sessionId);\n  }\n}",
        simAction: "Simulate Session Refresh",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving 60-minute heartbeat from Node_881...", tone: "default" },
          { text: "Validating ZK-Proof of continuous enclave integrity...", tone: "default" },
          { text: "[PASS] Device health parameters are within bounds.", tone: "default" },
          { text: "Updating session expiry mapping in contract state...", tone: "default" },
          { text: "[SUCCESS] Connectivity maintained for authorized identity.", tone: "success" },
        ],
      },
      {
        title: "Instant Lockdown",
        subtitle: "The Global Kill-Switch",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Global Kill-Switch",
          description: "The final security layer. It manages the global revocation list. When an admin triggers a revocation, the contract updates a bloom filter on the ledger, which all gateway nodes monitor for near-instant policy enforcement.",
          platformFunction: "Instant Lockdown",
        },
        codeSnippet: "contract RevocationEngine {\n  function revokeAccess(address user) external onlySecurityAdmin {\n    registry.invalidate(user);\n    _triggerGatewayUpdate(user);\n    emit AccessTerminated(user, block.timestamp);\n  }\n}",
        simAction: "Simulate Global Revoke",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Security Anomaly Detected: Device_X Compromised.", tone: "default" },
          { text: "Triggering algorithmic revokeAccess() function...", tone: "default" },
          { text: "Updating blooming filter on Cerulea L1...", tone: "default" },
          { text: "Pushing state update to all Network Gateways...", tone: "default" },
          { text: "[SUCCESS] Access blocked globally across all sectors.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle: "Zero-Trust authentication is a horizontal capability. Here is how different sectors utilize this model to unify operational security.",
    sectors: [
      { icon: Cpu, title: "Government & Defense", description: "Secure mission-critical databases using hardware-bound keys. By anchoring identity to a sovereign ledger, defense agencies ensure that internal access is only granted to devices with verified secure enclaves, mathematically preventing remote credential theft.", assetTypes: ["Classified Data Vaults", "Multi-Agency Access", "Hardware-Bound DID"] },
      { icon: Fingerprint, title: "Institutional Banking & FinTech", description: "Protect high-value payment gateways. Banks utilize Cerulea to ensure that large capital movements can only be authorized by human operators whose identities have been verified via multi-sig biometric attestations anchored to the blockchain.", assetTypes: ["High-Limit Approval", "SWIFT Node Security", "Admin Quorum Control"] },
      { icon: FlaskConical, title: "Distributed Remote Workforce", description: "Eliminate the latency and insecurity of legacy VPNs. Remote employees connect directly to enterprise resources via encrypted state channels. The network grants access dynamically based on live risk-scoring from device telemetry.", assetTypes: ["VPN-less Access", "SaaS Single-Sign-On", "Adaptive Auth Rules"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle: "Whether you are bridging legacy Active Directory systems or routing native cryptographic identities, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Directory Bridging",
        description: "For corporate IT operations. Legacy HTTP events from Active Directory or Okta are securely translated into immutable ledger identities automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Identity Core", sublabel: "Active Directory / Okta DB", icon: Archive, accent: false },
          { label: "Cerulea API Gateway", sublabel: "DID Token Translation", icon: Workflow, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Access Registry", icon: Server, accent: true },
        ],
      },
      {
        title: "Track B: Native Web3 DID Execution",
        description: "For decentralized organizations and sovereign grids. Bypass legacy middleware and route cryptographic identity signatures directly to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "User Authentication Terminal", sublabel: "React DApp & Secure Wallets", icon: Radio, accent: false },
          { label: "Consensus Network", sublabel: "ZK-Verifier Protocol", icon: Copyright, accent: true },
          { label: "Cerulea Public L1", sublabel: "Final Access Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle: "Building custom ZK-authentication circuits and real-time revocation bloom filters from scratch requires specialized cybersecurity engineers and massive audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Access Policies & Gateways",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology: "The legacy development timeline utilizes Web3 cybersecurity benchmarks. Writing custom Zero-Knowledge circuits for identity verification, negotiating W3C identity data standards, and deploying fragile revocation middleware for an average security application takes a baseline of 8 months. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your security rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.",
    },
    logSystemName: "Operational log system",
  },
]

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug)
}