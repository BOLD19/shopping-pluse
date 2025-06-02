import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function BnplApprovalBlock() {
  return (
    <section className="py-20 bg-[#FDFCFB] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-blue/[0.02] bg-[length:20px_20px]" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0088f5]/10 blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl text-left z-10"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold leading-tight mb-6 text-[#0f172a]"
            >
              Повышаем шанс одобрения<br />
              <span className="text-[#0088f5] relative inline-block">
                рассрочки до 60%
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
            >
              <p className="text-lg leading-relaxed mb-4 text-[#64748b]">
                Даже если раньше клиенту отказывали, свежая банковская выписка через Pluse.kz помогает показать реальную платёжеспособность.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-[#64748b]">
                Подгрузить выписку можно только через наш сервис.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20условия%20рассрочки%20от%20Pluse.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-base font-semibold shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Получить детали в WhatsApp
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 md:mt-0 md:ml-0 z-10 flex justify-center md:justify-end relative"
          >
            <div className="relative w-full max-w-xs md:max-w-md aspect-square">
              <Image
                src="/ser2.png"
                alt="Bank Statement Upload"
                fill
                className="object-contain opacity-90"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-tr from-[#0088f5]/10 via-transparent to-transparent rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 