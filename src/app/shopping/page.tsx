'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Store,
  ArrowRight,
  CheckCircle2,
  Users,
  Truck,
  CreditCard,
  Shield,
  ShoppingBag,
  Megaphone,
  Warehouse,
  TrendingUp,
  Play,
  Package,
  Camera,
  Video,
  MessageCircle,
  Clock,
  Pause
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ShoppingPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff] pt-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            animate={{ 
              opacity: 0.05,
              scale: 1,
              rotate: -12,
              y: [0, -20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-[5%] right-[15%] w-[400px] h-[400px] bg-[#0088f5] rounded-[100px] transform -rotate-12"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block mb-4">
                  <span className="text-sm font-medium text-[#0088f5] tracking-wider uppercase">Pluse Shopping</span>
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl mb-6">
                  Ваш магазин{" "}
                  <span className="text-[#0088f5] relative">
                    без комиссий
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="absolute bottom-1 left-0 right-0 h-2 bg-[#0979ff] opacity-20 -z-10"
                    />
                  </span>
                </h1>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg text-[#64748b] leading-relaxed mb-8"
                >
                  Создайте интернет-магазин за день. Клиенты ваши, прибыль ваша.
                  Доставка, эквайринг и рассрочка уже встроены. <span className="text-[#0088f5] font-semibold">Полностью бесплатно.</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="#start"
                    className="inline-flex items-center bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300 justify-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Создать магазин
                  </Link>

                  <a
                    href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20про%20интернет-магазин"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-[#0088f5] px-8 py-4 rounded-2xl text-lg font-medium border-2 border-[#0088f5] hover:bg-[#0088f5] hover:text-white transition-all duration-300 justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Узнать подробнее
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Illustration - Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9]">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-4">Ваш интернет-магазин</h3>
                  
                  {/* Mock store interface */}
                  <div className="bg-[#f8fafc] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Store className="w-5 h-5 text-[#0088f5]" />
                        <span className="text-sm font-medium text-[#0f172a]">mystore.pluse.kz</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Products grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white p-3 rounded-lg border">
                        <div className="w-full h-12 bg-[#e2e8f0] rounded-lg mb-2"></div>
                        <div className="text-xs text-[#0f172a] font-medium">iPhone 15</div>
                        <div className="text-xs text-[#0088f5]">₸520,000</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border">
                        <div className="w-full h-12 bg-[#e2e8f0] rounded-lg mb-2"></div>
                        <div className="text-xs text-[#0f172a] font-medium">MacBook Air</div>
                        <div className="text-xs text-[#0088f5]">₸680,000</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated services */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-3 bg-[#f8fafc] rounded-xl">
                    <Truck className="w-6 h-6 text-[#0088f5] mx-auto mb-2" />
                    <div className="text-xs text-[#64748b]">Доставка</div>
                  </div>
                  <div className="text-center p-3 bg-[#f8fafc] rounded-xl">
                    <CreditCard className="w-6 h-6 text-[#0088f5] mx-auto mb-2" />
                    <div className="text-xs text-[#64748b]">Эквайринг</div>
                  </div>
                  <div className="text-center p-3 bg-[#f8fafc] rounded-xl">
                    <Shield className="w-6 h-6 text-[#0088f5] mx-auto mb-2" />
                    <div className="text-xs text-[#64748b]">Рассрочка</div>
                  </div>
                </div>

                {/* Status */}
                <div className="bg-gradient-to-r from-[#0088f5]/5 to-[#0979ff]/5 rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 text-[#0088f5] text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Готов к работе за 1 день</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems with Marketplaces - New Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 right-16 w-24 h-24 bg-red-100 rounded-full opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl mb-4">
              Проблемы <span className="text-red-500">маркетплейсов</span>
            </h2>
            <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
              Почему торговать на площадках становится всё сложнее
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Problem 1 - Circular design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative mx-auto mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-red-50 to-red-100 rounded-full mx-auto flex items-center justify-center border-4 border-red-200 shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-white transform rotate-180" />
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-1">20%</div>
                    <div className="text-sm text-red-700 font-medium">комиссия</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Растущие комиссии</h3>
              <p className="text-[#64748b]">Площадки забирают до 20% с каждой продажи, постоянно увеличивая тарифы</p>
            </motion.div>

            {/* Problem 2 - Hexagon design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mx-auto mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-red-50 to-red-100 transform rotate-12 rounded-3xl mx-auto border-4 border-red-200 shadow-lg">
                  <div className="transform -rotate-12 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-lg font-bold text-red-700 mb-1">Не ваши</div>
                      <div className="text-sm text-red-600 font-medium">клиенты</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Чужие клиенты</h3>
              <p className="text-[#64748b]">Покупатели принадлежат маркетплейсу, вы не можете с ними работать напрямую</p>
            </motion.div>

            {/* Problem 3 - Diamond design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative mx-auto mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-red-50 to-red-100 rounded-full mx-auto flex items-center justify-center border-4 border-red-200 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-red-500/10 transform skew-x-12"></div>
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-red-700 mb-1">Строгие</div>
                    <div className="text-sm text-red-600 font-medium">правила</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Жёсткие правила</h3>
              <p className="text-[#64748b]">Модерация, блокировки, штрафы. Одна ошибка может стоить бизнеса</p>
            </motion.div>
          </div>

          {/* Transition to solution */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg border border-[#f1f5f9]">
              <span className="text-[#64748b] font-medium">Пора создать собственный магазин</span>
              <ArrowRight className="w-6 h-6 text-[#0088f5] animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl mb-4">
              Решение от <span className="text-[#0088f5]">Pluse</span>
            </h2>
            <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
              Полная экосистема для независимой торговли в интернете
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 1. Интернет-магазин ✅ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#0088f5] to-[#0066cc] rounded-3xl p-8 shadow-xl relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Свой интернет-магазин</h3>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-300" />
                    <span className="text-sm text-green-200 font-medium">Готово к запуску</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">Логистика всех видов (Яндекс Go, СДЭК, курьерские службы)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">Приём платежей уже настроен</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">Универсальный QR для рассрочек</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">Тарифные планы от стартап до enterprise</span>
                </div>
              </div>

              <Link
                href="#start"
                className="inline-flex items-center gap-2 w-full justify-center bg-white text-[#0088f5] px-6 py-3 rounded-xl font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg relative z-10"
              >
                <ShoppingBag className="w-4 h-4" />
                Создать магазин
              </Link>
            </motion.div>

            {/* 2. Управление маркетингом 🔥 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] rounded-xl flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Управление маркетингом</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] rounded flex items-center justify-center">
                      <span className="text-xs text-white">🔥</span>
                    </div>
                    <span className="text-sm text-orange-600 font-medium">В разработке</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#64748b]" />
                  <span className="text-[#64748b]">Автоматизация работы с клиентами (возвраты, акции, программы лояльности)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Play className="w-5 h-5 text-[#64748b]" />
                  <span className="text-[#64748b]">Коннекты с блогерами и TikTok-авторами</span>
                </div>
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-[#64748b]" />
                  <span className="text-[#64748b]">AI-создание контента (рилс, карточки товаров, посты)</span>
                </div>
              </div>

              <button
                disabled
                className="inline-flex items-center gap-2 w-full justify-center bg-[#f1f5f9] text-[#64748b] px-6 py-3 rounded-xl font-medium cursor-not-allowed"
              >
                <Clock className="w-4 h-4" />
                Скоро
              </button>
            </motion.div>

            {/* 3. Управление складом ⏸️ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg relative opacity-75"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#64748b] rounded-xl flex items-center justify-center">
                  <Warehouse className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Управление складом</h3>
                  <div className="flex items-center gap-1">
                    <Pause className="w-4 h-4 text-[#64748b]" />
                    <span className="text-sm text-[#64748b] font-medium">Этап 2</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-[#64748b]" />
                  <span className="text-[#64748b]">Каталогизация и учёт товарных позиций</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#64748b]" />
                  <span className="text-[#64748b]">Распродажа неходовых товаров</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#64748b]" />
                  <span className="text-[#64748b]">Синхронизация с 1С, МойСклад, Wildberries</span>
                </div>
              </div>

              <button
                disabled
                className="inline-flex items-center gap-2 w-full justify-center bg-[#f1f5f9] text-[#64748b] px-6 py-3 rounded-xl font-medium cursor-not-allowed"
              >
                <Pause className="w-4 h-4" />
                Планируется
              </button>
            </motion.div>

            {/* 4. Доп. ценность ⏸️ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg relative opacity-75"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#64748b] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Дополнительная ценность</h3>
                  <div className="flex items-center gap-1">
                    <Pause className="w-4 h-4 text-[#64748b]" />
                    <span className="text-sm text-[#64748b] font-medium">Этап 2</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[#64748b]" />
                  <span className="text-[#64748b]">Программа обмена старых устройств</span>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[#64748b]" />
                  <span className="text-[#64748b]">Умное ценообразование и анализ конкурентов</span>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[#64748b]" />
                  <span className="text-[#64748b]">Рекомендации дополнительных товаров</span>
                </div>
              </div>

              <button
                disabled
                className="inline-flex items-center gap-2 w-full justify-center bg-[#f1f5f9] text-[#64748b] px-6 py-3 rounded-xl font-medium cursor-not-allowed"
              >
                <Pause className="w-4 h-4" />
                Планируется
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison with Marketplaces */}
      <section className="py-20 bg-gradient-to-r from-[#f8fafc] via-white to-[#f0f9ff] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-[#0088f5]/20 via-[#0088f5]/10 to-[#0088f5]/20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#0088f5] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">VS</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl mb-4">
              <span className="text-[#0088f5]">Pluse Shopping</span> vs <span className="text-red-500">Маркетплейсы</span>
            </h2>
            <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
              Сравните возможности и выберите лучшее для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Your Store - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-50 to-[#0088f5]/5 rounded-3xl p-8 border-2 border-[#0088f5] relative overflow-hidden shadow-xl">
                {/* Winner badge */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#0088f5] to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm transform rotate-12 shadow-lg">
                  <div className="text-center">
                    <div>BEST</div>
                    <div className="text-xs">CHOICE</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#0088f5] rounded-xl flex items-center justify-center">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0088f5]">Ваш магазин</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-[#0f172a] font-medium">0% комиссии с продаж</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-[#0f172a] font-medium">Ваша клиентская база</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-[#0f172a] font-medium">Собственный бренд</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-[#0f172a] font-medium">Полная свобода в дизайне</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-[#0f172a] font-medium">Прямое общение с клиентами</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-[#0f172a] font-medium">Контроль над ценами</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Marketplaces - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-3xl p-8 border-2 border-red-200 relative overflow-hidden shadow-lg opacity-90">
                {/* Decline indicator */}
                <div className="absolute top-4 right-4 text-red-500">
                  <TrendingUp className="w-8 h-8 transform rotate-180" />
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-600">Маркетплейсы</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-red-100">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-white"></div>
                    </div>
                    <span className="text-[#64748b]">5-20% комиссии</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-red-100">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-white"></div>
                    </div>
                    <span className="text-[#64748b]">Клиенты принадлежат площадке</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-red-100">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-white"></div>
                    </div>
                    <span className="text-[#64748b]">Единый шаблон для всех</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-red-100">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-white"></div>
                    </div>
                    <span className="text-[#64748b]">Ограничения в оформлении</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-red-100">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-white"></div>
                    </div>
                    <span className="text-[#64748b]">Общение через поддержку</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-red-100">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-white"></div>
                    </div>
                    <span className="text-[#64748b]">Ценовые войны</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Ownership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9]">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-4">Ваша клиентская база</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl">
                    <Users className="w-8 h-8 text-[#0088f5]" />
                    <div>
                      <div className="font-medium text-[#0f172a]">Контакты клиентов</div>
                      <div className="text-sm text-[#64748b]">Телефоны, email, адреса</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl">
                    <MessageCircle className="w-8 h-8 text-[#0088f5]" />
                    <div>
                      <div className="font-medium text-[#0f172a]">Прямое общение</div>
                      <div className="text-sm text-[#64748b]">WhatsApp, звонки, email</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl">
                    <TrendingUp className="w-8 h-8 text-[#0088f5]" />
                    <div>
                      <div className="font-medium text-[#0f172a]">История покупок</div>
                      <div className="text-sm text-[#64748b]">Аналитика и предпочтения</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-[#0088f5]/5 to-[#0979ff]/5 rounded-xl">
                  <div className="text-center text-[#0088f5] font-medium">
                    Клиенты навсегда остаются с вами
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl mb-6">
                Клиенты{" "}
                <span className="text-[#0088f5]">принадлежат</span>
                {" "}вам
              </h2>
              
              <p className="text-lg text-[#64748b] mb-8">
                На маркетплейсах клиенты принадлежат площадке. 
                В собственном магазине вы строите долгосрочные отношения.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0088f5] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">Повторные продажи</h4>
                    <p className="text-[#64748b]">Клиенты возвращаются именно к вам, а не ищут на площадке</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0088f5] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">Персональные предложения</h4>
                    <p className="text-[#64748b]">Создавайте индивидуальные акции на основе истории покупок</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0088f5] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">Лояльность к бренду</h4>
                    <p className="text-[#64748b]">Покупатели запоминают именно ваш магазин</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories - New Section */}
      <section className="py-16 bg-gradient-to-r from-[#0088f5]/5 to-[#0979ff]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl mb-4">
              Результаты наших клиентов
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Реальные цифры от владельцев интернет-магазинов на Pluse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1f5f9]">
                <div className="text-4xl font-bold text-[#0088f5] mb-2">₸2.3М</div>
                <div className="text-lg font-semibold text-[#0f172a] mb-2">экономии в год</div>
                <div className="text-sm text-[#64748b]">вместо комиссий маркетплейсов</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1f5f9]">
                <div className="text-4xl font-bold text-[#0088f5] mb-2">73%</div>
                <div className="text-lg font-semibold text-[#0f172a] mb-2">повторных покупок</div>
                <div className="text-sm text-[#64748b]">благодаря прямой работе с клиентами</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1f5f9]">
                <div className="text-4xl font-bold text-[#0088f5] mb-2">24ч</div>
                <div className="text-lg font-semibold text-[#0f172a] mb-2">время запуска</div>
                <div className="text-sm text-[#64748b]">от заявки до первых продаж</div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-[#f1f5f9]">
              <div className="flex -space-x-2">
                {/* Technodom logo */}
                <div className="w-8 h-8 bg-[#0088f5] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  T
                </div>
                {/* Sulpak logo */}
                <div className="w-8 h-8 bg-[#0066cc] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  S
                </div>
                {/* DNS logo */}
                <div className="w-8 h-8 bg-[#0979ff] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  D
                </div>
                <div className="w-8 h-8 bg-[#004499] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  +
                </div>
              </div>
              <span className="text-[#64748b] text-sm">
                Будьте среди <strong className="text-[#0088f5]">первых</strong> клиентов
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff] relative overflow-hidden" id="start">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#0088f5]/10 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#0979ff]/10 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-full max-w-md"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-[#0088f5]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative z-10">
                  <ContactForm
                    utm="shopping_page_form"
                    submitButtonText="Создать магазин"
                    title="Создайте свой магазин"
                    description="Начните продавать уже завтра"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right - Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-[#0f172a] mb-8">
                  Присоединяйтесь к <span className="text-[#0088f5]">независимым</span> продавцам
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0088f5] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Store className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0f172a] mb-2 text-lg">Без комиссий навсегда</h4>
                      <p className="text-[#64748b]">Вся прибыль остается у вас, никаких скрытых платежей</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0066cc] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0f172a] mb-2 text-lg">Запуск за 24 часа</h4>
                      <p className="text-[#64748b]">Доставка, эквайринг и рассрочка уже настроены</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0979ff] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0f172a] mb-2 text-lg">Клиенты навсегда ваши</h4>
                      <p className="text-[#64748b]">Полный контроль над клиентской базой и данными</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#0088f5]/5 to-[#0979ff]/5 rounded-2xl border border-[#0088f5]/20">
                  <div className="text-center">
                    <div className="text-sm text-[#0088f5] font-medium mb-1">🎉 Полностью бесплатно</div>
                    <div className="text-lg font-bold text-[#0f172a]">Создание и запуск магазина без оплаты</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 