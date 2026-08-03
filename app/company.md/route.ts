import { NextResponse } from 'next/server';

const CONTENT = `# Caerulean Bytechains Private Limited

Caerulean Bytechains Private Limited is the company that builds and operates Cerulea.

## Identity

- **Legal name**: Caerulean Bytechains Private Limited
- **CIN**: U72900TG2021PTC154300
- **Founded**: 24 August 2021
- **Headquarters**: Secunderabad, Telangana 500062, India
- **Motto**: Blockchain for Good

## What We Build

Caerulean Bytechains builds Cerulea, a no-code blockchain platform that enables organisations to deploy custom blockchain networks without writing blockchain code. The platform's dual-chain architecture and Dynamic Consensus Framework are proprietary to Caerulean Bytechains.

## Links

- **Website**: [cerulea.io](https://cerulea.io)
- **Company page**: [cerulea.io/company](https://cerulea.io/company)
- **LinkedIn**: [linkedin.com/company/cbytechains](https://in.linkedin.com/company/cbytechains)
- **Corporate website**: [cbytechains.com](https://cbytechains.com)
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
