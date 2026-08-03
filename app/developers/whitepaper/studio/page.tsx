import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperCeruleaStudioPage() {
  return (
    <div>
      <LayoutTitle title="Cerulea Studio" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Dynamic Consensus Framework",
          href: "/developers/whitepaper/dcf",
        }}
        next={{
          title: "Governance",
          href: "/developers/whitepaper/governance",
        }}
      />
    </div>
  )
}

const content = `
  <section data-aos="fade-up" id="studio" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Cerulea Studio
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground text-justify">
      Cerulea Studio is the core environment through which all blockchain systems are created, configured, and deployed. It is not a companion interface. It is the only way to build on Cerulea.
    </p>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Architecture Selection
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        The first decision inside Studio defines the architectural topology, determining validator structure, governance mechanics, infrastructure ownership, compliance posture, and operational control boundaries.
      </p>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Templates and Module Presets
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Templates are structured starting points that accelerate configuration without restricting flexibility. Every element can be adjusted, extended, or replaced. Templates reduce friction without reducing control.
      </p>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Module Configuration Framework
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Infrastructure Modules govern foundational mechanics: consensus, validator management, upgrade orchestration, and governance hooks. Application Modules extend the system with token systems, identity frameworks, payment logic, and compliance enforcement.
      </p>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Workspace and Project Model
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Workspaces represent organisational boundaries. Projects within workspaces represent individual blockchain systems, containing all configuration including architecture selection, module settings, governance setup, deployment history, and operational state.
      </p>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Deployment Engine
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        When triggered, Cerulea provisions the complete operational stack in a single atomic activation: runtime, validator structures, governance hooks, monitoring surfaces, and operational interfaces. There is no partial deployment state.
      </p>
    </div>
  </section>
`
