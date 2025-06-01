'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, DollarSign, BarChart3, Users, ArrowRight, MessageCircle } from 'lucide-react'

export default function Partners() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Зарабатывайте от комиссии',
      description: 'Получайте вознаграждение за каждого привлеченного клиента, который начал пользоваться нашими сервисами'
    },
    {
      icon: BarChart3,
      title: 'Прозрачная статистика',
      description: 'Отслеживайте результаты в реальном времени через личный кабинет партнера'
    },
    {
      icon: Users,
      title: 'Минимум условий',
      description: 'Не нужно регистрировать ИП — просто рекомендуйте Pluse.kz своим знакомым предпринимателям'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative isolate pt-32 pb-20">
        {/* Blue gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_30%,_var(--tw-gradient-stops))] from-[#0088f5]/10 via-white to-white opacity-90"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-6xl mb-6"
            >
              Партнёрская программа
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#64748b] leading-relaxed mb-10"
            >
              Рекомендуйте Pluse.kz предпринимателям из вашего окружения и зарабатывайте на этом
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#benefits"
                className="inline-flex items-center bg-[#0088f5] hover:bg-[#0979ff] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] transition-all duration-300 gap-2"
              >
                Узнать условия
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div id="benefits" className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Преимущества партнерства
            </h2>
            <p className="mt-6 text-lg text-[#64748b]">
              Простые условия, честные выплаты и поддержка на каждом этапе
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0088f5]/10 to-[#0979ff]/10 mb-6">
                  <benefit.icon className="h-6 w-6 text-[#0088f5]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Как это работает
            </h2>
            <p className="mt-6 text-lg text-[#64748b]">
              Всего 3 простых шага до первого дохода от партнерства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Подайте заявку',
                description: 'Свяжитесь с нами любым удобным способом и расскажите о себе'
              },
              {
                step: '2', 
                title: 'Получите материалы',
                description: 'Мы предоставим промокоды, ссылки и все необходимое для работы'
              },
              {
                step: '3',
                title: 'Зарабатывайте',
                description: 'Рекомендуйте Pluse.kz и получайте вознаграждение за каждого клиента'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0088f5] text-white font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0f172a]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#64748b] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Готовы стать партнером?
            </h2>
            <p className="mt-6 text-lg text-[#64748b]">
              Свяжитесь с нами, чтобы обсудить условия сотрудничества и получить персональное предложение
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/77474288095?text=${encodeURIComponent('Добрый день! Интересует партнёрская программа Pluse.kz')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#0088f5] hover:bg-[#0979ff] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] transition-all duration-300 gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
              </a>
              <a
                href="mailto:partner@pluse.kz"
                className="inline-flex items-center bg-white text-[#0f172a] px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#0088f5]/20 hover:border-[#0088f5]/40 transition-all duration-300 gap-2"
              >
                <Mail className="w-5 h-5" />
                Написать на email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 