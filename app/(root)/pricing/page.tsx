import SectionHeader from "@/components/SectionHeader"
import { MdSchedule as Clock } from "react-icons/md"
import PricingSelector from "./components/PricingSelector"
import PricingFAQ from "./components/PricingFAQ"

const pricing = () => {
  return (
    <div className="container mx-auto space-y-16">
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "Transparent Pricing" }]}
          headline1={"Deploy public or private."}
          headline2={"Pick the chain that fits."}
          description={
            "Fixed monthly pricing for public and private chain deployments. Need something larger or fully custom? Our Enterprise team will build a plan around your requirements."
          }
          node={
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-center">
              <Clock className="h-4 w-4 shrink-0" />
              <span className="text-sm font-medium text-foreground">
                Chains provisioned within 24 hours of signup
              </span>
            </div>
          }
        />
      </section>

      <PricingSelector />
      <PricingFAQ />
    </div>
  )
}

export default pricing
