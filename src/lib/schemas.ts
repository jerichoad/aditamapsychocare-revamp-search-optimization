import type { FaqItem } from '@/types/content';
import type { ServiceContent } from '@/types/services';
import { company, formattedAddress } from '@/content/company';
import { absoluteUrl } from './seo';

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${company.canonicalUrl}/#organisasi`,
    name: company.tradeName,
    legalName: company.legalName,
    url: company.canonicalUrl,
    description: company.description,
    foundingDate: String(company.foundedYear),
    email: company.contact.email,
    telephone: company.contact.phoneInternational,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressRegion: company.address.province,
      addressCountry: company.address.country,
    },
    areaServed: company.serviceArea,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.contact.phoneInternational,
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: 'Indonesian',
    },
    sameAs: company.officialProfiles.map((p) => p.url),
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${company.canonicalUrl}/#situs`,
    name: company.tradeName,
    url: company.canonicalUrl,
    inLanguage: 'id-ID',
    publisher: { '@id': `${company.canonicalUrl}/#organisasi` },
  };
}

export function serviceSchema(
  service: ServiceContent,
  path = `/layanan/${service.slug}`
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#layanan`,
    name: service.name,
    description: service.directAnswer,
    url: absoluteUrl(path),
    serviceType: service.name,
    audience: { '@type': 'Audience', audienceType: service.audience },
    areaServed: company.serviceArea,
    provider: { '@id': `${company.canonicalUrl}/#organisasi` },
  };
}

export function faqSchema(items: FaqItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${company.canonicalUrl}/faq#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export type BreadcrumbItem = { name: string; href: string };

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function officeAddressLine(): string {
  return `${formattedAddress}, ${company.address.province}`;
}
