import { type LucideIcon } from "lucide-react"
import {
  Coins,
  Fingerprint,
  Radio,
  ShieldCheck,
  ArrowLeftRight,
  Gavel,
  Banknote,
  Umbrella,
  Gift,
  Copyright,
  Cpu,
  FlaskConical,
  Scale,
  Leaf,
  Vote,
  Workflow,
  TrendingUp,
  Waves,
  Database,
  Network,
  Lock,
  HeartPulse,
  PieChart,
  Landmark,
  Truck,
  Building2,
  Utensils,
  Palette,
  Car,
  Plane,
  Shield,
  GraduationCap,
  Zap,
  Cloud,
  Gamepad2,
  Users,
  Music,
  Pickaxe,
  Heart,
  Home,
  ShoppingBag,
  Trophy,
  Wifi,
  PlaneTakeoff,
} from "lucide-react"

// ---------- Types ----------

export type Category = "ENTERPRISE" | "DAPPS" | "SME" | "GOVERNMENT"

export type Tone =
    | "chart-1"
    | "chart-2"
    | "chart-3"
    | "chart-4"
    | "chart-5"
    | "extra-1"
    | "primary"

export interface SolutionItem {
    label: string
    href: string
    description: string
    icon: LucideIcon
    category?: Category
    tags: string[]
    tone: Tone
}



