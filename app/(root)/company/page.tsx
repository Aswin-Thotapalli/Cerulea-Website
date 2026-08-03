"use client"

import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/animate-ui/components/buttons/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const cards = [
  {
    title: "About",
    desc: "Mission, values, and what we believe production infrastructure should be.",
    href: "/company/about",
  },
  {
    title: "Contact",
    desc: "Get in touch for demos, sales, or partnerships.",
    href: "/company/contact",
  },
]

const Company = () => {
  return (
    <div className="container mx-auto space-y-16">
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "Company" }]}
          headline1={"Company"}
          description={
            "Learn about the team, values, and how to contact us for partnerships, sales, or architecture reviews."
          }
        />
      </section>

      <section data-aos="fade-up">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="flex flex-col rounded-lg border border-border bg-card p-6"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h3 className="font-title text-2xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <Link href={c.href} className="mt-4 inline-block">
                <Button variant="secondary">
                  Open
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Company
