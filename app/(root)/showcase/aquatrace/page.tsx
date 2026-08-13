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
  Boxes,
  Languages,
  ExternalLink,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/animate-ui/components/buttons/button"
import ChainFlowTabs, { type Flow } from "../_components/ChainFlowTabs"

export const metadata: Metadata = {
  title: "AquaTrace, Built on Cerulea",
  description:
    "Blockchain traceability for Indian seafood exports, farmed aquaculture and wild capture, built on Cerulea. From the broodstock or the catch to the retail shelf, every step on chain and verifiable from a single code.",
}

// Shared eyebrow, matches the dashed sharp-corner badge used site-wide.
// AquaTrace uses the blue accent (chart-3).
function Eyebrow({
  children,
  variant = "muted",
}: {
  children: React.ReactNode
  variant?: "muted" | "accent" | "onDark"
}) {
  const styles =
    variant === "accent"
      ? "border-chart-3/30 bg-chart-3/10 text-chart-3"
      : variant === "onDark"
        ? "border-background/20 bg-background/5 text-chart-3"
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

const AQUATRACE_URL = "https://aquatrace.cerulea.io"

export default function AquaTraceShowcasePage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="bg-card">
        <SectionHeader
          segments={[
            { label: "Built on Cerulea" },
            { label: "Seafood & Marine Exports" },
          ]}
          headline1="AquaTrace"
          description="**Prove where your seafood came from.** AquaTrace is blockchain traceability for Indian seafood exports, farmed aquaculture and wild capture, that follows a product backward to its origin and forward to its buyer through every change of custody. Every event is recorded where and when it happens and anchored on a tamper-evident ledger, so origin claims rest on evidence rather than paper. No external chain, no token, no gas."
          node={
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={AQUATRACE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="default">
                  Visit AquaTrace
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

      {/* 2. AT A GLANCE */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow variant="accent">At a Glance</Eyebrow>
          <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
            The full seafood basket. One engine.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Farmed aquaculture and wild capture run on the same engine, each with
            its own roles, workflow and regulatory set, with new categories added
            as data rather than code.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {GLANCE.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="ff-title text-2xl font-extrabold text-chart-3">
                {g.stat}
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {g.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
        <div className="pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
              The record keeps breaking where custody changes.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Indian marine product exports are worth several billion dollars a
              year, yet each break in the record carries a cost, and a single
              import alert abroad can place every later consignment under detention
              on arrival. AquaTrace addresses each gap.
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

      {/* 4. THE PIPELINES, interactive flow switcher */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow variant="accent">Supply Chain Flow</Eyebrow>
          <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
            Every actor. Every stage. One chain.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every step follows the same shape: record, validate, anchor, hand off,
            accept or flag, finalise, verify. Switch between the two production
            systems to see each ordered stage, its actor and where custody passes.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <ChainFlowTabs flows={AQUA_FLOWS} accent="blue" />
        </div>

        <p className="mx-auto mt-10 max-w-3xl px-6 text-center text-sm leading-relaxed text-muted-foreground">
          The farmed chain starts at the broodstock lot and repeats feed, grow-out
          and sampling as many times as the crop needs. The wild chain starts at
          the fishing trip and repeats on-vessel processing and transhipment. From
          processing onward, the export, logistics and retail tail is shared.
        </p>
      </section>

      {/* 5. KEY FEATURES */}
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
                  <div className="flex size-12 items-center justify-center rounded-md border border-chart-3/10 bg-background text-chart-3">
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

      {/* 6. THE LEDGER, deep navy section */}
      <section
        data-aos="fade-up"
        data-aos-duration="600"
        className="mt-10 bg-foreground text-background"
      >
        <div className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Eyebrow variant="onDark">Permissioned Ledger</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-background md:text-[40px]">
              The blockchain layer inside AquaTrace.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-background/70 md:text-lg">
              AquaTrace runs on an internal, permissioned ledger designed for a
              supply chain rather than a public cryptocurrency, with no external
              chain, no token and no gas. Every event produces a transaction,
              hashed with SHA-256 and signed with the acting party&apos;s ed25519
              key, gathered into a block with a Merkle root and a hash link to the
              block before it, and finalised by a signed consensus round.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-2">
            {LEDGER_SPECS.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-background/10 bg-background/5 p-6"
              >
                <p className="font-mono text-[11px] font-bold tracking-widest text-chart-3 uppercase">
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
            <p
              style={{ textAlign: "center" }}
              className="font-mono text-[11px] font-bold tracking-widest text-background/60 uppercase"
            >
              Signed Validator Set, Consensus to Finalise
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 px-6">
              {SECURITY_TAGS.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 rounded-full border border-chart-3/30 bg-chart-3/10 px-4 py-2"
                >
                  <span className="size-2 rounded-full bg-chart-3" />
                  <span className="text-sm font-semibold text-background">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PUBLIC VERIFICATION */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <Eyebrow variant="accent">Public Verification</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
              Anyone can verify. No login required.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Every shipment carries a QR code that resolves to a public
              verification page. A buyer, an auditor or an importing authority can
              check the full journey from origin to retail, the certificates, and
              the laboratory results, each residue reading against its limit, with
              no account and no blind trust. A separate chain explorer lets anyone
              re-confirm that every block is hash-linked to the one before it.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {VERIFY_URLS.map((url) => (
                <div
                  key={url}
                  className="rounded-lg border border-chart-3/25 bg-chart-3/5 px-4 py-3"
                >
                  <p className="font-mono text-sm font-semibold break-all text-chart-3">
                    {url}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-8 shadow-[0_10px_40px_rgba(12,30,69,0.06)]">
            <p className="font-mono text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
              The Verification Page Presents
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {VERIFY_RECORD.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-chart-3/15">
                    <span className="size-1.5 rounded-full bg-chart-3" />
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

      {/* 8. WHY AQUATRACE */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
        <div className="pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Why AquaTrace</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
              What it does for your business.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-6 px-6 md:grid-cols-2">
            {WHY.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-chart-3/12 font-mono text-xs font-bold text-chart-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LIVE SHOWCASE PLATFORM */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-chart-3/25 bg-chart-3/5 p-8 md:p-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-start">
              <div className="flex-1">
                <Eyebrow variant="accent">Live Showcase Platform</Eyebrow>
                <h3 className="ff-title text-2xl font-bold text-foreground">
                  A working chain you can verify today.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  The live platform at aquatrace.cerulea.io runs both production
                  systems, farmed aquaculture and wild capture, pre-loaded with
                  realistic showcase data across the full seafood basket, from
                  broodstock lots and fishing trips through processing, export
                  documentation and retail delivery, with lab reports, monitoring
                  alerts and disputes on the record.
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
                      <p className="ff-title text-2xl font-extrabold text-chart-3">
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
                  href={AQUATRACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="w-full">
                    Visit AquaTrace
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
    </main>
  )
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const GLANCE = [
  {
    stat: "2 chains",
    title: "Farmed & wild, one engine",
    desc: "Farmed aquaculture runs 17 stages, wild capture runs 16, each with its own roles and regulatory set. New categories are added as data, not code.",
  },
  {
    stat: "1 unit",
    title: "Broodstock lot or fishing trip",
    desc: "One traceable origin unit per chain, the broodstock lot for farmed and the fishing trip for wild, with nothing recorded before it.",
  },
  {
    stat: "On chain",
    title: "Anchored, not asserted",
    desc: "Every record is anchored on an internal permissioned ledger with hash-linked blocks and a signed consensus round.",
  },
  {
    stat: "2 party",
    title: "Custody as agreement",
    desc: "Every handoff is a two-party custody transfer the receiver accepts or disputes, co-signed on the ledger.",
  },
  {
    stat: "Lot edges",
    title: "Identity survives grading",
    desc: "Recorded splits and merges link parent lots to child lots, so a finished carton still traces to its source through consolidation.",
  },
  {
    stat: "GDST",
    title: "An international standard",
    desc: "Aligned to the GDST Core Normative Standard, built on GS1 EPCIS, so the chain speaks the language importing buyers require.",
  },
]

const PROBLEMS = [
  {
    title: "Unrecorded treatments",
    desc: "A treatment applied at the pond during a disease event goes unwritten and surfaces months later as a residue rejection at a foreign port.",
  },
  {
    title: "Lost lot identity",
    desc: "Several pond harvests merge on a grading table within one shift, so a single finished carton can no longer be traced to a source pond.",
  },
  {
    title: "Origin claims on paper",
    desc: "Catch certificates move as paper documents, which invites duplicate presentation, quantity inflation and transcription error.",
  },
  {
    title: "Samples not tied to a pond",
    desc: "A pre-harvest sample is linked to its pond only by a handwritten label and the memory of the person who drew it.",
  },
  {
    title: "Handling outside the audit",
    desc: "Peeling and de-heading are sent to informal sheds outside the audited perimeter of the certified plant.",
  },
  {
    title: "Missing cold chain history",
    desc: "Product moves from pond bank or harbour to plant on ice with no temperature record on the first leg.",
  },
]

const AQUA_FLOWS: Flow[] = [
  {
    id: "farmed",
    label: "Farmed Aquaculture",
    note: "The traceable unit is the broodstock lot. 17 ordered stages. Feed, grow-out and sampling are repeatable, recorded as many times as the crop needs.",
    stages: [
      { step: "01", label: "Broodstock Lot Supply", actor: "Multiplication Centre" },
      { step: "02", label: "Hatchery Seed Production", actor: "Hatchery Operator" },
      { step: "03", label: "Pond Stocking", actor: "Farmer" },
      { step: "04", label: "Feed & Input Application", actor: "Farmer" },
      { step: "05", label: "Grow-out Reading", actor: "Farmer" },
      { step: "06", label: "Pre-harvest Sampling", actor: "Farmer" },
      { step: "07", label: "Harvest & Farm-gate Sale", actor: "Farmer" },
      { step: "08", label: "Dealer Receipt & Dispatch", actor: "Dealer / Trader" },
      { step: "09", label: "Pre-processing", actor: "Pre-processing Operator" },
      { step: "10", label: "Processing", actor: "Plant Quality Manager" },
      { step: "11", label: "Freezing & Cold Storage", actor: "Plant Quality Manager" },
      { step: "12", label: "Export Documentation", actor: "Exporter Administrator" },
      { step: "13", label: "Customs Clearance", actor: "Customs Broker" },
      { step: "14", label: "Ocean Freight", actor: "Reefer Logistics Operator" },
      { step: "15", label: "Import Clearance", actor: "Importer" },
      { step: "16", label: "Distribution", actor: "Distributor / Repacker" },
      { step: "17", label: "Retail Delivery", actor: "Retailer / Food Service" },
    ],
  },
  {
    id: "wild",
    label: "Wild Capture",
    note: "The traceable unit is the fishing trip, the catch itself. 16 ordered stages. On-vessel processing and transhipment are repeatable.",
    stages: [
      { step: "01", label: "Fishing Trip (Catch)", actor: "Skipper" },
      { step: "02", label: "On-vessel Processing", actor: "Skipper" },
      { step: "03", label: "Transhipment", actor: "Skipper" },
      { step: "04", label: "Landing", actor: "Skipper" },
      { step: "05", label: "Auction & First Sale", actor: "Auctioneer" },
      { step: "06", label: "Assembly & Consolidation", actor: "Assembler / Supplier" },
      { step: "07", label: "Wholesale Holding", actor: "Wholesaler" },
      { step: "08", label: "Cleaning & Pre-processing", actor: "Cleaning Operator" },
      { step: "09", label: "Processing", actor: "Plant Quality Manager" },
      { step: "10", label: "Freezing & Cold Storage", actor: "Plant Quality Manager" },
      { step: "11", label: "Export Documentation", actor: "Exporter Administrator" },
      { step: "12", label: "Customs Clearance", actor: "Customs Broker" },
      { step: "13", label: "Ocean Freight", actor: "Reefer Logistics Operator" },
      { step: "14", label: "Import Clearance", actor: "Importer" },
      { step: "15", label: "Distribution", actor: "Distributor / Repacker" },
      { step: "16", label: "Retail Delivery", actor: "Retailer / Food Service" },
    ],
  },
]

const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: QrCode,
    title: "Origin Units & Lot Tracing",
    desc: "Register the broodstock lot for farmed or the fishing trip for wild, then follow it forward. Recorded splits and merges link parent lots to child lots, so identity survives consolidation and grading all the way to the finished pack.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Scorecard",
    desc: "Each mandatory check is scored pass or fail, from a residue reading within its maximum residue limit to an input applied that is not on the certified list, aligned to EU NRCP, US SIMP and Seafood HACCP, and Japan and China import requirements.",
  },
  {
    icon: Thermometer,
    title: "Monitoring & Alerts",
    desc: "Rules run automatically as data is recorded, raising an alert on any breach: a residue over limit, an uncertified input, dissolved oxygen below the safe threshold, ammonia above it, or a first-mile transport leg above the chilled range.",
  },
  {
    icon: Gavel,
    title: "Two-Party Handoffs & Disputes",
    desc: "Custody does not advance silently. The unit lands in the receiver's acceptance queue; they accept, co-signing declared weight and grade on chain, or flag a discrepancy, which opens a dispute both parties work from on the same immutable record.",
  },
  {
    icon: LayoutDashboard,
    title: "Role-Scoped Workspaces",
    desc: "Every party has an account and a workspace scoped to their own work, from broodstock centre, hatchery, farmer, skipper and auctioneer to pre-processor, plant, exporter, importer and retailer, plus read-only oversight for regulators and auditors.",
  },
  {
    icon: Globe,
    title: "Public Verification",
    desc: "Anyone can verify a shipment at aquatrace.cerulea.io without logging in. The page shows the compliance scorecard, the full origin-to-retail journey, the certificates and the laboratory results, each residue reading against its limit.",
  },
  {
    icon: Boxes,
    title: "Profile-Driven Engine",
    desc: "A thin engine interprets a declarative profile that defines a whole chain, its entities, roles, stages and rules. Adding a category is writing a profile, not rebuilding the engine, so the same platform grows across the full seafood basket.",
  },
  {
    icon: Languages,
    title: "Standards-Aligned PWA",
    desc: "Records follow the GDST Core Normative Standard on GS1 EPCIS, capturing species, product form, lot, weight, event time and location and ownership. Localised and delivered as an installable progressive web app that works on a phone.",
  },
]

const LEDGER_SPECS = [
  {
    label: "Consensus",
    value: "Signed validator set",
    detail:
      "A validator set signs each block; a block is finalised only when it reaches the configured consensus threshold, otherwise it is orphaned and its transactions return to the mempool.",
  },
  {
    label: "Integrity under load",
    value: "DB advisory-lock serialised",
    detail:
      "Block production is serialised with a database advisory lock, so overlapping instances during a deployment cannot fork the chain, and any unfinalised block is recovered on restart.",
  },
  {
    label: "Integrity",
    value: "SHA-256 Merkle, ed25519 keys",
    detail:
      "Every transaction is hashed with SHA-256 and signed with the acting party's ed25519 key; the verification page and explorer re-compute Merkle roots and hash links.",
  },
  {
    label: "Document anchoring",
    value: "Digest on chain, file off chain",
    detail:
      "Certificates and documents are anchored by their digest, so the original file can be checked against the ledger without storing it on chain.",
  },
]

const SECURITY_TAGS = [
  "AES-256-GCM secrets",
  "scrypt passwords",
  "TOTP MFA",
  "Rotating refresh tokens",
  "RBAC + tenant scoping",
]

const VERIFY_URLS = [
  "aquatrace.cerulea.io/verify/shipment/{ID}",
  "aquatrace.cerulea.io/explorer",
]

const VERIFY_RECORD = [
  "Compliance scorecard, each mandatory check pass or fail",
  "The full journey, every stage from origin to retail",
  "Each stage marked on chain with its block",
  "The certificates, each with its issuing authority and anchor",
  "Laboratory results, each residue reading against its limit",
  "Lot edges linking parent and child lots",
  "Chain explorer to re-confirm every hash-linked block",
]

const WHY = [
  "Catch residue and uncertified-input violations before loading with an automated compliance scorecard",
  "Share a public QR-scannable provenance link with every shipment",
  "Resolve disputes faster with a shared immutable record both parties can see",
  "Keep lot identity through grading and consolidation with recorded split and merge edges",
  "Prove cold-chain integrity from the first mile with monitoring alerts on chain",
  "MPEDA, Coastal Aquaculture Authority, EIC and Department of Fisheries workflows mapped in from day one",
  "Records follow the GDST Core Normative Standard on GS1 EPCIS that importing buyers increasingly require",
  "White-label ready with your branding, your domain, your platform powered by Cerulea",
]

const LIVE_STATS = [
  { value: "2", label: "Production systems (farmed & wild)" },
  { value: "17 / 16", label: "Stages per chain" },
  { value: "GDST", label: "GS1 EPCIS aligned" },
  { value: "SHA-256", label: "Signed & anchored records" },
  { value: "ed25519", label: "Per-party transaction signing" },
  { value: "QR", label: "Public shipment verification" },
]
