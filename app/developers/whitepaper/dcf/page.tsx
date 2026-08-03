import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"
import DCFDiagram from "../componets/DCFDiagram"

export default function WhitepaperDynamicConsensusFrameworkPage() {
  return (
    <div>
      <LayoutTitle title="Dynamic Consensus Framework" des="Whitepaper" />
      <HtmlRenderer html={content1} />
      <DCFDiagram />
      <HtmlRenderer html={content2} />
      <NavigationButtons
        previous={{
          title: "Dual-Chain Model",
          href: "/developers/whitepaper/dual-chain",
        }}
        next={{
          title: "Cerulea Studio",
          href: "/developers/whitepaper/studio",
        }}
      />
    </div>
  )
}

const content1 = `
  <section data-aos="fade-up" id="dcf" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Directed Cyclical Finality (DCF)
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground text-justify">
      The Dynamic Consensus Framework (DCF) is Cerulea's validator coordination mechanism. It differs from conventional blockchain consensus in a fundamental way: validator participation is governed by explicit policies, not by token holdings or open entry. Under DCF, validators are admitted, rotated, and suspended according to a structured eight-pillar policy set.
    </p>
    <div class="my-8"></div>
`

const content2 = `
    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        The Eight Policy Pillars
      </h3>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Approved Validator Registry, only nodes listed in the registry may participate in validation
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Identity-Verified Operators, validators must be verified entities: companies, institutions, or approved organisations
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Uptime + Performance, validators must meet defined thresholds for availability, sync health, and latency
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Reputation + Behaviour, missed blocks and misbehaviour are scored and factored into eligibility
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Policy-Based Rotation, validator slot allocation follows eligibility, fairness, and availability rules
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Governance-Permissioned Admission, admission, suspension, and reinstatement pass through on-chain governance
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Security Compliance, validators must demonstrate key management hygiene and system patching standards
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Infrastructure Requirements, hardware, network capacity, and node configuration must meet defined minimums
        </li>
      </ul>
    </div>
    
    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Public L1 vs Private Chain DCF
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        On the Public L1, the DCF policy set is fixed and community-governed. Policy changes require a governance proposal and quorum approval. On Cerulea Private, all eight policy pillars are fully configurable by the enterprise at deployment time and adjustable through internal governance thereafter. This gives regulated organisations direct control over every dimension of their validator environment.
      </p>
      <div class="rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5 p-6 my-8 italic text-foreground leading-relaxed">
        DCF does not use token staking to determine validator selection. Eligibility is policy-driven. This makes validator behaviour predictable and auditable, critical for regulated deployments.
      </div>
    </div>
    
    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Upgrade Strategies
      </h3>
      <div class="flex flex-col gap-3">
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Rolling</div>
          <div class="text-sm text-foreground leading-relaxed">Changes applied incrementally across validator nodes. The network continues operating throughout the upgrade.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Canary</div>
          <div class="text-sm text-foreground leading-relaxed">Changes applied to a limited subset of nodes first to validate behaviour under live conditions before proceeding.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Blue-Green</div>
          <div class="text-sm text-foreground leading-relaxed">Two parallel environments run simultaneously. Traffic shifts at a defined point for near-zero downtime.</div>
        </div>
      </div>
    </div>
  </section>
`
