import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperEnterpriseOperatingModelPage() {
  return (
    <div>
      <LayoutTitle title="Enterprise Operating Model" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Integrations",
          href: "/developers/whitepaper/integrations",
        }}
        next={{
          title: "Decision Guide",
          href: "/developers/whitepaper/decision",
        }}
      />
    </div>
  )
}

const content = `
  <section data-aos="fade-up" id="enterprise" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Enterprise Operating Model
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground text-justify">
      A Cerulea Private Chain deployment is a sovereign blockchain environment. The distinction matters: the enterprise does not gain access to infrastructure that Cerulea controls. The enterprise owns and operates the infrastructure outright. Cerulea provides the platform and tooling used to build and maintain it. What runs belongs to the enterprise. What built it belongs to Cerulea.
    </p>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Ownership Boundaries
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
          <div class="text-sm font-bold text-sidebar-primary mb-3 pb-2 border-b border-sidebar-primary/10">
            Enterprise Controls
          </div>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              All validator nodes and hosting environment
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Governance authority and participant roles
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Infrastructure scaling, redundancy, and uptime
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Exclusive access to transaction data and chain state
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Network exposure and API access policies
            </li>
          </ul>
        </div>
        <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
          <div class="text-sm font-bold text-sidebar-primary mb-3 pb-2 border-b border-sidebar-primary/10">
            Cerulea Provides
          </div>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Configuration framework and Studio environment
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Deployment orchestration and lifecycle tooling
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Monitoring surfaces and observability
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Usage metering (block-level telemetry only)
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Upgrade coordination support
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Infrastructure Sovereignty After Deployment
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Once a Private Chain is deployed, it does not depend on a live connection to Cerulea's systems to continue operating. The chain software runs on the enterprise's infrastructure. Validator keys are held by the enterprise. Consensus is reached between the enterprise's validators. The chain does not communicate back to Cerulea's systems to produce blocks.
      </p>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        This is genuine infrastructure sovereignty, not a contractual promise. The chain's continued operation is a function of the enterprise's validator set, not of Cerulea's uptime. An enterprise evaluating long-term infrastructure risk should note that Cerulea's operational continuity is not a dependency for chain continuity after deployment.
      </p>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Validator Ownership and Metering
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Validator nodes are owned and operated by the enterprise. Cerulea may deploy a small number of nodes within the network for licensing enforcement and usage metering purposes only.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
          <div class="text-sm font-bold text-sidebar-primary mb-3 pb-2 border-b border-sidebar-primary/10">
            Cerulea-operated nodes observe
          </div>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Block height
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Block hash
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Block timestamp
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Transaction count per block
            </li>
          </ul>
        </div>
        <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
          <div class="text-sm font-bold text-sidebar-primary mb-3 pb-2 border-b border-sidebar-primary/10">
            They do not observe
          </div>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Transaction payloads
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Wallet addresses
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Smart contract state
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Any application-layer data
            </li>
          </ul>
        </div>
      </div>
      <div class="rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5 p-6 my-8 italic text-foreground leading-relaxed">
        Enterprises retain the right to audit and verify the behaviour of any Cerulea-operated nodes within their network at any time. The metering node scope is a technical boundary built into its design, not a policy commitment subject to renegotiation.
      </div>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Dynamic Consensus Framework
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        The DCF is a consensus mechanism developed by Caerulean Bytechains. It is not a renamed or repackaged version of an existing open-source protocol. The DCF is purpose-built around the specific requirements of enterprise private chain deployments: permissioned validator sets, policy-based validator rotation, identity-verified participation, and governance-integrated upgrade authority.
      </p>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Key properties of the DCF for enterprise deployments:
      </p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Validator admission is governance-controlled, not stake-weighted
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Policy-based rotation rather than probabilistic validator selection
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Identity verification is a validator eligibility condition, not an optional setting
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Reputation and uptime performance feed into continued eligibility
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          All 8 DCF policies are fully configurable by the deploying enterprise
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          No token required for validator participation or governance authority
        </li>
      </ul>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Platform Status
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Cerulea Public L1 is live with 5 active validators. Private Chain deployments are in active development, with the platform available for evaluation and scoping conversations with enterprise buyers.
      </p>
    </div>
  </section>
`
