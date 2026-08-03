import leftImage from "@/assets/footer/left.png"
import rightImage from "@/assets/footer/right.png"
import { Button } from "../animate-ui/components/buttons/button"
import Image from "next/image"

export default function FooterBanner() {
  return (
    <section className="relative mx-auto mt-16 flex max-w-7xl items-center justify-between bg-card p-4">
      <Image
        src={leftImage}
        height={400}
        width={400}
        alt="Left decoration"
        className="h-80 w-auto"
        data-aos="fade-right"
        data-aos-duration="800"
      />

      <div
        className="absolute top-1/2 left-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 px-4 text-center"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <h2 className="text-3xl font-bold">
          Stop hand-coding your blockchain logic
        </h2>
        <p className="mx-4 my-6 text-muted-foreground">
          Open Cerulea Studio to visually configure and deploy your complete
          blockchain architecture today. No specialized developers required.
        </p>
        <span className="flex flex-wrap items-center justify-center gap-4">
          <Button>Start Building Now</Button>
          <Button variant="secondary">Contact Sales</Button>
        </span>
      </div>

      <Image
        src={rightImage}
        height={400}
        width={400}
        alt="Right decoration"
        className="h-80 w-auto"
        data-aos="fade-left"
        data-aos-duration="800"
      />
    </section>
  )
}
