import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Subdomain host-routing for the developer sub-sites.
// docs.cerulea.io / whitepaper.cerulea.io / api.cerulea.io are domain aliases on the
// same deployment; rewrite them under /developers/* so the browser keeps the subdomain URL.
// The section roots have no index page in this build, so the bare subdomain lands on the
// first page of each section (per const/sidebar-config.ts); deeper paths pass straight through.
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get('host') || '';
  const isRoot = url.pathname === '/';

  if (hostname.startsWith('docs.')) {
    url.pathname = isRoot ? '/developers/docs/foundation' : `/developers/docs${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname.startsWith('whitepaper.')) {
    url.pathname = isRoot ? '/developers/whitepaper/abstract' : `/developers/whitepaper${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname.startsWith('api.')) {
    url.pathname = isRoot ? '/developers/api/introduction' : `/developers/api${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Run on page routes only, not API routes, Next.js internals, or static assets.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)',
  ],
};
