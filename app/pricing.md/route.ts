import { NextResponse } from 'next/server';

const CONTENT = `# Cerulea Pricing

Cerulea is available in three subscription tiers, all billed monthly in USD.

## Tiers

### Public Dapps, 40 USD/month

Deploy applications on Cerulea's public permissionless L1. Suitable for developers and organisations building decentralised applications that require public blockchain infrastructure without managing validator nodes or consensus configuration.

Includes:
- Hosted public L1 application deployment.
- Auto-generated REST, webhook, and RPC APIs.
- Access to Cerulea Studio for data model and governance design.
- Chain Explorer and Dashboard access.

### Private Dapps, 30 USD/month

Deploy and operate private permissioned chains with controlled access. Suitable for enterprises and regulated organisations that require data sovereignty, participant whitelisting, and custom governance.

Includes:
- Private permissioned chain deployment.
- Full operator control over validator set and governance rules.
- Auto-generated APIs scoped to the private chain.
- Compliance-oriented access controls.

### Private Dapps Pro, 60 USD/month

Advanced private chain deployment with extended governance tooling, compliance features, and dedicated support. Suitable for enterprise clients with complex regulatory requirements.

Includes everything in Private Dapps, plus:
- Advanced governance modules (multi-tier voting, veto rights, upgrade scheduling).
- Enhanced compliance reporting.
- Dedicated support and onboarding.

## Deployment Timeline

Chain deployment is measured in months. This covers design, validator onboarding, compliance review, and staged activation. Studio compilation is fast; full production deployment is a months-long process.

## Full Pricing Details

[cerulea.io/pricing](https://cerulea.io/pricing)
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
