import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperCorePhilosophyPage() {
  return (
    <div>
      <LayoutTitle title="Core Philosophy" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "The Solution",
          href: "/developers/whitepaper/solution",
        }}
        next={{
          title: "Architecture",
          href: "/developers/whitepaper/architecture",
        }}
      />
    </div>
  )
}

const content = `
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div data-aos="fade-up" class="rounded-lg border p-5 border-border bg-card">
      <div class="mb-3 text-lg text-sidebar-primary">&#9671;</div>
      <h3 class="font-semibold mb-1.5 text-foreground">Determinism</h3>
      <p class="text-sm leading-relaxed text-muted-foreground">
        Every system is the result of explicit configuration. No emergent deployments and no invisible defaults influencing runtime behavior.
      </p>
    </div>

    <div data-aos="fade-up" data-aos-delay="100" class="rounded-lg border p-5 border-border bg-card">
      <div class="mb-3 text-lg text-sidebar-primary">&#8644;</div>
      <h3 class="font-semibold mb-1.5 text-foreground">Separation</h3>
      <p class="text-sm leading-relaxed text-muted-foreground">
        Until deployment is triggered, nothing exists operationally. Configuration is structured, versioned, and stored, but not executed.
      </p>
    </div>

    <div data-aos="fade-up" data-aos-delay="200" class="rounded-lg border p-5 border-border bg-card">
      <div class="mb-3 text-lg text-sidebar-primary">&#8722;</div>
      <h3 class="font-semibold mb-1.5 text-foreground">Reduced Dependency</h3>
      <p class="text-sm leading-relaxed text-muted-foreground">
        Cerulea removes the requirement to express architecture through code. Complex systems can still be built through structured configuration.
      </p>
    </div>

    <div data-aos="fade-up" data-aos-delay="300" class="rounded-lg border p-5 border-border bg-card">
      <div class="mb-3 text-lg text-sidebar-primary">&#9678;</div>
      <h3 class="font-semibold mb-1.5 text-foreground">Configurable Decentralization</h3>
      <p class="text-sm leading-relaxed text-muted-foreground">
        Decentralization is an architectural decision, validator openness, governance weighting, and compliance enforcement are all configurable.
      </p>
    </div>
  </div>
`
