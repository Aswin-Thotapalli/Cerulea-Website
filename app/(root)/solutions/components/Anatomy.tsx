"use client"

import { useState, useEffect, useRef } from "react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Layers } from "lucide-react"
import { Button } from "@/components/animate-ui/components/buttons/button"

interface AnatomyLayerView {
  icon: ReactNode
  title: string
  subtitle: string
  detail: {
    badge?: string
    name: string
    description: string
    platformFunction: string
  }
  codeSnippet: string
  simAction?: string
  simulateDescription: string
  simulateTitle?: string
  simulateLogs?: { text: string; tone?: "default" | "success" | "muted" | "primary" | "secondary" | "error" }[]
}

interface AnatomyProps {
  title: string
  description: string
  layers: AnatomyLayerView[]
}

const TABS = ["architecture", "code", "simulate"] as const
type Tab = (typeof TABS)[number]

export default function Anatomy({ title, description, layers }: AnatomyProps) {
  const [activeLayer, setActiveLayer] = useState(0)
  const [activeTab, setActiveTab] = useState<Tab>("architecture")
  const [deconstructed, setDeconstructed] = useState(false)
  const layer = layers[activeLayer]

  const [visibleLogsCount, setVisibleLogsCount] = useState(0)
  const [isSimulating, setIsSimulating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const resetSimulation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsSimulating(false)
    setVisibleLogsCount(0)
  }

  const handleLayerChange = (i: number) => {
    if (i !== activeLayer) {
      setActiveLayer(i)
      resetSimulation()
    }
  }

  const handleTabChange = (tab: Tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab)
      resetSimulation()
    }
  }

  const startSimulation = () => {
    if (isSimulating || !layer.simulateLogs) return
    setIsSimulating(true)
    setVisibleLogsCount(0)

    let currentCount = 0
    const totalCount = layer.simulateLogs.length

    intervalRef.current = setInterval(() => {
      currentCount++
      setVisibleLogsCount(currentCount)

      if (currentCount >= totalCount) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setIsSimulating(false)
      }
    }, 700)
  }

  const getButtonLabel = (subtitle: string) => {
    const cleanedSubtitle = subtitle.replace(/^The\s+/i, "");
    return `Simulate ${cleanedSubtitle}`;
  }

  return (
    <section 
      data-aos="fade-up"
      data-aos-duration="600"
      className="mt-10 bg-card"
    >
      <div className="pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-title text-3xl font-bold text-foreground md:text-[40px]">
            {title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {!deconstructed && (
          <div className="mt-10 flex justify-center">
            <Button variant="secondary" onClick={() => setDeconstructed(true)}>
              Deconstruct Architecture
              <Layers className="size-4" />
            </Button>
          </div>
        )}

        {deconstructed && (
        <div className="relative mt-14 border-t border-border/50 py-16">
          {/* Subtle background pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #0c1e45 0, #0c1e45 2px, transparent 0, transparent 50%)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[390px_1fr]">
            {/* Layer list, not tabs, just active-state selection */}
            <div className="flex flex-col gap-2 px-5">
              {layers.map((l, i) => {
                const isActive = i === activeLayer
                const isLast = i === layers.length - 1
                return (
                  <div key={i} className="relative">
                    <button
                      type="button"
                      onClick={() => handleLayerChange(i)}
                      className={cn(
                        "flex w-full cursor-pointer items-start gap-3 border-b-2 border-transparent bg-secondary p-4 text-left transition-colors duration-300",
                        isActive && "border-b-chart-3"
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-md font-semibold transition-colors duration-300",
                          isActive
                            ? "bg-chart-3/10 text-chart-3"
                            : "bg-secondary text-muted-foreground"
                        )}
                      >
                        {l.icon}
                      </span>
                      <div>
                        <p
                          className={cn(
                            "font-mono text-[14px] tracking-wide uppercase transition-colors duration-300",
                            isActive ? "text-chart-3" : "text-muted-foreground"
                          )}
                        >
                          {l.title}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-foreground">
                          {l.subtitle}
                        </p>
                      </div>
                    </button>

                    {!isLast && (
                      <span className="absolute left-[35.5px] h-3 w-0.5 bg-chart-3/50" />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Inspector, real tabs */}
            <div className="rounded-xl border border-border bg-secondary">
              <div className="flex border-b border-border bg-background">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleTabChange(tab)}
                    className={cn(
                      "cursor-pointer px-6 py-4 font-mono text-xs font-semibold tracking-wide uppercase transition-colors duration-300",
                      activeTab === tab
                        ? "border-b-2 border-chart-3 bg-secondary text-chart-3"
                        : "text-muted-foreground"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeLayer}-${activeTab}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6"
                >
                  {activeTab === "architecture" && (
                    <>
                      <p className="font-mono text-[14px] tracking-wide text-chart-3 uppercase">
                        {layer.detail.badge}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-foreground">
                        {layer.detail.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {layer.detail.description}
                      </p>
                      <div className="mt-5 rounded-xl border border-border border-chart-3/40 bg-chart-3/5 p-4">
                        <p className="font-mono text-[14px] tracking-wide text-chart-3 uppercase">
                          Platform Function
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground">
                          {layer.detail.platformFunction}
                        </p>
                      </div>
                    </>
                  )}

                  {activeTab === "code" && (
                    <pre className="overflow-x-auto rounded-xl bg-foreground p-6 font-mono text-[13px] leading-relaxed text-secondary/90">
                      <code>{layer.codeSnippet}</code>
                    </pre>
                  )}

                  {activeTab === "simulate" && (
                    <div className="flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        {layer.simulateTitle && (
                          <h3 className="text-xl font-bold text-foreground">
                            {layer.simulateTitle}
                          </h3>
                        )}
                        {layer.simulateLogs && (
                          <Button
                            type="button"
                            onClick={startSimulation}
                            disabled={isSimulating}
                            className={cn(
                              "flex items-center gap-2 px-4 h-9! cursor-pointer rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm",
                              isSimulating
                                ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                                : "bg-primary hover:bg-primary/90 text-secondary active:scale-[0.98]"
                            )}
                          >
                            <Play className="size-4 shrink-0 fill-current" />
                            {layer.simAction ?? getButtonLabel(layer.subtitle)}
                          </Button>
                        )}
                      </div>

                      {layer.simulateLogs ? (
                        <div className="rounded-xl bg-foreground p-6 text-left font-mono text-[13px] leading-loose min-h-55 border border-border/10 flex flex-col justify-start relative overflow-hidden">
                          {visibleLogsCount === 0 && !isSimulating && (
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-mono text-sm pointer-events-none select-none">
                              Click the button to start simulation
                            </div>
                          )}
                          {layer.simulateLogs.slice(0, visibleLogsCount).map((log, li) => (
                            <div key={li} className="flex items-start gap-3">
                              <span className="mt-1 shrink-0 text-chart-3 font-semibold">
                                {">"}
                              </span>
                              <p
                                className={cn(
                                  "wrap-break-word whitespace-pre-wrap",
                                  log.tone === "success" && "text-emerald-400 font-semibold",
                                  log.tone === "muted" && "text-muted-foreground/40",
                                  (!log.tone || log.tone === "default") && "text-sky-400"
                                )}
                              >
                                {log.text}
                              </p>
                            </div>
                          ))}

                          {isSimulating && visibleLogsCount < layer.simulateLogs.length && (
                            <div className="flex items-start gap-3 mt-1">
                              <span className="shrink-0 text-chart-3 mt-1 animate-pulse">_</span>
                              <p className="text-muted-foreground/60 animate-pulse">processing...</p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {layer.simulateDescription}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
