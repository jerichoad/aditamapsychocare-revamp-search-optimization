import type { MetadataRoute } from 'next';
import { company } from '@/content/company';
import { serviceSlugs } from '@/content/services';

const routes: Array<{
  path: string;
  lastModified: string;
  changeFrequency: 'monthly' | 'weekly';
  priority: number;
}> = [
  {
    path: '/',
    lastModified: company.lastUpdated,
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    path: '/layanan',
    lastModified: company.lastUpdated,
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/tentang-kami',
    lastModified: company.lastUpdated,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/faq',
    lastModified: company.lastUpdated,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/kontak',
    lastModified: company.lastUpdated,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.canonicalUrl;

  return [
    ...routes.map((r) => ({
      url: `${base}${r.path === '/' ? '' : r.path}`,
      lastModified: r.lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${base}/layanan/${slug}`,
      lastModified: company.lastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
