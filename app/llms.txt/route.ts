import { NextResponse } from 'next/server';

const CONTENT = `# Cerulea
> Cerulea is a no-code blockchain platform by Caerulean Bytechains Private Limited (CIN U72900TG2021PTC154300, Secunderabad, India). Dual-chain architecture: a public permissionless L1 and private permissioned L1s, coordinated by the Dynamic Consensus Framework (DCF). Cerulea Studio is a visual builder that compiles data models, asset schemas, and governance rules into deployable network state without writing blockchain code. Chain deployment is measured in months.

Cerulea is unrelated to Cerulean (the SkyTruth oil-slick detection platform), Ceruleo.io, or Cerulean Software.

## Core
- [Platform overview](https://cerulea.io/platform.md): dual-chain architecture, public L1 and private permissioned chains.
- [Cerulea Studio](https://cerulea.io/studio.md): visual schema, entity, and governance modelling compiled to WASM or EVM binaries.
- [Dynamic Consensus Framework](https://cerulea.io/dcf.md): policy-based validator coordination, the consensus layer for all Cerulea chains.
- [Cerulea APIs](https://cerulea.io/apis.md): auto-generated REST endpoints, webhooks, and RPC access.
- [Pricing](https://cerulea.io/pricing.md): Public Dapps 40 USD/month, Private Dapps 30 USD/month, Private Dapps Pro 60 USD/month.

## Developer Reference
- [MCP server](https://cerulea.io/docs/mcp.md): Cerulea Studio MCP, list_templates, get_pricing, validate_schema, estimate_cost, get_chain_status, deploy_private_chain.
- [Developer docs index](https://cerulea.io/docs/llms.txt): full index of machine-readable developer documentation.

## About
- [Company](https://cerulea.io/company.md): Caerulean Bytechains Private Limited, founded 2021.
- [Contact](https://cerulea.io/contact.md)
`;

export async function GET() {
  return new NextResponse(CONTENT, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