// Original use case data
export const Case_RAW_ITEMS: Omit<SolutionItem, "tone">[] = [
    {
        label: "Tokenized Assets (RWA)",
        href: "/solutions/use-case/tokenized-asset",
        description: "Digitize physical assets and real estate.",
        icon: Coins,
        category: "DAPPS",
        tags: ["Real Estate", "Financial Services"],
    },
    {
        label: "Decentralized Identity",
        href: "/solutions/use-case/decentralized-identity",
        description: "Zero-trust Web2 to Web3 authentication.",
        icon: Fingerprint,
        category: "DAPPS",
        tags: ["Government", "Healthcare"],
    },
    {
        label: "IoT & DePIN",
        href: "/solutions/use-case/iot-depin",
        description: "Secure machine-to-machine data layers.",
        icon: Radio,
        category: "DAPPS",
        tags: ["Supply Chain", "Telecom"],
    },
    {
        label: "Data Integrity & Audit Trails",
        href: "/solutions/use-case/data-integrity-audit-trails",
        description: "Generate immutable logs. Prove absolute truth.",
        icon: ShieldCheck,
        category: "SME",
        tags: ["Aviation", "Legal & Compliance"],
    },
    {
        label: "Cross-Border Settlements",
        href: "/solutions/use-case/cross-border-settlements",
        description: "Bypass SWIFT for instant global payments.",
        icon: ArrowLeftRight,
        category: "ENTERPRISE",
        tags: ["Financial Services", "Travel"],
    },
    {
        label: "DAOs & Corporate Governance",
        href: "/solutions/use-case/daos-corporate-governance",
        description: "Digitize boardrooms. Automate corporate actions.",
        icon: Gavel,
        category: "GOVERNMENT",
        tags: ["Enterprise IT", "Philanthropy"],
    },
    {
        label: "CBDCs & Enterprise Stablecoins",
        href: "/solutions/use-case/cbdcs-stablecoins",
        description:
            "Architect sovereign currencies. Digitize national treasuries.",
        icon: Banknote,
        category: "ENTERPRISE",
        tags: ["Government", "Financial Services"],
    },
    {
        label: "Parametric Insurance Payouts",
        href: "/solutions/use-case/parametric-insurance-payouts",
        description: "Automate policy payouts. Automate claims processing.",
        icon: Umbrella,
        category: "ENTERPRISE",
        tags: ["Insurance", "Agriculture"],
    },
    {
        label: "traceability-provenance",
        href: "/solutions/use-case/traceability-provenance",
        description: "Automate policy payouts. Automate claims processing.",
        icon: Umbrella,
        category: "ENTERPRISE",
        tags: ["Insurance", "Agriculture"],
    },

    {
        label: "Loyalty & Reward Programs",
        href: "/solutions/use-case/loyalty-reward-programs",
        description: "Un-silo consumer value. Unify loyalty rewards.",
        icon: Gift,
        category: "ENTERPRISE",
        tags: ["Travel", "Retail"],
    },
    {
        label: "IP & Royalty Management",
        href: "/solutions/use-case/ip-royalty-management",
        description: "Secure intellectual property. Capture every royalty.",
        icon: Copyright,
        category: "ENTERPRISE",
        tags: ["Media", "Legal & Compliance"],
    },
    {
        label: "Decentralized AI Compute",
        href: "/solutions/use-case/decentralized-ai-compute",
        description: "Verify every inference. Decentralize AI compute.",
        icon: Cpu,
        category: "ENTERPRISE",
        tags: ["Enterprise IT", "AI"],
    },
    {
        label: "Decentralized Science (DeSci)",
        href: "/solutions/use-case/decentralized-science-desci",
        description: "Verify research. Unlock research funding.",
        icon: FlaskConical,
        category: "SME",
        tags: ["Life Sciences", "Research"],
    },
    {
        label: "Smart Legal Escrow",
        href: "/solutions/use-case/smart-legal-escrow",
        description: "Execute trustless agreements. Trustless by design.",
        icon: Scale,
        category: "ENTERPRISE",
        tags: ["Legal & Compliance", "Real Estate"],
    },
    {
        label: "Carbon Credit Trading",
        href: "/solutions/use-case/carbon-credit-trading",
        description: "Tokenize the atmosphere. Guarantee carbon integrity.",
        icon: Leaf,
        category: "SME",
        tags: ["Energy", "Sustainability"],
    },
    {
        label: "Cryptographic Voting Systems",
        href: "/solutions/use-case/cryptographic-voting-systems",
        description: "Verify every ballot. Guarantee tamper-proof elections.",
        icon: Vote,
        category: "GOVERNMENT",
        tags: ["Government", "Elections"],
    },
    {
        label: "Enterprise Workflow Automation",
        href: "/solutions/use-case/enterprise-workflow-automation",
        description: "Digitize enterprise logic. Automate every handover.",
        icon: Workflow,
        category: "ENTERPRISE",
        tags: ["Enterprise IT", "Operations"],
    },
    {
        label: "Corporate Treasury & DeFi Yield",
        href: "/solutions/use-case/corporate-treasury-defi-yield",
        description: "Automate capital routing for idle treasury.",
        icon: TrendingUp,
        category: "ENTERPRISE",
        tags: ["Financial Services", "Treasury"],
    },
    {
        label: "Microtransactions & Streaming",
        href: "/solutions/use-case/microtransactions-streaming",
        description: "Stream value per byte. Near-zero transaction fees.",
        icon: Waves,
        category: "ENTERPRISE",
        tags: ["Media", "Telecom"],
    },
    {
        label: "Decentralized Storage & Archiving",
        href: "/solutions/use-case/decentralized-storage-archiving",
        description: "Resilient, decentralized archival. Unify siloed data.",
        icon: Database,
        category: "ENTERPRISE",
        tags: ["Enterprise IT", "Infrastructure"],
    },
    {
        label: "Cross-Chain Interoperability",
        href: "/solutions/use-case/cross-chain-interoperability",
        description: "Bridge fragmented networks and liquidity silos.",
        icon: Network,
        category: "ENTERPRISE",
        tags: ["Web3", "Infrastructure"],
    },
    {
        label: "Zero-Trust Network Access",
        href: "/solutions/use-case/zero-trust-network-access",
        description: "Eliminate the perimeter. Authenticate via cryptography.",
        icon: Lock,
        category: "ENTERPRISE",
        tags: ["Enterprise IT", "Security"],
    },
    {
        label: "Healthcare & Life Sciences",
        href: "/solutions/use-case/secure-healthcare-data-sharing",
        description: "HIPAA compliant patient record networks.",
        icon: HeartPulse,
        category: "SME",
        tags: ["Healthcare", "Life Sciences"],
    },
    {
        label: "Fractional Ownership",
        href: "/solutions/use-case/fractional-ownership",
        description: "Liquify monolith assets. Open access to ownership.",
        icon: PieChart,
        category: "ENTERPRISE",
        tags: ["Real Estate", "Financial Services"],
    },
]

