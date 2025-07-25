import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const cards: FlipCard[] = [
  {
    id: 1,
    title: "Собственный актив",
    description: "Готовый сайт с встроенной корзиной, рассрочкой, доставкой. Можно самостоятельно вносить изменения о товарах, без затрат на программиста.",
    icon: "🏪"
  },
  {
    id: 2,
    title: "Контроль над товаром",
    description: "Вы получаете прямую ссылку на свой товар — больше никто не может подключиться к вашей карточке, демпинговать цену или портить рейтинг.",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Больше прибыли",
    description: "Вы не платите комиссию маркетплейсу — все деньги идут напрямую вам, без 12% потерь на каждой транзакции.",
    icon: "💰"
  },
  {
    id: 4,
    title: "Продажи в рассрочку",
    description: "Теперь вы решаете, когда продавать по акции 0-0-24, хоть весь год.",
    icon: "📅"
  },
  {
    id: 5,
    title: "Теплая коммуникация",
    description: "Создавайте акции и предложения для своих клиентов. Продавайте повторно без расходов на рекламу.",
    icon: "💬"
  },
  {
    id: 6,
    title: "Полная свобода",
    description: "Никаких ограничений от площадок. Вы сами контролируете цены, акции и дизайн своего магазина.",
    icon: "✨"
  }
];

export const FlipCards: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardFlip = (cardId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Что вы получаете?
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 cursor-pointer"
              onClick={() => handleCardFlip(card.id)}
            >
              {/* Card Container */}
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d">
                {/* Front Side */}
                <div 
                  className={`absolute w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-500 ${
                    flippedCards.has(card.id) 
                      ? 'opacity-0 rotate-y-180' 
                      : 'opacity-100 rotate-y-0'
                  } bg-white shadow-lg border border-gray-100`}
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 text-center">
                    {card.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div 
                  className={`absolute w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-500 ${
                    flippedCards.has(card.id) 
                      ? 'opacity-100 rotate-y-0' 
                      : 'opacity-0 -rotate-y-180'
                  } bg-blue-600 text-white shadow-lg`}
                >
                  <p className="text-sm leading-relaxed text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 