import type { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ | Cerulea",
  description:
    "Frequently asked questions about Cerulea, the Dynamic Consensus Framework, pricing, and development timelines.",
  alternates: { canonical: "https://cerulea.io/faq" },
}

const faqs = [
  {
    q: "What is Cerulea?",
    a: "Cerulea is a no-code blockchain platform by Caerulean Bytechains Private Limited that enables organisations to build and deploy custom blockchain networks without writing blockchain code. It provides a dual-chain architecture consisting of a public permissionless L1 and private permissioned chains, both coordinated by the Dynamic Consensus Framework. Cerulea's component suite includes Studio, APIs, SDK, Explorer, Dashboard, and Intelligence modules.",
  },
  {
    q: "What is the Dynamic Consensus Framework?",
    a: "The Dynamic Consensus Framework (DCF) is the consensus layer that coordinates all Cerulea chains. It is a policy-based validator coordination system that allows runtime changes to consensus parameters without requiring hard forks. DCF governs both the public L1 and private permissioned chains, providing a unified mechanism for block finality, validator admission, and governance transitions.",
  },
  {
    q: "Is Cerulea public or private?",
    a: "Cerulea offers both. Its dual-chain architecture includes a public permissionless L1 for decentralised applications open to any participant, and private permissioned chains for enterprises, governments, and regulated industries that require access control, data privacy, and sovereign governance. Both chain types operate under the same Dynamic Consensus Framework.",
  },
  {
    q: "What does Cerulea Studio do?",
    a: "Cerulea Studio is a visual builder that lets developers and operators design data models, asset schemas, and governance rules using a drag-and-drop interface, then compile them directly into deployable network state without writing smart contract code. Studio outputs WASM or EVM-compatible binaries ready for chain deployment. It handles entity modelling, token issuance, role-based access control, and multi-party workflow logic.",
  },
  {
    q: "How long does development take?",
    a: "Building and deploying a blockchain network on Cerulea just takes months. The timeline covers use-case definition, network design, data model configuration in Cerulea Studio, validator onboarding, compliance review, and staged activation. Compilation of individual components within Studio can complete quickly, but a full production chain is a months-long development process.",
  },
  {
    q: "How much does Cerulea cost?",
    a: "Cerulea is available in three tiers: Public Dapps at 40 USD per month for hosted public L1 application deployment; Private Dapps at 30 USD per month for private permissioned chain access; and Private Dapps Pro at 60 USD per month, which includes advanced governance tooling, compliance features, and dedicated support. All prices are in USD and billed monthly.",
  },
  {
    q: "Who builds Cerulea?",
    a: 'Cerulea is built by Caerulean Bytechains Private Limited (CIN: U72900TG2021PTC154300), a blockchain infrastructure company incorporated on 24 August 2021 and headquartered in Secunderabad, Telangana, India. The company\'s motto is "Blockchain for Good."',
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

export default function FAQPage() {
  return (
    <div className="container mx-auto space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "FAQ" }]}
          headline1={"Frequently Asked"}
          headline2={" Questions."}
          description={
            "Common questions about Cerulea, the Dynamic Consensus Framework, pricing, and development."
          }
        />
      </section>

      <section data-aos="fade-up" className="mx-auto w-full max-w-3xl">
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-card px-5 py-4"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                <span>{q}</span>
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
