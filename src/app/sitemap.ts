import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nexshift.com.np';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2026-08-30'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-08-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
