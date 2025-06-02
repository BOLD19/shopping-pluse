'use client'

import { 
  Hero, 
  Features, 
  About, 
  CTA,
  FAQ
} from '@/components/home';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <About />

      {/* Call to Action Section */}
      <CTA />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
} 