import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexshift.com.np'; // Updated to actual production URL

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
