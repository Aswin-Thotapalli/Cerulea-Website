import type { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"
import type { StaticImageData } from "next/image"

export type NavLinkItem = {
  label: string
  href: string
  description?: string
  badge?: string
  icon?: string
  iconEl?: LucideIcon | IconType
  logo?: StaticImageData
  // Render as plain, non-clickable text (e.g. "coming soon" placeholders).
  static?: boolean
}

export type NavColumn = {
  title?: string
  items: NavLinkItem[]
}

export type NavItem = {
  label: string
  href?: string
  columns?: NavColumn[]
}
