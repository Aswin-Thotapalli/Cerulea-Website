import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperCeruleaIntelligencePage() {
  return (
    <div>
      <LayoutTitle title="Cerulea Intelligence" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Security Model",
          href: "/developers/whitepaper/security",
        }}
        next={{
          title: "Competitive Analysis",
          href: "/developers/whitepaper/competitive",
        }}
      />
    </div>
  )
}

const content = `
  <section data-aos="fade-up" id="intelligence" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Cerulea Intelligence
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground text-justify">
      Cerulea Intelligence is an embedded guidance layer inside Studio that provides contextual recommendations and risk-aware signals during the design and configuration phase. It is a hybrid system, combining structured rule evaluation with contextual AI reasoning. It operates only while a user is actively configuring a deployment. It cannot take autonomous action at any point.
    </p>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Why Advisory-Only Is a Design Decision, Not a Limitation
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Cerulea Intelligence is intentionally constrained to advisory mode. This is a permanent design commitment, not a temporary limitation waiting to be lifted in a future release. The reasoning has three layers, all of which are real and deliberate:
      </p>
      
      <div class="flex flex-col gap-3">
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Trust</div>
          <div class="text-sm text-foreground leading-relaxed">Enterprise customers deploying production blockchain infrastructure need to be the decision-makers of record. If Intelligence silently modified a chain configuration, there would be no clear accountability for the resulting system. The human who built the deployment must own the decisions that produced it.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Liability</div>
          <div class="text-sm text-foreground leading-relaxed">If an automated system applied a configuration change that resulted in a security incident or data loss, the question of whether the customer or Cerulea bears responsibility becomes genuinely complicated. Advisory mode preserves a clean accountability boundary: Intelligence recommended, the user decided, the user acted.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Philosophy</div>
          <div class="text-sm text-foreground leading-relaxed">Blockchain configuration is consequential in ways that most software decisions are not. A misconfigured chain is not like a misconfigured UI preference. It affects live validator behaviour, governance authority, data access boundaries, and infrastructure exposure. These decisions carry a weight that should not be automated away. Keeping Intelligence advisory is a deliberate statement that Cerulea respects that weight and does not substitute machine judgment for human judgment on decisions of this kind.</div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        What Intelligence Sees
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Intelligence operates on the configuration state the user has built inside Studio. Its inputs are scoped to the current session only:
      </p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Industry and use case selection
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Modules added to the deployment and their configuration state
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Consensus mechanism selection and associated parameters
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Access control and permissioning settings configured so far
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Named parameters the user has set across all configuration surfaces
        </li>
      </ul>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Intelligence does not have access to wallet private keys, transaction data from any deployed chain, external business data the user has not entered into Studio, or configuration data from any other user's session. Its reasoning is scoped entirely to the active configuration.
      </p>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        What Intelligence Surfaces
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Intelligence evaluates the active configuration against five categories of signal. Every signal is presented as a recommendation. None result in automatic changes to the deployment configuration.
      </p>
      
      <div class="flex flex-col gap-3">
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Completeness Gaps</div>
          <div class="text-sm text-foreground leading-relaxed">Required configuration fields that are empty or set to defaults that are inappropriate for the selected use case. Example: a supply chain deployment with no role-based access configured is flagged before deployment becomes available.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Consistency Conflicts</div>
          <div class="text-sm text-foreground leading-relaxed">Module combinations or parameter pairings that contradict each other. Example: selecting a public consensus mechanism for a deployment tagged as private or enterprise-grade triggers a conflict signal.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Compliance Alignment</div>
          <div class="text-sm text-foreground leading-relaxed">When a user selects an industry with known regulatory requirements, Intelligence flags configurations missing the modules typically associated with those requirements. Example: a healthcare use case without audit logging enabled receives a specific signal tied to that gap.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Performance vs. Security Tradeoffs</div>
          <div class="text-sm text-foreground leading-relaxed">Configurations where the user has optimised for one dimension at the expense of another in ways that may not be intentional. Example: a very low validator count improves throughput but reduces fault tolerance below recommended thresholds for production deployments.</div>
        </div>
        <div class="flex gap-4 p-4 bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl items-start">
          <div class="text-primary-foreground text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap tracking-wider uppercase shrink-0 mt-0.5 bg-sidebar-primary">Best Practice Deviations</div>
          <div class="text-sm text-foreground leading-relaxed">Configuration patterns that are technically functional but not recommended for production environments. Example: test-appropriate parameter values left in place on a deployment marked as production.</div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Intentional Constraints
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        The following actions are outside the scope of what Intelligence can do, by design:
      </p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Deploy or trigger deployment of any system
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Modify configuration without explicit user action
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Execute governance proposals
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Manage, rotate, or access validator keys
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Access transaction data from any deployed chain
        </li>
        <li class="flex items-start gap-3 text-sm text-foreground">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sidebar-primary/70 shrink-0"></span>
          Operate outside the active configuration session
        </li>
      </ul>

      <div class="rounded-xl border border-sidebar-primary/20 bg-sidebar-primary/5 p-6 my-8 italic text-foreground leading-relaxed">
        Cerulea Intelligence is an advisory system. Every action remains under explicit user and governance control. Advisory-only is a permanent design commitment, not a capability gap. Enterprise buyers should treat it as a feature of the product's accountability model, not a shortcoming of its AI layer.
      </div>
    </div>
  </section>
`
