"use client"

import { useState } from "react"
import type { CaseEntry } from "@/types/case"
import { FormattedText } from "@/components/FormattedText"

interface SimulatorSectionProps {
  title: string
  subtitle: string
  sim: CaseEntry["simulator"]
}

export default function SimulatorSection({ title, subtitle, sim }: SimulatorSectionProps) {
  // State for the slider, defaulting to the baseline rule count
  const [rules, setRules] = useState(sim.ruleCount)

  // Timeline Logic based on complexity (rules)
  const months = Math.round(6 + (rules * 0.15));
  const weeks = Math.round(2 + (rules * 0.05));


  return (
    <section 
      data-aos="fade-up"
      data-aos-duration="600"
      className="mt-20 overflow-hidden border-border bg-card pt-10"
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-10  px-6 text-center">
          <h2 className="text-3xl mx-auto  max-w-3xl font-bold leading-tight text-foreground md:text-[40px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Content Section */}
        <div className="relative border-t border-border/50 py-16">
          {/* Subtle background pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #0c1e45 0, #0c1e45 2px, transparent 0, transparent 50%)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10  px-2 lg:px-10">
            {/* Interactive Simulator Grid */}
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
              {/* Left Side: Logic Complexity & Slider */}
              <div className="lg:col-span-7">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  {sim.ruleLabel}
                </h3>
                <div className="mb-10 flex items-baseline gap-3">
                  <span className="text-7xl font-bold tracking-tighter text-chart-3/80 ">
                    {rules}
                  </span>
                  <span className="text-2xl font-bold text-muted-foreground/30">
                    Rules
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min={10}
                    max={200}
                    value={rules}
                    onChange={(e) => setRules(Number(e.target.value))}
                    className="h-2 w-full appearance-none bg-chart-3/30 rounded-full outline-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-chart-3 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[5px] [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:bg-chart-3 [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_hsl(var(--chart-3))] [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="mt-5 flex justify-between font-mono text-[10px] font-bold tracking-widest text-muted-foreground/50 uppercase">
                    <span>Simple (10)</span>
                    <span>Enterprise (200)</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Stat Boxes */}
              <div className="flex flex-col gap-5 lg:col-span-5">
                {/* Box 1: Traditional */}
                <div className="flex flex-col justify-between gap-4 rounded-4xl border-3 border-destructive/20 bg-destructive/2 p-6 sm:flex-row sm:items-center lg:p-8">
                  <div>
                    <p className="mb-1 text-[10px] font-bold tracking-widest text-destructive uppercase">
                      Traditional Deployment
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Solidity Coding & Audits
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    ~ {months} Months
                  </p>
                </div>

                {/* Box 2: Cerulea */}
                <div className="relative flex flex-col justify-between gap-4 rounded-4xl border-4 border-chart-3/50 bg-background p-6 shadow-xl shadow-chart-3/5 sm:flex-row sm:items-center lg:p-8">
                  <div className="absolute -top-3 right-6 rounded-full bg-chart-3 px-4 py-1 text-[10px] font-bold tracking-widest text-chart-3-foreground uppercase">
                    Cerulea Edge
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-bold tracking-widest text-chart-3 uppercase">
                      Visual Compilation
                    </p>
                    <p className="text-sm text-muted-foreground">
                      WASM Logical Artifacts
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-chart-3">
                    ~ {weeks} Weeks
                  </p>
                </div>
              </div>
            </div>

            {/* Methodology Box */}
            <div className="relative z-10 mt-16 rounded-2xl rounded-xl border border-border bg-secondary p-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono font-bold text-chart-3">{">_"}</span>
                <h4 className="font-mono text-[11px] font-bold tracking-widest text-foreground uppercase">
                  Technical Methodology
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
                <FormattedText text={sim.methodology} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
