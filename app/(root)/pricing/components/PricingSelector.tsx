"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import {
  MdStorage as Database,
  MdBolt as Zap,
  MdPublic as Globe,
  MdGroups as Users,
  MdVerifiedUser as ShieldCheck,
  MdAccountBalance as Landmark,
  MdWidgets as Blocks,
  MdDns as Server,
  MdSdStorage as HardDrive,
  MdVpnKey as KeyRound,
  MdBarChart as BarChart3,
  MdSupportAgent as LifeBuoy,
  MdFactCheck as FileCheck2,
  MdMemory as Cpu,
  MdAccountTree as GitBranch,
  MdEdit as PenLine,
  MdDescription as FileText,
  MdApartment as Building2,
  MdHub as Network,
} from "react-icons/md"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import CompareAllTiers from "./CompareAlltiers"

type Plan = {
  eyebrow: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted?: boolean
  badge?: string
}
type AddOn = { icon: React.ElementType; title: string; price: string; description: string }
type Segment = {
  id: string
  label: string
  tagline: string
  icon: React.ElementType
  plans: Plan[]
  addOns: AddOn[]
  placeholder?: boolean
}

const STUDIO = "https://studio.cerulea.io/dapps"

const SEGMENTS: Segment[] = [
  {
    id: "dapps",
    label: "Dapps",
    tagline: "Public & private app deployments",
    icon: Blocks,
    plans: [
      {
        eyebrow: "Public dApps",
        price: "$40",
        period: "/month",
        description:
          "Deploy your application to the Cerulea Public L1, a shared network with validator and RPC infrastructure already live.",
        features: [
          "7 validators + 2 RPC nodes",
          "100,000 transactions/month",
          "30 GB storage",
          "Deploy to Cerulea Public L1",
          "Cerulea Studio access, Public Dapps",
          "Cerulea Intelligence (AI)",
        ],
        cta: "Get Started",
        ctaHref: STUDIO,
      },
      {
        eyebrow: "Private dApps",
        price: "$30",
        period: "/month",
        description:
          "Launch a sovereign, fully isolated private chain with dedicated validator infrastructure.",
        features: [
          "3 validators (tolerates 1 node failure)",
          "Shared RPC access",
          "50,000 transactions/month",
          "15 GB storage",
          "Sovereign, fully isolated private chain",
          "Cerulea Studio access, Private Dapps",
          "Cerulea Intelligence (AI)",
        ],
        cta: "Get Started",
        ctaHref: STUDIO,
      },
      {
        eyebrow: "Private dApps Pro",
        price: "$60",
        period: "/month",
        description:
          "Higher validator redundancy and a dedicated RPC node for growing private chain deployments.",
        features: [
          "6 validators (tolerates 2 node failures)",
          "1 dedicated RPC node included",
          "100,000 transactions/month",
          "40 GB storage",
          "Sovereign, fully isolated private chain",
          "Cerulea Studio access, Private Dapps",
          "Cerulea Intelligence (AI)",
        ],
        cta: "Get Started",
        ctaHref: STUDIO,
      },
    ],
    addOns: [
      { icon: Database, title: "+1 Validator", price: "$10/mo", description: "Add a validator to a Private Dapps chain." },
      { icon: Database, title: "Extra validators (up to +3)", price: "$10/mo each", description: "Scale a Private Dapps Pro validator set." },
      { icon: HardDrive, title: "+10 GB Storage", price: "$3/mo", description: "More on-chain storage (Private & Pro)." },
      { icon: Server, title: "Dedicated RPC Node", price: "$12/mo", description: "An exclusive RPC endpoint (Private Dapps)." },
      { icon: Globe, title: "Custom Domain", price: "$35 one-time", description: "Branded domain for your dApp frontend (Private & Pro)." },
      { icon: BarChart3, title: "Branded Block Explorer", price: "$40 setup + $7/mo", description: "A block explorer branded to your dApp (Private & Pro)." },
      { icon: KeyRound, title: "Additional API Key", price: "$15/mo", description: "Another API key (Private & Pro)." },
      { icon: Users, title: "Additional Studio Seat", price: "$10/mo", description: "Invite another teammate (all tiers)." },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    tagline: "Sovereign chains, governed your way",
    icon: ShieldCheck,
    plans: [
      {
        eyebrow: "SME",
        price: "$6,000",
        period: "one-time",
        description:
          "The entry tier of the Enterprise ladder — a managed private chain for growing businesses.",
        features: [
          "Shared cloud hosting",
          "3 validators",
          "5 Studio seats",
          "Basic roles & access",
          "30-day audit retention",
          "Email support (48h)",
        ],
        cta: "Get Started",
        ctaHref: "https://studio.cerulea.io/enterprise",
      },
      {
        eyebrow: "Growth",
        price: "$18,000",
        period: "one-time",
        description:
          "Dedicated infrastructure, full RBAC, and SSO for scaling teams.",
        features: [
          "Dedicated cloud",
          "7 validators",
          "25 Studio seats",
          "Full RBAC",
          "Google / Microsoft SSO",
          "1-year audit retention",
          "Priority support (24h)",
        ],
        cta: "Contact Sales",
        ctaHref: "/company/contact-sales",
      },
      {
        eyebrow: "Enterprise",
        price: "$30,000",
        period: "one-time",
        description:
          "Everything included — sovereign deployment anywhere with a dedicated team and SLA.",
        features: [
          "On-prem / private cloud / air-gap",
          "15+ validators",
          "Unlimited seats",
          "RBAC + custom roles + approvals",
          "SAML + SCIM provisioning",
          "Unlimited legal-grade audit",
          "Dedicated CSM + 99.9% SLA",
          "White-label + private CeruleAI",
        ],
        cta: "Contact Sales",
        ctaHref: "/company/contact-sales",
      },
    ],
    addOns: [
      { icon: Database, title: "+1 Validator", price: "$100/mo", description: "All tiers." },
      { icon: Users, title: "+5 Seats", price: "$125/mo", description: "All tiers." },
      { icon: HardDrive, title: "+50 GB Storage", price: "$60/mo", description: "All tiers." },
      { icon: Server, title: "Dedicated RPC Node", price: "$180/mo", description: "All tiers." },
      { icon: GitBranch, title: "Staging / UAT Environment", price: "$250/mo", description: "Growth & Enterprise." },
      { icon: KeyRound, title: "SSO (SAML)", price: "$150/mo", description: "SME & Growth (included in Enterprise)." },
      { icon: PenLine, title: "White-label", price: "$180/mo", description: "SME & Growth (included in Enterprise)." },
      { icon: FileText, title: "Extended Audit Retention", price: "$75/mo", description: "+1 year. SME & Growth." },
      { icon: KeyRound, title: "Additional API Key", price: "$40/mo", description: "All tiers." },
      { icon: Blocks, title: "Custom Integration Slot", price: "$220/mo", description: "Growth & Enterprise." },
      { icon: LifeBuoy, title: "Premium 24/7 Support", price: "$500/mo", description: "SME & Growth (included in Enterprise)." },
      { icon: ShieldCheck, title: "Managed Ops", price: "$600/mo", description: "Dedicated engineer. All tiers." },
      { icon: FileCheck2, title: "Compliance Certification Pack", price: "$450/mo", description: "SOC2 / ISO27001 evidence + reports." },
      { icon: Cpu, title: "Private CeruleAI", price: "$600/mo", description: "Isolated / on-prem AI inference." },
      { icon: BarChart3, title: "Chain Analytics & BI", price: "$200/mo", description: "All tiers." },
      { icon: ShieldCheck, title: "Smart-contract Audit Credits", price: "$350/mo", description: "All tiers." },
      { icon: Zap, title: "99.99% SLA Upgrade", price: "$500/mo", description: "Enterprise." },
    ],
  },
  {
    id: "government",
    label: "Government",
    tagline: "Sovereign public-sector infrastructure",
    icon: Landmark,
    plans: [
      {
        eyebrow: "Government",
        price: "$12,000",
        period: "one-time",
        description:
          "A single sovereign license — on-soil data residency and backup are included by mandate, never a paid add-on.",
        features: [
          "Sovereign / on-soil / air-gapped deployment",
          "On-soil backup included",
          "Aadhaar / DigiLocker identity",
          "Public transparency portal + citizen explorer",
          "Tamper-proof records registry",
          "RTI / grievance redressal",
          "Legal-grade audit trail",
          "Multi-department hierarchy",
          "5 validators · 10 seats · 1 department · 200 GB",
        ],
        cta: "Contact Sales",
        ctaHref: "/company/contact-sales",
      },
    ],
    addOns: [
      { icon: Building2, title: "+1 Department Workspace", price: "$180/mo", description: "Add a department to the hierarchy." },
      { icon: Users, title: "+10 Officer Seats", price: "$100/mo", description: "More officer accounts." },
      { icon: HardDrive, title: "+100 GB Secure Records Storage", price: "$120/mo", description: "More secure on-chain records storage." },
      { icon: Database, title: "+1 Validator", price: "$120/mo", description: "Add a validator to the sovereign chain." },
      { icon: Globe, title: "Public / Transparency Node", price: "$150/mo", description: "Govt-exclusive." },
      { icon: Network, title: "Inter-department Connector", price: "$180/mo", description: "Scoped data exchange between departments." },
      { icon: FileText, title: "Extended Legal-grade Audit", price: "$120/mo", description: "Longer audit-record retention." },
      { icon: ShieldCheck, title: "Aadhaar Verification Volume", price: "$250/mo", description: "Per 10k/mo. Govt-exclusive." },
      { icon: PenLine, title: "eSign / Digital Signature", price: "$300/mo", description: "Legally-binding signatures on records." },
      { icon: FileCheck2, title: "Regulatory Reporting Automation", price: "$350/mo", description: "Scheduled compliance reports." },
    ],
  },
]

const PricingSelector = () => {
  const [active, setActive] = useState(0)
  const seg = SEGMENTS[active]

  return (
    <section className="bg-card">
      {/* Selector cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SEGMENTS.map((s, i) => {
          const Icon = s.icon
          const selected = i === active
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "flex cursor-pointer items-start gap-4 rounded-2xl border p-6 text-left transition-all duration-300",
                selected
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/40 hover:bg-primary/5"
              )}
            >
              <span
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center rounded-xl border transition-colors",
                  selected
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-border bg-muted/40 text-muted-foreground"
                )}
              >
                <Icon className="size-5" />
              </span>
              <span>
                <span className="ff-title block text-lg font-bold text-foreground">
                  {s.label}
                </span>
                <span className="mt-0.5 block text-sm text-muted-foreground">
                  {s.tagline}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Arrow cutout pointing to the selected card */}
      <div className="relative mt-4">
        <div
          className="absolute -top-2 z-10 hidden size-4 rotate-45 border-t border-l border-border bg-card transition-all duration-300 sm:block"
          style={{ left: `calc(${((active + 0.5) / SEGMENTS.length) * 100}% - 0.5rem)` }}
          aria-hidden="true"
        />

        {/* Expanded panel */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          {/* Plans */}
          <div
            className={cn(
              "grid grid-cols-1 gap-4",
              seg.plans.length >= 3 ? "lg:grid-cols-3" : seg.plans.length === 2 ? "lg:grid-cols-2" : ""
            )}
          >
            {seg.plans.map((plan) => (
              <div
                key={plan.eyebrow}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6",
                  plan.highlighted
                    ? "border-transparent bg-[#0c1e45] text-card shadow-lg"
                    : "border-border bg-background"
                )}
              >
                {plan.badge && (
                  <span className="absolute top-5 right-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {plan.badge}
                  </span>
                )}
                <span
                  className={cn(
                    "text-xs font-medium tracking-wider uppercase",
                    plan.highlighted ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {plan.eyebrow}
                </span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="ff-title text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={cn("text-sm", plan.highlighted ? "text-muted" : "text-muted-foreground")}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={cn("mt-4 text-sm leading-relaxed", plan.highlighted ? "text-muted" : "text-muted-foreground")}>
                  {plan.description}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      {plan.highlighted ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border bg-muted-foreground/10">
                          <Check className="h-3 w-3 text-foreground" />
                        </span>
                      )}
                      <span className={plan.highlighted ? "text-muted" : "text-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.ctaHref} target={plan.ctaHref.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <Button
                    className={cn(
                      "mt-8 h-12! w-full cursor-pointer justify-center gap-2 rounded-full",
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border bg-transparent text-foreground hover:bg-accent"
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Post-deployment note for negotiated segments */}
          {(seg.id === "enterprise" || seg.id === "government") && (
            <div className="mt-6 rounded-xl border border-border bg-muted/40 px-5 py-4 text-center text-sm font-medium text-muted-foreground">
              Post Deployment monthly service charges to be negotiated.
            </div>
          )}

          {/* Add-ons */}
          <div className="mt-10">
            <h3 className="ff-title text-xl font-bold text-foreground">Extend your {seg.label} plan</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {seg.addOns.map(({ icon: Icon, title, price, description }) => (
                <div key={title} className="flex flex-col gap-4 rounded-xl border border-border/70 bg-muted/40 p-5 transition-colors hover:border-primary/40 hover:bg-muted/60">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{title}</h4>
                    <p className="mt-1.5 inline-block rounded-md bg-green-600/10 px-2 py-0.5 font-mono text-sm font-bold text-green-700">{price}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier comparison — Dapps only (other segments show full cards) */}
          {seg.id === "dapps" && (
            <div className="mt-12">
              <CompareAllTiers />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PricingSelector
