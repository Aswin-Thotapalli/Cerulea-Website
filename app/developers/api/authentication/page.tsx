import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function AuthenticationPage() {
  return (
    <div>
      <LayoutTitle title="Authentication" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />

      <CodeBlock code={apiKeyCurl} />

      <HtmlRenderer html={oauthContent} />

      <CodeBlock code={oauthCurl} />

      <HtmlRenderer html={scopesContent} />

      <NavigationButtons
        previous={{
          title: "Introduction",
          href: "/developers/api/introduction",
        }}
        next={{
          title: "Core Rest API",
          href: "/developers/api/rest",
        }}
      />
    </div>
  )
}



const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-12 text-foreground">
    Cerulea uses a dual authentication system, API keys for server-to-server communication and OAuth 2.0 for user-facing applications and third-party integrations.
  </p>

  <section data-aos="fade-up" id="api-key-authentication" class="mb-4">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      API Key Authentication
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
      For server-to-server communication and automated workflows.
    </p>

    <div data-aos="fade-up" class="rounded-lg border border-border bg-card px-4 py-3 mb-6">
      <div class="flex items-center gap-2 mb-1.5">
        <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-chart-2/15 text-chart-2">
          POST
        </span>
        <span class="text-sm font-mono text-foreground">/auth/api-keys</span>
      </div>
      <p class="text-sm text-muted-foreground">
        Create a new API key with custom scopes and expiration
      </p>
    </div>

    <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
      Include your API key in every request header:
    </p>
  </section>
`

const apiKeyCurl = `curl https://api.cerulea.app/v1/workspaces \\
  -H "X-API-Key: ck_live_your_api_key_here" \\
  -H "Content-Type: application/json"`

const oauthContent = `
  <section data-aos="fade-up" id="oauth-2-0" class="mb-4 mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      OAuth 2.0
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
      For user-facing applications and third-party integrations.
    </p>
  </section>
`

const oauthCurl = `curl -X POST https://api.cerulea.app/oauth/token \\
  -d "grant_type=authorization_code" \\
  -d "code=AUTH_CODE" \\
  -d "client_id=YOUR_CLIENT_ID" \\
  -d "redirect_uri=https://yourapp.com/callback"`

const scopesContent = `
  <section data-aos="fade-up" id="available-scopes" class="mt-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Available Scopes
    </h2>

    <div data-aos="fade-up" class="rounded-lg border overflow-hidden border-border">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-sidebar-primary/5">
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Scope</th>
            <th class="text-left font-medium px-5 py-3 text-sidebar-primary">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">workspace:read</td>
            <td class="px-5 py-3 text-muted-foreground">Read workspace data</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">workspace:write</td>
            <td class="px-5 py-3 text-muted-foreground">Create and modify workspaces</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">blockchain:read</td>
            <td class="px-5 py-3 text-muted-foreground">Query blockchain data</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">blockchain:write</td>
            <td class="px-5 py-3 text-muted-foreground">Deploy and manage blockchains</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">blockchain:deploy</td>
            <td class="px-5 py-3 text-muted-foreground">Deploy smart contracts</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">validator:read</td>
            <td class="px-5 py-3 text-muted-foreground">View validators</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">validator:write</td>
            <td class="px-5 py-3 text-muted-foreground">Manage validators</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">governance:read</td>
            <td class="px-5 py-3 text-muted-foreground">View governance proposals</td>
          </tr>
          <tr class="border-t border-border">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">governance:write</td>
            <td class="px-5 py-3 text-muted-foreground">Create and vote on proposals</td>
          </tr>
          <tr class="border-t border-border bg-sidebar-primary/5">
            <td class="px-5 py-3 font-mono text-xs text-sidebar-primary">admin</td>
            <td class="px-5 py-3 text-muted-foreground">Full administrative access</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`