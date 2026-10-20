import type { MetadataRoute } from 'next';
import { company } from '@/content/company';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot', 'DuckDuckBot'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },

      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'PerplexityBot',
          'CCBot',
        ],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${company.canonicalUrl}/sitemap.xml`,
    host: company.canonicalUrl,
  };
}
