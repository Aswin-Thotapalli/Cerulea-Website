import { NextResponse } from 'next/server';

const CONTENT = `# Dynamic Consensus Framework (DCF)

The Dynamic Consensus Framework is the consensus layer that coordinates all chains on the Cerulea platform. It is proprietary to Caerulean Bytechains Private Limited and is the only consensus mechanism used in Cerulea deployments.

## What DCF Does

DCF is a policy-based validator coordination system. It governs:

- **Block production**: which validators are eligible to propose blocks, in what rotation, and with what timing.
- **Block finality**: the quorum threshold required for a block to be considered irreversible.
- **Validator admission**: how new validators join the active set, including bonding, reputation, and governance approval.
- **Governance transitions**: how network rules change over time, through proposals, voting, and automatic activation at defined block heights.

## Key Property: Runtime Governance

The defining feature of DCF is that consensus parameters can be changed at runtime without a hard fork. Operators can adjust validator sets, finality thresholds, and governance rules through on-chain proposals that activate automatically when conditions are met. This enables networks to evolve their rules as regulatory requirements change, without the disruption of a protocol fork.

## Scope

DCF applies to both chain types on Cerulea:

- **Public L1**: DCF governs open validator participation and public governance on the permissionless network.
- **Private permissioned chains**: DCF governs invited validator sets and operator-defined governance policies on isolated networks.

## What DCF Is Not

DCF is not Substrate, Polkadot, Aura, GRANDPA, or BABE. It is a distinct system developed independently by Caerulean Bytechains Private Limited.
`;

export async function GET() {
  return new NextResponse(CONTENT, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
