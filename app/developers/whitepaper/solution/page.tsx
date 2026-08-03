import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"
import BuildLifecycleDiagram from "../componets/BuildLifecycleDiagram"

export default function WhitepaperTheCeruleaSolutionPage() {
  return (
    <div>
      <LayoutTitle title="The Cerulea Solution" des="Whitepaper" />
      <HtmlRenderer html={content1} />
      <BuildLifecycleDiagram />
      <HtmlRenderer html={content2} />
      <NavigationButtons
        previous={{
          title: "The Problem",
          href: "/developers/whitepaper/problem",
        }}
        next={{
          title: "Core Philosophy",
          href: "/developers/whitepaper/philosophy",
        }}
      />
    </div>
  )
}

const content1 = `
  <section data-aos="fade-up" id="solution">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      The Solution
    </h2>

    <p class="leading-relaxed mb-6 text-foreground text-justify">
      Cerulea replaces the fragmented blockchain engineering process with a unified, no-code configuration framework. Architecture becomes structured. Infrastructure becomes intentional. Governance becomes explicit. Deployment becomes atomic.
    </p>
    <div class="my-10"></div>
  </section>
`

const content2 = `
  <section data-aos="fade-up" class="mb-14">
    <div class="text-center text-xs text-muted-foreground leading-relaxed mb-10 space-y-1">
      <p>Every stage is handled inside Cerulea Studio. No external tooling required at any point.</p>
      <p>Every post-deployment change passes through on-chain governance. No administrative bypasses.</p>
    </div>
    <div class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        What Cerulea Deploys
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        When a deployment is triggered, Cerulea generates and provisions:
      </p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          A functioning blockchain network (public or private)
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Runtime configuration and genesis parameters
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Validator initialization and governance logic
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Smart contract execution capability
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          API and RPC access layers
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Monitoring and observability infrastructure
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Operational dashboard and explorer surfaces
        </li>
      </ul>
    </div>
  </section>
`
