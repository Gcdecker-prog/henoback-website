import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/content/services';
import { caseStudies } from '@/lib/content/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = ['', '/about-us', '/services', '/case-studies', '/get-started'];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...caseStudies
      .filter((c) => c.published)
      .map((c) => ({
        url: `${base}/case-studies/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      })),
  ];
}
