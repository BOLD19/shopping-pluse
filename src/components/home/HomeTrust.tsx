import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, PiggyBank, MapPin } from 'lucide-react';

export const HomeTrust: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Почему нас выбирают предприниматели
          </h2>
          <p className="mt-6 text-lg text-[#64748b]">
            Pluse.kz сочетает банковскую надёжность, передовую финтех-поддержку и активное сообщество
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-8 lg:mx-0 lg:max-w-none">
          {/* Main card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
          >
            <div className="flex items-start gap-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#0088f5]/10 to-[#0979ff]/10">
                <ShieldCheck className="h-8 w-8 text-[#0088f5]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#0f172a]">
                  Pluse.kz — цифровой филиал RBK Bank
                </h3>
                <p className="mt-3 text-[#64748b]">
                  Все счета и операции открываются через лицензированный банк
                </p>
              </div>
              <Image
                src="/rbk_logo.png"
                alt="RBK Bank"
                width={120}
                height={40}
                className="h-10 w-auto object-contain opacity-80"
              />
            </div>
          </motion.div>

          {/* Secondary cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#0088f5]/10 to-[#0979ff]/10">
                  <PiggyBank className="h-8 w-8 text-[#0088f5]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0f172a]">
                    Фонд Tumar Ventures — среди наших инвесторов
                  </h3>
                  <p className="mt-2 text-[#64748b]">
                    Tumar поддерживает сильные и масштабируемые стартапы
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#0088f5]/10 to-[#0979ff]/10">
                  <MapPin className="h-8 w-8 text-[#0088f5]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0f172a]">
                    Pluse.kz — резидент Astana Hub
                  </h3>
                  <p className="mt-2 text-[#64748b]">
                    Мы развиваемся в крупнейшем технопарке Центральной Азии
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Partners and stats */}
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              src="/rbk_logo.png"
              alt="RBK Bank"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
            />
            <Image
              src="/tumar_logo.png"
              alt="Tumar Ventures"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
            />
            <Image
              src="/astanahub_logo.png"
              alt="Astana Hub"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-1 w-1 rounded-full bg-[#0088f5]"></div>
            <p className="text-[#64748b] text-lg">
              100+ предпринимателей уже с нами
            </p>
            <div className="h-1 w-1 rounded-full bg-[#0088f5]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}; 