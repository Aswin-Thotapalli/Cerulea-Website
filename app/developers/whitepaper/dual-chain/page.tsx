import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"
import DualChainDiagram from "../componets/DualChainDiagram"

export default function WhitepaperDualChainModelPage() {
  return (
    <div>
      <LayoutTitle title="Dual-Chain Model" des="Whitepaper" />
      <HtmlRenderer html={content1} />
      <DualChainDiagram />
      <HtmlRenderer html={content2} />
      <NavigationButtons
        previous={{
          title: "Architecture",
          href: "/developers/whitepaper/architecture",
        }}
        next={{
          title: "Dynamic Consensus Framework",
          href: "/developers/whitepaper/dcf",
        }}
      />
    </div>
  )
}

const content1 = `
  <section data-aos="fade-up" id="dual-chain" class="mb-14">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Dual-Chain Model
    </h2>

    <p class="leading-relaxed mb-6 text-foreground text-justify">
      Every Cerulea deployment is one of two sovereign architectures, Public L1 or Cerulea Private. This selection, made at project creation in Studio, determines all subsequent decisions about governance, infrastructure ownership, compliance posture, and validator control. Both architectures are complete, standalone blockchain environments accessed through the same interface.
    </p>
  </section>
`

const content2 = `
  <div class="mb-10">
    <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
      Public L1
    </h3>
    <p class="leading-relaxed text-foreground text-justify">
      The Public L1 operates as Cerulea's open, permissionless blockchain network. Validators are admitted through the DCF policy registry. Governance is token-weighted and community-driven. All chain activity is publicly visible through Cerulea Explorer. The Public L1 is appropriate for dApps, token systems, public registries, and open ecosystem services.
    </p>
  </div>

  <div data-aos="fade-up" class="mb-10">
    <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
      Cerulea Private
    </h3>
    <p class="leading-relaxed text-foreground text-justify">
      Cerulea Private deployments are sovereign enterprise blockchain environments. The deploying organisation owns the validator infrastructure, holds governance authority, and has exclusive access to all chain state. Zero vendor access exists, Cerulea cannot read transaction payloads or smart contract state. This architecture is appropriate for regulated industries, government use cases, supply chain systems, and any environment where data sovereignty and compliance authority are non-negotiable.
    </p>
  </div>

  <div data-aos="fade-up" class="mb-10">
    <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
      Optional Bridge Connectivity
    </h3>
    <p class="leading-relaxed text-foreground text-justify">
      Both chain types can optionally connect through the Cross-Chain Bridge Engine. This enables selective asset transfers and message passing between Public L1 and Private Chain environments without compromising the sovereignty of either. Bridge connectivity must be explicitly configured, it is never assumed or applied by default.
    </p>
  </div>

  <div data-aos="fade-up" class="overflow-x-auto rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5">
    <table class="w-full border-collapse text-sm text-left">
      <thead>
        <tr>
          <th class="p-4 font-semibold text-sidebar-primary border-b border-r border-sidebar-primary/20">Dimension</th>
          <th class="p-4 font-semibold text-sidebar-primary border-b border-sidebar-primary/20 border-r">Public L1</th>
          <th class="p-4 font-semibold text-sidebar-primary border-b border-sidebar-primary/20">Cerulea Private</th>
        </tr>
      </thead>
      <tbody class="text-foreground">
        <tr>
          <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Participation</td>
          <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">Open, permissionless</td>
          <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Permissioned, enterprise-controlled</td>
        </tr>
        <tr>
          <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Governance</td>
          <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">Token-weighted, community-driven</td>
          <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Authority-based, organisation-defined</td>
        </tr>
        <tr>
          <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Validators</td>
          <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">DCF registry, open onboarding</td>
          <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Enterprise-selected, organisation-owned</td>
        </tr>
        <tr>
          <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Infrastructure</td>
          <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">Distributed network participants</td>
          <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Cloud, on-prem, or hybrid (org-owned)</td>
        </tr>
        <tr>
          <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Data visibility</td>
          <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">Public via Cerulea Explorer</td>
          <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Enterprise-exclusive, zero vendor access</td>
        </tr>
        <tr>
          <td class="p-4 border-b border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Compliance</td>
          <td class="p-4 border-b border-r border-sidebar-primary/10 text-muted-foreground">Network-level rules only</td>
          <td class="p-4 border-b border-sidebar-primary/10 text-muted-foreground">Custom enforcement modules, full control</td>
        </tr>
        <tr>
          <td class="p-4 border-r border-sidebar-primary/10 font-medium text-sidebar-primary">Use cases</td>
          <td class="p-4 border-r border-sidebar-primary/10 text-muted-foreground">dApps, tokens, ecosystem services</td>
          <td class="p-4 text-muted-foreground">Enterprise blockchain, regulated industries</td>
        </tr>
      </tbody>
    </table>
  </div>
`
