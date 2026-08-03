import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons"

export type ProductIcon = LucideIcon | IconType

// -----------------------------------------------------------------------------
// Shared Types
// -----------------------------------------------------------------------------

export type StatusTone =
  "active" | "pending" | "error" | "success" | "info" | "healthy" | "syncing"

export type BadgeTone = "green" | "blue" | "amber"

export type SuffixColor = "chart-1" | "chart-2" | "chart-3"

// -----------------------------------------------------------------------------
// Terminal
// -----------------------------------------------------------------------------

export interface TerminalLine {
  text: string
  tone?:
    | "comment"
    | "key"
    | "string"
    | "success"
    | "highlight"
    | "default"
    | "error"
    | "meta"
}

export interface FlowStep {
  label: string
  code: string
  tone?: "muted" | "success"
}

export interface TerminalVisual {
  type: "terminal"
  title?: string
  badge?: {
    label: string
    tone: BadgeTone
  }
  flow?: FlowStep[]
  plain?: boolean
  lines: TerminalLine[]
}

// -----------------------------------------------------------------------------
// Metrics
// -----------------------------------------------------------------------------

export interface MetricItem {
  label: string
  value: string
  suffix?: string
  suffixColor?: SuffixColor
  highlighted?: boolean
}

export interface MetricRoute {
  origin: string
  originLabel?: string
  destination: string
  destinationLabel?: string
}

export interface MetricVisual {
  type: "metric"
  title?: string
  badge?: string
  label?: string
  value?: string
  delta?: {
    value: string
    positive: boolean
  }
  secondary?: {
    label: string
    value: string
    suffix?: string
  }
  metrics?: MetricItem[]
  lines?: TerminalLine[]
  route?: MetricRoute
}

// -----------------------------------------------------------------------------
// Lists
// -----------------------------------------------------------------------------

export interface ListNote {
  text: string
  tone?: "amber" | "info" | "success"
}


export interface ListRow {
  label: string
  sublabel?: string
  value?: string
  status?: StatusTone
  sectionLabel?: string
  href?: string
  highlighted?: boolean
  highlightTone?: "success" | "info" // color of the highlighted box; defaults to "info" (blue)
  icon?: string
  mono?: boolean
  muted?: boolean
  selected?: boolean
  valueStyle?: "pill" | "text"
  reason?: string
  actionTone?: "success" | "error"
}

export interface ListVisual {
  type: "list"
  title?: string
  subtitle?: string // small muted line under the title (e.g. "Custodial or Managed Key Mode")
  badge?: { label: string; tone: BadgeTone }
  variant?: "default" | "checklist" | "tabs" | "policy" | "chips"
  theme?: "light" | "dark" // "dark" renders a navy card, used for sponsorship/batch panels
  searchPlaceholder?: string // renders a faux search/input bar row (dark theme only)
  caption?: string // small centered footer line, e.g. "Aggregate → Single Proof"
  rows: ListRow[]
  note?: ListNote
}

// -----------------------------------------------------------------------------
// Diagram
// -----------------------------------------------------------------------------

export interface DiagramNode {
  label: string
  sub?: string
  description?: string
  icon?: string
  accent?: boolean
  children?: DiagramNode[]
}

export interface DiagramVisual {
  type: "diagram"
  title?: string
  nodes: DiagramNode[]
}

// -----------------------------------------------------------------------------
// Grid
// -----------------------------------------------------------------------------

export interface GridRow {
  label: string
  description?: string
  sublabel?: string
  value?: string
  status?: StatusTone
  highlighted?: boolean
}

export interface GridVisual {
  type: "grid"
  title?: string
  badge?: {
    label: string
    tone: BadgeTone
  }
  rows: GridRow[]
}

// -----------------------------------------------------------------------------
// Chat / Inbox
// -----------------------------------------------------------------------------

export interface ChatMessage {
  from: "user" | "ai"
  text: string
}

export interface ChatVisual {
  type: "chat"
  title?: string
  badge?: string
  inputPlaceholder?: string
  sendLabel?: string
  messages: ChatMessage[]
}

export interface InboxVisual {
  type: "inbox"
  title?: string
  badge?: string
  inputPlaceholder?: string
  sendLabel?: string
  messages: ChatMessage[]
}

// -----------------------------------------------------------------------------
// Fleet
// -----------------------------------------------------------------------------

export interface FleetRow {
  label: string
  sublabel?: string
  status?: StatusTone
}

export interface FleetVisual {
  type: "fleet"
  title?: string
  rows: FleetRow[]
}

// -----------------------------------------------------------------------------
// Schema
// -----------------------------------------------------------------------------

export interface SchemaEntity {
  name: string
  fields: string[]
}

export interface SchemaVisual {
  type: "schema"
  entities: SchemaEntity[]
}

// -----------------------------------------------------------------------------
// Governance
// -----------------------------------------------------------------------------

export interface GovernanceVisual {
  type: "governance"
  title?: string
  actionName: string
  initiatedBy: string
  date: string
  progress: {
    current: number
    total: number
  }
  primaryAction: string
  secondaryAction?: string
}

// -----------------------------------------------------------------------------
// Matrix
// -----------------------------------------------------------------------------

export interface MatrixVisual {
  type: "matrix"
  title?: string
  badge?: {
    label: string
    tone: BadgeTone
  }
  columns: string[]
  rows: {
    label: string
    values: ("allowed" | "denied")[]
  }[]
}

// -----------------------------------------------------------------------------
// Visual Union
// -----------------------------------------------------------------------------

export type Visual =
  | TerminalVisual
  | MetricVisual
  | ListVisual
  | ChatVisual
  | DiagramVisual
  | SchemaVisual
  | InboxVisual
  | GridVisual
  | FleetVisual
  | GovernanceVisual
  | MatrixVisual

// -----------------------------------------------------------------------------
// Features
// -----------------------------------------------------------------------------

export interface FeatureBullet {
  icon: ProductIcon
  title: string
  description: string
}

export interface Feature {
  icon: ProductIcon
  title: string
  isHeader?: boolean
  description: string
  detail?: string
  actionLabel?: string
  bullets?: FeatureBullet[]
  visual: Visual
}

// -----------------------------------------------------------------------------
// Product
// -----------------------------------------------------------------------------

export interface Product {
  slug: string
  eyebrow: string
  headline: [string, string]
  description: string

  primaryCta?: {
    label: string
    href: string
  }

  secondaryCta: {
    label: string
    href: string
  }

  closingHeadline: string
  closingDescription?: string

  closingPrimaryCta?: {
    label: string
    href: string
  }

  closingSecondaryCta?: {
    label: string
    href: string
  }

  features: Feature[]
}