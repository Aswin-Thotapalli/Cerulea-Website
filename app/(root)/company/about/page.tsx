"use client"

import { Button } from "@/components/animate-ui/components/buttons/button"
import SectionHeader from "@/components/SectionHeader"
import CompanyAbout from "./components/CompanyAbout"
import HowWeEngineer from "./components/HowWeEngineer"
import Leadership from "./components/Leadership"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

const AboutUs = () => {
  return (
    <div className="container mx-auto space-y-16">
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[
            { label: "The Company " },
            { label: "Est. 2021", icon: Calendar },
            { label: "Hyderabad, India", icon: MapPin },
          ]}
          headline1={"Caerulean Bytechains"}
          headline2={" Private Limited."}
          description={`We are the engineering team behind Cerulea. Founded on the principle of **"Blockchain for Good"**, our mandate is to eliminate the infrastructure barrier in Web3, allowing enterprises to design, compile, and deploy sovereign blockchain networks without writing a single line of smart contract code.`}
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

      <CompanyAbout />
      <HowWeEngineer />
      <Leadership />
    </div>
  )
}

export default AboutUs
