import { Visual } from "@/types/product-details"
import { Terminal } from "./Terminal"
import { Metric } from "./Metric"
import { ListPanel } from "./ListPanel"
import { GridPanel } from "./GridPanel"
import { Chat } from "./Chat"
import { Inbox } from "./Inbox"
import { Diagram } from "./Diagram"
import { Schema } from "./Schema"
import { Fleet } from "./Fleet"
import { GovernancePanel } from "./GovernancePanel"
import { Matrix } from "./Matrix"

export function FeatureVisual({
  visual,
  icon,
}: {
  visual: Visual
  icon?: React.ReactNode
}) {
  switch (visual.type) {
    case "terminal":
      return <Terminal v={visual} />
    case "metric":
      return <Metric v={visual} />
    case "list":
      return <ListPanel v={visual} />
    case "chat":
      return <Chat v={visual} />
    case "diagram":
      return <Diagram v={visual} />
    case "schema":
      return <Schema v={visual} />
    case "inbox":
      return <Inbox v={visual} icon={icon} />
    case "grid":
      return <GridPanel v={visual} />
    case "fleet":
      return <Fleet v={visual} icon={icon} />
    case "governance":
      return <GovernancePanel v={visual} />
    case "matrix":
      return <Matrix v={visual} />
  }
}
