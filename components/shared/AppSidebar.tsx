"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  CONFIGS,
  DOCS_CONFIG,
  type SidebarConfig,
  springSnappy,
  springSoft,
} from "@/const/sidebar-config"
import { SidebarSearch } from "./SidebarSearch"
import { Sidebar, useSidebar } from "@/components/animate-ui/components/radix/sidebar"
function useSidebarConfig(): SidebarConfig {
  const pathname = usePathname()
  const matched = CONFIGS.find((c) => pathname?.startsWith(c.matcher))
  return matched ?? DOCS_CONFIG
}

interface AppSidebarProps {
  className?: string
}

export function AppSidebar({ className }: AppSidebarProps) {
  const config = useSidebarConfig()
  const pathname = usePathname()
  const router = useRouter()
  const [openItemsByMatcher, setOpenItemsByMatcher] = React.useState<
    Record<string, string | null>
  >({})
  const openItem =
    openItemsByMatcher[config.matcher] ?? config.defaultOpen ?? null
  const { setOpenMobile } = useSidebar()

  const [copied, setCopied] = React.useState(false)
  const code = "https://api.cerulea.app/v1"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const setOpenItem = React.useCallback(
    (next: string | null | ((current: string | null) => string | null)) => {
      setOpenItemsByMatcher((current) => {
        const currentOpenItem =
          current[config.matcher] ?? config.defaultOpen ?? null
        const nextOpenItem =
          typeof next === "function" ? next(currentOpenItem) : next
        return { ...current, [config.matcher]: nextOpenItem }
      })
    },
    [config.matcher, config.defaultOpen]
  )

  return (
    <Sidebar className={className}>
      <div
        className={cn(
          "flex h-full min-h-0 flex-col border-r border-dashed border-border/50 bg-card py-4"
        )}
      >
        <div className="px-5 pb-3">
          <SidebarSearch />

          {config.matcher === "/developers/api" && (
            <div className="ff-subtitle mt-4 overflow-hidden rounded-lg border border-border/50 bg-primary/5 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-muted-foreground">
                  BASE URL
                </span>
                <button
                  onClick={handleCopy}
                  className="flex cursor-pointer items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-muted-foreground/80"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
              <pre className="mt-1.5 overflow-x-auto">
                <code className="font-mono text-sm text-sidebar-primary">
                  {code}
                </code>
              </pre>
            </div>
          )}
        </div>

        <ScrollArea className="min-h-0 flex-1 pt-2">
          <ul className="flex flex-col gap-0.5 px-3">
            {config.items.map((item) => {
              const isOpen = openItem === item.title
              const hasSubsections = !!item.subsections?.length
              const isActive = pathname === item.href || isOpen
              const Icon = item.icon

              return (
                <li key={item.title}>
                  <motion.button
                    type="button"
                    layout
                    onClick={() => {
                      if (pathname !== item.href) {
                        router.push(item.href)
                      }
                      if (hasSubsections) {
                        setOpenItem((prev) =>
                          prev === item.title ? null : item.title
                        )
                      } else {
                        setOpenItem(item.title)
                        setOpenMobile(false)
                      }
                    }}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.985 }}
                    transition={springSnappy}
                    className={cn(
                      "group relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm",
                      "cursor-pointer border font-semibold",
                      "border-transparent font-medium text-muted-foreground",
                      !isActive && "hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active-highlight"
                        transition={springSoft}
                        className="absolute inset-0 rounded-lg border border-sidebar-primary/25 bg-sidebar-primary/10"
                      />
                    )}

                    <motion.span
                      animate={{
                        scale: isActive ? 1.08 : 1,
                        rotate: isActive ? -4 : 0,
                      }}
                      transition={springSnappy}
                      className="relative z-10"
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0 transition-colors duration-200 ease-out",
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground/75 group-hover:text-muted-foreground"
                        )}
                      />
                    </motion.span>

                    <span
                      className={cn(
                        "relative z-10 flex-1 truncate transition-colors duration-200",
                        isActive && "text-foreground"
                      )}
                    >
                      {item.title}
                    </span>

                    {hasSubsections && (
                      <motion.span
                        animate={{ rotate: isOpen ? 0 : -90 }}
                        transition={springSnappy}
                        className="relative z-10 shrink-0"
                      >
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </motion.span>
                    )}
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {hasSubsections && isOpen && (
                      <motion.ul
                        key="subsections"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: springSoft,
                          opacity: { duration: 0.18, ease: "easeOut" },
                        }}
                        className="mb-3 flex flex-col overflow-hidden pl-8"
                      >
                        <div />
                        {item.subsections!.map((sub, i) => (
                          <motion.li
                            key={sub.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -6 }}
                            transition={{ ...springSoft, delay: 0.035 * i }}
                          >
                            <Link
                              href={sub.href}
                              onClick={(e) => {
                                if (sub.href.includes("#")) {
                                  const [path, hash] = sub.href.split("#")
                                  if (
                                    window.location.pathname === path ||
                                    !path
                                  ) {
                                    const target = document.getElementById(hash)
                                    if (target) {
                                      e.preventDefault()
                                      window.history.pushState(
                                        null,
                                        "",
                                        sub.href
                                      )
                                      target.scrollIntoView({
                                        behavior: "smooth",
                                      })
                                    }
                                  }
                                }
                                setOpenMobile(false)
                              }}
                              className="group/link mt-3 flex items-center gap-1.5 text-xs leading-snug text-muted-foreground/75 transition-colors duration-200 ease-out hover:text-foreground"
                            >
                              <motion.span
                                className="inline-block"
                                whileHover={{ x: 3 }}
                                transition={springSnappy}
                              >
                                {i + 1}. {sub.label}
                              </motion.span>
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </ScrollArea>

        <div className="grid shrink-0 grid-cols-3 px-4 pt-2">
          {config.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.05 * i }}
              className="text-center"
            >
              <div className="text-base font-semibold text-muted-foreground">
                {stat.value}
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground/75">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Sidebar>
  )
}

export default AppSidebar