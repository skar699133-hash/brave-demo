import { VisualDirection } from './types';

export const THEME_PRESETS = {
  [VisualDirection.OrganicExecutive]: {
    palette: {
      primary: '#24332B', // Deep Moss
      accent: '#C9A84C',  // Warm Gold
      background: '#F5F2EA', // Ivory
      text: '#141414',    // Charcoal
    },
    fonts: {
      heading: '"Plus Jakarta Sans", sans-serif',
      editorial: '"Cormorant Garamond", serif',
      ui: '"IBM Plex Mono", monospace',
    },
    mood: 'boutique wealth advisory, modern private financial office',
  },
  [VisualDirection.MidnightWealth]: {
    palette: {
      primary: '#0B0D12',   // Obsidian Background
      accent: '#D4AF37',    // Gold Accent
      background: '#0B0D12', // Obsidian Background
      text: '#F7F7F5',      // White Smoke Text
      surface: '#1A1C23',   // Dark Surface
    },
    fonts: {
      heading: '"Inter", sans-serif',
      editorial: '"Playfair Display", serif',
      ui: '"JetBrains Mono", monospace',
    },
    mood: 'private banking, elite corporate confidence',
  },
  [VisualDirection.CorporateEditorial]: {
    palette: {
      primary: '#102A43', // Navy
      accent: '#D4A017',  // Gold Accent
      background: '#F8FAFC', // Soft White
      text: '#1F2933',    // Graphite
    },
    fonts: {
      heading: '"Playfair Display", serif',
      editorial: '"Playfair Display", serif',
      body: '"Lato", sans-serif',
      ui: '"Space Mono", monospace',
    },
    mood: 'modern consulting firm, Swiss editorial minimalism',
  },
  [VisualDirection.FinancialFuturism]: {
    palette: {
      primary: '#0A0A14', // Deep Void
      accent: '#E6C15A',  // Neon Gold
      background: '#ECECEC', // Silver White
      text: '#18181B',    // Graphite
    },
    fonts: {
      heading: '"Sora", sans-serif',
      editorial: '"Instrument Serif", serif',
      ui: '"Fira Code", monospace',
    },
    mood: 'next-generation AI finance, compliance firm',
  }
};

export const DEFAULT_SERVICES = [
  { id: '1', title: 'ITR Filing', description: 'Expert income tax return filing for individuals and corporate entities.', icon: 'FileText' },
  { id: '2', title: 'GST Returns', description: 'Comprehensive GST compliance, registration, and monthly filing services.', icon: 'ClipboardCheck' },
  { id: '3', title: 'Tax Planning', description: 'Strategic financial planning to maximize tax efficiency and savings.', icon: 'TrendingUp' },
  { id: '4', title: 'Business Registration', description: 'Seamless incorporation and registration for startups and established firms.', icon: 'Briefcase' },
  { id: '5', title: 'Company Audit', description: 'Rigorous statutory and internal audits following global standards.', icon: 'ShieldCheck' },
  { id: '6', title: 'TDS Filing', description: 'Accurate and timely TDS return preparation and advisory services.', icon: 'Clock' },
];

export const DEFAULT_TESTIMONIALS = [
  { id: '1', name: 'Arjun Mehta', role: 'CEO, TechVanguard', content: 'Their financial advisory transformed our scalability. Truly cinematic professionalism.' },
  { id: '2', name: 'Sarah Jenkins', role: 'Director, Global Logistics', content: 'The level of trust and clarity they provide is unmatched in the industry.' },
  { id: '3', name: 'Vikram Singh', role: 'Founder, EcoBuild', content: 'A boutique experience with corporate-grade compliance elite results.' },
];
