import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 'bnpl',
    name: 'Рассрочка QR',
    title: 'Подключите любые банки в единый QR-код',
    description: 'Один QR для всех маркетинговых материалов. Клиенты выбирают банк сами, вы получаете больше продаж. Рассрочка до 24 месяцев.',
    href: '/bnpl',
    cta: 'Подключить единый QR',
    iconPath: '/icons/qr.png'
  },
  {
    id: 'shopping',
    name: 'E-commerce',
    title: 'Интернет-магазин под ключ за 1 день',
    description: 'Встроенные оплата, доставка и рассрочка. Всё уже готово.',
    href: '/shopping',
    cta: 'Создать магазин',
    iconPath: '/icons/pluse_shop.png'
  },
  {
    id: 'insurance',
    name: 'Страхование',
    title: 'Страхование бизнеса и товаров',
    description: 'Защитите свой бизнес и товары с помощью страховых продуктов от надёжных партнёров.',
    href: '/insurance',
    cta: 'Выбрать страховку',
    iconPath: '/icons/umbrella.png'
  },
  {
    id: 'bank',
    name: 'Банкинг',
    title: 'Современный банкинг для бизнеса',
    description: 'Мгновенные платежи, бизнес-карта и контроль финансов в одном месте.',
    href: '/banking',
    cta: 'Открыть счёт',
    iconPath: '/icons/card.png'
  },
  {
    id: 'other',
    name: 'Все сервисы',
    title: 'Дополнительные сервисы для бизнеса',
    description: 'Бизнес-карта, проверка контрагентов, подключение расчётного счёта и другие полезные инструменты.',
    href: '/services',
    cta: 'Посмотреть все сервисы',
    iconPath: '/icons/other.png'
  }
]

