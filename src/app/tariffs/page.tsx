'use client'

import Link from 'next/link'
import { CheckIcon } from 'lucide-react'

export default function TariffsPage() {
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
              Тарифы
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
              Прозрачные тарифы без скрытых комиссий. Выберите подходящий тарифный план для вашего бизнеса.
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

      {/* Pricing section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Basic Plan */}
            <div className="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-[#1A1A1A]">Базовый</h3>
                <p className="rounded-full bg-[#F0F4FF] px-2.5 py-1 text-xs font-semibold text-[#8F6ED5]">Для начинающих</p>
              </div>
                <p className="mt-4 text-sm leading-6 text-[#6B6B6B]">Идеально для малого бизнеса<br className='hidden md:block' />и начинающих предпринимателей.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-[#1A1A1A]">2 900 ₸</span>
                <span className="text-sm font-semibold leading-6 text-[#6B6B6B]">/мес</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-[#4A4A4A]">
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>До 100 транзакций в месяц</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Доступ к базовой аналитике</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Email поддержка</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>1 юридическое лицо</span>
                </li>
              </ul>
              </div>
              <div className="mt-auto">
              <Link
                href={`https://wa.me/77474288095?text=${encodeURIComponent('Здравствуйте! Хочу подключить базовый тариф для обслуживания бизнеса')}`}
                className="mt-8 block rounded-2xl bg-[#8F6ED5] px-3 py-4 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7C5CBF] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Выбрать план
              </Link>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-[#8F6ED5] hover:shadow-xl transition-all duration-300">
              <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-[#1A1A1A]">Рост</h3>
                <p className="rounded-full bg-[#F0F4FF] px-2.5 py-1 text-xs font-semibold text-[#8F6ED5]">Популярный</p>
              </div>
                <p className="mt-4 text-sm leading-6 text-[#6B6B6B]">Оптимальный выбор<br className='hidden md:block' />для растущего бизнеса.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-[#1A1A1A]">7 500 ₸</span>
                <span className="text-sm font-semibold leading-6 text-[#6B6B6B]">/мес</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-[#4A4A4A]">
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>До 500 транзакций в месяц</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Расширенная аналитика</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Приоритетная поддержка</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>До 3 юридических лиц</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Интеграция с CRM</span>
                </li>
              </ul>
              </div>
              <div className="mt-auto">
              <Link
                href={`https://wa.me/77474288095?text=${encodeURIComponent('Здравствуйте! Хочу подключить тариф "Рост" для обслуживания бизнеса')}`}
                className="mt-8 block rounded-2xl bg-[#8F6ED5] px-3 py-4 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7C5CBF] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Выбрать план
              </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-[#1A1A1A]">Бизнес</h3>
                <p className="rounded-full bg-[#F0F4FF] px-2.5 py-1 text-xs font-semibold text-[#8F6ED5]">Премиум</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#6B6B6B]">Для крупного бизнеса с высоким объемом операций.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-[#1A1A1A]">19 900 ₸</span>
                <span className="text-sm font-semibold leading-6 text-[#6B6B6B]">/мес</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-[#4A4A4A]">
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Безлимитные транзакции</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Продвинутая аналитика и отчеты</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Персональный менеджер</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Неограниченное число юр. лиц</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>API для интеграции</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-[#8F6ED5]" />
                  <span>Индивидуальные настройки</span>
                </li>
              </ul>
              </div>
              <div className="mt-auto">
              <Link
                href={`https://wa.me/77474288095?text=${encodeURIComponent('Здравствуйте! Хочу подключить тариф "Бизнес" для обслуживания бизнеса')}`}
                className="mt-8 block rounded-2xl bg-[#8F6ED5] px-3 py-4 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7C5CBF] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Выбрать план
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-[#F0F4FF]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">Часто задаваемые вопросы</h2>
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
              Ответы на популярные вопросы о наших тарифах и услугах
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Могу ли я сменить тариф?</h3>
              <p className="mt-4 text-[#6B6B6B]">
                Да, вы можете изменить тарифный план в любое время. Переход на новый тариф вступит в силу с начала следующего расчетного периода.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Есть ли скрытые платежи?</h3>
              <p className="mt-4 text-[#6B6B6B]">
                Нет, мы полностью прозрачны в своей ценовой политике. Вы платите только ту сумму, которая указана в выбранном тарифе.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Доступна ли пробная версия?</h3>
              <p className="mt-4 text-[#6B6B6B]">
                Да, мы предлагаем 14-дневный пробный период для всех новых клиентов, чтобы вы могли оценить возможности нашей платформы.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Что происходит при превышении лимита транзакций?</h3>
              <p className="mt-4 text-[#6B6B6B]">
                При превышении лимита транзакций вашего тарифа взимается дополнительная плата за каждую транзакцию сверх лимита. Мы также рекомендуем рассмотреть переход на более высокий тариф.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">Готовы начать?</h2>
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
              Свяжитесь с нами сегодня, чтобы узнать больше о наших услугах и подобрать оптимальный тариф для вашего бизнеса.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={`https://wa.me/77474288095?text=${encodeURIComponent('Здравствуйте! Хочу узнать подробнее про обслуживание бизнеса у вас.')}`}
                className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Записаться в список ожидания
              </Link>
              <Link
                href="/"
                className="text-[#1A1A1A] hover:text-[#8F6ED5] transition-all duration-300"
              >
                Вернуться на главную <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 