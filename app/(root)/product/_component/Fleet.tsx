import { MdChatBubble as MessageSquare } from "react-icons/md"
import { cn } from "@/lib/utils"
import { Visual } from "@/types/product-details"
import { PILL_TONE } from "./constants"

export function Fleet({
  v,
  icon,
}: {
  v: Extract<Visual, { type: "fleet" }>
  icon?: React.ReactNode
}) {
  return (
    <div className="w-full flex-1 rounded-xl border border-border bg-background p-6">
      {v.title && (
        <div className="flex items-center justify-between px-1 pb-4">
          <span className="ff-title text-xs font-bold tracking-wide text-muted-foreground uppercase">
            {v.title}
          </span>
          <span className="text-muted-foreground">•••</span>
        </div>
      )}

      <div className="space-y-3">
        {v.rows.map((row, i) => {
          return (
            <div
              key={i}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 rounded-xl border border-border/60 bg-card p-3 shadow-sm"
            >
              <div className="flex w-full sm:w-auto min-w-0 items-center gap-3">
                <div
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-lg",
                    row.status === "syncing"
                      ? "bg-chart-1/10 text-chart-1"
                      : "bg-chart-3/10 text-chart-3"
                  )}
                >
                  {icon ?? <MessageSquare className="size-4" />}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">
                    {row.label}
                  </p>
                  {row.sublabel && (
                    <p className="truncate font-mono text-[11px] text-muted-foreground">
                      {row.sublabel}
                    </p>
                  )}
                </div>
              </div>
              {row.status && (
                <span
                  className={cn(
                    "shrink-0 rounded-full border px-3 py-1 text-xs font-medium capitalize",
                    PILL_TONE[row.status]
                  )}
                >
                  {row.status}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
