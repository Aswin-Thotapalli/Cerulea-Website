import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperSecurityModelPage() {
  return (
    <div>
      <LayoutTitle title="Security Model" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Governance",
          href: "/developers/whitepaper/governance",
        }}
        next={{
          title: "Cerulea Intelligence",
          href: "/developers/whitepaper/intelligence",
        }}
      />
    </div>
  )
}

const content = `
  <section data-aos="fade-up" id="security" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Security Model
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground text-justify">
      The Cerulea security model operates across three distinct layers: architectural, contractual, and cryptographic. Of these, the architectural layer is the most consequential. Architecture cannot be overridden by a policy change, a contractual amendment, or a compromised employee. The design choices described here are not promises. They are the way the system is built.
    </p>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Architectural Isolation
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Private Chain deployments run on isolated infrastructure. This is not a logical separation enforced by access control lists. It is a physical separation. A customer's private chain does not share validator nodes, execution environments, or chain state with any other tenant or with Cerulea Public L1.
      </p>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        The specific guarantees this produces:
      </p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          No shared validator keys across any two deployments
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          No shared execution environment between any two private chains
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          No shared state between a private chain and the public chain
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          A compromised node on one deployment cannot read or affect another customer's chain
        </li>
      </ul>
      <div class="rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5 p-6 my-8 italic text-foreground leading-relaxed">
        Cross-tenant data access is not a misconfiguration risk in Cerulea. It is an architectural impossibility. There is no pathway, authorised or otherwise, by which one tenant's deployment can access another's chain state.
      </div>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        The Metering Layer
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        The only operational touchpoint between Cerulea's systems and a customer's private chain after deployment is the metering layer. What metering nodes observe is precisely defined and does not change based on deployment tier or contract terms.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
          <div class="text-sm font-bold text-sidebar-primary mb-3 pb-2 border-b border-sidebar-primary/10">
            Metering nodes observe
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
            Metering nodes do not observe
          </div>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Transaction payloads or contents
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Wallet addresses involved in transactions
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Smart contract state or stored data
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Any application-layer data
            </li>
          </ul>
        </div>
      </div>
      <div class="rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5 p-6 my-8 italic text-foreground leading-relaxed">
        The metering layer is a billing heartbeat. It confirms the chain is running and counts billable activity. It has no visibility into what those transactions contain. This is a technical constraint built into the metering node design, not a policy commitment subject to future revision.
      </div>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Validator Key Sovereignty
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Validator keys are generated and transferred to the customer at deployment. Cerulea's ongoing operational systems do not require access to validator private keys after this point. There is no workflow within Cerulea's operations that requires the platform to hold or use a customer's validator private key.
      </p>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        For enterprise buyers with a formal requirement for zero-knowledge key ceremonies, this can be arranged as part of the deployment process. The standard deployment flow transfers keys securely. The zero-knowledge variant adds a structured ceremony in which Cerulea personnel have no visibility into the keys at any stage of generation or transfer.
      </p>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Network Exposure Model
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Standard private chain deployments are internet-facing with defined access controls. The default configuration includes:
      </p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Protected RPC and API endpoints requiring authentication
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Node-to-node gossip traffic restricted to a defined, customer-controlled peer set
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          API key and IP allowlist controls on all RPC access points
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Customer-configurable network exposure boundaries
        </li>
      </ul>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        VPN-isolated deployments and private network peering via AWS PrivateLink or Azure Private Link are available for deployments with stricter network isolation requirements. These configurations are handled as custom deployment scope. Organisations that require full network air-gapping or private peering should raise this in the scoping conversation rather than assuming it is included in a standard deployment.
      </p>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Operational vs. Data Control Boundary
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
          <div class="text-sm font-bold text-sidebar-primary mb-3 pb-2 border-b border-sidebar-primary/10">
            Cerulea manages
          </div>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Deployment orchestration
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Upgrade management
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Monitoring surface provisioning
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Lifecycle control tooling
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Metering telemetry (block-level only)
            </li>
          </ul>
        </div>
        <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
          <div class="text-sm font-bold text-sidebar-primary mb-3 pb-2 border-b border-sidebar-primary/10">
            Enterprise owns
          </div>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Transaction execution and state
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Smart contract state
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Validator key management
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              All enterprise data within the deployed system
            </li>
            <li class="flex items-start gap-3 text-sm text-foreground">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
              Network exposure and API access policy
            </li>
          </ul>
        </div>
      </div>
      <div class="rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5 p-6 my-8 italic text-foreground leading-relaxed">
        Cerulea does not read transaction payloads, access smart contract state, or control enterprise validator keys. This boundary is enforced architecturally, not by policy.
      </div>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Compliance Compatibility
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Cerulea is framework-agnostic by design. The architecture is built around the technical controls that major compliance frameworks require, without holding certifications against any specific framework at this stage. The structural controls in place are compatible with the technical requirements of GDPR, SOC 2, and ISO 27001:
      </p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Data isolation at the infrastructure level, not only at the access control level
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Defined and auditable data boundaries between Cerulea and the enterprise
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Role-based access control for permissioned participation
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Immutable audit trails for all governance actions and configuration changes
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Enterprise-defined compliance rule enforcement at the module level
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Cross-border governance adaptability for multi-jurisdiction deployments
        </li>
      </ul>
      <div class="rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5 p-6 my-8 italic text-foreground leading-relaxed">
        Cerulea provides the structural controls through which organisations can implement and enforce their own compliance requirements. Cerulea does not provide legal compliance certifications and does not currently hold certifications against any of the frameworks listed above.
      </div>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Threat Model
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        The Cerulea architecture is explicitly designed to resist the following attack profiles:
      </p>
      <div class="flex flex-col gap-3">
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Cross-Tenant Access</div>
          <div class="text-sm text-foreground leading-relaxed">Isolated infrastructure with no shared state means an attacker who compromises one deployment cannot read or affect any other customer's chain. There is no shared layer to pivot through.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Unauthorized Chain Manipulation</div>
          <div class="text-sm text-foreground leading-relaxed">The DCF consensus mechanism requires validator quorum for any state change. A single compromised validator node cannot rewrite chain state. Quorum requirements are configurable but enforced at the protocol level.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">API Abuse</div>
          <div class="text-sm text-foreground leading-relaxed">All RPC and REST endpoints require authentication. IP allowlisting and API key controls limit the exposure surface. Unauthenticated access to chain internals is not available in the default configuration.</div>
        </div>
      </div>
    </div>
  </section>
`
