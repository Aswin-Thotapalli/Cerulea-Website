import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function CeruleaStudio() {
  return (
    <div>
      <LayoutTitle title="Cerulea Studio" des="4 subsections" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        next={{
          title: "Build Lifecycle",
          href: "/developers/docs/build-lifecycle",
        }}
        previous={{
          title: "Decision Frameworks",
          href: "/developers/docs/decision-frameworks",
        }}
      />
    </div>
  )
}

const content = `
  <p class="leading-relaxed mb-4 text-foreground">Cerulea Studio is the core environment through which all blockchain systems on Cerulea are created, configured, and deployed. It is not a companion interface. It is the only way to build on Cerulea.</p>
  <section id="studio-overview" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>1. Studio Overview</h2>
  <p class="leading-relaxed mb-4 text-foreground">Cerulea Studio replaces the fragmented engineering process of traditional blockchain development with a unified, no-code configuration environment. Smart contracts, validator configuration, runtime compilation, infrastructure provisioning, deployment pipelines, monitoring setup, and governance wiring are all handled here.</p>
  </section>
  <section id="architecture-selection" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>2. Architecture Selection</h2>
  <p class="leading-relaxed mb-4 text-foreground">The first decision inside Cerulea Studio defines the architectural topology of the system. This choice determines validator structure, governance mechanics, infrastructure ownership, compliance posture, and operational control boundaries.</p>
  <p class="leading-relaxed mb-4 text-foreground">Users must select one of two primary deployment models: Cerulea Public L1 or Cerulea Private Chain. This is not a cosmetic distinction. It defines how the system will exist in production.</p>
  </section>
  <section id="module-configuration" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>3. Module Configuration Framework</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div class="rounded-lg border p-5 border-sidebar-primary/30 bg-sidebar-primary/5"><h3 class="font-semibold mb-2 text-foreground">Infrastructure Modules</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Consensus configuration</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Validator management</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Upgrade orchestration</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Governance hooks</span></li>
  </ul></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-2 text-foreground">Application Modules</h3>  <ul class="space-y-2 mb-0 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Token systems</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Identity frameworks</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Payment logic</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Compliance enforcement</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Data management</span></li>
  </ul></div>
  </div>
  <p class="leading-relaxed mb-4 text-foreground">Modules cannot be arbitrarily extended through custom code. They represent the full set of validated capabilities available within the platform.</p>
  </section>
  <section id="deployment-engine" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>4. Deployment Engine</h2>
  <p class="leading-relaxed mb-4 text-foreground">Deployment is the materialization stage of the Cerulea lifecycle. It transforms structured configuration into a functioning blockchain environment in a single atomic activation:</p>
  <ul class="space-y-2 mb-6 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Provisioning infrastructure resources</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Initializing runtime configuration and genesis state</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Activating validator structures and enabling governance mechanisms</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Establishing API and RPC interfaces</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Connecting integrations and activating monitoring dashboards</span></li>
  </ul>
  <div class="rounded-lg border px-5 py-4 text-sm leading-relaxed mb-6 bg-sidebar-primary/5 border-sidebar-primary/20 text-foreground">Deployment is a full activation, not an incremental process. The blockchain environment becomes operational only after deployment completes successfully.</div>
  </section>
`
