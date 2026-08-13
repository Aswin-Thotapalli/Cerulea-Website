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
  title: "AgroTrace, Built on Cerulea",
  description:
    "Blockchain traceability for Indian agricultural exports, mango and turmeric, built on Cerulea. From the farm to the foreign shore, every step on chain and verifiable from a single code.",
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
          description="**Prove where your harvest came from.** AgroTrace is blockchain traceability for Indian agricultural exports, mango and turmeric, that follows a consignment backward to the farm and forward to the buyer through every change of custody. Every event is recorded where and when it happens and anchored on a tamper-evident ledger, so origin and quality claims rest on evidence rather than paper. No external chain, no token, no gas."
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

      {/* 2. AT A GLANCE */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow variant="accent">At a Glance</Eyebrow>
          <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
            Two commodity chains. One engine.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Turmeric and mango run on the same engine today, each with its own
            workflow, roles, quality parameters and regulatory requirements, with
            more crops added as data rather than code.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {GLANCE.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="ff-title text-2xl font-extrabold text-chart-2">
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
              Indian agricultural exports are worth billions a year, yet each
              break in the record carries a cost, and a single import alert abroad
              can place every later consignment under detention on arrival.
              AgroTrace addresses each gap.
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
            accept or flag, finalise, verify. Switch between the two commodity
            chains to see each ordered stage, its actor and where custody passes.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <ChainFlowTabs flows={AGRO_FLOWS} accent="emerald" />
        </div>

        <p className="mx-auto mt-10 max-w-3xl px-6 text-center text-sm leading-relaxed text-muted-foreground">
          The essential difference: turmeric is tested late, on the finished
          powder, and adds boiling, drying, polishing, mandi sale, grinding and
          Spices Board certification. Mango is tested early, on the raw fruit, and
          adds packhouse grading, disinfestation treatment, NPPO phytosanitary
          clearance and APEDA certification. The downstream logistics tail is
          shared.
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

      {/* 6. AGROCHAIN, deep navy section */}
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
              AgroChain is an entirely internal, permissioned ledger with no
              external dependencies, no gas fees and no wallet setup. Every event
              produces a transaction, hashed with SHA-256 and signed by the acting
              party, gathered into a block with a Merkle root and a hash link to
              the block before it, and finalised by a signed consensus round.
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
            <p className="text-center font-mono text-[11px] font-bold tracking-widest text-background/60 uppercase">
              5-Node Validator Set, 4-of-5 to Finalise
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

      {/* 7. PUBLIC VERIFICATION */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <Eyebrow variant="accent">Public Verification</Eyebrow>
            <h2 className="ff-title text-3xl font-bold text-foreground md:text-[40px]">
              Anyone can verify. No login required.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Every consignment carries a QR code that resolves to a public
              verification page. A buyer, an auditor or an importing authority can
              check the full journey from farm to foreign shore, the certificates,
              and the laboratory results, each reading against its limit, with no
              account and no blind trust. A separate chain explorer lets anyone
              re-confirm that every block is hash-linked to the one before it.
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
              The Verification Page Presents
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

      {/* 8. WHY AGROTRACE */}
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

      {/* 9. LIVE SHOWCASE PLATFORM */}
      <section data-aos="fade-up" data-aos-duration="600" className="mt-10 pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-chart-2/25 bg-chart-2/5 p-8 md:p-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-start">
              <div className="flex-1">
                <Eyebrow variant="accent">Live Showcase Platform</Eyebrow>
                <h3 className="ff-title text-2xl font-bold text-foreground">
                  A working chain you can verify today.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  The live platform at agrotrace.cerulea.io runs both commodity
                  chains, turmeric and mango, pre-loaded with realistic showcase
                  data across exporter organisations, registered harvest batches,
                  active consignments at various pipeline stages, disputes with
                  full response history, finalised blocks and on-chain
                  transactions including simulated IoT humidity and cold-chain
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
    </main>
  )
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const GLANCE = [
  {
    stat: "2 chains",
    title: "Turmeric & mango, one engine",
    desc: "Turmeric runs 14 stages, mango runs 12, each with its own roles, quality parameters and regulatory set. New crops are added as data, not code.",
  },
  {
    stat: "1 unit",
    title: "The harvest batch",
    desc: "One traceable origin unit per chain, registered by the farmer, with nothing recorded before it.",
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
    stat: "QR",
    title: "Public verification",
    desc: "Any consignment is verifiable from a QR code, with the full journey, certificates and laboratory results.",
  },
  {
    stat: "Alerts",
    title: "Quality on the record",
    desc: "On-chain quality assays, a maximum-residue-limit panel per commodity, and an IoT breach alert before the vessel departs.",
  },
]

const PROBLEMS = [
  {
    title: "Origin claims on paper",
    desc: "A certificate of origin or a Spices Board registration moves as a paper document, which invites duplicate presentation, quantity inflation and transcription error.",
  },
  {
    title: "Lost batch identity",
    desc: "Several field lots merge on a grading or polishing floor within one shift, so a finished carton can no longer be traced back to a source farm.",
  },
  {
    title: "Unrecorded quality events",
    desc: "A residue reading, a moisture reading or a treatment goes unwritten and surfaces months later as a rejection at a foreign port.",
  },
  {
    title: "Adulteration and residues",
    desc: "Lead chromate colouring in turmeric, ethylene oxide fumigation banned by the EU, or a pesticide over the market limit on mango, none of it visible until arrival.",
  },
  {
    title: "Contamination in transit",
    desc: "A humidity spike raises aflatoxin risk in turmeric, or a cold-chain break spoils mango, with no reading on the record to catch it in time.",
  },
  {
    title: "Disputes at the handoff",
    desc: "A grower declares one weight and grade, the next party receives another, and the disagreement surfaces at the end of the chain rather than the moment it happened.",
  },
]

const AGRO_FLOWS: Flow[] = [
  {
    id: "turmeric",
    label: "Turmeric",
    note: "The traceable unit is the harvest batch. 14 ordered stages, from the Armoor and Nizamabad belt to the destination port. Drying and the quality assay are performed on the finished product late in the chain.",
    stages: [
      { step: "01", label: "Batch Registration", actor: "Farmer" },
      { step: "02", label: "Boiling & Curing", actor: "Boiling Unit" },
      { step: "03", label: "Drying", actor: "Drying Yard" },
      { step: "04", label: "Polishing", actor: "Polishing Mill" },
      { step: "05", label: "First Sale at Mandi", actor: "Commission Agent" },
      { step: "06", label: "Sterilisation & Grinding", actor: "Processing Unit" },
      { step: "07", label: "Quality Assay", actor: "Laboratory" },
      { step: "08", label: "Export Certification", actor: "Spices Board Officer" },
      { step: "09", label: "Export Booking", actor: "Exporter" },
      { step: "10", label: "Forwarder Handoff", actor: "Freight Forwarder" },
      { step: "11", label: "Vessel Loading", actor: "Shipping Line" },
      { step: "12", label: "Customs Clearance", actor: "Customs Broker" },
      { step: "13", label: "Storage Custody", actor: "Cold Storage" },
      { step: "14", label: "Receipt & Acceptance", actor: "Buyer" },
    ],
  },
  {
    id: "mango",
    label: "Mango",
    note: "The traceable unit is the harvest batch. 12 ordered stages. The residue test is performed early, on the raw fruit, and the middle of the chain adds packhouse grading, disinfestation treatment and phytosanitary clearance.",
    stages: [
      { step: "01", label: "Batch Registration", actor: "Farmer" },
      { step: "02", label: "Residue Test", actor: "Laboratory" },
      { step: "03", label: "Grading & Packing", actor: "Packhouse" },
      { step: "04", label: "Treatment", actor: "Treatment Facility" },
      { step: "05", label: "Phytosanitary Clearance", actor: "NPPO Inspector" },
      { step: "06", label: "Export Certification", actor: "APEDA Officer" },
      { step: "07", label: "Export Booking", actor: "Exporter" },
      { step: "08", label: "Forwarder Handoff", actor: "Freight Forwarder" },
      { step: "09", label: "Vessel Loading", actor: "Shipping Line" },
      { step: "10", label: "Customs Clearance", actor: "Customs Broker" },
      { step: "11", label: "Cold Storage", actor: "Cold Storage" },
      { step: "12", label: "Receipt & Acceptance", actor: "Buyer" },
    ],
  },
]

const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: QrCode,
    title: "Batch & Consignment Management",
    desc: "Register the harvest batch at the farm with cultivar or GI variety, location, harvest date and quantity, then assemble the export consignment from a certified batch. Each carries a QR code, scannable at any point to pull the full history.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Scorecard",
    desc: "Each mandatory check is scored pass or fail against a configurable MRL panel per commodity, curcumin, lead chromate, ethylene oxide and aflatoxin for turmeric, the pesticide panel for mango, aligned to FSSAI, EU, US, Japan and Codex limits. Catch violations before the vessel is loaded.",
  },
  {
    icon: Thermometer,
    title: "IoT Monitoring & Alerts",
    desc: "Rules run automatically as data is recorded. A humidity spike that raises aflatoxin risk in turmeric transit, or a cold-chain excursion for mango, is flagged before the vessel departs so the container can be held.",
  },
  {
    icon: Gavel,
    title: "Two-Party Handoffs & Disputes",
    desc: "Custody does not advance silently. The unit lands in the receiver's acceptance queue; they accept, co-signing quantity and grade on chain, or flag a discrepancy, which opens a dispute both parties work from on the same immutable record.",
  },
  {
    icon: LayoutDashboard,
    title: "Role-Scoped Workspaces",
    desc: "Every party in the chain has an account and a workspace scoped to their own work, farmer, boiling and drying and polishing units, mandi, processing unit, packhouse, treatment facility, laboratory, regulators and the overseas buyer, so the record is built by the people who hold the produce.",
  },
  {
    icon: Globe,
    title: "Public Verification",
    desc: "Anyone can verify a consignment at agrotrace.cerulea.io without logging in. The page shows the compliance scorecard, the full farm-to-shore journey, the certificates and the laboratory results, including the verified curcumin figure for turmeric.",
  },
  {
    icon: Boxes,
    title: "Profile-Driven Engine",
    desc: "A thin engine interprets a declarative profile that defines a whole commodity chain, its entities, roles, stages and rules. Adding a crop is writing a profile, not changing the engine, so the same platform grows beyond mango and turmeric.",
  },
  {
    icon: Languages,
    title: "Multilingual PWA",
    desc: "Localised across nine Indian languages and delivered as an installable progressive web app that works on a phone, so the actor who holds the produce can capture the record in the field, in their own language.",
  },
]

