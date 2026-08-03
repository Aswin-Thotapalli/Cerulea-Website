// Audience-segment "Products" pages (#4). Content + per-feature visual notes
// supplied by the client. Studio entry is path-based
// (studio.cerulea.io/<seg>); the SME site enters the Enterprise studio.

import type { Visual } from "@/types/product-details"

export type SegmentFeature = {
  title: string
  description: string
  // Longer supporting paragraph, rendered as a callout under the description.
  detail?: string
  // Real interactive visual (rendered via FeatureVisual), matching the note.
  visual?: Visual
}

export type ProductSegment = {
  slug: string
  eyebrow: string
  headline1: string
  headline2: string
  description: string
  studioLink: string
  featuresTitle: string
  features: SegmentFeature[]
}

export const PRODUCT_SEGMENTS: ProductSegment[] = [
  {
    slug: "dapps",
    eyebrow: "For dApp Builders",
    headline1: "Build your dApp.",
    headline2: "We'll run the chain.",
    description:
      "Build your app in a visual studio, then launch it on Cerulea's shared public chain or your own private one. No servers to run, no DevOps, and no Solidity to write.",
    studioLink: "https://studio.cerulea.io/dapps",
    featuresTitle: "Everything you need to build",
    features: [
      {
        title: "Visual builder",
        description:
          "Build your app by connecting blocks on a canvas. Add a token, link it to staking, add voting, and Cerulea writes the smart contracts for you.",
        detail:
          "There is nothing to code and nothing to set up first. Each block is a ready-made, tested piece, and each line you draw between them becomes a real rule on your chain. When the picture looks right, Cerulea turns it into a working app.",
        visual: {
          type: "diagram",
          title: "Your app",
          nodes: [
            { label: "Token", description: "Your coin and how it is shared out.", accent: true, children: [{ label: "supply", sub: "setting" }, { label: "transfer", sub: "rule" }] },
            { label: "Staking", description: "Let users lock the token to earn rewards.", children: [{ label: "lock", sub: "rule" }, { label: "rewards", sub: "block" }] },
            { label: "Voting", description: "Let holders vote on decisions.", children: [{ label: "proposals", sub: "flow" }] },
          ],
        },
      },
      {
        title: "Ready-made blocks",
        description:
          "Start from ready-made blocks like tokens, NFTs, staking, and voting instead of building each one yourself.",
        detail:
          "Every block has already been checked and tested, so your app is safe from the start. Set a few options, drop it in, and it works. Blocks you do not use are left out completely.",
        visual: {
          type: "grid",
          title: "Blocks",
          rows: [
            { label: "Token", description: "A coin for your app", status: "success" },
            { label: "NFT", description: "Unique digital items", status: "success" },
            { label: "Staking", description: "Lock to earn rewards", status: "success" },
            { label: "Voting", description: "Let holders decide", status: "success" },
          ],
        },
      },
      {
        title: "Launch in one click",
        description:
          "Launch your app with one click, to Cerulea's shared public chain for open apps, or to your own private chain when you want full control.",
        detail:
          "One click sets up everything for you: the servers, the network, and the first block. What normally takes a team days takes minutes here. Choose public when anyone should be able to use and check your app, or private when it is only for your own users.",
        visual: {
          type: "terminal",
          title: "launch",
          lines: [
            { text: "$ launch my-app", tone: "key" },
            { text: "network: public or private", tone: "comment" },
            { text: "[OK] Servers ready", tone: "success" },
            { text: "[OK] Network live", tone: "success" },
            { text: "[OK] First block confirmed", tone: "success" },
            { text: "Your app is live", tone: "highlight" },
          ],
        },
      },
      {
        title: "Cerulea AI",
        description:
          "Cerulea AI helps build your app for you, explains anything in plain words, and helps you fix mistakes.",
        detail:
          "It already knows what you have built, so its help fits your app. Ask why a launch failed and it tells you exactly what to change.",
        visual: {
          type: "chat",
          title: "Cerulea AI",
          inputPlaceholder: "Ask a question...",
          sendLabel: "Send",
          messages: [
            { from: "user", text: "Add staking to my token and lock it for 7 days." },
            { from: "ai", text: "Done. I added **Staking** to your token with a 7-day lock and rewards. Want me to add a setting for the reward rate?" },
          ],
        },
      },
      {
        title: "Data made simple",
        description:
          "Set up your app's data like a simple database, and get ready-made ways to read and write it.",
        detail:
          "You lay out your tables and how they link together. Cerulea turns that into safe, tamper-proof storage and gives your team simple tools to use it, with no blockchain know-how needed.",
        visual: {
          type: "schema",
          entities: [
            { name: "Account", fields: ["+ address (id)", "+ balance"] },
            { name: "Transaction", fields: ["+ id", "-> belongs to: Account"] },
          ],
        },
      },
      {
        title: "Safe token setup",
        description:
          "Set your token's supply and how it is shared out with simple controls, and get a warning before anything is set up wrong.",
        detail:
          "If the numbers do not add up, Cerulea stops you before launch instead of after. So the token you release works the way you meant it to.",
        visual: {
          type: "metric",
          title: "Token supply",
          metrics: [
            { label: "Total supply", value: "1B", highlighted: true },
            { label: "Community", value: "50%" },
            { label: "Team", value: "20%" },
            { label: "Treasury", value: "20%" },
          ],
        },
      },
      {
        title: "Connect your tools",
        description:
          "Connect tools like Stripe, webhooks, and file storage, and test each one works before you go live.",
        detail:
          "There is no custom code and nothing to host. Point Cerulea at a tool, press test to check it works, and it is connected to your app.",
        visual: {
          type: "fleet",
          title: "Connected tools",
          rows: [
            { label: "Stripe", sublabel: "Payments · test passed", status: "healthy" },
            { label: "Webhooks", sublabel: "Notifications · test passed", status: "healthy" },
            { label: "File storage", sublabel: "Uploads · connected", status: "healthy" },
          ],
        },
      },
      {
        title: "Live dashboard",
        description:
          "Every app comes with a live dashboard and a public page to see activity, all under your own name and look.",
        detail:
          "See blocks and activity as they happen. Your users get a clear public view they can trust, and you get an easy way to keep an eye on things.",
        visual: {
          type: "list",
          title: "Activity",
          rows: [
            { label: "Block #14,821", sublabel: "24 transactions", mono: true, status: "success" },
            { label: "Block #14,820", sublabel: "18 transactions", mono: true, status: "success" },
            { label: "Block #14,819", sublabel: "31 transactions", mono: true, status: "success" },
          ],
        },
      },
    ],
  },
  {
    slug: "sme",
    eyebrow: "For Growing Businesses",
    headline1: "Blockchain for your business,",
    headline2: "without a blockchain team.",
    description:
      "Launch a private, compliant chain for your products, records, and payments. Cerulea Studio does the engineering; you run the business.",
    studioLink: "https://studio.cerulea.io/enterprise",
    featuresTitle: "Everything your business needs",
    features: [
      {
        title: "Your own private chain, managed",
        description:
          "Get your own private chain that is set up, hosted, and run for you. Blockchain becomes something you use, not something you have to run.",
        detail:
          "Your chain runs on managed cloud with its own validators, but you never touch a server or a setting. Cerulea handles the setup, updates, backups, and uptime. You just get a live network and a dashboard to watch it.",
        visual: {
          type: "metric",
          title: "Your chain",
          metrics: [
            { label: "Status", value: "Live", highlighted: true },
            { label: "Validators", value: "3" },
            { label: "Hosting", value: "Shared cloud" },
          ],
        },
      },
      {
        title: "No-code Studio",
        description:
          "Set up your business, your products, customers, and orders, using simple visual blocks. No code, no servers, and no blockchain terms to learn.",
        detail:
          "The Studio uses plain words, not jargon. You arrange blocks for the things your business already has, and Cerulea builds the chain underneath. Your team can make changes without needing an engineer.",
        visual: {
          type: "diagram",
          title: "Your workspace",
          nodes: [
            { label: "Products", description: "Your catalog, on chain.", accent: true, children: [{ label: "SKU", sub: "field" }, { label: "price", sub: "field" }] },
            { label: "Customers", description: "Records tied to verified identity.", children: [{ label: "profile", sub: "record" }] },
            { label: "Orders", description: "A workflow from placed to fulfilled.", children: [{ label: "status", sub: "flow" }, { label: "invoice", sub: "hook" }] },
          ],
        },
      },
      {
        title: "Cerulea AI",
        description:
          "Cerulea AI helps you build and run your chain, and answers your questions in plain words.",
        detail:
          "Ask it to set something up and it does it. Ask why something is not working and it explains, in plain language, what to change. It is built into the Studio, so help is always right there.",
        visual: {
          type: "chat",
          title: "Cerulea AI",
          messages: [
            { from: "user", text: "How do I add a loyalty program?" },
            { from: "ai", text: "Start from the **Loyalty** template, set your points and tiers, and publish. Want me to open it for you?" },
          ],
        },
      },
      {
        title: "Roles & access",
        description:
          "Give each staff member the right level of access with simple roles, instead of managing keys.",
        detail:
          "Owner, manager, and staff roles are easy to understand, and the chain enforces them for you. Change someone's access in one click and it takes effect right away.",
        visual: {
          type: "matrix",
          title: "Roles & permissions",
          columns: ["View", "Edit", "Admin"],
          rows: [
            { label: "Owner", values: ["allowed", "allowed", "allowed"] },
            { label: "Manager", values: ["allowed", "allowed", "denied"] },
            { label: "Staff", values: ["allowed", "denied", "denied"] },
          ],
        },
      },
      {
        title: "Built-in audit trail",
        description:
          "Every action is recorded automatically, giving you a complete history you can trust, kept for 30 days.",
        detail:
          "You do not have to log anything yourself. Who changed a price, who added a product, when a backup ran, it is all saved and can never be quietly changed later. When someone asks, the answer is already there.",
        visual: {
          type: "list",
          title: "Audit log",
          rows: [
            { label: "priya@acme.co", sublabel: "Updated pricing rule", value: "2m ago", valueStyle: "text" },
            { label: "system", sublabel: "Nightly backup completed", value: "1h ago", valueStyle: "text" },
            { label: "raj@acme.co", sublabel: "Added a new product", value: "3h ago", valueStyle: "text" },
          ],
        },
      },
      {
        title: "Connect your tools",
        description:
          "Connect Stripe, invoicing, and notifications without an engineer, and check each one works before you rely on it.",
        detail:
          "Connecting the tools you already use is a matter of pointing Cerulea at them and pressing test. Payments, invoices, and alerts run against your chain directly, so it fits how you already work.",
        visual: {
          type: "fleet",
          title: "Connected services",
          rows: [
            { label: "Stripe", sublabel: "Payments · connected", status: "healthy" },
            { label: "Invoicing", sublabel: "Auto-billing · connected", status: "healthy" },
            { label: "Webhooks", sublabel: "Event delivery · connected", status: "healthy" },
          ],
        },
      },
      {
        title: "Ready-made templates",
        description:
          "Start from a ready-made template, supply-chain tracking, loyalty, or record-keeping, and go live in days.",
        detail:
          "Each template is a complete, working app for a common need, not just a starting point. Pick the closest one, adjust it to your business, and launch. Keep changing it as you learn what your customers want.",
        visual: {
          type: "grid",
          title: "Templates",
          rows: [
            { label: "Supply-chain traceability", description: "Track provenance end to end", status: "active" },
            { label: "Loyalty program", description: "Points, tiers, rewards", status: "active" },
            { label: "Record-keeping", description: "Immutable business records", status: "active" },
          ],
        },
      },
      {
        title: "Grow at your pace",
        description:
          "Add validators, seats, and storage as you need them, and move up to Growth or Enterprise whenever you are ready.",
        detail:
          "You are not locked into your starting plan. Add what you need with simple monthly add-ons, and when you outgrow SME, your whole chain and data move up the same ladder with no rebuild.",
        visual: {
          type: "terminal",
          title: "plan · SME",
          plain: true,
          lines: [
            { text: "Base license (one-time) ...... $6,000", tone: "comment" },
            { text: "+1 validator ................. $100/mo", tone: "default" },
            { text: "+5 seats ..................... $125/mo", tone: "default" },
            { text: "= $225 / month, scale anytime", tone: "success" },
            { text: "upgrade → Growth without migration", tone: "highlight" },
          ],
        },
      },
      {
        title: "Real support",
        description:
          "Reach real people when you are stuck, with a reply within 48 hours and answers written for business owners, not engineers.",
        detail:
          "Support is part of the product. Open a ticket and a person replies within two business days with clear steps for your setup. Need help faster? Priority support is one add-on away.",
        visual: {
          type: "inbox",
          title: "Support",
          messages: [
            { from: "user", text: "How do I add a new staff role?" },
            { from: "ai", text: "Go to **Settings → Roles → New role**, choose the permissions, and invite them by email. I can turn on a template role for you if that is quicker." },
          ],
        },
      },
    ],
  },
  {
    slug: "enterprise",
    eyebrow: "For Enterprises",
    headline1: "Enterprise blockchain infrastructure,",
    headline2: "governed the way you already work.",
    description:
      "Deploy sovereign chains with SSO, RBAC, audit-grade logging, and on-prem options, backed by a dedicated team and a 99.9% SLA.",
    studioLink: "https://studio.cerulea.io/enterprise",
    featuresTitle: "Everything your enterprise needs",
    features: [
      {
        title: "Run it anywhere",
        description:
          "Run your chain on our cloud, your own cloud, or fully offline on your own hardware, whatever your rules require.",
        detail:
          "You choose where the chain lives, so it can meet the strictest security and data rules. The same setup works everywhere, so moving from a cloud trial to a locked-down on-site deployment does not mean starting over.",
        visual: {
          type: "diagram",
          title: "Where it runs",
          nodes: [
            { label: "Our cloud", description: "Fastest to start, fully managed." },
            { label: "Your cloud", description: "Runs inside your own cloud account." },
            { label: "On-site", description: "On your own hardware.", accent: true, children: [{ label: "air-gap", sub: "option" }] },
          ],
        },
      },
      {
        title: "Single sign-on",
        description:
          "Let staff sign in with your company login, and add or remove access automatically as people join or leave.",
        detail:
          "It connects to the login system you already use, like Okta or Microsoft. When someone joins they get the right access; when they leave it is removed for you, so no accounts are ever left open.",
        visual: {
          type: "terminal",
          title: "sign-in",
          flow: [
            { label: "Company login", code: "verified", tone: "success" },
            { label: "Account set up", code: "automatic" },
            { label: "Access granted", code: "correct role" },
          ],
          lines: [],
        },
      },
      {
        title: "Roles and approvals",
        description:
          "Set exactly who can do what, and require sign-off from more than one person for sensitive actions.",
        detail:
          "Give each role its own permissions, and add approval steps where they matter, so no single person can make a big change alone. It all runs on the chain, so the rules are always followed.",
        visual: {
          type: "matrix",
          title: "Who can do what",
          columns: ["Read", "Write", "Approve"],
          rows: [
            { label: "Admin", values: ["allowed", "allowed", "allowed"] },
            { label: "Operator", values: ["allowed", "allowed", "denied"] },
            { label: "Auditor", values: ["allowed", "denied", "denied"] },
          ],
        },
      },
      {
        title: "Court-ready records",
        description:
          "Keep a complete, unchangeable record of every action, ready to export for auditors or courts.",
        detail:
          "Every action is saved as it happens and can never be altered later. Export any date range to CSV or PDF in one click when an auditor, regulator, or court needs proof.",
        visual: {
          type: "list",
          title: "Export records",
          rows: [
            { label: "Range", value: "Jan 1 – Mar 31", valueStyle: "text" },
            { label: "Actions", value: "1,240,918", valueStyle: "text" },
            { label: "Format", value: "CSV · PDF", valueStyle: "text" },
            { label: "Export", value: "Ready", status: "success", valueStyle: "pill" },
          ],
        },
      },
      {
        title: "Compliance evidence",
        description:
          "Get SOC 2 and ISO 27001 evidence collected and ready, so you can pass your own security reviews faster.",
        detail:
          "The evidence auditors ask for is gathered for you and kept up to date. That means you spend days, not months, proving your platform is secure, which helps unblock your own enterprise deals.",
        visual: {
          type: "grid",
          title: "Controls",
          rows: [
            { label: "SOC 2 Type II", description: "Evidence collected", status: "success" },
            { label: "ISO 27001", description: "Report-ready", status: "success" },
            { label: "Access reviews", description: "Up to date", status: "success" },
            { label: "Encryption", description: "At rest & in transit", status: "success" },
          ],
        },
      },
      {
        title: "Cerulea AI",
        description:
          "Use Cerulea AI with your own data, kept fully inside your environment.",
        detail:
          "The AI runs on your own isolated setup, so sensitive information never leaves your walls. You get the same help without sending anything to an outside service.",
        visual: {
          type: "chat",
          title: "Cerulea AI",
          badge: "Private",
          messages: [
            { from: "user", text: "What changed on the chain last week?" },
            { from: "ai", text: "3 approvals went through and 1 was turned down. This all ran on your own setup, so nothing left your environment." },
          ],
        },
      },
      {
        title: "Built-in dashboards",
        description:
          "Get ready-made dashboards and reports on your chain data, with no extra tools to buy.",
        detail:
          "See activity, speed, and uptime at a glance, and dig into the numbers when you need to. It is all built in, so your team does not have to set up separate reporting tools.",
        visual: {
          type: "metric",
          title: "At a glance",
          metrics: [
            { label: "Actions / day", value: "482K", highlighted: true },
            { label: "Speed", value: "1.9s" },
            { label: "Uptime", value: "99.98%" },
          ],
        },
      },
      {
        title: "Security checks",
        description:
          "Run automatic and expert security checks on your app before every launch.",
        detail:
          "Common mistakes are caught before they go live, and expert reviews back that up for the important releases. You get a clear pass or fail on each check, so nothing risky ships by accident.",
        visual: {
          type: "list",
          variant: "checklist",
          title: "Security check",
          rows: [
            { label: "Reentrancy guard", status: "success" },
            { label: "Overflow check", status: "success" },
            { label: "Access control", status: "success" },
            { label: "Unbounded loop", status: "error" },
          ],
        },
      },
      {
        title: "Enterprise add-on pack",
        description:
          "Get extra pieces built for regulated work, identity checks, approval flows, and links to your business systems.",
        detail:
          "Identity and anti-fraud checks, a tool for approval flows, and ready-made links to systems like SAP and Oracle come as one pack, so regulated operations work from day one.",
        visual: {
          type: "fleet",
          title: "In the pack",
          rows: [
            { label: "Identity & fraud checks", sublabel: "KYC / AML", status: "healthy" },
            { label: "Approval flows", sublabel: "Workflow engine", status: "healthy" },
            { label: "Business system links", sublabel: "SAP · Oracle · NetSuite", status: "healthy" },
          ],
        },
      },
      {
        title: "Your brand",
        description:
          "Put your own name, logo, and colors across the studio and the public page.",
        detail:
          "Everything your team and your users see looks like your product, not ours. The studio and the public chain page carry your brand from end to end.",
        visual: {
          type: "list",
          title: "Branding",
          rows: [
            { label: "Studio look", value: "Your brand", valueStyle: "text" },
            { label: "Public page", value: "yourco.chain", valueStyle: "text" },
            { label: "Logo & colors", value: "Applied", status: "success", valueStyle: "pill" },
          ],
        },
      },
      {
        title: "Test before you ship",
        description:
          "Get separate test chains so changes are checked before they reach real users.",
        detail:
          "Try changes on test chains first, then promote them to your live chain when they are ready. Nothing untested ever touches your real users.",
        visual: {
          type: "grid",
          title: "Environments",
          rows: [
            { label: "Dev", description: "Try new changes", status: "active" },
            { label: "Test", description: "Check before launch", status: "active" },
            { label: "Live", description: "Real users", status: "success" },
          ],
        },
      },
      {
        title: "Dedicated team",
        description:
          "Get a dedicated contact and a 99.9% uptime promise, with the option to go higher.",
        detail:
          "A named person who knows your setup is there when you need them, backed by a written uptime guarantee you can raise to 99.99% if your business needs it.",
        visual: {
          type: "metric",
          title: "Your service level",
          metrics: [
            { label: "Uptime", value: "99.9%", highlighted: true },
            { label: "Can raise to", value: "99.99%" },
            { label: "Contact", value: "Dedicated" },
          ],
        },
      },
    ],
  },
  {
    slug: "government",
    eyebrow: "For Government",
    headline1: "Sovereign digital infrastructure",
    headline2: "citizens can trust.",
    description:
      "Run tamper-proof public records, citizen identity, and transparent services on a chain hosted entirely on national soil, with legal-grade audit built in.",
    studioLink: "https://studio.cerulea.io/govt",
    featuresTitle: "Everything a government needs",
    features: [
      {
        title: "Kept on national soil",
        description:
          "Your chain and its data stay inside the country, on hardware you control, and backups stay on soil too, always, never as a paid extra.",
        detail:
          "There is no version of this where data leaves the country. Hosting can be fully offline for the most sensitive systems, and on-soil backup is built in by default, so you meet residency rules without a special arrangement.",
        visual: {
          type: "metric",
          title: "Sovereignty",
          metrics: [
            { label: "Data", value: "On soil", highlighted: true },
            { label: "Backup", value: "Included" },
            { label: "Hosting", value: "Air-gap ready" },
          ],
        },
      },
      {
        title: "Verified citizen identity",
        description:
          "Link records and services to real, verified people through national ID like Aadhaar and DigiLocker.",
        detail:
          "Because each record ties back to a verified identity, services reach the right person and fraud is much harder. Citizens prove who they are with the IDs they already have.",
        visual: {
          type: "terminal",
          title: "identity",
          flow: [
            { label: "National ID", code: "verified", tone: "success" },
            { label: "Documents", code: "linked" },
            { label: "Citizen record", code: "matched" },
          ],
          lines: [],
        },
      },
      {
        title: "Cerulea AI",
        description:
          "Cerulea AI helps officials set up and run services, kept fully on your own systems.",
        detail:
          "The AI runs on your own on-soil setup, so nothing sensitive leaves the country. Officials can ask it to set something up or explain a step, in plain words, with no technical training needed.",
        visual: {
          type: "chat",
          title: "Cerulea AI",
          badge: "On-soil",
          messages: [
            { from: "user", text: "How do I add a new department?" },
            { from: "ai", text: "Go to **Departments → Add**, set who can access it, and save. This all runs on your own systems, so no data leaves." },
          ],
        },
      },
      {
        title: "Open to the public",
        description:
          "Give citizens a public page to see records and spending for themselves, building trust through openness.",
        detail:
          "Anyone can look up tenders, grants, and contracts and check them against the record. Openness is the default, so people can trust what the government publishes.",
        visual: {
          type: "list",
          title: "Public records",
          rows: [
            { label: "Tender #2481", sublabel: "Public works", value: "Open", status: "active", valueStyle: "pill" },
            { label: "Grant #1180", sublabel: "Education", value: "Given out", status: "success", valueStyle: "pill" },
            { label: "Contract #904", sublabel: "Roads", value: "Closed", status: "info", valueStyle: "pill" },
          ],
        },
      },
      {
        title: "Tamper-proof records",
        description:
          "Store land titles, certificates, and licenses so they cannot be changed and anyone can check they are real.",
        detail:
          "Once a record is saved, it cannot be quietly altered. Each one can be checked on its own, so forgery and after-the-fact edits are ruled out.",
        visual: {
          type: "grid",
          title: "Records",
          rows: [
            { label: "Land titles", description: "Ownership on record", status: "success" },
            { label: "Certificates", description: "Issued & verifiable", status: "success" },
            { label: "Licenses", description: "Valid & checkable", status: "success" },
          ],
        },
      },
      {
        title: "Track every request",
        description:
          "Follow citizen requests and complaints from filed to resolved, with a clear owner at every step.",
        detail:
          "Every request has a status anyone accountable can see, so nothing gets lost and each step has a name attached. Citizens can follow their case, and officials can be held to it.",
        visual: {
          type: "governance",
          title: "Grievance #7781",
          actionName: "Water supply complaint",
          initiatedBy: "Citizen",
          date: "Filed 12 days ago",
          progress: { current: 2, total: 3 },
          primaryAction: "Mark resolved",
          secondaryAction: "Reassign",
        },
      },
      {
        title: "Court-ready trail",
        description:
          "Keep an unchangeable record of every action that stands up as evidence for oversight and courts.",
        detail:
          "Every change, access, and export is saved and sealed as it happens. When an oversight body or a court asks, the proof is already there and cannot be disputed.",
        visual: {
          type: "list",
          title: "Audit trail",
          rows: [
            { label: "Record changed", sublabel: "Officer #221 · sealed", value: "Verified", status: "success", valueStyle: "pill" },
            { label: "Access granted", sublabel: "Registration dept", value: "Verified", status: "success", valueStyle: "pill" },
            { label: "Report exported", sublabel: "Oversight body", value: "Verified", status: "success", valueStyle: "pill" },
          ],
        },
      },
      {
        title: "Department access",
        description:
          "Let departments share the right data with the right people, and nothing more.",
        detail:
          "Set who in each department can see and change what, in a clear grid. Data is shared where it should be and kept private where it should not, across the whole hierarchy.",
        visual: {
          type: "matrix",
          title: "Who can access what",
          columns: ["View", "Edit", "Share"],
          rows: [
            { label: "Revenue", values: ["allowed", "allowed", "denied"] },
            { label: "Registration", values: ["allowed", "denied", "denied"] },
            { label: "Audit", values: ["allowed", "denied", "denied"] },
          ],
        },
      },
      {
        title: "Legal e-signatures",
        description:
          "Sign records and approvals with legally-binding digital signatures, recorded on the chain.",
        detail:
          "Officers sign with their official digital signature, and the signed document is recorded so it cannot be changed. Approvals are legally valid and permanently on record.",
        visual: {
          type: "terminal",
          title: "e-sign",
          flow: [
            { label: "Document", code: "approval.pdf", tone: "muted" },
            { label: "Signed", code: "officer · official ID" },
            { label: "On record", code: "cannot be changed", tone: "success" },
          ],
          lines: [],
        },
      },
      {
        title: "Automatic reports",
        description:
          "Generate the compliance reports oversight bodies need, on a set schedule, without manual work.",
        detail:
          "Set the schedule once and the reports are produced for you, in the format oversight bodies expect. No one has to pull the numbers together by hand each time.",
        visual: {
          type: "list",
          title: "Reports",
          rows: [
            { label: "Quarterly report", value: "Scheduled", status: "active", valueStyle: "pill" },
            { label: "Format", value: "PDF", valueStyle: "text" },
            { label: "Next run", value: "Apr 01", valueStyle: "text" },
          ],
        },
      },
      {
        title: "Connected departments",
        description:
          "Let departments exchange only the data they are allowed to, without opening everything up.",
        detail:
          "Connections between departments are limited to exactly what each side is allowed to see. Data moves where it needs to without exposing the rest.",
        visual: {
          type: "fleet",
          title: "Connections",
          rows: [
            { label: "Revenue and Registration", sublabel: "Limited sharing", status: "healthy" },
            { label: "Audit and all departments", sublabel: "View only", status: "healthy" },
          ],
        },
      },
    ],
  },
]

export const getSegmentBySlug = (slug: string) =>
  PRODUCT_SEGMENTS.find((s) => s.slug === slug)
