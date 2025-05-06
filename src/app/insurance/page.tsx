'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { 
  Shield, 
  TruckIcon, 
  Building2, 
  Briefcase, 
  Heart, 
  FileCheck, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  CheckCheck,
  Inbox,
  Car,
  HeartPulse,
  Server,
  Hammer,
  Users,
  Package,
  BarChart,
  Home,
  Stethoscope,
  HeartHandshake,
  MessageCircle,
  Mail,
  Medal,
  CreditCard as CreditCardIcon
} from 'lucide-react'

export default function InsurancePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '' })
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-20 md:py-32 flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4FF] via-white to-white z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-purple/[0.02] bg-[length:20px_20px] z-0"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#8F6ED5]/30 blur-[100px] z-0"></div>
        
        <div className="container relative z-10 flex flex-col items-center max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            Страхование бизнеса <span className="text-[#8F6ED5]">без лишних хлопот</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#6B6B6B] max-w-3xl mb-10">
            Защитите свой бизнес от непредвиденных ситуаций с помощью комплексных страховых решений от Pluse.kz. Мы сотрудничаем с ведущими страховыми компаниями Казахстана, чтобы предложить вам лучшие условия.
          </p>
          
          <Link href="https://wa.me/77xxxxxxxx" className="flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all rounded-full bg-[#8F6ED5] hover:bg-[#7F5EC5] shadow-lg shadow-[#8F6ED5]/20 hover:shadow-[#8F6ED5]/40">
            Получить консультацию
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Insurance Products Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            Страховые продукты для вашего бизнеса
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl shadow-[#8F6ED5]/5 hover:shadow-[#8F6ED5]/10 transition-all hover:border-[#8F6ED5]/50 group">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Building2 className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Страхование имущества</h3>
              <p className="text-[#6B6B6B] mb-5">Защитите физические активы вашей компании от пожара, наводнения, кражи и других рисков.</p>
              <a href="#contact" className="inline-flex items-center text-[#8F6ED5] group-hover:text-[#7F5EC5] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl shadow-[#8F6ED5]/5 hover:shadow-[#8F6ED5]/10 transition-all hover:border-[#8F6ED5]/50 group">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Страхование ответственности</h3>
              <p className="text-[#6B6B6B] mb-5">Защита от исков третьих лиц, связанных с вашей профессиональной деятельностью.</p>
              <a href="#contact" className="inline-flex items-center text-[#8F6ED5] group-hover:text-[#7F5EC5] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl shadow-[#8F6ED5]/5 hover:shadow-[#8F6ED5]/10 transition-all hover:border-[#8F6ED5]/50 group">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Users className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Страхование сотрудников</h3>
              <p className="text-[#6B6B6B] mb-5">Медицинское страхование и страхование от несчастных случаев для ваших сотрудников.</p>
              <a href="#contact" className="inline-flex items-center text-[#8F6ED5] group-hover:text-[#7F5EC5] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl shadow-[#8F6ED5]/5 hover:shadow-[#8F6ED5]/10 transition-all hover:border-[#8F6ED5]/50 group">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Car className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Автострахование</h3>
              <p className="text-[#6B6B6B] mb-5">Комплексное страхование корпоративного автопарка вашей компании.</p>
              <a href="#contact" className="inline-flex items-center text-[#8F6ED5] group-hover:text-[#7F5EC5] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 5 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl shadow-[#8F6ED5]/5 hover:shadow-[#8F6ED5]/10 transition-all hover:border-[#8F6ED5]/50 group">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Shield className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Киберстрахование</h3>
              <p className="text-[#6B6B6B] mb-5">Защита от финансовых потерь в результате кибератак и утечки данных.</p>
              <a href="#contact" className="inline-flex items-center text-[#8F6ED5] group-hover:text-[#7F5EC5] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 6 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl shadow-[#8F6ED5]/5 hover:shadow-[#8F6ED5]/10 transition-all hover:border-[#8F6ED5]/50 group">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Stethoscope className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Страхование от перерыва в бизнесе</h3>
              <p className="text-[#6B6B6B] mb-5">Компенсация финансовых потерь при вынужденной приостановке деятельности.</p>
              <a href="#contact" className="inline-flex items-center text-[#8F6ED5] group-hover:text-[#7F5EC5] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pluse Section */}
      <section className="py-20 bg-[#F0F4FF]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            Почему выбирают Pluse для страхования
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Advantage 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Экономия времени</h3>
              <p className="text-[#6B6B6B]">Оформление страховки занимает всего несколько минут, без необходимости посещения офиса.</p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <CreditCardIcon className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Выгодные условия</h3>
              <p className="text-[#6B6B6B]">Мы сотрудничаем с лучшими страховыми компаниями и получаем для вас специальные условия.</p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <HeartHandshake className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Персональный подход</h3>
              <p className="text-[#6B6B6B]">Каждому клиенту предоставляется персональный менеджер для решения любых вопросов.</p>
            </div>

            {/* Advantage 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Clock className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Быстрые выплаты</h3>
              <p className="text-[#6B6B6B]">Мы помогаем ускорить процесс получения выплат по страховым случаям.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            Как работает наш сервис
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8F6ED5]/30 hidden md:block"></div>
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-[#8F6ED5] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">Консультация</h3>
                <p className="text-[#6B6B6B] text-center">Оставьте заявку или свяжитесь с нами через WhatsApp для получения бесплатной консультации.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8F6ED5]/30 hidden md:block"></div>
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-[#8F6ED5] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">Подбор решения</h3>
                <p className="text-[#6B6B6B] text-center">Наши специалисты подберут оптимальное страховое решение для вашего бизнеса.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8F6ED5]/30 hidden md:block"></div>
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-[#8F6ED5] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">Оформление</h3>
                <p className="text-[#6B6B6B] text-center">Быстрое оформление договора страхования онлайн без посещения офиса.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-[#8F6ED5] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">Сопровождение</h3>
                <p className="text-[#6B6B6B] text-center">Мы остаемся на связи и поможем с урегулированием при наступлении страхового случая.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases Section */}
      <section className="py-20 bg-[#F0F4FF]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            Распространенные кейсы использования
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Case 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-[#8F6ED5]/30 transition-all">
              <div className="flex items-start mb-4">
                <div className="bg-[#F0F4FF] rounded-xl p-3 mr-4">
                  <Building2 className="h-6 w-6 text-[#8F6ED5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Ретейл-бизнес</h3>
              </div>
              <p className="text-[#6B6B6B] mb-4">Страхование товарных запасов, оборудования и гражданской ответственности перед покупателями.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#6B6B6B]">
                  <CheckCircle2 className="h-4 w-4 text-[#8F6ED5] mr-2" />
                  <span>Защита от кражи и порчи товара</span>
                </li>
                <li className="flex items-center text-[#6B6B6B]">
                  <CheckCircle2 className="h-4 w-4 text-[#8F6ED5] mr-2" />
                  <span>Страхование от пожара и затопления</span>
                </li>
              </ul>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-[#8F6ED5]/30 transition-all">
              <div className="flex items-start mb-4">
                <div className="bg-[#F0F4FF] rounded-xl p-3 mr-4">
                  <Briefcase className="h-6 w-6 text-[#8F6ED5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">IT-компании</h3>
              </div>
              <p className="text-[#6B6B6B] mb-4">Киберстрахование и страхование профессиональной ответственности для защиты бизнеса.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#6B6B6B]">
                  <CheckCircle2 className="h-4 w-4 text-[#8F6ED5] mr-2" />
                  <span>Защита от исков клиентов</span>
                </li>
                <li className="flex items-center text-[#6B6B6B]">
                  <CheckCircle2 className="h-4 w-4 text-[#8F6ED5] mr-2" />
                  <span>Страхование от утечки данных</span>
                </li>
              </ul>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-[#8F6ED5]/30 transition-all">
              <div className="flex items-start mb-4">
                <div className="bg-[#F0F4FF] rounded-xl p-3 mr-4">
                  <Users className="h-6 w-6 text-[#8F6ED5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Производство</h3>
              </div>
              <p className="text-[#6B6B6B] mb-4">Комплексное страхование оборудования, зданий и ответственности перед сотрудниками.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#6B6B6B]">
                  <CheckCircle2 className="h-4 w-4 text-[#8F6ED5] mr-2" />
                  <span>Страхование оборудования</span>
                </li>
                <li className="flex items-center text-[#6B6B6B]">
                  <CheckCircle2 className="h-4 w-4 text-[#8F6ED5] mr-2" />
                  <span>Страхование от несчастных случаев</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA/Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8F6ED5]/20 blur-[100px] z-0"></div>
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[length:20px_20px] z-0"></div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-br from-white to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                  Получите индивидуальное предложение для вашего бизнеса
                </h2>
                <p className="text-[#6B6B6B] mb-8">
                  Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для консультации и подбора оптимального страхового решения.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <Link href="https://wa.me/77xxxxxxxx" className="flex items-center justify-center px-6 py-3 rounded-full bg-[#25D366] text-white font-medium transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Написать в WhatsApp
                  </Link>
                  
                  <Link href="mailto:info@pluse.kz" className="flex items-center justify-center px-6 py-3 rounded-full bg-gray-800 text-white font-medium transition-all hover:bg-gray-700">
                    <Mail className="h-5 w-5 mr-2" />
                    info@pluse.kz
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Оставить заявку</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-[#6B6B6B] mb-2 text-sm">Ваше имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:border-transparent"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-[#6B6B6B] mb-2 text-sm">Номер телефона</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] hover:from-[#7F5EC5] hover:to-[#6F4DB5] text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-[#8F6ED5]/20 hover:shadow-[#8F6ED5]/40 transition-all">
                    Отправить заявку
                  </button>
                  
                  <p className="text-[#6B6B6B] text-sm mt-4 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 