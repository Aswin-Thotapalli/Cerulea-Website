import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function ModulesPage() {
  return (
    <div>
      <LayoutTitle title="Modules" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={moduleEnableJson} />

      <HtmlRenderer html={availableModulesContent} />

      <NavigationButtons
        next={{
          title: "Tokens",
          href: "/developers/api/tokens",
        }}
        previous={{
          title: "Governance",
          href: "/developers/api/governance",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    Enable and configure blockchain modules to add specific capabilities to a deployed network. Modules are provisioned at genesis or via governance upgrade.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/blockchains/:blockchainId/modules</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Enable a module on your blockchain
  </p>
`

const moduleEnableJson = `{
  "module": "defi",
  "config": {
    "dex": true,
    "lending": true,
    "feeToken": "native"
  }
}`

const availableModulesContent = `
  <section data-aos="fade-up" id="available-modules" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Available Modules
    </h2>

    <div data-aos="fade-up" class="rounded-lg shadow-sm border overflow-hidden border-border">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-sidebar-primary/5">
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Module</th>
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Features</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">defi</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">DeFi protocols, DEX, lending, staking</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">nft</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">NFT minting and marketplace infrastructure</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">dao</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">DAO governance and on-chain voting</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">bridge</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Cross-chain bridge functionality</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">oracle</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Price oracle integration (Chainlink-compatible)</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">identity</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Decentralised identity (DID) framework</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">privacy</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Zero-knowledge proof support</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">storage</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Decentralised storage (IPFS-compatible)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`