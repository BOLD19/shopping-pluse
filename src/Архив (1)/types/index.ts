// Service Types
export interface Service {
  id: 'bnpl' | 'shopping' | 'accounting' | 'bank' | 'other';
  icon: any; // Lucide icon component type
  name: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

// Trust Card Types
export interface TrustCard {
  id: string;
  logo?: string;
  icon?: any; // Lucide icon component type
  color: string;
  title: string;
  description: string;
}

// FAQ Types
export interface FAQItem {
  question: string;
  answer: string;
}

// Stats Types
export interface Stat {
  id: number;
  text: string;
}

// Component Props Types
export interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

export interface TrustCardProps {
  card: TrustCard;
  isMain?: boolean;
}

export interface FAQItemProps {
  item: FAQItem;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export interface IPhoneMockupProps {
  currentBnplStat: number;
  currentShopStat: number;
} 