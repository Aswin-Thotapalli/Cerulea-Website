import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type CellValue = string | boolean

interface CompareRow {
  label: string
  values: [CellValue, CellValue, CellValue, CellValue]
}

interface CompareSection {
  title: string
  rows: CompareRow[]
}

const columns = [
  "Public Dapps",
  "Private Dapps",
  "Private Dapps Pro",
  "Enterprise",
]
// No highlighted/"Popular" column — all tiers styled uniformly.
const highlightedColumnIndex = -1

const sections: CompareSection[] = [
  {
    title: "Infrastructure",
    rows: [
      { label: "Validators", values: ["7", "3", "6", "Custom"] },
      {
        label: "RPC Access",
        values: ["Shared, 2 nodes", "Shared", "1 dedicated node", "Custom"],
      },
      {
        label: "Transaction Cap",
        values: ["100,000/mo", "50,000/mo", "100,000/mo", "Custom"],
      },
      { label: "Storage", values: ["30 GB", "15 GB", "40 GB", "Custom"] },
    ],
  },
  {
    title: "Deployment & Governance",
    rows: [
      {
        label: "Deployment Model",
        values: [
          "Public L1",
          "Private Chain",
          "Private Chain",
          "Private Chain",
        ],
      },
      {
        label: "Governance",
        values: [
          "Token-Weighted",
          "Authority-Based",
          "Authority-Based",
          "Authority / Custom",
        ],
      },
      {
        label: "Studio Access",
        values: [
          "Public Dapps",
          "Private Dapps",
          "Private Dapps",
          "Private Dapps",
        ],
      },
      {
        label: "Cerulea Intelligence (AI)",
        values: [true, true, true, true],
      },
    ],
  },
  {
    title: "Support",
    rows: [
      {
        label: "Dashboard",
        values: ["Standard", "Standard", "Standard", "Enterprise Logging"],
      },
      {
        label: "Support Channel",
        values: ["Email", "Email", "Priority Email", "Dedicated SLA"],
      },
    ],
  },
]

const dashedBorder = { borderTop: "1px solid var(--border)" }

const CompareCell = ({
  value,
  highlighted,
}: {
  value: CellValue
  highlighted?: boolean
}) => {
  if (typeof value === "boolean") {
    return value ? (
      <span
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-full",
          highlighted ? "bg-foreground" : "bg-transparent"
        )}
      >
        <Check
          className={cn(
            "h-3.5 w-3.5",
            highlighted ? "text-background" : "text-muted-foreground"
          )}
        />
      </span>
    ) : (
      <span className="text-muted-foreground">, </span>
    )
  }

  return (
    <span
      className={cn(
        "text-sm",
        highlighted ? "font-semibold text-foreground" : "text-muted-foreground"
      )}
    >
      {value}
    </span>
  )
}

const CompareAllTiers = () => {
  return (
    <section className="bg-card pt-15">
      <div className="">
        {/* Header */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="ff-title text-3xl font-bold text-foreground">
            Compare all tiers
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            A full breakdown of platform capabilities across every plan.
          </p>
        </div>

        {/* Table */}
        <div
          className="mt-10 overflow-hidden"
          style={{ borderStyle: "solid" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[720px]">
              {/* Column headers */}
              <div className="grid grid-cols-[1.3fr_repeat(4,1fr)] bg-card px-6 py-4">
            <div />
            {columns.map((col, i) => (
              <div key={col} className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-xs",
                    i === highlightedColumnIndex
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {col}
                </span>
                {i === highlightedColumnIndex && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold tracking-wide text-primary-foreground uppercase">
                    Popular
                  </span>
                )}
              </div>
            ))}
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              {/* Section title */}
              <div className="bg-accent px-6 py-2.5" style={dashedBorder}>
                <span className="text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
                  {section.title}
                </span>
              </div>

              {/* Rows */}
              {section.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.3fr_repeat(4,1fr)] items-center bg-card px-6 py-3.5"
                  style={dashedBorder}
                >
                  <span className="text-sm text-foreground">{row.label}</span>
                  {row.values.map((value, i) => (
                    <CompareCell
                      key={i}
                      value={value}
                      highlighted={i === highlightedColumnIndex}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompareAllTiers
