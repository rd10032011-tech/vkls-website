import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vkls.in';
  const currentDate = new Date();

  const routes = [
    { path: '', changeFreq: 'weekly' as const, priority: 1.0 },
    { path: '/services', changeFreq: 'weekly' as const, priority: 0.9 },
    { path: '/presence', changeFreq: 'monthly' as const, priority: 0.8 },
    { path: '/about', changeFreq: 'monthly' as const, priority: 0.7 },
    { path: '/founders', changeFreq: 'monthly' as const, priority: 0.6 },
    { path: '/contact', changeFreq: 'monthly' as const, priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
