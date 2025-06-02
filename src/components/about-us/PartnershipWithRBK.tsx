import React from 'react';
import { ShieldCheck, Award, Building, Users } from 'lucide-react';

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
          {/* Text content - Left */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-[#0088f5] tracking-wider uppercase">О компании</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl mb-6">
              Первый{" "}
              <span className="text-[#0088f5] relative">
                Необанк
                <div className="absolute bottom-1 left-0 right-0 h-2 bg-[#0979ff] opacity-20 -z-10" />
              </span>
              {" "}для Бизнеса
            </h1>
            <p className="text-lg text-[#64748b] leading-relaxed">
              Banking-as-a-Service платформа через лицензию RBK Bank. 
              Современные финансовые услуги для бизнеса.
            </p>
          </div>

          {/* Info block with integrated logo - Right */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-[#0088f5]/10 blur-lg"></div>
              <div className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-[#0979ff]/10 blur-md"></div>
            </div>

            {/* Main info card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9]">
              {/* Partner logo section */}
              <div className="text-center mb-8">
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-[#0088f5]/20 rounded-2xl blur-lg scale-110"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60">
                    <img src="/rbk_logo.png" alt="RBK Bank" className="w-full h-auto object-contain max-w-[160px] mx-auto" />
                  </div>
                </div>
                <p className="text-sm text-[#64748b] mt-4 font-medium">
                  Партнер по банковской лицензии
                </p>
              </div>

              {/* Key metrics */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0088f5]/10 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#0088f5]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0f172a]">Лицензирование</div>
                      <div className="text-xs text-[#64748b]">Полная банковская лицензия</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#0088f5]">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0088f5]/10 rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#0088f5]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0f172a]">Модель BaaS</div>
                      <div className="text-xs text-[#64748b]">Banking-as-a-Service</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#0088f5]">2024</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0088f5]/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#0088f5]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0f172a]">Рейтинг – стабильный</div>
                      <div className="text-xs text-[#64748b]">Moody's</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#0088f5]">Ba1</div>
                </div>
              </div>

              {/* Trust indicator */}
              <div className="mt-6 pt-6 border-t border-[#f1f5f9]">
                <div className="flex items-center justify-center gap-2 text-[#64748b] text-sm">
                  <Award className="w-4 h-4 text-[#0088f5]" />
                  <span>Надежность банковского партнера</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#0088f5] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs">✓</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#0979ff] rounded-full shadow-lg"></div>
              <div className="absolute top-1/3 -right-1 w-3 h-3 bg-[#0088f5]/60 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 