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

function InsuranceForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/telegram-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          phone, 
          utm: 'insurance_page_form' 
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setName('');
        setPhone('');
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const data = await res.json();
        setError(data.error || 'Ошибка отправки');
      }
    } catch (e) {
      setError('Ошибка отправки');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 w-full max-w-md relative z-10">
      <h3 className="text-xl font-semibold text-[#0f172a] mb-4 mt-8">Оставить заявку</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0088f5] outline-none"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <div className="flex items-center mb-3">
          <span className="inline-block bg-[#EBF8FF] px-3 py-2 rounded-l-xl border border-r-0 border-gray-200 text-[#0088f5] font-medium">+7</span>
          <input
            type="tel"
            placeholder="(___) ___-__-__"
            className="w-full px-4 py-3 rounded-r-xl border border-gray-200 focus:border-[#0088f5] outline-none"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="privacy" className="mr-2" required />
          <label htmlFor="privacy" className="text-xs text-[#64748b]">Я согласен с <a href="/privacy" className="underline text-[#0088f5]">политикой конфиденциальности</a></label>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Отправка...' : 'Оставить заявку'}
        </button>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </form>
      {/* Pop-up окно об успехе */}
      {success && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
          onClick={() => setSuccess(false)}
        >
          <div className="bg-white rounded-2xl px-8 py-6 shadow-xl text-center max-w-xs mx-auto">
            <div className="text-2xl mb-2">🎉</div>
            <div className="text-lg font-semibold text-[#0f172a] mb-2">Форма успешно отправлена!</div>
            <div className="text-[#64748b] text-sm mb-2">Спасибо! Мы свяжемся с вами в ближайшее время.</div>
            <button
              className="mt-2 px-4 py-2 bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-xl font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300"
              onClick={() => setSuccess(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function InsurancePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#0f172a]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Страхование бизнеса<br />без лишних хлопот
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Защитите бизнес от рисков — страховые решения от Pluse.kz с лучшими условиями от топовых компаний Казахстана.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/77070607140?text=Здравствуйте!%20Интересует%20страхование%20ТОО.%20Можно%20узнать%20условия?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Получить консультацию
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

      {/* Insurance Products Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Страховые продукты для вашего бизнеса
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Страхование имущества</h3>
              <p className="text-[#64748b] mb-5">Защитите физические активы вашей компании от пожара, наводнения, кражи и других рисков.</p>
              <a href="#contact" className="inline-flex items-center text-[#0088f5] group-hover:text-[#0979ff] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 2 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Страхование ответственности</h3>
              <p className="text-[#64748b] mb-5">Защита от исков третьих лиц, связанных с вашей профессиональной деятельностью.</p>
              <a href="#contact" className="inline-flex items-center text-[#0088f5] group-hover:text-[#0979ff] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 3 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Страхование сотрудников</h3>
              <p className="text-[#64748b] mb-5">Медицинское страхование и страхование от несчастных случаев для ваших сотрудников.</p>
              <a href="#contact" className="inline-flex items-center text-[#0088f5] group-hover:text-[#0979ff] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 4 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Car className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Автострахование</h3>
              <p className="text-[#64748b] mb-5">Комплексное страхование корпоративного автопарка вашей компании.</p>
              <a href="#contact" className="inline-flex items-center text-[#0088f5] group-hover:text-[#0979ff] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 5 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Киберстрахование</h3>
              <p className="text-[#64748b] mb-5">Защита от финансовых потерь в результате кибератак и утечки данных.</p>
              <a href="#contact" className="inline-flex items-center text-[#0088f5] group-hover:text-[#0979ff] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Product Card 6 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Страхование от перерыва в бизнесе</h3>
              <p className="text-[#64748b] mb-5">Компенсация финансовых потерь при вынужденной приостановке деятельности.</p>
              <a href="#contact" className="inline-flex items-center text-[#0088f5] group-hover:text-[#0979ff] font-medium">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pluse Section */}
      <section className="py-24 sm:py-32 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Почему выбирают Pluse для страхования
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Advantage 1 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Экономия времени</h3>
              <p className="text-[#64748b]">Оформление страховки занимает всего несколько минут, без необходимости посещения офиса.</p>
            </div>

            {/* Advantage 2 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCardIcon className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Выгодные условия</h3>
              <p className="text-[#64748b]">Мы сотрудничаем с лучшими страховыми компаниями и получаем для вас специальные условия.</p>
            </div>

            {/* Advantage 3 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Персональный подход</h3>
              <p className="text-[#64748b]">Каждому клиенту предоставляется персональный менеджер для решения любых вопросов.</p>
            </div>

            {/* Advantage 4 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-7 w-7 text-[#0088f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Быстрые выплаты</h3>
              <p className="text-[#64748b]">Мы помогаем ускорить процесс получения выплат по страховым случаям.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Как работает наш сервис
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 text-center">Консультация</h3>
                <p className="text-[#64748b] text-center">Оставьте заявку или свяжитесь с нами через WhatsApp для получения бесплатной консультации.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 text-center">Подбор решения</h3>
                <p className="text-[#64748b] text-center">Наши специалисты подберут оптимальное страховое решение для вашего бизнеса.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 text-center">Оформление</h3>
                <p className="text-[#64748b] text-center">Быстрое оформление договора страхования онлайн без посещения офиса.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 text-center">Сопровождение</h3>
                <p className="text-[#64748b] text-center">Мы остаемся на связи и поможем с урегулированием при наступлении страхового случая.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases Section */}
      <section className="py-24 sm:py-32 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Распространенные кейсы использования
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-[#EBF8FF] rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-6 w-6 text-[#0088f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">Ретейл-бизнес</h3>
              </div>
              <p className="text-[#64748b] mb-4">Страхование товарных запасов, оборудования и гражданской ответственности перед покупателями.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#64748b]">
                  <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                  <span>Защита от кражи и порчи товара</span>
                </li>
                <li className="flex items-center text-[#64748b]">
                  <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                  <span>Страхование от пожара и затопления</span>
                </li>
              </ul>
            </div>

            {/* Case 2 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-[#EBF8FF] rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-6 w-6 text-[#0088f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">IT-компании</h3>
              </div>
              <p className="text-[#64748b] mb-4">Киберстрахование и страхование профессиональной ответственности для защиты бизнеса.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#64748b]">
                  <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                  <span>Защита от исков клиентов</span>
                </li>
                <li className="flex items-center text-[#64748b]">
                  <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                  <span>Страхование от утечки данных</span>
                </li>
              </ul>
            </div>

            {/* Case 3 */}
            <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-[#EBF8FF] rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-[#0088f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">Производство</h3>
              </div>
              <p className="text-[#64748b] mb-4">Комплексное страхование оборудования, зданий и ответственности перед сотрудниками.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#64748b]">
                  <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                  <span>Страхование оборудования</span>
                </li>
                <li className="flex items-center text-[#64748b]">
                  <CheckCircle2 className="h-4 w-4 text-[#0088f5] mr-2" />
                  <span>Страхование от несчастных случаев</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA/Contact Section */}
      <section className="relative isolate overflow-hidden bg-[#0f172a]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Получите индивидуальное предложение для вашего бизнеса
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для консультации и подбора оптимального страхового решения.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/77070607140?text=Здравствуйте!%20Интересует%20страхование%20ТОО.%20Можно%20узнать%20условия?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Получить консультацию
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
    </div>
  )
} 