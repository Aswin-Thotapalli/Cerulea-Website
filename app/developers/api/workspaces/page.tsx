import React from "react"
import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function WorkspacesPage() {
  return (
    <div>
      <LayoutTitle title="Workspaces" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />
      <CodeBlock label="JSON" code={workspaceCreateJson} />

      <HtmlRenderer html={projectContent} />
      <CodeBlock label="JSON" code={projectCreateJson} />

      <NavigationButtons
        next={{
          title: "dApp Builder",
          href: "/developers/api/dapp-builder",
        }}
        previous={{
          title: "Webhooks",
          href: "/developers/api/webhooks",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground">
    Organise your blockchain infrastructure into workspaces and projects. A workspace is the top-level container for all resources, team members, and billing.
  </p>

  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/workspaces</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Create a new workspace
  </p>
`

const workspaceCreateJson = `{
  "name": "Acme Financial",
  "plan": "enterprise",
  "region": "us-east-1",
  "compliance": ["gdpr", "soc2"]
}`

const projectContent = `
  <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-4 mt-8">
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
        POST
      </span>
      <span class="text-sm font-mono text-foreground">/workspaces/:workspaceId/projects</span>
    </div>
  </div>

  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Create a new project within a workspace
  </p>
`

const projectCreateJson = `{
  "name": "Settlement Network",
  "type": "private-chain",
  "environment": "production"
}`