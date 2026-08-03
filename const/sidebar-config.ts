import type { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"
// Material icons (react-icons/md) aliased to the previous lucide names.
import {
  MdMenuBook as BookOpen,
  MdAccountTree as GitBranch,
  MdSettings as Settings2,
  MdLayers as Layers,
  MdInventory2 as Box,
  MdBarChart as BarChart2,
  MdPublic as Globe,
  MdShield as Shield,
  MdBolt as Zap,
  MdLink as Link2,
  MdTerminal as Terminal,
  MdApartment as Building2,
  MdTag as Hash,
  MdLock as Lock,
  MdVpnKey as KeyRound,
  MdDns as Server,
  MdViewList as Rows3,
  MdCode as Code2,
  MdSchedule as Clock,
  MdDescription as FileText,
  MdGroups as Users,
  MdWarning as AlertTriangle,
  MdLightbulb as Lightbulb,
  MdHub as Network,
  MdMergeType as GitMerge,
  MdSecurity as Swords,
  MdAssignment as ClipboardList,
  MdFolderCopy as FileStack,
} from "react-icons/md"

export interface NavSubsection {
  label: string
  href: string
}

export interface NavItem {
  title: string
  icon: LucideIcon | IconType
  href: string
  subsections?: NavSubsection[]
}

export interface SidebarConfig {
  matcher: string
  items: NavItem[]
  stats: { label: string; value: string }[]
  defaultOpen?: string
}

export const DOCS_CONFIG: SidebarConfig = {
  matcher: "/developers/docs",
  defaultOpen: "Foundation",
  items: [
    {
      title: "Foundation",
      icon: BookOpen,
      href: "/developers/docs/foundation",
      subsections: [
        {
          label: "What Cerulea Is",
          href: "/developers/docs/foundation#what-cerulea-is",
        },
        {
          label: "Core Philosophy",
          href: "/developers/docs/foundation#core-philosophy",
        },
        {
          label: "Configurable Decentralization",
          href: "/developers/docs/foundation#configurable-decentralization",
        },
      ],
    },
    {
      title: "Decision Frameworks",
      icon: GitBranch,
      href: "/developers/docs/decision-frameworks",
      subsections: [
        {
          label: "Architecture: Public L1 or Private Chain?",
          href: "/developers/docs/decision-frameworks#architecture-public-l1-or-private-chain",
        },
        {
          label: "Governance Model",
          href: "/developers/docs/decision-frameworks#governance-model",
        },
        {
          label: "Cost vs Control",
          href: "/developers/docs/decision-frameworks#cost-vs-control",
        },
        {
          label: "Security Posture",
          href: "/developers/docs/decision-frameworks#security-posture",
        },
      ],
    },
    {
      title: "Cerulea Studio",
      icon: Settings2,
      href: "/developers/docs/cerulea-studio",
      subsections: [
        {
          label: "Studio Overview",
          href: "/developers/docs/cerulea-studio#studio-overview",
        },
        {
          label: "Architecture Selection",
          href: "/developers/docs/cerulea-studio#architecture-selection",
        },
        {
          label: "Module Configuration Framework",
          href: "/developers/docs/cerulea-studio#module-configuration-framework",
        },
        {
          label: "Deployment Engine",
          href: "/developers/docs/cerulea-studio#deployment-engine",
        },
      ],
    },
    {
      title: "Build Lifecycle",
      icon: Layers,
      href: "/developers/docs/build-lifecycle",
      subsections: [
        {
          label: "Lifecycle Stages",
          href: "/developers/docs/build-lifecycle#lifecycle-stages",
        },
        {
          label: "Stage Transitions",
          href: "/developers/docs/build-lifecycle#stage-transitions",
        },
      ],
    },
    {
      title: "Architecture",
      icon: Box,
      href: "/developers/docs/architecture",
      subsections: [
        {
          label: "Runtime Engine",
          href: "/developers/docs/architecture#runtime-engine",
        },
        {
          label: "Cross-Chain & Interoperability",
          href: "/developers/docs/architecture#cross-chain-interoperability",
        },
      ],
    },
    {
      title: "Governance",
      icon: BarChart2,
      href: "/developers/docs/governance",
      subsections: [
        {
          label: "Proposal Lifecycle",
          href: "/developers/docs/governance#proposal-lifecycle",
        },
        {
          label: "Upgrade Governance",
          href: "/developers/docs/governance#upgrade-governance",
        },
        {
          label: "Public L1 vs Private Chain Governance",
          href: "/developers/docs/governance#public-l1-vs-private-chain-governance",
        },
      ],
    },
    {
      title: "Infrastructure & Deployment",
      icon: Globe,
      href: "/developers/docs/infrastructure",
      subsections: [
        {
          label: "Hosting Models",
          href: "/developers/docs/infrastructure#hosting-models",
        },
        {
          label: "Monitoring & Observability",
          href: "/developers/docs/infrastructure#monitoring-observability",
        },
        {
          label: "Disaster Recovery & Rollback",
          href: "/developers/docs/infrastructure#disaster-recovery-rollback",
        },
      ],
    },
    {
      title: "Security Model",
      icon: Shield,
      href: "/developers/docs/security",
      subsections: [
        {
          label: "Operational vs Data Control Boundary",
          href: "/developers/docs/security#operational-vs-data-control-boundary",
        },
        {
          label: "Enterprise Data Sovereignty",
          href: "/developers/docs/security#enterprise-data-sovereignty",
        },
        {
          label: "Compliance Positioning",
          href: "/developers/docs/security#compliance-positioning",
        },
      ],
    },
    {
      title: "Cerulea Intelligence",
      icon: Zap,
      href: "/developers/docs/intelligence",
      subsections: [
        {
          label: "Validator Ownership",
          href: "/developers/docs/intelligence#validator-ownership",
        },
        {
          label: "Enterprise Upgrade Model",
          href: "/developers/docs/intelligence#enterprise-upgrade-model",
        },
      ],
    },
    {
      title: "Integrations",
      icon: Link2,
      href: "/developers/docs/integrations",
      subsections: [
        {
          label: "External System Integrations",
          href: "/developers/docs/integrations#external-system-integrations",
        },
        {
          label: "API Bridge Layer",
          href: "/developers/docs/integrations#api-bridge-layer",
        },
      ],
    },
    {
      title: "APIs & Platform Access",
      icon: Terminal,
      href: "/developers/docs/apis",
      subsections: [
        { label: "RPC Endpoints", href: "/developers/docs/apis#rpc-endpoints" },
        {
          label: "Auth & Access Control",
          href: "/developers/docs/apis#auth-access-control",
        },
      ],
    },
    {
      title: "Enterprise Operating Model",
      icon: Building2,
      href: "/developers/docs/enterprise",
      subsections: [
        {
          label: "Team Structure",
          href: "/developers/docs/enterprise#team-structure",
        },
        {
          label: "Support & Escalation",
          href: "/developers/docs/enterprise#support-escalation",
        },
      ],
    },
    {
      title: "Glossary",
      icon: Hash,
      href: "/developers/docs/glossary",
      subsections: [
        {
          label: "Core Terms (20)",
          href: "/developers/docs/glossary#core-terms",
        },
      ],
    },
  ],
  stats: [
    { label: "Sections", value: "13" },
    { label: "Subsections", value: "35+" },
    { label: "Glossary", value: "20" },
  ],
}

export const API_CONFIG: SidebarConfig = {
  matcher: "/developers/api",
  defaultOpen: "Introduction",
  items: [
    {
      title: "Introduction",
      icon: BookOpen,
      href: "/developers/api/introduction",
    },
    {
      title: "Authentication",
      icon: Shield,
      href: "/developers/api/authentication",
    },
    { title: "Core REST API", icon: Globe, href: "/developers/api/rest" },
    {
      title: "RPC Methods",
      icon: Terminal,
      href: "/developers/api/rpc-methods",
    },
    { title: "Webhooks", icon: Zap, href: "/developers/api/webhooks" },
    { title: "Workspaces", icon: Layers, href: "/developers/api/workspaces" },
    {
      title: "dApp Builder",
      icon: Code2,
      href: "/developers/api/dapp-builder",
    },
    {
      title: "Private Blockchains",
      icon: Lock,
      href: "/developers/api/private-blockchains",
    },
    {
      title: "Smart Contracts",
      icon: KeyRound,
      href: "/developers/api/smart-contracts",
    },
    { title: "Validators", icon: Server, href: "/developers/api/validators" },
    { title: "Governance", icon: Rows3, href: "/developers/api/governance" },
    { title: "Modules", icon: Box, href: "/developers/api/modules" },
    { title: "Tokens", icon: Hash, href: "/developers/api/tokens" },
    {
      title: "Monitoring",
      icon: BarChart2,
      href: "/developers/api/monitoring",
    },
    {
      title: "Error Handling",
      icon: Clock,
      href: "/developers/api/error-handling",
    },
  ],
  stats: [
    { label: "Sections", value: "15" },
    { label: "Endpoints", value: "40+" },
    { label: "RPC Methods", value: "7" },
  ],
}

export const WHITEPAPER_CONFIG: SidebarConfig = {
  matcher: "/developers/whitepaper",
  defaultOpen: "Abstract",
  items: [
    {
      title: "Abstract",
      icon: FileText,
      href: "/developers/whitepaper/abstract",
    },
    {
      title: "Who Is This For",
      icon: Users,
      href: "/developers/whitepaper/for-whom",
    },
    {
      title: "The Problem",
      icon: AlertTriangle,
      href: "/developers/whitepaper/problem",
    },
    {
      title: "The Solution",
      icon: Lightbulb,
      href: "/developers/whitepaper/solution",
    },
    {
      title: "Core Philosophy",
      icon: BookOpen,
      href: "/developers/whitepaper/philosophy",
    },
    {
      title: "Architecture",
      icon: Box,
      href: "/developers/whitepaper/architecture",
    },
    {
      title: "Dual-Chain Model",
      icon: GitMerge,
      href: "/developers/whitepaper/dual-chain",
    },
    {
      title: "Dynamic Consensus",
      icon: Network,
      href: "/developers/whitepaper/dcf",
    },
    {
      title: "Cerulea Studio",
      icon: Settings2,
      href: "/developers/whitepaper/studio",
    },
    {
      title: "Governance",
      icon: BarChart2,
      href: "/developers/whitepaper/governance",
    },
    {
      title: "Security Model",
      icon: Shield,
      href: "/developers/whitepaper/security",
    },
    {
      title: "Cerulea Intelligence",
      icon: Zap,
      href: "/developers/whitepaper/intelligence",
    },
    {
      title: "Competitive Analysis",
      icon: Swords,
      href: "/developers/whitepaper/competitive",
    },
    {
      title: "Integrations",
      icon: Link2,
      href: "/developers/whitepaper/integrations",
    },
    {
      title: "Enterprise Model",
      icon: Building2,
      href: "/developers/whitepaper/enterprise",
    },
    {
      title: "Decision Guide",
      icon: ClipboardList,
      href: "/developers/whitepaper/decision",
    },
    {
      title: "Platform Summary",
      icon: FileStack,
      href: "/developers/whitepaper/summary",
    },
  ],
  stats: [
    { label: "Sections", value: "17" },
    { label: "Read Time", value: "~25m" },
    { label: "Version", value: "v1.0" },
  ],
}

// Move CONFIGS declaration BEFORE ALL_SEARCH_ITEMS
export const CONFIGS: SidebarConfig[] = [
  DOCS_CONFIG,
  API_CONFIG,
  WHITEPAPER_CONFIG,
]

export interface SearchResult {
  label: string
  href: string
  parent: string
  icon: LucideIcon | IconType
}

const SECTION_LABELS: Record<string, string> = {
  "/developers/api": "API Reference",
  "/developers/whitepaper": "Whitepaper",
  "/developers/docs": "Docs",
}

export const ALL_SEARCH_ITEMS: SearchResult[] = CONFIGS.flatMap((config) => {
  const sectionLabel = SECTION_LABELS[config.matcher] ?? "Docs"

  return config.items.flatMap((item) => {
    const parentEntry: SearchResult = {
      label: item.title,
      href: item.href,
      parent: sectionLabel,
      icon: item.icon,
    }
    const subEntries: SearchResult[] = (item.subsections ?? []).map((sub) => ({
      label: sub.label,
      href: sub.href,
      parent: item.title,
      icon: item.icon,
    }))
    return [parentEntry, ...subEntries]
  })
})

export const springSnappy = { type: "spring", stiffness: 500, damping: 38, mass: 0.6 } as const
export const springSoft = { type: "spring", stiffness: 260, damping: 28, mass: 0.7 } as const