'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Award, Building } from 'lucide-react'

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
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Партнёрство с RBK Bank
              </h2>
              <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
                Pluse.kz — это цифровой филиал, созданный в партнёрстве с RBK Bank.
                Все операции проходят по лицензии RBK, в строгом соответствии с законодательством РК.
                Ваши финансы защищены, как в любом классическом банке — только онлайн.
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
                {/* Пустое поле, изображение убрано */}
              </div>
              <div className="w-full max-w-md flex justify-center">
                {/* Пустое поле, изображение убрано */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Branch vs Traditional Bank */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Чем цифровой филиал<br />
              отличается от обычного банка?
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
              Мы — не банковское отделение. Мы — ваш персональный партнёр в бизнесе.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="4" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 7h8M8 11h8M8 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Всё онлайн</h3>
              <p className="text-[#4A4A4A]">Не нужно ехать в офис, чтобы получить бумагу, задать вопрос или внести изменения.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Персональный менеджер</h3>
              <p className="text-[#4A4A4A]">За каждым предпринимателем закреплён конкретный человек, который в курсе ваших дел.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Без лишних комиссий</h3>
              <p className="text-[#4A4A4A]">У нас нет офисов по всей стране — поэтому вы не оплачиваете чужие аренды и штат.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why You Didn't Know Us — And Why You Can Trust Us */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl mb-6">
              Почему вы нас не знали,<br />
              и почему нам можно доверять
            </h2>
            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
              Мы — молодая команда, и это правда.<br />
              Но за нашей платформой стоят серьёзные партнёры:
            </p>
            <ul className="list-disc pl-6 text-lg text-[#4A4A4A] mb-6">
              <li>RBK Bank — банк с 30-летней историей</li>
              <li>Tumar Ventures — венчурный фонд при поддержке Всемирного банка</li>
              <li>Astana Hub — крупнейший технопарк цифровых решений в Казахстане</li>
            </ul>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Мы не просто "ещё один финтех". Мы строим надёжную систему для казахстанского бизнеса — и делаем это прозрачно, с соблюдением всех норм и правил.
            </p>
          </div>
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
                href="https://wa.me/77001112233"
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