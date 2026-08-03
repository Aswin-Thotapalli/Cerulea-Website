import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function RestPage() {
  return (
    <div>
      <LayoutTitle title="Core Rest API" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={responseFormatContent} />
      <CodeBlock label="JSON" code={responseFormatJson} />

      <HtmlRenderer html={paginationContent} />
      <CodeBlock label="JSON" code={paginationJson} />

      <HtmlRenderer html={healthCheckContent} />
      <CodeBlock label="JSON" code={healthCheckJson} />

      <NavigationButtons
        next={{
          title: "RPC Methods",
          href: "/developers/api/rpc-methods",
        }}
        previous={{
          title: "Authentication",
          href: "/developers/api/authentication",
        }}
      />
    </div>
  )
}

const responseFormatContent = `
  <section data-aos="fade-up" id="standard-response-format" class="mb-4">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Standard Response Format
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
      All API responses follow a consistent envelope structure.
    </p>
  </section>
`

const responseFormatJson = `{
  "success": true,
  "data": { ... },
  "meta": {
    "requestId": "req_01HXYZ123",
    "timestamp": "2026-06-15T10:30:00Z",
    "version": "1.0"
  }
}`

const paginationContent = `
  <section data-aos="fade-up" id="pagination" class="mb-4 mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Pagination
    </h2>

    <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
      <div class="flex items-center gap-2">
        <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-sidebar-primary/10 text-sidebar-primary">
          GET
        </span>
        <span class="text-sm font-mono text-foreground">/resources?page=1&amp;limit=50&amp;sort=created_at:desc</span>
      </div>
    </div>

    <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
      List resources with pagination and sorting
    </p>
  </section>
`

const paginationJson = `{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 243,
    "pages": 5,
    "hasNext": true
  }
}`

const healthCheckContent = `
  <section data-aos="fade-up" id="health-check" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Health Check
    </h2>

    <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
      <div class="flex items-center gap-2">
        <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-sidebar-primary/10 text-sidebar-primary">
          GET
        </span>
        <span class="text-sm font-mono text-foreground">/health</span>
      </div>
    </div>

    <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
      Check API health and service status
    </p>
  </section>
`

const healthCheckJson = `{
  "status": "operational",
  "services": {
    "api": "healthy",
    "blockchain": "healthy",
    "metrics": "healthy"
  },
  "latency": { "p50": "12ms", "p99": "48ms" },
  "uptime": "99.98%"
}`