'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'

const steps = [
  {
    id: 1,
    title: 'Покупка',
    description: 'Клиент выбрал и оплатил, можно в рассрочку'
  },
  {
    id: 2,
    title: 'Доставка',
    description: 'Адрес и трек подтянулись, заказ пошёл'
  },
  {
    id: 3,
    title: 'Аналитика',
    description: 'Склад обновился, сделка зафиксирована'
  },
  {
    id: 4,
    title: 'Повторная продажа',
    description: 'Клиент в CRM, можно дожимать',
    isCTA: true
  }
]

export function Way() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setCompletedSteps(prev => {
        if (prev.length < steps.length) {
          return [...prev, prev.length + 1]
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-slate-900 mb-8"
          >
            Продавайте. Остальное — автоматизировано.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Все этапы: от оплаты до повторной продажи — без вашего участия.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop: Visual Path with Line */}
          <div className="hidden lg:block">
            {/* Connection Lines - Each segment appears separately */}
            {steps.slice(0, -1).map((_, index) => (
              <motion.div
                key={`line-${index}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + index * 0.5 
                }}
                className="absolute top-1/2 h-px border-t-2 border-dashed border-gray-300"
                style={{ 
                  transformOrigin: 'left', 
                  transform: 'translateY(-50%)',
                  left: `${(index / (steps.length - 1)) * 100}%`,
                  width: `${100 / (steps.length - 1)}%`
                }}
              />
            ))}
            
            {/* Step Numbers on Line */}
            {steps.slice(0, -1).map((step, index) => (
              <motion.div
                key={`step-${step.id}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.5 
                }}
                className="absolute top-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ 
                  left: `${(index / (steps.length - 1)) * 100}%`,
                  transform: 'translateX(-50%) translateY(-50%)'
                }}
              >
                {step.id}
              </motion.div>
            ))}
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 lg:mt-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={index === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={index === 0 ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index === 0 ? 0 : 1 + (index - 1) * 0.5 
                }}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  className={`
                    relative rounded-lg p-6 shadow-sm border transition-all duration-300 h-48 flex flex-col items-center text-center
                    ${step.isCTA 
                      ? 'bg-blue-600 border-blue-500 text-white' 
                      : 'bg-white border-gray-100'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Step Number */}
                  <div className={`
                    absolute -top-8 left-1/2 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold
                    ${step.isCTA ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white'}
                  `}
                  style={{ transform: 'translateX(-50%)' }}
                  >
                    {step.id}
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-lg font-bold mb-3 leading-tight mt-8
                    ${step.isCTA ? 'text-white' : 'text-gray-900'}
                  `}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className={`
                    text-sm leading-relaxed flex-1
                    ${step.isCTA ? 'text-white/90' : 'text-gray-600'}
                  `}>
                    {step.description}
                  </p>


                </motion.div>


              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
} 