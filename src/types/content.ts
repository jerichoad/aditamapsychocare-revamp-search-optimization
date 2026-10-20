export type FaqItem = {
  id: string;
  question: string;
  
  answer: string;
  relatedHref?: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  intro?: string;
  items: FaqItem[];
};

export type HowToStep = {
  
  title: string;
  body: string;
};
