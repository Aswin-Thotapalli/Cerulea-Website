import { notFound } from "next/navigation"
import { industries, getIndustryBySlug } from "@/const/industry-data"
import { Button } from "@/components/animate-ui/components/buttons/button"
import UseCasesTabs from "@/app/(root)/solutions/components/UseCasesTabs"
import SolutionsSimulator from "@/app/(root)/solutions/components/SolutionsSimulator"
import TechStack from "@/app/(root)/solutions/components/TechStack"
import {
  Cpu,
  ChevronRight,
} from "lucide-react"
import SectionHeader from "@/components/SectionHeader"
import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"


export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

// ---------------------------------------------------------------------------
// Section header (reused across the page)
// ---------------------------------------------------------------------------

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2 font-mono text-sm font-semibold tracking-[0.15em] text-foreground/75 uppercase">
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </div>
  )
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()

  return (
    <main>
      <section className="bg-card">
        <SectionHeader
          segments={[{ label: industry.eyebrow }]}
          headline1={industry.headline[0]}
          headline2={industry.headline[1]}
          description={industry.description}
          node={
            industry.primaryCtaLink ? (
              <Link
                href={industry.primaryCtaLink}
                target={industry.primaryCtaLink.startsWith("http") ? "_blank" : undefined}
              >
                <Button variant="default">{industry.primaryCta}</Button>
              </Link>
            ) : (
              <Button variant="default">{industry.primaryCta}</Button>
            )
          }
        />
      </section>

      {/* Strategic Advantages */}
      <section
        data-aos="fade-up"
        data-aos-duration="600"
        className="mt-10 bg-card"
      >
        <div className="pt-10">
          <div className="mx-auto max-w-5xl text-center">
            <Eyebrow>{industry.foundationLabel}</Eyebrow>
            <h2 className="text-3xl font-bold text-foreground md:text-[40px]">
              {industry.advantagesTitle}
            </h2>
            {/* <p className="mt-3 text-base text-muted-foreground md:text-xl">
              {industry.advantagesSubtitle}
            </p> */}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.advantages.map((m, i) => (
              <div key={i} className="p-2">
                <p className="font-mono text-2xl text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}.
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mt-10 bg-card pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="ff-title text-3xl font-bold text-foreground">
            Use Cases & Applications
          </h2>
          <p className="mt-3 text-muted-foreground">
            {industry.useCasesDescription}
          </p>
        </div>

        <UseCasesTabs industrySlug={slug} />
      </section>

      {/* Simulator */}
      <SolutionsSimulator
        title={industry.simulatorTitle}
        description={industry.simulatorDescription || "Calculate your exact savings by moving from legacy networks to Cerulea atomic execution."}
        sim={industry.simulator}
      />

      {/* Architecture */}
      <section
        data-aos="fade-up"
        data-aos-duration="600"
        className="mt-10 bg-card"
      >
        <div className="pt-20">
          <div className="text-center">
            <h2 className="font-title mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-[40px]">
              {industry.architectureTitle || "Network & Execution Architecture"}
            </h2>
            <p className="mx-auto mt-3 max-w-4xl text-base text-muted-foreground md:text-lg">
              {industry.architectureDescription}
            </p>
          </div>

          <div className="relative mt-14 border-t border-dashed border-border">
            {/* Subtle background pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #0c1e45 0, #0c1e45 2px, transparent 0, transparent 50%)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 grid grid-cols-1 divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              {industry.tracks.map((track, i) => {
                const nodes = track.nodes || track.steps?.map((step) => ({
                  label: step.label,
                  sublabel: step.sub,
                  icon: step.icon || Cpu,
                  accent: false,
                })) || []

                return (
                  <div key={i} className="px-0 py-12 lg:px-12 lg:py-20">
                    <h3 className="font-title mx-auto text-center text-xl font-semibold text-foreground md:text-3xl">
                      {track.title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
                      {track.description}
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-start sm:gap-1">
                      {nodes.map((node, j) => {
                        const Icon = node.icon
                        return (
                          <React.Fragment key={j}>
                            <div className="flex flex-col items-center text-center">
                              <div
                                className={cn(
                                  "flex size-14 items-center justify-center rounded-lg",
                                  node.accent
                                    ? "border-2 border-chart-3/50 bg-secondary text-chart-3"
                                    : "border-border bg-secondary text-muted-foreground"
                                )}
                              >
                                <Icon className="size-8" />
                              </div>
                              <p className="mt-3 text-sm leading-tight font-semibold text-foreground sm:text-xs">
                                {node.label}
                              </p>
                              <p className="mt-1 font-mono text-[11px] leading-tight tracking-wide text-muted-foreground uppercase sm:text-[9px]">
                                {node.sublabel}
                              </p>
                            </div>
                            {j < nodes.length - 1 && (
                              <div className="flex flex-col items-center gap-1 self-center px-1">
                                {track.connectorLabels?.[j] && (
                                  <span className="font-mono text-[10px] tracking-wide whitespace-nowrap text-muted-foreground/70 uppercase sm:text-[8px]">
                                    {track.connectorLabels[j]}
                                  </span>
                                )}
                                <span className="rounded-full bg-secondary">
                                  <ChevronRight className="size-6 shrink-0 rotate-90 text-foreground sm:rotate-0" />
                                </span>
                              </div>
                            )}
                          </React.Fragment>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Applicability Across the Spectrum */}
      <section
        data-aos="fade-up"
        data-aos-duration="600"
        className="mt-10 bg-card pt-20"
      >
        <div className="text-center">
          <h2 className="font-title mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-[40px]">
            {industry.spectrumTitle || "Applicability Across the Spectrum"}
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-base text-muted-foreground md:text-xl">
            {industry.spectrumDescription}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-dashed divide-border border-t border-dashed border-border px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
          {industry.spectrum.map((sector, i) => {
            const Icon = sector.icon || Cpu
            return (
              <div key={i} className="px-2 py-10 first:pl-2 last:pr-0 sm:px-8">
                <div className="flex size-14 items-center justify-center rounded-md border border-chart-3/10 bg-background text-chart-3">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {sector.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {sector.description}
                </p>
                <p className="mt-5 font-mono text-[10px]  text-muted-foreground uppercase">
                  KEY FINANCIAL USE CASES
                </p>
                <ol className="mt-3 space-y-2">
                  {sector.assetTypes.map((type, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-chart-3/20 bg-chart-3/10 font-mono text-[9px] font-bold text-chart-3">
                        {j + 1}
                      </span>
                      {type}
                    </li>
                  ))}
                </ol>
              </div>
            )
          })}
        </div>
      </section>

      {/* Technology Stack */}
      <TechStack
        title={industry.stackTitle}
        description={industry.stackDescription}
        layers={industry.stackLayers}
      />

      {/* Accelerated Time-to-Value */}
      <section className="relative mt-10 overflow-hidden bg-card pt-10">
        {/* Subtle background diagonal stripe pattern */}

        <div className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="ff-title text-3xl font-bold text-foreground md:text-4xl">
              Accelerated Time-to-Value
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {industry.timeToValueDescription}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 overflow-hidden border-t border-dashed border-border/85 backdrop-blur-xs md:grid-cols-2">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #0c1e45 0, #0c1e45 2px, transparent 0, transparent 50%)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Traditional Blockchain Development */}
            <div className="flex flex-col gap-6 border-b border-dashed border-border/85 p-6 sm:p-8 md:border-r md:border-b-0">
              <div>
                <p className="font-mono text-[10px] font-bold tracking-widest text-destructive uppercase">
                  {industry.timeToValue.legacyLabel}
                </p>
                <h3 className="ff-title mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  {industry.timeToValue.legacyDuration}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {industry.timeToValue.legacyPhases.map((p) => (
                  <div
                    key={p.title}
                    className="group relative rounded-lg border border-border/40 bg-secondary p-5 shadow-[0_2px_8px_rgba(12,30,69,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:border-destructive/30 hover:shadow-[0_8px_20px_rgba(12,30,69,0.02)]"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h4 className="text-sm font-bold text-foreground transition-colors duration-200">
                        {p.title}
                      </h4>
                      <span className="text-xs font-semibold text-destructive">
                        ({p.duration})
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cerulea Platform Deployment */}
            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <div>
                <p className="font-mono text-[10px] font-bold tracking-widest text-chart-3 uppercase">
                  {industry.timeToValue.ceruleaLabel}
                </p>
                <h3 className="ff-title mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  {industry.timeToValue.ceruleaDuration}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {industry.timeToValue.ceruleaPhases.map((p) => (
                  <div
                    key={p.title}
                    className="group relative rounded-lg border border-border/40 bg-secondary p-5 shadow-[0_2px_8px_rgba(12,30,69,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:border-chart-3/30 hover:shadow-[0_8px_20px_rgba(12,30,69,0.02)]"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h4 className="text-sm font-bold text-foreground transition-colors duration-200">
                        {p.title}
                      </h4>
                      <span className="text-xs font-semibold text-chart-3">
                        ({p.duration})
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
