import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperTheProblemPage() {
  return (
    <div>
      <LayoutTitle title="The Problem" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Who Is This For",
          href: "/developers/whitepaper/for-whom",
        }}
        next={{
          title: "The Cerulea Solution",
          href: "/developers/whitepaper/solution",
        }}
      />
    </div>
  )
}

const content = `
  <p data-aos="fade-up" class="leading-relaxed mb-3 text-foreground">
    Deploying a production blockchain system today means assembling and integrating a fragmented engineering stack:
  </p>

  <ul class="space-y-2 mb-8 pl-1">
    <li data-aos="fade-up" class="flex gap-2 leading-relaxed text-foreground">
      <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
      <span>Runtime engineering and genesis configuration</span>
    </li>
    <li data-aos="fade-up" data-aos-delay="50" class="flex gap-2 leading-relaxed text-foreground">
      <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
      <span>Validator setup, staking logic, and slashing conditions</span>
    </li>
    <li data-aos="fade-up" data-aos-delay="100" class="flex gap-2 leading-relaxed text-foreground">
      <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
      <span>Governance wiring for on-chain proposal and voting mechanics</span>
    </li>
    <li data-aos="fade-up" data-aos-delay="150" class="flex gap-2 leading-relaxed text-foreground">
      <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
      <span>Infrastructure provisioning across cloud or on-premise environments</span>
    </li>
    <li data-aos="fade-up" data-aos-delay="200" class="flex gap-2 leading-relaxed text-foreground">
      <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
      <span>DevOps pipelines, monitoring stacks, and alerting systems</span>
    </li>
    <li data-aos="fade-up" data-aos-delay="250" class="flex gap-2 leading-relaxed text-foreground">
      <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
      <span>Integration layers connecting to external enterprise systems</span>
    </li>
  </ul>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Each of these layers requires different expertise, different tools, and different teams. For enterprises, the problem compounds: compliance requirements, data sovereignty constraints, and internal governance mandates cannot be accommodated by off-the-shelf platforms designed for open participation.
  </p>

  <p data-aos="fade-up" class="leading-relaxed text-foreground">
    The result is slow deployment, high cost, and infrastructure that is difficult to audit, upgrade, or retire safely. Cerulea was built to solve this.
  </p>
`
