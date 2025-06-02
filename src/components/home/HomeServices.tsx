import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 'bnpl',
    name: 'Рассрочка QR',
    title: 'Единый QR для всех банков',
    description: 'Мы объединили предложения банков в одном QR-коде. Подключитесь, разместите один QR-код на кассе, витрине или сайте — и продавайте в рассрочку от любого банка.',
    href: '/bnpl',
    cta: 'Узнать подробнее',
    iconPath: '/icons/qr.png'
  },
  {
    id: 'shopping',
    name: 'E-commerce',
    title: 'Интернет-магазин под ключ за 1 день',
    description: 'Встроенные оплата, доставка и рассрочка. Всё уже готово. Бесплатно.',
    href: '/shopping',
    cta: 'Создать магазин',
    iconPath: '/icons/pluse_shop.png'
  },
  {
    id: 'insurance',
    name: 'Страхование',
    title: 'Страхование бизнеса и товаров',
    description: 'Страховая компания хочет продать, мы хотим защитить. Наш брокер работает только в ваших интересах.',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1 lg:pt-24">
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
            {activeTab === "bnpl" && (
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-72 sm:h-80 lg:h-96 flex items-center justify-center relative">
                <div className="w-full h-full relative">
                  <Image 
                    src="/qr-po.png"
                    alt="QR PO"
                    fill
                    className="object-contain"
                  />
                  
                  {/* Статус подключения справа */}
                  <div className="absolute top-1 -right-1">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-100 shadow-sm">
                      <div className="w-2 h-2 bg-[#0088f5] rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-[#64748b]">Подключено</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm text-[#0f172a] px-3 py-2 rounded-lg text-sm font-medium shadow-lg border border-gray-100">
                      Все банки → один QR
                    </div>
                  </div>
                </div>
              </div>
            )}
              
            {activeTab === "shopping" && (
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-80 sm:h-96 lg:h-[28rem] overflow-hidden relative">
                {/* Бейдж магазина */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                    E-commerce платформа
                  </div>
                </div>
                
                {/* Уведомление о новом заказе */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-green-50 border border-green-200 text-green-800 px-3 py-2 rounded-lg text-xs font-medium animate-pulse">
                    +1 заказ
                  </div>
                </div>
                
                <div className="relative h-full flex flex-col justify-between">
                  <div className="absolute inset-0 -right-8 -top-8">
                    <Image 
                      src="/shop.png"
                      alt="Shop"
                      fill
                      className="object-contain object-right"
                    />
                  </div>
                  
                  {/* Живая активность заказов */}
                  <div className="mt-auto space-y-3 relative z-10">
                    {/* Последний заказ */}
                    <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-3 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#0f172a]">Заказ #2847</div>
                            <div className="text-xs text-[#64748b]">Айжан К. • iPhone 15 Pro</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-[#0f172a]">890 000₸</div>
                          <div className="text-xs text-[#0088f5]">3 мин назад</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Статус магазина */}
                    <div className="bg-[#FDFCFB] p-3 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-sm font-medium text-[#0f172a]">shop.pluse.kz/demo</div>
                          <div className="text-xs text-[#64748b]">15 заказов сегодня • ₸2.1M оборот</div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-600 font-medium">Онлайн</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
              
            {activeTab === "insurance" && (
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-80 sm:h-96 lg:h-[28rem] overflow-hidden relative">
                {/* Элегантный бейдж */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                    Страхование бизнеса
                  </div>
                </div>
                
                {/* Живое уведомление о последней помощи */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0088f5] to-[#0979ff] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">АБ</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-[#0f172a]">Асема Брокер</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-xs text-[#64748b] leading-relaxed">
                          Только что помогла ТОО "Алтын" сэкономить 84500₸ на страховке
                        </p>
                        <div className="text-xs text-[#0088f5] mt-1">2 мин назад</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-full">
                  <div className="absolute inset-0">
                    <Image 
                      src="/insur.png"
                      alt="Insurance"
                      fill
                      className="object-contain object-center object-bottom"
                    />
                  </div>
                </div>
              </div>
            )}
              
            {activeTab === "bank" && (
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-80 sm:h-96 lg:h-[28rem] relative">
                {/* Статус скоро */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-[#0088f5] text-white px-4 py-2 rounded-lg text-xs font-medium shadow-lg shadow-[#0088f5]/30">
                    Скоро
                  </div>
                </div>
                
                <div className="space-y-6 relative z-10">
                  {/* Заголовок с акцентом */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-[#0f172a]">
                        Мой бизнес
                      </div>
                      <div className="text-sm text-[#64748b] flex items-center gap-2">
                        Всё под контролем 
                        <div className="w-2 h-2 bg-[#0088f5] rounded-full animate-pulse shadow-[0_0_8px_#0088f5]"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Баланс */}
                  <div className="bg-[#f8fafc] p-6 rounded-2xl border border-[#e2e8f0]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-[#64748b] font-medium">На счету</div>
                      <div className="flex items-center gap-2 text-xs text-[#0088f5] font-medium">
                        Умный анализ готов
                        <div className="px-2 py-1 bg-[#0f172a] text-white rounded text-xs shadow-lg">
                          ИИ Финансист
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-[#0f172a]">
                      ₸1,450,000
                    </div>
                  </div>
                  
                  {/* Кредитный лимит с яркими акцентами */}
                  <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-[#64748b] font-medium mb-1">Кредитный лимит</div>
                        <div className="text-2xl font-bold text-[#0f172a]">₸5,000,000</div>
                        <div className="text-sm text-[#64748b]">Одобрено автоматически</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-[#0088f5] drop-shadow-sm">
                          12.5%
                        </div>
                        <div className="text-xs text-[#64748b]">в год</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Последние операции с акцентными элементами */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#0088f5]"></div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-[#0f172a]">
                          Последние операции
                        </span>
                        <div className="w-2 h-2 bg-[#0088f5] rounded-full animate-pulse shadow-[0_0_8px_#0088f5]"></div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#10b981] rounded-full shadow-[0_0_6px_#10b981]"></div>
                            <span className="text-[#64748b]">Поступление от ТОО "Актау"</span>
                          </div>
                          <span className="text-[#0f172a] font-medium">+285,000₸</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#0088f5] rounded-full shadow-[0_0_6px_#0088f5]"></div>
                            <span className="text-[#64748b]">Перевод поставщику</span>
                          </div>
                          <span className="text-[#64748b] font-medium">-95,000₸</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 