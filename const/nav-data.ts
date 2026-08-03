import { NavItem, NavLinkItem } from "@/types/nav"
// Material icons (via react-icons/md) aliased to the previous lucide names so
// every iconEl reference below keeps working — matches the old site's icon set.
import {
  MdAutoAwesome as Sparkles,
  MdDashboard as LayoutDashboard,
  MdPublic as Globe,
  MdLock as Lock,
  MdRocketLaunch as Rocket,
  MdStorage as Database,
  MdCode as Code2,
  MdWidgets as Blocks,
  MdStorefront as Store,
  MdEco as Sprout,
  MdMenuBook as BookOpen,
  MdNewspaper as Newspaper,
  MdInfo as Info,
  MdMail as Mail,
  MdGavel as Gavel,
  MdBusinessCenter as Briefcase,
  MdBusiness as Building,
  MdIntegrationInstructions as FileCode2,
  MdArticle as ScrollText,
  MdAccountBalance as Landmark,
  MdLocalShipping as Truck,
  MdApartment as Building2,
  MdLocalHospital as HeartPulse,
  MdBolt as Zap,
  MdHome as Home,
  MdVerifiedUser as ShieldCheck,
  MdWifi as Wifi,
  MdMusicNote as Music,
  MdShoppingBag as ShoppingBag,
  MdRestaurant as Utensils,
  MdFlight as Plane,
  MdDirectionsCar as Car,
  MdBalance as Scale,
  MdSchool as GraduationCap,
  MdSportsEsports as Gamepad2,
  MdShield as Shield,
  MdFavorite as Heart,
  MdFlightTakeoff as PlaneTakeoff,
  MdConstruction as Pickaxe,
  MdCloud as Cloud,
  MdEmojiEvents as Trophy,
  MdGroups as Users,
  MdPalette as Palette,
  MdDashboardCustomize,
  MdMoreHoriz,
} from "react-icons/md"

// ---------------------------------------------------------------------------
// Industries (industries ONLY — no use-cases), categorized into the four
// audience segments, kept in the SAME ORDER as the /industries page
// (INDUSTRY_VERTICALS in solutionsRoot.ts).
// ---------------------------------------------------------------------------

type IndustryEntry = NavLinkItem & {
  category: "DAPPS" | "SME" | "ENTERPRISE" | "GOVERNMENT"
}

