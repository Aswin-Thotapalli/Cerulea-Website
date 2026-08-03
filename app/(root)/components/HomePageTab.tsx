import Image, { StaticImageData } from "next/image"
import {
  CreditCard,
  Share2,
  KeyRound,
  Landmark,
  ArrowLeftRight,
  LucideIcon,
  Layers2,
} from "lucide-react"
import HomeSectionTitle from "./HomeSectionTitle"
import TokenizedAssetsImg from "@/assets/HomeImage/01_TokenizedAssets.png"
import SupplyChainImg from "@/assets/HomeImage/02_SupplyChain.png"
import IdentityAccessImg from "@/assets/HomeImage/03_IdentityAccess.png"
import FinancialSettlementsImg from "@/assets/HomeImage/04_FinancialSettlements.png"
import DecentralizedFinanceImg from "@/assets/HomeImage/05_DecentralizedFinance.png"
import GovernmentRegistriesImg from "@/assets/HomeImage/06_GovernmentRegistries.png"
import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanels,
  TabsPanel,
} from "@/components/animate-ui/primitives/base/tabs"

interface ArchitectureBlueprint {
  tabIcon: LucideIcon
  tabLabel: string
  title: string
  subtitle: string
  platformComponents: string[]
  businessImpact: string
  workflow: string[]
  image: StaticImageData
}

