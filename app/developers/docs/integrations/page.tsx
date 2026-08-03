import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function Integrations() {
  return (
    <div>
      <LayoutTitle title="Integrations" des="7 categories" />
      <div className="min-h-[60vh]">
        <div className="min-h-[60vh]">
          <HtmlRenderer html={content} />
        </div>
      </div>
      <NavigationButtons
        next={{
          title: "APIs & Platform Access",
          href: "/developers/docs/apis",
        }}
        previous={{
          title: "Cerulea Intelligence",
          href: "/developers/docs/intelligence",
        }}
      />
    </div>
  )
}

const content = `
  <div data-aos="fade-up" class="flex flex-wrap gap-2 mb-8">
    <a href="#payments" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">Payment Integrations</a>
    <a href="#auth" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">Authentication Integrations</a>
    <a href="#comms" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">Communication Integrations</a>
    <a href="#storage" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">Storage Integrations</a>
    <a href="#oracles" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">Data &amp; Oracle Integrations</a>
    <a href="#analytics" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">Analytics Integrations</a>
    <a href="#webhooks" class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-sidebar-primary/30 bg-sidebar-primary/5 text-sidebar-primary hover:bg-sidebar-primary/15 hover:border-sidebar-primary/50 transition-all cursor-pointer">Webhook Integrations</a>
  </div>
  <p data-aos="fade-up" class="leading-relaxed mb-10 text-foreground">Cerulea connects blockchain execution with the external tools your organization already uses. Integrations are configured, not coded: each provider is wired to on-chain events, deployment triggers, and governance actions without writing integration middleware.</p>
  <section data-aos="fade-up" id="payments" class="mb-14">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-3 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Payment Integrations</h2>
    <p class="leading-relaxed mb-5 text-foreground">Connect blockchain execution with real-world payment infrastructure through transaction-triggered events and on-chain settlement confirmation.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Stripe</h3><p class="text-sm leading-relaxed text-muted-foreground">Industry-standard online payment processing and subscription management, suited for SaaS-adjacent blockchain products.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">PayPal</h3><p class="text-sm leading-relaxed text-muted-foreground">Broad consumer payment acceptance including PayPal balance, Venmo, and Pay Later for user-facing applications.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Coinbase Commerce</h3><p class="text-sm leading-relaxed text-muted-foreground">Native crypto payment acceptance directly to a self-custodied wallet, suited for Web3-native monetization.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Lemon Squeezy</h3><p class="text-sm leading-relaxed text-muted-foreground">Merchant-of-record service handling global tax compliance for blockchain products selling internationally.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Razorpay</h3><p class="text-sm leading-relaxed text-muted-foreground">Full-stack payment gateway for India, supporting UPI, cards, and net banking for India-based deployments.</p></div>
    </div>
  </section>
  <section data-aos="fade-up" id="auth" class="mb-14">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-3 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Authentication Integrations</h2>
    <p class="leading-relaxed mb-5 text-foreground">Define who can interact with a deployed system, enforce role boundaries, and support enterprise identity frameworks.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Clerk</h3><p class="text-sm leading-relaxed text-muted-foreground">Full-stack user management with pre-built UI components and APIs, ideal for rapid identity setup.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Privy</h3><p class="text-sm leading-relaxed text-muted-foreground">Web3-native onboarding that creates embedded wallets for users, removing external wallet friction.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Dynamic</h3><p class="text-sm leading-relaxed text-muted-foreground">Multi-chain wallet authentication supporting wallet-based and social login flows for hybrid audiences.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Auth0</h3><p class="text-sm leading-relaxed text-muted-foreground">Enterprise-grade identity with SSO, MFA, and compliance-aligned access control for regulated deployments.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Firebase Auth</h3><p class="text-sm leading-relaxed text-muted-foreground">Google's scalable identity platform for web and mobile, suited for high-volume consumer-facing deployments.</p></div>
    </div>
  </section>
  <section data-aos="fade-up" id="comms" class="mb-14">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-3 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Communication Integrations</h2>
    <p class="leading-relaxed mb-5 text-foreground">Enable event-driven alerts, governance notifications, and operational communications routed to stakeholders in real time.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">SendGrid</h3><p class="text-sm leading-relaxed text-muted-foreground">High-deliverability transactional email at scale for governance notifications and system alerts.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Resend</h3><p class="text-sm leading-relaxed text-muted-foreground">Developer-first email API with modern tooling and React-based email templates.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Twilio</h3><p class="text-sm leading-relaxed text-muted-foreground">SMS, WhatsApp, and Voice APIs for multi-channel operational alerting and user communications.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">XMTP</h3><p class="text-sm leading-relaxed text-muted-foreground">Secure, decentralized Web3 messaging protocol enabling wallet-to-wallet communication tied to on-chain identity.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Push Protocol</h3><p class="text-sm leading-relaxed text-muted-foreground">Cross-chain push notification and messaging layer linked to blockchain events.</p></div>
    </div>
  </section>
  <section data-aos="fade-up" id="storage" class="mb-14">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-3 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Storage Integrations</h2>
    <p class="leading-relaxed mb-5 text-foreground">Connect to external storage systems for off-chain data management, asset persistence, and compliance-aligned data retention.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">AWS S3</h3><p class="text-sm leading-relaxed text-muted-foreground">Standard enterprise-grade object storage for reliable, scalable off-chain data persistence.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Pinata</h3><p class="text-sm leading-relaxed text-muted-foreground">IPFS pinning service for NFT metadata and decentralized content across the IPFS network.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Irys (Arweave)</h3><p class="text-sm leading-relaxed text-muted-foreground">Permanent, censorship-resistant data storage suited for immutable record-keeping requirements.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Lighthouse</h3><p class="text-sm leading-relaxed text-muted-foreground">Perpetual file storage on Filecoin backed by cryptographic storage proofs for compliance-driven retention.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Supabase Storage</h3><p class="text-sm leading-relaxed text-muted-foreground">File storage integrated with Postgres row-level security for deployments combining on-chain and structured off-chain data.</p></div>
    </div>
  </section>
  <section data-aos="fade-up" id="oracles" class="mb-14">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-3 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Data &amp; Oracle Integrations</h2>
    <p class="leading-relaxed mb-5 text-foreground">Allow on-chain logic to reference verified external data without compromising runtime determinism.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Chainlink</h3><p class="text-sm leading-relaxed text-muted-foreground">The leading decentralized oracle network for tamper-resistant price feeds, verifiable randomness, and external API connectivity.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">The Graph</h3><p class="text-sm leading-relaxed text-muted-foreground">Blockchain data indexing with subgraphs for efficient historical queries and real-time event tracking.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Alchemy</h3><p class="text-sm leading-relaxed text-muted-foreground">Full-stack Web3 development platform providing node infrastructure, enhanced APIs, and blockchain analytics.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Moralis</h3><p class="text-sm leading-relaxed text-muted-foreground">Enterprise-grade Web3 API suite covering NFT data, token balances, transaction history, and real-time event streaming.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Pyth Network</h3><p class="text-sm leading-relaxed text-muted-foreground">High-frequency real-time market data oracle with sub-second price updates across equities, crypto, FX, and commodities.</p></div>
    </div>
  </section>
  <section data-aos="fade-up" id="analytics" class="mb-14">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-3 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Analytics Integrations</h2>
    <p class="leading-relaxed mb-5 text-foreground">Provide operational visibility, usage intelligence, and behavioral data to understand how your blockchain systems are being used.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">PostHog</h3><p class="text-sm leading-relaxed text-muted-foreground">Open-source product analytics with feature flags and session recording for teams needing full data ownership.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Segment</h3><p class="text-sm leading-relaxed text-muted-foreground">Customer data platform routing event streams to any downstream analytics, marketing, or data warehouse tool.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Dune API</h3><p class="text-sm leading-relaxed text-muted-foreground">SQL-based blockchain data analytics enabling custom dashboards and queries over indexed on-chain data.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Google Analytics 4</h3><p class="text-sm leading-relaxed text-muted-foreground">Web and app behavior tracking for monitoring user-facing interfaces connected to a deployment.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Mixpanel</h3><p class="text-sm leading-relaxed text-muted-foreground">Event-based product analytics focused on user behavior flows and retention for consumer-facing applications.</p></div>
    </div>
  </section>
  <section data-aos="fade-up" id="webhooks" class="mb-14">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-3 text-sidebar-primary"><span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>Webhook Integrations</h2>
    <p class="leading-relaxed mb-5 text-foreground">Bridge the blockchain runtime and the broader tooling ecosystem, enabling real-time automation without polling.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Slack</h3><p class="text-sm leading-relaxed text-muted-foreground">Post structured alerts and governance updates to Slack channels, keeping operational teams informed in real time.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Discord</h3><p class="text-sm leading-relaxed text-muted-foreground">Send validator status changes, governance votes, and system alerts to Discord channels for community deployments.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Telegram Bot</h3><p class="text-sm leading-relaxed text-muted-foreground">Deliver automated messages via Telegram for lightweight operational alerting and community notifications.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Zapier</h3><p class="text-sm leading-relaxed text-muted-foreground">Trigger multi-step automation workflows across thousands of connected tools for no-code downstream integrations.</p></div>
      <div class="rounded-lg border p-5 border-border"><h3 class="font-semibold mb-1.5 text-foreground">Custom Endpoint</h3><p class="text-sm leading-relaxed text-muted-foreground">Send JSON payloads to any server endpoint, supporting fully custom internal integrations and enterprise pipelines.</p></div>
    </div>
  </section>
`