export const INDUSTRIES: IndustryEntry[] = [
  { label: "Financial Services & Banking", description: "Tokenize assets and automate cross-border settlements.", href: "/industries/financial-services-banking", iconEl: Landmark, category: "ENTERPRISE" },
  { label: "Supply Chain & Logistics", description: "Synchronized global logistics with absolute provenance.", href: "/industries/supply-chain-logistics", iconEl: Truck, category: "SME" },
  { label: "Government & Public Sector", description: "Automate public procurement and unify municipal databases.", href: "/industries/government-public-sector", iconEl: Building2, category: "GOVERNMENT" },
  { label: "Healthcare & Life Sciences", description: "Secure patient data and automate medical billing.", href: "/industries/healthcare-life-sciences", iconEl: HeartPulse, category: "ENTERPRISE" },
  { label: "Energy & Utilities", description: "Modernize the grid and tokenize sustainability.", href: "/industries/energy-utilities", iconEl: Zap, category: "SME" },
  { label: "Real Estate & PropTech", description: "Tokenize property and automate escrow.", href: "/industries/real-estate-proptech", iconEl: Home, category: "ENTERPRISE" },
  { label: "Insurance", description: "Automate policies with parametric execution.", href: "/industries/insurance", iconEl: ShieldCheck, category: "ENTERPRISE" },
  { label: "Telecommunications", description: "Decentralize connectivity and automate settlement.", href: "/industries/telecommunications", iconEl: Wifi, category: "ENTERPRISE" },
  { label: "Media & Entertainment", description: "Tokenize culture and automate royalties.", href: "/industries/media-entertainment", iconEl: Music, category: "DAPPS" },
  { label: "Retail & Consumer Goods", description: "Tokenize loyalty and verify supply chains.", href: "/industries/retail-consumer-goods", iconEl: ShoppingBag, category: "DAPPS" },
  { label: "Agriculture & Food Tech", description: "Trace global food provenance and automate agricultural escrow.", href: "/industries/agriculture-food-tech", iconEl: Utensils, category: "SME" },
  { label: "Aviation & Aerospace", description: "Verify components and automate compliance records.", href: "/industries/aviation-aerospace", iconEl: Plane, category: "ENTERPRISE" },
  { label: "Automotive & Manufacturing", description: "Trace global automotive parts and automate warranty claims.", href: "/industries/automotive-manufacturing", iconEl: Car, category: "ENTERPRISE" },
  { label: "Legal & Compliance", description: "Automate agreements and enforce compliance.", href: "/industries/legal-compliance", iconEl: Scale, category: "ENTERPRISE" },
  { label: "Education & Academia", description: "Verify achievements and automate administration.", href: "/industries/education-academia", iconEl: GraduationCap, category: "SME" },
  { label: "Gaming & Esports", description: "Tokenize assets and automate in-game economies.", href: "/industries/gaming-esports", iconEl: Gamepad2, category: "DAPPS" },
  { label: "Cybersecurity", description: "Deploy decentralized PKI and enforce zero trust.", href: "/industries/cybersecurity", iconEl: Shield, category: "ENTERPRISE" },
  { label: "Philanthropy & Non-Profit", description: "Route impact and automate transparency.", href: "/industries/philanthropy-non-profit", iconEl: Heart, category: "GOVERNMENT" },
  { label: "Travel & Hospitality", description: "Decentralize bookings and automate alliances.", href: "/industries/travel-hospitality", iconEl: PlaneTakeoff, category: "SME" },
  { label: "Mining & Heavy Industry", description: "Trace raw materials and automate extraction.", href: "/industries/mining-heavy-industry", iconEl: Pickaxe, category: "ENTERPRISE" },
  { label: "Enterprise IT & SaaS", description: "Decentralize architecture and automate entitlements.", href: "/industries/enterprise-it-saas", iconEl: Cloud, category: "ENTERPRISE" },
  { label: "Sports & Fan Engagement", description: "Tokenize loyalty and reclaim the secondary market.", href: "/industries/sports-fan-engagement", iconEl: Trophy, category: "DAPPS" },
  { label: "Human Resources & Talent", description: "Decentralize payroll and automate credentialing.", href: "/industries/human-resources-talent", iconEl: Users, category: "SME" },
  { label: "Art & Creator Economy", description: "Fractionalize intellectual property and automate royalties.", href: "/industries/art-creator-economy", iconEl: Palette, category: "DAPPS" },
]

// Kept for backwards-compatibility (some components import this name).
export const INDUSTRY_SOLUTIONS: NavLinkItem[] = INDUSTRIES

// All industries in alphabetical order (no category grouping in the dropdown).
const INDUSTRIES_ALPHA: NavLinkItem[] = [...INDUSTRIES]
  .sort((a, b) => a.label.localeCompare(b.label))
  .map(({ category, ...rest }) => rest)

// ---------------------------------------------------------------------------
// Nav items — order (#12): Features, Products, Industries, Solutions,
// Developers, Whitepaper, Pricing, Company
// ---------------------------------------------------------------------------

