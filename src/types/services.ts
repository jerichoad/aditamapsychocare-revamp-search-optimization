import type { HowToStep } from './content';

export type ServiceContent = {
  slug: string;
  name: string;
  tagline: string;
  
  directAnswer: string;
  details: string[];
  includes: string[];
  steps: HowToStep[];
  audience: string;
  priceNote: string;
  updatedAt: string;
};
