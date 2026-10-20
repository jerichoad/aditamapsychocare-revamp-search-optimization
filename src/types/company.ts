export type Address = {
  street: string;
  city: string;
  postalCode: string;
  province: string;
  country: string;
};

export type ContactInfo = {
  phoneDisplay: string;
  phoneInternational: string;
  whatsappUrl: string;
  email: string;
  hours: string;
};

export type ServiceFact = {
  slug: string;
  name: string;
  shortDescription: string;
  url: string;
  audience: string;
  priceNote: string;
};

export type Credential = {
  name: string;
  issuer: string;
  detail?: string;
  year?: string;
};

export type OfficialProfile = {
  label: string;
  url: string;
};

export type CompanyProfile = {
  legalName: string;
  tradeName: string;
  foundedYear: number;
  experienceLabel: string;
  description: string;
  address: Address;
  contact: ContactInfo;
  serviceArea: string[];
  services: ServiceFact[];
  credentials: Credential[];
  officialProfiles: OfficialProfile[];
  canonicalUrl: string;
  lastUpdated: string;
};
