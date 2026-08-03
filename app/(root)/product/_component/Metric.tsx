import { MdSwapHoriz as ArrowLeftRight } from "react-icons/md"
import { cn } from "@/lib/utils"
import { Visual } from "@/types/product-details"
import { LOG_LINE_TONE, SUFFIX_TONE } from "./constants"

export function Metric({ v }: { v: Extract<Visual, { type: "metric" }> }) {
  if (v.route) {
    return (
      <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-card">
        {(v.title || v.badge) && (
          <div className="flex items-center justify-between bg-foreground px-6 py-5">
            {v.title && (
              <span className="text-lg font-bold tracking-tight text-card">
                {v.title}
              </span>
            )}
            {v.badge && (
              <div className="flex items-center gap-1.5 rounded-full bg-chart-2/15 px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-chart-2" />
                <span className="text-[11px] font-bold tracking-wide text-chart-2 uppercase">
                  {v.badge}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="space-y-6 p-6">
          <div className="flex flex-col lg:flex-row w-full items-center gap-4">
            <div className="w-full lg:flex-1 rounded-xl border border-chart-3/30 bg-chart-3/5 p-4 text-center">
              <p className="text-[11px] font-bold tracking-wide text-chart-3 uppercase">
                {v.route.originLabel ?? "Origin"}
              </p>
              <p className="mt-1 text-base font-bold text-foreground">
                {v.route.origin}
              </p>
            </div>

            <ArrowLeftRight className="size-5 shrink-0 text-muted-foreground rotate-90 lg:rotate-0" />

            <div className="w-full lg:flex-1 rounded-xl border border-chart-5/30 bg-chart-5/5 p-4 text-center">
              <p className="text-[11px] font-bold tracking-wide text-chart-5 uppercase">
                {v.route.destinationLabel ?? "Destination"}
              </p>
              <p className="mt-1 text-base font-bold text-foreground">
                {v.route.destination}
              </p>
            </div>
          </div>

          {v.lines && (
            <div className="space-y-2.5 rounded-xl border border-border/60 bg-card p-5 font-mono text-[13px]">
              {v.lines.map((line, i) => (
                <p key={i} className={LOG_LINE_TONE[line.tone ?? "default"]}>
                  {line.text}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  if (v.metrics) {
    const smallMetrics = v.metrics.filter((m) => !m.highlighted)
    const highlightedMetrics = v.metrics.filter((m) => m.highlighted)

    return (
      <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-card">
        {(v.title || v.badge) && (
          <div className="flex items-center justify-between bg-foreground px-6 py-4">
            {v.title && (
              <span className="font-semibold tracking-tight text-card">
                {v.title}
              </span>
            )}
            {v.badge && (
              <div className="flex items-center gap-1.5 rounded-full bg-chart-2/15 px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-chart-2" />
                <span className="text-[11px] font-bold tracking-wide text-chart-2 uppercase">
                  {v.badge}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="space-y-4 p-5">
          {smallMetrics.length > 0 && (
            <div
              className={cn(
                "grid gap-4",
                smallMetrics.length === 2 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
              )}
            >
              {smallMetrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border/60 bg-card p-4"
                >
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {m.label}
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-medium tracking-tight text-foreground">
                      {m.value}
                    </span>
                    {m.suffix && (
                      <span
                        className={cn(
                          "font-mono text-xs font-semibold",
                          m.suffixColor
                            ? SUFFIX_TONE[m.suffixColor]
                            : "text-chart-2"
                        )}
                      >
                        {m.suffix}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {highlightedMetrics.map((m, i) => (
            <div
              key={i}
              className="rounded-xl border border-chart-3/30 bg-chart-3/10 p-5"
            >
              <p className="text-xs font-bold tracking-wide text-chart-3 uppercase">
                {m.label}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold tracking-tight text-foreground">
                  {m.value}
                </span>
                {m.suffix && (
                  <span className="font-mono text-sm font-semibold text-chart-3">
                    {m.suffix}
                  </span>
                )}
              </div>
            </div>
          ))}

          {v.lines && (
            <div className="space-y-2.5 rounded-xl border border-border/60 bg-card p-5 font-mono text-[13px]">
              {v.lines.map((line, i) => (
                <p key={i} className={LOG_LINE_TONE[line.tone ?? "default"]}>
                  {line.text}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-card">
      {(v.title || v.badge) && (
        <div className="flex items-center justify-between bg-foreground px-6 py-4">
          {v.title && (
            <span className="font-semibold tracking-tight text-card">
              {v.title}
            </span>
          )}
          {v.badge && (
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-chart-2" />
              <span className="font-mono text-[11px] font-semibold tracking-wide text-chart-2 uppercase">
                {v.badge}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="space-y-4 p-5">
        <div className="rounded-xl border border-border/60 bg-card p-4">
          <p className="ff-title text-xs font-semibold text-muted-foreground uppercase">
            {v.label}
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display ff-subtitle text-3xl font-medium tracking-tight text-foreground">
              {v.value}
            </span>
            {v.delta && (
              <span
                className={cn(
                  "font-mono text-[12px] font-medium",
                  v.delta.positive ? "text-chart-2" : "text-destructive"
                )}
              >
                {v.delta.value}
              </span>
            )}
          </div>
        </div>

        {v.secondary && (
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              {v.secondary.label}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold tracking-tight text-foreground">
                {v.secondary.value}
              </span>
              {v.secondary.suffix && (
                <span className="font-mono text-[12px] font-semibold text-chart-2">
                  {v.secondary.suffix}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