export const HomeServices = () => {
  const [activeTab, setActiveTab] = useState("bnpl")
  const activeService = services.find(service => service.id === activeTab)

  return (
    <div className="py-8 sm:py-12 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Service Icons Grid */}
        <div className="grid grid-cols-5 gap-8 mb-20">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`relative flex flex-col items-center group cursor-pointer relative ${
                activeTab === service.id ? 'after:content-[""] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-[#0088f5] after:rounded-full' : ''
              }`}
            >
              <div className="relative w-24 h-24 mb-4 rounded-2xl flex items-center justify-center transition-all duration-300">
                <Image 
                  src={service.iconPath}
                  alt={service.name}
                  fill
                  className={`
                    object-contain
                    ${activeTab === service.id ? 'brightness-110' : 'brightness-100'} 
                    group-hover:brightness-110 transition-all duration-300
                    drop-shadow-[0_8px_16px_rgba(0,136,245,0.3)]
                  `}
                />
              </div>
              <span className={`text-sm font-medium transition-colors duration-200 text-center ${
                activeTab === service.id ? 'text-[#0088f5]' : 'text-[#0f172a] group-hover:text-[#0088f5]'
              }`}>
                {service.name}
                {activeTab === service.id && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block ml-1"
                  >
                    →
                  </motion.span>
                )}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
                {activeService?.title}
              </h3>
              <p className="text-[#64748b] text-lg">
                {activeService?.description}
              </p>
              {activeService?.cta && (
                <Link
                  href={activeService.href}
                  className="inline-flex items-center bg-[#0088f5] hover:bg-[#0979ff] text-white px-6 py-3 rounded-xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.2)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.4)] transition-all duration-300"
                >
                  {activeService.cta}
                </Link>
              )}
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              {activeTab === "bnpl" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-lg font-medium text-[#0088f5]">Единый QR-код</div>
                      <div className="text-sm text-[#64748b]">Все банки в одном</div>
                    </div>
                    <div className="h-12 w-12 bg-[#E0FF4F] rounded-full flex items-center justify-center">
                      <span className="text-[#0f172a] text-xl">🏦</span>
                    </div>
                  </div>
                  
                  <div className="relative bg-[#FDFCFB] p-6 rounded-xl">
                    <div className="flex items-center justify-center">
                      <div className="w-20 h-20 bg-[#0088f5]/10 rounded-lg flex items-center justify-center relative">
                        <div className="w-16 h-16 bg-[#0088f5] rounded-md opacity-20"></div>
                        <div className="absolute inset-2 grid grid-cols-4 gap-0.5">
                          {Array.from({length: 16}).map((_, i) => (
                            <div key={i} className={`bg-[#0088f5] rounded-sm ${Math.random() > 0.3 ? 'opacity-80' : 'opacity-20'}`}></div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs">🏛️</div>
                      <div className="absolute top-2 right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-xs">🏦</div>
                      <div className="absolute bottom-2 left-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-xs">💳</div>
                      <div className="absolute bottom-2 right-2 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-xs">🔷</div>
                    </div>
                    <div className="text-center mt-4">
                      <div className="text-sm font-medium text-[#0f172a]">Все банки Казахстана</div>
                      <div className="text-xs text-[#64748b]">Один QR для всех</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gradient-to-r from-[#0088f5]/10 to-[#0979ff]/10 p-4 rounded-xl">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-[#0f172a]">Продажи выросли</div>
                      <div className="text-xs text-[#64748b]">+47% за месяц</div>
                    </div>
                    <span className="px-3 py-1.5 bg-[#E0FF4F] text-[#0f172a] rounded-lg text-sm font-medium">↗ +47%</span>
                  </div>
                </div>
              )}
              
              {activeTab === "shopping" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0088f5]/10 rounded-xl p-4 aspect-square"></div>
                    <div className="bg-[#0088f5]/10 rounded-xl p-4 aspect-square"></div>
                    <div className="bg-[#0088f5]/10 rounded-xl p-4 aspect-square"></div>
                    <div className="bg-[#0088f5]/10 rounded-xl p-4 aspect-square"></div>
                  </div>
                  <div className="flex justify-between items-center bg-[#FDFCFB] p-4 rounded-xl">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-[#0f172a]">Ваш магазин</div>
                      <div className="text-xs text-[#64748b]">pluse.market/demo</div>
                    </div>
                    <div className="h-10 w-10 bg-[#E0FF4F] rounded-full flex items-center justify-center">
                      <span className="text-[#0f172a] text-base">🛍</span>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "insurance" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="space-y-1">
                      <div className="text-lg font-medium text-[#0088f5]">Страховая защита</div>
                      <div className="text-sm text-[#64748b]">Полное покрытие</div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-10 w-10 bg-[#E0FF4F] rounded-full flex items-center justify-center">
                        <span className="text-[#0f172a] text-base">🛡️</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-[#FDFCFB] p-3 rounded-lg">
                      <span className="text-sm text-[#64748b]">Товарные запасы</span>
                      <span className="text-sm font-medium text-[#0088f5]">Покрыто ✓</span>
                    </div>
                    <div className="flex items-center justify-between bg-[#FDFCFB] p-3 rounded-lg">
                      <span className="text-sm text-[#64748b]">Ответственность бизнеса</span>
                      <span className="text-sm font-medium text-[#0088f5]">Покрыто ✓</span>
                    </div>
                    <div className="flex items-center justify-between bg-[#FDFCFB] p-3 rounded-lg">
                      <span className="text-sm text-[#64748b]">Электронные данные</span>
                      <span className="text-sm font-medium text-[#0088f5]">Покрыто ✓</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#0088f5]/10 to-[#0979ff]/10 p-4 rounded-xl text-center">
                    <div className="text-sm font-medium text-[#0f172a]">Экономия на страховых взносах</div>
                    <div className="text-xs text-[#64748b]">до 30% при комплексном страховании</div>
                  </div>
                </div>
              )}
              
              {activeTab === "bank" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-lg font-medium text-[#0088f5]">Бизнес-счёт</div>
                      <div className="text-sm text-[#64748b]">Активный</div>
                    </div>
                    <div className="h-12 w-12 bg-[#E0FF4F] rounded-full flex items-center justify-center">
                      <span className="text-[#0f172a] text-xl">🏦</span>
                    </div>
                  </div>
                  <div className="bg-[#FDFCFB] p-4 rounded-xl">
                    <div className="text-2xl font-bold text-[#0f172a]">₸ 1 450 000</div>
                    <div className="text-sm text-[#64748b]">Доступно к расходованию</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 