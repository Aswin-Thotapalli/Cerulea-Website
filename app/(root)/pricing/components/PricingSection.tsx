import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

type PlanFeature = string

interface PricingPlan {
  eyebrow: string
  price: string
  period: string
  description: string
  features: PlanFeature[]
  cta: string
  highlighted?: boolean
  badge?: string
}

const plans: PricingPlan[] = [
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
    highlighted: true,
    badge: "Most popular",
  },
]

const enterpriseFeatures: PlanFeature[] = [
  "Bring your own cloud (AWS, GCP, on-premise)",
  "Dedicated engineering SLA",
  "Custom validator & RPC topology",
  "Unlimited transaction cap",
  "Custom branding & domain",
  "Architecture review & onboarding",
]

const PricingSection = () => {
  return (
    <section className="bg-card">
      <div className="">
        {/* Top row: 3 plan cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.eyebrow}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={cn(
                "group relative flex flex-col p-8 transition-colors duration-300",
                plan.highlighted
                  ? "bg-[#0c1e45] text-card shadow-xl"
                  : "border-r border-b border-border bg-card text-card-foreground"
              )}
            >
              {plan.badge && (
                <span className="absolute top-6 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
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

              <div className="mt-4 flex items-baseline gap-1">
                <span className="ff-title text-4xl font-bold">
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    plan.highlighted ? "text-muted" : "text-muted-foreground"
                  )}
                >
                  {plan.period}
                </span>
              </div>

              <p
                className={cn(
                  "mt-4 text-sm leading-relaxed",
                  plan.highlighted ? "text-muted" : "text-muted-foreground"
                )}
              >
                {plan.description}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    {plan.highlighted ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border bg-muted-foreground/10">
                        <Check className="h-3 w-3 text-foreground" />
                      </span>
                    )}
                    <span
                      className={
                        plan.highlighted ? "text-muted" : "text-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://studio.cerulea.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={cn(
                    "mt-8 h-12! w-full cursor-pointer justify-center gap-2 rounded-full transition-all duration-300",
                    plan.highlighted
                      ? "bg-primary text-primary-foreground group-hover:shadow-lg hover:bg-primary/90"
                      : "border border-border bg-transparent text-foreground group-hover:border-primary/50 group-hover:bg-accent/50 hover:bg-accent"
                  )}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom row: Enterprise / Contact us */}
        <div
          className="group mt-6 rounded-2xl p-8 transition-colors duration-300 hover:bg-card md:p-10"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Enterprise
              </span>
              <h3 className="ff-title mt-3 text-2xl font-bold text-foreground">
                Contact us
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For organisations needing custom architecture, compliance, and
                dedicated engineering support.
              </p>
            </div>

            <ul className="grid grid-cols-1 space-y-4">
              {enterpriseFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border bg-muted-foreground/10">
                    <Check className="h-3 w-3 text-foreground" />
                  </span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}

              <Link
                href="/company/contact-sales"
              >
                <Button
                  variant="outline"
                  className="mt-6 h-12! w-full cursor-pointer justify-center gap-2 rounded-full transition-all duration-300 group-hover:border-primary/50 group-hover:bg-accent/50"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
                </Button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
