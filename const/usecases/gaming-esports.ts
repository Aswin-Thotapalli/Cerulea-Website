/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
import type { CaseEntry } from "@/types/case"
import type { ExtraCaseItem } from "../usecases-extra"
import {
  MdEco as Leaf, MdWaterDrop as Droplet, MdLocalShipping as Truck, MdSearch as Search,
  MdDescription as ScrollText, MdVerifiedUser as ShieldCheck, MdFactCheck as FileCheck,
  MdFingerprint as Fingerprint, MdAccountBalanceWallet as Wallet, MdMemory as Cpu,
  MdStorage as Database, MdHub as Network, MdAccountBalance as Landmark, MdApartment as Building2,
  MdDns as Server, MdSchema as Workflow, MdPieChart as PieChart, MdCardGiftcard as Gift,
  MdScience as FlaskConical, MdBalance as Scale, MdBolt as Zap, MdPublic as Globe,
  MdGroups as Users, MdWidgets as Boxes, MdShield as Shield, MdThermostat as Thermometer,
  MdSensors as Radio, MdQrCode2 as QrCode, MdInventory2 as Package, MdHandshake as Handshake,
  MdGavel as Gavel, MdMonitorHeart as HeartPulse, MdHowToVote as Vote, MdCopyright as Copyright,
  MdMonetizationOn as Coins, MdFlight as Plane, MdDirectionsCar as Car, MdSchool as GraduationCap,
  MdHome as Home, MdPalette as Palette, MdSportsEsports as Gamepad, MdLock as Lock,
  MdShowChart as Activity, MdBadge as IdCard, MdConstruction as Pickaxe, MdFactory as Factory,
  MdDirectionsBus as Bus, MdConfirmationNumber as Ticket, MdWifi as Wifi, MdLocalHospital as Hospital,
  MdBiotech as Biotech, MdAgriculture as Tractor, MdForest as Forest, MdRecycling as Recycling,
} from "react-icons/md"

const INDUSTRY = "Gaming & Esports"

