import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function BuildLifecycle() {
  return (
    <div>
      <LayoutTitle title="Build Lifecycle" des="2 subsections" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        next={{
          title: "Architecture",
          href: "/developers/docs/architecture",
        }}
        previous={{
          title: "Cerulea Studio",
          href: "/developers/docs/cerulea-studio",
        }}
      />
    </div>
  )
}

const content = `
  <p class="leading-relaxed mb-4 text-foreground">Every system built on Cerulea follows a defined lifecycle from creation through retirement. Each stage has clear boundaries, responsibilities, and operational implications.</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Create</h3><p class="text-sm leading-relaxed text-muted-foreground">Intent becomes structured design. Scope, ownership boundaries, access controls, and architectural model are established. No resources are consumed.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Configure</h3><p class="text-sm leading-relaxed text-muted-foreground">The system blueprint is built in full. All configuration is versioned and can be reverted to stable baselines before deployment.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Deploy</h3><p class="text-sm leading-relaxed text-muted-foreground">Infrastructure, runtime, and governance layers are activated in a single atomic operation. The environment becomes live.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Operate</h3><p class="text-sm leading-relaxed text-muted-foreground">The blockchain environment is live. Validators are active, governance is enabled, and integrations are functioning.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Govern</h3><p class="text-sm leading-relaxed text-muted-foreground">All post-deployment changes to runtime, modules, validators, and infrastructure must pass through governance. No exceptions.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Upgrade</h3><p class="text-sm leading-relaxed text-muted-foreground">Runtime evolves through governance-approved upgrades only. Every change is deliberate, auditable, and reversible.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Expand</h3><p class="text-sm leading-relaxed text-muted-foreground">New validators, modules, integrations, or cross-chain capabilities are added. All expansion follows governance discipline.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Monitor</h3><p class="text-sm leading-relaxed text-muted-foreground">Continuous visibility into validator health, throughput, governance activity, and infrastructure across the full lifecycle.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Retire</h3><p class="text-sm leading-relaxed text-muted-foreground">A structured, governance-led decommissioning. Audit history, governance records, and configuration lineage are preserved.</p></div>
  </div>
`
