import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function TokensPage() {
  return (
    <div>
      <LayoutTitle title="Tokens" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={tokenCreateJson} />

      <HtmlRenderer html={tokenStandardsContent} />

      <NavigationButtons
        next={{
          title: "Monitoring",
          href: "/developers/api/monitoring",
        }}
        previous={{
          title: "Modules",
          href: "/developers/api/modules",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    Create and configure tokens on deployed blockchains. Tokens can be fungible, non-fungible, or use advanced vault standards for yield-bearing assets.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/tokens</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Create and configure a new token on a deployed blockchain
  </p>
`

const tokenCreateJson = `{
  "blockchainId": "bc_01HXYZ",
  "standard": "ERC20",
  "name": "Settlement Credit",
  "symbol": "STC",
  "totalSupply": 500000000,
  "decimals": 18,
  "mintable": true,
  "burnable": false
}`

const tokenStandardsContent = `
  <section data-aos="fade-up" id="token-standards" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Token Standards
    </h2>

    <div data-aos="fade-up" class="space-y-3">
      <div class="flex items-center gap-3 text-sm">
        <code class="font-mono text-muted-foreground shrink-0 w-20">ERC20</code>
        <span class="text-foreground">Fungible tokens; standard for utility and governance tokens</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <code class="font-mono text-muted-foreground shrink-0 w-20">ERC721</code>
        <span class="text-foreground">Non-fungible tokens (NFTs); unique digital assets</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <code class="font-mono text-muted-foreground shrink-0 w-20">ERC1155</code>
        <span class="text-foreground">Multi-token standard; fungible and non-fungible in a single contract</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <code class="font-mono text-muted-foreground shrink-0 w-20">ERC4626</code>
        <span class="text-foreground">Tokenised vault standard for yield-bearing assets</span>
      </div>
    </div>
  </section>
`