import { Fragment } from "react"
import { Visual } from "@/types/product-details"

export function Schema({ v }: { v: Extract<Visual, { type: "schema" }> }) {
  return (
    <div className="flex w-full flex-1 flex-col">
      {v.entities.map((entity, i) => {
        const isEven = i % 2 === 0
        const isLast = i === v.entities.length - 1

        return (
          <Fragment key={i}>
            <div
              className={`w-full rounded-xl border border-border bg-background p-4 shadow-sm lg:w-[65%] ${
                isEven ? "self-start" : "self-end"
              }`}
            >
              <p className="ff-title font-medium text-foreground">
                Entity: {entity.name}
              </p>
              <div className="ff-subtitle mt-1 space-y-1 text-sm">
                {entity.fields.map((field, j) => (
                  <p key={j}>{field}</p>
                ))}
              </div>
            </div>

            {/* Connector linking consecutive entities (node → dashed line → node) */}
            {!isLast && (
              <div
                className="flex h-11 items-center justify-center"
                aria-hidden="true"
              >
                <div className="flex h-full flex-col items-center">
                  <span className="size-2 rounded-full border border-border bg-background" />
                  <span className="w-px flex-1 border-l border-dashed border-border" />
                  <span className="size-2 rounded-full border border-primary/50 bg-primary/10" />
                </div>
              </div>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
