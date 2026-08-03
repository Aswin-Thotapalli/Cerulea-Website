import { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"

export interface MechanicItem {
  title: string
  description: string
}

export interface LogLine {
  time?: string
  text: string
  tone?: "default" | "success" | "muted" | "primary" | "secondary" | "error"
}

export interface LifecycleStep {
  icon?: LucideIcon | IconType
  label: string
  description: string
  logFilename?: string
  logLines?: LogLine[]
}

// -- Anatomy ---------------------------------------------------------------

export interface AnatomyLayerDetail {
  badge?: string
  name: string
  description: string
  platformFunction: string
}

export interface AnatomyLayer {
  icon: LucideIcon | IconType
  title: string
  subtitle: string
  detail: AnatomyLayerDetail
  codeSnippet: string
  simAction?: string
  simulateDescription: string
  simulateTitle?: string
  simulateLogs?: LogLine[]
}

export interface Sector {
  icon: LucideIcon | IconType
  title: string
  description: string
  assetTypes: string[]
}

export interface TrackNode {
  label: string
  sublabel: string
  icon: LucideIcon | IconType
  accent?: boolean
}

export interface Track {
  title: string
  description: string
  nodes: TrackNode[]
  connectorLabels?: string[]
}

export interface Simulator {
  ruleLabel: string
  ruleCount: number
  sliderPercent: number // 0-100
  traditionalMonths: number
  ceruleaWeeks: number
  methodology: string
}

export interface CaseEntry {
  slug: string
  icon: LucideIcon | IconType
  eyebrow: string
  headline1: string
  headline2: string
  heroDescription: string
  heroCta: string
  heroCtaLink?: string

  foundationLabel: string
  mechanicsTitle: string
  mechanicsSubtitle: string
  mechanics: MechanicItem[] // 6

  lifecycleTitle: string
  lifecycleSubtitle: string
  lifecycleSteps: LifecycleStep[] // 4
  logSystemName?: string
  logFilename?: string
  logLines?: LogLine[]

  anatomyTitle: string
  anatomyDescription: string
  layers: AnatomyLayer[] // 4

  applicabilityTitle: string
  applicabilitySubtitle: string
  sectors: Sector[] // 3

  networkTitle: string
  networkSubtitle: string
  tracks: Track[] // 2

  simulatorTitle: string
  simulatorSubtitle: string
  simulator: Simulator
}
