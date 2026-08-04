import {
  Layers,
  Store,
  Building2,
  Landmark,
  type LucideIcon,
} from "lucide-react"

import ApprovedSaa from "@/assets/HomeImage/ApprovedSaa.svg"
import FeaturedSmol from "@/assets/HomeImage/Featured.svg"
import Container from "@/assets/HomeImage/Container.svg"
import Uneed from "@/assets/HomeImage/Uneed.svg"

const icons: Record<string, LucideIcon> = {
  Layers,
  Store,
  Building2,
  Landmark,
}
const Featured = () => {
  const { coreFeatures, builders } = featuredData

  return (
    <section className="py-10">
      <div>
        {/* Featured On */}
        <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground">
          FEATURED ON
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
            <a
              href="https://www.producthunt.com/products/cerulea?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-cerulea-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Featured on Product Hunt"
              className="inline-flex transition-opacity hover:opacity-80"
            >
              <Container className="w-auto" />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <a
              href="https://smollaunch.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Featured on Smol Launch"
              className="inline-flex transition-opacity hover:opacity-80"
            >
              <FeaturedSmol className="w-auto" />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <a
              href="https://www.saashub.com/cerulea?utm_source=badge&utm_campaign=badge&utm_content=cerulea&badge_variant=color&badge_kind=approved"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Approved on SaaSHub"
              className="inline-flex transition-opacity hover:opacity-80"
            >
              <ApprovedSaa className="w-auto" />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <a
              href="https://www.uneed.best/tool/cerulea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Launching soon on Uneed"
              className="inline-flex transition-opacity hover:opacity-80"
            >
              <Uneed className="w-auto" />
            </a>
          </div>
        </div>

        {/* Featured content — clean separated cards, no internal grid lines */}
        <div className="mx-auto mt-14 max-w-6xl px-4">
          {/* Core features */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {coreFeatures.map((feature, i) => (
              <div
                key={feature.id}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={i * 100}
              >
                <h3 className="ff-title text-lg font-semibold text-foreground sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Builders */}
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {builders.map((builder, i) => {
              const Icon = icons[builder.icon]
              return (
                <div
                  key={builder.id}
                  className="rounded-2xl border border-border bg-card p-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={i * 100}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10">
                    <Icon className="h-5 w-5 text-chart-3" />
                  </span>
                  <h3 className="ff-title mt-4 text-base font-semibold text-foreground">
                    {builder.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {builder.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured

const featuredData = {
  coreFeatures: [
    {
      id: "visual",
      title: "100% Visual",
      description: "Drag & Drop Architecture",
    },
    {
      id: "cli",
      title: "Zero CLI",
      description: "No Terminal Required",
    },
    {
      id: "wasm",
      title: "WASM & EVM",
      description: "Dual Execution Layers",
    },
    {
      id: "deploy",
      title: "1-Click Deploy",
      description: "Instant Testnet & Mainnet",
    },
  ],
  builders: [
    {
      id: "dapps",
      icon: "Layers",
      title: "Dapps",
      description:
        "Your focus should be your application, not the infrastructure beneath it. No-code means production-grade blockchain without coding a single smart contract.",
    },
    {
      id: "sme",
      icon: "Store",
      title: "SME",
      description:
        "No-code removes the two biggest barriers to blockchain adoption: engineering cost and time. Get production-grade infrastructure without specialist hires.",
    },
    {
      id: "enterprise",
      icon: "Building2",
      title: "Enterprise",
      description:
        "No-code does not mean low-power. Cerulea is built to enterprise compliance and industry infrastructure standards.",
    },
    {
      id: "government",
      icon: "Landmark",
      title: "Government",
      description:
        "Governments need sovereignty, audit trails, and long-term operational certainty. No-code means you configure all three without commissioning a custom blockchain build.",
    },
  ],
}
