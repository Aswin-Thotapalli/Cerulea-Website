import { cn } from "@/lib/utils"
import { Visual } from "@/types/product-details"
import { PILL_TONE } from "./constants"

export function GridPanel({ v }: { v: Extract<Visual, { type: "grid" }> }) {
  return (
    <div className="mt-18 w-full flex-1 space-y-4">
      {v.rows.map((row, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 rounded-xl border bg-secondary p-4 lg:p-6",
            row.highlighted
              ? "border-2 border-chart-3/40 shadow-sm"
              : "mx-auto w-[90%] border-border"
          )}
        >
          <div>
            <p className="ff-title line-clamp-1 font-bold text-foreground">
              {row.label}
            </p>
            {row.description && (
              <p className="mt-1 text-xs text-muted-foreground/80">
                {row.description}
              </p>
            )}
          </div>

          {row.status && (
            <span
              className={cn(
                "rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide uppercase",
                PILL_TONE[row.status]
              )}
            >
              {row.status}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
