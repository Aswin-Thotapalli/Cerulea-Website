"use client"

import React, { useEffect } from "react"
import { type LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"
import AOS from "aos"
import "aos/dist/aos.css"
// import ScrambledText from "./ScrambledText"

type SegmentIcon = LucideIcon | IconType

export interface HeaderBadgeSegment {
  label: string
  icon?: SegmentIcon
}

// Renders **bold** segments as <strong>, everything else as plain text
function renderDescription(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })
}

export default function SectionHeader({
  segments,
  headline1,
  headline2,
  description,
  node,
}: {
  segments: HeaderBadgeSegment[]
  headline1: string
  headline2?: string
  description: string
  node?: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 40,
      disableMutationObserver: true,
    })
  }, [])

  return (
    <div className="mx-auto max-w-4xl space-y-5 py-12 text-center md:px-0 md:py-16">
      {/* Badge, dashed top/bottom, pipe-separated segments */}
      <div
        className="flex justify-center will-change-transform"
        data-aos="fade-down"
      >
        <div className="inline-flex flex-row flex-wrap items-center justify-center gap-y-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2 shadow-sm transition-all duration-300 ease-out hover:shadow-md md:flex-nowrap md:px-7 md:py-2.5">
          {segments?.map((seg, i) => {
            const Icon = seg.icon
            return (
              <React.Fragment key={i}>
                {i > 0 && (
                  <span className="mx-2 text-primary/40 select-none md:mx-4">
                    |
                  </span>
                )}
                <span className="flex items-center gap-1.5 font-mono text-sm font-semibold tracking-wide whitespace-nowrap text-foreground/75 md:text-[15px]">
                  {Icon && <Icon className="size-3 md:size-3.5" />}
                  {seg.label}
                </span>
              </React.Fragment>
            )
          })}
        </div>
      </div>

      <h1
        className="text-4xl leading-tight font-bold md:text-[64px] md:leading-18"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {headline1}
        <br />
        {headline2}
      </h1>

      <p
        className="text-lg leading-relaxed text-muted-foreground md:text-xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {renderDescription(description)}
      </p>
      {/* <ScrambledText
        className="scrambled-text-demo ff-body! text-base! leading-relaxed text-muted-foreground!"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        {renderDescription(description)}
      </ScrambledText> */}

      {node && (
        <div data-aos="fade-up" data-aos-delay="300">
          {node}
        </div>
      )}
    </div>
  )
}
