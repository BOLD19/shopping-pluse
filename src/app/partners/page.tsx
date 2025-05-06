'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Partners() {
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
              Партнёрская программа
            </h1>
            <p className="mt-6 text-xl text-[#4A4A4A]">
              Зарабатывайте вместе с Pluse.kz, приглашая предпринимателей
            </p>
            <div className="mt-10">
              <a
                href="#benefits"
                className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
              >
                Стать партнёром
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div id="benefits" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="text-3xl mb-4">💸</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Регулярные выплаты
              </h3>
              <p className="text-[#4A4A4A]">
                Получайте процент от клиентов, которых вы приводите
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Прозрачная статистика
              </h3>
              <p className="text-[#4A4A4A]">
                Всё видно в личном кабинете
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Минимум условий
              </h3>
              <p className="text-[#4A4A4A]">
                Не нужно ИП, просто делитесь Pluse.kz
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="py-24 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Хотите особенные условия или предложить проект?
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A]">
              Напишите нам, если у вас есть идея для сотрудничества, интеграции или партнёрской модели
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/77001112233"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Написать в WhatsApp
              </a>
              <a
                href="mailto:partner@pluse.kz"
                className="bg-white text-[#1A1A1A] px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Написать на email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 