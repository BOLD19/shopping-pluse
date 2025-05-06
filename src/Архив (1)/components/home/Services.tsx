'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/config/home'

export default function Services() {
  const [activeTab, setActiveTab] = useState("bnpl")
  const activeService = services.find(service => service.id === activeTab)

  return (
    <section className="py-16 sm:py-24 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Mobile Service Icons Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {services.filter(service => service.id !== 'other').map((service) => (
              <div key={service.id}>
                <ServiceCard
                  service={service}
                  isActive={activeTab === service.id}
                  onClick={() => setActiveTab(service.id)}
                />
              </div>
            ))}
          </div>
          <div className="hidden md:flex justify-center mb-8">
            {services.filter(service => service.id === 'other').map((service) => (
              <div key={service.id} className="w-1/2">
                <ServiceCard
                  service={service}
                  isActive={activeTab === service.id}
                  onClick={() => setActiveTab(service.id)}
                />
              </div>
            ))}
          </div>
          <div className="md:hidden flex justify-center mb-8">
            <Link
              href="/services"
              className="text-[#8F6ED5] text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Все сервисы →
            </Link>
          </div>
          <div className="space-y-4">
            <div className="hidden md:block">
              <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                {activeService?.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#4A4A4A]">
                {activeService?.description}
              </p>
            </div>

            {activeTab !== "other" && activeTab !== "accounting" && (
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href={activeService?.href || '#'}
                  className="flex-1 bg-[#8F6ED5] text-white py-3 rounded-xl text-sm font-medium text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                >
                  {activeService?.cta}
                </Link>
                <Link 
                  href={
                    activeTab === "bnpl" 
                      ? "/bnpl"
                      : activeTab === "shopping"
                      ? "/shopping"
                      : activeTab === "bank"
                      ? "/account"
                      : "#"
                  }
                  className="text-[#8F6ED5] text-sm font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                  Подробнее →
                </Link>
              </div>
            )}
            {(activeTab === "other" || activeTab === "accounting") && (
              <Link
                href={activeService?.href || '#'}
                className={`
                  hidden md:block w-full text-center
                  ${activeTab === "accounting" 
                    ? "bg-[#9CA3AF] cursor-not-allowed" 
                    : "bg-[#8F6ED5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  } text-white py-3 rounded-xl text-sm font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300`}
                onClick={(e) => activeTab === "accounting" && e.preventDefault()}
              >
                {activeService?.cta}
              </Link>
            )}
          </div>
        </div>

        {/* Desktop Service Icons Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-8 mb-20">
            {services.map((service) => (
              <div key={service.id} className="w-auto">
                <ServiceCard
                  service={service}
                  isActive={activeTab === service.id}
                  onClick={() => setActiveTab(service.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Content with Preview */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-16"
            >
              <div className="grid grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">
                    {activeService?.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-[#4A4A4A]">
                    {activeService?.description}
                  </p>
                  <div className="mt-8">
                    {activeTab !== "other" && activeTab !== "accounting" && (
                      <div className="flex items-center gap-6">
                        <Link
                          href={activeService?.href || '#'}
                          className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                        >
                          {activeService?.cta}
                        </Link>
                        <Link 
                          href={
                            activeTab === "bnpl" 
                              ? "/bnpl"
                              : activeTab === "shopping"
                              ? "/shopping"
                              : activeTab === "bank"
                              ? "/account"
                              : "#"
                          }
                          className="inline-flex items-center text-[#8F6ED5] font-medium hover:opacity-80 transition-opacity"
                        >
                          Узнать подробнее →
                        </Link>
                      </div>
                    )}
                    {(activeTab === "other" || activeTab === "accounting") && (
                      <Link
                        href={activeService?.href || '#'}
                        className={`${
                          activeTab === "accounting" 
                            ? "bg-[#9CA3AF] cursor-not-allowed" 
                            : "bg-[#8F6ED5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        } text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300`}
                        onClick={(e) => activeTab === "accounting" && e.preventDefault()}
                      >
                        {activeService?.cta}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Service Preview */}
                <div className="order-1 lg:order-2">
                  <ServicePreview activeTab={activeTab} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// Компонент для отображения превью сервиса
function ServicePreview({ activeTab }: { activeTab: string }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      {activeTab === "bnpl" && <BNPLPreview />}
      {activeTab === "shopping" && <ShoppingPreview />}
      {activeTab === "accounting" && <AccountingPreview />}
      {activeTab === "bank" && <BankingPreview />}
      {activeTab === "other" && <OtherServicesPreview />}
    </div>
  )
}

// Компоненты превью для каждого сервиса
function BNPLPreview() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <div className="space-y-0.5 md:space-y-1">
          <div className="text-base md:text-lg font-medium text-[#8F6ED5]">Рассрочка 0%</div>
          <div className="text-xs md:text-sm text-[#4A4A4A]">Быстрое подключение</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="space-y-3 md:space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm text-[#4A4A4A]">Сумма</span>
            <span className="text-sm md:text-lg font-medium text-[#1A1A1A]">1 200 000 ₸</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm text-[#4A4A4A]">Срок</span>
            <span className="text-sm md:text-lg font-medium text-[#1A1A1A]">12 месяцев</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm text-[#4A4A4A]">Ежемесячный платёж</span>
            <span className="text-sm md:text-lg font-medium text-[#8F6ED5]">100 000 ₸</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <div className="bg-[#F9FAFF] rounded-xl p-3 md:p-4 text-center">
          <div className="text-sm md:text-base font-medium text-[#1A1A1A]">Комиссия</div>
          <div className="text-xs text-[#4A4A4A] mt-0.5 md:mt-1">от 3%</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-3 md:p-4 text-center">
          <div className="text-sm md:text-base font-medium text-[#1A1A1A]">Быстро</div>
          <div className="text-xs text-[#4A4A4A] mt-0.5 md:mt-1">2 минуты</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-3 md:p-4 text-center">
          <div className="text-sm md:text-base font-medium text-[#1A1A1A]">Гибко</div>
          <div className="text-xs text-[#4A4A4A] mt-0.5 md:mt-1">до 3 млн ₸</div>
        </div>
      </div>
    </div>
  )
}

function ShoppingPreview() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <div className="space-y-0.5 md:space-y-1">
          <div className="text-base md:text-lg font-medium text-[#8F6ED5]">Pluse.Shopping</div>
          <div className="text-xs md:text-sm text-[#4A4A4A]">Готовый магазин за 1 день</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <div className="bg-[#F9FAFF] rounded-xl p-3 md:p-4">
          <div className="w-full h-16 md:h-24 bg-[#EDFFLF] rounded-lg mb-2 md:mb-3 flex items-center justify-center">
            <Image 
              src="/iphone.svg"
              alt="iPhone"
              width={48}
              height={48}
              className="w-auto h-16 md:h-24 object-contain"
            />
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-xs md:text-sm font-medium text-[#1A1A1A]">iPhone 15</div>
            <div className="text-sm md:text-lg font-medium text-[#8F6ED5]">499 990 ₸</div>
            <div className="text-[10px] md:text-xs text-[#4A4A4A]">Доступна рассрочка</div>
          </div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-3 md:p-4">
          <div className="w-full h-16 md:h-24 bg-[#EDFFLF] rounded-lg mb-2 md:mb-3 flex items-center justify-center">
            <Image 
              src="/laptop.svg"
              alt="MacBook"
              width={64}
              height={64}
              className="w-auto h-16 md:h-24 object-contain"
            />
          </div>
          <div className="space-y-1 md:space-y-2">
            <div className="text-xs md:text-sm font-medium text-[#1A1A1A]">MacBook Air</div>
            <div className="text-sm md:text-lg font-medium text-[#8F6ED5]">699 990 ₸</div>
            <div className="text-[10px] md:text-xs text-[#4A4A4A]">Доступна рассрочка</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <div className="bg-[#F9FAFF] rounded-xl p-3 md:p-4 text-center">
          <div className="text-sm md:text-base font-medium text-[#1A1A1A]">Бесплатно</div>
          <div className="text-xs text-[#4A4A4A] mt-0.5 md:mt-1">1 день</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-3 md:p-4 text-center">
          <div className="text-sm md:text-base font-medium text-[#1A1A1A]">Доставка</div>
          <div className="text-xs text-[#4A4A4A] mt-0.5 md:mt-1">Логистика</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-3 md:p-4 text-center">
          <div className="text-sm md:text-base font-medium text-[#1A1A1A]">Оплата</div>
          <div className="text-xs text-[#4A4A4A] mt-0.5 md:mt-1">Эквайринг</div>
        </div>
      </div>
    </div>
  )
}

function AccountingPreview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <div className="text-lg font-medium text-[#8F6ED5]">Бухгалтерия</div>
          <div className="text-sm text-[#4A4A4A]">Всё для отчётности — в одном месте</div>
        </div>
        <div className="h-14 w-14 bg-[#40E0D0] rounded-xl flex items-center justify-center">
          <div className="w-8 h-10 bg-white rounded-lg p-1">
            <div className="grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#40E0D0] rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-[#F0F0F0]">
            <span className="text-sm text-[#4A4A4A]">Финансовый отчёт</span>
            <span className="text-sm font-medium text-[#1A1A1A]">2025 год</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#4A4A4A]">Доходы</span>
            <span className="text-lg font-medium text-[#1A1A1A]">1 250 000 ₸</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#4A4A4A]">Расходы</span>
            <span className="text-lg font-medium text-[#1A1A1A]">850 000 ₸</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#4A4A4A]">Прибыль</span>
            <span className="text-lg font-medium text-[#8F6ED5]">400 000 ₸</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
          <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">📄</div>
          </div>
          <div className="text-sm font-medium text-[#1A1A1A]">Автоматически</div>
          <div className="text-xs text-[#4A4A4A] mt-1">910-я форма</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
          <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">🔗</div>
          </div>
          <div className="text-sm font-medium text-[#1A1A1A]">Интеграция</div>
          <div className="text-xs text-[#4A4A4A] mt-1">С налоговой</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
          <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">💸</div>
          </div>
          <div className="text-sm font-medium text-[#1A1A1A]">Контроль</div>
          <div className="text-xs text-[#4A4A4A] mt-1">Все расходы</div>
        </div>
      </div>
    </div>
  )
}

function BankingPreview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <div className="text-lg font-medium text-[#8F6ED5]">Банкинг</div>
          <div className="text-sm text-[#4A4A4A]">Счёт и операции онлайн</div>
        </div>
        <div className="h-14 w-14 bg-gradient-to-br from-black to-[#2A2A2A] rounded-xl flex items-center justify-center transform rotate-[-5deg] shadow-xl">
          <div className="flex flex-col items-center gap-1.5 transform rotate-[5deg]">
            <div className="w-10 h-6 bg-[#FFD700] rounded-lg"></div>
            <div className="w-8 h-5 bg-white rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-[#F0F0F0]">
            <span className="text-sm text-[#4A4A4A]">Номер счёта</span>
            <span className="text-sm font-medium text-[#1A1A1A]">KZ123456789012345</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#4A4A4A]">Баланс</span>
            <span className="text-lg font-medium text-[#1A1A1A]">2 560 000 ₸</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#4A4A4A]">Последняя операция</span>
            <div className="text-right">
              <div className="text-lg font-medium text-[#8F6ED5]">+180 000 ₸</div>
              <div className="text-xs text-[#4A4A4A]">Pluse.Shopping</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
          <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">💸</div>
          </div>
          <div className="text-sm font-medium text-[#1A1A1A]">Без визита</div>
          <div className="text-xs text-[#4A4A4A] mt-1">Всё онлайн</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
          <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">🔐</div>
          </div>
          <div className="text-sm font-medium text-[#1A1A1A]">Безопасно</div>
          <div className="text-xs text-[#4A4A4A] mt-1">Bank RBK</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
          <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">📱</div>
          </div>
          <div className="text-sm font-medium text-[#1A1A1A]">Мобильно</div>
          <div className="text-xs text-[#4A4A4A] mt-1">Приложение</div>
        </div>
      </div>
    </div>
  )
}

