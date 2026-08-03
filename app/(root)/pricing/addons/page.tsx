import SectionHeader from "@/components/SectionHeader"
import {
  Server,
  Database,
  HardDrive,
  Globe,
  Rocket,
  BarChart,
  Key,
  Users,
  ArrowRight,
  MonitorDot,
} from "lucide-react"
import Link from "next/link"

const infrastructureAddons = [
  {
    icon: Server,
    name: "+1 validator",
    price: "$18/mo",
    badgeText: "Private Dapps Only",
    badgeColor: "text-blue-500 bg-blue-500/10",
    iconColor: "text-blue-500 bg-blue-500/10",
  },
  {
    icon: Database,
    name: "Additional validators (up to +3)",
    price: "$18/mo each",
    badgeText: "Private Dapps Pro only",
    badgeColor: "text-blue-500 bg-blue-500/10",
    iconColor: "text-indigo-500 bg-indigo-500/10",
  },
  {
    icon: HardDrive,
    name: "+10 GB storage",
    price: "$3/mo",
    badgeText: "Either private tier",
    badgeColor: "text-fuchsia-500 bg-fuchsia-500/10",
    iconColor: "text-emerald-500 bg-emerald-500/10",
  },
  {
    icon: Globe,
    name: "Dedicated RPC node",
    price: "$12/mo",
    badgeText: "Private Dapps only",
    badgeColor: "text-blue-500 bg-blue-500/10",
    iconColor: "text-purple-500 bg-purple-500/10",
  },
]

const brandingAddons = [
  {
    icon: MonitorDot,
    name: "Custom domain for Dapp frontend",
    price: "$35 one-time",
    badgeText: "Private chain customers",
    badgeColor: "text-fuchsia-500 bg-fuchsia-500/10",
    iconColor: "text-rose-500 bg-rose-500/10",
  },
  {
    icon: BarChart,
    name: "Dedicated branded block explorer",
    price: "$40 one-time + $7/mo",
    badgeText: "Private chain customers",
    badgeColor: "text-fuchsia-500 bg-fuchsia-500/10",
    iconColor: "text-amber-500 bg-amber-500/10",
  },
  {
    icon: Key,
    name: "Additional API key",
    price: "$15/mo per key",
    badgeText: "Private chain customers",
    badgeColor: "text-fuchsia-500 bg-fuchsia-500/10",
    iconColor: "text-teal-500 bg-teal-500/10",
  },
  {
    icon: Database,
    name: "Chain data export (CSV/PDF)",
    price: "$10 per export",
    badgeText: "Private chain customers",
    badgeColor: "text-fuchsia-500 bg-fuchsia-500/10",
    iconColor: "text-cyan-500 bg-cyan-500/10",
  },
  {
    icon: Users,
    name: "Additional Studio seats (beyond 2 included)",
    price: "$10/mo per seat",
    badgeText: "Everyone, all tiers",
    badgeColor: "text-emerald-500 bg-emerald-500/10",
    iconColor: "text-orange-500 bg-orange-500/10",
  },
]

export default function AddonsPage() {
  return (
    <div className="container mx-auto space-y-24">
      {/* Hero Section */}
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "ADD-ONS" }]}
          headline1="Extend any tier,"
          headline2="whenever you need to."
          description="Add validators, storage, RPC capacity, branding, and more on top of your existing plan at any time. No need to upgrade tiers for a single capability. Add-ons can be selected when you choose your tier in Cerulea Studio, or added anytime afterward from your dashboard."
        />
      </section>

      {/* Infrastructure Add-Ons */}
      <section className="" data-aos="fade-up">
        <div className="mb-8 flex items-center gap-3">
          <div className="shrink-0 rounded-md bg-foreground p-1.5 text-secondary dark:bg-foreground dark:text-background">
            <Server className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Infrastructure Add-Ons
          </h3>
        </div>

        <div className="w-full">
          <div className="hidden gap-4 border-b border-border/60 bg-secondary/50 px-4 py-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase md:flex">
            <div className="w-1/2">ADD-ON</div>
            <div className="flex w-1/2">
              <div className="w-1/2">PRICE</div>
              <div className="w-1/2 text-right">AVAILABLE TO</div>
            </div>
          </div>

          <div className="flex flex-col">
            {infrastructureAddons.map((item, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col gap-4 border-b border-dashed border-border/60 bg-secondary px-4 py-5 transition-colors hover:bg-muted/50 md:flex-row md:items-center md:gap-0"
              >
                <div className="flex items-center gap-4 md:w-1/2">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconColor}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center justify-between md:w-1/2">
                  <div className="flex items-center md:w-1/2">
                    <span className="text-sm font-semibold text-foreground md:font-medium">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-end md:w-1/2">
                    <span
                      className={`rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase ${item.badgeColor}`}
                    >
                      {item.badgeText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding, Access & Data Add-Ons */}
      <section className="" data-aos="fade-up">
        <div className="mb-8 flex items-center gap-3">
          <div className="shrink-0 rounded-md bg-foreground p-1.5 text-secondary dark:bg-foreground dark:text-background">
            <Rocket className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Branding, Access & Data Add-Ons
          </h3>
        </div>

        <div className="w-full">
          <div className="hidden gap-4 border-b border-border/60 bg-secondary/50 px-4 py-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase md:flex">
            <div className="w-1/2">ADD-ON</div>
            <div className="flex w-1/2">
              <div className="w-1/2">PRICE</div>
              <div className="w-1/2 text-right">AVAILABLE TO</div>
            </div>
          </div>

          <div className="flex flex-col">
            {brandingAddons.map((item, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col gap-4 border-b border-dashed border-border/60 bg-secondary px-4 py-5 transition-colors hover:bg-muted/50 md:flex-row md:items-center md:gap-0"
              >
                <div className="flex items-center gap-4 md:w-1/2">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconColor}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center justify-between md:w-1/2">
                  <div className="flex items-center md:w-1/2">
                    <span className="text-sm font-semibold text-foreground md:font-medium">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-end md:w-1/2">
                    <span
                      className={`rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase ${item.badgeColor}`}
                    >
                      {item.badgeText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-16" data-aos="fade-up">
        <div className="flex flex-col items-start justify-between gap-8 bg-foreground p-8 text-secondary md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <h3 className="mb-3 text-2xl font-bold text-secondary">
              Need something that isnt listed here?
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Larger validator counts, custom infrastructure, or anything beyond
              these add-ons is handled as part of an Enterprise plan.
            </p>
          </div>
          <Link href="/company/contact-sales">
            <button className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-foreground transition-colors hover:bg-primary/90">
              Contact Sales <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
