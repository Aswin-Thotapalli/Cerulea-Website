"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { LogLine } from "@/types/industry"
import { motion, AnimatePresence } from "framer-motion"

interface LifecycleStepView {
  icon: React.ReactNode
  label: string
  description: string
  logFilename: string
  logLines: LogLine[]
}

interface LifecycleProps {
  title: string
  subtitle: string
  logSystemName?: string
  steps: LifecycleStepView[]
}

export default function Lifecycle({
  title,
  subtitle,
  logSystemName,
  steps,
}: LifecycleProps) {
  const [active, setActive] = useState(0)
  const current = steps[active]

  return (
    <section 
      data-aos="fade-up"
      data-aos-duration="600"
      className="mt-10 bg-card pt-10"
    >
      <div className="text-center">
        <h2 className=" mx-auto text-3xl max-w-2xl font-bold text-foreground md:text-[40px]">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-5xl text-base text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      </div>

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

        <div className="relative z-10 grid grid-cols-1 gap-10 px-2 lg:px-10 lg:grid-cols-[2fr_3fr]">
          {/* Stepper */}
          <div className="flex w-full flex-col gap-1.5">
            {steps.map((step, i) => {
              const isActive = i === active
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full cursor-pointer flex-col gap-3 border-b-3 border-transparent bg-secondary p-5 text-left transition-colors duration-300",
                    isActive && "border-b-chart-3"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {step.icon}
                    <p className="text-sm font-semibold text-foreground">
                      {i + 1}. {step.label}
                    </p>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-2 pl-8 text-xs leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              )
            })}
          </div>

          {/* Terminal log */}
          <div className="flex h-full flex-col">
            <div className="mb-2 flex shrink-0 justify-center">
              <span className="rounded-full bg-chart-4 px-4 py-1.5 font-mono text-[10px] text-muted-foreground uppercase">
                {logSystemName}
              </span>
            </div>

            <div className="flex flex-1 flex-col bg-chart-4 p-4">
              <div className="flex shrink-0 items-center gap-2 border-b border-border/10 p-3">
                <span className="h-3 w-3 rounded-full bg-destructive" />
                <span className="h-3 w-3 rounded-full bg-chart-1" />
                <span className="h-3 w-3 rounded-full bg-chart-2" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground uppercase">
                  {current.logFilename}
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2 p-5 font-mono text-[12px] leading-loose"
                >
                  {current.logLines.map((line, li) => (
                    <div key={li} className="flex items-start gap-3">
                      <p className="font-mono text-base text-muted-foreground uppercase">
                        {line.time}
                      </p>
                      <p
                        className={cn(
                          "text-base wrap-break-word whitespace-pre-wrap",
                          line.tone === "success" &&
                          "text-chart-2 underline underline-offset-2",
                          line.tone === "muted" && "text-secondary/50",
                          line.tone === "primary" && "text-chart-3",
                          line.tone === "secondary" && "text-chart-1",
                          line.tone === "error" && "text-destructive",
                          (!line.tone || line.tone === "default") &&
                          "text-secondary/80"
                        )}
                      >
                        {line.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
