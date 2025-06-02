import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BnplHeroBlock() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f172a]">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Помогаем предпринимателям<br />
            <span className="text-[#0088f5] relative">
              не терять прибыль <span className='whitespace-nowrap'>на рассрочках</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-1 left-0 right-0 h-2 bg-[#0979ff] opacity-20 -z-10"
              />
            </span>
          </h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            <ul className="list-none space-y-2">
              <li><span className="inline-block align-middle mr-2 text-[#0088f5]">—</span>Процент одобрения — до 60%</li>
              <li><span className="inline-block align-middle mr-2 text-[#0088f5]">—</span>Вы выбираете срок и проценты</li>
              <li><span className="inline-block align-middle mr-2 text-[#0088f5]">—</span>от 3% на 36 месяцев</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
            href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20условия%20рассрочки%20от%20Pluse.kz"
            target="_blank"
            rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          >
              <MessageCircle className="w-5 h-5" />
            Получить детали в WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#0088f5" />
            <stop offset="1" stopColor="#0979ff" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
} 