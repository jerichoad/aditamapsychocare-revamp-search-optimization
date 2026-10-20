import type { ServiceContent } from './services';
import type { FaqItem } from './content';

export type PackageTone = 'violet' | 'primary' | 'light';

export type PackageFact = {
  title: string;
  price: string;
  per: string;
  description: string;
  features: string[];
  buttonText: string;
  tone: PackageTone;
  popular: boolean;
};

export type PricingCategory = {
  id: 'sekolah' | 'corporate';
  label: string;
  intro: string;
  packages: PackageFact[];
};

export type LayananPage = ServiceContent & {
  faqs: FaqItem[];
};
