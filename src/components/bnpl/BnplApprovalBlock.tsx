import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, QrCode, Target, Link2, CheckCircle2, ArrowRight, Smartphone } from 'lucide-react';

export default function BnplApprovalBlock() {
  const qrFeatures = [
    {
      icon: Target,
      title: "Персональные QR для товаров",
      description: "Создавайте уникальные QR-коды для каждого товара с индивидуальными настройками"
    },
    {
      icon: Link2,
      title: "Ссылки для рассрочки",
      description: "Получайте прямые ссылки для онлайн-продаж и социальных сетей"
    },
    {
      icon: Smartphone,
      title: "Быстрое сканирование",
      description: "Клиент сканирует QR и сразу видит условия рассрочки для конкретного товара"
    }
  ];
  
  return (
    <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold leading-tight mb-6 text-[#0f172a] sm:text-4xl"
            >
              Индивидуальные QR-коды{" "}
              <span className="text-[#0088f5] relative inline-block">
                для каждого товара
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-1 left-0 right-0 h-2 bg-[#0979ff] opacity-20 -z-10"
                />
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-lg text-[#64748b] leading-relaxed mb-6">
                Создавайте персональные QR-коды и ссылки для каждого товара. Клиенты сразу видят актуальную цену и условия рассрочки. Получайте подробную статистику по всем подключенным банкам.
              </p>

              <div className="space-y-4">
                {qrFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0088f5] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-lg text-[#0f172a] font-medium mb-1">
                        {feature.title}
                      </p>
                      <p className="text-[#64748b]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://bnpl.pluse.kz/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300"
              >
                <QrCode className="w-5 h-5" />
                Зарегистироваться
              </a>

              <a
                href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20про%20создание%20QR%20для%20товаров"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0088f5] px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-[#0088f5] hover:bg-[#0088f5] hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Узнать подробнее
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9]">
              {/* QR Generator Interface */}
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-[#0f172a] mb-6">Генератор QR-кодов</h3>
                
                {/* Product info */}
                <div className="bg-[#f8fafc] rounded-2xl p-6 mb-6">
                  <div className="text-left">
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">Название товара</label>
                    <div className="bg-white rounded-lg p-3 border border-[#f1f5f9] text-[#0f172a]">
                      iPhone 15 Pro Max 256GB
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-left">
                      <label className="block text-sm font-medium text-[#0f172a] mb-2">Цена</label>
                      <div className="bg-white rounded-lg p-3 border border-[#f1f5f9] text-[#0f172a]">
                        499 000₸
                      </div>
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-[#0f172a] mb-2">Рассрочка</label>
                      <div className="bg-white rounded-lg p-3 border border-[#f1f5f9] text-[#0088f5]">
                        12 месяцев
                      </div>
                    </div>
                  </div>
                </div>

                {/* Generated QR */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-[#0088f5] rounded-2xl flex items-center justify-center relative">
                    <QrCode className="w-12 h-12 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl">
                    <span className="text-sm text-[#0f172a]">QR-код для печати</span>
                    <button className="text-[#0088f5] text-sm font-medium hover:underline">
                      Скачать
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl">
                    <span className="text-sm text-[#0f172a]">Ссылка для соцсетей</span>
                    <button className="text-[#0088f5] text-sm font-medium hover:underline">
                      Копировать
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl">
                    <span className="text-sm text-[#0f172a]">Встроить на сайт</span>
                    <button className="text-[#0088f5] text-sm font-medium hover:underline">
                      Код
                    </button>
                  </div>
                </div>

                {/* Result */}
                <div className="mt-6 pt-6 border-t border-[#f1f5f9]">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-center justify-center gap-2 text-green-700 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>QR-код готов к использованию</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 