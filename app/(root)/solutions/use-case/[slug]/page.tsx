import React from "react"
import { notFound } from "next/navigation"
import { Activity, ChevronRight } from "lucide-react"
import { getSolutionBySlug, solutions } from "@/const/soutations"
import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/animate-ui/components/buttons/button"
import Lifecycle from "@/app/(root)/solutions/components/Lifecycle"
import Anatomy from "../../components/Anatomy"
import SimulatorSection from "../../components/SimulatorSection"
import { cn } from "@/lib/utils"
import type { CaseEntry } from "@/types/case"

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

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

import Link from "next/link"

function Hero({ s }: { s: CaseEntry }) {
  const ctaButton = <Button variant="secondary">{s.heroCta}</Button>
  return (
    <section data-aos="fade-up" data-aos-duration="600" className="bg-card">
      <SectionHeader
        segments={[{ label: s.eyebrow }]}
        headline1={s.headline1}
        headline2={s.headline2}
        description={s.heroDescription}
        node={
          s.heroCtaLink ? (
            <Link
              href={s.heroCtaLink}
              target={s.heroCtaLink.startsWith("http") ? "_blank" : undefined}
            >
              {ctaButton}
            </Link>
          ) : (
            ctaButton
          )
        }
      />
    </section>
  )
}

// ---------------------------------------------------------------------------
// Execution mechanics, 6-item grid
// ---------------------------------------------------------------------------

function Mechanics({ s }: { s: CaseEntry }) {
  return (
    <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
      <div className="pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{s.foundationLabel}</Eyebrow>
          <h2 className="text-3xl font-bold text-foreground md:text-[40px]">
            {s.mechanicsTitle}
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-xl">
            {s.mechanicsSubtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.mechanics.map((m, i) => (
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
  )
}

function Applicability({ s }: { s: CaseEntry }) {
  return (
    <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card pt-20">
      <div className="text-center">
        <h2 className="font-title mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-[40px]">
          {s.applicabilityTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-base text-muted-foreground md:text-xl">
          {s.applicabilitySubtitle}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 divide-y divide-dashed divide-border border-t border-dashed border-border px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
        {s.sectors.map((sector, i) => {
          const Icon = sector.icon
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
              <p className="mt-5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Key Asset Types
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
  )
}

// ---------------------------------------------------------------------------
// Network architecture, two tracks
// ---------------------------------------------------------------------------

function NetworkArchitecture({ s }: { s: CaseEntry }) {
  return (
    <section data-aos="fade-up" data-aos-duration="600" className="mt-10 bg-card">
      <div className="pt-20">
        <div className="text-center">
          <h2 className="font-title mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-[40px]">
            {s.networkTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-base text-muted-foreground md:text-lg">
            {s.networkSubtitle}
          </p>
        </div>

        <div className="relative mt-14 border-t border-dashed border-border">
          {/* Subtle background pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #0c1e45 0, #0c1e45 2px, transparent 0, transparent 50%)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative z-10 grid grid-cols-1 divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {s.tracks.map((track, i) => (
            <div key={i} className="px-0 py-12 lg:px-12 lg:py-20">
              <h3 className="font-title text-center mx-auto max-w-md  text-xl font-semibold text-foreground md:text-3xl">
                {track.title}
              </h3>
              <p className="mx-auto mt-2 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
                {track.description}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-start sm:gap-1">
                {track.nodes.map((node, j) => {
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
                      {j < track.nodes.length - 1 && (
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
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }))
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const s = getSolutionBySlug(slug)

  if (!s) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Hero s={s} />
      <Mechanics s={s} />
      <Lifecycle
        title={s.lifecycleTitle}
        subtitle={s.lifecycleSubtitle}
        logSystemName={s.logSystemName}
        steps={s.lifecycleSteps.map((step) => ({
          label: step.label,
          description: step.description,
          logFilename: step.logFilename ?? s.logFilename ?? "execution.log",
          logLines: step.logLines ?? s.logLines ?? [],
          icon: step.icon ? (
            <step.icon className="size-5 shrink-0 text-foreground" />
          ) : (
            <Activity className="size-5 shrink-0 text-foreground" />
          ),
        }))}
      />
      <Anatomy
        title={s.anatomyTitle}
        description={s.anatomyDescription}
        layers={s.layers.map((layer) => ({
          icon: <layer.icon className="size-5" />,
          title: layer.title,
          subtitle: layer.subtitle,
          detail: layer.detail,
          codeSnippet: layer.codeSnippet,
          simulateDescription: layer.simulateDescription,
          simulateTitle: layer.simulateTitle,
          simulateLogs: layer.simulateLogs,
        }))}
      />
      <Applicability s={s} />
      <NetworkArchitecture s={s} />
      <SimulatorSection 
        title={s.simulatorTitle}
        subtitle={s.simulatorSubtitle}
        sim={s.simulator}
      />
    </div>
  )
}
