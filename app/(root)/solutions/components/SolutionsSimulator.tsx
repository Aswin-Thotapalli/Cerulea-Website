"use client"

import { useState } from "react"
import { SimulatorData } from "@/types/industry"
import { FormattedText } from "@/components/FormattedText"

interface SolutionsSimulatorProps {
  title: string
  description: string
  sim: SimulatorData
}

function parseCostString(costStr: string): number {
  const cleaned = costStr.replace(/[$,]/g, "").trim()
  if (cleaned.endsWith("M")) {
    return parseFloat(cleaned.slice(0, -1)) * 1_000_000
  }
  if (cleaned.endsWith("k") || cleaned.endsWith("K")) {
    return parseFloat(cleaned.slice(0, -1)) * 1_000
  }
  return parseFloat(cleaned)
}

function formatCost(value: number, originalStr: string): string {
  if (originalStr.includes("M")) {
    const millions = value / 1_000_000
    return `$${millions.toFixed(1)}M`
  }
  if (originalStr.includes("k") || originalStr.includes("K")) {
    const thousands = value / 1_000
    return `$${thousands.toFixed(0)}k`
  }
  return `$${Math.round(value).toLocaleString()}`
}

export default function SolutionsSimulator({
  title,
  description,
  sim,
}: SolutionsSimulatorProps) {
  const [txCount, setTxCount] = useState<number>(sim.defaultValue)

  const legacyCostDefault = parseCostString(sim.legacyCostValue)
  const ceruleaCostDefault = parseCostString(sim.ceruleaCostValue)

  const legacyCostPerTx = legacyCostDefault / (sim.defaultValue * 12)
  const ceruleaCostPerTx = ceruleaCostDefault / (sim.defaultValue * 12)

  // Dynamic calculations based on slider transaction count
  const currentLegacyCost = txCount * 12 * legacyCostPerTx
  const currentCeruleaCost = txCount * 12 * ceruleaCostPerTx
  const currentTotalSaved = currentLegacyCost - currentCeruleaCost

  // Format final strings matching the input patterns
  const formattedLegacyCost = formatCost(currentLegacyCost, sim.legacyCostValue)
  const formattedCeruleaCost = formatCost(
    currentCeruleaCost,
    sim.ceruleaCostValue
  )
  const formattedTotalSaved = formatCost(
    currentTotalSaved,
    sim.totalSavedValue || sim.legacyCostValue
  )

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="600"
      className="animate-fade-in mt-10 bg-card pt-10"
    >
      <div>
        {/* Title & Subtitle */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        {/* Outer clean card container */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8">
          <div className="relative z-10">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Side: Slider and Count */}
              <div className="flex flex-col justify-center lg:col-span-7">
                <h3 className="text-xl leading-snug font-bold text-foreground md:text-2xl">
                  {sim.label}
                </h3>

                <div className="mt-6 mb-10 flex items-baseline gap-2">
                  <span className="text-6xl font-extrabold tracking-tight text-chart-3 md:text-7xl">
                    {txCount.toLocaleString()}
                  </span>
                  <span className="text-xl font-bold text-muted-foreground/40 uppercase md:text-2xl">
                    {sim.unit}
                  </span>
                </div>

                <div className="relative w-full">
                  <input
                    type="range"
                    min={sim.min}
                    max={sim.max}
                    value={txCount}
                    onChange={(e) => setTxCount(Number(e.target.value))}
                    className="h-2 w-full appearance-none rounded-full bg-chart-3/30 outline-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-chart-3 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[5px] [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:bg-chart-3 [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_hsl(var(--chart-3))]"
                  />

                  {/* Min & Max Labels */}
                  <div className="mt-4 flex justify-between font-mono text-[10px] font-bold tracking-wider text-muted-foreground/60">
                    <span>{sim.min.toLocaleString()}</span>
                    <span>{sim.max.toLocaleString()}+</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Calculation Cards */}
              <div className="flex flex-col gap-4 lg:col-span-5">
                {/* Card 1: Estimated Legacy Cost */}
                <div className="flex items-center justify-between rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
                  <div>
                    <p className="font-mono text-[10px] font-bold tracking-widest text-destructive uppercase">
                      Estimated Legacy Cost
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {sim.legacyCostLabel}
                    </p>
                  </div>
                  <p className="text-2xl font-black text-foreground md:text-3xl">
                    {formattedLegacyCost}
                  </p>
                </div>

                {/* Card 2: Cerulea Execution Cost */}
                <div className="flex items-center justify-between rounded-2xl border-2 border-chart-3 bg-background p-5 shadow-lg shadow-chart-3/5">
                  <div>
                    <p className="font-mono text-[10px] font-bold tracking-widest text-chart-3 uppercase">
                      Cerulea Execution Cost
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {sim.ceruleaCostLabel}
                    </p>
                  </div>
                  <p className="text-2xl font-black text-chart-3 md:text-3xl">
                    {formattedCeruleaCost}
                  </p>
                </div>

                {/* Card 3: Total Saved */}
                <div className="rounded-2xl bg-foreground p-6 text-secondary shadow-xl">
                  <p className="font-mono text-[10px] font-bold tracking-widest text-secondary/70 uppercase">
                    {sim.totalSavedLabel}
                  </p>
                  <p className="mt-3 text-3xl font-extrabold tracking-tight text-secondary md:text-4xl">
                    {formattedTotalSaved}
                  </p>
                </div>
              </div>
            </div>

            {/* Methodology Box */}
            <div className="mt-12 rounded-2xl border border-border bg-secondary p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono font-bold text-chart-3">{">_"}</span>
                <span className="font-mono text-[10px] font-bold tracking-widest text-foreground uppercase">
                  Methodology
                </span>
              </div>
              <p className="animate-fade-in text-xs leading-relaxed text-muted-foreground md:text-sm">
                <FormattedText text={sim.methodology} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
