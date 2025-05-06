'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { UserPlus, ArrowRight, Layers } from 'lucide-react'

export default function HowToConnect() {
  return (
    <section className="py-16 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Как подключиться
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#4A4A4A]">
            Два простых шага для начала работы
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Step 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: 'easeOut'
                }
              }
            }}
            className="relative bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#E0FF4F] flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <span className="text-[#8F6ED5] font-medium">Регистрация</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-4">
                Зарегистрируйтесь и подтвердите личность
              </h3>
              <p className="text-base text-[#4A4A4A] mb-8">
                Заполните анкету и загрузите документы. Мы проверим данные за 1 день.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center text-[#8F6ED5] font-medium group-hover:opacity-80 transition-all"
              >
                Начать регистрацию
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[#F9FAFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: 'easeOut'
                }
              }
            }}
            className="relative bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#E0FF4F] flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <span className="text-[#8F6ED5] font-medium">Сервисы</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-4">
                Выберите нужные сервисы
              </h3>
              <p className="text-base text-[#4A4A4A] mb-8">
                Подключите только те модули, которые нужны вашему бизнесу.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-[#8F6ED5] font-medium group-hover:opacity-80 transition-all"
              >
                Посмотреть сервисы
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[#F9FAFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 