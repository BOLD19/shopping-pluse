'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Как открыть счет в Pluse.kz?',
    answer: 'Регистрация занимает 5 минут, все онлайн. После подтверждения личности вы получаете доступ ко всем сервисам.'
  },
  {
    question: 'Сколько стоит подключение?',
    answer: 'Открытие счета и базовые функции — бесплатно. Продвинутые сервисы доступны по подписке.'
  },
  {
    question: 'Кто дает рассрочку (BNPL)?',
    answer: 'Pluse.kz — это агрегатор банков. Мы подключаем вас к банкам-партнерам, которые одобряют заявки.'
  },
  {
    question: 'Могу ли я подключить только интернет-магазин или только бухгалтерию?',
    answer: 'Да, вы можете использовать только нужные вам модули.'
  },
  {
    question: 'Насколько безопасны мои данные?',
    answer: 'Данные хранятся на защищенных серверах, передаются в зашифрованном виде, и мы соблюдаем все требования по безопасности.'
  }
]

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState(new Set())

  const toggleItem = (index: number) => {
    const newExpandedItems = new Set(expandedItems)
    if (newExpandedItems.has(index)) {
      newExpandedItems.delete(index)
    } else {
      newExpandedItems.add(index)
    }
    setExpandedItems(newExpandedItems)
  }

  return (
    <section className="py-16 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Частые вопросы
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#4A4A4A]">
            Отвечаем на популярные вопросы предпринимателей
          </p>
        </div>

        <div className="mx-auto mt-12 md:mt-16 max-w-3xl">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-3 md:mb-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              <motion.button
                initial={false}
                className="flex w-full items-start justify-between text-left"
                onClick={() => toggleItem(index)}
              >
                <span className="text-base md:text-lg font-medium text-[#1A1A1A] pr-6 md:pr-8">{faq.question}</span>
                <div className="flex-shrink-0">
                  <div 
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      expandedItems.has(index) ? 'bg-[#E0FF4F]' : 'bg-[#F0F4FF]'
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 md:h-5 md:w-5 transform transition-transform duration-200 ${
                        expandedItems.has(index) ? 'rotate-180 text-[#1A1A1A]' : 'text-[#8F6ED5]'
                      }`}
                    />
                  </div>
                </div>
              </motion.button>
              <AnimatePresence initial={false}>
                {expandedItems.has(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 md:mt-4 text-sm md:text-base text-[#4A4A4A] leading-relaxed pr-6 md:pr-8">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 