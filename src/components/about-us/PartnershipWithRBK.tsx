import React from 'react';

export default function PartnershipWithRBK() {
  return (
    <div className="relative isolate pt-32 pb-32 sm:pb-40 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBF8FF] via-[#F8FAFC] to-white opacity-90"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0088f5]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0088f5]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              Первый Необанк для Предпринимателей в Казахстане
            </h1>
            <p className="mt-8 text-xl text-[#64748b] leading-relaxed">
              Pluse.kz работает по модели Banking-as-a-Service через лицензию RBK Bank. Все банковские услуги через современный интерфейс.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background glow for logo */}
              <div className="absolute inset-0 bg-[#0088f5]/20 rounded-3xl blur-xl scale-110"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,136,245,0.15)] border border-white/60">
                <img src="/rbk_logo.png" alt="RBK Bank" className="w-full h-auto object-contain max-w-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 