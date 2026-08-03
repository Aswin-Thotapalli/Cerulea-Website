"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { ALL_SEARCH_ITEMS, springSoft } from "@/const/sidebar-config"

export function SidebarSearch() {
  const router = useRouter()
  const [query, setQuery] = React.useState("")
  const [isFocused, setIsFocused] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const dropdownOpen = isFocused && query.trim().length > 0

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return ALL_SEARCH_ITEMS.filter(
      (r) =>
        r.label.toLowerCase().includes(q) || r.parent.toLowerCase().includes(q)
    ).slice(0, 8)
  }, [query])

  const closeDropdown = React.useCallback(() => {
    setIsFocused(false)
    setActiveIndex(0)
  }, [])

  const handleSelect = React.useCallback(
    (href: string) => {
      setQuery("")
      closeDropdown()
      inputRef.current?.blur()
      if (href.includes("#")) {
        const [path, hash] = href.split("#")
        if (
          typeof window !== "undefined" &&
          window.location.pathname === path
        ) {
          window.history.pushState(null, "", href)
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
          return
        }
      }
      router.push(href)
    },
    [closeDropdown, router]
  )

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!dropdownOpen) return
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      const r = results[activeIndex]
      if (r) handleSelect(r.href)
    } else if (e.key === "Escape") {
      closeDropdown()
      inputRef.current?.blur()
    }
  }

  // Close dropdown on outside click
  React.useEffect(() => {
    if (!dropdownOpen) return
    const onClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        closeDropdown()
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [dropdownOpen, closeDropdown])

  // Global Ctrl+K / ⌘K, focuses the search input from anywhere on the page
  React.useEffect(() => {
    const onGlobalKeyDown = (e: KeyboardEvent) => {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k"
      if (isCmdK) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onGlobalKeyDown)
    return () => window.removeEventListener("keydown", onGlobalKeyDown)
  }, [])

  return (
    <div className="relative" ref={containerRef}>
      <InputGroup className="h-9 w-full rounded-lg! border border-border/50 bg-primary/5">
        <InputGroupInput
          ref={inputRef}
          placeholder="Search Docs..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setActiveIndex(0)
          }}
          onFocus={() => setIsFocused(true)}
          onKeyDown={onKeyDown}
        />
        <InputGroupAddon className="flex items-center gap-1.5">
          <Search />
          {!isFocused && (
            <kbd className="hidden rounded border border-border/60 px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline-block">
              ⌘K
            </kbd>
          )}
        </InputGroupAddon>
      </InputGroup>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            key="search-dropdown"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={springSoft}
            className="absolute inset-x-0 top-full z-30 mt-1.5 overflow-hidden rounded-lg border border-border bg-card shadow-lg"
          >
            <div className="max-h-72 overflow-y-auto p-1.5">
              {results.length === 0 ? (
                <div className="px-3 py-6 text-center text-xs text-muted-foreground">
                  No results for &ldquo;{query}&rdquo;
                </div>
              ) : (
                results.map((r, i) => {
                  const Icon = r.icon
                  const isActive = i === activeIndex
                  return (
                    <button
                      key={r.href + r.label}
                      type="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => handleSelect(r.href)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-xs transition-colors duration-150",
                        isActive
                          ? "bg-sidebar-primary/10 text-foreground"
                          : "text-muted-foreground hover:bg-muted/50"
                      )}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" />
                      <span className="flex-1 truncate">{r.label}</span>
                      <span className="shrink-0 text-[10px] text-muted-foreground/60">
                        {r.parent}
                      </span>
                    </button>
                  )
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SidebarSearch
