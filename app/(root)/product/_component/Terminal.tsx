"use client"

import { Fragment, useState } from "react"
import { ArrowDown, Check, Copy } from "lucide-react"
import { MdTerminal } from "react-icons/md"
import { cn } from "@/lib/utils"
import {
  Code,
  CodeBlock,
} from "@/components/animate-ui/components/animate/code"
import { Badge } from "@/components/ui/badge"
import { Visual } from "@/types/product-details"
import { BADGE_TONE, LOG_LINE_TONE } from "./constants"

export function Terminal({ v }: { v: Extract<Visual, { type: "terminal" }> }) {
  const [copied, setCopied] = useState(false)

  if (v.plain) {
    return (
      <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-card">
        {(v.title || v.badge) && (
          <div className="flex items-center justify-between bg-foreground px-5 py-4">
            {v.title && (
              <span className="text-[15px] font-semibold tracking-tight text-card">
                {v.title}
              </span>
            )}
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
        <div className="space-y-2.5 p-5 font-mono text-[13px]">
          {v.lines.map((line, i) => (
            <p key={i} className={LOG_LINE_TONE[line.tone ?? "default"]}>
              {line.text}
            </p>
          ))}
        </div>
      </div>
    )
  }

  if (v.flow) {
    return (
      <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-card">
        {v.title && (
          <div className="bg-foreground px-6 py-4">
            <span className="text-[13px] font-bold tracking-wide text-card uppercase">
              {v.title}
            </span>
          </div>
        )}
        <div className="space-y-3 p-6">
          {v.flow.map((step, i) => (
            <Fragment key={i}>
              <div
                className={cn(
                  "rounded-xl border p-4",
                  step.tone === "success"
                    ? "border-chart-2/30 bg-chart-2/10"
                    : "border-border/60 bg-muted/40"
                )}
              >
                <p
                  className={cn(
                    "text-[11px] font-bold tracking-wide uppercase",
                    step.tone === "success"
                      ? "text-chart-2"
                      : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </p>
                <p className="mt-1 font-mono text-xs text-foreground">
                  {step.code}
                </p>
              </div>
              {i < v.flow!.length - 1 && (
                <ArrowDown className="mx-auto size-4 text-chart-2" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    )
  }

  const codeString = v.lines.map((line) => line.text).join("\n")

  const lineHeightPx = 26
  const estimatedWrappedLines = v.lines.reduce(
    (acc, line) => acc + Math.max(1, Math.ceil(line.text.length / 45)),
    0
  )
  const bodyHeight = estimatedWrappedLines * lineHeightPx + 80

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-card">
      {/* Editor-style title bar: mac dots + a file tab */}
      <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/40 px-3 py-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-chart-1/70" />
            <span className="h-3 w-3 rounded-full bg-chart-2/70" />
          </div>
          {v.title && (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-background px-2.5 py-1 font-mono text-[11px] font-medium text-foreground shadow-sm ring-1 ring-border">
              <MdTerminal className="size-3.5 text-primary" />
              {v.title}
            </span>
          )}
        </div>

        <div>
          {v.badge ? (
            <Badge> {v.badge.label}</Badge>
          ) : (
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy code"
              className="flex items-center gap-1 rounded-md px-1.5 py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              {copied ? (
                <Check className="size-3.5" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </button>
          )}
        </div>
      </div>

      <Code
        key={codeString}
        code={codeString}
        className="w-full rounded-none bg-chart-4 p-0"
        style={{ height: bodyHeight }}
      >
        <CodeBlock
          cursor
          lang="bash"
          theme="dark"
          themes={{ light: "github-dark", dark: "github-dark" }}
          writing
          duration={3600}
          delay={100}
          className="bg-transparent px-5 py-5 font-mono text-[13px] leading-loose wrap-break-word whitespace-pre-wrap **:whitespace-pre-wrap"
        />
      </Code>
    </div>
  )
}
