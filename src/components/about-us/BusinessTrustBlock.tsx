import React from 'react';
import Image from 'next/image';

export default function BusinessTrustBlock() {
  return (
    <div className="py-12 sm:py-16 bg-[#FDFCFB]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#0f172a] sm:text-3xl mb-3">
            Почему вам можно нам доверять
          </h2>
          <p className="text-base text-[#64748b]">
            Надёжность банка, поддержка инвесторов и государства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <Image
                src="/rbk_logo.png"
                alt="RBK Bank"
                width={80}
                height={30}
                className="h-6 w-auto object-contain opacity-80"
              />
            </div>
            <h3 className="text-sm font-semibold text-[#0f172a] mb-2">Банковская лицензия</h3>
            <p className="text-xs text-[#64748b]">
              Работаем через RBK Bank. Ваши средства защищены
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <Image
                src="/tumar_logo.png"
                alt="Tumar Ventures"
                width={80}
                height={30}
                className="h-6 w-auto object-contain opacity-80"
              />
            </div>
            <h3 className="text-sm font-semibold text-[#0f172a] mb-2">Серьёзные инвесторы</h3>
            <p className="text-xs text-[#64748b]">
              Поддержка фонда Tumar Ventures и Всемирного банка
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <Image
                src="/logo_astanahub.png"
                alt="Astana Hub"
                width={80}
                height={30}
                className="h-6 w-auto object-contain opacity-80"
              />
            </div>
            <h3 className="text-sm font-semibold text-[#0f172a] mb-2">Государственная поддержка</h3>
            <p className="text-xs text-[#64748b]">
              Резидент Astana Hub с доступом к госпрограммам
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 