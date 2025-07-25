import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus, Store, Building2 } from 'lucide-react';

interface ComparisonItem {
  text: string;
  icon: React.ReactNode;
}

const yourStoreItems: ComparisonItem[] = [
  { text: '0% комиссии с продаж', icon: <Check className="w-4 h-4" /> },
  { text: 'Ваша клиентская база', icon: <Check className="w-4 h-4" /> },
  { text: 'Собственный бренд', icon: <Check className="w-4 h-4" /> },
  { text: 'Полная свобода в дизайне', icon: <Check className="w-4 h-4" /> },
  { text: 'Прямое общение с клиентами', icon: <Check className="w-4 h-4" /> },
  { text: 'Контроль над ценами', icon: <Check className="w-4 h-4" /> },
];

const marketplaceItems: ComparisonItem[] = [
  { text: '12-15% комиссии', icon: <Minus className="w-4 h-4" /> },
  { text: 'Клиенты принадлежат площадке', icon: <Minus className="w-4 h-4" /> },
  { text: 'Единый шаблон для всех', icon: <Minus className="w-4 h-4" /> },
  { text: 'Ограничения в оформлении', icon: <Minus className="w-4 h-4" /> },
  { text: 'Общение через поддержку', icon: <Minus className="w-4 h-4" /> },
  { text: 'Ценовые войны', icon: <Minus className="w-4 h-4" /> },
];

export const Comparison: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            ShoppingPluse vs Маркетплейсы
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Сравните возможности и выберите лучшее для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Ваш магазин */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Ваш магазин</h3>
            </div>
            
            <div className="space-y-4">
              {yourStoreItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <motion.div 
                      className="text-green-600"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Маркетплейсы */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Маркетплейсы</h3>
            </div>
            
            <div className="space-y-4">
              {marketplaceItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-red-600">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 