import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperGovernancePage() {
  return (
    <div>
      <LayoutTitle title="Governance" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Cerulea Studio",
          href: "/developers/whitepaper/studio",
        }}
        next={{
          title: "Security Model",
          href: "/developers/whitepaper/security",
        }}
      />
    </div>
  )
}

const content = `
  <section data-aos="fade-up" id="governance" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Governance Framework
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground text-justify">
      Governance is the operational mechanism through which all post-deployment change occurs in Cerulea. It is not optional. No system can be modified outside the governance framework once deployed.
    </p>

    <div data-aos="fade-up" class="overflow-x-auto mb-10 rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5">
      <table class="w-full border-collapse text-sm text-left">
        <thead>
          <tr>
            <th class="p-4 font-semibold text-sidebar-primary border-b border-sidebar-primary/20 border-r ">Aspect</th>
            <th class="p-4 font-semibold text-sidebar-primary border-b border-sidebar-primary/20 border-r ">Public L1</th>
            <th class="p-4 font-semibold text-sidebar-primary border-b border-sidebar-primary/20">Private Chain</th>
          </tr>
        </thead>
        <tbody class="text-foreground">
          <tr>
            <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Proposal creation</td>
            <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">Any qualifying token holder</td>
            <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Defined stakeholder roles</td>
          </tr>
          <tr>
            <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Voting mechanism</td>
            <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">Token-weighted stake</td>
            <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Role-based or multi-sig approval</td>
          </tr>
          <tr>
            <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Execution</td>
            <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">Automatic on-chain after quorum</td>
            <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Enterprise-approved scheduling</td>
          </tr>
          <tr>
            <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Upgrade authority</td>
            <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">Community alignment required</td>
            <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Internal governance policy</td>
          </tr>
          <tr>
            <td class="p-4 border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Audit trail</td>
            <td class="p-4 border-r border-sidebar-primary/10 text-muted-foreground">Public on-chain</td>
            <td class="p-4 text-muted-foreground">Compliance-aligned logging</td>
          </tr>
        </tbody>
      </table>
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
          <div class="text-sm text-foreground leading-relaxed">Changes applied to a limited subset of nodes first to validate behavior under live conditions before proceeding.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Blue-Green</div>
          <div class="text-sm text-foreground leading-relaxed">Two parallel environments run simultaneously. Traffic is shifted at a defined point for near-zero downtime.</div>
        </div>
      </div>
    </div>
  </section>
`
