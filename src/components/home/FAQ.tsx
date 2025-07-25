'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Что включено в шаблон?",
    answer: "Наш шаблон включает все основные компоненты для современной лендинг страницы: секцию Hero, сетку возможностей, секцию О нас, призыв к действию, FAQ, контактную форму и многое другое. Всё полностью адаптивное и настраиваемое."
  },
  {
    question: "Подходит ли для мобильных устройств?",
    answer: "Да! Шаблон полностью адаптивный и оптимизирован для всех устройств, включая компьютеры, планшеты и мобильные телефоны. Используется современный CSS Grid и Flexbox для идеальной вёрстки на всех размерах экрана."
  },
  {
    question: "Можно ли изменить дизайн?",
    answer: "Конечно! Шаблон создан с использованием Tailwind CSS, что делает настройку цветов, шрифтов, отступов и макетов очень простой. Все компоненты модульные и легко изменяются или расширяются."
  },
  {
    question: "Предоставляете ли поддержку?",
    answer: "Да, мы предоставляем подробную документацию и поддержку. Вы можете обратиться к нам по электронной почте или через наш портал поддержки, если у вас есть вопросы или нужна помощь с настройкой."
  },
  {
    question: "Какие технологии используются?",
    answer: "Шаблон создан с использованием Next.js 14, React 18, TypeScript, Tailwind CSS и Framer Motion для анимаций. Он следует современным лучшим практикам и оптимизирован для производительности."
  },
  {
    question: "Оптимизирован ли для SEO?",
    answer: "Да! Шаблон включает правильную HTML структуру, мета-теги, семантическую разметку и оптимизирован для поисковых систем. Также включены schema разметка и Open Graph теги для лучшего репоста в социальных сетях."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Часто Задаваемые Вопросы
            </h2>
          </div>
          <p className="text-base text-slate-600 leading-relaxed lg:text-xl max-w-2xl mx-auto">
            Есть вопросы? У нас есть ответы. Если вы не можете найти то, что ищете, 
            свяжитесь с нашей командой поддержки.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-200 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-100/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-slate-600" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="border-t border-slate-200 pt-4">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Остались вопросы?
          </h3>
          <p className="text-slate-600 mb-6">
            Наша команда готова помочь вам получить максимум от нашего шаблона.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Связаться с Поддержкой
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 