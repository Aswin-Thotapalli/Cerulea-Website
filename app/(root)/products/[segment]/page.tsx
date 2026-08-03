import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/animate-ui/components/buttons/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PRODUCT_SEGMENTS, getSegmentBySlug } from "@/const/product-segments"
import { ProductFeatureExplorer } from "./ProductFeatureExplorer"

export function generateStaticParams() {
  return PRODUCT_SEGMENTS.map((s) => ({ segment: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ segment: string }>
}): Promise<Metadata> {
  const { segment } = await params
  const s = getSegmentBySlug(segment)
  if (!s) return { title: "Products | Cerulea" }
  return {
    title: `${s.headline1}${s.headline2} | Cerulea`,
    description: s.description,
  }
}

export default async function ProductSegmentPage({
  params,
}: {
  params: Promise<{ segment: string }>
}) {
  const { segment } = await params
  const s = getSegmentBySlug(segment)
  if (!s) notFound()

  return (
    <main>
      {/* Hero */}
      <section className="bg-card">
        <SectionHeader
          segments={[{ label: s.eyebrow }]}
          headline1={s.headline1}
          headline2={s.headline2}
          description={s.description}
          node={
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={s.studioLink} target="_blank" rel="noopener noreferrer">
                <Button>
                  Launch Cerulea Studio
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="/company/contact">
                <Button variant="secondary">Talk to us</Button>
              </Link>
            </div>
          }
        />
      </section>

      {/* Section heading */}
      <div className="mx-auto mt-6 max-w-2xl px-6 text-center md:mt-10">
        <h2 className="ff-title text-3xl font-bold text-foreground">
          {s.featuresTitle}
        </h2>
      </div>

      {/* Interactive feature explorer — click a feature to see its visual */}
      <section className="mt-10 pb-16 md:mt-14 md:pb-24">
        <ProductFeatureExplorer features={s.features} />
      </section>
    </main>
  )
}
