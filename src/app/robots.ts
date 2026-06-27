import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/analytics', '/blog/manage', '/blog/new', '/blog/edit/'],
      },
    ],
    sitemap: 'https://cerulea.io/sitemap.xml',
  };
}
