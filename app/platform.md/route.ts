import { NextResponse } from 'next/server';

const CONTENT = `# Cerulea Platform

Cerulea is a dual-chain blockchain platform by Caerulean Bytechains Private Limited. It provides two co-existing chain types managed by a single operator interface.

## Public L1

The public permissionless L1 is an open network where any developer or organisation can deploy decentralised applications (dApps) without requiring permission from a central authority. Validators participate under the rules of the Dynamic Consensus Framework (DCF), which governs block production, finality, and validator admission. Applications on the public L1 pay per-transaction fees and are subject to the global governance rules of the network.

## Private Permissioned Chains

Private permissioned chains are isolated networks that an organisation deploys and controls independently. Access is restricted to invited participants. The operator defines validator sets, consensus parameters, governance policies, and data access rules. Private chains are suited to regulated industries including financial services, healthcare, government, and supply chain, where data sovereignty and compliance are mandatory.

## Dynamic Consensus Framework

Both chain types run on the Dynamic Consensus Framework (DCF), Cerulea's proprietary consensus layer. DCF enables runtime governance transitions without hard forks, making it possible to evolve network rules as regulatory requirements change. See [dcf.md](https://cerulea.io/dcf.md) for full details.

## Cerulea Studio

Both chain types are built and configured through Cerulea Studio, a visual no-code builder. See [studio.md](https://cerulea.io/studio.md).

## Components

- **Studio**: Visual data model and governance builder.
- **APIs**: Auto-generated REST, webhook, and RPC endpoints for each deployed chain.
- **SDK**: Client libraries for integrating with Cerulea chains.
- **Explorer**: On-chain data browser for transactions, blocks, and addresses.
- **Dashboard**: Operator control panel for chain health, validator management, and governance.
- **Intelligence**: Analytics and AI-assisted insights over on-chain data.

## Deployment Timeline

Chain deployment is measured in months. This covers network design, parameter configuration, validator onboarding, compliance review, and staged activation. Studio compilation of data models is fast, but full production chain activation is a months-long process.
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
