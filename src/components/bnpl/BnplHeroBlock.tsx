import React from 'react';
import { MessageCircle, QrCode, CreditCard, Calendar, CheckCircle2, Building2, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BnplHeroBlock() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff] pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
          animate={{ 
            opacity: 0.05,
            scale: 1,
            rotate: -12,
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-[5%] right-[15%] w-[400px] h-[400px] bg-[#0088f5] rounded-[100px] transform -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-medium text-[#0088f5] tracking-wider uppercase">Единый QR</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl mb-6">
                Один QR —{" "}
                <span className="text-[#0088f5] relative">
                  все банки
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-1 left-0 right-0 h-2 bg-[#0979ff] opacity-20 -z-10"
                  />
                </span>
                {" "}рассрочки
              </h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-[#64748b] leading-relaxed mb-6"
              >
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0" />
                    <span>Подключите любые банки к одному QR</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0" />
                    <span>Клиент выбирает удобный банк</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0" />
                    <span>Максимальное одобрение заявок</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-sm text-[#64748b] mb-8 bg-[#f8fafc] rounded-xl p-4 border border-[#f1f5f9]"
              >
                <span className="text-[#0f172a] font-medium">Доступные банки:</span> Kaspi, Halyk, RBK Bank, Freedom Bank, Jusan, Home Credit и другие
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://bnpl.pluse.kz/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300 justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Зарегистироваться
                </a>

                <a
                  href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20про%20рассрочку"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-[#0088f5] px-8 py-4 rounded-2xl text-lg font-medium border-2 border-[#0088f5] hover:bg-[#0088f5] hover:text-white transition-all duration-300 justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Узнать подробнее
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Illustration - Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9] relative">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Пульт управления банками</h3>
                <p className="text-sm text-[#64748b]">Одно устройство — все возможности</p>
              </div>

              {/* Pult Image with animated elements */}
              <div className="relative flex items-center justify-center mb-6">
                <Image
                  src="/pult.png"
                  alt="Пульт управления Pluse BNPL"
                  width={400}
                  height={300}
                  className="w-full h-auto max-w-sm object-contain relative z-10"
                  priority
                />
                
                {/* Animated bank connections */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-[#0088f5] rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-sm">K</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -top-4 -left-4 w-12 h-12 bg-[#0066cc] rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-sm">H</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#0979ff] rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-sm">R</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#004499] rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-sm">J</span>
                </motion.div>

                {/* Connection lines */}
                <motion.div
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1.5, delay: 1.8 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.path
                      d="M20,20 Q50,50 80,20"
                      stroke="#0088f5"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <motion.path
                      d="M20,80 Q50,50 80,80"
                      stroke="#0088f5"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Control features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl border border-[#f1f5f9]">
                  <div className="w-8 h-8 bg-[#0088f5]/10 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-[#0088f5]">⚡</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#0f172a]">Мгновенное переключение</div>
                    <div className="text-xs text-[#64748b]">Между всеми банками одной кнопкой</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl border border-[#f1f5f9]">
                  <div className="w-8 h-8 bg-[#0088f5]/10 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-[#0088f5]">🎛️</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#0f172a]">Полный контроль</div>
                    <div className="text-xs text-[#64748b]">Управляйте всеми рассрочками из одного места</div>
                  </div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <span className="text-sm font-medium text-[#0f172a]">Все системы подключены</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 