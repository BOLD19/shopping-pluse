'use client'

import { motion } from 'framer-motion'
import { Users, MessageCircle, TrendingUp, Check } from 'lucide-react'

const customerBaseFeatures = [
  {
    icon: Users,
    title: 'Контакты клиентов',
    description: 'Телефоны, email, адреса'
  },
  {
    icon: MessageCircle,
    title: 'Прямое общение',
    description: 'WhatsApp, звонки, email'
  },
  {
    icon: TrendingUp,
    title: 'История покупок',
    description: 'Аналитика и предпочтения'
  }
]

const benefits = [
  {
    title: 'Повторные продажи',
    description: 'Клиенты возвращаются именно к вам, а не ищут на площадке'
  },
  {
    title: 'Персональные предложения',
    description: 'Создавайте индивидуальные акции на основе истории покупок'
  },
  {
    title: 'Лояльность к бренду',
    description: 'Покупатели запоминают именно ваш магазин'
  }
]

export function Customers() {
  return (
    <section className="py-20 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - White Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Ваша клиентская база
            </h3>
            
            <div className="space-y-6 mb-8">
              {customerBaseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-center">
                Клиенты навсегда остаются с вами
              </p>
            </div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Клиенты принадлежат вам
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                На маркетплейсах клиенты принадлежат площадке. В собственном магазине вы строите долгосрочные отношения.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 