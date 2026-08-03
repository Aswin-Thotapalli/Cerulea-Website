import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function SmartContractsPage() {
  return (
    <div>
      <LayoutTitle title="Smart Contracts" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={contractDeployJson} />

      <HtmlRenderer html={contractTemplatesContent} />

      <NavigationButtons
        next={{
          title: "Validators",
          href: "/developers/api/validators",
        }}
        previous={{
          title: "Private Blockchains",
          href: "/developers/api/private-blockchains",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    Deploy smart contracts from Cerulea's managed template library or upload your own compiled bytecode. All deployments are recorded on-chain and tracked in your dashboard.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/contracts/deploy</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Deploy a smart contract from a managed template
  </p>
`

const contractDeployJson = `{
  "blockchainId": "bc_01HXYZ",
  "template": "erc20-token",
  "params": {
    "name": "Acme Token",
    "symbol": "ACM",
    "totalSupply": 1000000,
    "decimals": 18
  }
}`

const contractTemplatesContent = `
  <section data-aos="fade-up" id="contract-templates" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Contract Templates
    </h2>

    <div data-aos="fade-up" class="rounded-lg shadow border overflow-hidden border-border">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-sidebar-primary/5">
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Template</th>
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">erc20-token</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Standard fungible token (ERC-20)</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">erc721-nft</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Non-fungible token (ERC-721)</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">erc1155-multi</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Multi-token standard (ERC-1155)</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">governance-dao</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">DAO with on-chain voting</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">staking-pool</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">Token staking with reward distribution</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">marketplace</span>
            </td>
            <td class="px-5 py-3 text-muted-foreground">NFT marketplace with royalties</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`