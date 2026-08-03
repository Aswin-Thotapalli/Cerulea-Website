"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MdWidgets,
  MdBolt,
  MdVerifiedUser,
  MdRocketLaunch,
  MdStorage,
  MdChat,
  MdInsertChart,
  MdVpnKey,
} from "react-icons/md"
import type { IconType } from "react-icons"
import { cn } from "@/lib/utils"
import { FeatureVisual } from "@/app/(root)/product/_component/FeatureVisual"
import type { SegmentFeature } from "@/const/product-segments"

// Icons live inside this client component (function refs can't be passed as
// props from the server page).
const icons: IconType[] = [
  MdWidgets,
  MdBolt,
  MdVerifiedUser,
  MdRocketLaunch,
  MdStorage,
  MdChat,
  MdInsertChart,
  MdVpnKey,
]

function FeaturePanel({
  feature,
  Icon,
}: {
  feature: SegmentFeature
  Icon: IconType
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
      <div className="w-full space-y-4 lg:w-1/2">
        <span className="inline-flex rounded-lg bg-secondary p-3 text-foreground">
          <Icon className="size-6" />
        </span>
        <h3 className="ff-title text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {feature.description}
        </p>
        {feature.detail && (
          <p className="rounded-xl border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
            {feature.detail}
          </p>
        )}
      </div>

      <div className="flex w-full min-w-0 lg:w-1/2">
        {feature.visual && (
          <FeatureVisual
            visual={feature.visual}
            icon={<Icon className="size-5" />}
          />
        )}
      </div>
    </div>
  )
}

export function ProductFeatureExplorer({
  features,
}: {
  features: SegmentFeature[]
}) {
  const [active, setActive] = useState(0)

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,340px)_1fr]">
        {/* Clickable feature menu (opens an inline panel under the active item
            on mobile; drives the side panel on desktop). */}
        <div className="flex flex-col gap-2">
          {features.map((f, i) => {
            const Icon = icons[i % icons.length]
            const isActive = i === active
            return (
              <div key={f.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-200",
                    isActive
                      ? "border-primary/40 bg-primary/5"
                      : "border-border bg-card hover:border-primary/30 hover:bg-primary/5"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "bg-muted/50 text-muted-foreground"
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {f.title}
                  </span>
                </button>

                {/* Mobile only: inline panel directly under the active item */}
                {isActive && (
                  <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-card p-5 lg:hidden">
                    <FeaturePanel feature={f} Icon={Icon} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Desktop only: side panel */}
        <div className="hidden rounded-2xl border border-border bg-card p-6 lg:block lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <FeaturePanel
                feature={features[active]}
                Icon={icons[active % icons.length]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
