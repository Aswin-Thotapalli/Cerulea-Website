import {
  CheckCircle2,
  ChevronRight,
  Circle,
  Code2,
  Search,
  XCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Visual } from "@/types/product-details"
import {
  BADGE_TONE,
  ICON_MAP,
  PILL_TONE,
  STATUS_DOT,
  TEXT_TONE,
} from "./constants"

export function ListPanel({ v }: { v: Extract<Visual, { type: "list" }> }) {
  const isDark = v.theme === "dark"

  if (v.variant === "tabs") {
    return (
      <div className="w-full flex-1 rounded-xl border border-border bg-secondary p-6">
        {v.title && (
          <p className="mb-4 text-center text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
            {v.title}
          </p>
        )}
        <div className="flex items-center gap-1 rounded-full bg-accent/60 p-1.5 overflow-x-auto">
          {v.rows.map((row, i) => (
            <span
              key={i}
              className={cn(
                "line-clamp-1 flex-1 rounded-lg px-4 py-2.5 text-center text-xs font-bold transition-colors",
                row.selected
                  ? "bg-card text-chart-1 shadow-md ring-1 ring-chart-1/20"
                  : "text-muted-foreground"
              )}
            >
              {row.label}
            </span>
          ))}
        </div>
      </div>
    )
  }

  if (v.variant === "policy") {
    return (
      <div className="flex h-full w-full flex-1 items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary shadow-sm">
        <div className="w-full">
          {(v.title || v.badge) && (
            <div className="flex items-center justify-between bg-foreground p-3 font-semibold text-card">
              {v.title && <span>{v.title}</span>}
              {v.badge && (
                <span
                  className={cn(
                    "rounded-full px-3 py-1 font-mono text-[10px] font-medium ring-1 ring-inset",
                    BADGE_TONE[v.badge.tone]
                  )}
                >
                  {v.badge.label}
                </span>
              )}
            </div>
          )}
          <div className="space-y-3 p-4">
            {v.rows.map((row, i) => (
              <div key={i} className="rounded-xl bg-chart-3/5 p-4">
                {row.sectionLabel && (
                  <p className="text-[11px] font-bold tracking-wide text-fuchsia-600">
                    {row.sectionLabel}
                  </p>
                )}
                <p className="mt-1.5 font-mono text-xs font-medium text-chart-3">
                  {row.label}
                </p>
                {row.reason && (
                  <p className="mt-1 font-mono text-[11px] font-medium text-teal-600">
                    {row.reason}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (v.variant === "chips") {
    return (
      <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-foreground">
        {(v.title || v.badge) && (
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-2">
              <Code2 className="size-4 text-card" />
              <span className="text-[15px] font-semibold text-card">
                {v.title}
              </span>
            </div>
            {v.badge && (
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 font-mono text-[10px] font-bold ring-1 ring-inset",
                  BADGE_TONE[v.badge.tone]
                )}
              >
                {v.badge.label}
              </span>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 px-5 pb-4">
          {v.rows.map((row, i) => (
            <span
              key={i}
              className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-center font-mono text-xs text-destructive/70 line-through"
            >
              {row.label}
            </span>
          ))}
        </div>
        {v.caption && (
          <p className="border-t border-card/10 py-3 text-center text-[11px] font-semibold tracking-wide text-card/60 uppercase">
            {v.caption}
          </p>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "w-full flex-1 overflow-hidden rounded-xl border shadow-sm",
        isDark
          ? "border-transparent bg-foreground"
          : "border-border bg-secondary"
      )}
    >
      {(v.title || v.badge || v.subtitle) && (
        <div
          className={cn(
            "flex items-center justify-between p-3",
            !isDark && "bg-foreground font-semibold text-card"
          )}
        >
          <div>
            {v.title && (
              <span
                className={cn(
                  "font-semibold",
                  isDark ? "text-card" : "text-card"
                )}
              >
                {v.title}
              </span>
            )}
            {v.subtitle && (
              <p className="mt-0.5 text-[11px] text-card/50">{v.subtitle}</p>
            )}
          </div>
          {v.badge && (
            <span
              className={cn(
                "rounded-full px-3 py-1 font-mono text-[10px] font-medium ring-1 ring-inset",
                BADGE_TONE[v.badge.tone]
              )}
            >
              {v.badge.label}
            </span>
          )}
        </div>
      )}

      {v.searchPlaceholder && (
        <div className="mx-4 mt-4 flex items-center gap-2 rounded-lg border border-card/10 bg-card/5 px-3 py-2">
          <Search className="size-3.5 text-card/40" />
          <span className="text-xs text-card/40">{v.searchPlaceholder}</span>
        </div>
      )}

      <div className="space-y-5 p-4">
        {v.rows.map((row, i) => {
          const RowIcon = row.icon ? ICON_MAP[row.icon] : undefined
          const StatusIcon =
            row.status === "success"
              ? CheckCircle2
              : row.status === "error"
                ? XCircle
                : Circle

          return (
            <div key={i}>
              {row.sectionLabel && (
                <p
                  className={cn(
                    "mb-2 text-[11px] font-bold tracking-wide uppercase",
                    isDark ? "text-card/50" : "text-muted-foreground"
                  )}
                >
                  {row.sectionLabel}
                </p>
              )}

              {row.href ? (
                <a
                  href={row.href}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3"
                >
                  <span className="truncate font-mono text-xs text-chart-3">
                    {row.label}
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                </a>
              ) : row.highlighted ? (
                <div
                  className={cn(
                    "flex items-center justify-between gap-4 rounded-lg border px-4 py-3",
                    row.highlightTone === "success"
                      ? "border-chart-2/30 bg-chart-2/10"
                      : "border-chart-3/30 bg-chart-3/5"
                  )}
                >
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "font-mono text-sm font-bold",
                        row.highlightTone === "success"
                          ? "text-chart-2"
                          : "text-foreground"
                      )}
                    >
                      {row.label}
                    </p>
                    {row.sublabel && (
                      <p
                        className={cn(
                          "mt-0.5 truncate text-xs text-muted-foreground",
                          row.mono && "font-mono"
                        )}
                      >
                        {row.sublabel}
                      </p>
                    )}
                  </div>
                  {RowIcon && (
                    <RowIcon className="size-4 shrink-0 text-chart-3" />
                  )}
                </div>
              ) : row.muted ? (
                <div className="flex items-center justify-between gap-4 rounded-lg border border-border/40 bg-muted/30 px-4 py-3 opacity-60">
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-foreground">
                      {row.label}
                    </p>
                    {row.sublabel && (
                      <p
                        className={cn(
                          "mt-0.5 truncate text-xs text-muted-foreground",
                          row.mono && "font-mono"
                        )}
                      >
                        {row.sublabel}
                      </p>
                    )}
                  </div>
                  {RowIcon && (
                    <RowIcon className="size-4 shrink-0 text-muted-foreground" />
                  )}
                </div>
              ) : v.variant === "checklist" ? (
                <div className="flex items-start gap-3">
                  <StatusIcon
                    className={cn(
                      "mt-0.5 size-4 shrink-0",
                      row.status === "success"
                        ? "text-chart-2"
                        : row.status === "error"
                          ? "text-destructive"
                          : "text-muted-foreground/40"
                    )}
                  />
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "truncate text-xs font-semibold",
                        isDark ? "text-card" : "text-foreground"
                      )}
                    >
                      {row.label}
                    </p>
                    {row.sublabel && (
                      <p
                        className={cn(
                          "mt-0.5 text-xs",
                          isDark ? "text-card/50" : "text-muted-foreground"
                        )}
                      >
                        {row.sublabel}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-3 py-2">
                  <div className="flex items-center gap-2">
                    {RowIcon && (
                      <RowIcon className="size-4 shrink-0 text-chart-3" />
                    )}
                    {row.status && !row.value && !RowIcon && (
                      <span
                        className={cn(
                          "h-1.5 w-1.5 shrink-0 rounded-full",
                          STATUS_DOT[row.status]
                        )}
                      />
                    )}
                    <div>
                      <span
                        className={cn(
                          "text-xs font-semibold",
                          isDark ? "text-card" : "text-foreground"
                        )}
                      >
                        {row.label}
                      </span>
                      {row.sublabel && (
                        <p
                          className={cn(
                            "text-xs",
                            isDark ? "text-card/50" : "text-muted-foreground"
                          )}
                        >
                          {row.sublabel}
                        </p>
                      )}
                    </div>
                  </div>
                  {row.value &&
                    (row.valueStyle === "text" ? (
                      <span
                        className={cn(
                          "shrink-0 text-xs font-bold tracking-wide",
                          row.status
                            ? TEXT_TONE[row.status]
                            : isDark
                              ? "text-card"
                              : "text-foreground"
                        )}
                      >
                        {row.value}
                      </span>
                    ) : row.status ? (
                      <span
                        className={cn(
                          "shrink-0 border px-3 py-1 font-mono text-xs font-medium",
                          PILL_TONE[row.status]
                        )}
                      >
                        {row.value}
                      </span>
                    ) : (
                      <span
                        className={cn(
                          "shrink-0 font-mono text-xs",
                          isDark ? "text-card/60" : "text-muted-foreground"
                        )}
                      >
                        {row.value}
                      </span>
                    ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {v.note && (
        <div
          className={cn(
            "border-t px-4 py-3",
            isDark ? "border-card/10" : "border-border/60"
          )}
        >
          <p
            className={cn(
              "font-mono text-[11px]",
              v.note.tone === "amber"
                ? "text-chart-1"
                : isDark
                  ? "text-card/50"
                  : "text-muted-foreground"
            )}
          >
            {v.note.text}
          </p>
        </div>
      )}
    </div>
  )
}
