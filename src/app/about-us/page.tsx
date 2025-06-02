'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Award, Building } from 'lucide-react'
import BusinessTrustBlock from '../../components/about-us/BusinessTrustBlock'
import DigitalBranchComparison from '@/components/about-us/DigitalBranchComparison'
import PartnershipWithRBK from '@/components/about-us/PartnershipWithRBK'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Partnership Section */}
      <PartnershipWithRBK />
      
      {/* Digital Branch Comparison */}
      <DigitalBranchComparison />

      {/* Why You Didn't Know Us — And Why You Can Trust Us */}
      <BusinessTrustBlock />

      {/* Contact section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Стать партнёром?
            </h2>
            <p className="mt-6 text-lg text-[#64748b]">
              Пишите на partner@pluse.kz или в WhatsApp.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/77474288095?text=${encodeURIComponent('Добрый день! Интересует партнёрство с вами.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Написать в WhatsApp
              </a>
              <Link
                href="/"
                className="bg-white text-[#0f172a] px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#0088f5]/20 hover:border-[#0088f5]/40 transition-all duration-300"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 