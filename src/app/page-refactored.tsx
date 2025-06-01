'use client'

import { useHomePage } from '@/hooks/useHomePage';
import { HomeHero, HomeFAQ, HomeCTA } from '@/components/home';

export default function HomePage() {
  const { isLoading, expandedFaqItems, toggleFaqItem } = useHomePage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HomeHero isLoading={isLoading} />

      {/* TODO: Temporarily commented out - to be refactored into components */}
      {/* 
      Services Section:
      - Service icons grid (~300 lines)
      - Service content cards
      - Mobile navigation arrows
      
      How It Works Section:
      - 3 step process (~150 lines)
      - Animated step cards
      
      Trust Section:
      - Trust cards (~200 lines)
      - Partner logos
      */}

      {/* FAQ Section */}
      <HomeFAQ 
        expandedFaqItems={expandedFaqItems} 
        toggleFaqItem={toggleFaqItem} 
      />

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
} 