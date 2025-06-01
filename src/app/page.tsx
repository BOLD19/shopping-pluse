'use client'

import { useHomePage } from '@/hooks/useHomePage';
import { 
  HomeHero, 
  HomeServices,
  HomeHowItWorks, 
  HomeTrust, 
  HomeFAQ
} from '@/components/home';

export default function HomePage() {
  const { 
    isLoading, 
    expandedFaqItems, 
    toggleFaqItem 
  } = useHomePage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HomeHero 
        isLoading={isLoading}
      />

      {/* Services Section */}
      <HomeServices />

      {/* How It Works Section */}
      <HomeHowItWorks />

      {/* Trust Section */}
      <HomeTrust />

      {/* FAQ Section */}
      <HomeFAQ 
        expandedFaqItems={expandedFaqItems} 
        toggleFaqItem={toggleFaqItem} 
      />
    </div>
  );
} 