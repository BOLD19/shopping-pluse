'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Award, Building } from 'lucide-react'
import BusinessTrustBlock from '../../components/BusinessTrustBlock'
import DigitalBranchComparison from '@/components/DigitalBranchComparison'
import PartnershipWithRBK from '@/components/PartnershipWithRBK'

export default function DigitalBranch() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative isolate pt-32 pb-20">
        {/* Radial gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_30%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white opacity-90"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-6xl">
              Цифровой филиал Pluse.kz
            </h1>
          </div>
        </div>
      </div>

      {/* Introduction Block */}
      <PartnershipWithRBK />
      <DigitalBranchComparison />

      {/* Why You Didn't Know Us — And Why You Can Trust Us */}
      <div className="py-24 sm:py-32 bg-[#191C2F]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BusinessTrustBlock />
        </div>
      </div>

      {/* Contact section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Хотите стать партнёром?
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A]">
              Пишите нам на partner@pluse.kz или в WhatsApp.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/77474288095?text=${encodeURIComponent('Добрый день! Интересует партнёрство с вами.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Написать в WhatsApp
              </a>
              <Link
                href="/"
                className="bg-white text-[#1A1A1A] px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
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