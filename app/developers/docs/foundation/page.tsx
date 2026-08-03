import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"



export default function IndexPage() {
  return (
    <div>
      <LayoutTitle title="Foundation" des="3 subsections" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        next={{
          title: "Decision Frameworks",
          href: "/developers/docs/decision-frameworks",
        }}
      />
    </div>
  )
}


const content = `
  <div data-aos="fade-up" class="flex flex-wrap gap-2 mb-8">
    <a  href="#what-cerulea-is" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">
      1. What Cerulea Is
    </a>
    <a href="#core-philosophy" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">
      2. Core Philosophy
    </a>
    <a href="#configurable-decentralization" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">
      3. Configurable Decentralization
    </a>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Cerulea is a Blockchain Infrastructure Platform. It enables organizations and developers to build, deploy, and operate public and private blockchain systems without writing code.
  </p>
  <p data-aos="fade-up" class="leading-relaxed mb-12 text-foreground">
    Traditional blockchain development requires coordinating runtime engineering, validator configuration, governance wiring, infrastructure provisioning, DevOps pipelines, monitoring stacks, and integration layers across multiple independent tools and teams. Cerulea replaces that fragmented process with a unified configuration framework.
  </p>

  <section data-aos="fade-up" id="what-cerulea-is" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      1. What Cerulea Is
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
      Cerulea is a fully no-code blockchain infrastructure platform, it does not simplify blockchain by hiding it, it restructures blockchain architecture into a controlled configuration framework. Users work through Cerulea Studio, which transforms structured configuration into a fully operational blockchain environment. No code is written at any stage.
    </p>

    <p data-aos="fade-up" class="leading-relaxed mb-3 text-foreground">
      When a deployment is triggered, Cerulea generates and provisions:
    </p>

    <ul data-aos="fade-up" class="space-y-2 mb-8 pl-1">
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>A functioning blockchain network (public or private)</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>Runtime configuration and genesis parameters</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>Initialization and governance logic</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>Smart contract execution capability</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>API and RPC access layers</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>Monitoring and observability infrastructure</span>
      </li>
      <li class="flex gap-2 leading-relaxed text-foreground">
        <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
        <span>Operational dashboard and explorer surfaces</span>
      </li>
    </ul>

    <div data-aos="fade-up" class="rounded-lg border px-5 py-4 text-sm leading-relaxed bg-sidebar-primary/5 border-sidebar-primary/20 text-foreground">
      Cerulea is purpose-built for blockchain infrastructure - not smart contract building, token launching, DeFi applications, or general SaaS hosting. It provides the execution, governance, and infrastructure layer that external interfaces connect to.
    </div>
  </section>

  <section data-aos="fade-up" id="core-philosophy" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-5 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      2. Core Philosophy
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div data-aos="fade-up" data-aos-delay="0" class="rounded-lg border p-5 border-border">
        <div class="mb-3 text-lg text-sidebar-primary">&#9671;</div>
        <h3 class="font-semibold mb-1.5 text-foreground">Determinism</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">
          Every system is the result of explicit configuration. No emergent deployments and no invisible defaults influencing runtime behavior.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" class="rounded-lg border p-5 border-border">
        <div class="mb-3 text-lg text-sidebar-primary">&#8644;</div>
        <h3 class="font-semibold mb-1.5 text-foreground">Separation</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">
          Until deployment is triggered, nothing exists operationally. Configuration is structured, versioned, and stored, but not executed.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="200" class="rounded-lg border p-5 border-border">
        <div class="mb-3 text-lg text-sidebar-primary">&#8722;</div>
        <h3 class="font-semibold mb-1.5 text-foreground">Reduced Dependency</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">
          Cerulea removes the requirement to express architecture through code. Complex systems can still be built through structured configuration.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="300" class="rounded-lg border p-5 border-border">
        <div class="mb-3 text-lg text-sidebar-primary">&#9678;</div>
        <h3 class="font-semibold mb-1.5 text-foreground">Configurable Decentralization</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">
          Decentralization is an architectural decision. Validator openness, governance weighting, and compliance enforcement are all configurable.
        </p>
      </div>
    </div>
  </section>

  <section data-aos="fade-up" id="configurable-decentralization">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      3. Configurable Decentralization
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
      Cerulea treats decentralization as an engineering variable, not an ideology. The degree of openness, permissionlessness, and censorship resistance is configurable at the architecture selection stage. Both ends of the spectrum, fully permissionless public L1 and fully permissioned private chain, are first-class deployment targets.
    </p>

    <div data-aos="fade-up" class="rounded-lg border overflow-hidden border-border">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-sidebar-primary/5">
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Dimension</th>
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Public L1</th>
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Private Chain</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-medium text-foreground">Validator Entry</td>
            <td class="px-5 py-3 text-muted-foreground">Open staking</td>
            <td class="px-5 py-3 text-muted-foreground">Permissioned allowlist</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-medium text-foreground">Transaction Visibility</td>
            <td class="px-5 py-3 text-muted-foreground">Fully public</td>
            <td class="px-5 py-3 text-muted-foreground">Operator-controlled</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-medium text-foreground">Governance</td>
            <td class="px-5 py-3 text-muted-foreground">Token-weighted voting</td>
            <td class="px-5 py-3 text-muted-foreground">Federated or multisig</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-medium text-foreground">Compliance Control</td>
            <td class="px-5 py-3 text-muted-foreground">Limited</td>
            <td class="px-5 py-3 text-muted-foreground">Full operator control</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-medium text-foreground">Trust Model</td>
            <td class="px-5 py-3 text-muted-foreground">Cryptographic + economic</td>
            <td class="px-5 py-3 text-muted-foreground">Contractual + cryptographic</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`