import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function DecisionFramework() {
  return (
    <div>
      <LayoutTitle title="Decision Frameworks" des="4 subsections" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        next={{
          title: "Cerulea Studio",
          href: "/developers/docs/cerulea-studio",
        }}
        previous={{
          title: "Foundation",
          href: "/developers/docs/foundation",
        }}
      />
    </div>
  )
}

const content = `
  <p class="leading-relaxed mb-4 text-foreground">Use this section before opening Cerulea Studio. The decisions made here determine architecture, governance model, infrastructure ownership, and cost structure. Getting them wrong at the start means rebuilding from scratch.</p>
  <section id="architecture-choice" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>1. Architecture: Public L1 or Private Chain?</h2>
  <p class="leading-relaxed mb-4 text-foreground">This is an operational decision, not a technical one.</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div class="rounded-lg border p-5 border-chart-2/30 bg-chart-2/5"><div class="text-xs font-bold tracking-wide mb-3 text-chart-2">CHOOSE PUBLIC L1 IF ALL ARE TRUE</div>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>The system needs open, permissionless participation</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Governance must be community-driven and transparent</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>You do not need to control who runs validators</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Your use case is a dApp, token system, or ecosystem service</span></li>
  </ul></div>
    <div class="rounded-lg border p-5 border-chart-3/30 bg-chart-3/5"><div class="text-xs font-bold tracking-wide mb-3 text-chart-3">CHOOSE PRIVATE CHAIN IF ANY ARE TRUE</div>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Access must be permissioned</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>The organization must own and control validator infrastructure</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Compliance, audit, or regulatory requirements apply</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Governance authority must remain inside the organization</span></li>
  </ul></div>
  </div>
  <div class="rounded-lg border px-5 py-4 text-sm leading-relaxed mb-6 bg-sidebar-primary/5 border-sidebar-primary/20 text-foreground">Anchor question: Is this open ecosystem infrastructure, or controlled organizational infrastructure? See the Architecture section for architecture detail.</div>
  </section>
  <section id="governance-model" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>2. Governance Model</h2>
  <p class="leading-relaxed mb-4 text-foreground">Governance must match who owns the system. A mismatch between ownership and governance creates operational problems that cannot be patched after deployment.</p>
  <div class="overflow-x-auto mb-6"><table class="w-full text-sm border-collapse"><thead><tr><th class="bg-foreground text-background px-4 py-3 text-left font-semibold">Model</th><th class="bg-foreground text-background px-4 py-3 text-left font-semibold">Recommended for</th><th class="bg-foreground text-background px-4 py-3 text-left font-semibold">Key characteristic</th></tr></thead><tbody><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Token-weighted</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Public L1</td><td class="px-4 py-3 border-b border-border text-muted-foreground">External, independent participants</td></tr><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Authority-based</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Private Chain</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Change approval stays inside the organization</td></tr><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Hybrid domains</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Mixed deployments</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Internal decisions stay internal; public rules governed openly</td></tr></tbody></table></div>
  </section>
  <section id="cost-control" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>3. Cost vs Control</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-2 text-foreground">Public L1</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Lower infrastructure cost</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Higher coordination overhead</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Community alignment required for governance decisions</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>No validator infrastructure to own or maintain</span></li>
  </ul></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-2 text-foreground">Private Chain</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Higher infrastructure responsibility</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Full operational control</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Upgrades happen on your own schedule</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>SLA responsibility belongs entirely to the enterprise</span></li>
  </ul></div>
  </div>
  <div class="rounded-lg border px-5 py-4 text-sm leading-relaxed mb-6 bg-sidebar-primary/5 border-sidebar-primary/20 text-foreground">Neither model is cheaper by default. The right choice depends on what your organization is equipped to own and operate.</div>
  </section>
  <section id="security-posture" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>4. Security Posture</h2>
  <ul class="space-y-2 mb-6 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Public L1: design for adversarial conditions. Unknown validators, public visibility, manipulation-resistant governance.</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Private Chain: design for internal accountability. Identity controls, audit logging, least-privilege access, compliance enforcement.</span></li>
  </ul>
  </section>
`
