import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://repo.robloxwikihub.com';

  const routes = [
    '',
    '/scrap-calculator',
    '/quota-calculator',
    '/gear-calculator',
    '/monsters-guide',
    '/item-database',
    '/console-commands',
    '/beginner-guide',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
