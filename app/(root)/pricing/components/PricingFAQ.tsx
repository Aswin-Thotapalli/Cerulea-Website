import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/animate-ui/components/radix/accordion"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "Is pricing monthly or one-time?",
    answer:
      "dApp plans are simple monthly subscriptions. Enterprise and Government are one-time licenses priced by scale, after which you add monthly add-ons as you grow.",
  },
  {
    question: "How quickly will my chain be provisioned?",
    answer:
      "Your chain is provisioned within 24 hours of signup, often much faster. Once provisioning completes, validator and RPC infrastructure is live and your genesis configuration is ready inside Studio.",
  },
  {
    question: "What are the dApp tiers?",
    answer:
      "Three monthly plans: Public dApps at $40/mo (deploy to the Cerulea Public L1), Private dApps at $30/mo (a sovereign, fully isolated private chain), and Private dApps Pro at $60/mo (more validators, a dedicated RPC node, and advanced modules).",
  },
  {
    question: "What happens if I exceed my transaction cap?",
    answer:
      "On Private dApps, exceeding your cap moves you up to Private dApps Pro. On Public dApps or Pro, our team reaches out to add capacity or move you to an Enterprise plan.",
  },
  {
    question: "How does Enterprise pricing work?",
    answer:
      "Enterprise is a one-time license by scale — SME at $6,000, Growth at $18,000, and Enterprise at $30,000 — then you scale monthly with add-ons (validators, seats, SSO, staging, private CeruleAI, and more). SME is the entry rung of the same ladder, so you can move up as you grow.",
  },
  {
    question: "How is Government pricing structured?",
    answer:
      "Government is a single sovereign license at $12,000 (one-time). On-soil data residency and backup are included by mandate, never a paid add-on. Extend it with monthly add-ons such as extra departments, officer seats, Aadhaar verification volume, and eSign.",
  },
  {
    question: "Can I add more validators, storage, or RPC capacity later?",
    answer:
      "Yes. Additional validators, storage, and dedicated RPC nodes are available as add-ons on every plan, see the add-ons under each segment for pricing and eligibility.",
  },
  {
    question: "Can I upgrade from one tier to another?",
    answer:
      "Yes. Your Studio projects and configuration carry forward when you upgrade, whether moving from Private dApps to Pro, or up the SME to Growth to Enterprise ladder.",
  },
  {
    question: "Can I use my own domain, branded explorer, or extra seats?",
    answer:
      "Yes. A custom domain and a branded block explorer are available to private-chain customers, and additional Studio seats and API keys are available across the tiers as add-ons.",
  },
]

const PricingFAQ = () => {
  return (
    <section className="bg-card pt-10">
      <div>
        {/* Header */}
        <div className="border-b border-border pb-8 text-center" data-aos="fade-down">
          <h2 className="ff-title text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Common questions about tiers, transaction caps, add-ons, and
            Enterprise licensing.
          </p>
        </div>

        <div className="mt-8" />

        <div className="mx-auto max-w-3xl pb-8">
          {/* Accordion */}
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  borderTop:
                    index !== 0 ? "1px solid var(--border)" : undefined,
                }}
              >
                <AccordionTrigger className="group flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-foreground hover:no-underline">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default PricingFAQ
