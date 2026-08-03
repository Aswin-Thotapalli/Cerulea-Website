import type { IconType } from "react-icons"
import {
  MdMemory as Cpu,
  MdChatBubble as MessageSquare,
  MdSmartToy as Bot,
  MdAccountBalanceWallet as Wallet,
  MdTerminal as Code2,
  MdLock as Lock,
  MdVisibilityOff as EyeOff,
  MdDns as Server,
  MdPower as Plug2,
} from "react-icons/md"
import { StatusTone, SuffixColor, TerminalLine } from "@/types/product-details"

export const BADGE_TONE: Record<"green" | "blue" | "amber", string> = {
  green: "bg-card text-chart-2 ring-chart-2/30",
  blue: "bg-card text-chart-3 ring-chart-3/30",
  amber: "bg-card text-chart-1 ring-chart-1/30",
}

export const STATUS_DOT: Record<
  "active" | "pending" | "error" | "success" | "info" | "healthy" | "syncing",
  string
> = {
  active: "bg-chart-2",
  pending: "bg-chart-1",
  error: "bg-destructive",
  success: "bg-chart-2",
  info: "bg-chart-3",
  healthy: "bg-chart-2",
  syncing: "bg-chart-1",
}

export const PILL_TONE: Record<
  "active" | "pending" | "error" | "success" | "info" | "healthy" | "syncing",
  string
> = {
  active: "bg-primary/10 text-primary border-primary/50",
  pending: "bg-chart-3/10 text-chart-3 border-chart-3/30",
  error: "bg-destructive/10 text-destructive border-destructive/50",
  success: "bg-chart-2/10 text-chart-2 border-chart-2/50",
  info: "bg-chart-3/10 text-chart-3 border-chart-3/50",
  healthy: "bg-chart-2/10 text-chart-2 border-chart-2/50",
  syncing: "bg-chart-1/10 text-chart-1 border-chart-1/30",
}

export const LOG_LINE_TONE: Record<
  NonNullable<TerminalLine["tone"]>,
  string
> = {
  comment: "text-destructive/60",
  key: "text-chart-3",
  string: "text-foreground",
  success: "text-chart-2 font-semibold",
  highlight: "font-bold text-foreground",
  default: "text-foreground",
  error: "text-destructive font-semibold",
  meta: "text-[11px] text-muted-foreground/60",
}

export const ICON_MAP: Record<string, IconType> = {
  Cpu,
  MessageSquare,
  Bot,
  Wallet,
  Code2,
  Lock,
  EyeOff,
  Server,
  Plug2,
}

export const TEXT_TONE: Record<StatusTone, string> = {
  active: "text-primary",
  pending: "text-chart-1",
  error: "text-destructive",
  success: "text-chart-2",
  info: "text-chart-3",
  healthy: "text-chart-2",
  syncing: "text-chart-1",
}

export const SUFFIX_TONE: Record<SuffixColor, string> = {
  "chart-1": "text-chart-1",
  "chart-2": "text-chart-2",
  "chart-3": "text-chart-3",
}
