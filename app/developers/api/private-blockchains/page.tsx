import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function PrivateBlockchainsPage() {
  return (
    <div>
      <LayoutTitle
        title="Private Blockchains"
        des="https://api.cerulea.app/v1"
      />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={blockchainCreateJson} />

      <HtmlRenderer html={consensusMechanismsContent} />

      <NavigationButtons
        next={{
          title: "Smart Contracts",
          href: "/developers/api/smart-contracts",
        }}
        previous={{
          title: "dApp Builder",
          href: "/developers/api/dapp-builder",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    Deploy and manage custom private blockchain networks with full control over consensus, validators, and runtime configuration.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/blockchains</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Create a new private blockchain network
  </p>
`

const blockchainCreateJson = `{
  "name": "Acme Settlement Chain",
  "consensus": "proof-of-authority",
  "validators": 3,
  "region": "eu-west-1",
  "governance": "authority-based",
  "privacy": "permissioned"
}`

const consensusMechanismsContent = `
  <section data-aos="fade-up" id="consensus-mechanisms" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Consensus Mechanisms
    </h2>

    <div data-aos="fade-up" class="">
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-72">proof-of-authority (PoA)</code>
        <span class="text-sm text-muted-foreground">Permissioned validators; standard for enterprise deployments</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-72">proof-of-stake (PoS)</code>
        <span class="text-sm text-muted-foreground">Stake-based validator selection</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-72">delegated-proof-of-stake (DPoS)</code>
        <span class="text-sm text-muted-foreground">Community-elected validator set</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-72">pbft</code>
        <span class="text-sm text-muted-foreground">Practical Byzantine Fault Tolerance for high-throughput private networks</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-72">raft</code>
        <span class="text-sm text-muted-foreground">Raft consensus for private networks requiring simple, stable leader election</span>
      </div>
    </div>
  </section>
`