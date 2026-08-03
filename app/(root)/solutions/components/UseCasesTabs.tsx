"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { getIndustryBySlug } from "@/const/industry-data"

interface UseCasesTabsProps {
  industrySlug: string
}

export default function UseCasesTabs({ industrySlug }: UseCasesTabsProps) {
  const industry = getIndustryBySlug(industrySlug)
  const useCases = industry?.useCases || []

  const [activeTab, setActiveTab] = useState(0)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  if (!useCases || useCases.length === 0) return null

  const currentUseCase = useCases[activeTab]
  const IconComponent = currentUseCase.icon ?? HelpCircle

  return (
    <div className="relative mt-12 border-t border-border/50 p-4 sm:p-8">
      {/* Subtle background diagonal stripe pattern */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #0c1e45 0, #0c1e45 2px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[340px_1fr]">
        <div className="relative flex flex-col gap-2 border-b border-border/40 pr-0 pb-6 lg:pb-0">
          <div className="scrollbar-custom flex flex-row gap-2 overflow-x-auto pb-2 lg:max-h-110 lg:flex-col lg:overflow-y-auto lg:pr-2 lg:pb-0">
            {useCases.map((uc, i) => {
              const TabIcon = uc.icon ?? HelpCircle
              const isActive = i === activeTab

              return (
                <button
                  key={`${uc.label}-${i}`}
                  ref={(el) => {
                    buttonRefs.current[i] = el
                  }}
                  type="button"
                  onClick={(e) => {
                    setActiveTab(i)
                    e.currentTarget.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "nearest",
                    })
                  }}
                  className={cn(
                    "relative flex shrink-0 cursor-pointer items-center gap-3 bg-secondary px-4 py-3 text-sm font-semibold transition-all duration-200",
                    "text-left",
                    isActive
                      ? "border-b-3 border-b-chart-3 text-chart-3 shadow-[0_4px_12px_rgba(12,30,69,0.04)]"
                      : "text-chart-4/70"
                  )}
                  style={{ minWidth: "240px" }}
                >
                  <div
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                      isActive
                        ? "bg-chart-3/10 text-chart-3"
                        : "bg-chart-4/10 text-chart-4/60"
                    )}
                  >
                    <TabIcon className="size-4" />
                  </div>
                  <span className="truncate">{uc.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Side: Tab Content Card */}
        <div className="flex min-h-87.5 flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-1 flex-col justify-between rounded-3xl border bg-secondary p-6 shadow-[0_10px_30px_-5px_rgba(12,30,69,0.02)] sm:p-8"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-chart-3/10 text-chart-3">
                    <IconComponent className="size-6" />
                  </div>
                  <h3 className="text-2xl leading-tight font-bold text-chart-4">
                    {currentUseCase.label}
                  </h3>
                </div>

                {/* Grid content: Legacy vs Cerulea */}
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Legacy Bottleneck */}
                  <div>
                    <h4 className="text-[11px] font-bold tracking-widest text-destructive uppercase">
                      The Legacy Bottleneck
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-chart-4/80">
                      {currentUseCase.legacyBottleneck}
                    </p>
                  </div>

                  {/* Cerulea Execution */}
                  <div>
                    <h4 className="text-[11px] font-bold tracking-widest text-chart-2 uppercase">
                      The Cerulea Execution
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-chart-4/80">
                      {currentUseCase.ceruleaExecution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Architectural Impact banner at the bottom */}
              <div className="mt-8 rounded-2xl border border-chart-3/20 bg-chart-3/10 p-5 sm:p-6">
                <h4 className="text-[11px] font-bold tracking-widest text-chart-3 uppercase">
                  Architectural Impact
                </h4>
                <p className="mt-2 text-base leading-relaxed font-bold text-chart-4">
                  {currentUseCase.architecturalImpact}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
