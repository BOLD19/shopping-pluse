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
import BnplConditionsBlock from '@/components/bnpl/BnplConditionsBlock'
import BnplBusinessSimplificationBlock from '@/components/bnpl/BnplBusinessSimplificationBlock'
import AccountConditionsBlock from '@/components/AccountConditionsBlock'

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
        <section className="relative isolate overflow-hidden bg-[#0f172a]">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Откройте счёт для бизнеса за 1 день — полностью онлайн
            </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Без визита в банк, всё через приложение Pluse. Начните пользоваться счётом уже сегодня.
            </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/77474288095?text=Здравствуйте!%20Хочу%20открыть%20бизнес-счет%20в%20Pluse.kz"
                target="_blank"
                rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Записаться в список ожидания
                  <ArrowRight className="w-5 h-5" />
              </a>
          </div>
            </div>
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

      {/* Why Choose Us Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Почему открывают счёт у нас
          </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-[#0088f5]" />
              </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Бесплатное открытие</h3>
                <p className="text-[#64748b]">Откройте счёт без визита в банк и дополнительных расходов.</p>
            </div>

            {/* Feature 2 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-7 w-7 text-[#0088f5]" />
              </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Счёт за 1 день</h3>
                <p className="text-[#64748b]">Получите доступ к счёту и начните пользоваться им уже сегодня.</p>
            </div>

            {/* Feature 3 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <UserCheck2 className="h-7 w-7 text-[#0088f5]" />
              </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Простая регистрация</h3>
                <p className="text-[#64748b]">Только регистрация и биометрия в приложении, без лишних документов.</p>
            </div>

            {/* Feature 4 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-7 w-7 text-[#0088f5]" />
              </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Для ТОО и ИП</h3>
                <p className="text-[#64748b]">Подходит для всех форм бизнеса с одинаково простым процессом.</p>
            </div>

            {/* Feature 5 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-7 w-7 text-[#0088f5]" />
              </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Мобильный банк</h3>
                <p className="text-[#64748b]">Управляйте счётом через удобное мобильное приложение.</p>
            </div>

            {/* Feature 6 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LayoutGrid className="h-7 w-7 text-[#0088f5]" />
              </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Бизнес-сервисы</h3>
                <p className="text-[#64748b]">Доступ к дополнительным сервисам для развития вашего бизнеса.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
        <section className="py-24 sm:py-32 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Что ещё вы получаете со счётом
          </h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start mb-4">
                  <div className="bg-[#EBF8FF] rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Receipt className="h-6 w-6 text-[#0088f5]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">Онлайн-бухгалтерия</h3>
                    <p className="text-[#64748b]">Автоматизируйте бухгалтерский учёт и сдачу отчётности.</p>
                </div>
              </div>
              <div className="pl-16">
                <ul className="space-y-2">
                    <li className="flex items-center text-[#64748b]">
                      <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                    <span>Автоматический расчёт налогов</span>
                  </li>
                    <li className="flex items-center text-[#64748b]">
                      <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                    <span>Электронная отчётность</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start mb-4">
                  <div className="bg-[#EBF8FF] rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="h-6 w-6 text-[#0088f5]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">Рассрочка QR</h3>
                    <p className="text-[#64748b]">Предлагайте клиентам покупки в рассрочку без рисков.</p>
                </div>
              </div>
              <div className="pl-16">
                <ul className="space-y-2">
                    <li className="flex items-center text-[#64748b]">
                      <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                    <span>Мгновенное решение по рассрочке</span>
                  </li>
                    <li className="flex items-center text-[#64748b]">
                      <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                    <span>Увеличение среднего чека</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start mb-4">
                  <div className="bg-[#EBF8FF] rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-[#0088f5]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">Страховка онлайн</h3>
                    <p className="text-[#64748b]">Оформляйте страховые продукты для бизнеса без визита.</p>
                </div>
              </div>
              <div className="pl-16">
                <ul className="space-y-2">
                    <li className="flex items-center text-[#64748b]">
                      <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                    <span>Страхование имущества</span>
                  </li>
                    <li className="flex items-center text-[#64748b]">
                      <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                    <span>Страхование ответственности</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
              <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start mb-4">
                  <div className="bg-[#EBF8FF] rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Store className="h-6 w-6 text-[#0088f5]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">E-commerce</h3>
                    <p className="text-[#64748b]">Создайте интернет-магазин без программистов.</p>
                </div>
              </div>
              <div className="pl-16">
                <ul className="space-y-2">
                    <li className="flex items-center text-[#64748b]">
                      <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                    <span>Готовые шаблоны</span>
                  </li>
                    <li className="flex items-center text-[#64748b]">
                      <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                    <span>Интеграция с маркетплейсами</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Open Account Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Как открыть счёт
          </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                  <div className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">1</div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3 text-center">Скачайте приложение</h3>
                  <p className="text-[#64748b] text-center">Установите приложение Pluse из App Store или Google Play.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                  <div className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">2</div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3 text-center">Пройдите регистрацию</h3>
                  <p className="text-[#64748b] text-center">Заполните данные и пройдите биометрическую идентификацию.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                  <div className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">3</div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3 text-center">Получите реквизиты</h3>
                  <p className="text-[#64748b] text-center">Реквизиты счёта будут доступны в приложении уже сегодня.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
        <section className="py-24 sm:py-32 bg-[#f8fafc]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Часто задаваемые вопросы
          </h2>
            </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                  className={`bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-300 ${openFaq === index ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : ''}`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                    <span className="text-lg font-medium text-[#0f172a]">{faq.question}</span>
                  {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-[#0088f5]" />
                  ) : (
                      <ChevronDown className="h-5 w-5 text-[#64748b]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                      <p className="text-[#64748b]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="relative isolate overflow-hidden bg-[#0f172a]">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Начните пользоваться счётом уже сегодня
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Откройте счёт за 1 день и получите доступ ко всем бизнес-сервисам Pluse.kz
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/77474288095?text=Здравствуйте!%20Хочу%20открыть%20бизнес-счет%20в%20Pluse.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  Открыть счёт
                </a>
              </div>
            </div>
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

        {/* Блок условий */}
        <AccountConditionsBlock />
      </main>
    </div>
  )
} 