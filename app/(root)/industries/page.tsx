"use client"

import { Suspense, useMemo, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  Search,
  ArrowRight,
  Building2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Tabs,
  TabsList,
  TabsPanel,
  TabsPanels,
  TabsTab,
} from "@/components/animate-ui/components/base/tabs"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Case_RAW_ITEMS,INDUSTRY_VERTICALS, SolutionItem, Tone } from "@/const/solutionsRoot"


const TONE_CLASSES: Record<Tone, string> = {
  "chart-1": "bg-chart-1/15 text-chart-1",
  "chart-2": "bg-chart-2/15 text-chart-2",
  "chart-3": "bg-chart-3/15 text-chart-3",
  "chart-4": "bg-chart-4/15 text-chart-4",
  "chart-5": "bg-chart-5/15 text-chart-5",
  "extra-1": "bg-extra-1/15 text-extra-1",
  primary: "bg-primary/15 text-primary",
}

const TONE_KEYS: Tone[] = [
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "extra-1",
  "primary",
]

// ---------- Data ----------

// Build the full industry items with hrefs, in alphabetical order
const industryItems: SolutionItem[] = INDUSTRY_VERTICALS.map((item) => ({
  ...item,
  href: `/industries/${item.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`,
})).sort((a, b) => a.label.localeCompare(b.label))

// Combine all items for the use case tab, in alphabetical order
const solutionNavItems: SolutionItem[] = Case_RAW_ITEMS.map((item, i) => ({
  ...item,
  tone: TONE_KEYS[i % TONE_KEYS.length],
})).sort((a, b) => a.label.localeCompare(b.label))


function SolutionRow({ item }: { item: SolutionItem }) {
  const Icon = item.icon ?? Building2

  return (
    <Link
      href={item.href}
      className="group flex items-center gap-3 border-b border-border py-4 sm:gap-4 sm:py-5"
    >
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11",
          TONE_CLASSES[item.tone]
        )}
      >
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-foreground sm:text-base">
          {item.label}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          {item.description}
        </p>
      </div>

      <div className="hidden shrink-0 items-center gap-2 lg:flex">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition group-hover:border-foreground/30 group-hover:bg-accent group-hover:text-foreground sm:h-9 sm:w-9">
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
      </div>
    </Link>
  )
}

// ---------- Page ----------

function SolutionsPageContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")

  const [query, setQuery] = useState("")
  const activeTab = tabParam === "usecase" ? "usecase" : "industry"

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("tab", value)
    router.push(`${pathname}?${params.toString()}`)
  }

  // Filter logic for use case tab
  const filteredUseCases = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return solutionNavItems
    return solutionNavItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
    )
  }, [query])

  // Filter logic for industry tab
  const filteredIndustries = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return industryItems
    return industryItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
    )
  }, [query])


  const getCurrentItems = () => {
    return activeTab === "usecase" ? filteredUseCases : filteredIndustries
  }

  return (
    <div className="px-3">
      {/* Hero */}
      <section className="rounded-2xl bg-card px-6 py-12 sm:mb-10 sm:p-12 md:p-16">
        <div className="relative mx-auto min-h-55 max-w-4xl sm:min-h-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-sm bg-extra-1" />
                <span className="ff-subtitle text-sm font-semibold tracking-wider text-extra-1 uppercase">
                  {activeTab === "usecase"
                    ? "USE CASE DIRECTORY"
                    : "INDUSTRY SOLUTIONS"}
                </span>
              </div>
              {activeTab === "usecase" ? (
                <h1 className="ff-title text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl sm:leading-[1.1] lg:text-6xl xl:text-[64px]">
                  Targeted applications.
                  <br />
                  <span className="text-muted-foreground">
                    Enterprise execution.
                  </span>
                </h1>
              ) : (
                <h1 className="ff-title text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl sm:leading-[1.1] lg:text-6xl xl:text-[64px]">
                  Enterprise infrastructure.
                  <br />
                  <span className="text-muted-foreground">
                    Built for your sector.
                  </span>
                </h1>
              )}
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {activeTab === "usecase"
                  ? "Blockchain is not a monolithic product. It is a suite of capabilities. Select your specific use case below to see how Cerulea translates your business logic into immutable infrastructure."
                  : "Generic blockchains fail in production. Cerulea provides highly tailored, regulatory-compliant data architectures designed specifically for the operational realities of your industry."}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Tabs value={activeTab} onValueChange={handleTabChange}>
        {/* Controls */}
        <TabsList className="grid h-auto w-full grid-cols-1 gap-2 p-1 sm:grid-cols-2 sm:gap-4">
          <TabsTab value="industry" className="h-10 text-sm">
            Browse by Industry
          </TabsTab>
          <TabsTab value="usecase" className="h-10 text-sm">
            Browse by Use Case
          </TabsTab>
        </TabsList>

        <InputGroup className="my-6 h-11 w-full rounded-lg border border-border/50 px-2">
          <InputGroupInput
            placeholder="Search a specific technology, workflow, or solution..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <div className="mb-6 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {getCurrentItems().length} of{" "}
          {activeTab === "usecase"
            ? solutionNavItems.length
            : industryItems.length}{" "}
          solutions
        </div>

        {/* List */}
        <TabsPanels>
          <TabsPanel value="usecase">
            {filteredUseCases.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
                No solutions match &ldquo;{query}&rdquo;.
              </div>
            ) : (
              <div>
                {filteredUseCases.map((item) => (
                  <SolutionRow key={item.href + item.label} item={item} />
                ))}
              </div>
            )}
          </TabsPanel>

          <TabsPanel value="industry">
            {filteredIndustries.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
                No solutions match &ldquo;{query}&rdquo;.
              </div>
            ) : (
              <div>
                {filteredIndustries.map((item) => (
                  <SolutionRow key={item.href + item.label} item={item} />
                ))}
              </div>
            )}
          </TabsPanel>
        </TabsPanels>
      </Tabs>
    </div>
  )
}

export default function SolutionsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-muted-foreground">Loading...</div>
      }
    >
      <SolutionsPageContent />
    </Suspense>
  )
}