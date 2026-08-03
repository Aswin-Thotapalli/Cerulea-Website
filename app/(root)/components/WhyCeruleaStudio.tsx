import Image, { StaticImageData } from "next/image"
import HomeSectionTitle from "./HomeSectionTitle"
import whyCeruleaImg1 from "@/assets/HomeImage/WhyCeruleaImg1.png"
import whyCeruleaImg2 from "@/assets/HomeImage/WhyceruleaImg2.png"
import whyCeruleaImg3 from "@/assets/HomeImage/WhyCeruleaImg3.png"

interface WhyCeruleaFeature {
  image: StaticImageData
  title: string
  description: string
}

const WhyCeruleaStudio = () => {
  return (
    <div className="bg-card pt-10 pb-8">
      <HomeSectionTitle
        badge="Why Cerulea Studio"
        title="No more hand-coding smart contracts."
        subtitle="Transform complex blockchain development into a visual workflow."
      />

      {/* Three columns — subgrid keeps headings / visuals / paragraphs on the same level */}
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-4 px-4 sm:mt-16 md:grid-cols-3 md:grid-rows-[auto_auto_auto]">
        {whyCeruleaFeatures.map((feature, i) => (
          <div
            key={feature.title}
            className="flex flex-col gap-3 text-center md:row-span-3 md:grid md:grid-rows-subgrid md:gap-3"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={i * 120}
          >
            <h3 className="ff-title text-xl font-bold text-foreground sm:text-2xl">
              {feature.title}
            </h3>
            <div className="flex h-80 w-full items-center justify-center overflow-hidden rounded-xl md:h-[26rem]">
              <Image
                src={feature.image}
                alt={feature.title}
                className="max-h-full w-full object-contain object-center"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyCeruleaStudio

const whyCeruleaFeatures: WhyCeruleaFeature[] = [
  {
    image: whyCeruleaImg1,
    title: "Accelerated Time-to-Market",
    description:
      "Bypass months of manual scaffolding. Use Cerulea Studio to map your relational data, asset schemas, and governance rules visually. The platform compiles your intent instantly into deployable network state.",
  },
  {
    image: whyCeruleaImg2,
    title: "Deterministic Security",
    description:
      "Human error in custom contracts costs millions. Cerulea translates visual logic into pre-audited cryptographic primitives for absolute certainty.",
  },
  {
    image: whyCeruleaImg3,
    title: "No-Code does not mean Low-Power",
    description:
      "We do not abstract away the blockchain; we structure it. You retain full control over consensus topology, validator environments, and deep RBAC permissions, you just do not have to write the boilerplate to get there.",
  },
]
