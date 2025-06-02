'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight,
  CheckCircle2,
  Users,
  Heart,
  Camera,
  ShoppingBag,
  Star,
  TrendingUp,
  MessageCircle,
  Clock,
  Palette,
  Target,
  Globe,
  BarChart
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function BeautyPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section - Redesigned for Beauty Sellers */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-100 pt-32 relative overflow-hidden">
        {/* Simple background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[30%] left-[5%] w-48 h-48 bg-rose-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4">
                  <span className="text-sm font-medium text-pink-600 tracking-wider uppercase bg-pink-100 px-3 py-1 rounded-full">
                    Для продавцов косметики
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                  Создайте свой{" "}
                  <span className="text-pink-600 relative">
                    интернет-магазин
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-pink-400 rounded-full"
                    />
                  </span>
                  {" "}косметики
                </h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                >
                  Полная платформа для продажи beauty-продуктов. Красивые витрины, 
                  встроенные платежи, доставка и все инструменты для роста продаж.
                </motion.p>

                {/* Key benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-3 mb-8"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    <span className="text-gray-700">Готовые шаблоны для косметических брендов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    <span className="text-gray-700">Интеграция с поставщиками косметики</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    <span className="text-gray-700">Инструменты для работы с блогерами</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="#start"
                    className="inline-flex items-center bg-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-lg hover:bg-pink-700 hover:scale-105 transition-all duration-300 justify-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Создать магазин
                  </Link>

                  <a
                    href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20создать%20интернет-магазин%20косметики"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pink-600 px-6 py-4 rounded-2xl text-lg font-medium border-2 border-pink-200 hover:bg-pink-50 transition-all duration-300 justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Обсудить проект
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Image - Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/cosm.png"
                  alt="Интернет-магазин косметики"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                
                {/* Floating elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-pink-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Star className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">4.9★</div>
                      <div className="text-xs text-gray-600">Рейтинг магазина</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-pink-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">+340%</div>
                      <div className="text-xs text-gray-600">Рост продаж</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Sell Beauty Online - SIMPLIFIED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему продавать косметику <span className="text-pink-600">онлайн</span> выгодно
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beauty-индустрия активно переходит в digital. Используйте этот тренд для роста продаж
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Growing Market */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-pink-50 rounded-2xl p-6 text-center border border-pink-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Растущий рынок</h3>
              <p className="text-pink-600 font-bold text-2xl mb-1">+23%</p>
              <p className="text-gray-600 text-sm">ежегодный рост онлайн-продаж косметики</p>
            </motion.div>

            {/* Higher Margins */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-pink-50 rounded-2xl p-6 text-center border border-pink-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Выше маржа</h3>
              <p className="text-pink-600 font-bold text-2xl mb-1">40-60%</p>
              <p className="text-gray-600 text-sm">средняя маржинальность в beauty</p>
            </motion.div>

            {/* Loyal Customers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-pink-50 rounded-2xl p-6 text-center border border-pink-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Лояльные клиенты</h3>
              <p className="text-pink-600 font-bold text-2xl mb-1">78%</p>
              <p className="text-gray-600 text-sm">покупают повторно у проверенных брендов</p>
            </motion.div>

            {/* Year-round Sales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-pink-50 rounded-2xl p-6 text-center border border-pink-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Продажи 24/7</h3>
              <p className="text-pink-600 font-bold text-2xl mb-1">365</p>
              <p className="text-gray-600 text-sm">дней в году без выходных</p>
            </motion.div>
          </div>

          {/* Key insight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl p-8 text-white text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Главное преимущество</h3>
              <p className="text-lg opacity-95">
                В отличие от обычной торговли, онлайн-магазин косметики работает на вас 24/7, 
                привлекает клиентов из всего города и позволяет масштабироваться без ограничений.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer for Beauty Sellers - SIMPLIFIED */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Что получают <span className="text-pink-600">продавцы косметики</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Все инструменты для успешных продаж beauty-продуктов в одной платформе
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ready Store Templates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Готовые шаблоны</h3>
                  <div className="text-sm text-pink-600 font-medium">Специально для косметики</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Красивые витрины для beauty-продуктов</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Каталоги по категориям (уход, макияж, парфюм)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Подборка по типу кожи и возрасту</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Раздел новинок и хитов продаж</span>
                </div>
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Интеграции</h3>
                  <div className="text-sm text-pink-600 font-medium">С поставщиками и сервисами</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Автозагрузка товаров от поставщиков</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Синхронизация остатков и цен</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Kaspi, Halyk Bank, Jusan для оплат</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Доставка по всему Казахстану</span>
                </div>
              </div>
            </motion.div>

            {/* Marketing Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Маркетинг-инструменты</h3>
                  <div className="text-sm text-pink-600 font-medium">Для продвижения</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Промокоды для блогеров и инфлюенсеров</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Email-рассылки с beauty-советами</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Программы лояльности и накопительные скидки</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Реферальная система</span>
                </div>
              </div>
            </motion.div>

            {/* Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Аналитика продаж</h3>
                  <div className="text-sm text-pink-600 font-medium">Детальная статистика</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Отчеты по продажам и прибыли</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Топ-товары и неходовые позиции</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Поведение покупателей</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Прогноз спроса на сезонные товары</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories - SIMPLIFIED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Результаты наших <span className="text-pink-600">клиентов</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реальные показатели продавцов косметики на нашей платформе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center bg-pink-50 rounded-2xl p-8 border border-pink-100"
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">₸2.8М</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">средний оборот в месяц</div>
              <div className="text-sm text-gray-600">у продавцов премиум косметики</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-pink-50 rounded-2xl p-8 border border-pink-100"
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">340%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">рост продаж за год</div>
              <div className="text-sm text-gray-600">после перехода в онлайн</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-pink-50 rounded-2xl p-8 border border-pink-100"
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">24ч</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">время запуска</div>
              <div className="text-sm text-gray-600">от идеи до первых продаж</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - SIMPLIFIED */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600 relative overflow-hidden" id="start">
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
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <ContactForm
                  utm="beauty_sellers_form"
                  submitButtonText="Создать магазин косметики"
                  title="Начните продавать"
                  description="Запустите свой beauty-бизнес уже сегодня"
                />
              </div>
            </motion.div>

            {/* Right - Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white"
            >
              <h3 className="text-3xl font-bold mb-8">
                Присоединяйтесь к успешным продавцам косметики
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-lg">Готовый магазин за день</h4>
                    <p className="text-white/90">Все настроено: платежи, доставка, дизайн</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-lg">Поддержка экспертов</h4>
                    <p className="text-white/90">Помогаем настроить и масштабировать бизнес</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-lg">Проверенная модель</h4>
                    <p className="text-white/90">Более 150 успешных beauty-магазинов</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-center">
                  <div className="text-sm text-white/80 mb-1">🎉 Специальное предложение</div>
                  <div className="text-lg font-bold text-white">Создание магазина бесплатно</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 