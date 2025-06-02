import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Animated background elements */}
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
          className="absolute top-[5%] right-[15%] w-[400px] h-[400px] bg-blue-500 rounded-[100px] transform -rotate-12"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
          animate={{ 
            opacity: 0.04,
            scale: 1,
            rotate: 15,
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-indigo-500 rounded-[80px] transform rotate-15"
        />
      </div>

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-24 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-center">
            <div className="max-w-2xl">
              {/* Main heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6"
              >
                Создавайте Потрясающие
                <br />
                <span className="text-blue-600 relative">
                  Лендинг Страницы
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-1 left-0 right-0 h-2 bg-blue-500 opacity-20 -z-10"
                  />
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl"
              >
                Создавайте красивые, адаптивные лендинг страницы с современным дизайном и мощными компонентами. 
                Идеально подходит для стартапов, агентств и бизнеса.
              </motion.p>

              {/* CTA buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start gap-4 mb-10"
              >
                <Link
                  href="#get-started"
                  className="group bg-blue-600 text-white px-8 py-4 rounded-2xl text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
                >
                  Начать Работу
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="#learn-more" 
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2 px-4 py-4"
                >
                  Узнать Больше
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-slate-600"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white relative z-40 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white relative z-30 bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white relative z-20 bg-gradient-to-br from-purple-400 to-purple-600"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white relative z-10 bg-gradient-to-br from-pink-400 to-pink-600"></div>
                  </div>
                  <span>1000+ довольных клиентов</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 font-medium">5.0/5</span>
                </div>
              </motion.div>
            </div>
            
            {/* Right side - Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-8 left-8 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-8 right-8 w-64 h-64 bg-gradient-to-br from-indigo-500/15 to-blue-500/5 rounded-full blur-2xl"></div>
                </div>

                {/* Placeholder for hero image */}
                <div className="relative z-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-slate-600 font-medium">Ваше Главное Изображение</p>
                      <p className="text-slate-500 text-sm mt-1">Замените на ваш контент</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}; 