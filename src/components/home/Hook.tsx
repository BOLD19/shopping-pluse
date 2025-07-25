import React from 'react';
import { motion } from 'framer-motion';

export const Hook: React.FC = () => {
  return (
    <section className="h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center font-['SF_Pro_Display','Inter',sans-serif] px-5 py-15">
      {/* Текстура фона */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* Focus Box */}
        <motion.div 
          className="text-center mb-25 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Focus Word */}
          <div className="text-[80px] font-bold leading-[1.1] relative z-[2]">
            <span className="relative">
              сфокусируйся
              {/* Рамка-фокус с угловыми маркерами */}
              <div className="absolute top-0 left-0 w-5 h-5 border border-white z-[1]" style={{
                top: '-10px',
                left: '-25px',
                borderRight: 'none',
                borderBottom: 'none'
              }}></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border border-white z-[1]" style={{
                bottom: '-10px',
                right: '-25px',
                borderLeft: 'none',
                borderTop: 'none'
              }}></div>
            </span>
          </div>

          {/* Focus Sub */}
          <motion.div 
            className="text-[38px] font-medium mt-2.5 filter-blur-[3px] opacity-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            на том, что действительно
          </motion.div>

          <motion.div 
            className="text-[38px] font-medium mt-2.5 filter-blur-[3px] opacity-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            важно.
          </motion.div>
        </motion.div>

        {/* List Block */}
        <motion.div 
          className="w-full max-w-[900px] flex flex-row justify-between gap-5 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* List Title */}
          <div className="font-semibold opacity-100 flex-none w-[220px] self-start mt-1.5">
            мы избавим тебя от:
          </div>

          {/* List Items */}
          <ul className="flex-1 list-none p-0 m-0 font-['SF_Mono',monospace]">
            <li className="mb-2 leading-[1.5]">
              <span className="text-[#999] mr-2.5 inline-block min-w-[42px]">[01]</span>
              Нет комиссий. Только вы и покупатель
            </li>
            <li className="mb-2 leading-[1.5]">
              <span className="text-[#999] mr-2.5 inline-block min-w-[42px]">[02]</span>
              Цены, карточки, отзывы — только ваши
            </li>
            <li className="mb-2 leading-[1.5]">
              <span className="text-[#999] mr-2.5 inline-block min-w-[42px]">[03]</span>
              Без модераций и блокировок
            </li>
            <li className="mb-2 leading-[1.5]">
              <span className="text-[#999] mr-2.5 inline-block min-w-[42px]">[04]</span>
              Карточки и тексты генерируются автоматически
            </li>
            <li className="mb-2 leading-[1.5]">
              <span className="text-[#999] mr-2.5 inline-block min-w-[42px]">[05]</span>
              Доставка внутри сервиса
            </li>
            <li className="mb-2 leading-[1.5]">
              <span className="text-[#999] mr-2.5 inline-block min-w-[42px]">[06]</span>
              Управляйте складом, не теряя данных
            </li>
            <li className="mb-2 leading-[1.5]">
              <span className="text-[#999] mr-2.5 inline-block min-w-[42px]">[07]</span>
              Повторно продавайте тем, кто уже купил
            </li>
            <li className="mb-2 leading-[1.5]">
              <span className="text-[#999] mr-2.5 inline-block min-w-[42px]">[08]</span>
              Простая аналитика — в один клик
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}; 