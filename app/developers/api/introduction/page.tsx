import HtmlRenderer from "@/components/HtmlRender"
import CodeBlock from "../../component/CodeBlock"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function IntroductionPage() {
  return (
    <div>
      <LayoutTitle title="Introduction" des="https://api.cerulea.app/v1" />

      <HtmlRenderer html={introContent} />

      <CodeBlock code="https://api.cerulea.app/v1" />

      <HtmlRenderer html={restContent} />
      <NavigationButtons
        next={{
          title: "Authentication",
          href: "/developers/api/authentication",
        }}
      />
    </div>
  )
}

const introContent = `
  <p data-aos="fade-up" class="leading-relaxed mb-2 text-foreground">
    The Cerulea API provides programmatic access to all platform capabilities, from deploying blockchain networks and managing smart contracts to querying real-time metrics and configuring governance. The API combines RESTful endpoints for resource management with JSON-RPC 2.0 for direct blockchain interaction.
  </p>
  <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
    Base URL for all API calls:
  </p>
`

const restContent = `
  <section data-aos="fade-up" id="capabilities" class="mb-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Capabilities
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div data-aos="fade-up" data-aos-delay="0" class="rounded-lg border p-5 border-border bg-card">
        <h3 class="font-semibold mb-1.5 text-foreground">Complete dApps</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">Build full-stack dApps with smart contracts, tokens, and frontend interfaces.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="70" class="rounded-lg border p-5 border-border bg-card">
        <h3 class="font-semibold mb-1.5 text-foreground">Private Blockchains</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">Deploy custom blockchain networks with configurable consensus mechanisms.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="140" class="rounded-lg border p-5 border-border bg-card">
        <h3 class="font-semibold mb-1.5 text-foreground">Validator Management</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">Manage validators, governance, and network parameters programmatically.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="210" class="rounded-lg border p-5 border-border bg-card">
        <h3 class="font-semibold mb-1.5 text-foreground">Real-time Monitoring</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">Query and stream live blockchain performance data and analytics.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="280" class="rounded-lg border p-5 border-border bg-card">
        <h3 class="font-semibold mb-1.5 text-foreground">Modular Architecture</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">Enable and configure DeFi, NFT, DAO, and identity modules via API.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="350" class="rounded-lg border p-5 border-border bg-card">
        <h3 class="font-semibold mb-1.5 text-foreground">CI/CD Integration</h3>
        <p class="text-sm leading-relaxed text-muted-foreground">Automate deployments and upgrades with GitHub integration support.</p>
      </div>
    </div>
  </section>

  <section data-aos="fade-up" id="api-architecture" class="mb-12">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      API Architecture
    </h2>

    <p data-aos="fade-up" class="leading-relaxed mb-4 text-foreground">
      Cerulea uses a hybrid architecture combining RESTful endpoints for resource management with JSON-RPC 2.0 for blockchain interactions, intuitive REST for infrastructure management, powerful RPC for direct blockchain operations.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div data-aos="fade-up" data-aos-delay="0" class="rounded-lg border p-5 border-border bg-card">
        <h3 class="font-semibold mb-3 text-foreground">REST API</h3>
        <ul class="space-y-2">
          <li class="flex gap-2 text-sm text-foreground">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
            <span>Resource creation and management</span>
          </li>
          <li class="flex gap-2 text-sm text-foreground">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
            <span>Authentication and access control</span>
          </li>
          <li class="flex gap-2 text-sm text-foreground">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
            <span>Workspace and project operations</span>
          </li>
          <li class="flex gap-2 text-sm text-foreground">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
            <span>Webhook registration</span>
          </li>
        </ul>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" class="rounded-lg border p-5 border-border bg-card">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-semibold text-foreground">JSON-RPC 2.0</h3>
          <span class="text-xs font-mono px-2 py-0.5 rounded bg-sidebar-primary/10 text-sidebar-primary">POST /rpc</span>
        </div>
        <ul class="space-y-2">
          <li class="flex gap-2 text-sm text-foreground">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
            <span>Direct blockchain interaction</span>
          </li>
          <li class="flex gap-2 text-sm text-foreground">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
            <span>Block and transaction queries</span>
          </li>
          <li class="flex gap-2 text-sm text-foreground">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
            <span>Contract execution and calls</span>
          </li>
          <li class="flex gap-2 text-sm text-foreground">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-muted-foreground"></span>
            <span>Transaction simulation</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section data-aos="fade-up" id="quick-stats">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Quick Stats
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div data-aos="fade-up" data-aos-delay="0" class="rounded-lg border p-6 border-border bg-card text-center">
        <div class="text-2xl font-bold text-sidebar-primary mb-1">40+</div>
        <div class="text-xs text-muted-foreground">REST Endpoints</div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100" class="rounded-lg border p-6 border-border bg-card text-center">
        <div class="text-2xl font-bold text-sidebar-primary mb-1">7</div>
        <div class="text-xs text-muted-foreground">RPC Methods</div>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" class="rounded-lg border p-6 border-border bg-card text-center">
        <div class="text-2xl font-bold text-sidebar-primary mb-1">6</div>
        <div class="text-xs text-muted-foreground">Webhook Events</div>
      </div>
    </div>
  </section>
`