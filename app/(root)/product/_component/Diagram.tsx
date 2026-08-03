import { cn } from "@/lib/utils"
import { Visual } from "@/types/product-details"
import { ICON_MAP } from "./constants"
import { VisualFrame } from "./VisualFrame"

export function Diagram({ v }: { v: Extract<Visual, { type: "diagram" }> }) {
  const isFramework = v.title || v.nodes.some((n) => n.description)

  if (isFramework) {
    return (
      <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-card">
        {v.title && (
          <div className="bg-foreground px-6 py-4">
            <span className="font-semibold tracking-tight text-card">
              {v.title}
            </span>
          </div>
        )}

        <div className="space-y-6 p-6">
          {v.nodes.map((node, i) => {
            const Icon = node.icon ? ICON_MAP[node.icon] : undefined
            return (
              <div key={i}>
                <div className="flex items-start gap-4">
                  {Icon && (
                    <div
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-xl",
                        node.accent
                          ? "bg-chart-3/10 text-chart-3"
                          : "bg-chart-2/10 text-chart-2"
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {node.label}
                    </p>
                    {node.description && (
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {node.description}
                      </p>
                    )}
                  </div>
                </div>

                {node.children && node.children.length > 0 && (
                  <div className="mt-3 ml-14 grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {node.children.map((child, ci) => (
                      <div
                        key={ci}
                        className={cn(
                          "rounded-lg border px-3 py-2 text-center",
                          child.accent
                            ? "border-chart-1/40 bg-chart-1/10 text-chart-1"
                            : "border-border bg-muted/40 text-muted-foreground"
                        )}
                      >
                        <p className="text-xs font-bold text-foreground">
                          {child.label}
                        </p>
                        {child.sub && (
                          <p
                            className={cn(
                              "mt-0.5 text-[10px] font-semibold uppercase",
                              child.accent
                                ? "text-chart-1"
                                : "text-muted-foreground"
                            )}
                          >
                            {child.sub}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <VisualFrame>
      <div className="flex w-full flex-col items-center gap-3">
        {v.nodes.map((node, i) => (
          <div key={i} className="flex w-full flex-col items-center gap-3">
            <div
              className={cn(
                "w-full rounded-lg border px-4 py-3 text-center",
                node.accent
                  ? "border-transparent bg-foreground text-card"
                  : "border-border bg-accent text-foreground"
              )}
            >
              <p className="text-[13px] font-medium">{node.label}</p>
              {node.sub && (
                <p className="mt-0.5 text-[11px] opacity-70">{node.sub}</p>
              )}
            </div>
            {i < v.nodes.length - 1 && <span className="h-4 w-px bg-border" />}
          </div>
        ))}
      </div>
    </VisualFrame>
  )
}
