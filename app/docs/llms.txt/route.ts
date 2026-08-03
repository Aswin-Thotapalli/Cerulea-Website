import { NextResponse } from 'next/server';

const CONTENT = `# Cerulea Developer Documentation Index

This file is an index of machine-readable documentation for Cerulea, intended for AI agents, LLM systems, and developer tools.

For the full product index see: https://cerulea.io/llms.txt
For the complete reference in one file see: https://cerulea.io/llms-full.txt

---

## Product Documentation

- [Platform overview](https://cerulea.io/platform.md)
- [Cerulea Studio](https://cerulea.io/studio.md)
- [Dynamic Consensus Framework](https://cerulea.io/dcf.md)
- [APIs and access](https://cerulea.io/apis.md)
- [Pricing](https://cerulea.io/pricing.md)

## Developer Reference

- [MCP server documentation](https://cerulea.io/docs/mcp.md), tools, inputs, outputs, auth, and examples for the Cerulea Studio MCP server
- [MCP discovery](https://cerulea.io/.well-known/mcp.json), machine-readable MCP server manifest
- [Platform documentation](https://cerulea.io/developers/docs), full interactive documentation covering 13 sections: Foundation, Decision Frameworks, Studio, Build Lifecycle, Architecture, Governance, Infrastructure, Security, Intelligence, Integrations, APIs, Enterprise Model, Glossary

## About

- [Company](https://cerulea.io/company.md)
- [Contact](https://cerulea.io/contact.md)

---

Publisher: Caerulean Bytechains Private Limited (CIN U72900TG2021PTC154300)
Website: https://cerulea.io
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
