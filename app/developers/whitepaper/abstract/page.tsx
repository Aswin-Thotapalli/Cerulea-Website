import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperAbstractPage() {
  return (
    <div>
      <LayoutTitle title="Abstract" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        next={{
          title: "Who Is This For",
          href: "/developers/whitepaper/for-whom",
        }}
      />
    </div>
  )
}

const content = `
  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Blockchain infrastructure has long been the domain of highly specialised engineering teams. Building a production-grade blockchain system requires coordinating runtime compilation, validator configuration, governance wiring, infrastructure provisioning, DevOps pipelines, and monitoring stacks. Each layer demands distinct expertise, separate tooling, and months of integration work.
  </p>

  <div data-aos="fade-up" class="rounded-lg border-l-4 border-sidebar-primary bg-sidebar-primary/5 px-5 py-4 text-sm leading-relaxed text-foreground mb-8">
    Cerulea exists because the barrier to deploying blockchain infrastructure has never been the idea. It has always been the execution. We built a platform to close that gap permanently.
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Cerulea is a fully no-code blockchain infrastructure platform. Organisations and developers design, deploy, and operate complete public or private blockchain systems through structured configuration alone. No code is written at any stage. Every architectural decision, validator structure, governance mechanics, infrastructure topology, compliance enforcement, upgrade policy, is expressed through configuration, not engineering.
  </p>

  <p data-aos="fade-up" class="leading-relaxed text-foreground">
    This whitepaper describes Cerulea's architecture, platform capabilities, governance framework, security model, and enterprise operating model. It is written for technical evaluators, enterprise architects, and decision-makers assessing blockchain infrastructure options.
  </p>
`
