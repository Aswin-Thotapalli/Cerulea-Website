import { NextResponse } from 'next/server';

const CONTENT = `# Cerulea Studio

Cerulea Studio is the visual no-code builder for designing, configuring, and deploying blockchain networks on the Cerulea platform. It eliminates the need to write smart contract code by providing a graphical interface for every layer of a blockchain application.

## What Studio Does

Studio translates visual designs into deterministic, deployable bytecode. Operators use a drag-and-drop interface to define:

- **Data models**: entity schemas, field types, relationships, and constraints.
- **Asset schemas**: fungible tokens, non-fungible assets, and fractional ownership structures.
- **Governance rules**: voting thresholds, proposal types, veto rights, and upgrade paths.
- **Access control**: role-based permissions, multi-sig requirements, and participant whitelisting.
- **Workflow logic**: multi-party business processes, automated escrow, and conditional execution.

## Compilation Output

When the design is finalised, Studio compiles the configuration into either WASM binaries or EVM-compatible bytecode, depending on the target chain environment. The output is deterministic: the same Studio configuration always produces the same binary, which enables auditability.

## Deployment

Studio configurations are deployed to Cerulea chains. Compilation within Studio is fast. Full production deployment of a private chain, including validator onboarding and compliance review, is measured in months.

## Integration

Studio-compiled chains automatically expose Cerulea APIs (REST, webhooks, RPC) for all defined entities and operations. Developers can access chain state and submit transactions without building custom API layers.

## Access

Studio is available at [studio.cerulea.io](https://studio.cerulea.io).
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
