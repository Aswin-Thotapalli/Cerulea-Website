import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function APIs() {
  return (
    <div>
      <LayoutTitle title="APIs & Platform Access" des="2 subsections" />
      <div className="min-h-[60vh]">
        <div className="min-h-[60vh]">
          <HtmlRenderer html={content} />
        </div>
      </div>
      <NavigationButtons
        next={{
          title: "Enterprise Operating Model",
          href: "/developers/docs/enterprise",
        }}
        previous={{
          title: "Integrations",
          href: "/developers/docs/integrations",
        }}
      />
    </div>
  )
}


const content = `
  <p class="leading-relaxed mb-4 text-foreground">Cerulea exposes controlled platform interfaces so deployed systems can be used, integrated, and operated in real environments without compromising runtime determinism or governance integrity.</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">REST APIs</h3><p class="text-sm leading-relaxed text-muted-foreground">Orchestration and operational layer interfaces. Support deployment lifecycle, monitoring, governance visibility, and enterprise automation. Do not bypass consensus.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">RPC Endpoints</h3><p class="text-sm leading-relaxed text-muted-foreground">Primary interaction surface for submitting transactions, querying state, and observing network behavior. Public L1 is open; Private Chain access is enterprise-controlled.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Webhooks</h3><p class="text-sm leading-relaxed text-muted-foreground">Event-driven notifications for governance actions, upgrade execution, validator changes, and deployment lifecycle transitions. Operate outside consensus execution.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">No SDK Required</h3><p class="text-sm leading-relaxed text-muted-foreground">Cerulea is fully no-code. Build with Studio. Integrate with standard RPC, REST, and webhook surfaces. No SDK required at any stage.</p></div>
  </div>
  <div class="rounded-lg border px-5 py-4 text-sm leading-relaxed mb-6 bg-sidebar-primary/5 border-sidebar-primary/20 text-foreground">Cerulea's interface philosophy: build with Studio, integrate with standard surfaces.</div>
`