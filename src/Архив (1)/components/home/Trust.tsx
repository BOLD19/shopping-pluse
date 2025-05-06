'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Trust() {
  return (
    <section className="py-16 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Почему нам доверяют предприниматели
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#4A4A4A]">
            Pluse.kz сочетает банковскую надёжность, венчурную поддержку и активное сообщество
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl gap-8 lg:mx-0 lg:max-w-none">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
              <Image
                src="/rbk_logo.png"
                alt="RBK Bank"
                width={120}
                height={40}
                className="h-10 w-auto object-contain mx-auto md:mx-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A]">
                  Pluse.kz — цифровой филиал RBK Bank
                </h3>
                <p className="mt-3 text-base md:text-lg text-[#4A4A4A]">
                  Счета и операции открываются через лицензированный банк. Мы работаем под надзором Национального Банка РК и соблюдаем все требования регулятора.
                </p>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-[#8F6ED5] font-medium hover:opacity-80 transition-opacity"
                  >
                    Узнать подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Astana Hub Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                <Image
                  src="/astanahub_logo.svg"
                  alt="Astana Hub"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain mx-auto md:mx-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A]">
                    Резидент Astana Hub
                  </h3>
                  <p className="mt-3 text-base md:text-lg text-[#4A4A4A]">
                    Мы развиваемся в крупнейшем IT-хабе Центральной Азии и создаём инновационные финтех-решения.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tumar Ventures Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                <Image
                  src="/tumar_logo.png"
                  alt="Tumar Ventures"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain mx-auto md:mx-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A]">
                    Поддержка Tumar Ventures
                  </h3>
                  <p className="mt-3 text-base md:text-lg text-[#4A4A4A]">
                    Наш проект поддерживает один из самых активных венчурных фондов Казахстана.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 