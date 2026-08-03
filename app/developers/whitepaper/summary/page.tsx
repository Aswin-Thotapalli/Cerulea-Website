import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperPlatformSummaryPage() {
  return (
    <div>
      <LayoutTitle title="Platform Summary" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Decision Guide",
          href: "/developers/whitepaper/decision",
        }}
      />
    </div>
  )
}
const content = `
  

  <div data-aos="fade-up" class="rounded-lg border overflow-hidden border-border mb-10">
    <table class="w-full text-sm border-collapse">
      <tbody>
        <tr class="border-b border-border bg-sidebar-primary/5">
          <td class="px-5 py-3.5 font-medium text-sidebar-primary w-56 align-top">Deployment model</td>
          <td class="px-5 py-3.5 text-foreground">Public L1 and Private Chain</td>
        </tr>
        <tr class="border-b border-border">
          <td class="px-5 py-3.5 font-medium text-sidebar-primary align-top">Configuration approach</td>
          <td class="px-5 py-3.5 text-foreground">Fully no-code, structured configuration framework</td>
        </tr>
        <tr class="border-b border-border bg-sidebar-primary/5">
          <td class="px-5 py-3.5 font-medium text-sidebar-primary align-top">Governance</td>
          <td class="px-5 py-3.5 text-foreground">On-chain, proposal-lifecycle driven. Token-weighted (Public L1) or authority-based (Private Chain)</td>
        </tr>
        <tr class="border-b border-border">
          <td class="px-5 py-3.5 font-medium text-sidebar-primary align-top">Runtime</td>
          <td class="px-5 py-3.5 text-foreground">WASM + EVM-compatible, versioned upgrades, governance-gated changes</td>
        </tr>
        <tr class="border-b border-border bg-sidebar-primary/5">
          <td class="px-5 py-3.5 font-medium text-sidebar-primary align-top">Infrastructure hosting</td>
          <td class="px-5 py-3.5 text-foreground">Cloud (AWS, Azure, GCP), On-Prem, or Hybrid (Private Chain only)</td>
        </tr>
        <tr class="border-b border-border">
          <td class="px-5 py-3.5 font-medium text-sidebar-primary align-top">Security boundary</td>
          <td class="px-5 py-3.5 text-foreground">Operational coordination (Cerulea) vs. data control (enterprise or network participants)</td>
        </tr>
        <tr class="border-b border-border bg-sidebar-primary/5">
          <td class="px-5 py-3.5 font-medium text-sidebar-primary align-top">Integrations</td>
          <td class="px-5 py-3.5 text-foreground">7 categories, 35+ supported providers</td>
        </tr>
        <tr class="border-b border-border">
          <td class="px-5 py-3.5 font-medium text-sidebar-primary align-top">AI guidance</td>
          <td class="px-5 py-3.5 text-foreground">Cerulea Intelligence: advisory-only, pre-deployment configuration assistance</td>
        </tr>
        <tr class="bg-sidebar-primary/5">
          <td class="px-5 py-3.5 font-medium text-sidebar-primary align-top">Build lifecycle</td>
          <td class="px-5 py-3.5 text-foreground">9-stage lifecycle: Create through Retire</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div data-aos="fade-up" class="relative overflow-hidden rounded-xl bg-linear-to-br from-sidebar-primary via-sidebar-primary to-foreground px-8 py-12 text-center mb-10">
    <span class="inline-block mb-4 rounded-full border border-sidebar-primary-foreground/30 bg-sidebar-primary-foreground/10 px-3 py-1 text-[10px] font-bold tracking-widest text-sidebar-primary-foreground/80 uppercase">
      Get Started
    </span>
    <h2 class="text-2xl font-bold text-sidebar-primary-foreground mb-3">
      Ready to build on Cerulea?
    </h2>
    <p class="text-sm text-sidebar-primary-foreground/70 mb-6 max-w-md mx-auto">
      Explore the platform, request a demo, or speak with our team about your infrastructure requirements.
    </p>
    <div class="flex items-center justify-center gap-3">
      <a href="/company/contact-sales" class="rounded-lg bg-sidebar-primary-foreground px-5 py-2.5 text-sm font-semibold text-sidebar-primary transition-transform duration-200 hover:scale-105">
        Contact Sales
      </a>
      <a href="/developers/docs/foundation" class="rounded-lg border border-sidebar-primary-foreground/40 px-5 py-2.5 text-sm font-semibold text-sidebar-primary-foreground transition-colors duration-200 hover:bg-sidebar-primary-foreground/10">
        View Documentation
      </a>
    </div>
  </div>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card p-6">
    <p class="text-[10px] font-bold tracking-widest text-sidebar-primary uppercase mb-2">
      Legal Disclaimer
    </p>
    <p class="text-xs leading-relaxed text-muted-foreground">
      This document is provided for informational purposes only. The information contained herein is subject to change without notice. Cerulea makes no warranties, express or implied, regarding the accuracy or completeness of this document. This whitepaper does not constitute legal, financial, or regulatory advice. Organisations are responsible for ensuring that any deployment meets the legal and regulatory requirements applicable in their jurisdiction. Version 1.0, February 2026.
    </p>
  </div>
`