// Industry vertical data from slugs
export const INDUSTRY_VERTICALS: Omit<SolutionItem, "href">[] = [

    {
    label: "Financial Services & Banking",
    description: "Tokenize assets and automate cross-border settlements.",
    icon: Landmark,
    tags: ["Financial Services", "Banking"],
    tone: "chart-2",
  },
  {
    label: "Supply Chain & Logistics",
    description: "Synchronized global logistics with absolute provenance.",
    icon: Truck,
    tags: ["Supply Chain", "Logistics"],
    tone: "chart-1",
  },

  {
    label: "Government & Public Sector",
    description: "Automate public procurement and unify municipal databases.",
    icon: Building2,
    tags: ["Government", "Public Sector"],
    tone: "chart-4",
  },
  {
    label: "Healthcare & Life Sciences",
    description: "Secure patient data and automate medical billing.",
    icon: HeartPulse,
    tags: ["Healthcare", "Life Sciences"],
    tone: "chart-5",
  },
    {
    label: "Energy & Utilities",
    description: "Modernize the grid and tokenize sustainability.",
    icon: Zap,
    tags: ["Energy", "Utilities"],
    tone: "primary",
  },
    {
    label: "Real Estate & PropTech",
    description: "Tokenize property and automate escrow.",
    icon: Home,
    tags: ["Real Estate", "PropTech"],
    tone: "chart-5",
  },
    {
    label: "Insurance",
    description: "Automate policies with parametric execution.",
    icon: ShieldCheck,
    tags: ["Insurance", "Finance"],
    tone: "primary",
  },
    {
    label: "Telecommunications",
    description: "Decentralize connectivity and automate settlement.",
    icon: Wifi,
    tags: ["Telecom", "Infrastructure"],
    tone: "chart-2",
  },
    {
    label: "Media & Entertainment",
    description: "Tokenize culture and automate royalties.",
    icon: Music,
    tags: ["Media", "Entertainment"],
    tone: "chart-2",
  },
    {
    label: "Retail & Consumer Goods",
    description: "Tokenize loyalty and verify supply chains.",
    icon: ShoppingBag,
    tags: ["Retail", "Consumer Goods"],
    tone: "extra-1",
  },
  {
    label: "Agriculture & Food Tech",
    description:
      "Trace global food provenance and automate agricultural escrow.",
    icon: Utensils,
    tags: ["Agriculture", "Supply Chain"],
    tone: "chart-1",
  },
   {
    label: "Aviation & Aerospace",
    description: "Verify components and automate compliance records.",
    icon: Plane,
    tags: ["Aviation", "Compliance"],
    tone: "chart-4",
  },
    {
    label: "Automotive & Manufacturing",
    description: "Trace global automotive parts and automate warranty claims.",
    icon: Car,
    tags: ["Manufacturing", "Supply Chain"],
    tone: "chart-3",
  },
  {
    label: "Legal & Compliance",
    description: "Automate agreements and enforce compliance.",
    icon: Scale,
    tags: ["Legal", "Compliance"],
    tone: "chart-1",
  },
    {
    label: "Education & Academia",
    description: "Verify achievements and automate administration.",
    icon: GraduationCap,
    tags: ["Education", "Identity"],
    tone: "extra-1",
  },
    {
    label: "Gaming & Esports",
    description: "Tokenize assets and automate in-game economies.",
    icon: Gamepad2,
    tags: ["Gaming", "Esports"],
    tone: "chart-3",
  },
  {
    label: "cybersecurity",
    description: "Deploy decentralized PKI and enforce zero trust.",
    icon: Shield,
    tags: ["Security", "Enterprise IT"],
    tone: "chart-5",
  },
    {
    label: "Philanthropy & Non-Profit",
    description: "Route impact and automate transparency.",
    icon: Heart,
    tags: ["Philanthropy", "Non-Profit"],
    tone: "chart-4",
  },
  {
    label: "Travel & Hospitality",
    description: "Decentralize bookings and automate alliances.",
    icon: PlaneTakeoff,
    tags: ["Travel", "Hospitality"],
    tone: "chart-3",
  },
  {
    label: "Mining & Heavy Industry",
    description: "Trace raw materials and automate extraction.",
    icon: Pickaxe,
    tags: ["Mining", "Industry"],
    tone: "chart-3",
  },
  {
    label: "Enterprise IT & SaaS",
    description: "Decentralize architecture and automate entitlements.",
    icon: Cloud,
    tags: ["Enterprise IT", "SaaS"],
    tone: "chart-1",
  },
    {
    label: "Sports & Fan Engagement",
    description: "Tokenize loyalty and reclaim the secondary market.",
    icon: Trophy,
    tags: ["Sports", "Fan Engagement"],
    tone: "primary",
  },
  {
    label: "Human Resources & Talent",
    description: "Decentralize payroll and automate credentialing.",
    icon: Users,
    tags: ["HR", "Payroll"],
    tone: "extra-1",
  },
    {
    label: "Art & Creator Economy",
    description: "Fractionalize intellectual property and automate royalties.",
    icon: Palette,
    tags: ["Media", "Creators"],
    tone: "chart-2",
  },
]