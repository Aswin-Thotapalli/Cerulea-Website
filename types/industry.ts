import { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"

export interface AdvantageItem {
  number: string
  title: string
  description: string
}

export interface UseCaseItem {
  icon: LucideIcon | IconType
  label: string
  legacyBottleneck: string
  ceruleaExecution: string
  architecturalImpact: string
}

export interface SimulatorData {
  label: string
  unit: string
  min: number
  max: number
  defaultValue: number
  legacyCostLabel: string
  legacyCostValue: string
  ceruleaCostLabel: string
  ceruleaCostValue: string
  totalSavedLabel: string
  totalSavedValue: string
  methodology: string
}

export interface ArchitectureTrackStep {
  icon: LucideIcon | IconType
  label: string
  sub: string
    accent?: boolean
}

export interface ArchitectureTrack {
  title: string
  description: string
  steps?: ArchitectureTrackStep[]
  nodes?: { label: string; sublabel: string }[]
}

export interface SpectrumColumn {
  icon: LucideIcon | IconType
  title: string
  description: string
  assetTypesLabel?: string
  assetTypes: string[]
}

export interface TechStackLayer {
  number: string
  category: string
  title: string
  description: string
}

export interface DeploymentPhase {
  title: string
  duration: string
  description: string
}

export interface TimeToValue {
  legacyLabel: string
  legacyDuration: string
  ceruleaLabel: string
  ceruleaDuration: string
  legacyPhases: DeploymentPhase[]
  ceruleaPhases: DeploymentPhase[]
}

export interface MechanicItem {
  title: string
  description: string
}

export interface LogLine {
  time?: string
  text: string
  tone?: "default" | "success" | "muted" | "error" | "primary" | "secondary"
}

export interface LifecycleStep {
  icon?: LucideIcon | IconType
  label: string
  description: string
  logFilename?: string // Made optional
  logLines?: LogLine[] // Made optional
}

export interface LayerDetail {
  name: string
  description: string
  platformFunction: string
}

export interface LayerItem {
  icon?: LucideIcon | IconType
  title: string
  subtitle: string
  detail?: LayerDetail
  codeSnippet?: string
  simulateDescription?: string
}

export interface SectorItem {
  icon: LucideIcon | IconType
  title: string
  description: string
  assetTypes: string[]
}

export interface Simulator {
  ruleLabel: string
  ruleCount: number
  sliderPercent: number
  traditionalMonths: number
  ceruleaWeeks: number
  methodology: string
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
  nodes?: TrackNode[]
  steps?: ArchitectureTrackStep[]
  connectorLabels?: string[]
}

export interface IndustryEntry {
  slug: string
  icon: LucideIcon | IconType
  eyebrow: string
  headline1: string
  headline2: string
  heroDescription: string
  heroCta: string
  foundationLabel: string
  mechanicsTitle: string
  mechanicsSubtitle: string
  mechanics: MechanicItem[]
  lifecycleTitle: string
  lifecycleSubtitle: string
  lifecycleSteps: LifecycleStep[]
  logSystemName?: string
  logFilename?: string
  logLines?: { text: string }[]
  anatomyTitle: string
  anatomyDescription: string
  layers: LayerItem[]
  layerDetail?: LayerDetail
  applicabilityTitle: string
  applicabilitySubtitle: string
  sectors: SectorItem[]
  networkTitle: string
  networkSubtitle: string
  tracks: Track[]
  simulatorTitle: string
  simulatorSubtitle: string
  simulator: Simulator
}

// ============ INDUSTRY PAGE TYPES ============

export interface IndustryPage {
  slug: string
  eyebrow: string
  headline: [string, string]
  description: string
  primaryCta: string
  primaryCtaLink?: string
  secondaryCta?: string
  advantagesTitle?: string
  foundationLabel?:string
  advantages: AdvantageItem[]
  advantagesSubtitle?:string
  useCasesDescription: string
  useCases: UseCaseItem[]
  simulatorTitle: string
  simulatorDescription?: string
  simulator: SimulatorData
  architectureTitle?: string
  architectureDescription: string
  tracks: Track[]
  spectrumTitle?: string
  spectrumDescription: string
  spectrum: SpectrumColumn[]
  stackTitle: string
  stackDescription: string
  stackLayers: TechStackLayer[]
  timeToValueDescription: string
  timeToValue: TimeToValue
}

export type Category = "ENTERPRISE" | "DAPPS" | "SME" | "GOVERNMENT"

export interface IndustryNavItem {
  label: string
  href: string
  description: string
  icon: string
  category: Category
  slug: string
}
