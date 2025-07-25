import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Users, MessageCircle, Shield, CreditCard, TrendingUp, Info } from 'lucide-react';
import Image from 'next/image';

interface Benefit {
  text: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  { 
    text: 'Своя касса без комиссий маркетплейсу',
    description: 'Не платите 10–15% с каждой продажи. У вас своя корзина, касса, рассрочка и кредит — всё уже встроено. Оплата поступает на счёт в тот же день.',
    icon: <CreditCard className="w-8 h-8" />
  },
  { 
    text: 'База клиентов у вас — продавайте снова без затрат на рекламу',
    description: 'Клиенты остаются у вас. Делайте рассылки, запускайте повторы и увеличивайте прибыль. Повторные продажи обходятся в 5–7 раз дешевле.',
    icon: <Users className="w-8 h-8" />
  },
  { 
    text: 'Без блокировок, модераций и страха потерять витрину',
    description: 'Вы сами управляете ассортиментом и правилами. Никаких ограничений, проверок и внезапных банов. Ваш магазин — ваша зона контроля.',
    icon: <Shield className="w-8 h-8" />
  },
  { 
    text: 'Готовый интернет-магазин дешевле, чем на Tilda или Wix',
    description: 'Экономьте до миллиона тенге на запуске. Без программистов, хостинга и дополнительных подписок. Настройка занимает 15 минут.',
    icon: <Store className="w-8 h-8" />
  },
  { 
    text: 'Вы контролируете цену, отзывы и продвижение товара',
    description: 'Только ваш товар, только ваш рейтинг. Никто не демпингует и не сбивает доверие. Вы управляете спросом и репутацией.',
    icon: <TrendingUp className="w-8 h-8" />
  },
  { 
    text: 'Сервис, где всё просто: продаёте, зарабатываете и растёте',
    description: 'Больше не нужно собирать сайт, подключать CRM и считать вручную. Всё уже есть: склад, доставка, рассрочка, клиентская база и аналитика.',
    icon: <Info className="w-8 h-8" />
  },
];

export const Problems: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = (index: number) => {
    setHoveredCard(null);
  };

  const isCardFlipped = (index: number) => {
    return flippedCards.has(index) || hoveredCard === index;
  };

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Товарный бизнес без лишнего. Всё под рукой.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative h-[300px]"
            >
              {/* Последняя карточка - полностью синяя без flip */}
              {index === 5 ? (
                <div className="w-full h-full bg-blue-600 rounded-2xl p-6 lg:p-8 shadow-md">
                  {/* Иконка */}
                  <div className="text-white mb-6">
                    {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  
                  {/* Текст */}
                  <p className="text-lg font-semibold text-white leading-tight text-left mb-4">
                    {benefit.text}
                  </p>
                  
                  {/* Подзаголовок */}
                  <p className="text-sm text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ) : (
                /* Остальные карточки с flip-эффектом */
                <div className="relative h-full perspective-1000" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                  <motion.div
                    className="relative w-full h-full preserve-3d"
                    animate={{ rotateY: isCardFlipped(index) ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Лицевая сторона */}
                    <div className="absolute w-full h-full backface-hidden bg-gray-50 rounded-2xl p-6 lg:p-8">
                      {/* Иконка в левом верхнем углу */}
                      <div className="text-[#1d4ed8] mb-6">
                        {benefit.icon}
                      </div>
                      
                      {/* Текст выровнен по левому краю */}
                      <p className="text-lg font-semibold text-slate-800 leading-tight text-left">
                  {benefit.text}
                </p>
                      
                      {/* Кнопка flip в правом нижнем углу */}
                      <button 
                        onClick={() => toggleCard(index)}
                        className="absolute bottom-4 right-4 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                    </div>

                    {/* Обратная сторона */}
                    <div 
                      className="absolute w-full h-full backface-hidden rounded-2xl p-6 lg:p-8"
                      style={{ 
                        backgroundColor: '#2563eb',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      {/* Описание */}
                      <p className="text-sm text-white leading-relaxed whitespace-pre-line">
                        {benefit.description}
                      </p>
                      
                      {/* Кнопка возврата */}
                      <button 
                        onClick={() => toggleCard(index)}
                        className="absolute bottom-4 right-4 w-7 h-7 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 shadow-sm"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
              </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}; 