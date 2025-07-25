'use client'

import { Comparison } from '@/components/home/Comparison';
import { ContactForm } from '@/components/home/ContactForm';
import { Customers } from '@/components/home/Customers';
import { DemoCTA } from '@/components/home/DemoCTA';
import { Features } from '@/components/home/Features';
import { Footer } from '@/components/home/Footer';
import { Header } from '@/components/home/Header';
import { Hero } from '@/components/home/Hero';
import { Hook } from '@/components/home/Hook';
import { Problems } from '@/components/home/Problems';
import { Way } from '@/components/home/Way';
import { Who } from '@/components/home/Who';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Hook /> */}
      <Who />
      {/* <Way /> */}
      <Problems />
      <DemoCTA />
      <Comparison />
      <Customers />
      <Features />
      <ContactForm />
      <Footer />
    </>
  );
} 