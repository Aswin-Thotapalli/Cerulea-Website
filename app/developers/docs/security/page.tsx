import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function Security() {
  return (
    <div>
      <LayoutTitle title="Security Model" des="3 subsections" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        next={{
          title: "Cerulea Intelligence",
          href: "/developers/docs/intelligence",
        }}
        previous={{
          title: "Infrastructure & Deployment",
          href: "/developers/docs/infrastructure",
        }}
      />
    </div>
  )
}

const content = `
  <p class="leading-relaxed mb-4 text-foreground">Security in Cerulea is structured across runtime, governance, infrastructure, and operational layers. The security posture of a system depends on its deployment type and the configuration decisions made during the build lifecycle.</p>
  <section id="control-boundary" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Operational vs Data Control Boundary</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-2 text-foreground">Cerulea manages</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Deployment orchestration</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Upgrade management</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Monitoring surface provisioning</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Lifecycle control tooling</span></li>
  </ul></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-2 text-foreground">Enterprise owns</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Transaction execution and state</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Smart contract state</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Validator key management</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>All enterprise data within the deployed system</span></li>
  </ul></div>
  </div>
  <div class="rounded-lg border px-5 py-4 text-sm leading-relaxed mb-6 bg-sidebar-primary/5 border-sidebar-primary/20 text-foreground">Cerulea does not read transaction payloads, access smart contract state, or control enterprise validator keys. This boundary is enforced architecturally, not contractually.</div>
  </section>
  <section id="data-sovereignty" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Enterprise Data Sovereignty</h2>
  <p class="leading-relaxed mb-4 text-foreground">Organizations retain exclusive control over transaction content, validator key management, network exposure boundaries, governance participation, and all infrastructure decisions. Cerulea systems are built so that the platform cannot access data it has no operational need to touch.</p>
  </section>
  <section id="compliance" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Compliance Positioning</h2>
  <ul class="space-y-2 mb-6 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Role-based access control for permissioned participation</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Governance-controlled upgrade and change management</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Audit trails for all governance actions and configuration changes</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Enterprise-defined compliance rule enforcement at the module level</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Cross-border governance adaptability for multi-jurisdiction deployments</span></li>
  </ul>
  <div class="rounded-lg border px-5 py-4 text-sm leading-relaxed mb-6 bg-sidebar-primary/5 border-sidebar-primary/20 text-foreground">Cerulea does not provide legal compliance certifications. It provides the structural controls through which organizations can implement and enforce their own compliance requirements.</div>
  </section>
`