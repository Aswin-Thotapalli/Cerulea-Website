import {
  MdLan,
  MdMemory,
  MdStorage,
  MdAccountBalance,
  MdVerifiedUser,
  MdDns,
  MdLayers,
} from "react-icons/md"
import type { IconType } from "react-icons"
import { TechStackLayer } from "@/types/industry"

interface TechStackProps {
  title: string
  description: string
  layers: TechStackLayer[]
}

// Derive a representative icon from the layer's category label.
function pickIcon(category: string): IconType {
  const c = category.toLowerCase()
  if (/network|transit|chain|ledger|subnet/.test(c)) return MdLan
  if (/logic|compil|engine|deploy|execution/.test(c)) return MdMemory
  if (/data|passport|record|model|schema/.test(c)) return MdStorage
  if (/govern|complian|regulat|policy/.test(c)) return MdAccountBalance
  if (/secur|privacy|access|identity/.test(c)) return MdVerifiedUser
  if (/infra|node|server|host/.test(c)) return MdDns
  return MdLayers
}

export default function TechStack({
  title,
  description,
  layers,
}: TechStackProps) {
  return (
    <section className="relative mt-10 bg-card py-16">
      {/* Header on top */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="ff-title text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Connected stack below */}
      <div className="mx-auto mt-14 max-w-3xl px-6">
        <div className="relative">
          {/* vertical connector line linking the layers */}
          <div
            className="absolute top-6 bottom-6 left-6 w-px bg-border md:left-7"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {layers.map((layer) => {
              const Icon = pickIcon(layer.category)
              return (
                <div key={layer.number} className="relative flex gap-4 md:gap-6">
                  {/* icon node sitting on the connector line */}
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary shadow-sm md:size-14">
                    <Icon className="size-5 md:size-6" />
                  </div>

                  {/* content card */}
                  <div className="flex-1 rounded-xl border border-border bg-secondary p-5 transition-colors duration-200 hover:border-primary/40 md:p-6">
                    <p className="font-mono text-xs font-semibold tracking-wider text-muted-foreground/70 uppercase">
                      {layer.number} · {layer.category}
                    </p>
                    <h4 className="mt-1.5 text-lg font-bold tracking-tight text-foreground md:text-xl">
                      {layer.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {layer.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
