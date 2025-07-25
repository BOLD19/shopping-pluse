import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Percent, Settings2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const TermsControl: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Вы выбираете{' '}
              <span className="text-blue-600">проценты</span> и сроки
            </h2>
            <p className="text-base text-slate-600 leading-relaxed lg:text-xl mb-8">
              Вы настраиваете сроки и проценты так, чтобы больше зарабатывать и меньше терять на комиссии
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Гибкие сроки рассрочки</h3>
                  <p className="text-slate-600">
                    Настраивайте периоды рассрочки от 3 до 24 месяцев под разные категории товаров
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Percent className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Управление процентами</h3>
                  <p className="text-slate-600">
                    Контролируйте процентные ставки для оптимизации прибыли и минимизации комиссий
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Settings2 className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Индивидуальные настройки</h3>
                  <p className="text-slate-600">
                    Создавайте специальные условия для отдельных товаров, сезонов или клиентов
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 group"
              >
                Посмотреть демо-версию
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] w-full"
          >
            <Image
              src="/screen.png"
              alt="Интерфейс управления рассрочкой"
              fill
              className="object-contain"
              quality={100}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 