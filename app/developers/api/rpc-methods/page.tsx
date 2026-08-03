import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function RpcMethodsPage() {
  return (
    <div>
      <LayoutTitle title="RPC Methods" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={rpcExampleJson} />

      <HtmlRenderer html={availableMethodsContent} />

      <NavigationButtons
        next={{
          title: "Webhooks",
          href: "/developers/api/webhooks",
        }}
        previous={{
          title: "Core Rest API",
          href: "/developers/api/rest",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    JSON-RPC 2.0 endpoint for direct blockchain interactions. All RPC calls are sent as
    <code class="text-xs font-mono px-1.5 py-0.5 rounded bg-sidebar-primary/10 text-sidebar-primary">POST</code>
    requests to
    <code class="text-xs font-mono px-1.5 py-0.5 rounded bg-muted text-foreground">/rpc</code>.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/rpc</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Execute a JSON-RPC 2.0 method
  </p>
`

const rpcExampleJson = `{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "blockchain.getBlock",
  "params": {
    "blockchainId": "bc_01HXYZ",
    "number": 1500000
  }
}`

const availableMethodsContent = `
  <section data-aos="fade-up" id="available-methods" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Available Methods
    </h2>

    <div data-aos="fade-up" class="divide-y divide-border border-t border-b border-border">
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-56">blockchain.getBlock</code>
        <span class="text-sm text-muted-foreground">Get block by number or hash</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-56">blockchain.getTransaction</code>
        <span class="text-sm text-muted-foreground">Get transaction details and status</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-56">blockchain.getBalance</code>
        <span class="text-sm text-muted-foreground">Get account balance at a given block</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-56">transaction.send</code>
        <span class="text-sm text-muted-foreground">Broadcast a signed transaction</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-56">transaction.simulate</code>
        <span class="text-sm text-muted-foreground">Dry-run a transaction without broadcasting</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-56">contract.call</code>
        <span class="text-sm text-muted-foreground">Read-only contract call (no gas)</span>
      </div>
      <div class="flex items-center gap-4 py-3">
        <code class="text-sm font-mono text-sidebar-primary shrink-0 w-56">contract.execute</code>
        <span class="text-sm text-muted-foreground">Execute a state-changing contract method</span>
      </div>
    </div>
  </section>
`