export const NAV_ITEMS: NavItem[] = [
  // FEATURES (was "Products") — badges removed (#24)
  {
    label: "Features",
    columns: [
      {
        title: "Core Platform",
        items: [
          {
            label: "Cerulea Studio", iconEl: MdDashboardCustomize,
            href: "/product/studio",
            description:
              "The visual architecture environment to design data models, governance, and blockchain mechanics. Translating business intent directly into deployable network state.",
            icon: "C",
          },
          {
            label: "Cerulea AI", iconEl: Sparkles,
            href: "/product/ai",
            description:
              "Context-aware intelligence embedded within Studio to validate architectural decisions, enforce security policies, and ensure structural integrity prior to deployment.",
            icon: "C",
          },
          {
            label: "Cerulea Dashboard", iconEl: LayoutDashboard,
            href: "/product/dashboard",
            description:
              "The unified control plane to monitor network telemetry, manage cryptographic keys, execute live governance actions, monitor node health, and oversee live app and chain deployments.",
            icon: "C",
          },
        ],
      },
      {
        title: "Infrastructure & Execution",
        items: [
          {
            label: "Cerulea Public L1", iconEl: Globe,
            href: "/product/public-l1",
            description:
              "Our high-throughput public Layer-1 blockchain. Deploy dApps here to leverage immutable, shared state and native decentralized security.",
            icon: "C",
          },
          {
            label: "Cerulea Private Chains", iconEl: Lock,
            href: "/product/private-chains",
            description:
              "Dedicated, permissioned networks designed for enterprise. Maintain total control over node hosting, governance, and participant access.",
            icon: "C",
          },
          {
            label: "Cerulea Deployment Engine", iconEl: Rocket,
            href: "/product/deployment-engine",
            description:
              "The core execution layer that seamlessly provisions your Studio configurations into live, production-ready networks.",
            icon: "C",
          },
        ],
      },
      {
        title: "Capabilities & Access",
        items: [
          {
            label: "Granular Governance", iconEl: Gavel,
            href: "/product/governance",
            description:
              "Define and enforce strict on-chain roles, access controls, and multi-party policy boundaries.",
            icon: "G",
          },
          {
            label: "Verifiable Data Models", iconEl: Database,
            href: "/product/data-models",
            description:
              "Map your complex business logic into structured, tamper-evident entities and relationships.",
            icon: "V",
          },
          {
            label: "Cerulea API", iconEl: Code2,
            href: "/product/api",
            description:
              "Programmatic interfaces to connect your deployed networks and decentralized apps directly into existing enterprise systems and frontends.",
            icon: "C",
          },
        ],
      },
    ],
  },

  // PRODUCTS (new #3) — the four audience segments (#4)
  {
    label: "Products",
    columns: [
      {
        items: [
          {
            label: "Dapps", iconEl: Blocks,
            href: "/products/dapps",
            description:
              "Ship production-grade public applications on Cerulea's Layer-1 without writing a single smart contract.",
            icon: "D",
          },
          {
            label: "SME", iconEl: Store,
            href: "/products/sme",
            description:
              "Production-grade blockchain infrastructure for small and medium businesses, without specialist hires.",
            icon: "S",
          },
          {
            label: "Enterprise", iconEl: Briefcase,
            href: "/products/enterprise",
            description:
              "Sovereign private chains built for enterprise compliance, governance, and industry standards.",
            icon: "E",
          },
          {
            label: "Government", iconEl: Building,
            href: "/products/government",
            description:
              "Sovereign infrastructure with audit trails and long-term operational certainty for the public sector.",
            icon: "G",
          },
        ],
      },
    ],
  },

  // INDUSTRIES (was "Solutions", #8) — categorized (#25)
  {
    label: "Industries",
    columns: [
      { items: INDUSTRIES_ALPHA.slice(0, 6) },
      { items: INDUSTRIES_ALPHA.slice(6, 12) },
      { items: INDUSTRIES_ALPHA.slice(12, 18) },
      { items: INDUSTRIES_ALPHA.slice(18, 24) },
    ],
  },

  // SOLUTIONS (new #9)
  {
    label: "Solutions",
    columns: [
      {
        items: [
          {
            label: "AgroTrace", iconEl: Sprout,
            href: "/showcase/agrotrace",
            description:
              "A live showcase: end-to-end agricultural provenance built and deployed on Cerulea.",
            icon: "A",
          },
          {
            label: "Many more under development",
            iconEl: MdMoreHoriz,
            href: "",
            static: true,
            icon: "M",
          },
        ],
      },
    ],
  },

  // DEVELOPERS — Blog moved here (#10)
  {
    label: "Developers",
    columns: [
      {
        items: [
          {
            label: "Cerulea Docs", iconEl: BookOpen,
            href: "/developers/docs/foundation",
            description:
              "Structured documentation mapping the Cerulea build, deploy, and operate workflow.",
          },
          {
            label: "API Reference", iconEl: FileCode2,
            href: "/developers/api/introduction",
            description:
              "REST and RPC endpoints for system integration and enterprise automation.",
          },
          {
            label: "Blog", iconEl: Newspaper,
            href: "/blog",
            description:
              "Product updates, engineering deep-dives, and real-world Cerulea deployments.",
          },
        ],
      },
    ],
  },

  { label: "Whitepaper", href: "/developers/whitepaper/abstract" },
  { label: "Pricing", href: "/pricing" },

  {
    label: "Company",
    columns: [
      {
        title: "About Us",
        items: [
          {
            label: "About", iconEl: Info,
            description:
              "Learn more about our company, our mission, and the values that drive everything we do. Discover our journey, vision, and the team behind our success.",
            icon: "A",
            href: "/company/about",
          },
          {
            label: "Contact", iconEl: Mail,
            description:
              "Get in touch with our team for questions, support, or partnership opportunities. We're always happy to help and will respond as quickly as possible.",
            icon: "C",
            href: "/company/contact",
          },
          {
            label: "Legal", iconEl: ScrollText,
            description:
              "Review our legal documents, including terms of service, privacy policy, and compliance information. Stay informed about your rights and responsibilities.",
            icon: "L",
            href: "/company/legal",
          },
        ],
      },
    ],
  },
]
