import React from "react"
import LayoutTitle from "../../component/LayoutTitle"
import NavigationButtons from "../../component/NavigationButtons"

export default function Glossary() {
  return (
    <div>
      <LayoutTitle title="Glossary" des="20 terms" />

      <div className="grid grid-cols-2 gap-4">
        {content.map((item, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="rounded-xl border border-border/50 bg-card px-5 py-4 text-sm hover:shadow-lg"
          >
            <h3 className="font-medium text-foreground">{item.term}</h3>
            <p className="mt-1 text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
      <NavigationButtons
        previous={{
          title: "Enterprise Operating Model",
          href: "/developers/docs/enterprise",
        }}
      />
    </div>
  )
}

const content = [
  {
    term: "API",
    description:
      "Application Programming Interface. A defined set of rules allowing software to communicate. Cerulea exposes REST APIs for external tools and workflows to interact with deployed systems.",
  },
  {
    term: "WASM",
    description:
      "WebAssembly. A binary instruction format enabling high-performance code execution in a sandboxed environment. Cerulea uses WASM as the runtime for smart contracts and modules.",
  },
  {
    term: "EVM",
    description:
      "Ethereum Virtual Machine. The execution environment used by Ethereum and compatible blockchains. Cerulea's Public L1 supports EVM compatibility, meaning Solidity contracts can run with minimal modification.",
  },
  {
    term: "RPC",
    description:
      "Remote Procedure Call. A protocol allowing external programs to request operations from a blockchain node. How wallets, applications, and backends submit transactions and query state.",
  },
  {
    term: "PoS",
    description:
      "Proof-of-Stake. A consensus mechanism where validators are selected based on staked collateral. Cerulea's Public L1 uses PoS for validator selection and network security.",
  },
  {
    term: "Validator",
    description:
      "A node in a blockchain network responsible for verifying transactions and adding new blocks. On Public L1, selected via PoS. On Private Chains, enterprise-selected.",
  },
  {
    term: "Genesis Parameters",
    description:
      "The initial configuration values that define how a blockchain network starts, including validator set, token distribution, and governance settings. Cerulea generates these automatically from Studio configuration.",
  },
  {
    term: "Governance",
    description:
      "The on-chain mechanism through which changes to a live blockchain system are proposed, voted on, and executed. In Cerulea, the only pathway for modifying a deployed system after launch.",
  },
  {
    term: "Slashing",
    description:
      "A penalty mechanism that reduces a validator's staked tokens for misbehavior such as double-signing or excessive downtime. Slashing conditions are configured during system setup.",
  },
  {
    term: "Epoch",
    description:
      "A fixed period after which validator sets are updated, rewards distributed, and governance checkpoints may occur. Epoch length is configured as part of the system's consensus parameters.",
  },
  {
    term: "dApp",
    description:
      "Decentralized Application. An application running on a blockchain rather than a centralized server, interacting with smart contracts without a single point of control.",
  },
  {
    term: "IPFS",
    description:
      "InterPlanetary File System. A peer-to-peer file storage protocol addressing files by content rather than location. Cerulea's storage integrations include IPFS-based providers for decentralized asset persistence.",
  },
  {
    term: "Smart Contract",
    description:
      "Self-executing code on a blockchain that enforces agreed-upon rules when predefined conditions are met. Cerulea provisions smart contract execution without requiring users to write contract code.",
  },
  {
    term: "Oracle",
    description:
      "A service providing verified real-world data to smart contracts, bridging on-chain logic and off-chain information such as price feeds or event data.",
  },
  {
    term: "SLA",
    description:
      "Service Level Agreement. A formal commitment defining expected service levels including uptime guarantees. For Private Chain deployments, the enterprise is responsible for maintaining SLAs on validator infrastructure.",
  },
  {
    term: "Interoperability",
    description:
      "The ability of different blockchain networks to communicate and transfer assets or data. Cerulea supports configurable cross-chain interoperability through message passing and asset bridging protocols.",
  },
  {
    term: "No-Code",
    description:
      "An approach enabling functional systems to be built through visual configuration rather than writing source code. Cerulea is fully no-code: every aspect of a blockchain deployment is configured, not programmed.",
  },
  {
    term: "Blue-Green Deployment",
    description:
      "An upgrade strategy where two identical environments run in parallel. Traffic shifts from old (blue) to new (green) at a precise moment, enabling near-zero downtime.",
  },
  {
    term: "Canary Deployment",
    description:
      "An upgrade strategy where a new version rolls out to a small subset of nodes first. If issues are detected, the rollout halts before broader impact occurs.",
  },
  {
    term: "Data Sovereignty",
    description:
      "The principle that data is subject to the laws and governance of the organization controlling it. Cerulea's Private Chain architecture is designed to preserve full enterprise data sovereignty.",
  },
]
