'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, TrendingUp, Users, BarChart3, Package } from 'lucide-react'
import Image from 'next/image'

const beginnerFeatures = [
  'Интернет-магазин с оплатой, корзиной и доставкой',
  'До 50 наименований — сами добавите, без помощи',
  'Kaspi QR и эквайринг уже внутри',
  'CRM для заказов и клиентов',
  'Простой интерфейс, есть поддержка'
]

const advancedFeatures = [
  'Неограниченное число товаров',
  'Свой бренд и адаптивный дизайн',
  '+10 служб доставки',
  'Аналитика, CRM, повторные продажи',
  'Автоматизация, ИИ, лояльность — без лишнего шума'
]

export function Who() {
  return (
    <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Для начинающих и опытных — одно решение
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ShoppingPluse подходит под любой масштаб.
            <br />
            Просто запускайтесь — и растите.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Левая карточка - Начинающие */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Изображение */}
            <div className="w-full h-80 rounded-xl mb-8 overflow-hidden">
              <Image
                src="/s11.png"
                alt="Для начинающих"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Заголовок */}
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Для тех, кто только начинает
            </h3>
            <p className="text-slate-600 mb-6">
              Запустим магазин за 15 минут — без головной боли.
            </p>

            {/* Список преимуществ */}
            <div className="space-y-4 h-64">
              {beginnerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#1d4ed8]" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Правая карточка - Продвинутые */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Изображение */}
            <div className="w-full h-80 rounded-xl mb-8 overflow-hidden">
              <Image
                src="/s22.png"
                alt="Для опытных"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Заголовок */}
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Для тех, кто в товарке давно
            </h3>
            <p className="text-slate-600 mb-6">
              Всё, чтобы вести бизнес как систему.
            </p>

            {/* Список преимуществ */}
            <div className="space-y-4 h-64">
              {advancedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#1d4ed8]" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 