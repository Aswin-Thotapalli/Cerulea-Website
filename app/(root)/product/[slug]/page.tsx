// app/products/[slug]/page.tsx
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"
import { products, getProductBySlug } from "@/const/product-details"
import { FeatureVisual } from "../_component/FeatureVisual"
import { Button } from "@/components/animate-ui/components/buttons/button"
import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params

  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <main>
      {/* Hero */}
      <section className="bg-card">
        <SectionHeader
          segments={[{ label: product.eyebrow }]}
          headline1={product.headline[0]}
          headline2={product.headline[1]}
          description={product.description}
          node={
            <div className="flex flex-wrap items-center justify-center gap-3">
              {product.primaryCta && (
                <Link
                  href={product.primaryCta.href}
                  target={product.primaryCta.href.startsWith("http") ? "_blank" : undefined}
                >
                  <Button>{product.primaryCta.label}</Button>
                </Link>
              )}
              {product.secondaryCta && (
                <Link
                  href={product.secondaryCta.href}
                  target={product.secondaryCta.href.startsWith("http") ? "_blank" : undefined}
                >
                  <Button variant="secondary">{product.secondaryCta.label}</Button>
                </Link>
              )}
            </div>
          }
        />
      </section>

      {/* Features, alternating text/visual, driven entirely by data */}
      <section className="mt-6 md:mt-10">
        <div className="flex flex-col gap-10">
          {product.features.map((feature, i) => {
            const Icon = feature.icon
            const reversed = i % 2 === 1
            return (
              <div className="relative bg-card px-4 py-10 md:px-8 md:py-16" key={feature.title}>
                <div
                  className={cn(
                    "relative flex flex-col items-start gap-12 lg:items-center lg:gap-32 lg:flex-row",
                    reversed && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div
                    className="w-full lg:w-1/2 space-y-4"
                    data-aos={reversed ? "fade-left" : "fade-right"}
                    data-aos-duration="700"
                  >
                    <span className="inline-flex rounded-lg bg-secondary p-3 text-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="ff-title text-4xl font-bold text-foreground">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                    {feature?.detail && (
                      <p className="ff-subtitle rounded-xl border border-border bg-secondary/50 p-5 font-mono text-sm leading-relaxed text-muted-foreground">
                        {feature?.detail}
                      </p>
                    )}
                    {feature?.bullets && (
                      <div className="flex flex-col gap-10">
                        {feature?.bullets?.map((b, i) => {
                          const Icon = b.icon
                          return (
                            <div
                              key={i}
                              className="flex items-start gap-6"
                              data-aos="fade-up"
                              data-aos-delay={i * 100}
                            >
                              <div className="flex shrink-0 items-center justify-center rounded-full bg-secondary p-3">
                                <Icon
                                  className="h-5 w-5 text-foreground"
                                  strokeWidth={2}
                                />
                              </div>
                              <div className="flex flex-col gap-2 pt-1">
                                <h3 className="ff-title text-xl font-bold text-foreground">
                                  {b.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {b.description}
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  <div
                    className="w-full lg:w-1/2"
                    data-aos={reversed ? "fade-right" : "fade-left"}
                    data-aos-duration="700"
                  >
                    <FeatureVisual
                      visual={feature.visual}
                      icon={
                        "icon" in feature && feature.icon ? (
                          <feature.icon className="size-4 text-primary-foreground" />
                        ) : undefined
                      }
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}