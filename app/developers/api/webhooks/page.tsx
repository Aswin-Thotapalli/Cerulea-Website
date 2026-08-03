import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function WebhooksPage() {
  return (
    <div>
      <LayoutTitle title="Webhooks" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={webhookRegisterJson} />

      <HtmlRenderer html={webhookEventsContent} />
      <CodeBlock label="JAVASCRIPT" code={signatureVerificationJs} />

      <NavigationButtons
        next={{
          title: "Workspaces",
          href: "/developers/api/workspaces",
        }}
        previous={{
          title: "RPC Methods",
          href: "/developers/api/rpc-methods",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    Receive real-time signed payloads when events occur in your blockchain infrastructure. Cerulea delivers
    <code class="text-xs font-mono px-1.5 py-0.5 rounded bg-sidebar-primary/10 text-sidebar-primary">HTTP POST</code>
    requests to your endpoint with a HMAC-SHA256 signature for verification.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/webhooks</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Register a new webhook subscription
  </p>
`

const webhookRegisterJson = `{
  "url": "https://yourapp.com/cerulea-webhook",
  "events": ["blockchain.block.created", "transaction.confirmed"],
  "secret": "whsec_your_signing_secret",
  "blockchainId": "bc_01HXYZ"
}`

const webhookEventsContent = `
  <section data-aos="fade-up" id="webhook-events" class="mt-12 mb-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Webhook Events
    </h2>

    <div data-aos="fade-up" class="rounded-lg border overflow-hidden border-border">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-sidebar-primary/5">
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Event Type</th>
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">blockchain.block.created</td>
            <td class="px-5 py-3 text-muted-foreground">New block added to the chain</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">blockchain.transaction.confirmed</td>
            <td class="px-5 py-3 text-muted-foreground">Transaction confirmed on-chain</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">contract.deployed</td>
            <td class="px-5 py-3 text-muted-foreground">Smart contract successfully deployed</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">contract.event.emitted</td>
            <td class="px-5 py-3 text-muted-foreground">Contract event emitted</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">validator.status.changed</td>
            <td class="px-5 py-3 text-muted-foreground">Validator joined, left, or changed status</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">governance.proposal.created</td>
            <td class="px-5 py-3 text-muted-foreground">New governance proposal submitted</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section data-aos="fade-up" id="signature-verification">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Signature Verification
    </h2>
  </section>
`

const signatureVerificationJs = `const crypto = require("crypto");

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac("sha256", secret)
    .update(payload, "utf8")
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(signature)
  );
}`