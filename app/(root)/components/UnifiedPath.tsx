import Image, { StaticImageData } from "next/image"
import HomeSectionTitle from "./HomeSectionTitle"
import Image1 from "@/assets/HomeImage/Unified1.png"
import Image2 from "@/assets/HomeImage/unified2.png"
import Image3 from "@/assets/HomeImage/unified3.png"
import Image4 from "@/assets/HomeImage/unified4.png"

interface UnifiedPathStep {
  image: StaticImageData
  title: string
  subtitle: string
  description: string
}

const UnifiedPath = () => {
  return (
    <div className="mt-10 bg-card pt-10">
      <HomeSectionTitle
        badge="THE PIPELINE"
        title="One unified path to execution."
        subtitle="From visual design to live deployment, Cerulea Studio handles
the complexity so you can focus on building."
      />

      {/* Two per row — numbering conveys the sequence; big visuals */}
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-16 px-4 sm:grid-cols-2">
        {unifiedPathSteps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col gap-5 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 120}
          >
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <h3 className="ff-title mt-3 text-2xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary">
                {step.subtitle}
              </p>
            </div>
            <div className="h-72 w-full overflow-hidden rounded-xl md:h-[24rem]">
              <Image
                src={step.image}
                alt={step.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UnifiedPath

const unifiedPathSteps: UnifiedPathStep[] = [
  {
    image: Image1,
    title: "Design",
    subtitle: "Cerulea Studio",
    description:
      "Map your core data models, entities, and governance rules visually.",
  },
  {
    image: Image2,
    title: "Assist",
    subtitle: "Cerulea Intelligence",
    description:
      "Accelerate your build with contextual AI scaffolding and structural guidance.",
  },
  {
    image: Image3,
    title: "Compile",
    subtitle: "Execution Engine",
    description:
      "Deterministic translation into battle-tested WASM or EVM binaries.",
  },
  {
    image: Image4,
    title: "Operate",
    subtitle: "Platform Dashboard",
    description:
      "Manage nodes, webhooks, and live network telemetry seamlessly.",
  },
]
