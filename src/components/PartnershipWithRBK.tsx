import React from 'react';

export default function PartnershipWithRBK() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Партнёрство с RBK Bank
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
              Pluse.kz — это ваш онлайн-филиал, без очередей и бумаг. Работаем по лицензии RBK Bank, всё официально и по закону. Деньги под защитой, как в любом банке — только проще и быстрее.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-[#1A1A1A]">
              Что это значит для вас?
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8F6ED5] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#4A4A4A]">Открытие счёта, управление средствами, подключение сервисов — всё в одном месте.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8F6ED5] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#4A4A4A]">Никаких бумажек. Никаких визитов в отделение.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8F6ED5] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#4A4A4A]">Всё быстро, прозрачно и через мессенджеры или личный кабинет.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center gap-8">
            <div className="relative w-full max-w-md flex justify-center">
              <img src="/RBK.png" alt="RBK Bank" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 