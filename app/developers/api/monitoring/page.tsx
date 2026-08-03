import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function MonitoringPage() {
  return (
    <div>
      <LayoutTitle title="Monitoring" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={metricsJson} />

      <HtmlRenderer html={timeseriesContent} />
      <CodeBlock label="BASH" code={timeseriesCurl} />

      <NavigationButtons
        next={{
          title: "Error Handling",
          href: "/developers/api/error-handling",
        }}
        previous={{
          title: "Tokens",
          href: "/developers/api/tokens",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    Query real-time and historical metrics for any blockchain in your workspace. All metrics are scraped every 15 seconds and retained for 90 days.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-sidebar-primary/15 text-sidebar-primary">
        GET
      </span>
      <span class="text-sm font-mono text-foreground">/blockchains/:blockchainId/metrics</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Get real-time blockchain metrics
  </p>
`

const metricsJson = `{
  "blockHeight": 1500432,
  "tps": 142,
  "blockTime": "2.1s",
  "validatorUptime": 99.97,
  "mempoolSize": 38,
  "gasPrice": "0.001 GWEI",
  "totalTransactions": 4820193
}`

const timeseriesContent = `
  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4 mt-8">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-sidebar-primary/15 text-sidebar-primary">
        GET
      </span>
      <span class="text-sm font-mono text-foreground">/analytics/timeseries</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Query historical time-series blockchain data
  </p>
`

const timeseriesCurl = `GET /analytics/timeseries?blockchainId=bc_01HXYZ&metric=tps&from=2026-06-01&to=2026-06-14&interval=1h`