import { Database, Zap, Globe, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface AddOn {
  icon: React.ElementType
  title: string
  price: string
  description: string
}

const addOns: AddOn[] = [
  {
    icon: Database,
    title: "+1 Validator",
    price: "$10/mo",
    description: "Add another validator node to your active set",
  },
  {
    icon: Zap,
    title: "Dedicated RPC Node",
    price: "$12/mo",
    description: "Exclusive RPC endpoint for your application",
  },
  {
    icon: Globe,
    title: "Custom Domain",
    price: "$35 one-time",
    description: "Branded block explorer and RPC domain",
  },
  {
    icon: Users,
    title: "Additional Studio Seat",
    price: "$10/mo",
    description: "Invite a team member to your workspace",
  },
]

const ExtendAny = () => {
  return (
    <section className="bg-card">
      <div className="rounded-2xl">
        {/* Header */}
        <div
          className="flex flex-col items-start justify-between gap-6 px-6 pt-10 md:flex-row md:items-end md:px-10"
          data-aos="fade-up"
        >
          <div>
            <h2 className="text-title text-2xl font-bold text-foreground">
              Extend any tier
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Add validators, storage, RPC capacity, branding, and more on top
              of any plan. Selected when choosing your tier in Cerulea Studio,
              or added anytime afterward from your dashboard.
            </p>
          </div>

          <Link href="/pricing/addons">
            <Button
              variant="outline"
              className="h-10! shrink-0 cursor-pointer gap-2 rounded-full border-border bg-transparent text-foreground hover:bg-background"
            >
              View All Add-Ons
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Add-on grid */}
        <div
          className="mt-10 grid grid-cols-1 px-10 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {addOns.map(({ icon: Icon, title, price, description }, index) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={cn(
                "flex flex-col gap-4 border-border py-6 pr-4 pl-0 sm:py-8 sm:pl-6 sm:first:pl-0",
                index % 2 !== 0 && "sm:border-l",
                index !== 0 && "lg:border-l"
              )}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground">
                <Icon className="h-4 w-4" />
              </span>

              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {price}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExtendAny
