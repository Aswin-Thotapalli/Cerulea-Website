import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function Governance() {
  return (
    <div>
      <LayoutTitle title="Governance" des="3 subsections" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Architecture",
          href: "/developers/docs/architecture",
        }}
        next={{
          title: "Infrastructure & Deployment",
          href: "/developers/docs/infrastructure",
        }}
      />
    </div>
  )
}


const content = `
  <p class="leading-relaxed mb-4 text-foreground">Governance is the operational mechanism through which all post-deployment change occurs in Cerulea. Without governance, a deployed system remains static. With governance, it evolves in a controlled, auditable, and transparent way.</p>
  <section id="proposal-lifecycle" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Proposal Lifecycle</h2>
  <div class="flex flex-col gap-3 mb-6">
    <div class="rounded-lg border p-4 border-border"><span class="font-semibold text-sidebar-primary">Creation</span> <span class="text-sm text-muted-foreground">A qualifying participant submits a proposal defining the change, rationale, and proposed parameters.</span></div>
    <div class="rounded-lg border p-4 border-border"><span class="font-semibold text-sidebar-primary">Review</span> <span class="text-sm text-muted-foreground">The proposal enters a defined review window during which participants can assess the change.</span></div>
    <div class="rounded-lg border p-4 border-border"><span class="font-semibold text-sidebar-primary">Voting</span> <span class="text-sm text-muted-foreground">Participants cast votes according to the governance model of the system.</span></div>
    <div class="rounded-lg border p-4 border-border"><span class="font-semibold text-sidebar-primary">Quorum Check</span> <span class="text-sm text-muted-foreground">The system verifies that minimum participation thresholds have been met.</span></div>
    <div class="rounded-lg border p-4 border-border"><span class="font-semibold text-sidebar-primary">Execution</span> <span class="text-sm text-muted-foreground">If approved and quorum is satisfied, the proposal is automatically executed on-chain.</span></div>
    <div class="rounded-lg border p-4 border-border"><span class="font-semibold text-sidebar-primary">Logging</span> <span class="text-sm text-muted-foreground">The governance action is permanently recorded on-chain for audit and transparency.</span></div>
  </div>
  </section>
  <section id="upgrade-governance" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Upgrade Governance</h2>
  <p class="leading-relaxed mb-4 text-foreground">No runtime change, module update, or infrastructure modification can occur outside the governance framework once a system is deployed.</p>
  <div class="flex flex-col gap-3 mb-6">
    <div class="rounded-lg border p-4 border-border"><span class="font-semibold text-sidebar-primary">Rolling</span> <span class="text-sm text-muted-foreground">Changes applied incrementally across validator nodes. The network continues operating throughout the upgrade.</span></div>
    <div class="rounded-lg border p-4 border-border"><span class="font-semibold text-sidebar-primary">Canary</span> <span class="text-sm text-muted-foreground">Changes applied to a limited subset of nodes first to validate behavior under live conditions before proceeding.</span></div>
    <div class="rounded-lg border p-4 border-border"><span class="font-semibold text-sidebar-primary">Blue-Green</span> <span class="text-sm text-muted-foreground">Two parallel environments run simultaneously. Traffic is shifted at a defined point for near-zero downtime.</span></div>
  </div>
  </section>
  <section id="governance-models" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Public L1 vs Private Chain Governance</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-2 text-foreground">Public L1</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Token-weighted voting</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Proposals open to any qualifying token holder</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Governance tokens locked during voting periods</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Automated on-chain execution upon approval</span></li>
  </ul></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-2 text-foreground">Private Chain</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Authority-based, role-defined</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Multi-signature approval for high-impact decisions</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Enterprise-defined thresholds and review windows</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Compliance-aligned upgrade scheduling</span></li>
  </ul></div>
  </div>
  </section>
`