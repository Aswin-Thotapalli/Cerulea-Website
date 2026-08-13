"use client"

import React, { useState } from "react"

export type FlowStage = {
  step: string
  label: string
  actor: string
}

export type Flow = {
  id: string
  label: string
  note: string
  stages: FlowStage[]
}

type Accent = "emerald" | "blue"

const ACCENT: Record<
  Accent,
  { text: string; bar: string; activeBtn: string; ring: string }
> = {
  emerald: {
    text: "text-chart-2",
    bar: "bg-chart-2",
    activeBtn: "bg-chart-2 text-background border-chart-2",
    ring: "border-chart-2/25 bg-chart-2/5",
  },
  blue: {
    text: "text-chart-3",
    bar: "bg-chart-3",
    activeBtn: "bg-chart-3 text-background border-chart-3",
    ring: "border-chart-3/25 bg-chart-3/5",
  },
}

export default function ChainFlowTabs({
  flows,
  accent = "emerald",
}: {
  flows: Flow[]
  accent?: Accent
}) {
  const [active, setActive] = useState(flows[0]?.id)
  const current = flows.find((f) => f.id === active) ?? flows[0]
  const a = ACCENT[accent]

  return (
    <div className="mt-12">
      {/* Toggle */}
      <div className="flex flex-col items-center gap-4">
        <div className="inline-flex rounded-full border border-border bg-card p-1">
          {flows.map((f) => {
            const isActive = f.id === current.id
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? a.activeBtn
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
                <span
                  className={`ml-2 font-mono text-xs ${
                    isActive ? "text-background/80" : "text-muted-foreground/70"
                  }`}
                >
                  {f.stages.length}
                </span>
              </button>
            )
          })}
        </div>
        <p
          style={{ textAlign: "center" }}
          className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground"
        >
          {current.note}
        </p>
      </div>

      {/* Stage grid */}
      <div
        key={current.id}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {current.stages.map((stage) => (
          <div
            key={stage.step}
            className="relative overflow-hidden rounded-xl border border-border bg-card p-6"
          >
            <span className={`absolute inset-x-0 top-0 h-0.5 ${a.bar}`} />
            <p
              className={`font-mono text-[11px] font-bold tracking-widest uppercase ${a.text}`}
            >
              Stage {stage.step}
            </p>
            <h3 className="mt-2 text-base font-semibold text-foreground">
              {stage.label}
            </h3>
            <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              {stage.actor}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
