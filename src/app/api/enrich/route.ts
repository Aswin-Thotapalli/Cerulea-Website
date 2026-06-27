import { NextResponse } from 'next/server';

const PRIVATE_IP = /^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|::1$|localhost$|0\.0\.0\.0)/;

export async function GET(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1';

  if (PRIVATE_IP.test(ip)) {
    return NextResponse.json({ local: true });
  }

  try {
    const token = process.env.IPINFO_TOKEN;
    const url = `https://ipinfo.io/${ip}/json${token ? `?token=${token}` : ''}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });

    if (!res.ok) return NextResponse.json({ error: 'upstream_error' });

    const data = await res.json();

    // org field looks like "AS15169 Google LLC" — strip the ASN prefix
    const company = data.org ? data.org.replace(/^AS\d+\s+/, '') : null;

    return NextResponse.json({
      ip: data.ip ?? ip,
      city: data.city ?? null,
      region: data.region ?? null,
      country: data.country ?? null,
      org: data.org ?? null,
      company,
      timezone: data.timezone ?? null,
      postal: data.postal ?? null,
    });
  } catch {
    return NextResponse.json({ error: 'lookup_failed' });
  }
}
