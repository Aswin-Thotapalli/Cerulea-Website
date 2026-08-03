import { NextResponse } from 'next/server';

const CONTENT = `# Cerulea APIs

Cerulea auto-generates API access for every chain deployed on the platform. Developers do not write or maintain API servers; they are produced automatically from the data models defined in Cerulea Studio.

## What Is Auto-Generated

For every entity and operation defined in Studio, Cerulea generates:

- **REST endpoints**: standard CRUD operations (create, read, update, delete) over entities, with filtering, pagination, and sorting.
- **Webhooks**: event-driven callbacks triggered when on-chain state changes, enabling real-time integration with external systems.
- **RPC access**: low-level chain access for reading raw blocks, submitting signed transactions, and querying chain state directly.

## Authentication

API access is authenticated per-chain. Private permissioned chains require API keys issued by the chain operator. The public L1 follows open access policies with rate limiting.

## Schema Alignment

Generated APIs are always consistent with the Studio-defined schema. When the schema changes and is redeployed, the API is automatically updated. There is no manual synchronisation step.

## Documentation

Per-chain API documentation is available through the Cerulea Dashboard. Endpoints are described in OpenAPI format and can be imported into standard tooling such as Postman or Insomnia.

## Developer Resources

- API documentation: [cerulea.io/developers/api](https://cerulea.io/developers/api)
- Developer docs: [cerulea.io/developers/docs](https://cerulea.io/developers/docs)
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
