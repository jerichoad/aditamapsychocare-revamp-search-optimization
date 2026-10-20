import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SkipLink from '@/components/layout/SkipLink';
import JsonLd from '@/components/seo/JsonLd';
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import ConsentBanner from '@/components/analytics/ConsentBanner';
import { organizationSchema, websiteSchema } from '@/lib/schemas';
import { company } from '@/content/company';
import { defaultDescription, siteConfig } from '@/lib/seo';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${company.tradeName} | Layanan Psikologi Profesional Jawa Timur & Jawa Tengah`,
    template: `%s | ${company.tradeName}`,
  },
  description: defaultDescription,
  applicationName: company.tradeName,
  authors: [{ name: company.tradeName, url: company.canonicalUrl }],
  creator: company.tradeName,
  publisher: company.tradeName,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'CfwAv_cph3ol6aM1rucfea4mYXdUQAY_CL8Xz4MvRkE',
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  openGraph: {
    type: 'website',
    url: company.canonicalUrl,
    title: `${company.tradeName} | Layanan Psikologi Profesional`,
    description: defaultDescription,
    siteName: company.tradeName,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${company.tradeName} Layanan Psikologi Profesional`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.tradeName} | Layanan Psikologi Profesional`,
    description: defaultDescription,
    images: [siteConfig.defaultOgImage],
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: siteConfig.themeColor,
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={siteConfig.lang}
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SkipLink />
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-grow pt-20">
          {children}
        </main>
        <SiteFooter />

        {/* Google Tag Manager (consent-gated) + banner persetujuan.
            Ditaruh SETELAH konten agar tidak bersaing dengan LCP;
            `afterInteractive` memastikan skrip pihak ketiga tidak memblokir render. */}
        <GoogleTagManager />
        <ConsentBanner />

        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
