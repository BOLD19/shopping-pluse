'use client'

import Link from 'next/link'

export default function AccountingPage() {
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
            <div className="flex items-center justify-center gap-2 mb-4">
              <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-6xl">
                Бухгалтерия
              </h1>
              <span className="text-sm bg-[#E0FF4F] text-[#1A1A1A] px-3 py-1 rounded-full">скоро</span>
            </div>
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
              Онлайн-бухгалтерия с автоматизацией рутинных операций. Синхронизация с налоговой, отчетность и расчеты.
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
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