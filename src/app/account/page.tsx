'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { 
  Shield, 
  Smartphone, 
  Clock, 
  UserCheck2, 
  Building2, 
  Wallet, 
  LayoutGrid, 
  FileText,
  CreditCard,
  Receipt,
  Store,
  Download,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export default function AccountPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ phone: '' })
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'Кто может открыть счёт?',
      answer: 'Счёт могут открыть юридические лица (ТОО) и индивидуальные предприниматели (ИП). Требуется только действующая регистрация в Казахстане.'
    },
    {
      question: 'Сколько времени занимает открытие счёта?',
      answer: 'Открытие счёта занимает 1 рабочий день. После прохождения биометрии и проверки документов вы получаете реквизиты счёта.'
    },
    {
      question: 'Что нужно для открытия счёта?',
      answer: 'Для открытия счёта необходимы: удостоверение личности, смартфон с камерой для прохождения биометрии и установленное приложение Pluse.'
    },
    {
      question: 'Подходит ли для ТОО и ИП?',
      answer: 'Да, наш сервис подходит как для ТОО, так и для ИП. Процесс открытия счёта одинаково прост для обеих форм организации бизнеса.'
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-20 md:py-32 flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4FF] via-white to-white z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-purple/[0.02] bg-[length:20px_20px] z-0"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#8F6ED5]/30 blur-[100px] z-0"></div>
        
        <div className="container relative z-10 flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
          <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Откройте счёт для бизнеса за 1 день — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8F6ED5] to-lime-500">полностью онлайн</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mb-10">
              Без визита в банк, всё через приложение Pluse. Начните пользоваться счётом уже сегодня.
            </p>
            
            <Link href="#contact" className="inline-flex items-center bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] hover:from-[#7F5EC5] hover:to-[#6F4DB5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all">
              Открыть счёт
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* 3D Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-lime-400/20 to-lime-600/20 rounded-2xl transform rotate-12 backdrop-blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#8F6ED5]/20 to-[#7F5EC5]/20 rounded-2xl transform -rotate-12 backdrop-blur-xl"></div>
              
              {/* Main Device Frame */}
              <div className="relative bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-100 rounded-full"></div>
                <div className="mb-8 text-center">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-lime-500" />
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Счёт открыт!</h3>
                  <p className="text-[#6B6B6B] text-sm">Ваши реквизиты готовы</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#F0F4FF] rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center">
                      <CreditCard className="w-6 h-6 text-[#8F6ED5] mr-3" />
                      <div>
                        <p className="text-[#6B6B6B] text-xs">Номер счёта</p>
                        <p className="text-[#1A1A1A] font-mono">KZ86 9650 0000 0000 0000</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#F0F4FF] rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center">
                      <Building2 className="w-6 h-6 text-[#8F6ED5] mr-3" />
                      <div>
                        <p className="text-[#6B6B6B] text-xs">Компания</p>
                        <p className="text-[#1A1A1A]">ТОО &quot;Ваша компания&quot;</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <span className="inline-flex items-center text-sm text-lime-600">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Готово к использованию
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            Почему открывают счёт у нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Shield className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Бесплатное открытие</h3>
              <p className="text-[#6B6B6B]">Откройте счёт без визита в банк и дополнительных расходов.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Clock className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Счёт за 1 день</h3>
              <p className="text-[#6B6B6B]">Получите доступ к счёту и начните пользоваться им уже сегодня.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <UserCheck2 className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Простая регистрация</h3>
              <p className="text-[#6B6B6B]">Только регистрация и биометрия в приложении, без лишних документов.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Building2 className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Для ТОО и ИП</h3>
              <p className="text-[#6B6B6B]">Подходит для всех форм бизнеса с одинаково простым процессом.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <Smartphone className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Мобильный банк</h3>
              <p className="text-[#6B6B6B]">Управляйте счётом через удобное мобильное приложение.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-5 bg-[#F0F4FF] rounded-full w-14 h-14 flex items-center justify-center">
                <LayoutGrid className="h-7 w-7 text-[#8F6ED5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Бизнес-сервисы</h3>
              <p className="text-[#6B6B6B]">Доступ к дополнительным сервисам для развития вашего бизнеса.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-[#F0F4FF]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            Что ещё вы получаете со счётом
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl">
              <div className="flex items-start mb-4">
                <div className="bg-[#F0F4FF] rounded-xl p-3 mr-4">
                  <Receipt className="h-6 w-6 text-[#8F6ED5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Онлайн-бухгалтерия</h3>
                  <p className="text-[#6B6B6B]">Автоматизируйте бухгалтерский учёт и сдачу отчётности.</p>
                </div>
              </div>
              <div className="pl-16">
                <ul className="space-y-2">
                  <li className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 mr-2" />
                    <span>Автоматический расчёт налогов</span>
                  </li>
                  <li className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 mr-2" />
                    <span>Электронная отчётность</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl">
              <div className="flex items-start mb-4">
                <div className="bg-[#F0F4FF] rounded-xl p-3 mr-4">
                  <CreditCard className="h-6 w-6 text-[#8F6ED5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Pluse BNPL</h3>
                  <p className="text-[#6B6B6B]">Предлагайте клиентам покупки в рассрочку без рисков.</p>
                </div>
              </div>
              <div className="pl-16">
                <ul className="space-y-2">
                  <li className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 mr-2" />
                    <span>Мгновенное решение по рассрочке</span>
                  </li>
                  <li className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 mr-2" />
                    <span>Увеличение среднего чека</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl">
              <div className="flex items-start mb-4">
                <div className="bg-[#F0F4FF] rounded-xl p-3 mr-4">
                  <Shield className="h-6 w-6 text-[#8F6ED5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Страховка онлайн</h3>
                  <p className="text-[#6B6B6B]">Оформляйте страховые продукты для бизнеса без визита.</p>
                </div>
              </div>
              <div className="pl-16">
                <ul className="space-y-2">
                  <li className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 mr-2" />
                    <span>Страхование имущества</span>
                  </li>
                  <li className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 mr-2" />
                    <span>Страхование ответственности</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl">
              <div className="flex items-start mb-4">
                <div className="bg-[#F0F4FF] rounded-xl p-3 mr-4">
                  <Store className="h-6 w-6 text-[#8F6ED5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">PluseShopping</h3>
                  <p className="text-[#6B6B6B]">Создайте интернет-магазин без программистов.</p>
                </div>
              </div>
              <div className="pl-16">
                <ul className="space-y-2">
                  <li className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 mr-2" />
                    <span>Готовые шаблоны</span>
                  </li>
                  <li className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 mr-2" />
                    <span>Интеграция с маркетплейсами</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Open Account Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            Как открыть счёт
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8F6ED5]/30 hidden md:block"></div>
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-[#8F6ED5] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">Скачайте приложение</h3>
                <p className="text-[#6B6B6B] text-center">Установите приложение Pluse из App Store или Google Play.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8F6ED5]/30 hidden md:block"></div>
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-[#8F6ED5] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">Пройдите регистрацию</h3>
                <p className="text-[#6B6B6B] text-center">Заполните данные и пройдите биометрическую идентификацию.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-[#8F6ED5] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">Получите реквизиты</h3>
                <p className="text-[#6B6B6B] text-center">Реквизиты счёта будут доступны в приложении уже сегодня.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F0F4FF]">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            Часто задаваемые вопросы
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-[#1A1A1A]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#6B6B6B]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#6B6B6B]" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#6B6B6B]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8F6ED5]/20 blur-[100px] z-0"></div>
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[length:20px_20px] z-0"></div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-br from-white to-[#F0F4FF] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                  Начните прямо сейчас — откройте счёт бесплатно
                </h2>
                <p className="text-[#6B6B6B] mb-8">
                  Оставьте заявку, и мы поможем вам открыть счёт за один день. Консультация бесплатна.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <Link href="https://apps.apple.com" className="flex items-center justify-center px-6 py-3 rounded-xl bg-[#1A1A1A] text-white font-medium transition-all hover:bg-[#2A2A2A]">
                    <Download className="h-5 w-5 mr-2" />
                    App Store
                  </Link>
                  
                  <Link href="https://play.google.com" className="flex items-center justify-center px-6 py-3 rounded-xl bg-[#1A1A1A] text-white font-medium transition-all hover:bg-[#2A2A2A]">
                    <Download className="h-5 w-5 mr-2" />
                    Google Play
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Оставить заявку</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-[#6B6B6B] mb-2 text-sm">Номер телефона</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] hover:from-[#7F5EC5] hover:to-[#6F4DB5] text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all">
                    Открыть счёт
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