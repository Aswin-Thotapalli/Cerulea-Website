import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function DappBuilderPage() {
  return (
    <div>
      <LayoutTitle title="dApp Builder" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={dappCreateJson} />

      <HtmlRenderer html={availableComponentsContent} />

      <NavigationButtons
        next={{
          title: "Private Blockchains",
          href: "/developers/api/private-blockchains",
        }}
        previous={{
          title: "Workspaces",
          href: "/developers/api/workspaces",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    Build complete decentralised applications with no code required. The dApp Builder API composes components into a fully deployable application with frontend, contracts, and backend logic.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/dapps</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Create and configure a new dApp
  </p>
`

const dappCreateJson = `{
  "name": "Yield Vault",
  "blockchainId": "bc_01HXYZ",
  "components": ["token", "staking", "governance"],
  "config": {
    "token": { "standard": "ERC20", "supply": 1000000 },
    "staking": { "apy": 8.5, "lockPeriod": "30d" }
  }
}`

const availableComponentsContent = `
  <section data-aos="fade-up" id="available-components" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Available Components
    </h2>

    <div data-aos="fade-up" class="rounded-lg border shadow-sm overflow-hidden border-border">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-sidebar-primary/5">
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Component</th>
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">token</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Fungible or non-fungible tokens</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">staking</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Token staking mechanism with configurable rewards</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">liquidity-pool</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">DEX liquidity pools</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">lending</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Lending and borrowing protocol</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">governance</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">DAO governance system</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">nft-marketplace</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">NFT marketplace with royalty support</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">auction</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Auction mechanism</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">multisig</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Multi-signature wallet</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`