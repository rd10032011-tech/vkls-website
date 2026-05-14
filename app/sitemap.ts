import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vkls.in';

  // We should ideally fetch slugs from services-data, but for now we list core routes
  const routes = [
    '',
    '/about',
    '/founders',
    '/services',
    '/presence',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
