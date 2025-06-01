import { LucideIcon } from 'lucide-react';

export interface HomePageState {
  isLoading: boolean;
  expandedFaqItems: Set<number>;
}

export interface StatItem {
  id: number;
  text: string;
}

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  name: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export interface TrustCard {
  id: string;
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HomeHeroProps {
  isLoading: boolean;
}

export interface HomeFAQProps {
  expandedFaqItems: Set<number>;
  toggleFaqItem: (index: number) => void;
} 