import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function ErrorHandlingPage() {
  return (
    <div>
      <LayoutTitle title="Error Handling" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={errorResponseJson} />

      <HtmlRenderer html={errorCodesContent} />

      <NavigationButtons
        previous={{
          title: "Monitoring",
          href: "/developers/api/monitoring",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-12 text-foreground">
    All errors are returned with a consistent structure. The
    <code class="text-xs font-mono px-1.5 py-0.5 rounded bg-sidebar-primary/10 text-sidebar-primary">error.code</code>
    field is stable across API versions and safe to branch on.
  </p>

  <section data-aos="fade-up" id="error-response-format" class="mb-4">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Error Response Format
    </h2>
  </section>
`

const errorResponseJson = `{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request body failed validation",
    "details": [
      { "field": "consensus", "issue": "must be one of: poa, pos, dpos, pbft, raft" }
    ],
    "requestId": "req_01HXYZ456"
  }
}`

const errorCodesContent = `
  <section data-aos="fade-up" id="common-error-codes" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Common Error Codes
    </h2>

    <div data-aos="fade-up" class="rounded-lg border overflow-hidden border-border mb-6">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-sidebar-primary/5">
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">HTTP Code</th>
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Error Code</th>
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">400</span>
            </td>
            <td class="px-5 py-3 text-foreground">BAD_REQUEST</td>
            <td class="px-5 py-3 text-muted-foreground">Invalid request parameters</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">401</span>
            </td>
            <td class="px-5 py-3 text-foreground">UNAUTHORIZED</td>
            <td class="px-5 py-3 text-muted-foreground">Invalid or missing authentication</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">403</span>
            </td>
            <td class="px-5 py-3 text-foreground">FORBIDDEN</td>
            <td class="px-5 py-3 text-muted-foreground">Insufficient permissions for the requested operation</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">404</span>
            </td>
            <td class="px-5 py-3 text-foreground">NOT_FOUND</td>
            <td class="px-5 py-3 text-muted-foreground">Resource not found</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">422</span>
            </td>
            <td class="px-5 py-3 text-foreground">VALIDATION_ERROR</td>
            <td class="px-5 py-3 text-muted-foreground">Request body failed validation</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">429</span>
            </td>
            <td class="px-5 py-3 text-foreground">RATE_LIMITED</td>
            <td class="px-5 py-3 text-muted-foreground">Rate limit exceeded, retry after the indicated delay</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3">
              <span class="font-mono text-xs px-2 py-1 rounded bg-sidebar-primary/10 text-sidebar-primary">500</span>
            </td>
            <td class="px-5 py-3 text-foreground">INTERNAL_ERROR</td>
            <td class="px-5 py-3 text-muted-foreground">Internal server error</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div data-aos="fade-up" class="rounded-lg border-l-4 border-sidebar-primary bg-sidebar-primary/5 px-5 py-4 text-sm leading-relaxed text-foreground">
      All 4xx errors are safe to handle deterministically. For 429, read the Retry-After header for the backoff delay. For 500, retry with exponential backoff, they are transient.
    </div>
  </section>
`