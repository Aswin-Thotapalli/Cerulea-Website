// Material icons (react-icons/md) aliased to the previous lucide names so all
// feature-icon references keep working — matches the old site's icon set.
import {
  MdShowChart as Activity,
  MdSwapHoriz as ArrowRightLeft,
  MdNotifications as Bell,
  MdAssignmentTurnedIn as ClipboardCheck,
  MdCode as Code,
  MdTerminal as Code2,
  MdMemory as Cpu,
  MdStorage as Database,
  MdVisibility as Eye,
  MdFactCheck as FileCheck,
  MdSpeed as Gauge,
  MdGavel as Gavel,
  MdAccountTree as GitBranch,
  MdHistory as History,
  MdLayers as Layers,
  MdLink as Link2,
  MdLock as Lock,
  MdMail as Mail,
  MdPlayArrow as Play,
  MdSync as RefreshCw,
  MdBalance as Scale,
  MdCenterFocusStrong as ScanEye,
  MdDescription as ScrollText,
  MdSearch as Search,
  MdDns as Server,
  MdShare as Share2,
  MdShield as Shield,
  MdGppMaybe as ShieldAlert,
  MdVerifiedUser as ShieldCheck,
  MdGroups as Users,
  MdHub as Waypoints,
  MdSchema as Workflow,
  MdBolt as Zap,
} from "react-icons/md"
import { GoCpu } from "react-icons/go"
import { Product } from "@/types/product-details"
export const products: Product[] = [
  // -------------------------------------------------------------- Studio
  {
    slug: "studio",
    eyebrow: "Cerulea Studio",
    headline: ["Visual architecture.", "Cryptographic execution."],
    description:
      "Stop writing smart contracts by hand. Visually construct your data models and governance rules in a drag-and-drop GUI, and let Cerulea Studio compile your logic directly into deterministic, network-ready bytecode.",
    primaryCta: { label: "Open Studio Environment", href: "https://studio.cerulea.io" },
    secondaryCta: { label: "Read the Docs", href: "/developers/docs/foundation" },
    closingHeadline: "Ready to design your network?",
    closingDescription:
      "Stop coding boilerplate. Start architecting value. Open Cerulea Studio and build your first blockchain application today.",
    closingPrimaryCta: {
      label: "Launch Studio Environment",
      href: "https://studio.cerulea.io",
    },
    closingSecondaryCta: { label: "Contact Sales", href: "/company/contact-sales" },
    features: [
      {
        icon: GoCpu,
        title: "Dual-environment compilation.",
        description:
          "Build once, deploy anywhere. You do not need to choose between execution environments before you design your application.",
        detail:
          "Cerulea Studio's compiler natively supports both our proprietary, high-performance WASM execution environment and strict EVM compatibility. Your visual schemas are deterministically translated into Solidity or custom WASM bytecode.",
        visual: {
          type: "terminal",
          title: "compiler terminal",
          lines: [
            { text: "$ cerulea compile --target dual", tone: "key" },
            { text: "[✓] Parsing visual entities...", tone: "default" },
            {
              text: "[✓] Validating relational constraints...",
              tone: "default",
            },
            {
              text: "[✓] Generating WASM artifact (0x7a...9f)",
              tone: "default",
            },
            {
              text: "[✓] Generating EVM bytecode (0x60...00)",
              tone: "default",
            },
            { text: "Ready for Deployment Engine handoff.", tone: "highlight" },
          ],
        },
      },
      {
        icon: Database,
        title: "Map your database. We make it immutable.",
        description:
          "Design your application's entities and relationships using familiar database architecture principles.",
        detail:
          "In traditional Web3 development, translating relational schemas into on-chain state requires manually writing complex smart contracts. Cerulea Studio bridges this gap. It takes your visual models and automatically compiles them into highly optimized, tamper-evident data structures. You get the familiar experience of mapping a database, backed by the cryptographic security of a deployed smart contract.",
        visual: {
          type: "schema",
          entities: [
            {
              name: "Asset_Registry",
              fields: ["+ asset_id: bytes32 (Primary Key)", "+ owner: address"],
            },
            {
              name: "Transfer_Log",
              fields: [
                "+ log_id: uint256",
                "-> maps_to: Asset_Registry.asset_id",
              ],
            },
          ],
        },
      },
      {
        icon: Lock,
        title: "Absolute access control. Enforced on-chain.",
        description:
          "Define who can view, modify, or execute specific state transitions before your network goes live.",
        detail:
          "Configure Role-Based Access Control (RBAC) and complex multi-signature policies through a simple visual interface. Cerulea Studio embeds these rules natively into the compiled bytecode, ensuring that unauthorized state transitions are securely blocked at the network level.",
        visual: {
          type: "list",
          title: "Policy Configuration: Transfer_Asset",
          rows: [
            {
              label: "Required Role",
              value: "System_Admin",
              status: "info",
            },
            {
              label: "Consensus Requirement",
              sublabel: "Signatures needed to execute",
              value: "2/3 Multi-Sig",
              status: "success",
            },
          ],
        },
      },
      {
        icon: Search,
        title: "Your on-demand architectural intelligence.",
        description:
          "Build complex networks without constantly referencing documentation. Get precise configuration help exactly when you need it.",
        detail:
          "Cerulea Intelligence is natively embedded into your workspace, understanding your architectural context in real time. Instead of digging through documentation, you can query the engine directly to resolve structural bottlenecks, optimize network parameters, and securely configure permission boundaries on the fly.",
        visual: {
          type: "chat",
          title: "Cerulea Intelligence",
          inputPlaceholder: "Write here",
          sendLabel: "Send",
          messages: [
            {
              from: "user",
              text: "How do I restrict write access for the Asset_Registry entity so only admins can modify it?",
            },
            {
              from: "ai",
              text: "I see you have the **Asset_Registry** entity active in your workspace. To restrict it, you should bind a **System_Admin** role to its write function in the Governance module. Would you like me to highlight the exact panel for you?",
            },
          ],
        },
      },
      {
        icon: Code2,
        title: "Auto-generated programmatic access.",
        isHeader: true,
        description:
          "Your frontend and backend teams should not have to learn custom blockchain RPC commands.",
        detail:
          "Once your architecture is compiled, Cerulea Studio automatically generates the necessary programmatic interfaces. You receive ready-to-use APIs and SDK hooks that map directly to your visual data models. Your decentralized applications (dApps) and enterprise systems can begin interacting with the deployed network immediately.",
        bullets: [
          {
            icon: Share2,
            title: "Zero-config SDK hooks",
            description:
              "Import directly into your React, Vue, or Svelte frontends.",
          },
          {
            icon: Play,
            title: "Type-safe definitions",
            description:
              "Full TypeScript support generated from your visual entities.",
          },
          {
            icon: Layers,
            title: "One-click deployment",
            description: "Instant staging environments for logic validation.",
          },
        ],
        visual: {
          type: "terminal",
          title: "useAssetManager.ts",
          lines: [
            { text: "// Auto-generated SDK Hook", tone: "comment" },
            {
              text: "import { useCerulea } from '@cerulea/sdk';",
              tone: "default",
            },
            { text: "", tone: "default" },
            { text: "export const AssetManager = () => {", tone: "key" },
            {
              text: "  const { contract } = useCerulea('Asset_Registry');",
              tone: "default",
            },
            { text: "", tone: "default" },
            {
              text: "  const transferAsset = async (id, to) => {",
              tone: "default",
            },
            {
              text: "    return await contract.methods.transfer({",
              tone: "default",
            },
            { text: "      asset_id: id,", tone: "default" },
            { text: "      new_owner: to,", tone: "default" },
            { text: "    }).send({ from: 'current_user' });", tone: "default" },
            { text: "  };", tone: "default" },
            { text: "", tone: "default" },
            { text: "  return { transferAsset };", tone: "default" },
            { text: "};", tone: "default" },
          ],
        },
      },
      {
        icon: GitBranch,
        title: "Safe, iterative state upgrades.",
        description:
          "Blockchain state is immutable, but your business logic will inevitably evolve over time.",
        detail:
          "Cerulea Studio handles complex schema upgrades through a secure versioning system. When you modify a live data model, it calculates the required state migration paths and deploys proxy routing under the hood. This ensures your application logic updates smoothly without compromising historical data integrity.",
        visual: {
          type: "list",
          title: "Version History: Asset_Registry",
          rows: [
            {
              label: "v1.0.0 (Archived)",
              sublabel: "Initial Asset_Registry deployment.",
              value: "Archived",
              status: "info",
            },
            {
              label: "v1.1.0 (Live)",
              sublabel:
                "Added compliance metadata fields. Proxy routed successfully.",
              value: "Live",
              status: "success",
            },
          ],
        },
      },
      {
        icon: Play,
        title: "Frictionless testnet deployment.",
        description:
          "Verify your logic in a live staging environment before pushing state to production.",
        detail:
          "Before executing a mainnet deployment, Cerulea Studio provisions a one-click deployment to our public testnet or a staging private chain. You can simulate transactions, test governance boundaries, and audit logic flow in a real network environment, ensuring your architecture performs exactly as intended prior to the final production handoff.",
        visual: {
          type: "terminal",
          title: "Cerulea Testnet Configured",
          lines: [
            { text: "[✓] Testnet environment initialized.", tone: "default" },
            {
              text: "[✓] Deploying WASM artifact to testnet...",
              tone: "default",
            },
            {
              text: "[✓] Simulating POST /api/asset-registry...",
              tone: "default",
            },
            {
              text: "[✓] Transaction confirmed (Block #45902).",
              tone: "highlight",
            },
            {
              text: "[✓] Simulating unauthorized write access...",
              tone: "default",
            },
            {
              text: "[!] Transaction reverted: Role 'User' lacks permission.",
              tone: "comment",
            },
            {
              text: "Testnet verification complete. Ready for production.",
              tone: "highlight",
            },
          ],
        },
      },
      {
        icon: Server,
        title: "Targeted deployment architecture.",
        description:
          "One architecture, completely different operational environments. Define where your logic lives with a single click.",
        detail:
          "Deploy to the Cerulea Public L1, secured by the proprietary Dynamic Consensus Framework (DCF), a high-throughput synthesis of aPoS and Proof of Identity (PoI). Or spin up completely isolated, standalone private sovereign chains where you retain absolute control over hosting and node participation, while Cerulea maintains seamless telemetry hooks for enterprise monitoring.",
        visual: {
          type: "list",
          title: "Deployment Targets",
          rows: [
            {
              label: "Target: Cerulea Public L1",
              sublabel:
                "Shared network, secured by the Dynamic Consensus Framework (DCF). A high-throughput synthesis of aPoS and Proof of Identity (PoI).",
              value: "Public L1",
              status: "info",
            },
            {
              label: "Target: Private Sovereign Chains",
              sublabel:
                "Completely isolated, standalone network instances. You retain absolute control over hosting and node participation.",
              value: "Sovereign",
              status: "success",
            },
          ],
        },
      },
    ],
  },

  // ------------------------------------------------------------------ AI
  {
    slug: "ai",
    eyebrow: "Cerulea Intelligence",
    headline: ["On-demand expertise.", "Context-aware guidance."],
    description:
      "Stop switching tabs to read generic documentation. Cerulea Intelligence is natively embedded into your Studio workspace, providing hyper-specific answers based on the exact architecture you are building right now.",
    primaryCta: { label: "Experience in Studio", href: "https://studio.cerulea.io" },
    secondaryCta: { label: "Read the Docs", href: "/developers/docs/foundation" },
    closingHeadline: "Built for mission-critical architecture.",
    closingDescription:
      "Stop digging through docs. Start building with a partner that understands your project as well as you do.",
    closingPrimaryCta: { label: "Launch Studio", href: "https://studio.cerulea.io" },
    closingSecondaryCta: { label: "Contact Sales", href: "/company/contact-sales" },
    features: [
      {
        icon: Eye,
        title: "A chat assistant that actually sees your work.",
        description:
          "Generic AI models give generic answers. Cerulea Intelligence is wired directly into your active state machine.",
        detail:
          "When you ask a question, the intelligence engine automatically parses your current visual schema. It knows exactly which entities you have created, what roles exist in your governance panel, and which deployment targets you have selected. You get precise, actionable steps tailored entirely to your active project.",
        visual: {
          type: "inbox",
          title: "Workspace Context: Linked",
          badge: "CONTEXT LINKED",
          inputPlaceholder: "Ask Cerulea Intelligence...",
          messages: [
            {
              from: "user",
              text: "Why is my deployment failing when I try to compile the Vendor schema?",
            },
            {
              from: "ai",
              text: "I see you have the **Vendor_Profile** entity active. The issue is a missing primary key. You have defined three standard fields, but Cerulea requires at least one uniquely identifiable key (like a `bytes32` ID) for deterministic compilation. Add a primary key field in the properties panel and try again.",
            },
          ],
        },
      },
      {
        icon: Layers,
        title: "Resolve complex data structures instantly.",
        description:
          "When mapping out relational architecture, type mismatches and cyclic dependencies can halt development.",
        detail:
          "Instead of guessing how to structure your blockchain entities, ask the intelligence engine. It will walk you through establishing primary and foreign keys, matching cryptographic data types, and ensuring your models translate perfectly into optimized network state.",
        visual: {
          type: "inbox",
          title: "Architecture Query",
          badge: "CONTEXT LINKED",
          inputPlaceholder: "Ask Cerulea Intelligence...",
          messages: [
            {
              from: "user",
              text: "How do I properly link my 'Vendor_Profile' entity to the 'Supply_Chain_Log' without creating a structural error?",
            },
            {
              from: "ai",
              text: "I am analyzing your **Supply_Chain_Log** structure. You currently have the primary key set as a `uint256`. To link the **Vendor_Profile**, you must ensure the foreign key field uses an identical integer type, rather than the `bytes32` format you are currently using. Change the data type in the right-hand properties panel to establish a valid mapping.",
            },
          ],
        },
      },
      {
        icon: Shield,
        title: "Guided security and RBAC setup.",
        description:
          "Do not leave access control to trial and error. Get precise instructions on configuring governance boundaries.",
        detail:
          "Role-Based Access Control (RBAC) and multi-signature policies can be intricate. If you are unsure how to restrict a specific state transition, query the engine. It will provide exact step-by-step guidance on which roles to create and how to bind them to your critical functions before deployment.",
        visual: {
          type: "inbox",
          title: "Governance Query",
          badge: "CONTEXT LINKED",
          inputPlaceholder: "Ask Cerulea Intelligence...",
          messages: [
            {
              from: "user",
              text: "How do I make sure only the original creator can modify the 'Asset_Metadata' field?",
            },
            {
              from: "ai",
              text: "To secure the **Asset_Metadata** field, navigate to the Governance tab. Select the 'Update' action for that specific entity, and bind it to the **Owner_Address** variable. This ensures the compiled smart contract will automatically revert any modification attempts made by non-owners.",
            },
          ],
        },
      },
      {
        icon: Code,
        title: "The end of static documentation.",
        description:
          "Generate custom API payloads and integration hooks tailored exactly to your deployment.",
        detail:
          "When it is time to connect your enterprise software or internal databases to the deployed network, you do not have to hunt for the right API documentation. Cerulea Intelligence reads your compiled schema and instantly generates the exact endpoints and JSON payloads your team needs to integrate seamlessly.",
        visual: {
          type: "inbox",
          title: "Integration Query",
          badge: "CONTEXT LINKED",
          inputPlaceholder: "Ask Cerulea Intelligence...",
          messages: [
            {
              from: "user",
              text: "Can you generate the exact API endpoint and JSON payload I need to send records from our company's internal inventory system to the 'Invoice_Data' table?",
            },
            {
              from: "ai",
              text: "Certainly. Based on your active architecture, your inventory system simply needs to send a POST request. Here is the exact payload structure required for integration:\n```\nPOST https://api.cerulea.net/v1/network/invoice-data\n\nHeaders:\n  Authorization: `Bearer ${api_key}`\n\nPayload:\n{\n  \"invoice_id\": \"INV-8890\",\n  \"amount\": 4500.00,\n  \"vendor_address\": \"0x71C...9A\"\n}\n```",
            },
          ],
        },
      },
    ],
  },

  // ------------------------------------------------------------ Dashboard
  {
    slug: "dashboard",
    eyebrow: "Cerulea Dashboard",
    headline: ["Operational command.", "Absolute visibility."],
    description:
      "The unified control plane for your active networks. Monitor live telemetry, manage nodes, provision keys, and execute complex governance actions across your Public L1 applications and Private Sovereign Chains.",
    primaryCta: { label: "Contact Us", href: "/company/contact" },
    secondaryCta: { label: "Read the Docs", href: "/developers/docs/foundation" },
    closingHeadline: "Stop hand-coding your blockchain logic.",
    closingDescription:
      "Open Cerulea Studio to visually configure and operate your complete blockchain architecture today. No specialized developers required.",
    closingPrimaryCta: { label: "Start Building Now", href: "https://studio.cerulea.io" },
    closingSecondaryCta: { label: "Contact Sales", href: "/company/contact-sales" },
    features: [
      {
        icon: Zap,
        title: "Multi-environment fleet control.",
        description:
          "Manage multiple distinct architectures from a single pane of glass.",
        detail:
          "Whether you have deployed decentralized applications to the shared Public L1 or established strictly permissioned Private Sovereign Chains for internal workflows, Cerulea Dashboard unifies them. Switch context between environments instantly without managing multiple fragmented admin panels.",
        visual: {
          type: "grid",
          title: "Network Environments",
          rows: [
            {
              label: "Public Registry App",
              description: "Target: Cerulea Public L1",
              status: "active",
              highlighted: true,
            },
            {
              label: "Internal Vendor Settlement",
              description: "Target: Private Sovereign Chain",
              status: "healthy",
            },
          ],
        },
      },
      {
        icon: Activity,
        title: "Real-time network telemetry.",
        description:
          "Stop querying multiple block explorers and RPC nodes to understand your network health.",
        detail:
          "Cerulea Dashboard aggregates deterministic metrics directly from your deployed state. Monitor live transaction throughput, block propagation times, consensus health, and data volume utilization across all your environments from a high-density interface.",
        visual: {
          type: "metric",
          title: "Network Telemetry: Production_L1",
          badge: "SYNCED",
          label: "Current Block",
          value: "#14,892,941",
          secondary: {
            label: "Block Time",
            value: "1.2s",
            suffix: "avg",
          },
        },
      },

      {
        icon: Cpu,
        title: "Dynamic node provisioning.",
        description:
          "Scale your private infrastructure seamlessly as your consortium grows.",
        detail:
          "For Private Sovereign Chains, the Dashboard allows you to manage network topology directly. Whitelist new IP addresses, spin up additional validator nodes to increase fault tolerance, or suspend compromised nodes instantly without disrupting network consensus.",
        visual: {
          type: "fleet",
          title: "Private Sovereign Cluster",
          rows: [
            {
              label: "Validator_HQ_East_01",
              sublabel: "IPC_237_102.5.217_901",

              status: "syncing",
            },
            {
              label: "Provisioning Node 003, ",
              sublabel: "QUEUE STATUS: APP_241",

              status: "pending",
            },
          ],
        },
      },
      {
        icon: ShieldCheck,
        title: "Cryptographic key control.",
        description:
          "Your infrastructure is only as secure as the keys that operate it.",
        detail:
          "Cerulea Dashboard provides an enterprise-grade interface for managing operational identities. Generate, assign, and rotate cryptographic keys directly from the control plane. Map specific wallet addresses to the Role-Based Access Control (RBAC) policies you defined during the architecture phase.",
        visual: {
          type: "list",
          title: "Active Key Roster",
          rows: [
            {
              label: "Deployer_Root_Key",
              sublabel: "ED25519, HSM_1",
              value: "Export Public",
              status: "info",
            },
            {
              label: "Oracle_Service_Key",
              sublabel: "SECP256, HSM_1",
              value: "Oracle_Service_Key",
              status: "success",
            },
          ],
        },
      },
      {
        icon: Gavel,
        title: "Execute live governance.",
        description:
          "Resolve multi-signature requirements and enforce policy updates without writing manual RPC calls.",
        detail:
          "When a critical state transition requires consensus, Cerulea Dashboard surfaces the pending transaction. Authorized operators can review the exact payload, verify the cryptographic intent, and sign the transaction directly from the UI to reach the required multi-signature threshold.",
        visual: {
          type: "governance",
          title: "Pending Governance Action",
          actionName: "Upgrade_Asset_Schema_v2",
          initiatedBy: "SUP_7182",
          date: "Sept 14",
          progress: { current: 2, total: 3 },
          primaryAction: "Sign as Executor",
          secondaryAction: "Reject Action",
        },
      },
      {
        icon: History,
        title: "Immutable audit trails.",
        description:
          "Enterprise compliance requires undeniable proof of execution.",
        detail:
          "The Dashboard constantly indexes your network state, generating human-readable audit logs for every state transition, failed access attempt, and governance vote. Export these cryptographically proven logs directly to your internal compliance systems or auditor portals.",
        visual: {
          type: "terminal",
          title: "audit logNetwork Audit Log",
          lines: [
            {
              text: "07.15.26, 14:02  [SUCCESS]  Modified field: Owner_Registry on [ORG1]... 0x48...",
              tone: "success",
            },
            {
              text: "07.15.26, 13:58  [WARNING]  Unauthorized key rotation attempt [USR_217] from IP: 192.x...",
              tone: "highlight",
            },
            {
              text: "07.15.26, 13:45  [PENDING]  Governance proposal ID: UPGRADE_612 submitted to [SOV_01]",
              tone: "comment",
            },
            {
              text: "07.15.26, 13:12  [SUCCESS]  Provisioned Validator_HQ_East_01 to [SOV_01] cluster",
              tone: "success",
            },
          ],
        },
      },
      {
        icon: History,
        title: "State snapshots and recovery.",
        description:
          "Disaster recovery protocols for strictly isolated environments.",
        detail:
          "For Private Sovereign Chains, you own the ledger. The Dashboard allows you to configure automated state snapshots or trigger manual backups before major logic upgrades. If an internal network fails, you can restore the complete cryptographic state to a new node cluster instantly.",
        visual: {
          type: "list",
          title: "State snapshots (Private Chain)",
          rows: [
            {
              label: "snapshot_2026_07_08",
              value: "restore",
              status: "success",
            },
            {
              label: "snapshot_2026_07_01",
              value: "restore",
              status: "success",
            },
          ],
        },
      },
      {
        icon: Workflow,
        title: "Integration endpoint provisioning.",
        description:
          "Provide your development teams with secure, stable access to the compiled network.",
        detail:
          "The Dashboard is where your integrations begin. Generate persistent API endpoints, manage standard RPC routing, and configure outbound webhooks. When a critical state transition occurs on-chain, your traditional enterprise backend can be notified immediately without continuously polling the network.",
        visual: {
          type: "list",
          title: "Network Integration",
          rows: [
            {
              sectionLabel: "Primary RPC Endpoint",
              label: "https://api.cerulea.net/v1/net/hq-east-cluster",
              href: "https://api.cerulea.net/v1/net/hq-east-cluster",
            },
            {
              sectionLabel: "Outbound Webhooks",
              label: "16 Active Triggers",
              sublabel: "Last firing: Success (200 OK) at HQ_Inventory_System",
              highlighted: true,
            },
          ],
        },
      },
    ],
  },

  // ------------------------------------------------------------ Public L1
  {
    slug: "public-l1",
    eyebrow: "Cerulea Public L1",
    headline: ["Immutable shared state.", "Dynamic consensus."],
    description:
      "Deploy your applications to a high-throughput public network designed for enterprise-grade verifiability. Secured by the proprietary Dynamic Consensus Framework, the Cerulea L1 delivers absolute cryptographic security without compromising on execution speed or user experience.",
    secondaryCta: { label: "Contact Us", href: "/company/contact" },
    closingHeadline: "Stop hand-coding your blockchain logic.",
    closingDescription:
      "Open Cerulea Studio to visually configure and operate your complete blockchain architecture today. No specialized developers required.",
    closingPrimaryCta: { label: "Start Building Now", href: "https://studio.cerulea.io" },
    closingSecondaryCta: { label: "Contact Sales", href: "/company/contact-sales" },
    features: [
      {
        icon: Zap,
        title: "Uncompromising execution speed.",
        description:
          "Your infrastructure should never be the bottleneck for your decentralized application.",
        detail:
          "The Cerulea Public L1 is optimized for maximum transactional throughput. By decoupling execution environments and utilizing an ultra-efficient consensus layer, the network sustains tens of thousands of transactions per second with sub-second finality. Your users experience web2 speeds backed by web3 security.",
        visual: {
          type: "metric",
          title: "Throughput Visualization",
          badge: "LIVE",
          metrics: [
            { label: "Avg Block Time", value: "0.4s" },
            { label: "Time to Finality", value: "~0.8s" },
            {
              label: "Peak Sustained Throughput",
              value: "45,000+",
              suffix: "TPS",
              highlighted: true,
            },
          ],
        },
      },
      {
        icon: Activity,
        title: "Gas abstraction. Predictable economics.",
        description:
          "Do not force your users to acquire volatile cryptocurrencies just to click a button.",
        detail:
          "Cerulea natively supports transaction sponsoring at the protocol level. Decentralized application developers can subsidize network fees using predictable fiat currency payments. This allows you to build completely frictionless, zero-gas onboarding experiences for your end-users while maintaining the cryptographic security of a public ledger.",
        visual: {
          type: "list",
          title: "Network Billing Configuration",
          rows: [
            {
              label: "Sponsored Execution Enabled",
              sublabel: "End-users interact with this dApp at zero cost.",
              highlighted: true,
            },
            {
              sectionLabel: "Developer Funding Source",
              label: "Corporate Fiat Account (INR)",
              value: "ACTIVE",
              status: "success",
            },
          ],
        },
      },
      {
        icon: Cpu,
        title: "Decentralized Proof of Identity.",
        description:
          "Secured by the public, protected by cryptography. No corporate gatekeeping required.",
        detail:
          "The Cerulea Public L1 is secured by our proprietary Dynamic Consensus Framework (DCF). This mechanism unites Active Proof of Stake (aPoS) with a decentralized Proof of Identity (PoI) protocol. Anyone in the public can establish a cryptographic reputation and run a validator node. By weighting consensus against both active stake and verified on-chain identity, Cerulea effectively neutralizes Sybil attacks without requiring centralized KYC.",
        visual: {
          type: "metric",
          title: "DCF Validation Matrix: Block #14892041",
          badge: "FINALIZED",
          metrics: [
            { label: "aPoS Vote Weight", value: "82.4%", suffix: "Quorum" },
            {
              label: "PoI Reputation Score",
              value: "98.2",
              suffix: "Verified",
            },
          ],
          lines: [
            {
              text: "[SYS] Initiating DCF synthesis matrix...",
              tone: "default",
            },
            {
              text: "[AUTH] Decentralized Identity signatures verified (PoI).",
              tone: "key",
            },
            {
              text: "[AUTH] Stake thresholds confirmed active (aPoS).",
              tone: "success",
            },
            {
              text: "[SYS] State root calculated: 0x8f2d...4c1a",
              tone: "default",
            },
            { text: "Block appended to network state.", tone: "highlight" },
          ],
        },
      },
      {
        icon: ShieldCheck,
        title: "Dual-environment execution.",
        description:
          "The network adapts to your logic, not the other way around.",
        detail:
          "The Cerulea L1 does not force you into a single paradigm. The network architecture features a dual-execution layer capable of processing both optimized WASM binaries and standard EVM bytecode in parallel. This ensures maximum performance for native Cerulea Studio deployments while maintaining total interoperability with the broader Web3 ecosystem.",
        visual: {
          type: "diagram",
          title: "Execution Environment Framework",
          nodes: [
            {
              label: "Native WASM Execution",
              icon: "Cpu",
              accent: true,
              description:
                "High-performance execution for complex data models and intensive computational workloads. Compiled directly from Cerulea Studio.",
            },
            {
              label: "Absolute EVM Compatibility",
              icon: "Code2",
              description:
                "Full support for standard Solidity and Yul bytecode. Deploy existing smart contracts to the Cerulea network without modifying a single line of your original code.",
            },
          ],
        },
      },
      {
        icon: Gavel,
        title: "Native cross-chain bridges.",
        description:
          "Your infrastructure shouldn't live in a silo. Connect directly to global liquidity and data sets.",
        detail:
          "Cerulea is built for an interconnected future. The Public L1 features cryptographically secured native bridge protocols allowing you to safely transfer assets, state data, and logic payloads directly to Ethereum, Solana, and other major global networks, spanning both EVM and non-EVM ecosystems.",
        visual: {
          type: "metric",
          title: "Cross-Chain Routing",
          route: {
            origin: "Cerulea L1",
            destination: "Ethereum Mainnet",
          },
          lines: [
            {
              text: "[SYS] Locking asset on Cerulea bridge contract...",
              tone: "default",
            },
            { text: "[AUTH] Cryptographic proof generated.", tone: "default" },
            {
              text: "[SYS] Relaying proof to Ethereum target...",
              tone: "default",
            },
            {
              text: "Transfer complete. Wrapped asset minted on target chain.",
              tone: "success",
            },
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------- Private Chains
  {
    slug: "private-chains",
    eyebrow: "Cerulea Private Chains",
    headline: ["Sovereign infrastructure.", "Absolute data control."],
    description:
      "Deploy isolated, high-performance blockchain networks designed exclusively for enterprise workflows. Retain total ownership of your node topology, participant access, and historical state without exposing sensitive data to the public.",
    primaryCta: { label: "Contact Us", href: "/company/contact" },
    secondaryCta: { label: "Read the Architecture Docs", href: "/developers/docs/foundation" },
    closingHeadline: "Stop hand-coding your blockchain logic.",
    closingDescription:
      "Open Cerulea Studio to visually configure and operate your complete blockchain architecture today. No specialized developers required.",
    closingPrimaryCta: { label: "Start Building Now", href: "https://studio.cerulea.io" },
    closingSecondaryCta: { label: "Contact Sales", href: "/company/contact-sales" },
    features: [
      {
        icon: Server,
        title: "Custom node topology.",
        description:
          "Your network, your hardware. Run validator nodes entirely within your corporate firewall.",
        detail:
          "Unlike public chains where external actors secure the ledger, Cerulea Private Chains allow you to dictate exactly where the network lives. Deploy validator nodes across your preferred cloud providers (AWS, Azure) or maintain them entirely on-premise. The network state never leaves your trusted environment.",
        visual: {
          type: "list",
          title: "Network Topology: Settlement_Net",
          badge: { label: "4/4 PEERS SYNCED", tone: "green" },
          rows: [
            {
              label: "Validator_Core_US_East",
              sublabel: "IP: 10.0.1.45 (AWS Private Subnet)",
              status: "success",
            },
            {
              label: "Validator_Partner_EU_Central",
              sublabel: "IP: 172.16.0.12 (Azure VPN Link)",
              status: "success",
            },
            {
              label: "Observer_Node_OnPrem",
              sublabel: "IP: 192.168.1.100 (Internal Datacenter)",
              value: "READ ONLY",
              status: "info",
            },
          ],
        },
      },
      {
        icon: ScanEye,
        title: "Sub-network confidentiality.",
        description:
          "Share a ledger without exposing your business logic to competitors.",
        detail:
          "In a consortium network, not every participant should see every transaction. Cerulea supports advanced Data Confidentiality utilizing Private Channels, encrypted state payloads, and Zero-Knowledge Proofs (ZKP). Two banks can execute a trade on the shared ledger, while a third bank only sees cryptographic proof that a valid transaction occurred, never the sensitive data itself.",
        visual: {
          type: "list",
          title: "Consortium Data Privacy",
          rows: [
            {
              label: "Channel: Bank_A <> Bank_B",
              sublabel: "Payload: { invoice_id: 'INV-992', amount: 450000 }",
              icon: "Lock",
              mono: true,
              highlighted: true,
            },
            {
              label: "Observer: Bank_C (Unauthorized)",
              sublabel: "Payload: [ENCRYPTED] ZKP Verified: TRUE",
              icon: "EyeOff",
              mono: true,
              muted: true,
            },
          ],
        },
      },
      {
        icon: Activity,
        title: "Permissioned Dynamic Consensus.",
        description:
          "Zero-gas economics backed by a strictly permissioned variant of DCF.",
        detail:
          "Private chains do not rely on volatile tokens to incentivize honest behavior. Instead, they utilize a strictly permissioned variant of our Dynamic Consensus Framework (pDCF). Validators are authenticated by enterprise identity, achieving incredibly high transactional throughput and immediate finality without the overhead of public consensus mechanisms.",
        visual: {
          type: "terminal",
          title: "Consensus Engine: DCF-P Active",
          badge: { label: "SYNCHRONIZED", tone: "green" },
          lines: [
            {
              text: "[SYS] Initiating Permissioned Society Consensus...",
              tone: "comment",
            },
            {
              text: "[AUTH] Peer authentication checked: VALIDATED",
              tone: "key",
            },
            {
              text: "[AUTH] Validating 42 authorized enterprise signatures...",
              tone: "key",
            },
            {
              text: "[OK] Quorum (100% agreed) reached (42/42).",
              tone: "success",
            },
            {
              text: "[SYS] State transaction committed to local ledger.",
              tone: "comment",
            },
            { text: "Block #489174 finalized in 48ms.", tone: "highlight" },
          ],
        },
      },
      {
        icon: Database,
        title: "Seamless Web2 data ingestion.",
        description:
          "Enterprises do not start from scratch. Bring your legacy data with you.",
        detail:
          "Transitioning to a blockchain architecture shouldn't require abandoning decades of historical records. Cerulea integrates natively with industry-standard ETL tools. You can map your existing PostgreSQL, Oracle, or SAP database columns directly into your new Cerulea Studio visual models.",
        visual: {
          type: "terminal",
          title: "Data Ingestion Pipeline",
          flow: [
            {
              label: "Legacy SQL Source",
              code: "SELECT * FROM legacy_users;",
              tone: "muted",
            },
            {
              label: "Cerulea State",
              code: "dot.bus : user_id_root [Mapped]",
              tone: "success",
            },
          ],
          lines: [],
        },
      },
      {
        icon: FileCheck,
        title: "Native regulatory compliance.",
        description:
          "Immutable ledgers natively conflict with GDPR and HIPAA. We fixed that.",
        detail:
          "Through the Dashboard, you can provision specific \"Read-Only Auditor Nodes\" granting compliance officers real-time network oversight. Furthermore, Cerulea implements cryptographic state-pruning, allowing enterprises to execute \"Right to be Forgotten\" (GDPR) data deletions without breaking historical hash continuity.",
        visual: {
          type: "list",
          title: "Compliance & Audit Portal",
          badge: { label: "AUDIT READY", tone: "blue" },
          rows: [
            {
              label: "GDPR Erasure Request",
              sublabel: "Target: Hash 0x81a...f2e52",
              value: "EXECUTE PRUNE",
              status: "error",
            },
            {
              label: "SOX2 Access Report",
              sublabel: "Exported by Auditor_Reserve_Hub",
              value: "EXPORT PDF",
              status: "info",
            },
          ],
        },
      },
      {
        icon: ArrowRightLeft,
        title: "Hybrid interoperability.",
        description:
          "Keep your data private, but prove its integrity to the world.",
        detail:
          "Private Chains do not have to exist in total isolation. You can configure Hybrid Anchoring via the Cerulea Dashboard. The network will automatically compress your private transactional data into a cryptographic proof and anchor it to the Cerulea Public L1. This provides public, irrefutable proof that your internal data hasn't been tampered with.",
        visual: {
          type: "metric",
          title: "Hybrid State Anchoring (Sync)",
          route: {
            originLabel: "Private Realm",
            origin: "Merkle Root Gen",
            destinationLabel: "Public L1",
            destination: "Commit Hash",
          },
          lines: [
            {
              text: "[ZKP] Merkle root hash (128H 1627655) synthesized...",
              tone: "comment",
            },
            { text: "[MERKLE] Relaying proof to Public L1...", tone: "key" },
            {
              text: "[PUBLIC] Anchoring Root hash to Cerulea Public L1 network...",
              tone: "key",
            },
            {
              text: "Anchor successful. Internal state consensus proven to public.",
              tone: "success",
            },
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------- Deployment Engine
  {
    slug: "deployment-engine",
    eyebrow: "Cerulea Deployment Engine",
    headline: ["From visual logic.", "To live network state."],
    description:
      "Eliminate Web3 DevOps. The Deployment Engine is the compiler and infrastructure provisioner that translates your Studio architecture into deterministic bytecode and spins up your network instantly.",
    primaryCta: { label: "Contact Us", href: "/company/contact" },
    secondaryCta: { label: "Read the DevOps Docs", href: "/developers/docs/foundation" },
    closingHeadline: "Stop hand-coding your blockchain logic.",
    closingDescription:
      "Open Cerulea Studio to visually configure and operate your complete blockchain architecture today. No specialized developers required.",
    closingPrimaryCta: { label: "Start Building Now", href: "https://studio.cerulea.io" },
    closingSecondaryCta: { label: "Contact Sales", href: "/company/contact-sales" },
    features: [
      {
        icon: Layers,
        title: "Deterministic compilation.",
        description:
          "Your visual models are translated into byte-perfect cryptographic logic.",
        detail:
          "The Engine ingests the Abstract Syntax Tree (AST) generated by Cerulea Studio. It cross-references your entities against the active governance panel and deterministically compiles the result into highly optimized WASM binaries or EVM-compatible Solidity bytecode. This ensures zero drift between design and execution.",
        actionLabel: "Run Simulation Sequence",
        visual: {
          type: "terminal",
          title: "cerulea-engine-cli",
          lines: [
            {
              text: "$ cerulea deploy --network mainnet --target wasm",
              tone: "default",
            },
          ],
        },
      },
      {
        icon: Zap,
        title: "Zero-touch infrastructure.",
        description:
          "Deploying a Private Chain shouldn't require hiring a Kubernetes expert.",
        detail:
          "When targeting a Sovereign Private Chain, the Engine doesn't just deploy the contract code. It provisions the entire underlying network. It automatically configures secure cloud enclaves, establishes P2P node connections, generates genesis blocks, and provisions load-balanced RPC endpoints.",
        visual: {
          type: "list",
          title: "Private Chain Provisioning",
          rows: [
            {
              label: "AWS Secure Enclave",
              sublabel: "Spinning up 3x pDCF Validator Nodes.",
              icon: "Server",
              value: "AUTOMATED",
              status: "info",
            },
            {
              label: "RPC Endpoints & Relays",
              sublabel: "Configuring load-balanced RPC for API integration.",
              icon: "Plug2",
              value: "AUTOMATED",
              status: "info",
            },
          ],
        },
      },
      {
        icon: GitBranch,
        title: "Enterprise CI/CD integration.",
        description:
          "Cerulea fits seamlessly into the deployment pipelines your software teams already use.",
        detail:
          "You don't have to break your DevOps workflows to implement blockchain. The Cerulea Deployment Engine features native webhooks and CLI tools that integrate directly into GitHub Actions, Jenkins, or GitLab. Trigger automated testnet deployments and execute Cerulea AI audits on every code commit.",
        visual: {
          type: "list",
          title: "Pipeline: main-branch-deployment",
          variant: "checklist",
          rows: [
            { label: "run lint, build (yarn)", status: "success" },
            {
              label: "cerulea ai security scan (completed in 42.2s)",
              status: "success",
            },
            {
              label: "deploy to Dev-Layer (Staging Mainnet)",
              status: "success",
            },
            {
              label: "await 2/3 multisig approval (engine-v2-main)",
              status: "pending",
            },
          ],
        },
      },
      {
        icon: ShieldCheck,
        title: "Multi-signature deployment approvals.",
        description:
          "In the enterprise world, pushing code to production is a highly gated process. Cerulea enforces this natively.",
        detail:
          "You can configure the Engine to block any Mainnet compilation until a threshold of cryptographic signatures is met. Require approvals from your Lead Architect, QA Manager, and CISO before the deployment sequence is ever initiated.",
        visual: {
          type: "list",
          badge: { label: "2 / 3 CONFIRMED", tone: "amber" },
          title: "Deployment Approval Chain",
          rows: [
            {
              label: "Lead Architect",
              sublabel: "0x72...9jf3",
              value: "SUCCESS",
              status: "success",
              valueStyle: "text",
            },
            {
              label: "CISO Security Rep",
              sublabel: "0x4d...e18a",
              value: "SUCCESS",
              status: "success",
              valueStyle: "text",
            },
            {
              label: "QA Manager",
              sublabel: "0xa2...c442",
              value: "PENDING",
              status: "pending",
              valueStyle: "text",
            },
          ],
        },
      },
      {
        icon: RefreshCw,
        title: "Zero-downtime state upgrades.",
        description:
          "Blockchains are immutable, but enterprise logic changes constantly.",
        detail:
          "When you publish a change to an active Studio model, the Deployment Engine automatically implements secure Proxy routing. It deploys the new logic (v2) while pointing the immutable proxy address to it. This allows your application logic to upgrade seamlessly without breaking API connections or losing historical data.",
        visual: {
          type: "diagram",
          title: "State Policy Routing",
          nodes: [
            {
              label: "V1 Proxy (Active)",
              accent: true,
              children: [
                { label: "Legacy State", sub: "READ ONLY" },
                { label: "New V2 State", sub: "ACTIVE WRITE", accent: true },
              ],
            },
          ],
        },
      },
      {
        icon: ArrowRightLeft,
        title: "Instant logic rollbacks.",
        description:
          "Emergency state reversion with zero user disruption.",
        detail:
          "If a v2 logic upgrade contains a critical business flaw, you can instantly route API traffic back to the secure v1 contract. Because of Cerulea's Proxy Routing architecture, this rollback happens in milliseconds, completely mitigating downtime and preventing bad state transitions from reaching the ledger.",
        visual: {
          type: "list",
          title: "Deployment Rollback History",
          variant: "checklist",
          rows: [
            {
              label: "Reverting v2.1.0 to v2.0.4 (CRITICAL Bug)",
              sublabel: "Initiated 2m ago by user: admin-01",
              status: "error",
            },
            {
              label: "Traffic rerouted back to v2.0.4",
              sublabel: "Network operations restored. All validators in sync.",
              status: "success",
            },
          ],
        },
      },
      {
        icon: Lock,
        title: "Encrypted secrets vault.",
        description:
          "Inject environment variables securely at compile time.",
        detail:
          "Smart contracts often need to talk to the real world via oracles. Hardcoding API keys is a massive vulnerability. The Deployment Engine includes a zero-knowledge secrets vault that injects environment variables directly into your execution environment. Your keys are cryptographically sealed before the code ever reaches the network.",
        visual: {
          type: "list",
          title: "Encrypted Environment Variables",
          rows: [
            { label: "AWS_S3_BUCKET_KEY", value: "[ENCRYPTED]" },
            {
              label: "ORACLE_DATA_FEED_URL",
              value: "https://api.external-data.io",
            },
            { label: "STRIPE_WEBHOOK_SECRET", value: "[ENCRYPTED]" },
          ],
          note: {
            text: "[CX] Vault Enabled: Secrets injected into workspace runtime synchronously.",
            tone: "amber",
          },
        },
      },
      {
        icon: Eye,
        title: "Frictionless testnet staging.",
        description:
          "Never execute code on Mainnet without verifying it in a live sandbox first.",
        detail:
          "With a single click, the Engine compiles and pushes your complete architecture to the Cerulea Testnet. Experience exactly how your state models, API endpoints, and governance rules behave in a true networked environment before committing permanent logic to production.",
        visual: {
          type: "list",
          title: "Environment Target",
          variant: "tabs",
          rows: [
            { label: "Local Host" },
            { label: "Sandbox", selected: true },
            { label: "Mainnet L1" },
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------- Governance
  {
    slug: "governance",
    eyebrow: "Granular Governance",
    headline: ["Zero-trust architecture.", "Absolute authority."],
    description:
      "Translate your corporate compliance rules into unbreakable cryptographic law. Define exactly who can read, write, or execute data, and implement emergency protocol controls to protect your enterprise network.",
    primaryCta: { label: "Contact Us", href: "/company/contact" },
    secondaryCta: { label: "Read the Security Docs", href: "/developers/docs/foundation" },
    closingHeadline: "Stop hand-coding your blockchain logic.",
    closingDescription:
      "Open Cerulea Studio to visually configure and operate your complete blockchain architecture today. No specialized developers required.",
    closingPrimaryCta: { label: "Start Building Now", href: "https://studio.cerulea.io" },
    closingSecondaryCta: { label: "Contact Sales", href: "/company/contact-sales" },
    features: [
      {
        icon: Users,
        title: "Visual Role-Based Access Control.",
        description:
          "Map your exact organizational chart directly onto the blockchain.",
        detail:
          "Writing custom permission modifiers manually is prone to fatal human error. Cerulea Studio provides a perfectly mapped visual RBAC matrix. You can define specific roles and assign them granular Read, Write, and Execute permissions at the specific entity or field level. The Deployment Engine instantly compiles this into battle-tested cryptographic gates.",
        visual: {
          type: "matrix",
          title: "Entity: Financial_Record",
          badge: { label: "RBAC MATRIX", tone: "blue" },
          columns: ["READ", "WRITE", "EXECUTE"],
          rows: [
            { label: "CFO_Admin", values: ["allowed", "allowed", "allowed"] },
            { label: "Data_Clerk", values: ["allowed", "allowed", "denied"] },
            { label: "Public_User", values: ["denied", "denied", "denied"] },
          ],
        },
      },
      {
        icon: Scale,
        title: "Multi-signature thresholds.",
        description:
          "Never rely on a single point of failure for critical business actions.",
        detail:
          "For sensitive operations like transferring large assets, migrating data structures, or upgrading logic contracts, Cerulea allows you to define strict M-of-N threshold requirements. The network will freeze the pending transaction until the required number of authorized executives sign off cryptographically from the Cerulea Dashboard.",
        visual: {
          type: "list",
          title: "Pending State Transition",
          badge: { label: "2 / 3", tone: "blue" },
          rows: [
            {
              label: "Action: Withdraw_Treasury_Funds",
              sublabel: "VALUE: 25,750,000 USD",
              icon: "Scale",
              highlighted: true,
            },
            {
              label: "CEO_Stake (0x72a...fba)",
              value: "SIGNED",
              status: "success",
              valueStyle: "pill",
            },
            {
              label: "CFO_Stake (0x88b...321)",
              value: "SIGNED",
              status: "success",
              valueStyle: "pill",
            },
            {
              label: "Board_Trustee (0xef1...3a9)",
              value: "AWAITING SIGNATURE",
              status: "info",
              valueStyle: "pill",
            },
          ],
        },
      },
      {
        icon: ShieldAlert,
        title: "Global circuit breakers.",
        description:
          "Stop zero-day exploits in their tracks with Pausable state logic.",
        detail:
          "Even audited logic can encounter unforeseen edge cases. Cerulea Governance allows you to configure global \"Pause\" modifiers on any smart contract deployed to the network. If an anomaly is detected, designated Admin identities can instantly halt all Read, Write, and Execute functions on a contract, securing the state while a patch is developed.",
        visual: {
          type: "terminal",
          title: "Emergency Action Center",
          badge: { label: "PAUSED", tone: "amber" },
          plain: true,
          lines: [
            {
              text: "$ remote call Liquid-Vault:withdraw(1000)",
              tone: "default",
            },
            {
              text: "[ERROR] Transaction Reversed: Contract is globally PAUSED.",
              tone: "error",
            },
            {
              text: "[SAFE] Execution blocked by modifier: globalPause()",
              tone: "comment",
            },
            { text: "$ check state Liquid-Vault:status", tone: "default" },
            { text: "STATUS: FROZEN", tone: "success" },
            { text: "PAUSED BY: 0xAdmin01...ff2", tone: "meta" },
            { text: "TIMESTAMP: 14:32:11 UTC", tone: "meta" },
          ],
        },
      },
      {
        icon: ScanEye,
        title: "Targeted asset freezing.",
        description:
          "Maintain compliance by blacklisting specific bad actors instantly.",
        detail:
          "When issuing tokenized real-world assets (RWA) or stablecoins, enterprise issuers must comply with regulatory sanctions. Cerulea allows central compliance teams to maintain a dynamic on-chain blacklist. When a wallet address is flagged, they are deterministically prevented from sending or receiving the regulated asset, isolating the bad actor without impacting the rest of the ecosystem.",
        visual: {
          type: "list",
          title: "Compliance Blacklist Registry",
          badge: { label: "ACTIVE", tone: "blue" },
          rows: [
            {
              label: "0x3ef...a49",
              icon: "XCircle",
              value: "UNBLOCK",
              status: "error",
              valueStyle: "pill",
              actionTone: "error",
            },
            {
              label: "0x12d...4e2",
              icon: "CheckCircle2",
              value: "BLOCK",
              status: "success",
              valueStyle: "pill",
              actionTone: "success",
            },
          ],
        },
      },
      {
        icon: ScrollText,
        title: "Dynamic policy enforcement.",
        description:
          "Permissions that adapt to real-world context and conditions.",
        detail:
          "Basic access control is static. Cerulea allows you to build contextual policies that evaluate the state of the network before executing. Implement global transfer limits, enforce mandatory time-locks on large withdrawals, or trigger automated logic if suspicious activity is detected by your oracle feeds.",
        visual: {
          type: "list",
          title: "Active Policy Gates",
          badge: { label: "RUNNING", tone: "blue" },
          variant: "policy",
          rows: [
            {
              sectionLabel: "POLICY: TRANSFER_LIMIT",
              label: "REQUIRE (amount <= 50,000 USD);",
              reason: "REJECT: 'EXCEEDS DAILY TRANSFER QUOTA'",
            },
            {
              sectionLabel: "POLICY: WITHDRAW_TIMELOCK",
              label: "REQUIRE (block.timestamp > unlockTime);",
              reason: "REJECT: 'LOCKED UNTIL FINALIZATION'",
            },
          ],
        },
      },
    ],
  },

  // -------------------------------------------------------------- Data Models
  {
    slug: "data-models",
    eyebrow: "Verifiable Data Models",
    headline: ["Structure your truth.", "Prove your state."],
    description:
      "Design complex relational database schemas that compile directly into cryptographic logic. Ensure your enterprise data is immutably stored, strictly typed, and permanently verifiable.",
    primaryCta: { label: "Contact Us", href: "/company/contact" },
    secondaryCta: { label: " View Architecture Docs", href: "/developers/docs/foundation" },
    closingHeadline: "Stop hand-coding your blockchain logic.",
    closingDescription:
      "Open Cerulea Studio to visually configure and operate your complete blockchain architecture today. No specialized developers required.",
    closingPrimaryCta: { label: "Start Building Now", href: "https://studio.cerulea.io" },
    closingSecondaryCta: { label: "Contact Sales", href: "/company/contact-sales" },
    features: [
      {
        icon: Layers,
        title: "Visual schema definition.",
        description:
          "Build relational blockchain structures without writing low-level bytecode.",
        detail:
          "Traditional smart contract development requires hardcoding primitive structs that are difficult to connect. Cerulea Studio provides a visual entity builder. You can define fields, set strict data types (Strings, Integers, Booleans, Addresses), and establish primary key relationships just like you would in a standard SQL database.",
        visual: {
          type: "list",
          title: "Entity: Carbon_Offset_Credit",
          badge: { label: "SCHEMA DEFINED", tone: "blue" },
          rows: [
            { label: "credit_id", value: "PK · BYTES32" },
            { label: "issuing_authority", value: "ADDRESS" },
            { label: "tonnage_amount", value: "UINT256" },
            { label: "is_retired", value: "BOOLEAN" },
          ],
        },
      },
      {
        icon: Link2,
        title: "Cryptographic referential integrity.",
        description:
          "Enforce strict relationships between data sets on the ledger.",
        detail:
          "A blockchain without relational constraints leads to orphaned records and corrupted state. Cerulea allows you to map strict One-to-One and One-to-Many relationships between entities. The platform natively enforces Foreign Key constraints at the protocol level, preventing the deletion or modification of parent records if child dependencies still exist.",
        visual: {
          type: "list",
          title: "Foreign Key Relationship",
          badge: { label: "validated", tone: "green" },
          rows: [
            { label: "Corporate_Wallet (PK: wallet_id)", status: "success" },
            { label: "Asset_Position (FK: owner_id)", status: "success" },
            {
              label:
                "Rejected: no delete cascade, parent holds active position",
              status: "error",
            },
          ],
        },
      },
      {
        icon: Search,
        title: "Auto-generated indexing APIs.",
        description:
          "Stop writing custom subgraph indexers just to read your own data.",
        detail:
          "Querying raw blockchain state is notoriously slow and inefficient. When you deploy a schema in Cerulea, the platform automatically provisions a high-speed indexing layer. It generates a comprehensive GraphQL endpoint, allowing your frontend applications to query deep, relational on-chain data instantly without managing custom middleware.",
        visual: {
          type: "metric",
          label: "Query latency",
          value: "40ms",
        },
      },
      {
        icon: RefreshCw,
        title: "Automated schema migrations.",
        description:
          "Upgrade immutable data structures without losing historical records.",
        detail:
          "The biggest flaw of traditional blockchain architecture is that adding a new column to a database requires deploying an entirely new contract and manually migrating all old data. Cerulea handles this natively via transparent state proxies. You can add new fields to your entities in Studio, and the platform securely bridges your historical data into the upgraded schema instantly.",
        visual: {
          type: "list",
          title: "Historical Migration Preview",
          badge: { label: "version 2.4.0", tone: "blue" },
          rows: [
            {
              label: "v1.0: owner_address",
              value: "deprecated",
              status: "error",
            },
            {
              label: "v2.0: asset_value_usd",
              value: "patching...",
              status: "pending",
            },
          ],
        },
      },
      {
        icon: ClipboardCheck,
        title: "Pre-audited data templates.",
        description:
          "Stop reinventing the wheel for standard Web3 primitives.",
        detail:
          "If you are building a system for Real World Assets, digital identity, or enterprise stablecoins, Cerulea provides pre-audited template models out of the box. These schemas are natively mapped to major interoperability standards like ERC-20 and W3C Credentials, ensuring immediate compatibility with global exchanges and external wallets.",
        visual: {
          type: "list",
          title: "Cerulea Standard Templates",
          badge: { label: "verified", tone: "green" },
          rows: [
            { label: "Real World Asset (RWA)", value: "deploy" },
            { label: "Verifiable Credential", value: "deploy" },
            { label: "Fiat-Pegged Stablecoin", value: "deploy" },
          ],
        },
      },
      {
        icon: ShieldCheck,
        title: "On-chain field validation.",
        description:
          "Enforce strict data hygiene directly at the protocol level.",
        detail:
          "Do not rely on your web frontend to sanitize inputs. Cerulea allows you to bake strict logical parameters directly into your data model. If an API request attempts to write a negative value to a \"Price\" field, or register a user with an age below your legal threshold, the network deterministically reverts the transaction before it is ever written to the ledger.",
        visual: {
          type: "terminal",
          title: "input validator logic (compiled)",
          lines: [
            { text: "// FIELD: settlement_age", tone: "comment" },
            { text: "REQUIRE (current_value >= 18);", tone: "key" },
            {
              text: '[REJECT] Invalid Input: "settlement_age"',
              tone: "default",
            },
            {
              text: "Reason: Value input was 14; must be >= 18.",
              tone: "default",
            },
            {
              text: "+ [PASS] Validation successful. State Updated.",
              tone: "success",
            },
          ],
        },
      },
    ],
  },

  // ------------------------------------------------------------------- API
  {
    slug: "api",
    eyebrow: "Cerulea API Gateway",
    headline: ["Web2 ergonomics.", "Web3 architecture."],
    description:
      "Connect your legacy applications to the blockchain instantly. The Cerulea API Gateway completely abstracts away JSON-RPC complexities, cryptographic signing, and node management into clean, highly scalable REST endpoints and event webhooks.",
    primaryCta: { label: "Contact Us", href: "/company/contact" },
    secondaryCta: { label: "Read the Docs", href: "/developers/api/introduction" },
    closingHeadline: "Stop hand-coding your blockchain logic.",
    closingDescription:
      "Open Cerulea Studio to visually configure and operate your complete blockchain architecture today. No specialized developers required.",
    closingPrimaryCta: { label: "Start Building Now", href: "https://studio.cerulea.io" },
    closingSecondaryCta: { label: "Contact Sales", href: "/company/contact-sales" },
    features: [
      {
        icon: Code2,
        title: "Auto-generated REST endpoints.",
        description:
          "Mutate blockchain state using standard HTTP protocols.",
        detail:
          "Your backend developers do not need to learn specialized Web3 libraries like ethers.js or handle raw RPC calls. When you finalize a schema in Cerulea Studio, the API Gateway immediately generates standard POST, GET, PUT, and DELETE routes. You can interact with complex smart contracts exactly like you would a traditional database.",
        visual: {
          type: "terminal",
          title: "cURL Request",
          badge: { label: "v1.0", tone: "blue" },
          lines: [
            { text: "curl -X POST \\", tone: "default" },
            {
              text: "  https://api.cerulea.net/v1/projects/asset/transfer \\",
              tone: "default",
            },
            {
              text: "  -H 'Authorization: Bearer CER_LIVE_09a8b...' \\",
              tone: "default",
            },
            {
              text: "  -H 'Content-Type: application/json' \\",
              tone: "default",
            },
            { text: "  -d '{", tone: "default" },
            { text: '    "asset_id": "TOKEN_4401",', tone: "key" },
            { text: '    "recipient": "0x892A...1899",', tone: "key" },
            { text: '    "amount": 500', tone: "key" },
            { text: "  }'", tone: "default" },
          ],
        },
      },
      {
        icon: ShieldCheck,
        title: "Idempotent request safety.",
        description:
          "Never worry about accidental double-spending during network timeouts.",
        detail:
          "In enterprise financial systems, network blips happen. If your server sends a transfer request but loses connection before receiving a response, retrying the request blindly could result in duplicate transfers. The Cerulea API enforces strict Idempotency Keys in your request headers. You can safely retry timed-out requests knowing the API will return the cached response rather than duplicating the transaction.",
        visual: {
          type: "terminal",
          title: "Idempotency Guard Logic",
          badge: { label: "ACTIVE", tone: "green" },
          lines: [
            { text: "// Client Request 1 (Timeout Occurs)", tone: "comment" },
            { text: "POST /v1/treasury/disburse", tone: "key" },
            { text: '  Header: Idempotency-Key: "req_99b2x"', tone: "default" },
            {
              text: "[SYS] Execution successful. Transaction confirmed.",
              tone: "success",
            },
            {
              text: "[ERR] Client disconnected before receiving 200 OK.",
              tone: "default",
            },
            { text: "// Client Request 2 (Automated Retry)", tone: "comment" },
            { text: "POST /v1/treasury/disburse", tone: "key" },
            { text: '  Header: Idempotency-Key: "req_99b2x"', tone: "default" },
            {
              text: "[GUARD] Duplicate key detected. Bypassing execution.",
              tone: "highlight",
            },
            {
              text: "[SYS] Returning cached success response.",
              tone: "success",
            },
          ],
        },
      },
      {
        icon: Gauge,
        title: "Transaction dry runs.",
        description:
          "Preview exactly what a transaction will do before committing it.",
        detail:
          "Blindly broadcasting complex transactions to a ledger is dangerous. The Cerulea API provides a dedicated Simulation Endpoint. By sending your payload with the `?simulate=true` parameter, the API runs the execution logic against the live network state without committing the data. You receive an exact report of gas estimates, expected state changes, and any potential revert errors before spending a dime.",
        visual: {
          type: "terminal",
          title: "Pre-flight Simulation",
          badge: { label: "DRY RUN", tone: "amber" },
          lines: [
            { text: "{", tone: "default" },
            { text: '  "status": "SIMULATION_SUCCESS",', tone: "key" },
            { text: '  "gas_used": 84210,', tone: "key" },
            { text: '  "events": [', tone: "default" },
            {
              text: '    { "name": "Transfer", "value": 500 }',
              tone: "default",
            },
            { text: "  ]", tone: "default" },
            { text: "}", tone: "default" },
          ],
        },
      },
      {
        icon: Zap,
        title: "High-throughput batching.",
        description:
          "Execute thousands of operations in a single atomic API call.",
        detail:
          "Processing enterprise payroll or minting digital items for a massive user base requires efficiency. Sending thousands of individual API calls risks rate limits and massive network fee bloat. The Cerulea Bulk Endpoint allows you to submit JSON arrays of operations. The API compiles them into a single, highly compressed atomic transaction, executing the entire batch simultaneously.",
        visual: {
          type: "list",
          title: "Batch Processing",
          badge: { label: "OPTIMIZED", tone: "green" },
          variant: "chips",
          theme: "dark",
          caption: "Aggregate → Single Proof",
          rows: [
            { label: "TX_102" },
            { label: "TX_202" },
            { label: "TX_402" },
            { label: "TX_502" },
            { label: "TX_302" },
            { label: "TX_602" },
          ],
        },
      },
      {
        icon: Bell,
        title: "Event-driven webhooks.",
        description:
          "Stop polling the blockchain. The network pushes data to you instantly.",
        detail:
          "Running a cron job every five seconds to check if a block contains your transaction is severely outdated. The Cerulea API Gateway allows you to register secure webhooks via the Dashboard. When a specific smart contract event fires on the ledger, the Gateway immediately dispatches a JSON payload to your designated Web2 server, keeping your legacy ERP or CRM perfectly synchronized in real time.",
        visual: {
          type: "terminal",
          title: "Webhook Payload Preview",
          plain: true,
          lines: [
            { text: "POST https://webhook.yourcompany.com/v1", tone: "key" },
            {
              text: "Header: Cerulea-Signature: t=16...v1=22...",
              tone: "meta",
            },
            {
              text: '{ "event": "PAYMENT_RECEIVED", "data": { "from": "0x551...221",',
              tone: "default",
            },
            {
              text: '  "amount": "1000.00", "asset": "USDC" } }',
              tone: "default",
            },
          ],
        },
      },
      {
        icon: Mail,
        title: "Invisible wallet provisioning.",
        description:
          "Onboard users with just an email address. No browser extensions required.",
        detail:
          "Enterprise adoption fails when users are forced to manage cryptographic seed phrases. The Cerulea API provides Wallet-as-a-Service (WaaS) endpoints. When a user creates an account on your traditional web app using OAuth or email, the API securely provisions a non-custodial blockchain wallet in the background, fully bridging Web2 authentication with Web3 security.",
        visual: {
          type: "list",
          title: "Wallet Provisioning",
          subtitle: "Custodial or Managed Key Mode",
          rows: [
            {
              label: "user_id: dev_911",
              value: "GENERATING...",
              status: "pending",
              valueStyle: "pill",
            },
            {
              sectionLabel: "Allocated Address",
              label: "0x892A...1B99",
              highlighted: true,
              highlightTone: "success",
            },
          ],
        },
      },
      {
        icon: RefreshCw,
        title: "Gasless transaction relayer.",
        description:
          "Provide frictionless user experiences by sponsoring execution fees automatically.",
        detail:
          "Forcing your customers to buy cryptocurrency just to interact with your decentralized application creates massive friction. The Cerulea API features a native Meta-Transaction Relayer. Your application passes a user's signed intent to our API. Cerulea wraps it, pays the underlying network execution fee from your corporate fiat account, and executes the transaction on the user's behalf.",
        visual: {
          type: "list",
          badge: { label: "SPONSORSHIP ACTIVE", tone: "green" },
          theme: "dark",
          searchPlaceholder: "Search transactions...",
          rows: [
            {
              label: "Estimated Fee: 0.002 ETH",
              value: "Paid by Cerulea Relayer",
              highlightTone: "success",
              valueStyle: "text",
              status: "success",
            },
          ],
        },
      },
    ],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
