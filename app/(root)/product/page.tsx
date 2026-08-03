"use client"

import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/animate-ui/components/buttons/button"
import { MdWidgets as Boxes } from "react-icons/md"
import Link from "next/link"

const capabilities = [
  {
    title: "Deploy public blockchain-backed applications",
    desc: "Build applications using Cerulea Studio and deploy them onto Cerulea's Layer-1 network to get blockchain guarantees where they matter: transparency, verifiability, and shared state.",
  },
  {
    title: "Deploy private chains for organizations",
    desc: "Run private chains for enterprises and governments that need controlled participation, isolation, configurable governance, and organization-specific operational boundaries.",
  },
  {
    title: "Operate everything from one dashboard",
    desc: "Monitor chain and app health, environments, runtime endpoints, key operational actions, and governance workflows from Cerulea Dashboard.",
  },
  {
    title: "Integrate with external systems via Cerulea APIs",
    desc: "Use Cerulea APIs to automate environment management, deployment operations, event integrations, and operational controls without a separate SDK or CLI.",
  },
]

const deeperLinks = [
  { label: "Cerulea Studio", href: "/product/studio" },
  { label: "Cerulea Private", href: "/product/private-chains" },
  { label: "Public L1", href: "/product/public-l1" },
  { label: "Dashboard", href: "/product/dashboard" },
]

const ProductOverview = () => {
  return (
    <div className="container mx-auto space-y-16">
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "Product" }, { label: "Modular Layer-1", icon: Boxes }]}
          headline1={"Cerulea Product"}
          headline2={" Overview."}
          description={
            "Cerulea is an AI-enabled, modular Layer-1 blockchain infrastructure platform that enables developers, enterprises, and governments to easily build, deploy, and manage customizable public and private blockchain-powered applications."
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

      {/* What Cerulea lets you do */}
      <section data-aos="fade-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-title text-3xl font-bold text-foreground">
            What Cerulea lets you do
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Cerulea is built for real deployment outcomes: shipping apps, operating them safely, and running private chains for organizations that need isolation and governance.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {capabilities.map((item, i) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-6"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigate deeper */}
      <section data-aos="fade-up" className="pb-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-title text-3xl font-bold text-foreground">Navigate deeper</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Cerulea is intentionally broken into clean, inspectable surfaces so stakeholders can evaluate it fast.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {deeperLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              <Button variant="secondary">{l.label}</Button>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductOverview
