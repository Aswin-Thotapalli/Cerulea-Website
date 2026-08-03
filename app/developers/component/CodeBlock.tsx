"use client"

import React, { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  label?: string
  code: string
}

export default function CodeBlock({ label = "BASH", code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      data-aos="fade-up"
      className="ff-subtitle mb-8 overflow-hidden rounded-xl border border-border bg-chart-5"
    >
      <div className="flex items-center justify-between border-b border-border/25 px-4 py-2.5">
        <span className="text-[11px] font-medium tracking-wide text-card/40">
          {label}
        </span>
        <button
          onClick={handleCopy}
          className="flex cursor-pointer items-center gap-1.5 text-xs text-card/40 transition-colors hover:text-card/50"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-5">
        <code className="font-mono text-sm text-[#93C5FD]">{code}</code>
      </pre>
    </div>
  )
}
