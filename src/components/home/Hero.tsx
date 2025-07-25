import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 lg:h-[679px] flex flex-col justify-center">
      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-center">
            {/* Text content container */}
            <div className="flex flex-col items-center lg:items-start order-1 relative z-20">
              {/* Main heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-slate-900 mb-6 text-center lg:text-left"
              >
                <div className="hidden lg:block">
                  <div>Продавайте товары</div>
                  <div>под своим брендом</div>
                </div>
                <div className="lg:hidden">
                  <div>Продавайте товары</div>
                  <div>под своим брендом</div>
                </div>
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 mb-10 text-center max-w-xl"
              >
                <div className="text-center">
                  <p className="text-base text-slate-600 leading-relaxed lg:text-lg">
                    Интернет-магазин с кассой, рассрочкой и CRM — за 1 день.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed lg:text-lg mt-1">
                    Уже завтра он будет выглядеть вот так.
                  </p>
                </div>
              </motion.div>

              {/* Desktop CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden lg:flex flex-col items-start gap-3"
              >
                <a
                  href="https://wa.me/77773332033?text=Здравствуйте,%20хочу%20посмотреть%20демо-версию%20Shopping.Pluse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 group w-full sm:w-auto"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Посмотреть демо-версию
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-xs text-slate-500 ml-2">Нажимая, вы просто получите демо в WhatsApp</p>
              </motion.div>
            </div>
            
            {/* Right side - Phone Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-center order-2 -mt-16 lg:mt-16 w-full"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-xs mx-auto px-4 sm:px-0">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative z-10 w-full"
                >
                  <div className="relative flex justify-center w-full">
                    <Image
                      src="/ph.png"
                      alt="Демонстрация интерфейса"
                      width={500}
                      height={600}
                      className="w-full h-auto max-w-full object-contain block"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-slate-50 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative z-20 flex lg:hidden flex-col items-center gap-4 w-full order-3 mt-10"
            >
              <a
                href="https://wa.me/77773332033?text=Здравствуйте,%20хочу%20посмотреть%20демо-версию%20Shopping.Pluse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 group w-full sm:w-auto"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Посмотреть демо-версию
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-xs text-slate-500 text-center">Нажимая, вы просто получите демо в WhatsApp</p>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}; 