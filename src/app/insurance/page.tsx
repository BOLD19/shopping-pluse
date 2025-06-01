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
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md relative z-10">
      <h3 className="text-xl font-semibold mb-4 mt-8">Оставить заявку</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8F6ED5] outline-none"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <div className="flex items-center mb-3">
          <span className="inline-block bg-[#F0F4FF] px-3 py-2 rounded-l-xl border border-r-0 border-gray-200 text-[#8F6ED5] font-medium">+7</span>
          <input
            type="tel"
            placeholder="(___) ___-__-__"
            className="w-full px-4 py-3 rounded-r-xl border border-gray-200 focus:border-[#8F6ED5] outline-none"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="privacy" className="mr-2" required />
          <label htmlFor="privacy" className="text-xs text-gray-500">Я согласен с <a href="/privacy" className="underline text-[#8F6ED5]">политикой конфиденциальности</a></label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#8F6ED5] hover:bg-[#7F5EC5] text-white font-medium py-3 px-6 rounded-xl transition-all disabled:opacity-60"
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
            <div className="text-lg font-semibold mb-2">Форма успешно отправлена!</div>
            <div className="text-gray-500 text-sm mb-2">Спасибо! Мы свяжемся с вами в ближайшее время.</div>
            <button
              className="mt-2 px-4 py-2 bg-[#8F6ED5] text-white rounded-xl font-medium hover:bg-[#7F5EC5] transition"
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
    // TODO: Implement proper form submission logic
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '' })
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#181C36] h-[568px] py-8 sm:py-0">
        {/* Геометрические элементы */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
          {/* Большой фиолетовый угол */}
          <div className="absolute top-0 right-0 w-[800px] h-[600px] transform rotate-[-10deg] translate-x-1/4 translate-y-[-10%] bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#FDFCFB] opacity-40 rounded-[40px] transition-all duration-1000"></div>
          {/* Средний угол */}
          <div className="absolute top-1/3 right-0 w-[600px] h-[400px] transform rotate-[-15deg] translate-x-1/3 bg-gradient-to-br from-[#7F5EC5] via-[#5B3FD5] to-[#FDFCFB] opacity-30 rounded-[40px] transition-all duration-1000"></div>
          {/* Маленький угол */}
          <div className="absolute bottom-10 right-1/4 w-[300px] h-[200px] transform rotate-[-5deg] bg-gradient-to-br from-[#6B4FD5] via-[#4B2FD5] to-[#FDFCFB] opacity-20 rounded-[40px] transition-all duration-1000"></div>
        </div>
        {/* Текстовый блок hero */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10 flex items-center min-h-[80vh] sm:min-h-[60vh]">
          <div className="w-full md:max-w-[800px] lg:max-w-[900px] text-left mt-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight text-left break-words px-4">
              Страхование бизнеса<br />без лишних хлопот
          </h1>
            <div className="text-sm sm:text-lg text-white/80 mb-8 max-w-lg text-left px-4">
              Защитите бизнес от рисков — страховые решения от Pluse.kz с лучшими условиями от топовых компаний Казахстана.
            </div>
            <a
              href="https://wa.me/77070607140?text=Здравствуйте!%20Интересует%20страхование%20ТОО.%20Можно%20узнать%20условия?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#8F6ED5] border-2 border-[#8F6ED5] sm:bg-[#8F6ED5] sm:text-white sm:border-none px-4 py-3 text-sm rounded-lg sm:px-8 sm:py-4 sm:text-base sm:rounded-xl hover:bg-[#F0F4FF] sm:hover:bg-[#7F5EC5] transition-all duration-200 ml-4"
            >
              <MessageCircle className="w-5 h-5" />
            Получить консультацию
            </a>
          </div>
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
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-[#8F6ED5] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">Консультация</h3>
                <p className="text-[#6B6B6B] text-center">Оставьте заявку или свяжитесь с нами через WhatsApp для получения бесплатной консультации.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center z-10 relative">
                <div className="bg-[#8F6ED5] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-center">Подбор решения</h3>
                <p className="text-[#6B6B6B] text-center">Наши специалисты подберут оптимальное страховое решение для вашего бизнеса.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
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
      <section className="py-20 relative overflow-hidden bg-[#181C36]">
        {/* Геометрические элементы на фоне */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] transform rotate-[-10deg] translate-x-1/4 translate-y-[-10%] bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#FDFCFB] opacity-40 rounded-[40px] transition-all duration-1000"></div>
          <div className="absolute top-1/3 right-0 w-[600px] h-[400px] transform rotate-[-15deg] translate-x-1/3 bg-gradient-to-br from-[#7F5EC5] via-[#5B3FD5] to-[#FDFCFB] opacity-30 rounded-[40px] transition-all duration-1000"></div>
          <div className="absolute bottom-10 right-1/4 w-[300px] h-[200px] transform rotate-[-5deg] bg-gradient-to-br from-[#6B4FD5] via-[#4B2FD5] to-[#FDFCFB] opacity-20 rounded-[40px] transition-all duration-1000"></div>
                </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Получите индивидуальное предложение для вашего бизнеса</h2>
              <p className="text-lg text-white/80 mb-2">Оставьте заявку, и наш специалист свяжется с вами</p>
              <p className="text-lg text-white/80 mb-8">в течение 15 минут для консультации и подбора оптимального страхового решения.</p>
              </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <InsuranceForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 