import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperWhoIsThisForPage() {
  return (
    <div>
      <LayoutTitle title="Who Is This For" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Abstract",
          href: "/developers/whitepaper/abstract",
        }}
        next={{ title: "The Problem", href: "/developers/whitepaper/problem" }}
      />
    </div>
  )
}

const content = `
  <p data-aos="fade-up" class="leading-relaxed mb-8 text-foreground">
    Cerulea serves organisations and builders at the infrastructure layer of blockchain, not at the application layer that runs on top of it.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
    <div data-aos="fade-up" class="rounded-lg border p-5 border-border bg-card">
      <h3 class="font-semibold mb-2 text-sidebar-primary">Enterprise Teams</h3>
      <p class="text-sm leading-relaxed text-muted-foreground">
        Organisations in finance, logistics, healthcare, or government that need a permissioned blockchain environment with compliance controls, data sovereignty, and internal governance authority.
      </p>
    </div>

    <div data-aos="fade-up" data-aos-delay="100" class="rounded-lg border p-5 border-border bg-card">
      <h3 class="font-semibold mb-2 text-sidebar-primary">Platform Builders</h3>
      <p class="text-sm leading-relaxed text-muted-foreground">
        Teams building ecosystem infrastructure, shared network services, or multi-party coordination systems that require a governed public blockchain layer.
      </p>
    </div>

    <div data-aos="fade-up" data-aos-delay="200" class="rounded-lg border p-5 border-border bg-card">
      <h3 class="font-semibold mb-2 text-sidebar-primary">Technical Architects</h3>
      <p class="text-sm leading-relaxed text-muted-foreground">
        Engineers and architects responsible for selecting and evaluating blockchain infrastructure stacks. Cerulea replaces custom build with structured configuration.
      </p>
    </div>

    <div data-aos="fade-up" data-aos-delay="300" class="rounded-lg border p-5 border-border bg-card">
      <h3 class="font-semibold mb-2 text-sidebar-primary">Founders & Product Teams</h3>
      <p class="text-sm leading-relaxed text-muted-foreground">
        Builders who need blockchain infrastructure without assembling a specialised engineering team. Cerulea removes the engineering dependency without removing architectural depth.
      </p>
    </div>
  </div>

  <div data-aos="fade-up" class="rounded-lg border-l-4 border-sidebar-primary bg-sidebar-primary/5 px-5 py-4 text-sm leading-relaxed text-foreground">
    Cerulea is purpose-built for blockchain infrastructure, not a smart contract builder, token launchpad, DeFi application platform, or general SaaS host.
  </div>
`
