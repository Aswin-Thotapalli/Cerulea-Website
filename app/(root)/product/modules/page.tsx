"use client"

import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/animate-ui/components/buttons/button"
import { MdWidgets as Boxes } from "react-icons/md"
import Link from "next/link"

const modules = [
  {
    title: "Cerulea Studio (No-code definition layer)",
    desc: "Define app structure, data models, permissions, and deployment intent without writing SDK/CLI code. Studio is where application logic becomes a deployable configuration.",
  },
  {
    title: "Cerulea Protocol (Public Layer-1 foundation)",
    desc: "A modular Layer-1 network that can host blockchain-backed public applications where shared state and verifiability are required.",
  },
  {
    title: "Cerulea Private (Private chain deployments)",
    desc: "Private chain deployments for enterprises and governments needing isolation, controlled participation, configurable governance, and organization-specific policies.",
  },
  {
    title: "Cerulea Dashboard (Operations + governance surface)",
    desc: "A single control plane to manage environments, view status, monitor health, and perform operational actions consistently across deployments.",
  },
  {
    title: "Cerulea APIs (Integration surface)",
    desc: "Programmatic control and integration endpoints for deployments: management actions, runtime operations, and system integrations. Designed to replace glue code with stable primitives.",
  },
  {
    title: "AI-assisted guidance (Cross-cutting capability)",
    desc: "AI assistance is used to reduce setup errors and improve operator clarity: guided decisions, safer defaults, and explainability of configuration impacts before deployment.",
  },
]

const whyModular = [
  {
    title: "Adopt what you need",
    desc: "Organizations can start with private chains or public app deployments and expand into deeper governance/operations without rebuilding.",
  },
  {
    title: "Clear evaluation boundaries",
    desc: "Stakeholders can evaluate Studio, Protocol, Private, Dashboard, and APIs independently without confusion.",
  },
  {
    title: "Operational consistency",
    desc: "Deployments remain consistent because the management surface and integration surfaces are standardized.",
  },
  {
    title: "Lower implementation friction",
    desc: "No-code definition + APIs replace fragile glue code and reduce the number of moving parts teams must maintain.",
  },
]

const ProductModules = () => {
  return (
    <div className="container mx-auto space-y-16">
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "Product" }, { label: "Modular Layer-1", icon: Boxes }]}
          headline1={"Modules and"}
          headline2={" capabilities."}
          description={
            "Cerulea is modular so different stakeholders can evaluate it cleanly. Developers see build-to-deploy flow; enterprises and governments see governance boundaries and operational safety."
          }
          node={
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/product/studio">
                <Button>Launch Studio</Button>
              </Link>
              <Link href="/developers/docs/foundation">
                <Button variant="secondary">Read the docs</Button>
              </Link>
            </div>
          }
        />
      </section>

      {/* Core modules */}
      <section data-aos="fade-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-title text-3xl font-bold text-foreground">Core modules</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="rounded-lg border border-border bg-card p-6"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h3 className="text-lg font-semibold text-foreground">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why modular matters */}
      <section data-aos="fade-up" className="pb-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-title text-3xl font-bold text-foreground">Why modular matters</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Modularity reduces platform risk: it prevents "all-or-nothing" adoption and allows deployments to expand in capability over time without redesign.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {whyModular.map((m, i) => (
            <div
              key={m.title}
              className="rounded-lg border border-border bg-card p-6"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h3 className="text-lg font-semibold text-foreground">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductModules
