import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nexshift.com.np'; // Updated to actual production URL

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/api/'],
      },
      // Explicitly ALLOW Generative AI Bots so NexShift is included in AI answers (GEO)
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'PerplexityBot',
          'Google-Extended',
          'anthropic-ai',
          'ClaudeBot',
          'Meta-ExternalAgent',
          'Bytespider',
          'cohere-ai',
          'AI2Bot'
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
