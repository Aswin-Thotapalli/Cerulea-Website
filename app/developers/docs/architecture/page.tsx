import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function Architecture() {
  return (
    <div>
      <LayoutTitle title="Architecture" des="2 subsections" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        next={{
          title: "Governance",
          href: "/developers/docs/governance",
        }}
        previous={{
          title: "Build Lifecycle",
          href: "/developers/docs/build-lifecycle",
        }}
      />
    </div>
  )
}

const content = `
  <p class="leading-relaxed mb-4 text-foreground">Cerulea supports two primary deployment architectures. Each has distinct validator models, governance structures, infrastructure ownership patterns, and operational characteristics.</p>
  <div class="overflow-x-auto mb-6"><table class="w-full text-sm border-collapse"><thead><tr><th class="bg-foreground text-background px-4 py-3 text-left font-semibold">Dimension</th><th class="bg-foreground text-background px-4 py-3 text-left font-semibold">Public L1</th><th class="bg-foreground text-background px-4 py-3 text-left font-semibold">Private Chain</th></tr></thead><tbody><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Validator selection</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Hybrid onboarding, Proof-of-Stake weighted</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Enterprise-selected, fully controlled</td></tr><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Participation</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Open, permissionless</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Permissioned, enterprise-defined</td></tr><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Governance</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Token-weighted community voting</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Authority-based, role-defined</td></tr><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Infrastructure ownership</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Network participants</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Deploying organization</td></tr><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Data access</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Public visibility</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Enterprise-exclusive control</td></tr><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Compliance posture</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Protocol-governed</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Enterprise-configured</td></tr><tr><td class="px-4 py-3 border-b border-border font-semibold text-foreground">Upgrade authority</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Community governance</td><td class="px-4 py-3 border-b border-border text-muted-foreground">Internal governance policy</td></tr></tbody></table></div>
  <section id="runtime-engine" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Runtime Engine</h2>
  <p class="leading-relaxed mb-4 text-foreground">The Runtime Engine defines how configured systems become executable blockchain environments. Runtime behavior is versioned, every deployment is associated with a specific runtime version that encapsulates how modules behave, how governance is enforced, and how validators interact with the chain.</p>
  <ul class="space-y-2 mb-6 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>WASM-based execution for smart contracts and modules</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>EVM compatibility for Solidity-based contracts on Public L1</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>On-chain parameter adjustments via governance</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Runtime security sandboxing to prevent unauthorized execution</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Versioned upgrade orchestration with no hard forks required</span></li>
  </ul>
  </section>
  <section id="cross-chain" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Cross-Chain and Interoperability</h2>
  <p class="leading-relaxed mb-4 text-foreground">Cross-chain capabilities are defined during the configuration stage. Interoperability is configured, not assumed. For Private Chains, connectivity to the Public L1 is optional and must be explicitly enabled.</p>
  <ul class="space-y-2 mb-6 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Cross-chain message passing for blockchain-to-blockchain communication</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Asset bridging protocols for secure token transfers between networks</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Private Chain to Public L1 optional connectivity bridge</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Cross-chain transaction validation and finality synchronization</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Standardized cross-chain contract interfaces for compatibility</span></li>
  </ul>
  </section>
`