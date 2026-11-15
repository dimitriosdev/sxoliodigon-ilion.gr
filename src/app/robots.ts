// src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['*', 'GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: 'https://sxoliodigon-ilion.gr/sitemap.xml', // Αντικατάστησε με το τελικό domain
  };
}
