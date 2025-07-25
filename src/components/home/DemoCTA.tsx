import React from 'react';
import { motion } from 'framer-motion';

export const DemoCTA: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-3xl p-8 lg:p-16 shadow-lg"
        >
          {/* Заголовок */}
          <h2 className="text-4xl font-bold tracking-tight text-white mb-8 leading-tight text-center">
            <div>Свобода продавать</div>
            <div>без комиссий и посредников</div>
          </h2>

          {/* Подзаголовок */}
          <p className="text-base lg:text-lg text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed text-center">
            Посмотрите демо. Всё работает на вас — не на платформу.
          </p>

          {/* Кнопка */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://wa.me/77773332033?text=Здравствуйте,%20хочу%20посмотреть%20демо%20Shopping.Pluse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Смотреть демо в WhatsApp
            </a>
          </motion.div>

          {/* Микротекст */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mt-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-sm text-white/70">
              Отвечаем за 5 минут — покажем и всё настроим
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 