export const gamingEsportsCases: CaseEntry[] = [
  {
    slug: "in-game-asset-ownership-and-cross-game-interoperability-via-nfts",
    icon: Gamepad,
    eyebrow: "In-Game Asset Settlement Layer",
    headline1: "Own every item.",
    headline2: "Carry it across games.",
    heroDescription:
      "Mint each in-game item as a player-owned asset on a public-chain gaming app, where ERC-721 NFTs and the NFT Metadata Pipeline hold its identity and stats. Multi-chain NFT Sync lets the same item cross into other games, while the Royalty Standard pays the original creator on every secondary sale.",
    heroCta: "Deploy Player-Owned Economies",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn items a player only rents from a server into assets they genuinely own and control.",
    mechanics: [
      { title: "Player-Owned Minting", description: "Replace database entries a studio can wipe. Each sword, skin, or land parcel is minted as an ERC-721 NFT into the player's own wallet, so ownership survives outside any single game's servers." },
      { title: "Rich Metadata Pipeline", description: "Bind stats to identity. The NFT Metadata Pipeline attaches each item's traits, rarity, and provenance to its token, so its full history travels with it rather than living in a studio's private table." },
      { title: "Cross-Game Sync", description: "Make items portable. Multi-chain NFT Sync mirrors an item's canonical state across chains and titles, letting a second game recognise and render an item minted in the first without a central broker." },
      { title: "Creator Royalties", description: "Pay the maker forever. The Royalty Standard encodes a creator share into the item, so the original artist or studio earns automatically on every resale on the secondary market." },
      { title: "Shutdown-Proof Value", description: "Decouple worth from uptime. Because the asset lives on a public chain, a game going offline no longer destroys what a player paid for. The item and its market persist." },
      { title: "Open Secondary Market", description: "Trade without a gatekeeper. Players list and sell items peer to peer against on-chain ownership proof, so value moves without a central intermediary taking custody of the asset." },
    ],
    lifecycleTitle: "The Asset Ownership Lifecycle",
    lifecycleSubtitle:
      "Follow a single item from its mint inside one game to its resale and its reuse inside another.",
    lifecycleSteps: [
      {
        label: "Item Mint",
        description:
          "A studio mints an item as an ERC-721 NFT directly into the player's wallet. The NFT Metadata Pipeline seals its rarity, traits, and origin as the immutable genesis record.",
        icon: Gamepad,
        logFilename: "cerulea_asset_forge.log",
        logLines: [
          { text: "[SYS] Initializing Item Manifest for player wallet...", time: "11:04:12", tone: "default" },
          { text: "[CMD] mintItem { type: \"BLADE_OF_DAWN\", rarity: \"MYTHIC\", edition: 118 }", time: "11:04:12", tone: "primary" },
          { text: "[AUTH] Sealing metadata traits and creator address...", time: "11:04:13", tone: "secondary" },
          { text: "[OK] Item ITEM_0xA71 minted to player. Block 5120844.", time: "11:04:13", tone: "success" },
        ],
      },
      {
        label: "Player Ownership",
        description:
          "The item lands in the player's self-custody wallet. From here it is theirs to equip, hold, or sell, and no studio can revoke it from the ledger.",
        icon: Wallet,
        logFilename: "cerulea_asset_forge.log",
        logLines: [
          { text: "[SYS] Confirming custody transfer to Player_0x4C9...", time: "11:05:40", tone: "default" },
          { text: "[CMD] equip(ITEM_0xA71, loadout: \"PRIMARY\")", time: "11:05:41", tone: "primary" },
          { text: "[SYS] Ownership proof resolved from wallet signature.", time: "11:05:41", tone: "default" },
          { text: "[OK] Item bound to player loadout. Custody intact.", time: "11:05:42", tone: "success" },
        ],
      },
      {
        label: "Cross-Game Sync",
        description:
          "The player takes the item into a second title. Multi-chain NFT Sync mirrors its canonical state so the new game reads its identity and renders it faithfully.",
        icon: Network,
        logFilename: "cerulea_asset_forge.log",
        logLines: [
          { text: "[SYS] Bridging item state to partner title CHAIN_137...", time: "14:22:08", tone: "default" },
          { text: "[CMD] syncAsset(ITEM_0xA71, target: \"ARENA_QUEST\")", time: "14:22:09", tone: "primary" },
          { text: "[AUTH] Verifying canonical owner across chains...", time: "14:22:09", tone: "secondary" },
          { text: "[OK] Item recognized in second game. State mirrored.", time: "14:22:10", tone: "success" },
        ],
      },
      {
        label: "Secondary Sale",
        description:
          "The player resells the item on an open market. The Royalty Standard routes a creator share to the original studio in the same transaction that settles the sale.",
        icon: Coins,
        logFilename: "cerulea_asset_forge.log",
        logLines: [
          { text: "[SYS] Detecting resale listing for ITEM_0xA71...", time: "19:47:33", tone: "default" },
          { text: "[CMD] settleSale(price: 1.4 ETH, royaltyBps: 500)", time: "19:47:34", tone: "primary" },
          { text: "[SYS] Splitting proceeds to seller and creator...", time: "19:47:34", tone: "default" },
          { text: "[OK] Sale settled. Creator royalty paid on-chain.", time: "19:47:35", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes item ownership into modular contracts. Each layer mints, describes, bridges, and monetizes an item without a single studio holding the power to erase it.",
    layers: [
      {
        title: "Item Registry",
        subtitle: "The Ownership Anchor",
        icon: Gamepad,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Anchor",
          description:
            "The foundational data layer. It mints each item as an ERC-721 token and stores the immutable link to its creator, edition, and mint block that every later transfer and sale points back to.",
          platformFunction: "Identity & Ownership",
        },
        codeSnippet:
          "contract ItemRegistry {\n  struct Item {\n    address creator;\n    string kind;\n    uint16 rarity;\n    uint256 edition;\n    uint256 mintedAt;\n  }\n\n  mapping(uint256 => Item) public items;\n\n  function mint(uint256 id, string calldata kind, uint16 rarity) external {\n    items[id] = Item(msg.sender, kind, rarity, id, block.timestamp);\n  }\n}",
        simAction: "Simulate Item Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading studio minter credential...", tone: "default" },
          { text: "Hashing rarity and trait manifest...", tone: "default" },
          { text: "Writing item identity to Level 1 storage...", tone: "default" },
          { text: "Assigning token to player wallet...", tone: "default" },
          { text: "[SUCCESS] Item ITEM_0xA71 minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Metadata Pipeline",
        subtitle: "The Trait Vault",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trait Vault",
          description:
            "Keeps stats honest. The NFT Metadata Pipeline binds each item's traits and provenance to its token by digest, so a rendered item's attributes cannot be silently rewritten by any host game.",
          platformFunction: "Metadata & Provenance",
        },
        codeSnippet:
          "function setMetadata(uint256 id, bytes32 traitHash, string calldata uri) external onlyCreator {\n    require(items[id].creator == msg.sender, \"Not creator\");\n    metadata[id] = Meta(traitHash, uri, block.timestamp);\n    emit MetadataSealed(id, traitHash);\n}",
        simAction: "Simulate Metadata Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting trait sheet for ITEM_0xA71...", tone: "default" },
          { text: "Computing digest of rarity and stats...", tone: "default" },
          { text: "Pinning canonical metadata URI...", tone: "default" },
          { text: "Binding digest to token identity...", tone: "default" },
          { text: "[SUCCESS] Metadata sealed, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Cross-Chain Bridge",
        subtitle: "The Interop Mirror",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Interop Mirror",
          description:
            "Makes an item portable. Multi-chain NFT Sync mirrors the canonical owner and state onto a partner chain, letting a second game recognise the item without either studio trusting the other's database.",
          platformFunction: "Cross-Game Interoperability",
        },
        codeSnippet:
          "function syncAsset(uint256 id, uint256 targetChain) external {\n    require(ownerOf(id) == msg.sender, \"Not owner\");\n    bytes32 proof = keccak256(abi.encode(id, msg.sender, block.number));\n    emit AssetMirrored(id, targetChain, proof);\n}",
        simAction: "Simulate Cross-Game Sync",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading canonical owner of ITEM_0xA71...", tone: "default" },
          { text: "Generating cross-chain ownership proof...", tone: "default" },
          { text: "Emitting mirror event to target title...", tone: "default" },
          { text: "Partner game confirming item identity...", tone: "default" },
          { text: "[SUCCESS] Item usable across both games.", tone: "success" },
        ],
      },
      {
        title: "Royalty Router",
        subtitle: "The Creator Cut",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Creator Cut",
          description:
            "Pays the maker on every resale. The Royalty Standard splits each secondary sale so the original creator's share is routed in the same atomic transaction that pays the seller, with no marketplace goodwill required.",
          platformFunction: "Royalty Settlement",
        },
        codeSnippet:
          "function settleSale(uint256 id, uint256 price) external payable {\n    uint256 royalty = (price * items[id].royaltyBps) / 10000;\n    payable(items[id].creator).transfer(royalty);\n    payable(sellerOf[id]).transfer(price - royalty);\n    emit SaleSettled(id, price, royalty);\n}",
        simAction: "Simulate Royalty Split",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer locking 1.4 ETH for ITEM_0xA71...", tone: "default" },
          { text: "Computing 5 percent creator royalty...", tone: "default" },
          { text: "Routing share to original studio wallet...", tone: "default" },
          { text: "Paying remainder to reselling player...", tone: "default" },
          { text: "[SUCCESS] Sale settled with creator paid.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Player-owned assets are a horizontal capability. Here is how different parts of the games industry put true item ownership to work.",
    sectors: [
      { icon: Building2, title: "AAA & Live-Service Studios", description: "Turn a live-service economy into a durable asset class. Studios mint skins and gear as player-owned tokens and earn a perpetual royalty on the secondary trade they used to lose entirely.", assetTypes: ["Skins & Cosmetics", "Weapon NFTs", "Season Passes"] },
      { icon: Boxes, title: "Web3 & Indie Game Studios", description: "Ship items that outlive a single title. Small studios join a shared interoperability network so their assets carry into partner games, turning cross-game utility into a launch advantage.", assetTypes: ["Cross-Game Items", "Land Parcels", "Character NFTs"] },
      { icon: Wallet, title: "Marketplaces & Wallets", description: "Resolve any item to its verifiable owner and provenance. Wallets and marketplaces render true item history from the ledger, so buyers trade against proof rather than a screenshot.", assetTypes: ["Marketplace Listings", "Ownership Proofs", "Provenance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a studio's existing entitlement backend or routing native wallet mints from players, Cerulea routes both into one shared ownership record.",
    tracks: [
      {
        title: "Track A: Studio Entitlement Bridging",
        description:
          "For established studios on legacy entitlement systems. Existing item grants are translated into signed on-chain mints through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Entitlement DB", sublabel: "Studio Inventory Backend", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Mint Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Player Asset Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Player Minting",
        description:
          "For Web3 games and player-driven economies. A game client signs each mint and trade from the player's own wallet and routes it straight to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Game Client / Wallet", sublabel: "Player Devices", icon: Fingerprint, accent: false },
          { label: "Public Validators", sublabel: "Ownership Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Shared Item Ledger", icon: Gamepad, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a player-owned item economy with cross-game sync, a metadata pipeline, and enforceable creator royalties from scratch requires specialised blockchain engineers and long interoperability integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Ownership & Royalty Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects live-service game economy benchmarks. Writing custom ERC-721 logic, building a cross-chain sync bridge, and enforcing royalties across marketplaces for an average title takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your ownership and royalty rules into pre-audited WebAssembly binaries and provisions the shared asset ledger and interoperability layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "esports-tournament-prize-pool-escrow-and-distribution",
    icon: Coins,
    eyebrow: "Tournament Settlement Layer",
    headline1: "Lock the prize pool.",
    headline2: "Pay winners on proof.",
    heroDescription:
      "Hold the entire prize pool in escrow from the first entry fee through Escrow and Conditional Settlement, so no organiser controls the money mid-event. Provenance Notary anchors verified match results, and Payouts and Settlements release each winner's share automatically the moment outcomes are confirmed.",
    heroCta: "Deploy Tournament Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a promise to pay out into a locked contract that releases funds on verified results.",
    mechanics: [
      { title: "Locked Prize Escrow", description: "Take custody away from the organiser. Entry fees and sponsor contributions flow into an escrow contract at the start of the event, so the pool cannot be spent or withheld while play is underway." },
      { title: "Result Anchoring", description: "Anchor the outcome, not a claim. Provenance Notary records each verified match result on-chain with its bracket position, so payouts settle against tamper-evident results rather than a spreadsheet." },
      { title: "Conditional Release", description: "Pay only on proof. Escrow and Conditional Settlement releases each share only after the winning outcome is anchored, so funds move automatically the instant results are confirmed." },
      { title: "Automatic Payouts", description: "Remove the manual wire. Payouts and Settlements splits the pool across the final standings and pays each player and team wallet directly, ending weeks of delayed manual transfers." },
      { title: "Sponsor Visibility", description: "Show sponsors where the money went. Every contribution and payout is a public ledger entry, so a sponsor confirms their funds reached the players rather than trusting a post-event report." },
      { title: "Dispute Freeze", description: "Handle contested matches cleanly. A flagged result holds the affected share in escrow while every other payout proceeds, so one dispute never blocks the whole distribution." },
    ],
    lifecycleTitle: "The Prize Pool Lifecycle",
    lifecycleSubtitle:
      "Follow a prize pool from its first funded entry fee to the automatic payout of every verified winner.",
    lifecycleSteps: [
      {
        label: "Pool Funding",
        description:
          "Entry fees and sponsor money are deposited into the escrow contract. The pool is locked and visible, and no single organiser holds withdrawal rights over it.",
        icon: Wallet,
        logFilename: "cerulea_prizepool.log",
        logLines: [
          { text: "[SYS] Opening escrow vault for event ESL_CUP_24...", time: "09:12:04", tone: "default" },
          { text: "[CMD] fundPool { entries: 128, sponsor: 50000, unit: \"USDC\" }", time: "09:12:04", tone: "primary" },
          { text: "[AUTH] Locking pool. Organiser withdrawal disabled...", time: "09:12:05", tone: "secondary" },
          { text: "[OK] Pool POOL_7742 escrowed. Total 82000 USDC.", time: "09:12:05", tone: "success" },
        ],
      },
      {
        label: "Result Anchoring",
        description:
          "As the bracket resolves, verified match results are anchored by the Provenance Notary. Each anchored result becomes the condition that unlocks a specific share.",
        icon: FileCheck,
        logFilename: "cerulea_prizepool.log",
        logLines: [
          { text: "[SYS] Receiving verified grand-final result...", time: "21:40:18", tone: "default" },
          { text: "[CMD] anchorResult(match: \"GF\", winner: \"TEAM_NOVA\", score: \"3-1\")", time: "21:40:19", tone: "primary" },
          { text: "[AUTH] Notarizing result hash to bracket position...", time: "21:40:19", tone: "secondary" },
          { text: "[OK] Result anchored. Payout condition satisfied.", time: "21:40:20", tone: "success" },
        ],
      },
      {
        label: "Conditional Release",
        description:
          "The settlement contract reads the anchored standings and computes each share. Funds are released automatically to winning wallets with no manual approval step.",
        icon: Zap,
        logFilename: "cerulea_prizepool.log",
        logLines: [
          { text: "[SYS] Evaluating payout conditions for POOL_7742...", time: "21:41:02", tone: "default" },
          { text: "[CMD] releaseShares(standings: 4, pool: 82000)", time: "21:41:02", tone: "primary" },
          { text: "[SYS] Splitting 50/25/15/10 across final four...", time: "21:41:03", tone: "default" },
          { text: "[OK] Shares released to team wallets. Escrow drained.", time: "21:41:03", tone: "success" },
        ],
      },
      {
        label: "Sponsor Audit",
        description:
          "Sponsors and players query the ledger to trace every contribution and payout. The full flow of funds is public, closing any doubt about payout integrity.",
        icon: Search,
        logFilename: "cerulea_prizepool.log",
        logLines: [
          { text: "[SYS] Public audit request for event ESL_CUP_24...", time: "22:05:47", tone: "default" },
          { text: "[CMD] traceFunds(POOL_7742)", time: "22:05:47", tone: "primary" },
          { text: "[SYS] Assembling 129 deposits and 4 payouts...", time: "22:05:48", tone: "default" },
          { text: "[OK] Full flow of funds returned. Ledger balanced.", time: "22:05:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes prize distribution into modular contracts. Each layer funds, verifies, releases, and audits a pool without any organiser controlling the money in flight.",
    layers: [
      {
        title: "Escrow Vault",
        subtitle: "The Locked Pool",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Locked Pool",
          description:
            "The foundational custody layer. It takes every entry fee and sponsor deposit into a contract-controlled vault at event start, removing the organiser's ability to withdraw or divert the pool.",
          platformFunction: "Escrow & Custody",
        },
        codeSnippet:
          "contract PrizeEscrow {\n  uint256 public pool;\n  bool public locked;\n\n  function fund() external payable {\n    require(!locked, \"Pool locked\");\n    pool += msg.value;\n  }\n\n  function lock() external onlyValidator {\n    locked = true;\n    emit PoolLocked(pool);\n  }\n}",
        simAction: "Simulate Pool Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Collecting 128 entry fees into vault...", tone: "default" },
          { text: "Adding 50,000 USDC sponsor contribution...", tone: "default" },
          { text: "Disabling organiser withdrawal path...", tone: "default" },
          { text: "Sealing pool total at 82,000 USDC...", tone: "default" },
          { text: "[SUCCESS] Prize pool escrowed and locked.", tone: "success" },
        ],
      },
      {
        title: "Result Notary",
        subtitle: "The Outcome Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Outcome Seal",
          description:
            "Anchors verified results by digest. The Provenance Notary binds each match outcome to its bracket slot on-chain, so a payout can only reference a result that was recorded rather than asserted.",
          platformFunction: "Result Verification",
        },
        codeSnippet:
          "function anchorResult(bytes32 matchId, address winner, bytes32 scoreHash) external onlyOfficial {\n    results[matchId] = Result(winner, scoreHash, block.timestamp);\n    emit ResultAnchored(matchId, winner);\n}",
        simAction: "Simulate Result Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving grand-final score 3-1...", tone: "default" },
          { text: "Computing digest of verified result...", tone: "default" },
          { text: "Binding outcome to bracket slot GF...", tone: "default" },
          { text: "Confirming official signer authority...", tone: "default" },
          { text: "[SUCCESS] Result anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Conditional Gate",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Gate",
          description:
            "Releases funds only on proof. Escrow and Conditional Settlement checks that a payout's result is anchored before it moves any money, so shares unlock the instant outcomes are confirmed and never before.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function releaseShare(bytes32 matchId, address to, uint256 amount) external {\n    require(results[matchId].winner == to, \"Not winner\");\n    require(!paid[matchId], \"Already paid\");\n    paid[matchId] = true;\n    payable(to).transfer(amount);\n    emit ShareReleased(matchId, to, amount);\n}",
        simAction: "Simulate Conditional Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking anchored result for GF payout...", tone: "default" },
          { text: "Confirming winner wallet matches record...", tone: "default" },
          { text: "Guarding against double payout...", tone: "default" },
          { text: "Releasing champion share from escrow...", tone: "default" },
          { text: "[SUCCESS] Share released on verified result.", tone: "success" },
        ],
      },
      {
        title: "Payout Distributor",
        subtitle: "The Standings Split",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Standings Split",
          description:
            "Fans the pool across the final standings. Payouts and Settlements computes each placement's share and pays every team wallet directly, turning a manual multi-week wire run into one atomic distribution.",
          platformFunction: "Payout Distribution",
        },
        codeSnippet:
          "function distribute(address[] calldata teams, uint16[] calldata bps) external onlyEngine {\n    for (uint256 i = 0; i < teams.length; i++) {\n        uint256 share = (pool * bps[i]) / 10000;\n        payable(teams[i]).transfer(share);\n        emit Paid(teams[i], share);\n    }\n}",
        simAction: "Simulate Payout Split",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading final four standings...", tone: "default" },
          { text: "Applying 50/25/15/10 split schedule...", tone: "default" },
          { text: "Paying champion and runner-up wallets...", tone: "default" },
          { text: "Paying third and fourth place wallets...", tone: "default" },
          { text: "[SUCCESS] Full pool distributed to winners.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Escrowed prize distribution is a horizontal capability. Here is how different tournament stakeholders put verifiable payouts to work.",
    sectors: [
      { icon: Users, title: "Tournament Organisers", description: "Offer players a payout guarantee no reputation can match. Organisers escrow the pool up front and let results release funds automatically, turning trust into a property of the contract.", assetTypes: ["Prize Pools", "Bracket Results", "Payout Schedules"] },
      { icon: Handshake, title: "Sponsors & Brands", description: "Fund a pool and watch it reach the players. Sponsors trace every contribution and payout on-chain, so activation budgets settle transparently instead of vanishing into an organiser's account.", assetTypes: ["Sponsor Contributions", "Fund Flows", "Audit Trails"] },
      { icon: Gamepad, title: "Teams & Platforms", description: "Receive winnings directly to a team wallet the moment a match is verified. Teams and grassroots platforms cut out the delay and doubt of manual post-event settlement entirely.", assetTypes: ["Team Winnings", "Player Splits", "Settlement Receipts"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a tournament platform's existing bracket backend or routing native wallet entries from players, Cerulea routes both into one escrowed pool.",
    tracks: [
      {
        title: "Track A: Platform Bracket Bridging",
        description:
          "For established tournament platforms on legacy backends. Bracket results and entry records are translated into signed on-chain conditions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Bracket System", sublabel: "Tournament Platform Backend", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Result Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Chain", sublabel: "Escrowed Prize Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Player Entry",
        description:
          "For community and Web3 tournaments. A player client signs each entry fee and result attestation from a wallet and routes it directly to the escrow layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Player Client / Wallet", sublabel: "Competitor Devices", icon: Fingerprint, accent: false },
          { label: "Result Validators", sublabel: "Outcome Consensus", icon: Network, accent: true },
          { label: "Cerulea Escrow L1", sublabel: "Shared Prize Vault", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a trustless prize escrow with result anchoring, conditional release, and multi-wallet payouts from scratch requires specialised smart-contract engineers and long audit cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Escrow & Payout Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects competitive payments infrastructure benchmarks. Writing custom escrow logic, integrating a verified result feed, and building a safe multi-wallet distributor for an average platform takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your escrow and payout rules into pre-audited WebAssembly binaries and provisions the shared prize ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "game-modding-marketplace-with-creator-revenue-share",
    icon: Palette,
    eyebrow: "Creator Revenue Settlement Layer",
    headline1: "Split revenue at purchase.",
    headline2: "Pay modders instantly.",
    heroDescription:
      "Split every mod sale at the moment of purchase on a shared marketplace, where the Royalty Standard and Royalty Clearing modules apply each creator's cut in the same transaction. An ERC-20 token carries payment and the Subgraph Indexer surfaces sales, so studios pay creators automatically instead of running manual monthly payouts.",
    heroCta: "Deploy Creator Marketplaces",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a monthly manual payout run into an instant, transparent split at the point of sale.",
    mechanics: [
      { title: "Purchase-Time Split", description: "Pay the creator as the buyer clicks. The Royalty Standard divides each sale in the same transaction that settles it, so a mod maker's share arrives instantly rather than at the end of the month." },
      { title: "Royalty Clearing", description: "Handle complex splits cleanly. The Royalty Clearing module resolves multi-party shares, collaborator cuts, and the studio's platform fee in one pass, so every stakeholder is paid their exact portion." },
      { title: "Token-Native Payment", description: "Move money without an off-chain processor. An ERC-20 token carries the payment through the marketplace contract, so settlement is programmable and final without waiting on a bank clearing cycle." },
      { title: "Indexed Sales", description: "Surface every sale in real time. The Subgraph Indexer exposes purchases, volumes, and payouts as a queryable feed, so creators and studios read live earnings instead of a delayed report." },
      { title: "Transparent Terms", description: "Publish the split, not just the payout. Each mod's revenue share is encoded on-chain, so a creator sees the exact percentage they earn before listing rather than trusting a private agreement." },
      { title: "No Monthly Payout Run", description: "Retire the accounting backlog. Because settlement happens per sale on-chain, the studio no longer batches, reconciles, and wires creator earnings by hand every month." },
    ],
    lifecycleTitle: "The Marketplace Lifecycle",
    lifecycleSubtitle:
      "Follow a single mod from its listing on the marketplace to the instant split of its very next sale.",
    lifecycleSteps: [
      {
        label: "Mod Listing",
        description:
          "A creator lists a mod with its price and revenue share. The Royalty Standard encodes the split on-chain, so the terms are public before the first sale.",
        icon: Palette,
        logFilename: "cerulea_modmarket.log",
        logLines: [
          { text: "[SYS] Registering mod listing for creator wallet...", time: "10:31:22", tone: "default" },
          { text: "[CMD] listMod { id: \"SKYRIM_ENB_PRO\", price: 12, shareBps: 8500 }", time: "10:31:22", tone: "primary" },
          { text: "[AUTH] Encoding creator split and studio fee...", time: "10:31:23", tone: "secondary" },
          { text: "[OK] Mod MOD_5590 listed. Terms anchored on-chain.", time: "10:31:23", tone: "success" },
        ],
      },
      {
        label: "Purchase & Split",
        description:
          "A player buys the mod with an ERC-20 payment. The marketplace contract divides the proceeds between creator and studio inside the purchase transaction.",
        icon: Coins,
        logFilename: "cerulea_modmarket.log",
        logLines: [
          { text: "[SYS] Receiving purchase for MOD_5590...", time: "15:08:41", tone: "default" },
          { text: "[CMD] buyMod(MOD_5590, payment: 12 CRU)", time: "15:08:41", tone: "primary" },
          { text: "[SYS] Splitting 85 percent creator, 15 percent studio...", time: "15:08:42", tone: "default" },
          { text: "[OK] Purchase settled. Split executed atomically.", time: "15:08:42", tone: "success" },
        ],
      },
      {
        label: "Instant Payout",
        description:
          "The Royalty Clearing module routes each share to its wallet. The creator is paid immediately, and no monthly reconciliation stands between the sale and the payout.",
        icon: Zap,
        logFilename: "cerulea_modmarket.log",
        logLines: [
          { text: "[SYS] Clearing shares for sale TX_0x88F...", time: "15:08:43", tone: "default" },
          { text: "[CMD] clearRoyalty(creator: 10.2 CRU, studio: 1.8 CRU)", time: "15:08:43", tone: "primary" },
          { text: "[AUTH] Transferring tokens to creator wallet...", time: "15:08:43", tone: "secondary" },
          { text: "[OK] Creator paid instantly. No payout backlog.", time: "15:08:44", tone: "success" },
        ],
      },
      {
        label: "Sales Indexing",
        description:
          "The Subgraph Indexer records the sale into a live feed. Creators and the studio query real-time volumes and earnings rather than waiting on a monthly statement.",
        icon: Activity,
        logFilename: "cerulea_modmarket.log",
        logLines: [
          { text: "[SYS] Indexing sale event into subgraph...", time: "15:08:45", tone: "default" },
          { text: "[CMD] indexSale(MOD_5590, amount: 12, ts: 1758268125)", time: "15:08:45", tone: "primary" },
          { text: "[SYS] Updating creator lifetime volume metric...", time: "15:08:45", tone: "default" },
          { text: "[OK] Sale queryable. Live earnings updated.", time: "15:08:46", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the modding marketplace into modular contracts. Each layer lists, splits, pays, and indexes a sale without a studio batching payouts by hand.",
    layers: [
      {
        title: "Listing Registry",
        subtitle: "The Terms Anchor",
        icon: Palette,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Terms Anchor",
          description:
            "The foundational data layer. It records each mod's price, creator, and revenue share on-chain at listing time, so the split that governs every sale is public and fixed before a buyer ever pays.",
          platformFunction: "Listing & Terms",
        },
        codeSnippet:
          "contract ModRegistry {\n  struct Mod {\n    address creator;\n    uint256 price;\n    uint16 creatorBps;\n  }\n\n  mapping(bytes32 => Mod) public mods;\n\n  function list(bytes32 id, uint256 price, uint16 bps) external {\n    require(bps <= 10000, \"Bad share\");\n    mods[id] = Mod(msg.sender, price, bps);\n  }\n}",
        simAction: "Simulate Mod Listing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading creator wallet credential...", tone: "default" },
          { text: "Validating revenue share within bounds...", tone: "default" },
          { text: "Writing listing terms to Level 1 storage...", tone: "default" },
          { text: "Publishing split for buyer visibility...", tone: "default" },
          { text: "[SUCCESS] Mod MOD_5590 listed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Royalty Splitter",
        subtitle: "The Purchase-Time Cut",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Purchase-Time Cut",
          description:
            "Divides revenue as the sale settles. The Royalty Standard computes the creator and studio shares inside the buy transaction, so no proceeds sit in a pool waiting for a monthly manual split.",
          platformFunction: "Revenue Split",
        },
        codeSnippet:
          "function buyMod(bytes32 id) external {\n    Mod memory m = mods[id];\n    uint256 cut = (m.price * m.creatorBps) / 10000;\n    token.transferFrom(msg.sender, m.creator, cut);\n    token.transferFrom(msg.sender, treasury, m.price - cut);\n    emit ModPurchased(id, msg.sender, m.price);\n}",
        simAction: "Simulate Revenue Split",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer approving 12 CRU for MOD_5590...", tone: "default" },
          { text: "Computing 85 percent creator share...", tone: "default" },
          { text: "Routing 10.2 CRU to creator wallet...", tone: "default" },
          { text: "Routing 1.8 CRU platform fee to treasury...", tone: "default" },
          { text: "[SUCCESS] Sale split at point of purchase.", tone: "success" },
        ],
      },
      {
        title: "Clearing Module",
        subtitle: "The Multi-Party Settler",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Multi-Party Settler",
          description:
            "Resolves complex payouts. The Royalty Clearing module fans a single sale across collaborators and the platform in one atomic pass, so a mod with several contributors settles every share correctly.",
          platformFunction: "Royalty Clearing",
        },
        codeSnippet:
          "function clear(bytes32 saleId, address[] calldata payees, uint16[] calldata bps) external {\n    uint256 total = saleAmount[saleId];\n    for (uint256 i = 0; i < payees.length; i++) {\n        token.transfer(payees[i], (total * bps[i]) / 10000);\n    }\n    emit Cleared(saleId, payees.length);\n}",
        simAction: "Simulate Royalty Clearing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading collaborator shares for sale TX_0x88F...", tone: "default" },
          { text: "Resolving primary creator portion...", tone: "default" },
          { text: "Resolving co-author and studio portions...", tone: "default" },
          { text: "Transferring all shares in one pass...", tone: "default" },
          { text: "[SUCCESS] Every party cleared instantly.", tone: "success" },
        ],
      },
      {
        title: "Sales Indexer",
        subtitle: "The Live Ledger View",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Ledger View",
          description:
            "Exposes earnings in real time. The Subgraph Indexer turns raw purchase events into a queryable feed of volumes and payouts, so creators read live income instead of waiting on a monthly studio report.",
          platformFunction: "Indexing & Analytics",
        },
        codeSnippet:
          "function indexSale(bytes32 modId, uint256 amount) external onlyMarket {\n    salesVolume[modId] += amount;\n    lastSaleAt[modId] = block.timestamp;\n    emit SaleIndexed(modId, amount, block.timestamp);\n}",
        simAction: "Simulate Sales Index",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Capturing purchase event for MOD_5590...", tone: "default" },
          { text: "Incrementing lifetime sales volume...", tone: "default" },
          { text: "Updating creator earnings feed...", tone: "default" },
          { text: "Exposing sale to subgraph query...", tone: "default" },
          { text: "[SUCCESS] Live earnings feed updated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Instant creator revenue share is a horizontal capability. Here is how different parts of the modding economy put point-of-sale settlement to work.",
    sectors: [
      { icon: Building2, title: "Game Studios", description: "Run an official mod marketplace without a payout department. Studios encode the split once and let every sale settle itself, replacing a monthly reconciliation run with automatic on-chain distribution.", assetTypes: ["Official Marketplaces", "Revenue Splits", "Platform Fees"] },
      { icon: Palette, title: "Mod Creators", description: "Get paid the instant a player buys, with the split visible up front. Creators earn per sale rather than per month and read live volumes instead of trusting a delayed statement.", assetTypes: ["Mod Listings", "Instant Payouts", "Earnings Feeds"] },
      { icon: Boxes, title: "Marketplace Platforms", description: "Operate a multi-creator storefront where money moves natively. Platforms settle complex collaborator splits atomically and surface transparent sales data to every party from the ledger.", assetTypes: ["Storefronts", "Collaborator Splits", "Sales Analytics"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a studio's existing storefront backend or routing native wallet purchases from players, Cerulea routes both into one settlement record.",
    tracks: [
      {
        title: "Track A: Studio Storefront Bridging",
        description:
          "For studios running a legacy marketplace backend. Existing purchase events are translated into signed on-chain splits through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Storefront", sublabel: "Studio Marketplace Backend", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Sale Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Chain", sublabel: "Creator Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Creator Marketplace",
        description:
          "For Web3-native mod platforms. A buyer client signs each purchase from a wallet and routes the token payment straight to the settlement layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Buyer Client / Wallet", sublabel: "Player Devices", icon: Fingerprint, accent: false },
          { label: "Marketplace Validators", sublabel: "Split Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Shared Payout Ledger", icon: Palette, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a mod marketplace with purchase-time revenue splits, multi-party clearing, and a live sales index from scratch requires specialised smart-contract engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Split & Clearing Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects creator marketplace infrastructure benchmarks. Writing custom split logic, wiring a token payment rail, and building a real-time sales indexer for an average platform takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your split and clearing rules into pre-audited WebAssembly binaries and provisions the shared settlement ledger and indexer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cross-studio-shared-character-licensing-for-crossover-events",
    icon: Copyright,
    eyebrow: "Character Licensing Settlement Layer",
    headline1: "Measure real usage.",
    headline2: "Settle royalties on proof.",
    heroDescription:
      "Record actual in-game usage of a licensed character on a shared network, where Provenance Notary and Compliance Attestations hold the tamper-evident usage record. The Royalty Standard and Royalty Clearing modules calculate royalties directly from that measured data, so crossover deals settle on proof instead of a manual estimate.",
    heroCta: "Deploy Licensing Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a hand-estimated royalty for a borrowed character into a measured settlement from usage data.",
    mechanics: [
      { title: "Shared License Registry", description: "Put both studios on one record. The terms of each crossover license, the character, the host game, and the rate live on a shared network, so neither party works from its own private copy." },
      { title: "Measured Usage", description: "Count real play, not an estimate. Provenance Notary anchors each verified usage event of the licensed character, so royalties rest on how much the character was actually used in the host game." },
      { title: "Compliance Attestations", description: "Prove the usage was in-bounds. Compliance Attestations record that each usage stayed within the licensed scope and territory, so a settlement carries its own audit evidence." },
      { title: "Automated Royalty Calc", description: "Compute the fee from the data. The Royalty Standard applies the agreed rate to the anchored usage record, so the royalty owed is derived rather than negotiated after the event." },
      { title: "Clean Clearing", description: "Settle both sides in one pass. The Royalty Clearing module transfers the calculated royalty from the host studio to the IP owner, closing the crossover deal without a reconciliation dispute." },
      { title: "Verifiable Audit Trail", description: "Replace the spreadsheet with a ledger. Every usage event, attestation, and payment is recorded on-chain, so either studio audits the crossover against signed data at any time." },
    ],
    lifecycleTitle: "The Licensing Lifecycle",
    lifecycleSubtitle:
      "Follow a borrowed character from the signed license through measured usage to a settled royalty.",
    lifecycleSteps: [
      {
        label: "License Agreement",
        description:
          "Two studios record a crossover license on the shared network. The registry anchors the character, the host game, and the agreed royalty rate as the settlement's basis.",
        icon: Handshake,
        logFilename: "cerulea_ip_license.log",
        logLines: [
          { text: "[SYS] Registering crossover license on shared network...", time: "08:45:10", tone: "default" },
          { text: "[CMD] grantLicense { char: \"NOVA_KNIGHT\", host: \"ARENA_QUEST\", rateBps: 400 }", time: "08:45:10", tone: "primary" },
          { text: "[AUTH] Co-signing terms from both studios...", time: "08:45:11", tone: "secondary" },
          { text: "[OK] License LIC_3120 anchored. Rate fixed on-chain.", time: "08:45:11", tone: "success" },
        ],
      },
      {
        label: "Usage Recording",
        description:
          "As players use the licensed character, the Provenance Notary anchors each verified usage event. The record accumulates as measured evidence, not an after-the-fact guess.",
        icon: Radio,
        logFilename: "cerulea_ip_license.log",
        logLines: [
          { text: "[SYS] Ingesting character usage events for LIC_3120...", time: "13:20:33", tone: "default" },
          { text: "[CMD] recordUsage(char: \"NOVA_KNIGHT\", sessions: 84210)", time: "13:20:33", tone: "primary" },
          { text: "[AUTH] Notarizing usage batch to license record...", time: "13:20:34", tone: "secondary" },
          { text: "[OK] Usage anchored. 84,210 sessions measured.", time: "13:20:34", tone: "success" },
        ],
      },
      {
        label: "Royalty Calculation",
        description:
          "The Royalty Standard applies the agreed rate to the anchored usage. Compliance Attestations confirm the usage stayed in scope before any fee is computed.",
        icon: PieChart,
        logFilename: "cerulea_ip_license.log",
        logLines: [
          { text: "[SYS] Evaluating royalty for measured usage...", time: "18:02:19", tone: "default" },
          { text: "[CMD] calcRoyalty(LIC_3120, revenue: 210000, rateBps: 400)", time: "18:02:19", tone: "primary" },
          { text: "[SYS] Attestation confirms usage within scope...", time: "18:02:20", tone: "default" },
          { text: "[OK] Royalty computed: 8,400 from measured data.", time: "18:02:20", tone: "success" },
        ],
      },
      {
        label: "Settlement",
        description:
          "The Royalty Clearing module transfers the calculated royalty from the host studio to the IP owner. The crossover deal closes against signed data with no dispute.",
        icon: Coins,
        logFilename: "cerulea_ip_license.log",
        logLines: [
          { text: "[SYS] Clearing royalty for license LIC_3120...", time: "18:03:05", tone: "default" },
          { text: "[CMD] settle(from: \"ARENA_QUEST\", to: \"NOVA_STUDIO\", amt: 8400)", time: "18:03:05", tone: "primary" },
          { text: "[AUTH] Transferring royalty to IP owner wallet...", time: "18:03:06", tone: "secondary" },
          { text: "[OK] Crossover settled on verified usage.", time: "18:03:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes character licensing into modular contracts. Each layer registers, measures, attests, and settles a crossover without either studio estimating the royalty by hand.",
    layers: [
      {
        title: "License Registry",
        subtitle: "The Shared Agreement",
        icon: Copyright,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Agreement",
          description:
            "The foundational data layer. It records each crossover license, its character, host game, and rate on a shared network, so both studios settle against one agreement rather than two private contracts.",
          platformFunction: "License & Terms",
        },
        codeSnippet:
          "contract LicenseRegistry {\n  struct License {\n    address ipOwner;\n    address host;\n    bytes32 character;\n    uint16 rateBps;\n  }\n\n  mapping(bytes32 => License) public licenses;\n\n  function grant(bytes32 id, address host, bytes32 ch, uint16 bps) external {\n    licenses[id] = License(msg.sender, host, ch, bps);\n  }\n}",
        simAction: "Simulate License Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading IP owner credential...", tone: "default" },
          { text: "Recording character and host game...", tone: "default" },
          { text: "Fixing agreed royalty rate on-chain...", tone: "default" },
          { text: "Capturing co-signature from both studios...", tone: "default" },
          { text: "[SUCCESS] License LIC_3120 anchored.", tone: "success" },
        ],
      },
      {
        title: "Usage Notary",
        subtitle: "The Measured Record",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Measured Record",
          description:
            "Replaces the estimate. The Provenance Notary anchors each verified usage event of the licensed character by digest, so the royalty base is measured data that neither studio can quietly adjust.",
          platformFunction: "Usage Provenance",
        },
        codeSnippet:
          "function recordUsage(bytes32 licId, uint256 sessions, bytes32 proof) external onlyHost {\n    usage[licId] += sessions;\n    emit UsageAnchored(licId, sessions, proof, block.timestamp);\n}",
        simAction: "Simulate Usage Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving usage batch for NOVA_KNIGHT...", tone: "default" },
          { text: "Computing digest of session evidence...", tone: "default" },
          { text: "Adding 84,210 sessions to license total...", tone: "default" },
          { text: "Binding proof to license record...", tone: "default" },
          { text: "[SUCCESS] Usage anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Attestation Module",
        subtitle: "The Scope Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Scope Check",
          description:
            "Proves the usage was licensed. Compliance Attestations record that each usage batch stayed within the granted scope and territory, so a settlement carries its own compliance evidence on-chain.",
          platformFunction: "Compliance Attestation",
        },
        codeSnippet:
          "function attest(bytes32 licId, bytes32 usageId, bool inScope) external onlyAttestor {\n    require(inScope, \"Out of scope\");\n    attestations[usageId] = Attestation(licId, msg.sender, block.timestamp);\n    emit UsageAttested(licId, usageId);\n}",
        simAction: "Simulate Scope Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading usage batch for LIC_3120...", tone: "default" },
          { text: "Checking usage against licensed scope...", tone: "default" },
          { text: "Confirming territory within grant...", tone: "default" },
          { text: "Recording attestation on-chain...", tone: "default" },
          { text: "[SUCCESS] Usage attested in scope.", tone: "success" },
        ],
      },
      {
        title: "Royalty Clearing",
        subtitle: "The Settlement Rail",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Settlement Rail",
          description:
            "Closes the deal from data. The Royalty Standard applies the fixed rate to the attested usage and the Royalty Clearing module transfers the fee to the IP owner, turning a negotiation into a computed payment.",
          platformFunction: "Royalty Settlement",
        },
        codeSnippet:
          "function settle(bytes32 licId, uint256 revenue) external {\n    License memory l = licenses[licId];\n    uint256 royalty = (revenue * l.rateBps) / 10000;\n    token.transferFrom(l.host, l.ipOwner, royalty);\n    emit RoyaltySettled(licId, royalty);\n}",
        simAction: "Simulate Royalty Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading attested usage for LIC_3120...", tone: "default" },
          { text: "Applying 4 percent agreed rate...", tone: "default" },
          { text: "Computing royalty from measured revenue...", tone: "default" },
          { text: "Transferring fee to IP owner wallet...", tone: "default" },
          { text: "[SUCCESS] Crossover settled on proof.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Usage-measured character licensing is a horizontal capability. Here is how different parts of the industry put verified crossover settlement to work.",
    sectors: [
      { icon: Building2, title: "AAA & Franchise Studios", description: "License a flagship character into a partner title and settle on real usage. Studios trade crossover appearances knowing the royalty tracks measured play rather than a negotiated guess.", assetTypes: ["Crossover Licenses", "Usage Records", "Royalty Statements"] },
      { icon: Copyright, title: "IP Holders & Licensors", description: "Monetize a character across many games with one auditable record. Rights holders read exactly how a borrowed character was used and collect royalties that match the evidence.", assetTypes: ["Character IP", "License Grants", "Audit Trails"] },
      { icon: Gamepad, title: "Crossover Event Platforms", description: "Run limited-time crossovers where settlement is automatic. Event platforms anchor usage as it happens and clear royalties between studios cleanly the moment the event closes.", assetTypes: ["Event Licenses", "Attestations", "Settlement Receipts"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a studio's telemetry backend or routing native usage signatures from a host game, Cerulea routes both into one shared licensing record.",
    tracks: [
      {
        title: "Track A: Studio Telemetry Bridging",
        description:
          "For studios with existing usage telemetry systems. Character usage events are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Telemetry", sublabel: "Host Game Analytics Backend", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Usage Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Licensing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Usage Attestation",
        description:
          "For host games instrumented natively. A game server signs each usage batch and attestation and routes it directly to the shared licensing layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Host Game Server", sublabel: "Instrumented Runtime", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Usage Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared License Record", icon: Copyright, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-studio licensing network with usage anchoring, compliance attestations, and automatic royalty settlement from scratch requires specialised engineers and long inter-studio integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Usage & Royalty Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects inter-studio IP integration benchmarks. Reconciling each studio's telemetry, building custom usage measurement and attestation logic, and shipping a settlement rail for an average deal takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your usage and royalty rules into pre-audited WebAssembly binaries and provisions the shared licensing ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const gamingEsportsItems: ExtraCaseItem[] = [
  {
    label: "In-game asset ownership and cross-game interoperability via NFTs",
    href: "/solutions/use-case/in-game-asset-ownership-and-cross-game-interoperability-via-nfts",
    description: "Player-owned items that move across games.",
    icon: Gamepad,
    category: "DAPPS",
    tags: ["Gaming", "NFTs"],
    industry: INDUSTRY,
  },
  {
    label: "Esports tournament prize pool escrow and distribution",
    href: "/solutions/use-case/esports-tournament-prize-pool-escrow-and-distribution",
    description: "Escrowed prize pools paid on verified results.",
    icon: Coins,
    category: "DAPPS",
    tags: ["Esports", "Escrow"],
    industry: INDUSTRY,
  },
  {
    label: "Game modding marketplace with creator revenue share",
    href: "/solutions/use-case/game-modding-marketplace-with-creator-revenue-share",
    description: "Instant creator splits at point of purchase.",
    icon: Palette,
    category: "SME",
    tags: ["Modding", "Royalties"],
    industry: INDUSTRY,
  },
  {
    label: "Cross-studio shared character licensing for crossover events",
    href: "/solutions/use-case/cross-studio-shared-character-licensing-for-crossover-events",
    description: "Character royalties settled on measured in-game usage.",
    icon: Copyright,
    category: "ENTERPRISE",
    tags: ["Licensing", "IP"],
    industry: INDUSTRY,
  },
]
