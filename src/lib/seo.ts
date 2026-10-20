import type { Metadata } from 'next';
import { company, yearsOfExperience } from '@/content/company';

export const siteConfig = {
  name: company.tradeName,
  url: company.canonicalUrl,
  description: company.description,
  locale: 'id_ID',
  lang: 'id',
  defaultOgImage: '/opengraph-image',
  themeColor: '#1d4ed8',
} as const;

export function absoluteUrl(path = '/'): string {
  if (path.startsWith('http')) return path;
  return new URL(path, siteConfig.url).toString();
}

type BuildMetadataInput = {
  title: string;
  description: string;
  
  path: string;
  
  index?: boolean;
  
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  index = true,
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        }
      : { index: false, follow: true },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(type === 'article'
        ? { publishedTime, modifiedTime, authors: [siteConfig.name] }
        : {}),
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.defaultOgImage],
    },
  };
}

export const defaultDescription = `Layanan psikologi profesional untuk siswa, individu, sekolah, dan perusahaan. ${yearsOfExperience()} tahun mendampingi klien di Jawa Timur dan Jawa Tengah.`;
