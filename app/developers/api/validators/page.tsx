import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function ValidatorsPage() {
  return (
    <div>
      <LayoutTitle title="Validators" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={validatorAddJson} />

      <HtmlRenderer html={validatorOperationsContent} />

      <NavigationButtons
        next={{
          title: "Governance",
          href: "/developers/api/governance",
        }}
        previous={{
          title: "Smart Contracts",
          href: "/developers/api/smart-contracts",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    Manage validators on your private blockchains. Add, slash, update stake, and monitor real-time uptime and performance.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/blockchains/:blockchainId/validators</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Add a new validator to the network
  </p>
`

const validatorAddJson = `{
  "address": "0xAbCd...1234",
  "stake": 10000,
  "commission": 5,
  "metadata": { "name": "Acme Validator 1", "location": "EU" }
}`

const validatorOperationsContent = `
  <section data-aos="fade-up" id="validator-operations" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Validator Operations
    </h2>

    <div data-aos="fade-up" class="space-y-3">
      <div class="flex items-center gap-3 text-sm">
        <code class="font-mono text-muted-foreground shrink-0">GET /validators/:id/status</code>
        <span class="text-foreground">Get real-time validator status and uptime</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <code class="font-mono text-muted-foreground shrink-0">PUT /validators/:id/stake</code>
        <span class="text-foreground">Update validator stake amount</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <code class="font-mono text-muted-foreground shrink-0">POST /validators/:id/slash</code>
        <span class="text-foreground">Apply slash penalty for misbehaviour</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <code class="font-mono text-muted-foreground shrink-0">DELETE /validators/:id</code>
        <span class="text-foreground">Remove a validator from the active set</span>
      </div>
    </div>
  </section>
`