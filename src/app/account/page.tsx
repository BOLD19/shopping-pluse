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
  CheckCircle2,
  MessageSquare
} from 'lucide-react'
import BnplConditionsBlock from '@/components/bnpl/BnplConditionsBlock'
import BnplBusinessSimplificationBlock from '@/components/bnpl/BnplBusinessSimplificationBlock'
import AccountConditionsBlock from '@/components/AccountConditionsBlock'
import { motion } from 'framer-motion'

export default function AccountPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    phone: ''
  })
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/telegram-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      })
      if (res.ok) {
        setSuccess(true)
        setName('')
        setPhone('')
        setTimeout(() => setSuccess(false), 3000)
      } else {
        const data = await res.json()
        setError(data.error || 'Ошибка отправки')
      }
    } catch (e) {
      setError('Ошибка отправки')
    } finally {
      setLoading(false)
    }
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
    <div className="min-h-screen bg-white">
      <main className="flex-1">
      {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff] pt-32 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
              animate={{ 
                opacity: 0.05,
                scale: 1,
                rotate: -12,
                y: [0, -20, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute top-[5%] right-[15%] w-[400px] h-[400px] bg-[#0088f5] rounded-[100px] transform -rotate-12"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content - Left */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-block mb-4">
                    <span className="text-sm font-medium text-[#0088f5] tracking-wider uppercase">Расчетный счет</span>
                  </div>
                  
                  <h1 className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl mb-6">
                    <span className="text-[#0088f5] relative">
                      Счет для бизнеса
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="absolute bottom-1 left-0 right-0 h-2 bg-[#0979ff] opacity-20 -z-10"
                      />
                    </span>
                    <br />
                    <span className="text-3xl sm:text-4xl lg:text-5xl">за 0 тенге</span>
                  </h1>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-[#64748b] leading-relaxed mb-8"
                  >
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0" />
                        <span>Открытие онлайн</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0" />
                        <span>Персональный менеджер в WhatsApp</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0" />
                        <span>Экосистема сервисов включена</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href="https://wa.me/77474288095?text=Здравствуйте!%20Хочу%20открыть%20бизнес-счет%20в%20Pluse.kz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300 justify-center gap-2"
                    >
                      <Building2 className="w-5 h-5" />
                      Открыть счет
                    </a>

                    <a
                      href="#conditions"
                      className="inline-flex items-center bg-[#f8fafc] text-[#64748b] px-8 py-4 rounded-2xl text-lg font-medium border border-[#f1f5f9] hover:bg-white hover:text-[#0088f5] hover:border-[#0088f5] transition-all duration-300 justify-center gap-2"
                    >
                      <LayoutGrid className="w-5 h-5" />
                      Ознакомиться с условиями
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Illustration - Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9]">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Экосистема для бизнеса</h3>
                    <p className="text-sm text-[#64748b]">Все сервисы в одном месте</p>
                  </div>

                  {/* Business ecosystem illustration */}
                  <div className="relative flex items-center justify-center mb-6">
                    <Image
                      src="/iphone_home.png"
                      alt="Экосистема Pluse для бизнеса"
                      width={250}
                      height={300}
                      className="w-full h-auto max-w-xs object-contain relative z-10"
                      priority
                    />
                  </div>

                  {/* Live manager activity */}
                  <div className="bg-[#f8fafc] rounded-xl p-4 mb-6 border border-[#f1f5f9]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0088f5] to-[#0979ff] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-medium">АМ</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-[#0f172a]">Айдар Менеджер</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-600">онлайн</span>
                        </div>
                        <p className="text-xs text-[#64748b] leading-relaxed mb-2">
                          Помог ТОО "Техносервис" подключить <span className="font-semibold text-[#0088f5]">e-commerce + QR рассрочку</span> за один день
                        </p>
                        <div className="text-xs text-[#0088f5]">1 мин назад</div>
                      </div>
                    </div>
                  </div>

                  {/* Ecosystem features */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl border border-[#f1f5f9]">
                      <div className="w-8 h-8 bg-[#0088f5]/10 rounded-lg flex items-center justify-center">
                        <UserCheck2 className="w-4 h-4 text-[#0088f5]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#0f172a]">Персональный менеджер</div>
                        <div className="text-xs text-[#64748b]">Всегда на связи в WhatsApp</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl border border-[#f1f5f9]">
                      <div className="w-8 h-8 bg-[#0088f5]/10 rounded-lg flex items-center justify-center">
                        <LayoutGrid className="w-4 h-4 text-[#0088f5]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#0f172a]">Экосистема сервисов</div>
                        <div className="text-xs text-[#64748b]">E-commerce, QR рассрочка, страхование</div>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                    <div className="bg-gradient-to-r from-[#0088f5]/5 to-[#0979ff]/5 rounded-xl p-4">
                      <div className="flex items-center justify-center gap-2 text-[#0088f5] text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Открытие за 1 день + бесплатные сервисы</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who Is This For Section - Moved up */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl mb-4">
                Кому <span className="text-[#0088f5]">подходит</span> наш счет
              </h2>
              <p className="text-lg text-[#64748b]">
                Мы работаем с разными видами бизнеса и предлагаем индивидуальные условия
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* For IP and Small Business */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#f8fafc] to-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#0088f5] rounded-2xl flex items-center justify-center">
                    <UserCheck2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0f172a]">ИП и малый бизнес</h3>
                    <p className="text-[#64748b]">До 20 сотрудников</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0f172a]">Упрощенное открытие</div>
                      <div className="text-sm text-[#64748b]">Минимум документов, быстрая регистрация</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0f172a]">Льготные тарифы</div>
                      <div className="text-sm text-[#64748b]">Специальные условия для стартапов</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0f172a]">Помощь в развитии</div>
                      <div className="text-sm text-[#64748b]">Консультации по e-commerce и маркетингу</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0088f5]/5 rounded-xl p-4 border border-[#0088f5]/20">
                  <div className="text-center text-[#0088f5] font-medium">
                    🎯 Идеально для начинающих предпринимателей
                  </div>
                </div>
              </motion.div>

              {/* For Corporate Clients */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-[#f0f9ff] to-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0088f5] to-[#0979ff] rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0f172a]">Корпоративные клиенты</h3>
                    <p className="text-[#64748b]">Средний и крупный бизнес</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0f172a]">Индивидуальные условия</div>
                      <div className="text-sm text-[#64748b]">Персональные тарифы и лимиты</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0f172a]">Расширенная аналитика</div>
                      <div className="text-sm text-[#64748b]">Детальные отчеты и прогнозы</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0f172a]">Приоритетная поддержка</div>
                      <div className="text-sm text-[#64748b]">Выделенный менеджер и быстрое решение вопросов</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#0088f5]/5 to-[#0979ff]/5 rounded-xl p-4 border border-[#0088f5]/20">
                  <div className="text-center text-[#0088f5] font-medium">
                    🏢 Решения enterprise-уровня
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-4">
                Почему <span className="text-[#0088f5]">Pluse</span> — ваш лучший партнер
              </h2>
              <p className="text-lg text-[#64748b]">
                Мы не просто предоставляем банковские услуги — мы помогаем бизнесу расти
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0088f5] mb-6">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Открытие за 1 день</h3>
                <p className="text-[#64748b] leading-relaxed">Полностью онлайн без визита в банк — только смартфон и 15 минут времени</p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0088f5] mb-6">
                  <UserCheck2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Персональный менеджер</h3>
                <p className="text-[#64748b] leading-relaxed">Ваш личный помощник в WhatsApp — всегда на связи и отвечает в течение 5 минут</p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0088f5] mb-6">
                  <LayoutGrid className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Экосистема сервисов</h3>
                <p className="text-[#64748b] leading-relaxed">E-commerce, QR рассрочка, страхование — все бесплатно и уже готово к использованию</p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0088f5] mb-6">
                  <Wallet className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Прозрачные тарифы</h3>
                <p className="text-[#64748b] leading-relaxed">Никаких скрытых комиссий — все условия честные и понятные с первого дня</p>
              </motion.div>

              {/* Feature 5 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0088f5] mb-6">
                  <Smartphone className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Современный интерфейс</h3>
                <p className="text-[#64748b] leading-relaxed">Удобное мобильное приложение и веб-платформа для управления всеми операциями</p>
              </motion.div>

              {/* Feature 6 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-3xl p-8 border border-[#f1f5f9] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#0088f5] to-[#0979ff] mb-6">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Для любого бизнеса</h3>
                <p className="text-[#64748b] leading-relaxed">Подходит для ИП, ТОО и корпораций — индивидуальные условия для каждого</p>
              </motion.div>
            </div>

            {/* Partnership Statement */}
            <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-[#f1f5f9] text-center">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                Мы — ваш <span className="text-[#0088f5]">партнер в бизнесе</span>
              </h3>
              <p className="text-lg text-[#64748b] mb-6 max-w-3xl mx-auto">
                Pluse не просто банк — мы команда, которая помогает вашему бизнесу расти. 
                Каждый клиент получает не только счет, но и целую экосистему для развития.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0088f5] mb-2">500+</div>
                  <div className="text-sm text-[#64748b]">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0088f5] mb-2">5</div>
                  <div className="text-sm text-[#64748b]">бесплатных сервисов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0088f5] mb-2">24/7</div>
                  <div className="text-sm text-[#64748b]">поддержка менеджера</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Growth Stories Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-4">
                Как <span className="text-[#0088f5]">экосистема Pluse</span> помогает бизнесу расти
              </h2>
              <p className="text-lg text-[#64748b]">
                Реальные истории наших клиентов о том, как дополнительные сервисы увеличили их прибыль
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Story 1 - E-commerce Success */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#0088f5] rounded-2xl flex items-center justify-center">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a]">ТОО "КазСпорт"</h3>
                    <p className="text-[#64748b]">Спортивные товары</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <h4 className="font-semibold text-[#0f172a] mb-2">Задача:</h4>
                    <p className="text-[#64748b] text-sm">Хотели продавать онлайн, но создание интернет-магазина казалось сложным и дорогим</p>
                  </div>
                  
                  <div className="bg-[#0088f5]/5 rounded-xl p-4 border border-[#0088f5]/20">
                    <h4 className="font-semibold text-[#0f172a] mb-2">Решение Pluse:</h4>
                    <p className="text-[#64748b] text-sm">Запустили интернет-магазин за 1 день + подключили QR рассрочку</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">Результат:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">+340%</div>
                        <div className="text-xs text-green-700">рост продаж</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">+180%</div>
                        <div className="text-xs text-green-700">средний чек</div>
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#0088f5] pl-4 italic text-[#64748b]">
                  "За 3 месяца онлайн-продажи стали составлять 60% от общего оборота. Рассрочка помогла увеличить средний чек почти в 2 раза."
                </blockquote>
              </motion.div>

              {/* Story 2 - QR Installment Success */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a]">ИП "Техно-Мир"</h3>
                    <p className="text-[#64748b]">Электроника и техника</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-purple-100">
                    <h4 className="font-semibold text-[#0f172a] mb-2">Задача:</h4>
                    <p className="text-[#64748b] text-sm">Клиенты часто отказывались от дорогих покупок из-за нехватки средств</p>
                  </div>
                  
                  <div className="bg-purple-500/5 rounded-xl p-4 border border-purple-500/20">
                    <h4 className="font-semibold text-[#0f172a] mb-2">Решение Pluse:</h4>
                    <p className="text-[#64748b] text-sm">Внедрили QR рассрочку от всех банков — одним QR-кодом</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">Результат:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">+85%</div>
                        <div className="text-xs text-green-700">конверсия</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">₸2.8М</div>
                        <div className="text-xs text-green-700">средний чек</div>
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-[#64748b]">
                  "Теперь клиенты покупают iPhone на 500 тысяч тенге в рассрочку, а не откладывают покупку на потом. Оборот вырос в разы."
                </blockquote>
              </motion.div>
            </div>

            {/* What's Included */}
            <div className="bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff] rounded-3xl p-8 border border-[#f1f5f9]">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                  Всё это <span className="text-[#0088f5]">бесплатно</span> со счетом
                </h3>
                <p className="text-[#64748b]">Экосистема стоимостью ₸500,000+ включена в ваш бизнес-счет</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0088f5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Store className="w-8 h-8 text-[#0088f5]" />
                  </div>
                  <h4 className="font-bold text-[#0f172a] mb-2">E-commerce платформа</h4>
                  <p className="text-sm text-[#64748b]">Обычная стоимость: ₸150,000</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0088f5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-[#0088f5]" />
                  </div>
                  <h4 className="font-bold text-[#0f172a] mb-2">QR рассрочка</h4>
                  <p className="text-sm text-[#64748b]">Обычная стоимость: ₸200,000</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0088f5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Receipt className="w-8 h-8 text-[#0088f5]" />
                  </div>
                  <h4 className="font-bold text-[#0f172a] mb-2">Онлайн-бухгалтерия</h4>
                  <p className="text-sm text-[#64748b]">Обычная стоимость: ₸100,000</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0088f5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#0088f5]" />
                  </div>
                  <h4 className="font-bold text-[#0f172a] mb-2">Страхование</h4>
                  <p className="text-sm text-[#64748b]">Обычная стоимость: ₸50,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opening Process with Benefits */}
        <section className="py-20 bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-4">
                От заявки до <span className="text-[#0088f5]">растущего бизнеса</span> за 24 часа
              </h2>
              <p className="text-lg text-[#64748b]">
                Пошаговый путь к экосистеме, которая увеличит ваши продажи
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-[#f1f5f9]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#0088f5] rounded-xl flex items-center justify-center text-white font-bold text-xl">1</div>
                      <h3 className="text-xl font-bold text-[#0f172a]">Подача заявки</h3>
                    </div>
                    <p className="text-[#64748b] mb-4">Свяжитесь с нами в WhatsApp или заполните форму</p>
                    <div className="bg-[#0088f5]/5 rounded-xl p-3">
                      <div className="text-sm font-medium text-[#0088f5]">⏱ Время: 2 минуты</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="bg-[#f8fafc] rounded-2xl p-6 border border-[#f1f5f9]">
                      <h4 className="font-semibold text-[#0f172a] mb-3">Что происходит сразу:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                          <span className="text-[#64748b] text-sm">Персональный менеджер связывается с вами в течение 5 минут</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                          <span className="text-[#64748b] text-sm">Консультируем по всем возможностям экосистемы</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                          <span className="text-[#64748b] text-sm">Помогаем спланировать стратегию роста</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-[#f1f5f9]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1 lg:order-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#0088f5] rounded-xl flex items-center justify-center text-white font-bold text-xl">2</div>
                      <h3 className="text-xl font-bold text-[#0f172a]">Биометрия и документы</h3>
                    </div>
                    <p className="text-[#64748b] mb-4">Проходите биометрию в приложении и загружаете документы</p>
                    <div className="bg-[#0088f5]/5 rounded-xl p-3">
                      <div className="text-sm font-medium text-[#0088f5]">⏱ Время: 10 минут</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 lg:order-1">
                    <div className="bg-[#f8fafc] rounded-2xl p-6 border border-[#f1f5f9]">
                      <h4 className="font-semibold text-[#0f172a] mb-3">Пока вы проходите биометрию, мы:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                          <span className="text-[#64748b] text-sm">Создаем макет вашего интернет-магазина</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                          <span className="text-[#64748b] text-sm">Настраиваем систему QR рассрочки</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                          <span className="text-[#64748b] text-sm">Подготавливаем интеграции с вашими системами</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-[#f1f5f9]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#0088f5] rounded-xl flex items-center justify-center text-white font-bold text-xl">3</div>
                      <h3 className="text-xl font-bold text-[#0f172a]">Запуск экосистемы</h3>
                    </div>
                    <p className="text-[#64748b] mb-4">Получаете полностью готовую экосистему для роста</p>
                    <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                      <div className="text-sm font-medium text-green-700">🚀 Старт через 24 часа</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="bg-gradient-to-r from-[#0088f5]/5 to-[#0979ff]/5 rounded-2xl p-6 border border-[#0088f5]/20">
                      <h4 className="font-semibold text-[#0f172a] mb-3">Что вы получаете в первый день:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                            <span className="text-[#64748b] text-sm">Готовый счет с реквизитами</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                            <span className="text-[#64748b] text-sm">Интернет-магазин с вашими товарами</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                            <span className="text-[#64748b] text-sm">QR-код для рассрочки</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                            <span className="text-[#64748b] text-sm">Подключенная бухгалтерия</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                            <span className="text-[#64748b] text-sm">Персональный менеджер в WhatsApp</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0088f5]" />
                            <span className="text-[#64748b] text-sm">План роста на первые 3 месяца</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Success Results */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl mb-4">
                Результаты наших клиентов
              </h2>
              <p className="text-lg text-[#64748b]">
                Цифры говорят лучше любых обещаний
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100"
              >
                <div className="text-3xl font-bold text-[#0088f5] mb-2">+280%</div>
                <div className="text-sm text-[#64748b] mb-1">средний рост продаж</div>
                <div className="text-xs text-[#0088f5]">после запуска e-commerce</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">+150%</div>
                <div className="text-sm text-[#64748b] mb-1">увеличение среднего чека</div>
                <div className="text-xs text-green-600">благодаря QR рассрочке</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">24ч</div>
                <div className="text-sm text-[#64748b] mb-1">от заявки до старта</div>
                <div className="text-xs text-purple-600">самый быстрый запуск</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">₸0</div>
                <div className="text-sm text-[#64748b] mb-1">стоимость экосистемы</div>
                <div className="text-xs text-orange-600">всё включено бесплатно</div>
              </motion.div>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#f8fafc] to-white p-8 rounded-3xl border border-[#f1f5f9] shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-bold">АТ</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#0f172a]">Айдар Темиров</div>
                    <div className="text-sm text-[#64748b]">Директор ТОО "ТехноСервис"</div>
                  </div>
                </div>
                <blockquote className="text-[#64748b] leading-relaxed mb-4">
                  "Раньше мы были обычным магазином электроники. Pluse помог нам стать технологичной компанией. 
                  Интернет-магазин, рассрочка, автоматическая бухгалтерия — всё работает как часы."
                </blockquote>
                <div className="text-2xl font-bold text-[#0088f5]">Выручка выросла в 4 раза за полгода</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-[#f0f9ff] to-white p-8 rounded-3xl border border-[#f1f5f9] shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-bold">МК</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#0f172a]">Мадина Касымова</div>
                    <div className="text-sm text-[#64748b]">Владелица сети "Модный дом"</div>
                  </div>
                </div>
                <blockquote className="text-[#64748b] leading-relaxed mb-4">
                  "Персональный менеджер — это невероятно! Любой вопрос решается в WhatsApp за минуты. 
                  Чувствую себя как VIP-клиент, хотя у меня небольшой бизнес."
                </blockquote>
                <div className="text-2xl font-bold text-[#0088f5]">Сэкономили 20 часов в неделю</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#0088f5]/10 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#0979ff]/10 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
                Готовы увеличить прибыль <span className="text-[#0088f5]">в разы?</span>
              </h2>
              <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
                Не просто счет — полная экосистема для роста вашего бизнеса. 
                Все сервисы бесплатно, запуск за 24 часа, персональный менеджер.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Benefits Summary */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1f5f9]">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Что вы получаете прямо сейчас:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0088f5] rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#64748b]"><strong>Бесплатный счет</strong> — никаких скрытых комиссий</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0088f5] rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#64748b]"><strong>Экосистема</strong> стоимостью ₸500,000+ бесплатно</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0088f5] rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#64748b]"><strong>Персональный менеджер</strong> 24/7 в WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0088f5] rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#64748b]"><strong>Готово за 24 часа</strong> — начинайте зарабатывать завтра</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#0088f5]/5 to-[#0979ff]/5 rounded-2xl p-6 border border-[#0088f5]/20">
                  <div className="text-center">
                    <div className="text-sm text-[#0088f5] font-medium mb-2">🚀 Гарантия результата</div>
                    <div className="text-lg font-bold text-[#0f172a]">
                      Если через месяц ваши продажи не вырастут — вернем все вложения
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto w-full max-w-md"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#f1f5f9] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-[#0088f5]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                      Начните зарабатывать больше
                    </h3>
                    <p className="text-[#64748b] mb-8">
                      Получите экосистему для роста уже завтра
                    </p>
                    <div className="space-y-4">
                      <a
                        href="https://wa.me/77474288095?text=Здравствуйте!%20Хочу%20открыть%20бизнес-счет%20в%20Pluse.kz%20и%20получить%20экосистему%20для%20роста"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Building2 className="w-5 h-5" />
                        Получить экосистему
                      </a>
                      
                      <p className="text-xs text-[#64748b]">
                        Персональный менеджер свяжется с вами в течение 5 минут
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-4">
                Что входит в бизнес-счет
              </h2>
              <p className="text-lg text-[#64748b]">
                Простое объяснение того, что вы получаете помимо обычного расчетного счета
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* E-commerce */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-[#f1f5f9] shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Store className="w-6 h-6 text-[#0088f5]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Интернет-магазин</h3>
                <p className="text-[#64748b] text-sm mb-3">Готовый сайт для онлайн-продаж с возможностью настройки под ваш бренд</p>
                <div className="text-xs text-[#0088f5] bg-blue-50 rounded-lg px-2 py-1 inline-block">Бесплатно</div>
              </motion.div>

              {/* QR Installments */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#f1f5f9] shadow-sm"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">QR рассрочка</h3>
                <p className="text-[#64748b] text-sm mb-3">Один QR-код для рассрочки от разных банков — клиенты выбирают сами</p>
                <div className="text-xs text-purple-600 bg-purple-50 rounded-lg px-2 py-1 inline-block">Бесплатно</div>
              </motion.div>

              {/* Online Accounting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-[#f1f5f9] shadow-sm"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <Receipt className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Учет и отчеты</h3>
                <p className="text-[#64748b] text-sm mb-3">Автоматический учет операций и формирование базовых отчетов</p>
                <div className="text-xs text-green-600 bg-green-50 rounded-lg px-2 py-1 inline-block">Бесплатно</div>
              </motion.div>

              {/* Personal Manager */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-[#f1f5f9] shadow-sm"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  <UserCheck2 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Поддержка</h3>
                <p className="text-[#64748b] text-sm mb-3">Персональный менеджер в WhatsApp для решения любых вопросов</p>
                <div className="text-xs text-orange-600 bg-orange-50 rounded-lg px-2 py-1 inline-block">Включено</div>
              </motion.div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#f1f5f9] text-center">
              <p className="text-[#64748b]">
                <span className="font-medium text-[#0f172a]">Важно:</span> Все дополнительные сервисы — опциональные. 
                Можете использовать только нужные вам или вообще только расчетный счет.
              </p>
            </div>
          </div>
        </section>

        {/* How to Open Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-4">
                Как открыть счет
              </h2>
              <p className="text-lg text-[#64748b]">
                Процесс стандартный, как и в других банках, но полностью онлайн
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0088f5] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Заявка</h3>
                  <p className="text-[#64748b] mb-4">
                    Заполните форму или напишите в WhatsApp. Расскажем про условия и требования.
                  </p>
                  <div className="text-sm text-[#0088f5] bg-blue-50 rounded-lg px-3 py-1 inline-block">
                    5 минут
                  </div>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0088f5] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Документы</h3>
                  <p className="text-[#64748b] mb-4">
                    Биометрия через приложение, загрузка документов. Все как обычно, только онлайн.
                  </p>
                  <div className="text-sm text-[#0088f5] bg-blue-50 rounded-lg px-3 py-1 inline-block">
                    15 минут
                  </div>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0088f5] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Готово</h3>
                  <p className="text-[#64748b] mb-4">
                    Проверяем документы, открываем счет. Реквизиты приходят в приложение.
                  </p>
                  <div className="text-sm text-[#0088f5] bg-blue-50 rounded-lg px-3 py-1 inline-block">
                    1-2 дня
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-4">
                Частые вопросы
              </h2>
              <p className="text-lg text-[#64748b]">
                Ответы на практические вопросы об открытии и ведении счета
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 ${
                    openFaq === index ? 'shadow-lg' : 'shadow-sm'
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium text-[#0f172a] pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-[#0088f5] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#64748b] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-[#64748b] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Additional FAQ items */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 ${
                  openFaq === 4 ? 'shadow-lg' : 'shadow-sm'
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(4)}
                >
                  <span className="text-lg font-medium text-[#0f172a] pr-4">Обязательно ли использовать дополнительные сервисы?</span>
                  {openFaq === 4 ? (
                    <ChevronUp className="h-5 w-5 text-[#0088f5] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#64748b] flex-shrink-0" />
                  )}
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-5">
                    <p className="text-[#64748b] leading-relaxed">
                      Нет, все дополнительные сервисы опциональные. Можете использовать только расчетный счет, 
                      если вам не нужны e-commerce, рассрочка или онлайн-бухгалтерия.
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 ${
                  openFaq === 5 ? 'shadow-lg' : 'shadow-sm'
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(5)}
                >
                  <span className="text-lg font-medium text-[#0f172a] pr-4">Какие есть ограничения по операциям?</span>
                  {openFaq === 5 ? (
                    <ChevronUp className="h-5 w-5 text-[#0088f5] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#64748b] flex-shrink-0" />
                  )}
                </button>
                {openFaq === 5 && (
                  <div className="px-6 pb-5">
                    <p className="text-[#64748b] leading-relaxed">
                      Стандартные банковские ограничения. Детальные тарифы и лимиты обсуждаются индивидуально 
                      в зависимости от вида деятельности и оборотов компании.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff] rounded-3xl p-8 lg:p-12 border border-[#f1f5f9]">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
                  Есть вопросы? Обращайтесь
                </h2>
                <p className="text-lg text-[#64748b] mb-8">
                  Расскажем подробно про условия, поможем разобраться с документами 
                  или просто ответим на любые вопросы
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/77474288095?text=Здравствуйте!%20У%20меня%20есть%20вопросы%20по%20открытию%20бизнес-счета"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-lg hover:bg-[#0979ff] hover:shadow-xl transition-all duration-300 gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Написать в WhatsApp
                  </a>

                  <div className="text-[#64748b]">
                    или позвонить: <span className="font-medium text-[#0f172a]">+7 (747) 428-80-95</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Блок условий */}
        <AccountConditionsBlock />
      </main>
    </div>
  )
} 