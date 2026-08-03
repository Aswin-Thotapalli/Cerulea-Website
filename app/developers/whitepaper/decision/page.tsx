import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperDecisionGuidePage() {
  return (
    <div>
      <LayoutTitle title="Decision Guide" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Enterprise Operating Model",
          href: "/developers/whitepaper/enterprise",
        }}
        next={{
          title: "Platform Summary",
          href: "/developers/whitepaper/summary",
        }}
      />
    </div>
  )
}

const content = `
  <section data-aos="fade-up" id="decision" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      The Decision Framework
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground text-justify">
      Use this section before beginning configuration. Architecture, governance, infrastructure ownership, and cost structure all follow from this initial decision.
    </p>

    <div data-aos="fade-up" class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      <div class="rounded-xl overflow-hidden border border-emerald-200">
        <div class="px-5 py-3.5 bg-emerald-600 font-serif text-[15px] text-white font-bold">
          Choose Public L1 if…
        </div>
        <div class="p-5 bg-background">
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              The system requires open, permissionless participation
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Governance must be community-driven and transparent
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              You do not need to control who runs validators
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Your use case is a dApp, token system, or ecosystem service
            </li>
          </ul>
        </div>
      </div>
      
      <div class="rounded-xl overflow-hidden border border-blue-200">
        <div class="px-5 py-3.5 bg-sidebar-primary font-serif text-[15px] text-white font-bold">
          Choose Private Chain if…
        </div>
        <div class="p-5 bg-background">
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Access must be permissioned
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              The organisation must own and control validator infrastructure
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Compliance, audit, or regulatory requirements apply
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Governance authority must remain inside the organisation
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" class="rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5 p-6 my-8 italic text-foreground leading-relaxed">
      <strong>Anchor question:</strong> Is this open ecosystem infrastructure, or controlled organisational infrastructure?
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Cost vs. Control
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Cerulea removes the engineering cost of building blockchain systems. It does not remove the operational cost of running them. Public L1 reduces infrastructure cost but increases coordination overhead. Private Chains increase infrastructure responsibility but give full operational control. Neither model is cheaper by default.
      </p>
    </div>
  </section>
`
