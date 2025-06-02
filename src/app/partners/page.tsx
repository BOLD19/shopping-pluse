'use client'

import { ArrowRight, MessageCircle, CheckCircle2, Users, DollarSign, TrendingUp, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Partners() {
  const stats = [
    { value: '50%', label: 'От комиссии', description: 'каждого клиента' },
    { value: '24/7', label: 'Поддержка', description: 'персональный менеджер' },
    { value: '0₸', label: 'Стартовый взнос', description: 'начните без вложений' }
  ];

  const features = [
    'Персональные реферальные ссылки и промокоды',
    'Подробная аналитика доходов в реальном времени',
    'Готовые маркетинговые материалы и креативы',
    'Полное обучение продуктам и работе с клиентами',
    'Еженедельные выплаты на любую карту',
    'Дополнительные бонусы за высокую активность'
  ];

  const steps = [
    {
      number: '01',
      title: 'Оставьте заявку',
      description: 'Свяжитесь с нами любым удобным способом'
    },
    {
      number: '02', 
      title: 'Получите доступ',
      description: 'Получите реферальные ссылки и материалы'
    },
    {
      number: '03',
      title: 'Начните зарабатывать', 
      description: 'Привлекайте клиентов и получайте доход'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left */}
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm font-medium text-[#0088f5] tracking-wider uppercase">Партнерская программа</span>
        </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
                Зарабатывайте{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088f5] to-[#0979ff]">
                  вместе с нами
                </span>
            </h1>
              
              <p className="text-lg lg:text-xl text-[#64748b] mb-8 leading-relaxed">
                Приводите клиентов — получайте деньги. 
                До 50% от комиссии.
            </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                  href="#details"
                  className="bg-[#0088f5] hover:bg-[#0979ff] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-[0_8px_30px_rgba(0,136,245,0.2)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                  Узнать подробности
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right side - Agent Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <Image
                  src="/agent.png"
                  alt="Партнерская программа"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
                
                {/* Floating earnings card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-8 -left-4 lg:-left-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-[200px]"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0088f5] mb-1">485 000₸</div>
                    <div className="text-xs text-[#64748b]">Заработал за месяц</div>
                  </div>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                </motion.div>

                {/* Speech bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute top-1/3 -right-4 lg:-right-8 bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-2xl p-4 shadow-lg max-w-[180px]"
                >
                  <div className="text-sm font-medium">
                    "Привожу 20+ клиентов в месяц и получаю стабильный доход!"
                  </div>
                  <div className="absolute -bottom-2 left-6 w-4 h-4 bg-[#0088f5] transform rotate-45"></div>
                </motion.div>

                {/* Success badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="absolute bottom-8 -left-2 lg:-left-6 bg-green-500 text-white rounded-full p-3 shadow-lg"
                >
                  <div className="text-xs font-bold">TOP</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-24 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0f172a] mb-8">
                Что входит в{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088f5] to-[#0979ff]">
                  партнерство
                </span>
              </h2>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#f1f5f9] hover:border-[#e2e8f0] transition-colors">
                    <div className="w-6 h-6 rounded-full bg-[#0088f5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                    </div>
                    <span className="text-[#0f172a] leading-relaxed">{feature}</span>
                  </div>
                ))}
      </div>
            </div>

            <div className="bg-gradient-to-br from-[#0088f5] to-[#0979ff] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  Готовы начать?
              </h3>
                
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Свяжитесь с нами для получения подробной информации и персональных условий сотрудничества.
                </p>
                
                <div className="space-y-4">
                  <a
                    href={`https://wa.me/77474288095?text=${encodeURIComponent('Здравствуйте! Хочу стать партнером Pluse.kz')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-[#0088f5] px-6 py-4 rounded-xl text-center font-medium hover:bg-gray-50 transition-colors"
                  >
                    Написать в WhatsApp
                  </a>
                  
                  <a
                    href="mailto:partner@pluse.kz"
                    className="block w-full border-2 border-white text-white px-6 py-4 rounded-xl text-center font-medium hover:bg-white hover:text-[#0088f5] transition-all duration-300"
                  >
                    Отправить email
                  </a>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
              Как стать{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088f5] to-[#0979ff]">
                партнером
              </span>
            </h2>
            <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
              Три простых шага до начала заработка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#0088f5] to-[#0979ff] flex items-center justify-center text-xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100vw/3-8rem)] h-0.5 bg-gradient-to-r from-[#0088f5]/30 to-transparent" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-[#64748b] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#0088f5]/5 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#0979ff]/5 blur-[100px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-8">
            Начните зарабатывать{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088f5] to-[#0979ff]">
              уже сегодня
            </span>
          </h2>
          
          <p className="text-xl text-[#64748b] mb-12 max-w-2xl mx-auto">
            Присоединяйтесь к нашей команде партнеров и получайте стабильный доход
          </p>
          
          <a
            href={`https://wa.me/77474288095?text=${encodeURIComponent('Здравствуйте! Хочу стать партнером Pluse.kz')}`}
                target="_blank"
                rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-10 py-5 rounded-2xl text-lg font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 transition-all duration-300 gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            Стать партнером
          </a>
          
          <div className="mt-12 inline-block px-6 py-3 bg-[#f8fafc] border border-[#f1f5f9] rounded-xl">
            <p className="text-[#64748b] text-sm">
              ⚡ Запускаем новых партнеров в работу за 24 часа
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 