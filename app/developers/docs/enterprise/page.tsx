import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function Enterprise() {
  return (
    <div>
      <LayoutTitle title="Enterprise Operating Model" des="2 subsections" />
      <div className="min-h-[60vh]">
        <div className="min-h-[60vh]">
          <HtmlRenderer html={content} />
        </div>
      </div>
      <NavigationButtons
        next={{
          title: "Glossary",
          href: "/developers/docs/glossary",
        }}
        previous={{
          title: "APIs & Platform Access",
          href: "/developers/docs/apis",
        }}
      />
    </div>
  )
}

const content = `
  <p class="leading-relaxed mb-4 text-foreground">The Enterprise Operating Model defines how organizations own, operate, license, and evolve Cerulea Private Chain deployments in production. Private Chain deployments are sovereign blockchain environments. The enterprise owns what is built. Cerulea operates the tooling used to build and maintain it.</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-2 text-foreground">Enterprise Controls</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>All validator nodes and hosting environment</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Governance authority and participant roles</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Infrastructure scaling, redundancy, and uptime</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Exclusive access to transaction data and chain state</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Network exposure and API access policies</span></li>
  </ul></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-2 text-foreground">Cerulea Provides</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Configuration framework and Studio environment</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Deployment orchestration and lifecycle tooling</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Upgrade coordination support</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Monitoring surfaces and observability</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Usage metering (usage data only, no payload access)</span></li>
  </ul></div>
  </div>
  <section id="validator-ownership" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Validator Ownership</h2>
  <p class="leading-relaxed mb-4 text-foreground">Validator node ownership and operation belongs entirely to the enterprise. Cerulea may deploy a limited number of nodes for licensing enforcement and usage metering only. These nodes have no access to transaction payloads, smart contract state, or enterprise data.</p>
  <div class="rounded-lg border px-5 py-4 text-sm leading-relaxed mb-6 bg-sidebar-primary/5 border-sidebar-primary/20 text-foreground">Enterprises retain the right to audit and verify the behavior of any Cerulea-operated nodes within their network at any time.</div>
  </section>
  <section id="enterprise-upgrade" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Enterprise Upgrade Model</h2>
  <p class="leading-relaxed mb-4 text-foreground">Enterprise upgrades follow a controlled process aligned with internal governance policy and organizational readiness. No upgrade can be applied by Cerulea without the deploying organization triggering the process through their own governance. Upgrade proposals include version details, expected behavior changes, and rollback options before execution is approved.</p>
  </section>
`