function OtherServicesPreview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <div className="text-lg font-medium text-[#8F6ED5]">Все сервисы</div>
          <div className="text-sm text-[#4A4A4A]">Всё, что нужно для роста бизнеса</div>
        </div>
        <div className="h-14 w-14 bg-gradient-to-br from-[#8F6ED5] to-[#6C4CB3] rounded-xl flex items-center justify-center transform rotate-[-5deg] shadow-xl">
          <div className="grid grid-cols-2 gap-1.5 transform rotate-[5deg]">
            <div className="w-3 h-3 bg-white rounded"></div>
            <div className="w-3 h-3 bg-[#E0FF4F] rounded"></div>
            <div className="w-3 h-3 bg-[#E0FF4F] rounded"></div>
            <div className="w-3 h-3 bg-white rounded"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#F9FAFF] rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div>
              <div className="text-sm font-medium text-[#1A1A1A]">Регистрация ТОО</div>
              <div className="text-xs text-[#4A4A4A]">Бесплатно</div>
            </div>
          </div>
          <div className="text-xs text-[#4A4A4A] mt-1">Поможем открыть компанию</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div>
              <div className="text-sm font-medium text-[#1A1A1A]">Бизнес-карта</div>
              <div className="text-xs text-[#4A4A4A]">Visa Business</div>
            </div>
          </div>
          <div className="text-xs text-[#4A4A4A] mt-1">Доступный лимит</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div>
              <div className="text-sm font-medium text-[#1A1A1A]">Проверка контрагентов</div>
              <div className="text-xs text-[#4A4A4A]">Безопасно</div>
            </div>
          </div>
          <div className="text-xs text-[#4A4A4A] mt-1">Все партнёры проверены</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div>
              <div className="text-sm font-medium text-[#1A1A1A]">Страхование</div>
              <div className="text-xs text-[#4A4A4A]">Для бизнеса</div>
            </div>
          </div>
          <div className="text-xs text-[#4A4A4A] mt-1">Онлайн-оформление</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
          <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">⚡️</div>
          </div>
          <div className="text-sm font-medium text-[#1A1A1A]">Быстро</div>
          <div className="text-xs text-[#4A4A4A] mt-1">За 5 минут</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
          <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">🔄</div>
          </div>
          <div className="text-sm font-medium text-[#1A1A1A]">Всё вместе</div>
          <div className="text-xs text-[#4A4A4A] mt-1">Один кабинет</div>
        </div>
        <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
          <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">🛡️</div>
          </div>
          <div className="text-sm font-medium text-[#1A1A1A]">Надёжно</div>
          <div className="text-xs text-[#4A4A4A] mt-1">Проверено</div>
        </div>
      </div>
    </div>
  )
} 