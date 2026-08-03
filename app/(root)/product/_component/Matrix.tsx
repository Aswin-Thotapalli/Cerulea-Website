import { cn } from "@/lib/utils"
import { Visual } from "@/types/product-details"
import { BADGE_TONE } from "./constants"

export function Matrix({ v }: { v: Extract<Visual, { type: "matrix" }> }) {
  return (
    <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-card">
      {(v.title || v.badge) && (
        <div className="flex items-center justify-between bg-foreground px-5 py-3">
          {v.title && (
            <span className="font-semibold text-card">{v.title}</span>
          )}
          {v.badge && (
            <span
              className={cn(
                "rounded-full px-3 py-1 font-mono text-[10px] font-bold ring-1 ring-inset",
                BADGE_TONE[v.badge.tone]
              )}
            >
              {v.badge.label}
            </span>
          )}
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <div className="grid grid-cols-4 gap-2 pb-2 min-w-[300px] text-[10px] font-bold tracking-wide text-muted-foreground uppercase">
          <span>Role</span>
          {v.columns.map((c) => (
            <span key={c} className="text-center">
              {c}
            </span>
          ))}
        </div>
        <div className="space-y-3">
          {v.rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-4 items-center gap-2 border-t border-border/40 pt-3 min-w-[300px]"
            >
              <span className="font-mono text-xs text-foreground">
                {row.label}
              </span>
              {row.values.map((val, i) => (
                <span key={i} className="flex justify-center">
                  <span
                    className={cn(
                      "size-2.5 rounded-full",
                      val === "allowed" ? "bg-chart-2" : "bg-destructive"
                    )}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
