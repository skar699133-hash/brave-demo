export enum VisualDirection {
  OrganicExecutive = 'Organic Executive',
  MidnightWealth = 'Midnight Wealth',
  CorporateEditorial = 'Corporate Editorial',
  FinancialFuturism = 'Financial Futurism',
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export interface AppConfig {
  brandName: string;
  tagline: string;
  visualDirection: VisualDirection;
  services: Service[];
  primaryCTA: string;
  location: string;
  testimonials: Testimonial[];
}
