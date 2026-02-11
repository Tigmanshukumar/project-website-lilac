import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: 'https://drmayareynolds.netlify.app/',
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://drmayareynolds.netlify.app/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://drmayareynolds.netlify.app/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
