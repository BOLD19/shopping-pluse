'use client'

import Link from 'next/link'

export default function ServicesPage() {
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
              Все сервисы
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
              Все финансовые сервисы Pluse.kz для вашего бизнеса в одном месте.
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Рассрочка (BNPL)', description: 'Предложите клиентам покупки в рассрочку', href: '/bnpl', icon: '💳' },
              { title: 'Pluse.Shopping', description: 'Интернет-магазин под ключ за 1 день', href: '/shopping', icon: '🛍' },
              { title: 'Регистрация ТОО', description: 'Зарегистрируйте ТОО онлайн', href: '/register-company', icon: '📋' },
              { title: 'Страхование', description: 'Страховые продукты для бизнеса', href: '/insurance', icon: '🛡️' },
              { title: 'Бухгалтерия', description: 'Скоро: автоматизация бухгалтерии', href: '/accounting', icon: '🧾', soon: true },
              { title: 'Открытие счета', description: 'Расчетный счет за 5 минут', href: '/account', icon: '💼' },
              { title: 'Бизнес карта', description: 'Удобная карта с кэшбэком', href: '/card', icon: '💰' },
              { title: 'Мобильный и интернет-банк', description: 'Управление финансами 24/7', href: '/banking', icon: '📱' },
            ].map((service, index) => (
              <Link key={index} href={service.href} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="text-3xl mb-4">{service.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-[#1A1A1A]">
                    {service.title}
                  </h3>
                  {service.soon && <span className="text-xs bg-[#E0FF4F] text-[#1A1A1A] px-2 py-0.5 rounded">скоро</span>}
                </div>
                <p className="text-[#4A4A4A]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 