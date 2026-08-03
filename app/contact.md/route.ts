import { NextResponse } from 'next/server';

const CONTENT = `# Contact Cerulea

## General Enquiries

For product questions, partnership enquiries, or general information:

[cerulea.io/company/contact](https://cerulea.io/company/contact)

## Sales

For enterprise pricing, private chain deployment, or a solution walkthrough:

[cerulea.io/company/contact-sales](https://cerulea.io/company/contact-sales)

## Company Address

Caerulean Bytechains Private Limited
Secunderabad, Telangana 500062, India

CIN: U72900TG2021PTC154300
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