const AGROCHAIN_SPECS = [
  {
    label: "Consensus",
    value: "4-of-5 validator set",
    detail:
      "A five-node validator set signs each block; a block is finalised only when it reaches the four-of-five threshold, otherwise its transactions return to the mempool.",
  },
  {
    label: "Integrity under load",
    value: "Single producer, one chain head",
    detail:
      "Block production runs on a single producer with an in-process guard on the true chain head, so a burst of records cannot fork or wedge the chain, and any unfinalised block is recovered on restart.",
  },
  {
    label: "Integrity",
    value: "SHA-256 Merkle tree",
    detail:
      "Every transaction is hashed and signed, every block carries a Merkle root and a hash link to the previous block, all the way back to a genesis block.",
  },
  {
    label: "Document anchoring",
    value: "Digest on chain, file off chain",
    detail:
      "Certificates and documents are anchored by their SHA-256 digest, so the original file can be checked against the ledger without storing it on chain.",
  },
]

const VALIDATOR_NODES = ["Node 1", "Node 2", "Node 3", "Node 4", "Node 5"]

const VERIFY_URLS = [
  "agrotrace.cerulea.io/verify/consignment/{ID}",
  "agrotrace.cerulea.io/explorer",
]

const VERIFY_RECORD = [
  "Compliance scorecard, each mandatory check pass or fail",
  "The full journey, every stage from farm to foreign shore",
  "Each stage marked on chain with its block",
  "The certificates, each with its issuing authority and anchor",
  "Laboratory results, each reading against its limit",
  "Verified curcumin figure for turmeric",
  "Chain explorer to re-confirm every hash-linked block",
]

const WHY = [
  "Catch MRL violations before loading with an automated compliance scorecard per commodity",
  "Share a public QR-scannable provenance link with every consignment",
  "Resolve disputes faster with a shared immutable record both parties can see",
  "Prove transit integrity with IoT humidity and cold-chain alerts on chain before the vessel departs",
  "Consolidate every actor on one platform instead of paper documents and phone calls",
  "Spices Board, APEDA, NPPO and customs workflows mapped in from day one",
  "Records map to the GS1 EPCIS event model foreign buyers increasingly require",
  "White-label ready with your branding, your domain, your platform powered by Cerulea",
]

const LIVE_STATS = [
  { value: "2", label: "Commodity chains (turmeric & mango)" },
  { value: "14 / 12", label: "Stages per chain" },
  { value: "9", label: "Indian languages" },
  { value: "SHA-256", label: "Signed & anchored records" },
  { value: "4-of-5", label: "Validator consensus" },
  { value: "QR", label: "Public consignment verification" },
]
