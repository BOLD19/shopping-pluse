import React from 'react';
import { QrCode, Users, Settings, Monitor, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BnplWhyChooseBlock() {
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
            Полный набор инструментов для <span className="text-[#0088f5]">рассрочки</span>
          </h2>
          <p className="text-lg text-[#64748b]">
            Единый QR — это только начало. Получите доступ ко всем возможностям платформы
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: QrCode,
              title: "Единый QR-код",
              description: "Один код для всех банков. Клиент выбирает удобный вариант из доступных"
            },
            {
              icon: Target,
              title: "Индивидуальные QR",
              description: "Создавайте персональные QR-коды и ссылки для каждого товара или услуги"
            },
            {
              icon: Settings,
              title: "Автоматические банки",
              description: "Kaspi, Halyk, Freedom подключаются автоматически с полной аналитикой"
            },
            {
              icon: Users,
              title: "Ручное добавление",
              description: "Добавляйте любые другие банки вручную по вашему запросу"
            },
            {
              icon: Monitor,
              title: "Удобный кабинет",
              description: "Управляйте всеми операциями и настройками из одного места"
            },
            {
              icon: Zap,
              title: "Генератор QR",
              description: "Быстро создавайте QR-коды с индивидуальными настройками"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#f1f5f9] hover:border-[#e2e8f0] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="w-12 h-12 bg-[#0088f5]/10 rounded-xl flex items-center justify-center mb-4">
                {React.createElement(item.icon, { className: "w-6 h-6 text-[#0088f5]" })}
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{item.title}</h3>
              <p className="text-[#64748b] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Banks Integration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff] rounded-2xl p-8 border border-[#f1f5f9]"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
              Банки и интеграция
            </h3>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Автоматические банки работают с полной аналитикой и отчетностью. 
              Дополнительные банки подключаются по запросу.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0088f5] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[#0f172a] mb-3">Автоматические банки</h4>
              <ul className="space-y-2 text-[#64748b]">
                <li>✓ Kaspi Bank</li>
                <li>✓ Halyk Bank</li>
                <li>✓ Freedom Finance</li>
                <li>✓ Полная аналитика</li>
                <li>✓ Детальная отчетность</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#64748b] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-[#0f172a] mb-3">Ручные банки</h4>
              <ul className="space-y-2 text-[#64748b]">
                <li>+ RBK Bank</li>
                <li>+ Jusan Bank</li>
                <li>+ Home Credit</li>
                <li>+ Любые другие банки</li>
                <li>+ Базовая интеграция</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 