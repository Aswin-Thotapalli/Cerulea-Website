import { NextResponse } from 'next/server';

const CONTENT = `# Cerulea Studio MCP Server

The Cerulea Studio MCP server allows AI agents to interact with the Cerulea platform programmatically. Every destructive or mutating operation requires explicit authentication and user confirmation.

**Endpoint:** \`https://mcp.studio.cerulea.io/mcp\`
**Protocol:** Model Context Protocol (MCP) 1.0
**Discovery:** \`https://cerulea.io/.well-known/mcp.json\`

---

## Authentication

Public tools require no authentication. Authenticated tools require a Cerulea API key passed as a request header.

\`\`\`
X-Cerulea-API-Key: <your-api-key>
\`\`\`

API keys are generated from the Cerulea Dashboard under Settings > API Access.

---

## Tools

### list_templates

Returns all available chain and Dapp templates from the live Studio template registry.

**Auth required:** No

**Input:** None

**Output:**
\`\`\`json
{
  "templates": [
    {
      "id": "string",
      "name": "string",
      "category": "public-l1 | private-chain | dapp",
      "description": "string"
    }
  ]
}
\`\`\`

**Example:**
\`\`\`
GET /mcp/list_templates
→ { "templates": [ { "id": "supply-chain-basic", "name": "Supply Chain Basic", "category": "private-chain", "description": "..." }, ... ] }
\`\`\`

---

### get_pricing

Returns all three subscription tiers and available add-ons as structured JSON. Sourced from Studio configuration; never a hardcoded copy.

**Auth required:** No

**Input:** None

**Output:**
\`\`\`json
{
  "tiers": [
    {
      "name": "Public Dapps",
      "price_usd_monthly": 40,
      "included_features": ["string"]
    },
    {
      "name": "Private Dapps",
      "price_usd_monthly": 30,
      "included_features": ["string"]
    },
    {
      "name": "Private Dapps Pro",
      "price_usd_monthly": 60,
      "included_features": ["string"]
    }
  ],
  "addons": [
    { "name": "string", "price_usd_monthly": 0, "description": "string" }
  ]
}
\`\`\`

**Example:**
\`\`\`
GET /mcp/get_pricing
→ { "tiers": [ { "name": "Public Dapps", "price_usd_monthly": 40, ... }, ... ] }
\`\`\`

---

### validate_schema

Validates a proposed data model against the Studio compiler. Returns pass or a structured error list. Uses the same compiler module Studio uses, not a separate validation layer.

**Auth required:** Yes

**Input:**
\`\`\`json
{
  "schema": { }
}
\`\`\`

\`schema\` is the proposed data model in Cerulea schema format. Obtain the schema format by exporting from Cerulea Studio.

**Output (valid):**
\`\`\`json
{ "valid": true }
\`\`\`

**Output (invalid):**
\`\`\`json
{
  "valid": false,
  "errors": [
    {
      "field": "entities.Asset.fields.quantity",
      "message": "Field type 'decimal' requires a precision parameter.",
      "code": "MISSING_PRECISION"
    }
  ]
}
\`\`\`

**Example:**
\`\`\`
POST /mcp/validate_schema
{ "schema": { "entities": [ ... ] } }
→ { "valid": true }
\`\`\`

---

### estimate_cost

Returns an itemised cost estimate for a given chain configuration. Maps every selected option to real pricing including add-ons.

**Auth required:** Yes

**Input:**
\`\`\`json
{
  "configuration": { }
}
\`\`\`

**Output:**
\`\`\`json
{
  "monthly_usd": 90,
  "one_time_usd": 0,
  "line_items": [
    { "label": "Private Dapps Pro", "type": "monthly", "amount_usd": 60 },
    { "label": "Additional validator nodes", "type": "monthly", "amount_usd": 30 }
  ]
}
\`\`\`

**Example:**
\`\`\`
POST /mcp/estimate_cost
{ "configuration": { "tier": "private-dapps-pro", "validators": 5 } }
→ { "monthly_usd": 90, "one_time_usd": 0, "line_items": [ ... ] }
\`\`\`

---

### get_chain_status

Returns live validator state and telemetry for a chain owned by the authenticated account.

**Auth required:** Yes

**Input:**
\`\`\`json
{
  "chain_id": "string"
}
\`\`\`

The \`chain_id\` is visible in the Cerulea Dashboard under Chains.

**Output:**
\`\`\`json
{
  "status": "active",
  "validator_count": 5,
  "active_validators": 5,
  "last_block": 1048290,
  "last_block_time": "2026-07-12T08:14:33Z",
  "throughput_tps": 142
}
\`\`\`

Status values: \`active\` | \`degraded\` | \`offline\`

**Example:**
\`\`\`
POST /mcp/get_chain_status
{ "chain_id": "chain_abc123" }
→ { "status": "active", "validator_count": 5, ... }
\`\`\`

---

### deploy_private_chain

Provisions a private chain. **WRITE OPERATION.** This tool has hard preconditions that cannot be bypassed.

**Preconditions (all must pass):**
1. The schema must have previously passed \`validate_schema\`.
2. \`confirm\` must be explicitly \`true\`. The agent must obtain explicit confirmation from the user before setting this.
3. The authenticated account must hold an active Private Dapps or Private Dapps Pro subscription.

If any precondition fails, the tool returns an error and does not provision anything.

**Auth required:** Yes + \`confirm: true\`

**Input:**
\`\`\`json
{
  "schema": { },
  "configuration": { },
  "confirm": true
}
\`\`\`

**Output:**
\`\`\`json
{
  "deployment_id": "dep_xyz789",
  "chain_id": "chain_xyz789",
  "status": "provisioning",
  "estimated_completion": "2026-10-12"
}
\`\`\`

Note: \`estimated_completion\` reflects the full deployment timeline, which is measured in months. The provisioning process covers infrastructure setup, validator onboarding, compliance review, and staged activation.

**Example:**
\`\`\`
POST /mcp/deploy_private_chain
{ "schema": { ... }, "configuration": { ... }, "confirm": true }
→ { "deployment_id": "dep_xyz789", "chain_id": "chain_xyz789", "status": "provisioning", "estimated_completion": "2026-10-12" }
\`\`\`

---

## Error Codes

| Code | Meaning |
|------|---------|
| AUTH_REQUIRED | Tool requires an API key. |
| INVALID_API_KEY | The API key is invalid or revoked. |
| SCHEMA_NOT_VALIDATED | deploy_private_chain called without a passing validate_schema result. |
| CONFIRM_NOT_SET | deploy_private_chain called without confirm: true. |
| ENTITLEMENT_MISSING | Account does not hold a required subscription tier. |
| CHAIN_NOT_FOUND | chain_id does not belong to the authenticated account. |
| VALIDATION_FAILED | validate_schema returned errors. |

---

## Organisation

Publisher: Caerulean Bytechains Private Limited
CIN: U72900TG2021PTC154300
Headquarters: Secunderabad, Telangana 500062, India
Website: https://cerulea.io
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
