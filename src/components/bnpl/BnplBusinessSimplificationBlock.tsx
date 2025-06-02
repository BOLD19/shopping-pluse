import React from 'react';
import Image from 'next/image';
import { Monitor, QrCode, BarChart3, Settings, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BnplBusinessSimplificationBlock() {
  const features = [
    {
      icon: QrCode,
      title: "Генератор QR-кодов",
      description: "Создавайте персональные QR для каждого товара или услуги"
    },
    {
      icon: BarChart3,
      title: "Аналитика по автоматическим банкам",
      description: "Подробная статистика по Kaspi, Halyk, Freedom Finance"
    },
    {
      icon: Settings,
      title: "Управление банками",
      description: "Добавляйте и настраивайте банки-партнеры"
    },
    {
      icon: Users,
      title: "История операций",
      description: "Все транзакции и заявки в одном месте"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-6">
              Удобный <span className="text-[#0088f5]">личный кабинет</span> для управления
            </h2>
            
            <p className="text-lg text-[#64748b] leading-relaxed mb-8">
              Управляйте всеми рассрочками, создавайте QR-коды для товаров и отслеживайте статистику из единого интерфейса.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#0088f5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {React.createElement(feature.icon, { className: "w-5 h-5 text-[#0088f5]" })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#64748b]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="https://bnpl.pluse.kz/qr-generator?qrLink=&template=universal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300"
              >
                <QrCode className="w-5 h-5" />
                Открыть генератор QR
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9]">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0f172a]">Личный кабинет</h3>
                  <p className="text-sm text-[#64748b]">Управление рассрочками</p>
                </div>
                <div className="w-8 h-8 bg-[#0088f5] rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Quick actions */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#f8fafc] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <QrCode className="w-4 h-4 text-[#0088f5]" />
                    <span className="text-sm font-medium text-[#0f172a]">Создать QR</span>
                  </div>
                  <div className="text-xs text-[#64748b]">Для нового товара</div>
                </div>
                
                <div className="bg-[#f8fafc] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-[#0088f5]" />
                    <span className="text-sm font-medium text-[#0f172a]">Аналитика</span>
                  </div>
                  <div className="text-xs text-[#64748b]">За месяц</div>
                </div>
              </div>

              {/* Recent QR codes */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-[#0f172a] mb-3">Созданные QR-коды</h4>
                
                <div className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0088f5] rounded-lg flex items-center justify-center">
                      <QrCode className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0f172a]">iPhone 15 Pro</div>
                      <div className="text-xs text-[#64748b]">QR-код для товара</div>
                    </div>
                  </div>
                  <div className="text-xs text-[#0088f5] font-medium">Активен</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0088f5] rounded-lg flex items-center justify-center">
                      <QrCode className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0f172a]">Универсальный</div>
                      <div className="text-xs text-[#64748b]">Для всех товаров</div>
                    </div>
                  </div>
                  <div className="text-xs text-[#0088f5] font-medium">Активен</div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-[#f1f5f9]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-[#0088f5]">12</div>
                    <div className="text-xs text-[#64748b]">QR-кодов</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#0088f5]">68%</div>
                    <div className="text-xs text-[#64748b]">Одобрений</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#0088f5]">3</div>
                    <div className="text-xs text-[#64748b]">Банка</div>
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