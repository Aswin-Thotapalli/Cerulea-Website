"use client"

import React, { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react"
import { Button } from "../animate-ui/components/buttons/button"
import Image from "next/image"
import logoImg from "@/assets/logo.png"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavColumn, NavItem, NavLinkItem } from "@/types/nav"
import { INDUSTRY_SOLUTIONS, NAV_ITEMS } from "@/const/nav-data"

function NavLinkRow({
  item,
  onNavigate,
  showIcon = true,
}: {
  item: NavLinkItem
  onNavigate?: () => void
  showIcon?: boolean
}) {
  const IconEl = item.iconEl
  const inner = (
    <>
      {showIcon && (item.logo || IconEl || item.icon) && (
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground transition-colors group-hover/row:border-primary/40 group-hover/row:bg-primary/10 group-hover/row:text-primary">
          {item.logo ? (
            <Image src={item.logo} alt="" className="h-4 w-4 object-contain" />
          ) : IconEl ? (
            <IconEl className="h-4 w-4" />
          ) : (
            <span className="text-xs font-semibold">{item.icon}</span>
          )}
        </div>
      )}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">
            {item.label}
          </span>
          {item.badge && (
            <span className="rounded-full bg-chart-1/15 px-2 py-0.5 text-[10px] font-medium text-chart-1">
              {item.badge}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1 text-left text-xs leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </>
  )

  // Non-clickable placeholder text (e.g. "coming soon")
  if (item.static) {
    return (
      <div className="-mx-2 flex cursor-default items-start gap-3 rounded-lg px-2 py-2 opacity-70">
        {inner}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group/row -mx-2 flex items-start gap-3 rounded-lg px-2 py-2 transition hover:bg-primary/10"
    >
      {inner}
    </Link>
  )
}

// ---------- Desktop dropdown panel ----------

function DropdownPanel({
  columns,
  onNavigate,
}: {
  columns: NavColumn[]
  onNavigate: () => void
}) {
  const isMega = columns.length > 1
  const isIndustries = columns.some((col) =>
    col.items.some((it) => it.href?.startsWith("/industries/"))
  )

  const allSolutions = isIndustries ? INDUSTRY_SOLUTIONS : []

  return (
    <div
      className={
        "rounded-2xl border bg-card shadow-xl " +
        (isIndustries
          ? "w-[min(94vw,1120px)] max-h-[82vh] overflow-y-auto p-6"
          : isMega
          ? "w-[min(90vw,1000px)] max-h-[82vh] overflow-y-auto p-8"
          : "w-80 p-5")
      }
    >
      <div
        className={
          isIndustries
            ? "grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4"
            : isMega
            ? "grid grid-cols-3 gap-8"
            : "space-y-1"
        }
      >
        {columns.map((column, colIndex) => (
          <div
            key={column.title ?? colIndex}
            className={cn(
              isMega && colIndex > 0
                ? isIndustries
                  ? "md:border-l md:border-border md:pl-6"
                  : "border-l border-border pl-8"
                : ""
            )}
          >
            {column.title && (
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {column.title}
              </p>
            )}

            <div
              className={
                column.title
                  ? isIndustries
                    ? "mt-3 space-y-1"
                    : "mt-4 space-y-5"
                  : "space-y-1"
              }
            >
              {column.items.map((item) => (
                <NavLinkRow
                  key={item.label}
                  item={item}
                  onNavigate={onNavigate}
                  showIcon={true}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {isIndustries && (
        <div className="mt-6 border-t border-border pt-4">
          <Link
            href="/industries"
            className="group/link block"
            onClick={onNavigate}
          >
            <button className="flex w-full cursor-pointer items-center justify-between text-sm font-medium text-muted-foreground transition-all duration-300 group-hover/link:pl-4 group-hover/link:text-foreground">
              <span>View All {allSolutions.length} Industries</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:text-chart-3" />
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

// ---------- Desktop nav item ----------

function NavMenuItem({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: NavItem
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}) {
  if (!item.columns) {
    return (
      <Link
        href={item.href ?? "#"}
        className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
      >
        {item.label}
      </Link>
    )
  }

  const isMega = (item.columns?.length ?? 0) > 1

  return (
    <div
      className="group relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        onClick={() => (isOpen ? onClose() : onOpen())}
        className="flex cursor-pointer items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-foreground"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Invisible bridge so the pointer can travel from trigger to panel (non-mega) */}
      {!isMega && (
        <div className="absolute top-full left-1/2 h-3 w-full -translate-x-1/2" />
      )}

      <div
        className={cn(
          "z-50 transition-all duration-200 ease-out",
          // Mega panels are centered in the viewport (clamped to 94vw) so a wide
          // panel never overflows off either edge, regardless of trigger position.
          isMega
            ? "fixed top-[4.75rem] left-1/2 -translate-x-1/2"
            : "absolute top-full left-1/2 mt-3 -translate-x-1/2",
          isOpen
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0"
        )}
        onMouseEnter={isMega ? onOpen : undefined}
        onMouseLeave={isMega ? onClose : undefined}
      >
        <DropdownPanel columns={item.columns} onNavigate={onClose} />
      </div>
    </div>
  )
}

// ---------- Mobile accordion item ----------

function MobileNavItem({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  if (!item.columns) {
    return (
      <Link
        href={item.href ?? "#"}
        onClick={onNavigate}
        className="block px-1 py-3 text-sm font-medium text-foreground/80 transition hover:text-foreground"
      >
        {item.label}
      </Link>
    )
  }

  const isIndustries = item.label === "Industries"
  const allSolutions = isIndustries ? INDUSTRY_SOLUTIONS : []

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-1 py-3 text-sm font-medium text-foreground"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-out",
          isOpen
            ? "grid-rows-[1fr] pb-4 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 space-y-5">
          {item.columns.map((column, colIndex) => (
            <div key={column.title ?? colIndex}>
              {column.title && (
                <p className="px-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {column.title}
                </p>
              )}
              <div className={column.title ? "mt-2 space-y-1" : "space-y-1"}>
                {column.items.map((link) => (
                  <NavLinkRow
                    key={link.label}
                    item={link}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            </div>
          ))}

          {isIndustries && (
            <div className="pt-2">
              <Link href="/industries" onClick={onNavigate}>
                <button className="group flex w-full items-center justify-between text-sm font-medium">
                  <span>View All {allSolutions.length} Industries</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ---------- Nav ----------

export default function Nav({ isFull = false }: { isFull?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null)
  const [openDesktopItem, setOpenDesktopItem] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  function openDesktop(label: string) {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setOpenDesktopItem(label)
  }

  function closeDesktop() {
    // small delay avoids flicker when moving pointer between trigger and panel
    closeTimeoutRef.current = setTimeout(() => setOpenDesktopItem(null), 120)
  }

  function closeMobileMenu() {
    setMobileOpen(false)
    setOpenMobileItem(null)
  }

  const isScrolled = scrolled && !isFull

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ease-out",
        isScrolled
          ? "border-border shadow-sm"
          : "border-transparent shadow-none"
      )}
    >
      <div
        className={cn(
          isFull
            ? "w-full border-b border-dashed border-border/50 bg-card px-3 py-3 xl:px-8"
            : "mx-auto max-w-7xl p-3",
          "flex items-center justify-between gap-4 transition-all duration-300 ease-out",
          isScrolled ? "py-2" : "py-3"
        )}
      >
        <Link href="/" className="shrink-0">
          <Image
            src={logoImg}
            alt="Logo"
            width={200}
            height={80}
            className={cn(
              "w-auto transition-all duration-300 ease-out",
              isScrolled ? "h-9 md:h-11" : "h-12 md:h-16"
            )}
          />
        </Link>

        <div className="ff-accent hidden items-center gap-5 xl:gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavMenuItem
              key={item.label}
              item={item}
              isOpen={openDesktopItem === item.label}
              onOpen={() => openDesktop(item.label)}
              onClose={closeDesktop}
            />
          ))}
        </div>

        <div className="hidden lg:block">
          <Button link="/company/contact">Contact Us</Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="ff-accent max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-card px-4 pb-6 shadow-xl lg:hidden">
          {NAV_ITEMS.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              isOpen={openMobileItem === item.label}
              onToggle={() =>
                setOpenMobileItem((prev) =>
                  prev === item.label ? null : item.label
                )
              }
              onNavigate={closeMobileMenu}
            />
          ))}

          <div className="pt-4">
            <Button className="w-full" onClick={closeMobileMenu}>
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}