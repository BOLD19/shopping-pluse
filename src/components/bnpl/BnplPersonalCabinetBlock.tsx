import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  QrCode, 
  Settings, 
  CheckCircle2, 
  MessageCircle, 
  Eye,
  CreditCard,
  TrendingUp,
  Users,
  Calendar,
  Bell,
  Filter,
  X,
  Plus,
  DollarSign,
  ArrowUpRight,
  Clock
} from 'lucide-react';

export default function BnplPersonalCabinetBlock() {
  const features = [
    {
      title: "Полная статистика продаж",
      description: "Отслеживайте все транзакции, успешные заявки и отказы по автоматическим банкам"
    },
    {
      title: "Управление QR-кодами",
      description: "Создавайте, редактируйте и отключайте QR-коды для разных товаров из одного места"
    },
    {
      title: "Подключение ручных банков",
      description: "Подключайте банки, с которыми вы уже работаете"
    }
  ];
  
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Clean Dashboard Interface */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9]">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Личный кабинет</h3>
                  <p className="text-sm text-[#64748b]">Pluse.kz</p>
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-[#f8fafc] rounded-2xl border border-[#f1f5f9]">
                  <div className="text-2xl font-bold text-[#0088f5] mb-1">₸1.2М</div>
                  <div className="text-sm text-[#64748b]">За месяц</div>
                </div>
                
                <div className="text-center p-4 bg-[#f8fafc] rounded-2xl border border-[#f1f5f9]">
                  <div className="text-2xl font-bold text-[#0088f5] mb-1">84%</div>
                  <div className="text-sm text-[#64748b]">Одобрено</div>
                </div>
                
                <div className="text-center p-4 bg-[#f8fafc] rounded-2xl border border-[#f1f5f9]">
                  <div className="text-2xl font-bold text-[#0088f5] mb-1">127</div>
                  <div className="text-sm text-[#64748b]">Заявок</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#0f172a] mb-4">Управление</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center gap-3 p-4 bg-[#0088f5] text-white rounded-xl font-medium">
                    <QrCode className="w-5 h-5" />
                    <span>Создать QR</span>
                  </button>
                  
                  <button className="flex items-center gap-3 p-4 bg-[#f8fafc] text-[#0088f5] rounded-xl font-medium border border-[#0088f5]">
                    <BarChart3 className="w-5 h-5" />
                    <span>Статистика</span>
                  </button>
                </div>
              </div>

              {/* Recent Transactions */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-[#0f172a]">Последние операции</h4>
                  <button className="text-xs text-[#0088f5] font-medium">Все операции</button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl border border-[#f1f5f9]">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0088f5]" />
                      <div>
                        <div className="text-sm font-medium text-[#0f172a]">iPhone 15 Pro</div>
                        <div className="text-xs text-[#64748b]">RBK Bank</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#0f172a]">₸520,000</div>
                      <div className="text-xs text-[#0088f5]">Одобрено</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl border border-[#f1f5f9]">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#64748b]" />
                      <div>
                        <div className="text-sm font-medium text-[#0f172a]">MacBook Air</div>
                        <div className="text-xs text-[#64748b]">Halyk Bank</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#0f172a]">₸680,000</div>
                      <div className="text-xs text-[#64748b]">Ожидание</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl border border-[#f1f5f9]">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0088f5]" />
                      <div>
                        <div className="text-sm font-medium text-[#0f172a]">AirPods Pro</div>
                        <div className="text-xs text-[#64748b]">Freedom Bank</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#0f172a]">₸120,000</div>
                      <div className="text-xs text-[#0088f5]">Одобрено</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
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
              Личный кабинет для{" "}
              <span className="text-[#0088f5] relative inline-block">
                управления
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-1 left-0 right-0 h-2 bg-[#0979ff] opacity-20 -z-10"
                />
              </span>
              {" "}продажами
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-lg text-[#64748b] leading-relaxed mb-6">
                Контролируйте весь процесс продаж в рассрочку из единого интерфейса.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
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
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="https://bnpl.pluse.kz/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300"
              >
                <LayoutDashboard className="w-5 h-5" />
                Открыть кабинет
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 