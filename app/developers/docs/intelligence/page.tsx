import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function Intelligence() {
  return (
    <div>
      <LayoutTitle title="Cerulea Intelligence" des="2 subsections" />
      <div className="min-h-[60vh]">
        <div className="min-h-[60vh]">
          <HtmlRenderer html={content} />
        </div>
      </div>
      <NavigationButtons
        next={{
          title: "Integrations",
          href: "/developers/docs/integrations",
        }}
        previous={{
          title: "Security Model",
          href: "/developers/docs/security",
        }}
      />
    </div>
  )
}


const content = `
  <p class="leading-relaxed mb-4 text-foreground">Cerulea Intelligence is an embedded guidance layer inside Cerulea Studio that provides contextual recommendations, configuration insights, and risk-aware signals while users design and deploy blockchain systems. It operates only during the configuration phase. Every action remains under explicit user and governance control.</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Configuration Guidance</h3><p class="text-sm leading-relaxed text-muted-foreground">Explains configuration implications, highlights structural gaps, and suggests governance alignment based on architecture intent.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Risk Signals</h3><p class="text-sm leading-relaxed text-muted-foreground">Surfaces missing configuration, conflicting governance settings, incomplete integrations, and infrastructure issues before deployment.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Use Case Example</h3><p class="text-sm leading-relaxed text-muted-foreground">A Private Chain user with compliance modules enabled receives governance suggestions tailored to authority-based models, integration readiness signals, and regulated infrastructure recommendations.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Intentionally Constrained</h3><p class="text-sm leading-relaxed text-muted-foreground">Cannot deploy systems, change config without user action, execute governance proposals, manage validators, or access transaction data. Advisory only.</p></div>
  </div>
`