"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { INDUSTRIES } from "@/const/nav-data"

// Split the 24 industries (in /industries order) into 4 columns of 6.
const GROUPS = [0, 1, 2, 3].map((c) => INDUSTRIES.slice(c * 6, c * 6 + 6))

export default function HeroSection() {
  const [indices, setIndices] = useState([0, 0, 0, 0])

  useEffect(() => {
    let cell = 0
    // Advance one tile at a time (round-robin) so the four tiles never change
    // together. Calm cadence: a single tile fades every 3.2s, so any given
    // tile only changes ~every 12.8s — unhurried, never busy.
    const t = setInterval(() => {
      setIndices((prev) => {
        const next = [...prev]
        next[cell] = (next[cell] + 1) % GROUPS[cell].length
        return next
      })
      cell = (cell + 1) % GROUPS.length
    }, 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-card px-5 py-16 text-center sm:min-h-[88vh] sm:px-6 sm:py-24">
      {/* whisper-faint background grid */}
      <div
        className="pointer-events-none absolute inset-0 grid grid-cols-12"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="border-r border-dashed border-border/10 last:border-r-0"
          />
        ))}
      </div>
      {/* radial accent glow behind the hero */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 62% 70% at 50% 54%, color-mix(in oklch, var(--primary) 13%, transparent), transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Eyebrow pill — bigger and clearly visible */}
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-green-600/30 bg-green-600/10 px-5 py-2 text-sm font-semibold text-green-700 shadow-sm backdrop-blur-md sm:mb-8 sm:px-6 sm:py-2.5 sm:text-base">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
          </span>
          The No-Code Blockchain Platform
        </div>

        {/* Headline */}
        <h1 className="ff-title text-4xl leading-tight font-bold tracking-tight text-balance text-foreground sm:text-5xl">
          Build with Cerulea AI
        </h1>

        {/* Cycling industry grid, in a soft, elevated card with clean
            hairline panel dividers (per the reference card). */}
        <div className="mt-10 w-full max-w-3xl overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-[0_30px_80px_-30px_color-mix(in_oklch,var(--foreground)_22%,transparent)] sm:mt-12">
          <div className="grid grid-cols-2">
            {GROUPS.map((group, ci) => {
              const industry = group[indices[ci]]
              // hairline plus-divider between the four flush panels
              const cellBorder = ["border-r border-b", "border-b", "border-r", ""][ci]
              return (
                <Link
                  key={ci}
                  href={industry.href}
                  aria-label={`Explore ${industry.label}`}
                  className={`group relative flex h-44 items-center justify-center border-border/60 px-4 text-center sm:h-40 ${cellBorder}`}
                >
                  {/* mode="wait": old label fades OUT, then new fades IN — no
                      overlap/ghosting. Directional easing removes the blank
                      gap: exit eases IN (snaps to empty fast at the end),
                      enter eases OUT (rises from empty fast at the start), so
                      the fade-in begins right as the fade-out lands.
                      initial={false}: no all-at-once fade-in on page load. */}
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={industry.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
                      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-4"
                    >
                      <span className="ff-title text-base leading-tight font-semibold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-xl md:text-2xl">
                        {industry.label}
                      </span>
                      <span className="max-w-[26ch] text-xs leading-snug text-muted-foreground transition-colors duration-200 group-hover:text-foreground/70 sm:text-sm">
                        {industry.description}
                      </span>
                    </motion.span>
                  </AnimatePresence>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
