import { cn } from "@/lib/utils"
import { Visual } from "@/types/product-details"

type MessageSegment =
  string | { text: string; color?: "blue" | "amber" | "emerald" }

function renderSegments(text: MessageSegment[] | string) {
  if (typeof text === "string") return text
  return text.map((seg, i) =>
    typeof seg === "string" ? (
      <span key={i}>{seg}</span>
    ) : (
      <span
        key={i}
        className={cn(
          "font-semibold",
          seg.color === "blue" && "text-chart-3",
          seg.color === "amber" && "text-chart-1",
          seg.color === "emerald" && "text-chart-2"
        )}
      >
        {seg.text}
      </span>
    )
  )
}

export function Chat({ v }: { v: Extract<Visual, { type: "chat" }> }) {
  return (
    <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-secondary shadow-sm">
      <div className="bg-foreground px-5 py-4">
        <span className="text-[15px] font-semibold tracking-tight text-card">
          {v.title}
        </span>
      </div>

      <div className="space-y-3 px-4 py-5">
        {v.messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[80%] px-4 py-3 text-[13px] leading-relaxed",
              m.from === "ai"
                ? "bg-chart-5 text-card"
                : "ml-auto border bg-card text-muted-foreground"
            )}
          >
            {renderSegments(m.text)}
          </div>
        ))}
      </div>

      {v.inputPlaceholder && (
        <div className="m-3 flex items-center gap-2 border border-border bg-background px-3 py-2">
          <span className="flex-1 truncate text-[12px] text-muted-foreground">
            {v.inputPlaceholder}
          </span>
          {v.sendLabel && (
            <button
              type="button"
              className="shrink-0 rounded-xl border border-border border-chart-3/40 bg-chart-3/10 px-3 py-1.5 text-[11px] font-medium text-chart-3"
            >
              {v.sendLabel}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
