'use client'

import { useState } from 'react'
import { Check, ArrowRight, PhoneCall, Smartphone, Sofa, GraduationCap, Stethoscope, Home, ShoppingBag, ShieldCheck, PiggyBank, MapPin, CreditCard, UserRound, Calendar, Banknote, Percent, QrCode, Headset, MessageCircle, AlertCircle, Ban, UserX, ShieldOff, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BnplPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })
  const [phoneError, setPhoneError] = useState('')

  // Состояние для калькулятора
  const [calculator, setCalculator] = useState({
    price: 100000,
    term: 12,
    commission: 3,
    type: 'installment'
  })

  // Добавляем состояние для pop-up окон
  const [showPopups, setShowPopups] = useState({
    price: false,
    term: false,
    commission: false
  })

  // Обработчик изменений для калькулятора
  const handleCalculatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCalculator(prev => ({
      ...prev,
      [name]: parseInt(value)
    }))
  }

  // Расчеты для калькулятора
  const commissionAmount = Math.round(calculator.price * (calculator.commission / 100))
  const finalAmount = calculator.price - commissionAmount
  const monthlyPayment = Math.round(calculator.price / calculator.term)

  // Форматирование чисел
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    // Очищаем ошибку при изменении номера
    if (name === 'phone') {
      setPhoneError('')
    }
    
    // Убираем все нецифровые символы из номера
    const phoneValue = name === 'phone' ? value.replace(/\D/g, '') : value
    
    setFormData({
      ...formData,
      [name]: phoneValue
    })
  }

  // Отправка сообщения в Telegram
  const sendTelegramMessage = async (name: string, phone: string) => {
    const token = '8017614856:AAGdZg1ipHv5pDDZTfBlACaGhBOpqDH7oJc';
    const chatId = '5639011935';
    const message = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });
  };

  // Обработка отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObj = new FormData(e.target as HTMLFormElement);
    const name = formDataObj.get('name') || '';
    const phone = formDataObj.get('phone') || '';

    await sendTelegramMessage(name.toString().trim(), phone.toString().trim());

    alert('Спасибо! Ваша заявка отправлена.');
    (e.target as HTMLFormElement).reset();
    setFormData({ name: '', phone: '' });
    setPhoneError('');
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="flex-1">
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
          {/* Текстовый блок hero с теми же отступами, что и "Повышаем шанс одобрения" */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10 flex items-center min-h-[80vh] sm:min-h-[60vh]">
            <div className="w-full md:max-w-[800px] lg:max-w-[900px] text-left mt-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight text-left break-words px-4">
                Помогаем предпринимателям<br />не терять прибыль <span className='whitespace-nowrap'>на рассрочках</span>
              </h1>
              <div className="text-sm sm:text-lg text-white/80 mb-8 max-w-lg text-left px-4">
                <ul className="list-none space-y-2">
                  <li><span className="inline-block align-middle mr-2">—</span>Процент одобрения — до 60%</li>
                  <li><span className="inline-block align-middle mr-2">—</span>Вы выбираете срок и проценты</li>
                  <li><span className="inline-block align-middle mr-2">—</span>от 3% на 36 месяцев</li>
                </ul>
              </div>
              <a
                href="https://wa.me/77001112233?text=Здравствуйте!%20Хочу%20узнать%20условия%20рассрочки%20BNPL%20от%20Pluse.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#8F6ED5] border-2 border-[#8F6ED5] sm:bg-[#8F6ED5] sm:text-white sm:border-none px-4 py-3 text-sm rounded-lg sm:px-8 sm:py-4 sm:text-base sm:rounded-xl hover:bg-[#F0F4FF] sm:hover:bg-[#7F5EC5] transition-all duration-200 ml-4"
              >
                <MessageCircle size={20} />
                Получить детали в WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Pluse Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl text-left sm:text-center break-words leading-snug px-4 sm:px-2">
                <span>
                  Почему предприниматели<br className='block sm:hidden' />
                  выбирают <span className="text-[#8F6ED5]">Pluse.kz,</span><br className='block sm:hidden' />
                  даже если привыкли<br className='block sm:hidden' />
                  к другим банкам
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-lg text-[#6B6B6B] text-left px-4 sm:text-center">
                Пример: при продаже товара за 100 000 ₸
              </p>
            </div>

            {/* Сравнительные плашки вместо таблицы */}
            {/* Мобильная версия — карточки */}
            <div className="grid gap-4 mt-8 block md:hidden">
              {/* 1 */}
              <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
                <div className="font-semibold text-[#1A1A1A] text-base">Рассрочка 0-0-24</div>
                <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">только во время акции</span></span></div>
                <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> 24/7 — в любое время</div>
              </div>
              {/* 2 */}
              <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
                <div className="font-semibold text-[#1A1A1A] text-base">Комиссия продавцу</div>
                <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">14–20%</span></span></div>
                <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> от 3%</div>
              </div>
              {/* 3 */}
              <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
                <div className="font-semibold text-[#1A1A1A] text-base">Сколько получаете вы</div>
                <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">80 000–86 000 ₸</span></span></div>
                <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> 97 000 ₸</div>
              </div>
              {/* 4 */}
              <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
                <div className="font-semibold text-[#1A1A1A] text-base">Контроль и звонки клиенту</div>
                <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">Есть</span></span></div>
                <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> —</div>
              </div>
              {/* 5 */}
              <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
                <div className="font-semibold text-[#1A1A1A] text-base">Подключение</div>
                <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">до 3 дней, с проверкой оборота, ИП/ТОО, лицензий</span></span></div>
                <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> 10 минут — онлайн, без лишней бюрократии</div>
              </div>
            </div>
            {/* Планшет и десктоп — таблица */}
            <div className="hidden md:block mt-8">
              <table className="w-full bg-[#F9FAFF] rounded-xl overflow-hidden">
                <thead>
                  <tr className="text-left text-[#1A1A1A] font-semibold">
                    <th className="p-4">&nbsp;</th>
                    <th className="p-4">Банки по старым правилам</th>
                    <th className="p-4">Pluse.kz</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 font-semibold">Рассрочка 0-0-24</td>
                    <td className="p-4 text-xs">только во время акции</td>
                    <td className="p-4 text-xs text-[#8F6ED5]">24/7 — в любое время</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Комиссия продавцу</td>
                    <td className="p-4 text-xs">14–20%</td>
                    <td className="p-4 text-xs text-[#8F6ED5]">от 3%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Сколько получаете вы</td>
                    <td className="p-4 text-xs">80 000–86 000 ₸</td>
                    <td className="p-4 text-xs text-[#8F6ED5]">97 000 ₸</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Контроль и звонки клиенту</td>
                    <td className="p-4 text-xs">Есть</td>
                    <td className="p-4 text-xs text-[#8F6ED5]">—</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Подключение</td>
                    <td className="p-4 text-xs">до 3 дней, с проверкой оборота, ИП/ТОО, лицензий</td>
                    <td className="p-4 text-xs text-[#8F6ED5]">10 минут — онлайн, без лишней бюрократии</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#1A1A3A] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium">Рассрочка 24/7</h3>
                </div>
                <p className="text-sm sm:text-base text-white/80">Всегда доступна, без акций и ограничений</p>
              </div>

              <div className="bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#1A1A3A] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <PiggyBank className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium">Больше денег<br className='block sm:hidden' /> на руки</h3>
                </div>
                <p className="text-sm sm:text-base text-white/80">Минимальная комиссия от 3%</p>
              </div>

              <div className="bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#1A1A3A] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium">Быстрое подключение</h3>
                </div>
                <p className="text-sm sm:text-base text-white/80">Всего 10 минут онлайн, без лишней бюрократии</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems We Solve Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl text-left sm:text-center break-words leading-snug px-4 sm:px-2">
                Проблемы, которые<br className='block sm:hidden' />мы решаем
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "80% покупателей приходят без денег",
                  description: 'Не отдавайте клиента конкурентам — подключите рассрочку за 1 день.'
                },
                {
                  title: 'У клиента везде отказ',
                  description: 'Больше шансов на одобрение — благодаря выписке из банка.'
                },
                {
                  title: (
                    <>
                      Теряете прибыль<br className='block sm:hidden' />на процентах банка
                    </>
                  ),
                  description: 'Теперь вы сами решаете, какие товары и под какой процент продавать.'
                },
                {
                  title: 'Зависимость от "соседа"',
                  description: 'Перестаньте отдавать маржу чужому ИП — подключаем даже без оборота.'
                },
                {
                  title: 'Защитим от блокировок',
                  description: 'Продажи не проседают из-за "мелочи", мы решаем, а не выгоняем.'
                },
                {
                  title: (
                    <>
                      Ответов по неделям —<br className='block sm:hidden' />не будет
                    </>
                  ),
                  description: 'Отвечаем быстро, как будто сами теряем клиента.'
                }
              ].map((card, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    {index === 0 && <AlertCircle className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />}
                    {index === 1 && <Ban className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />}
                    {index === 2 && <Percent className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />}
                    {index === 3 && <UserX className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />}
                    {index === 4 && <ShieldOff className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />}
                    {index === 5 && <Clock className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 break-words text-left">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-lg text-[#6B6B6B] text-left">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Спецблок */}
              <div className="md:col-span-2 lg:col-span-3 bg-[#E0FF4F] rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3 break-words text-left px-4">
                      Продавай с комиссией 0%
                    </h3>
                    <p className="text-sm sm:text-lg text-[#1A1A1A] text-left px-4">
                      Первые 14 дней после подключения.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/77001112233?text=Здравствуйте!%20Хочу%20активировать%200%%20на%20BNPL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#1A1A1A] text-white px-4 py-3 text-sm rounded-lg sm:px-8 sm:py-4 sm:text-base sm:rounded-2xl font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 gap-2"
                  >
                    Активировать 0%
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approval Rate Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl mb-6 break-words leading-snug text-left px-4">
              Повышаем шанс одобрения<br />рассрочки до 60%
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
              <div className="max-w-[500px] md:max-w-[340px] text-left z-10">
                <p className="text-sm sm:text-lg text-[#1A1A1A]/80 leading-relaxed mb-4 text-left px-4">
                  Даже если раньше клиенту отказывали, свежая банковская выписка через Pluse.kz помогает показать реальную платёжеспособность.
                </p>
                <p className="text-sm sm:text-lg text-[#1A1A1A]/80 leading-relaxed mb-8 text-left px-4">
                  Подгрузить выписку можно только через наш сервис.
                </p>
                <a
                  href="https://wa.me/77001112233?text=Здравствуйте!%20Хочу%20узнать%20условия%20рассрочки%20BNPL%20от%20Pluse.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#8F6ED5] text-white px-8 py-4 text-base rounded-2xl font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 gap-2 ml-4 min-w-[340px] md:min-w-[400px] md:w-auto w-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path d="M17.6 6.32A8.86 8.86 0 0 0 12.04 4C7.58 4 4 7.58 4 12.04C4 13.84 4.52 15.56 5.5 17L4 20.5L7.6 19.02C9.02 19.92 10.48 20.38 12.04 20.38C16.5 20.38 20.38 16.8 20.38 12.34C20.38 9.5 19.38 7.04 17.6 6.32ZM12.04 18.98C10.62 18.98 9.26 18.54 8.1 17.7L7.82 17.52L5.86 18.34L6.68 16.44L6.44 16.1C5.52 14.9 5.02 13.48 5.02 12.04C5.02 8.12 8.12 5.02 12.04 5.02C15.96 5.02 18.96 8.12 18.96 12.04C18.96 15.96 15.94 18.98 12.04 18.98Z" fill="currentColor"/>
                  </svg>
                  Получить детали в WhatsApp
                </a>
              </div>
              <div className="mt-10 md:mt-0 md:ml-0 z-10 flex justify-center md:justify-end">
                <img
                  src="/ser.png"
                  alt="Bank Statement Upload"
                  className="w-full max-w-xs md:max-w-md h-auto object-contain opacity-90 mx-auto"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Business Simplification Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative bg-white rounded-[32px] overflow-hidden hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(143,110,213,0.25)] transition-all duration-300">
              <div className="relative px-6 py-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl mb-6 break-words leading-snug text-left px-4">
                      Мы делаем бизнес проще — честно<br />и прозрачно
                    </h2>
                    <div className="space-y-6">
                      <p className="text-sm sm:text-lg text-[#1A1A1A]/80 leading-relaxed text-left px-4">
                        Pluse.kz — это цифровая платформа для{' '}
                        предпринимателей в Казахстане.{' '}
                        
                        Мы являемся резидентом Astana Hub{' '}
                        и лицензирован Агентством по регулированию и развитию финансового рынка Республики Казахстан (АРРФР).{' '}

                        <br /><br />
                        Среди инвесторов проекта — венчурный фонд Tumar Ventures, поддерживаемый Всемирным банком и Министерством цифрового развития, инноваций и аэрокосмической промышленности Казахстана.
                      </p>
                      <div className="pt-2">
                        <Link
                          href="/digital-branch"
                          className="inline-flex items-center bg-[#8F6ED5] text-white px-4 py-3 text-sm rounded-lg sm:px-8 sm:py-4 sm:text-base sm:rounded-2xl font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-[#7F5EC5] hover:scale-[1.02] transition-all duration-300 gap-2 ml-4"
                        >
                          Познакомиться ближе
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="relative lg:block">
                    {/* Мобильная версия: вертикальный стек карточек */}
                    <div className="block lg:hidden w-full flex flex-col gap-4">
                      <div className="w-full bg-gradient-to-br from-white to-[#F9F9F9] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] flex items-center justify-center">
                            <UserRound className="w-5 h-5 text-[#8F6ED5]" />
                          </div>
                          <span className="text-[#6B6B6B] text-sm">Клиентов</span>
                        </div>
                        <div className="mt-4">
                          <div className="text-2xl font-bold text-[#1A1A1A]">200+</div>
                          <div className="text-[#6B6B6B] text-sm">довольных предпринимателей</div>
                        </div>
                      </div>
                      <div className="w-full bg-[#E0FF4F] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center">
                            <PiggyBank className="w-5 h-5 text-[#1A1A1A]" />
                          </div>
                          <span className="text-[#1A1A1A]/70 text-sm">Сумма займов</span>
                        </div>
                        <div className="mt-4">
                          <div className="text-2xl font-bold text-[#1A1A1A]">₸15 млрд</div>
                          <div className="text-[#1A1A1A]/70 text-sm">выдано в рассрочку</div>
                        </div>
                      </div>
                      <div className="w-full bg-gradient-to-br from-[#8F6ED5] to-[#6B4FD5] rounded-2xl p-6 flex flex-col justify-between text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white/80 text-sm">География</span>
                        </div>
                        <div className="mt-4">
                          <div className="text-2xl font-bold">17</div>
                          <div className="text-white/80 text-sm">городов Казахстана</div>
                        </div>
                      </div>
                    </div>
                    {/* Десктопная версия: абсолютные карточки и декор */}
                    <div className="hidden lg:block relative w-full h-[500px] flex items-center justify-center">
                      {/* Фоновая карта Казахстана */}
                      <div className="absolute inset-0 opacity-5">
                        <svg viewBox="0 0 800 500" className="w-full h-full">
                          <path d="M400 100 Q 450 150 500 120 Q 600 80 650 150 Q 700 220 600 250 Q 500 280 450 350 Q 400 420 350 350 Q 300 280 200 250 Q 100 220 150 150 Q 200 80 300 120 Q 350 150 400 100" 
                            fill="none" 
                            stroke="#8F6ED5" 
                            strokeWidth="1"
                            className="opacity-30"
                          />
                        </svg>
                      </div>
                      {/* Казахский орнамент */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path d="M10,10 Q30,0 50,10 T90,10 M10,50 Q30,40 50,50 T90,50 M10,90 Q30,80 50,90 T90,90" 
                            stroke="#8F6ED5" 
                            strokeWidth="2" 
                            fill="none"
                          />
                        </svg>
                      </div>
                      {/* Декоративные элементы */}
                      <div className="absolute top-12 right-12 w-4 h-4 text-[#FFD662] opacity-60">✦</div>
                      <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-[#E0FF4F]"></div>
                      <div className="absolute top-1/3 right-32 w-6 h-6 border-2 border-[#8F6ED5] rounded-full opacity-30"></div>
                      {/* Карточка с количеством клиентов */}
                      <div className="absolute top-8 right-4 w-64 h-48 bg-gradient-to-br from-white to-[#F9F9F9] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(143,110,213,0.15)] transition-all duration-300 p-8 flex flex-col justify-between hover:scale-[1.02] overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0F4FF] rounded-full -translate-x-12 -translate-y-12 opacity-50"></div>
                        <div className="relative">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] flex items-center justify-center">
                              <UserRound className="w-5 h-5 text-[#8F6ED5]" />
                            </div>
                            <span className="text-[#6B6B6B] text-sm">Клиентов</span>
                          </div>
                          <div className="mt-4">
                            <div className="text-3xl font-bold text-[#1A1A1A]">200+</div>
                            <div className="text-[#6B6B6B] text-sm">довольных предпринимателей</div>
                          </div>
                        </div>
                      </div>
                      {/* Карточка с суммой выданных займов */}
                      <div className="absolute top-48 right-52 w-64 h-48 bg-[#E0FF4F] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(143,110,213,0.15)] transition-all duration-300 p-8 flex flex-col justify-between hover:scale-[1.02] overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-white/50 rounded-full -translate-x-20 -translate-y-20"></div>
                        <div className="relative">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center">
                              <PiggyBank className="w-5 h-5 text-[#1A1A1A]" />
                            </div>
                            <span className="text-[#1A1A1A]/70 text-sm">Сумма займов</span>
                          </div>
                          <div className="mt-4">
                            <div className="text-3xl font-bold text-[#1A1A1A]">₸15 млрд</div>
                            <div className="text-[#1A1A1A]/70 text-sm">выдано в рассрочку</div>
                          </div>
                        </div>
                      </div>
                      {/* Карточка с географией */}
                      <div className="absolute bottom-8 right-8 w-64 h-48 bg-gradient-to-br from-[#8F6ED5] to-[#6B4FD5] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 p-8 flex flex-col justify-between text-white backdrop-blur-sm">
                        {/* Стилизованная миникарта Казахстана */}
                        <div className="absolute inset-0 opacity-10">
                          <svg viewBox="0 0 100 60" className="w-full h-full">
                            <path d="M20,30 Q40,20 60,30 T90,30 M10,40 Q30,35 50,40 T80,40" 
                              stroke="white" 
                              strokeWidth="0.5" 
                              fill="none"
                            />
                          </svg>
                        </div>
                        <div className="relative">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white/80 text-sm">География</span>
                          </div>
                          <div className="mt-4">
                            <div className="text-3xl font-bold">17</div>
                            <div className="text-white/80 text-sm">городов Казахстана</div>
                          </div>
                        </div>
                        {/* Декоративные элементы */}
                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/30"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/30"></div>
                        <div className="absolute top-1/2 right-4 w-1 h-1 rounded-full bg-white/20"></div>
                        <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Section */}
        <section className="py-20 relative overflow-hidden bg-[#181C36]">
          {/* Геометрические элементы */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
            {/* Большой фиолетовый угол */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] transform rotate-[-10deg] translate-x-1/4 translate-y-[-10%] bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#FDFCFB] opacity-40 rounded-[40px] transition-all duration-1000"></div>
            {/* Средний угол */}
            <div className="absolute top-1/3 right-0 w-[600px] h-[400px] transform rotate-[-15deg] translate-x-1/3 bg-gradient-to-br from-[#7F5EC5] via-[#5B3FD5] to-[#FDFCFB] opacity-30 rounded-[40px] transition-all duration-1000"></div>
            {/* Маленький угол */}
            <div className="absolute bottom-10 right-1/4 w-[300px] h-[200px] transform rotate-[-5deg] bg-gradient-to-br from-[#6B4FD5] via-[#4B2FD5] to-[#FDFCFB] opacity-20 rounded-[40px] transition-all duration-1000"></div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Левая часть: заголовок и описание */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight break-words text-left px-4">Ознакомиться<br />с условиями</h2>
                <p className="text-sm sm:text-lg text-white/80 mb-6 max-w-lg text-left px-4">
                  Открыто показываем расчёты, чтобы вы сразу понимали, выгодно ли вам работать с рассрочкой Pluse.kz.
                </p>
                <p className="text-sm sm:text-lg text-white/80 max-w-lg text-left px-4">
                  Оставьте свой номер WhatsApp — мы не будем звонить. Просто отправим условия в чат, чтобы вы могли изучить их в удобное время и задать вопросы, когда будете готовы.
                </p>
              </div>
              {/* Правая часть: форма */}
              <div className="flex flex-col justify-center items-center">
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full max-w-md">
                  {/* Аватарки */}
                  <div className="absolute -top-6 right-8 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-lg overflow-hidden">
                      <img src="/asmall.png" alt="Менеджер Алена" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-lg overflow-hidden">
                      <img src="/ansmall.png" alt="Менеджер Настя" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-lg overflow-hidden">
                      <img src="/ssmall.png" alt="Менеджер Саша" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-[#1A1A1A] mb-6 leading-[1.3] break-words text-left px-4">
                    Заполните форму, и наш менеджер свяжется с вами в ближайшее время
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F9F9F9] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:bg-white transition-all text-sm sm:text-base"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <div className="w-6 h-4 rounded overflow-hidden flex-shrink-0">
                          <img src="/flag.png" alt="Флаг Казахстана" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[#6B6B6B] text-sm">+7</span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-20 pr-4 py-3 bg-[#F9F9F9] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:bg-white transition-all text-sm sm:text-base ${phoneError ? 'ring-2 ring-red-500' : ''}`}
                        placeholder="(___) ___-__-__"
                        required
                      />
                      {phoneError && (
                        <p className="mt-2 text-sm text-red-500">
                          {phoneError}
                        </p>
                      )}
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#8F6ED5] focus:ring-[#8F6ED5]"
                          required
                        />
                      </div>
                      <label htmlFor="terms" className="ml-2 block text-xs sm:text-sm text-gray-500">
                        Я согласен с {' '}
                        <a href="#" className="text-[#8F6ED5] hover:text-[#7F5EC5]">
                          политикой конфиденциальности
                        </a>
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#8F6ED5] text-white px-4 py-3 text-sm rounded-lg sm:px-6 sm:py-3 sm:text-base sm:rounded-xl font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-[#7F5EC5] transition-all duration-300"
                      >
                        Отправить заявку
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 