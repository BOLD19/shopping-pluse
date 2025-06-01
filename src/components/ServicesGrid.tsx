import Link from 'next/link'

export default function ServicesGrid() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
            Все сервисы Pluse.kz
          </h2>
          <p className="mt-3 sm:mt-6 text-[14px] sm:text-lg leading-[1.4] sm:leading-8 text-[#4A4A4A]">
            Все финансовые сервисы для вашего бизнеса в одном месте
          </p>
        </div>
        <div className="mt-8 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Рассрочка (BNPL)', description: 'Продавайте клиентам в рассрочку на 24 месяца круглый год', href: '/bnpl', icon: '💳', highlight: true },
            { title: 'Pluse.Shopping', description: 'Интернет-магазин под ключ за 1 день', href: '/shopping', icon: '🛍', soon: true },
            { title: 'Регистрация ТОО', description: 'Зарегистрируйте ТОО онлайн', href: '/register-company', icon: '📋', soon: true },
            { title: 'Страхование ОСНС', description: 'Оформим за 1 день, чтобы вы не нарвались на штраф и были спокойны перед проверкой', href: '/insurance', icon: '🛡️' },
            { title: 'Бухгалтерия', description: 'Скоро: автоматизация бухгалтерии', href: '/accounting', icon: '🧾', soon: true },
            { title: 'Открытие счета', description: 'Расчетный счет за 5 минут', href: '/account', icon: '💼', soon: true },
            { title: 'Бизнес карта', description: 'Удобная карта с кэшбэком', href: '/card', icon: '💰', soon: true },
            { title: 'Мобильный и интернет-банк', description: 'Управление финансами 24/7', href: '/banking', icon: '📱', soon: true },
          ].map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300${service.highlight ? ' cursor-pointer' : ''}`}
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{service.icon}</div>
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">
                  {service.title}
                </h3>
                {service.soon && <span className="text-xs bg-[#E0FF4F] text-[#1A1A1A] px-2 py-0.5 rounded">скоро</span>}
              </div>
              <p className="text-[14px] sm:text-base text-[#4A4A4A]">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 