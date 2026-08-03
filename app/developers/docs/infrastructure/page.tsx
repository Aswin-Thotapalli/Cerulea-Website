import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function Infrastructure() {
  return (
    <div>
      <LayoutTitle title="Infrastructure & Deployment" des="3 subsections" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        next={{
          title: "Security Model",
          href: "/developers/docs/security",
        }}
        previous={{
          title: "Governance",
          href: "/developers/docs/governance",
        }}
      />
    </div>
  )
}


const content = `
  <p class="leading-relaxed mb-4 text-foreground">Infrastructure and deployment define where and how Cerulea systems physically exist and operate.</p>
  <section id="hosting-models" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Hosting Models</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Cloud</h3><p class="text-sm leading-relaxed text-muted-foreground">Enterprise-managed nodes on AWS, Azure, or Google Cloud. Flexible scaling with cloud provider SLAs.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">On-Premise</h3><p class="text-sm leading-relaxed text-muted-foreground">Validator infrastructure runs inside your own data centers. Common for government and regulated enterprise deployments.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Hybrid</h3><p class="text-sm leading-relaxed text-muted-foreground">Cloud and on-premise infrastructure combined within the same Private Chain, with governance control over the full validator set.</p></div>
    <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Public L1</h3><p class="text-sm leading-relaxed text-muted-foreground">Infrastructure operated by independent network participants. No hosting model selection required from the deploying organization.</p></div>
  </div>
  </section>
  <section id="monitoring" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Monitoring and Observability</h2>
  <ul class="space-y-2 mb-6 pl-1">
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Validator uptime and participation tracking</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Transaction throughput and latency metrics</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Resource utilization across infrastructure nodes</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Governance activity logs and proposal status</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Integration event tracking and status</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Infrastructure health across all deployed nodes</span></li>
    <li class="flex gap-2 leading-relaxed text-foreground"><span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span><span>Alert and notification systems for threshold breaches</span></li>
  </ul>
  </section>
  <section id="disaster-recovery" class="mb-12">
  <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Disaster Recovery and Rollback</h2>
  <p class="leading-relaxed mb-4 text-foreground">Because all Cerulea configurations are versioned, rollback to a prior stable state is possible through the governance process. For infrastructure-level failures, node auto-healing mechanisms detect and restart failing nodes automatically. The distributed validator model on Public L1 ensures no single point of failure.</p>
  </section>
`