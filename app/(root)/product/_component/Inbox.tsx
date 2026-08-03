import { MdSmartToy as Bot, MdChatBubble as MessageSquare } from "react-icons/md"
import { cn } from "@/lib/utils"
import { Visual } from "@/types/product-details"

// Renders ```fenced``` blocks as a monospace code block, **bold** as semibold
// text, and `code` as monospace inline code.
function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={`${keyPrefix}-${i}`} className="font-semibold">
          {part.slice(2, -2)}
        </span>
      )
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`${keyPrefix}-${i}`}
          className="rounded bg-chart-3/15 px-1.5 py-0.5 font-mono text-[13px] text-extra-1"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return <span key={`${keyPrefix}-${i}`}>{part}</span>
  })
}

function renderMessageWithCode(text: string) {
  const blocks = text.split(/(```[\s\S]*?```)/g)
  return blocks.map((block, bi) => {
    if (block.startsWith("```") && block.endsWith("```")) {
      return (
        <pre
          key={bi}
          className="mt-2 w-full overflow-x-auto rounded-lg bg-foreground p-3 font-mono text-[12px] leading-relaxed whitespace-pre-wrap text-card"
        >
          {block.slice(3, -3).replace(/^\n/, "")}
        </pre>
      )
    }
    return <span key={bi}>{renderInline(block, String(bi))}</span>
  })
}

export function Inbox({
  v,
  icon,
}: {
  v: Extract<Visual, { type: "inbox" }>
  icon?: React.ReactNode
}) {
  return (
    <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between bg-foreground px-5 py-4">
        <div className="flex items-center gap-3">
          {icon ?? <MessageSquare className="size-4 text-primary-foreground" />}
          <span className="text-[15px] font-semibold tracking-tight text-card">
            {v.title}
          </span>
        </div>
        {v.badge && (
          <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
            <span className="size-1.5 rounded-full bg-chart-2" />
            <span className="text-[10px] font-bold tracking-wide text-chart-2">
              {v.badge}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-4 px-5 py-6">
        {v.messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[90%] rounded-tr-2xl rounded-b-2xl px-5 py-4 text-sm leading-relaxed",
              m.from === "ai"
                ? "border border-border/25 bg-extra-1/5 text-foreground shadow-sm"
                : "bg-accent text-foreground"
            )}
          >
            {renderMessageWithCode(m.text)}
          </div>
        ))}
      </div>

      {v.inputPlaceholder && (
        <div className="mx-5 mb-5 flex items-center gap-3 rounded-xl border border-border/25 bg-secondary px-4 py-2">
          <span className="flex-1 truncate text-[13px] text-muted-foreground">
            {v.inputPlaceholder}
          </span>
          <button
            type="button"
            className="flex shrink-0 items-center justify-center rounded-lg bg-extra-1 p-2 text-card"
          >
            <Bot size={14} />
          </button>
        </div>
      )}
    </div>
  )
}