const HomePageTab = () => {
  return (
    <div className="mt-10 bg-card pt-10">
      <HomeSectionTitle
        badge="BUILT FOR MISSION-CRITICAL INDUSTRIES"
        title="Built for mission-critical architecture."
        subtitle="Every industry has a trust bottleneck. Cerulea provides the infrastructure to solve it. Select a use case below to view the architectural blueprint and deployment workflow."
      />

      <Tabs defaultValue={blueprints[0].tabLabel} className="mt-10 w-full ">
        {/* tab list */}
        <TabsList className="mb-4 flex items-center gap-8 overflow-x-auto border-y border-border px-4 py-2 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {blueprints.map((blueprint) => {
            const Icon = blueprint.tabIcon
            return (
              <TabsTab
                key={blueprint.tabLabel}
                value={blueprint.tabLabel}
                className="flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-transparent px-2 py-4 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors outline-none hover:text-foreground data-active:border-foreground data-active:bg-card data-active:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {blueprint.tabLabel}
              </TabsTab>
            )
          })}
        </TabsList>

        {/* tab panels */}
        <TabsPanels>
          {blueprints.map((blueprint) => (
            <TabsPanel key={blueprint.tabLabel} value={blueprint.tabLabel}>
              <div className="relative grid grid-cols-1 gap-10 px-4 pt-12 sm:px-8 lg:grid-cols-2">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-12"
                  aria-hidden="true"
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="border-r border-dashed border-border/35 last:border-r-0"
                    />
                  ))}
                </div>

                <div data-aos="fade-right" data-aos-duration="800">
                  <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                    Architecture Blueprint
                  </span>
                  <h3 className="mt-2 text-3xl font-bold text-foreground">
                    {blueprint.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {blueprint.subtitle}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                        Platform Components
                      </span>
                      <ul className="mt-3 space-y-2">
                        {blueprint.platformComponents.map((component) => (
                          <li
                            key={component}
                            className="flex items-center gap-2 text-sm font-semibold text-foreground"
                          >
                            <Layers2 className="h-4 w-4 text-primary" />
                            {component}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                          Business Impact
                        </span>
                        <p className="mt-2 text-sm font-semibold text-foreground">
                          {blueprint.businessImpact}
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                        Deployment Workflow
                      </span>
                      <ol className="mt-3 space-y-4">
                        {blueprint.workflow.map((step, index) => (
                          <li key={step} className="flex gap-3">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-chart-3/20 bg-chart-3/10 text-xs font-semibold text-chart-3">
                              {index + 1}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                {/* right: diagram image (same image reused per tab) */}
                <div
                  className="flex items-center justify-center"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <Image
                    src={blueprint.image}
                    alt={blueprint.title}
                    className="h-auto w-full max-w-xl object-contain"
                  />
                </div>
              </div>
            </TabsPanel>
          ))}
        </TabsPanels>
      </Tabs>
    </div>
  )
}
export default HomePageTab

const blueprints: ArchitectureBlueprint[] = [
  {
    tabIcon: CreditCard,
    tabLabel: "Tokenized Assets & RWA",
    title: "Tokenized Assets & RWA",
    subtitle: "Architecture Blueprint",
    platformComponents: ["Public L1", "Cerulea Studio", "Dashboard API"],
    businessImpact:
      "Instant fractional ownership with 100% verifiable provenance.",
    workflow: [
      "Define token schemas and compliance metadata in Cerulea Studio.",
      "Deploy to Public L1 for global shared state and verifiability.",
      "Integrate existing fintech apps via auto-generated API endpoints.",
    ],
    image: TokenizedAssetsImg,
  },
  {
    tabIcon: Share2,
    tabLabel: "Supply Chain Traceability",
    title: "Supply Chain Traceability",
    subtitle: "Shared truth across vendors.",
    platformComponents: [
      "Private Chain",
      "Granular RBAC",
      "Webhook Integrations",
    ],
    businessImpact:
      "Zero reconciliation delays and tamper-evident transit logs.",
    workflow: [
      "Map physical logistics steps to digital entities in Studio.",
      "Provision a Sovereign Private Chain for invited vendors only.",
      "Set RBAC rules so only specific handlers can update transit states.",
    ],
    image: SupplyChainImg,
  },
  {
    tabIcon: KeyRound,
    tabLabel: "Identity & Access",
    title: "Identity & Access",
    subtitle: "Cryptographic authorization.",
    platformComponents: ["Public L1", "Governance Engine", "Cerulea AI"],
    businessImpact:
      "Eliminate centralized honeypots with cryptographic access control.",
    workflow: [
      "Model user identity and credential verification logic visually.",
      "Deploy to Public L1 to act as a universal, trustless resolver.",
      "Require multi-sig consensus for issuing high-clearance credentials.",
    ],
    image: IdentityAccessImg,
  },
  {
    tabIcon: Landmark,
    tabLabel: "Financial Settlements",
    title: "Financial Settlements",
    subtitle: "Immutable inter-bank clearing.",
    platformComponents: ["Private Subnet", "Dual VM", "Audit Logs"],
    businessImpact:
      "Real-time settlement without clearinghouse intermediaries.",
    workflow: [
      "Build complex clearing logic targeting the WASM or EVM execution engine.",
      "Spin up isolated nodes for participating financial institutions.",
      "Export cryptographic audit logs directly to compliance teams.",
    ],
    image: FinancialSettlementsImg,
  },
  {
    tabIcon: ArrowLeftRight,
    tabLabel: "Decentralized Finance (DeFi)",
    title: "Decentralized Finance (DeFi)",
    subtitle: "Unstoppable liquidity protocols.",
    platformComponents: ["Public L1", "Dual VM Engine", "Native Bridges"],
    businessImpact:
      "High-frequency decentralized trading without network congestion.",
    workflow: [
      "Design Automated Market Maker (AMM) or lending logic in Studio.",
      "Leverage Cerulea L1 sub-second finality to prevent front-running.",
      "Route global liquidity using native trust-minimized bridges.",
    ],
    image: DecentralizedFinanceImg,
  },
  {
    tabIcon: Landmark,
    tabLabel: "Government Registries",
    title: "Government Registries",
    subtitle: "Sovereign public infrastructure.",
    platformComponents: [
      "Hybrid Deployment",
      "Node Provisioning",
      "API Webhooks",
    ],
    businessImpact:
      "Guarantee transparent public spending with on-chain proofs.",
    workflow: [
      "Maintain citizen data on strictly permissioned internal private nodes.",
      "Publish verifiable proof-hashes to the Cerulea Public L1.",
      "Citizens verify document authenticity instantly via web portals.",
    ],
    image: GovernmentRegistriesImg,
  },
]
