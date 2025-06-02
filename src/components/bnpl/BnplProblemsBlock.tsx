import React from 'react';
import { QrCode, Target, BarChart3, Settings, Building2, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    icon: QrCode,
    title: "Универсальный и персональный QR",
    description: "Создавайте общий QR для всех товаров или индивидуальные для каждого продукта."
  },
  {
    icon: Target,
    title: "Точечная настройка условий",
    description: "Устанавливайте разные сроки и проценты для каждого товара или категории."
  },
  {
    icon: BarChart3,
    title: "Детальная аналитика",
    description: "Полная статистика по автоматическим банкам с разбивкой по товарам и периодам."
  },
  {
    icon: Building2,
    title: "Банки под ваши потребности",
    description: "Автоматические банки с полной интеграцией + любые дополнительные по запросу."
  }
];

export default function BnplProblemsBlock() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-4">
            Полный набор инструментов <span className="text-[#0088f5]">для рассрочки</span>
          </h2>
          <p className="text-lg text-[#64748b]">
            От простого QR-кода до персональных решений для каждого товара
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#f1f5f9] hover:border-[#e2e8f0] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0088f5]/10 flex items-center justify-center flex-shrink-0">
                  {React.createElement(capability.icon, { className: "w-6 h-6 text-[#0088f5]" })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-[#64748b]">
                    {capability.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,136,245,0.2)] text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Начните с простого, масштабируйте по потребностям
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">1</span>
                  </div>
                  <span>Подключите единый QR для всех товаров</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">2</span>
                  </div>
                  <span>Создавайте персональные QR для популярных товаров</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">3</span>
                  </div>
                  <span>Добавляйте банки под ваши требования</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">4</span>
                  </div>
                  <span>Анализируйте и оптимизируйте продажи</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-6 mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-[#0088f5]" />
                </div>
                <div className="text-lg font-semibold mb-2">Гибкое решение</div>
                <div className="text-white/80 text-sm">Адаптируется под любой бизнес</div>
              </div>
              
              <a
                href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20про%20возможности%20платформы%20рассрочки"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0088f5] px-6 py-3 rounded-xl text-base font-semibold hover:scale-105 transition-all duration-300"
              >
                Обсудить возможности
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 