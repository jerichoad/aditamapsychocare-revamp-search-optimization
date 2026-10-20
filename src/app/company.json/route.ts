import { company } from '@/content/company';

export const revalidate = 3600;
export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    name: company.tradeName,
    legalName: company.legalName,
    description: company.description,
    foundedYear: company.foundedYear,
    url: company.canonicalUrl,
    email: company.contact.email,
    telephone: company.contact.phoneInternational,
    address: {
      street: company.address.street,
      city: company.address.city,
      postalCode: company.address.postalCode,
      province: company.address.province,
      country: company.address.country,
    },
    openingHours: company.contact.hours,
    serviceArea: company.serviceArea,
    services: company.services.map((s) => ({
      name: s.name,
      url: `${company.canonicalUrl}${s.url}`,
      audience: s.audience,
      priceNote: s.priceNote,
    })),
    credentials: company.credentials,
    officialProfiles: company.officialProfiles,
    canonicalUrl: company.canonicalUrl,
    lastUpdated: company.lastUpdated,
  });
}
