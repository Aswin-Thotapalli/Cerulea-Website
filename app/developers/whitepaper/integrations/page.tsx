import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperIntegrationsPage() {
  return (
    <div>
      <LayoutTitle title="Integrations" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Competitive Analysis",
          href: "/developers/whitepaper/competitive",
        }}
        next={{
          title: "Enterprise Operating Model",
          href: "/developers/whitepaper/enterprise",
        }}
      />
    </div>
  )
}

const content = `
  <section data-aos="fade-up" id="integrations" class="mb-14">
    <h2 data-aos="fade-up" class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Integrations
    </h2>
    
    <p data-aos="fade-up" class="leading-relaxed mb-6 text-foreground text-justify">
      Integrations allow Cerulea deployments to interact with external systems at the operational boundary. They do not override governance or runtime behavior.
    </p>

    <div data-aos="fade-up" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      
      <!-- Payments -->
      <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
        <h3 class="font-semibold text-sidebar-primary mb-4 pb-2 border-b border-sidebar-primary/10">Payments</h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Stripe</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>PayPal</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Coinbase Commerce</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Lemon Squeezy</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Razorpay</li>
        </ul>
      </div>

      <!-- Authentication -->
      <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
        <h3 class="font-semibold text-sidebar-primary mb-4 pb-2 border-b border-sidebar-primary/10">Authentication</h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Clerk</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Privy</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Dynamic</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Auth0</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Firebase Auth</li>
        </ul>
      </div>

      <!-- Communication -->
      <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
        <h3 class="font-semibold text-sidebar-primary mb-4 pb-2 border-b border-sidebar-primary/10">Communication</h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>SendGrid</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Resend</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Twilio</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>XMTP</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Push Protocol</li>
        </ul>
      </div>

      <!-- Storage -->
      <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
        <h3 class="font-semibold text-sidebar-primary mb-4 pb-2 border-b border-sidebar-primary/10">Storage</h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>AWS S3</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Pinata (IPFS)</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Irys (Arweave)</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Lighthouse (Filecoin)</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Supabase Storage</li>
        </ul>
      </div>

      <!-- Data & Oracles -->
      <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
        <h3 class="font-semibold text-sidebar-primary mb-4 pb-2 border-b border-sidebar-primary/10">Data &amp; Oracles</h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Chainlink</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>The Graph</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Alchemy</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Moralis</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Pyth Network</li>
        </ul>
      </div>

      <!-- Analytics -->
      <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
        <h3 class="font-semibold text-sidebar-primary mb-4 pb-2 border-b border-sidebar-primary/10">Analytics</h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>PostHog</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Segment</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Dune API</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Google Analytics 4</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Mixpanel</li>
        </ul>
      </div>

      <!-- Webhooks -->
      <div class="bg-sidebar-primary/5 border border-sidebar-primary/20 rounded-xl p-5">
        <h3 class="font-semibold text-sidebar-primary mb-4 pb-2 border-b border-sidebar-primary/10">Webhooks</h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Slack</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Discord</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Telegram Bot</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Zapier</li>
          <li class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 rounded-full bg-sidebar-primary/70"></span>Custom Endpoint</li>
        </ul>
      </div>
    </div>
  </section>
`
