import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"
import ArchitectureDiagram from "../componets/ArchitectureDiagram"

export default function WhitepaperArchitecturePage() {
  return (
    <div>
      <LayoutTitle title="Architecture" des="Whitepaper" />
      <ArchitectureDiagram />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Core Philosophy",
          href: "/developers/whitepaper/philosophy",
        }}
        next={{
          title: "Dual-Chain Model",
          href: "/developers/whitepaper/dual-chain",
        }}
      />
    </div>
  )
}

const content = `
  <p data-aos="fade-up" class="leading-relaxed mb-8 text-foreground">
    Cerulea supports two primary deployment architectures. The architecture selected at project creation determines every subsequent configuration decision.
  </p>

  <div data-aos="fade-up" class="rounded-lg border overflow-hidden border-border mb-10">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="bg-foreground">
          <th class="text-left font-medium px-5 py-3 text-card">Dimension</th>
          <th class="text-left font-medium px-5 py-3 text-card">Public L1</th>
          <th class="text-left font-medium px-5 py-3 text-card">Private Chain</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t border-border">
          <td class="px-5 py-3 font-medium text-sidebar-primary">Participation</td>
          <td class="px-5 py-3 text-muted-foreground">Open, permissionless</td>
          <td class="px-5 py-3 text-muted-foreground">Permissioned, enterprise-controlled</td>
        </tr>
        <tr class="border-t border-border bg-sidebar-primary/5">
          <td class="px-5 py-3 font-medium text-sidebar-primary">Governance</td>
          <td class="px-5 py-3 text-muted-foreground">Token-weighted, community-driven</td>
          <td class="px-5 py-3 text-muted-foreground">Authority-based, organisation-defined</td>
        </tr>
        <tr class="border-t border-border">
          <td class="px-5 py-3 font-medium text-sidebar-primary">Validators</td>
          <td class="px-5 py-3 text-muted-foreground">Hybrid open onboarding, PoS</td>
          <td class="px-5 py-3 text-muted-foreground">Enterprise-selected nodes</td>
        </tr>
        <tr class="border-t border-border bg-sidebar-primary/5">
          <td class="px-5 py-3 font-medium text-sidebar-primary">Infrastructure</td>
          <td class="px-5 py-3 text-muted-foreground">Distributed network participants</td>
          <td class="px-5 py-3 text-muted-foreground">Cloud, on-prem, or hybrid (org-owned)</td>
        </tr>
        <tr class="border-t border-border">
          <td class="px-5 py-3 font-medium text-sidebar-primary">Use Cases</td>
          <td class="px-5 py-3 text-muted-foreground">dApps, token systems, ecosystem services</td>
          <td class="px-5 py-3 text-muted-foreground">Enterprise blockchain, regulated industries</td>
        </tr>
        <tr class="border-t border-border bg-sidebar-primary/5">
          <td class="px-5 py-3 font-medium text-sidebar-primary">Compliance</td>
          <td class="px-5 py-3 text-muted-foreground">Network-level rules only</td>
          <td class="px-5 py-3 text-muted-foreground">Custom compliance enforcement modules</td>
        </tr>
        <tr class="border-t border-border">
          <td class="px-5 py-3 font-medium text-sidebar-primary">Data control</td>
          <td class="px-5 py-3 text-muted-foreground">Network participants</td>
          <td class="px-5 py-3 text-muted-foreground">Deploying organisation exclusively</td>
        </tr>
      </tbody>
    </table>
  </div>

  <section data-aos="fade-up" id="runtime-engine" class="mb-10">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Runtime Engine
    </h2>

    <p class="leading-relaxed mb-4 text-foreground">
      The Runtime Engine defines how configured systems become executable blockchain environments. Runtime behavior is versioned: every deployment is associated with a specific runtime version, and changes occur only through governance-approved upgrades.
    </p>

    <ul class="space-y-2 pl-1">
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>WASM-based execution for smart contracts and modules</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>EVM compatibility for Solidity-based contracts on Public L1</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>On-chain parameter adjustments via governance</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>Runtime security sandboxing to prevent unauthorised execution</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>Versioned upgrade orchestration with no hard forks required</span>
      </li>
    </ul>
  </section>

  <section data-aos="fade-up" id="cross-chain-interoperability">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Cross-Chain Interoperability
    </h2>

    <p class="leading-relaxed text-foreground">
      Cross-chain capabilities are configured, not assumed. Supported interoperability includes cross-chain message passing, asset bridging protocols, and optional Private Chain to Public L1 connectivity. All external connectivity must be explicitly enabled during configuration.
    </p>
  </section>
`