import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/homePageData';

interface HomeFAQProps {
  expandedFaqItems: Set<number>;
  toggleFaqItem: (index: number) => void;
}

export const HomeFAQ: React.FC<HomeFAQProps> = ({ expandedFaqItems, toggleFaqItem }) => {
  return (
    <div className="py-24 sm:py-32 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Частые вопросы
          </h2>
          <p className="mt-6 text-lg text-[#64748b]">
            Отвечаем на популярные вопросы предпринимателей
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {faqItems.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              <motion.button
                initial={false}
                className="flex w-full items-start justify-between text-left"
                onClick={() => toggleFaqItem(index)}
              >
                <span className="text-lg font-medium text-[#0f172a] pr-8">{faq.question}</span>
                <div className="flex-shrink-0">
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform duration-200 ${
                      expandedFaqItems.has(index) ? 'rotate-180 text-[#0088f5]' : 'text-[#0088f5]'
                      }`}
                    />
                </div>
              </motion.button>
              <AnimatePresence initial={false}>
                {expandedFaqItems.has(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-[#64748b] leading-relaxed pr-8">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 