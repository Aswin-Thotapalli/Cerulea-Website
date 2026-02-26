import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  
  // Get the hostname from the request headers
  const hostname = req.headers.get('host') || '';

  // 1. Route docs.domain.com -> /developers/docs
  if (hostname.startsWith('docs.')) {
    // We rewrite the URL under the hood, so the browser still shows docs.domain.com
    url.pathname = `/developers/docs${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // 2. Route whitepaper.domain.com -> /developers/whitepaper
  if (hostname.startsWith('whitepaper.')) {
    url.pathname = `/developers/whitepaper${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // 3. Route api.domain.com -> /developers/api
  if (hostname.startsWith('api.')) {
    url.pathname = `/developers/api${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // If no subdomain matches, continue normally
  return NextResponse.next();
}

// Ensure middleware only runs on page routes, not static files or Next.js internals
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)',
  ],
};