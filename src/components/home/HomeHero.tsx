import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  CreditCard,
  ShoppingBag
} from 'lucide-react';
import Image from 'next/image';

interface HomeHeroProps {
  isLoading: boolean;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ isLoading }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FDFCFB] via-white to-[#f0f9ff] min-h-[80vh]">
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
          className="absolute top-[5%] right-[15%] w-[400px] h-[400px] bg-[#0088f5] rounded-[100px] transform -rotate-12"
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
          className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-[#0979ff] rounded-[80px] transform rotate-15"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 0.03,
            scale: 1,
            rotate: [0, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-[#0088f5] rounded-full"
        />
      </div>

      {/* Main content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-4 sm:pt-24 lg:pt-32">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-x-12 gap-y-16 items-center">
                <div className="max-w-2xl">
                  {/* Main heading */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl mb-6"
                  >
                    Необанк для
                    <br />
                    <span className="text-[#0088f5] relative">
                      предпринимателей
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="absolute bottom-1 left-0 right-0 h-2 bg-[#0979ff] opacity-20 -z-10"
                      />
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-[#64748b] leading-relaxed mb-10 max-w-xl"
                  >
                    Откройте счёт за 5 минут, предложите клиентам рассрочку 0%, запустите интернет-магазин и автоматизируйте бухгалтерию.
                  </motion.p>

                  {/* CTA buttons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-start gap-4 mb-10"
                  >
                    <Link
                      href="/register"
                      className="group bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-base font-semibold shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300 flex items-center gap-2"
                    >
                      Открыть счёт
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link 
                      href="/about" 
                      className="text-[#0088f5] font-semibold hover:text-[#0979ff] transition-colors flex items-center gap-2 px-4 py-4"
                    >
                      Узнать больше
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>

                  {/* Social proof */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-[#64748b]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white relative z-40">
                          <Image
                            src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?w=100&h=100&fit=crop"
                            alt="Пользователь сервиса"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white relative z-30">
                          <Image
                            src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=100&h=100&fit=crop"
                            alt="Пользователь сервиса"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white relative z-20">
                          <Image
                            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop"
                            alt="Пользователь сервиса"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white relative z-10">
                          <Image
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
                            alt="Пользователь сервиса"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <span>100+ предпринимателей</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                      ))}
                      <span className="ml-1 font-medium">4.9/5</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right side - App Interface */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative mt-8 lg:mt-0"
                >
                  <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 -z-10">
                      <div className="absolute top-8 left-8 w-72 h-72 bg-gradient-to-br from-[#0088f5]/20 to-[#0979ff]/10 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-8 right-8 w-64 h-64 bg-gradient-to-br from-[#0979ff]/15 to-[#0088f5]/5 rounded-full blur-2xl"></div>
                    </div>

                    {/* iPhone Home Image */}
                    <div className="relative z-10">
                      <Image
                        src="/iphone_home.png"
                        alt="iPhone interface"
                        width={393}
                        height={852}
                        className="w-auto h-auto"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}; 