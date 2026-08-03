import { MetadataRoute } from 'next';

const AI_AGENTS = [
  'Googlebot', 'Google-Extended', 'Bingbot',
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'PerplexityBot', 'Perplexity-User',
  'Applebot', 'Applebot-Extended',
  'CCBot', 'Amazonbot',
  'Meta-ExternalAgent', 'DuckAssistBot', 'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_AGENTS.map(userAgent => ({ userAgent, allow: '/' as string })),
      { userAgent: '*', allow: '/' as string },
    ],
    sitemap: 'https://cerulea.io/sitemap.xml',
  };
}
