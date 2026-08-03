import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/animate-ui/components/buttons/button"
import { Visual } from "@/types/product-details"

export function GovernancePanel({
  v,
}: {
  v: Extract<Visual, { type: "governance" }>
}) {
  const percent = (v.progress.current / v.progress.total) * 100

  return (
    <div className="w-full flex-1 overflow-hidden rounded-xl border border-border bg-background">
      {v.title && (
        <div className="bg-foreground p-3 font-semibold text-card">
          {v.title}
        </div>
      )}

      <div className="space-y-6 p-6">
        <div>
          <p className="ff-title text-lg font-bold text-foreground">
            {v.actionName}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Initiated by: {v.initiatedBy} - {v.date}
          </p>
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Consensus Progress
            </span>
            <span className="text-sm font-bold text-muted-foreground">
              {v.progress.current} / {v.progress.total} SIGS
            </span>
          </div>
          <Progress value={percent} className="h-2 w-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
          <Button
            size={"lg"}
            className="w-full lg:w-1/2 bg-chart-3 text-card hover:bg-chart-3/90"
            type="button"
          >
            {v.primaryAction}
          </Button>
          {v.secondaryAction && (
            <Button
              size={"lg"}
              className="w-full lg:w-1/2"
              variant={"secondary"}
              type="button"
            >
              {v.secondaryAction}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
