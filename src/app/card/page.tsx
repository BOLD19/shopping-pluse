'use client'

import Link from 'next/link'
import { CreditCard, Shield, Clock, BarChart3, Users, Zap, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function BusinessCardPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative isolate pt-32 pb-20">
        {/* Radial gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_30%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white opacity-90"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-6xl">
              Бизнес карта
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
              Удобная бизнес-карта с кэшбэком и контролем расходов. Управляйте корпоративными финансами эффективно.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/register-company"
                className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
              >
                Получить карту
              </Link>
              <Link
                href="/"
                className="text-[#8F6ED5] px-8 py-4 rounded-2xl text-base font-medium border-2 border-[#8F6ED5] hover:bg-[#F0F4FF] transition-all duration-300"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#8F6ED5]">Преимущества</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Всё необходимое для вашего бизнеса
            </p>
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
              Бизнес-карта Pluse - это современное решение для управления корпоративными финансами
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#1A1A1A]">
                  <CreditCard className="h-5 w-5 flex-none text-[#8F6ED5]" />
                  Удобные платежи
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#4A4A4A]">
                  <p className="flex-auto">Бесконтактные платежи, онлайн-оплата и мгновенные переводы между счетами</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#1A1A1A]">
                  <Shield className="h-5 w-5 flex-none text-[#8F6ED5]" />
                  Безопасность
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#4A4A4A]">
                  <p className="flex-auto">Защита от мошенничества, 3D Secure и мгновенные уведомления о транзакциях</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#1A1A1A]">
                  <BarChart3 className="h-5 w-5 flex-none text-[#8F6ED5]" />
                  Контроль расходов
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#4A4A4A]">
                  <p className="flex-auto">Детальная аналитика, категоризация расходов и установка лимитов</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="bg-[#F0F4FF] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#8F6ED5]">Выгоды</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Почему стоит выбрать нашу карту
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#1A1A1A]">
                  <Zap className="h-5 w-5 flex-none text-[#8F6ED5]" />
                  Кэшбэк до 5%
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#4A4A4A]">
                  <p className="flex-auto">Возвращаем до 5% от каждой покупки на карту</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#1A1A1A]">
                  <Clock className="h-5 w-5 flex-none text-[#8F6ED5]" />
                  Мгновенное пополнение
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#4A4A4A]">
                  <p className="flex-auto">Пополняйте карту мгновенно с любого счета</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#1A1A1A]">
                  <Users className="h-5 w-5 flex-none text-[#8F6ED5]" />
                  Мультивалютность
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#4A4A4A]">
                  <p className="flex-auto">Платите в любой валюте по выгодному курсу</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-[#F0F4FF]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Готовы начать?
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
                Получите бизнес-карту Pluse уже сегодня и обновите подход к управлению финансами вашей компании
              </p>
              <div className="mt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A]">
                      Ваше имя
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-[#8F6ED5] focus:ring-[#8F6ED5] sm:text-sm p-3"
                        placeholder="Иван Иванов"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A]">
                      Номер телефона
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-[#8F6ED5] focus:ring-[#8F6ED5] sm:text-sm p-3"
                        placeholder="+7 (777) 777-77-77"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                    >
                      Оформить карту
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#8F6ED5] rounded-full opacity-10"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#8F6ED5] rounded-full opacity-10"></div>
              <div className="relative z-10">
                <img
                  src="/card-illustration.svg"
                  alt="Бизнес карта Pluse"
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback если изображение не загрузится
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#8F6ED5]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#8F6ED5]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#8F6ED5]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 