import type { Metadata } from "next"
import Link from "next/link"
import React from "react"
import {
  QrCode,
  ClipboardCheck,
  Thermometer,
  Gavel,
  LayoutDashboard,
  Globe,
  Webhook,
  Languages,
  ExternalLink,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/animate-ui/components/buttons/button"

export const metadata: Metadata = {
  title: "AgroTrace, Built on Cerulea",
  description:
    "A production-grade supply chain platform purpose-built for Indian mango exporters, built on Cerulea. From farm registration to final delivery, every step on chain.",
}

// Shared eyebrow, matches the dashed sharp-corner badge used site-wide
function Eyebrow({
  children,
  variant = "muted",
}: {
  children: React.ReactNode
  variant?: "muted" | "accent" | "onDark"
}) {
  const styles =
    variant === "accent"
      ? "border-chart-2/30 bg-chart-2/10 text-chart-2"
      : variant === "onDark"
        ? "border-background/20 bg-background/5 text-chart-2"
        : "border-primary/25 bg-primary/10 text-foreground/75"
  return (
    <div
      className={`mx-auto mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2 font-mono text-sm font-semibold tracking-[0.15em] uppercase ${styles}`}
    >
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {children}
    </div>
  )
}

const AGROTRACE_URL = "https://agrotrace.cerulea.io"

export default function AgroTraceShowcasePage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="bg-card">
        <SectionHeader
          segments={[
            { label: "Built on Cerulea" },
            { label: "Agriculture & Food Tech" },
          ]}
          headline1="AgroTrace"
          description="**From Farm to Foreign Shore. Every Step on Chain.** A production-grade supply chain platform purpose-built for Indian mango exporters. AgroTrace digitises and immutably records every step of the mango export journey, from farm registration and residue testing through packhouse processing, phytosanitary clearance, vessel loading, and final delivery. No external SDK, no cryptocurrency, no gas fees."
          node={
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={AGROTRACE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="default">
                  Visit AgroTrace
                  <ExternalLink />
                </Button>
              </Link>
              <Button link="/company/contact" variant="outline">
                Request Sandbox Demo
                <ArrowRight />
              </Button>
            </div>
          }
        />
      </section>

      {/* 2. THE PROBLEM */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
        <div className="pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
              Indian mango exports face six recurring problems.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Indian mango exports worth billions of dollars face challenges that
              cause rejections, revenue losses, and regulatory friction year after
              year. AgroTrace addresses each one.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <div key={p.title} className="p-2">
                <p className="font-mono text-2xl text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}.
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE 12-STAGE PIPELINE */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow variant="accent">Supply Chain Flow</Eyebrow>
          <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
            12 stages. Every actor. One chain.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every status update, certificate upload, telemetry reading, custody
            transfer, and compliance check is written as a transaction on
            AgroChain. The buyer can scan the QR on any carton and see the
            complete, tamper-proof history.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PIPELINE_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-6"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-chart-2" />
              <p className="font-mono text-[11px] font-bold tracking-widest text-chart-2 uppercase">
                Step {stage.step}
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {stage.label}
              </h3>
              <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                {stage.actor}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. KEY FEATURES */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
        <div className="pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Platform Features</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
              Built for every actor in the chain.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-card p-8">
                  <div className="flex size-12 items-center justify-center rounded-md border border-chart-2/10 bg-background text-chart-2">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. AGROCHAIN, deep navy section */}
      <section
        data-aos="fade-up"
        data-aos-duration="600"
        className="mt-10 bg-foreground text-background"
      >
        <div className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Eyebrow variant="onDark">AgroChain</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-background md:text-[40px]">
              The blockchain layer inside AgroTrace.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-background/70 md:text-lg">
              AgroChain is an entirely internal blockchain with no external
              dependencies, no gas fees, and no wallet setup. Every event in the
              supply chain is written as a transaction, hashed into a Merkle tree,
              and finalised by a global validator network.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-2">
            {AGROCHAIN_SPECS.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-background/10 bg-background/5 p-6"
              >
                <p className="font-mono text-[11px] font-bold tracking-widest text-chart-2 uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-bold text-background">
                  {item.value}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-background/60">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="font-mono text-[11px] font-bold tracking-widest text-background/60 uppercase">
              5 Globally Distributed Validator Nodes
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 px-6">
              {VALIDATOR_NODES.map((node) => (
                <div
                  key={node}
                  className="flex items-center gap-2 rounded-full border border-chart-2/30 bg-chart-2/10 px-4 py-2"
                >
                  <span className="size-2 rounded-full bg-chart-2" />
                  <span className="text-sm font-semibold text-background">
                    {node}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PUBLIC VERIFICATION */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <Eyebrow variant="accent">Public Verification</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
              Anyone can verify. No login required.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              International buyers, importers, customs authorities, and consumers
              can verify the authenticity and history of any mango lot or shipment
              without an account. The verification page shows farm of origin,
              registered variety, residue test results, compliance score, chain
              status, and the Merkle proof of each on-chain transaction.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {VERIFY_URLS.map((url) => (
                <div
                  key={url}
                  className="rounded-lg border border-chart-2/25 bg-chart-2/5 px-4 py-3"
                >
                  <p className="font-mono text-sm font-semibold break-all text-chart-2">
                    {url}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-8 shadow-[0_10px_40px_rgba(12,30,69,0.06)]">
            <p className="font-mono text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
              Verification Record Includes
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {VERIFY_RECORD.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-chart-2/15">
                    <span className="size-1.5 rounded-full bg-chart-2" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. WHY AGROTRACE */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
        <div className="pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Why AgroTrace</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
              What it does for your business.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-6 px-6 md:grid-cols-2">
            {WHY.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-chart-2/12 font-mono text-xs font-bold text-chart-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LIVE SHOWCASE PLATFORM */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-chart-2/25 bg-chart-2/5 p-8 md:p-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-start">
              <div className="flex-1">
                <Eyebrow variant="accent">Live Showcase Platform</Eyebrow>
                <h3 className="ff-title text-2xl font-bold text-foreground">
                  Pre-loaded with realistic data.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  The live platform at agrotrace.cerulea.io is pre-loaded with
                  realistic showcase data across 5 exporter organisations, 45 mango
                  lots, 20 active shipments at various pipeline stages, 8 disputes
                  with full response history, over 1,200 finalised blocks, and over
                  3,200 on-chain transactions including simulated IoT temperature
                  breaches.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Contact Caerulean Bytechains for a demo account to explore the
                  full platform.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {LIVE_STATS.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg border border-border bg-background p-5"
                    >
                      <p className="ff-title text-2xl font-extrabold text-chart-2">
                        {s.value}
                      </p>
                      <p className="mt-1 text-xs leading-tight text-muted-foreground">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 md:pt-2">
                <Link
                  href={AGROTRACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="w-full">
                    Visit AgroTrace
                    <ExternalLink />
                  </Button>
                </Link>
                <Button link="/company/contact" variant="outline">
                  Request Demo Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BUILT BY, deep navy section */}
      <section
        data-aos="fade-up"
        data-aos-duration="600"
        className="mt-10 bg-foreground text-background"
      >
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Eyebrow variant="onDark">About AgroTrace</Eyebrow>
          <h2 className="ff-title text-3xl font-bold text-background md:text-[40px]">
            A Caerulean Bytechains product, built on Cerulea.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-background/70 md:text-lg">
            AgroTrace is a showcase platform built by Caerulean Bytechains to
            demonstrate the Cerulea capability stack. Adopter organisations take
            full ownership and run it independently under their own branding,
            domain, and configuration.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={AGROTRACE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="default">
                Visit AgroTrace
                <ExternalLink />
              </Button>
            </Link>
            <Link href="/product/studio">
              <Button variant="outline" className="text-foreground">
                How it was built
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// ---------------------------------------------------------------------------
// Content (ported verbatim from the original AgroTrace showcase)
// ---------------------------------------------------------------------------

const PROBLEMS = [
  {
    title: "Fragmented paperwork",
    desc: "APEDA certificates, phytosanitary papers, residue test reports, and fumigation records exist in silos across dozens of actors with no shared record.",
  },
  {
    title: "MRL violations",
    desc: "Maximum Residue Limit breaches detected at destination ports cause shipment rejections and market bans, often discovered too late to act.",
  },
  {
    title: "Cold chain failures",
    desc: "Temperature excursions during transit go undetected until cargo reaches the buyer, with no tamper-proof log to assign liability.",
  },
  {
    title: "No provenance",
    desc: "Buyers and regulators cannot verify the origin of a mango lot from a specific farm. Certificates are easily forged and impossible to cross-check.",
  },
  {
    title: "Manual disputes",
    desc: "Buyer claims are handled without a shared, immutable record. Both sides argue from their own data with no common ground truth.",
  },
  {
    title: "Full compliance visibility",
    desc: "No single dashboard shows an exporter which shipments are at risk of failing compliance checks before the vessel is loaded.",
  },
]

const PIPELINE_STAGES = [
  { step: "01", label: "Farm Registration", actor: "Farmer" },
  { step: "02", label: "Lot Registration", actor: "Exporter" },
  { step: "03", label: "Residue Testing", actor: "Laboratory" },
  { step: "04", label: "Packhouse Processing", actor: "Packhouse" },
  { step: "05", label: "Treatment", actor: "Treatment Facility" },
  { step: "06", label: "Phytosanitary Clearance", actor: "NPPO Inspector" },
  { step: "07", label: "APEDA Certification", actor: "APEDA Officer" },
  { step: "08", label: "Customs Clearance", actor: "Customs Broker" },
  { step: "09", label: "Cold Storage", actor: "Cold Storage" },
  { step: "10", label: "Freight Forwarding", actor: "Freight Forwarder" },
  { step: "11", label: "Vessel Loading", actor: "Shipping Line" },
  { step: "12", label: "Arrival & Delivery", actor: "Buyer" },
]

const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: QrCode,
    title: "Lot Management",
    desc: "Register mango lots from named farms with GPS coordinates, variety (Alphonso, Kesar, Banganapalli, Dasheri), harvest date, and quantity. Each lot gets a unique QR code, scannable at any point in the chain to pull the full history.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Engine",
    desc: "Real-time compliance score (0-100%) per shipment calculated against configurable MRL rules for FSSAI, EU, Japan, and Codex standards. Warning threshold at 60%, minimum score for vessel loading at 80%. Catch violations before the ship sails.",
  },
  {
    icon: Thermometer,
    title: "IoT Cold Chain Monitoring",
    desc: "Register temperature and humidity sensors and link them to shipments. Live telemetry ingested via REST API. Automatic breach detection with alerts surfaced on the exporter dashboard and shipment detail.",
  },
  {
    icon: Gavel,
    title: "Dispute Management",
    desc: "Buyers initiate disputes with claimed value and supporting evidence. Exporters submit formal responses. Both parties work from the same immutable on-chain record. Resolution outcomes recorded permanently.",
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Role Dashboards",
    desc: "13 distinct user roles, each with a purpose-built dashboard: Exporter, Farmer, Laboratory, Packhouse, Treatment Facility, NPPO Inspector, APEDA Officer, Customs Broker, Cold Storage, Freight Forwarder, Shipping Line, Buyer, Platform Admin.",
  },
  {
    icon: Globe,
    title: "Public Verification",
    desc: "Anyone can verify a lot or shipment at agrotrace.cerulea.io/verify without logging in. The page shows farm origin, residue results, compliance score, Merkle proof, and the block in which the shipment is recorded.",
  },
  {
    icon: Webhook,
    title: "Webhooks and Integrations",
    desc: "Configure outbound webhooks to notify external systems on shipment status changes, compliance breaches, or block confirmations. Full delivery log per endpoint with retry logic and exponential backoff.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    desc: "9 languages including English, Hindi, Marathi, Gujarati, Telugu, Tamil, Kannada, Bengali, and Punjabi. Full app-wide language switch across every screen, modal, and error message. 1,597 translation keys across 23 namespaces.",
  },
]

const AGROCHAIN_SPECS = [
  {
    label: "Consensus",
    value: "Dynamic Consensus Framework (DCF)",
    detail: "4-of-5 validator agreement required to finalise each block.",
  },
  {
    label: "Block time",
    value: "8 seconds",
    detail: "Target block time across all 5 nodes.",
  },
  {
    label: "Integrity",
    value: "SHA-256 Merkle tree",
    detail:
      "Every block hashed and chained. Full Merkle proof generation for verification.",
  },
  {
    label: "Storage",
    value: "PostgreSQL 16",
    detail:
      "Chain state stored in chain_blocks, chain_transactions, and chain_consensus_votes tables.",
  },
]

const VALIDATOR_NODES = ["Mumbai", "Singapore", "Dubai", "Amsterdam", "London"]

const VERIFY_URLS = [
  "agrotrace.cerulea.io/verify/lot/{LOT_ID}",
  "agrotrace.cerulea.io/verify/shipment/{SHIPMENT_ID}",
]

const VERIFY_RECORD = [
  "Farm of origin with GPS coordinates",
  "Registered mango variety",
  "Pesticide residue test results (FSSAI, EU, Japan, Codex)",
  "Compliance score against MRL standards",
  "Chain status and transaction hash",
  "Merkle proof for each on-chain event",
  "Block number and consensus confirmation",
]

const WHY = [
  "Catch MRL violations before loading with automated compliance scoring",
  "Share a public QR-scannable provenance link with every shipment",
  "Resolve disputes faster with a shared immutable record both parties can see",
  "Prove cold chain integrity with IoT-backed temperature logs on-chain",
  "Consolidate every actor on one platform instead of WhatsApp threads and email chains",
  "APEDA, NPPO, customs, and phytosanitary workflows built in from day one",
  "White-label ready with your branding, your domain, your platform powered by Cerulea",
]

const LIVE_STATS = [
  { value: "5", label: "Exporter organisations" },
  { value: "45", label: "Registered mango lots" },
  { value: "20", label: "Active shipments" },
  { value: "1,200+", label: "Finalised blocks" },
  { value: "3,200+", label: "On-chain transactions" },
  { value: "8", label: "Disputes with full history" },
]
