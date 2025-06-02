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
import { motion } from 'framer-motion'

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
                  <span className="text-sm font-medium text-[#0088f5] tracking-wider uppercase">Страхование бизнеса</span>
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl mb-6">
                  Ваш персональный{" "}
                  <span className="text-[#0088f5] relative">
                    брокер
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="absolute bottom-1 left-0 right-0 h-2 bg-[#0979ff] opacity-20 -z-10"
                    />
                  </span>
                  {" "}страхования
                </h1>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg text-[#64748b] leading-relaxed mb-6"
                >
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0" />
                      <span>Работаем только в ваших интересах</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0" />
                      <span>Сравниваем все страховые компании</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0088f5] flex-shrink-0" />
                      <span>Экономим ваши деньги и время</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="text-sm text-[#64748b] mb-8 bg-[#f8fafc] rounded-xl p-4 border border-[#f1f5f9]"
                >
                  <span className="text-[#0f172a] font-medium">Страховые компании хотят продать, мы хотим защитить.</span> Наш брокер найдет лучшие условия для вашего бизнеса.
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20про%20страхование%20бизнеса"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.5)] hover:scale-105 hover:bg-[#0979ff] transition-all duration-300 justify-center gap-2"
                  >
                    <Shield className="w-5 h-5" />
                    Получить консультацию
                  </a>

                  <a
                    href="#products"
                    className="inline-flex items-center bg-white text-[#0088f5] px-8 py-4 rounded-2xl text-lg font-medium border-2 border-[#0088f5] hover:bg-[#0088f5] hover:text-white transition-all duration-300 justify-center gap-2"
                  >
                    <FileCheck className="w-5 h-5" />
                    Выбрать страховку
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
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Ваш персональный брокер</h3>
                  <p className="text-sm text-[#64748b]">Работает только в ваших интересах</p>
                </div>

                {/* Broker illustration with aidana.png */}
                <div className="relative flex items-center justify-center mb-6">
                  <Image
                    src="/aidana.png"
                    alt="Персональный брокер страхования"
                    width={300}
                    height={200}
                    className="w-full h-auto max-w-xs object-contain relative z-10"
                    priority
                  />
                </div>

                {/* Live broker activity */}
                <div className="bg-[#f8fafc] rounded-xl p-4 mb-6 border border-[#f1f5f9]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0088f5] to-[#0979ff] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-medium">АБ</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-[#0f172a]">Айдана Брокер</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600">онлайн</span>
                      </div>
                      <p className="text-xs text-[#64748b] leading-relaxed mb-2">
                        Только что помогла ТОО "Алтын-Транс" сэкономить <span className="font-semibold text-[#0088f5]">127,500₸</span> на страховке автопарка
                      </p>
                      <div className="text-xs text-[#0088f5]">3 мин назад</div>
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                  <div className="bg-gradient-to-r from-[#0088f5]/5 to-[#0979ff]/5 rounded-xl p-4">
                    <div className="flex items-center justify-center gap-2 text-[#0088f5] text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>В среднем экономим клиентам 30% на страховках</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Broker Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl mb-4">
              Почему <span className="text-[#0088f5]">персональный брокер</span> лучше
            </h2>
            <p className="text-lg text-[#64748b]">
              Страховые компании работают на себя. Мы работаем на вас.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Problems */}
            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Без брокера</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✕</span>
                  </div>
                  <div>
                    <div className="font-medium text-[#0f172a] mb-1">Переплачиваете за страховку</div>
                    <div className="text-sm text-[#64748b]">Каждая компания предлагает только свои тарифы</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✕</span>
                  </div>
                  <div>
                    <div className="font-medium text-[#0f172a] mb-1">Сложно получить выплаты</div>
                    <div className="text-sm text-[#64748b]">Страховая ищет способы не платить</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✕</span>
                  </div>
                  <div>
                    <div className="font-medium text-[#0f172a] mb-1">Тратите время на поиск</div>
                    <div className="text-sm text-[#64748b]">Обзваниваете десятки компаний</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - With Broker */}
            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-6">С персональным брокером</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-[#f0f9ff] rounded-xl border border-[#0088f5]/20">
                  <div className="w-6 h-6 rounded-full bg-[#0088f5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-[#0f172a] mb-1">Экономите в среднем 30%</div>
                    <div className="text-sm text-[#64748b]">Находим лучшие условия среди всех компаний</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-[#f0f9ff] rounded-xl border border-[#0088f5]/20">
                  <div className="w-6 h-6 rounded-full bg-[#0088f5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-[#0f172a] mb-1">Получаете выплаты быстрее</div>
                    <div className="text-sm text-[#64748b]">Мы защищаем ваши интересы при урегулировании</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-[#f0f9ff] rounded-xl border border-[#0088f5]/20">
                  <div className="w-6 h-6 rounded-full bg-[#0088f5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-[#0f172a] mb-1">Экономите время</div>
                    <div className="text-sm text-[#64748b]">Один звонок — все варианты на столе</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl border border-[#f1f5f9] shadow-lg">
              <div className="text-3xl font-bold text-[#0088f5] mb-2">127,500₸</div>
              <div className="text-sm text-[#64748b]">средняя экономия клиента</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-[#f1f5f9] shadow-lg">
              <div className="text-3xl font-bold text-[#0088f5] mb-2">85%</div>
              <div className="text-sm text-[#64748b]">успешных выплат с нашей помощью</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-[#f1f5f9] shadow-lg">
              <div className="text-3xl font-bold text-[#0088f5] mb-2">24ч</div>
              <div className="text-sm text-[#64748b]">среднее время подбора полиса</div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Products Section */}
      <section className="py-20 bg-white" id="products">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-4">
              <span className="text-[#0088f5]">Страхование</span> для любого бизнеса
            </h2>
            <p className="text-lg text-[#64748b]">
              Персональные страховые решения в зависимости от типа вашей деятельности
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Construction Companies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Top - Large Image placeholder */}
              <div className="mb-6">
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                  {/* Placeholder for large construction equipment image */}
                </div>
              </div>
              
              {/* Bottom - Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Для строительных компаний</h3>
                <p className="text-gray-600 text-sm mb-4">Стройка, ремонт, монтаж</p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-700">• Обязательное страхование работников от несчастных случаев</div>
                  <div className="text-sm text-gray-700">• Страхование спецтехники и оборудования</div>
                  <div className="text-sm text-gray-700">• Страхование ответственности на стройплощадке</div>
                  <div className="text-sm text-gray-700">• КАСКО для корпоративного транспорта</div>
                </div>
                
                <a 
                  href="https://wa.me/77478609282?text=Здравствуйте!%20Интересует%20страхование%20для%20строительной%20компании" 
                  target="_blank"
                  className="inline-flex items-center text-[#0088f5] hover:text-[#0979ff] font-medium transition-colors group"
                >
                  Получить предложение
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* Manufacturing Companies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Top - Large Image placeholder */}
              <div className="mb-6">
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                  {/* Placeholder for large factory/manufacturing image */}
                </div>
              </div>
              
              {/* Bottom - Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Для производственных предприятий</h3>
                <p className="text-gray-600 text-sm mb-4">Заводы, фабрики, цеха</p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-700">• Страхование имущества (заводы, склады, оборудование)</div>
                  <div className="text-sm text-gray-700">• Экологическое страхование (при наличии выбросов)</div>
                  <div className="text-sm text-gray-700">• Страхование перерыва в производстве</div>
                  <div className="text-sm text-gray-700">• Обязательное страхование работников</div>
                </div>
                
                <a 
                  href="https://wa.me/77478609282?text=Здравствуйте!%20Интересует%20страхование%20для%20производственного%20предприятия" 
                  target="_blank"
                  className="inline-flex items-center text-[#0088f5] hover:text-[#0979ff] font-medium transition-colors group"
                >
                  Получить предложение
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* Trading Companies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Top - Large Image placeholder */}
              <div className="mb-6">
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                  {/* Placeholder for large warehouse/retail image */}
                </div>
              </div>
              
              {/* Bottom - Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Для торговых компаний</h3>
                <p className="text-gray-600 text-sm mb-4">Опт, розница, дистрибуция</p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-700">• Страхование складов и торговых точек</div>
                  <div className="text-sm text-gray-700">• Страхование грузоперевозок</div>
                  <div className="text-sm text-gray-700">• КАСКО для служебного транспорта</div>
                  <div className="text-sm text-gray-700">• Страхование ответственности перед клиентами</div>
                </div>
                
                <a 
                  href="https://wa.me/77478609282?text=Здравствуйте!%20Интересует%20страхование%20для%20торговой%20компании" 
                  target="_blank"
                  className="inline-flex items-center text-[#0088f5] hover:text-[#0979ff] font-medium transition-colors group"
                >
                  Получить предложение
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* Logistics & Transport Companies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Top - Large Image placeholder */}
              <div className="mb-6">
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                  {/* Placeholder for large truck/logistics image */}
                </div>
              </div>
              
              {/* Bottom - Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Для транспортных компаний</h3>
                <p className="text-gray-600 text-sm mb-4">Логистика, перевозки, доставка</p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-700">• ОГПО перевозчика перед пассажирами</div>
                  <div className="text-sm text-gray-700">• Страхование грузов</div>
                  <div className="text-sm text-gray-700">• КАСКО для корпоративного транспорта</div>
                  <div className="text-sm text-gray-700">• Страхование ответственности перед третьими лицами</div>
                </div>
                
                <a 
                  href="https://wa.me/77478609282?text=Здравствуйте!%20Интересует%20страхование%20для%20транспортной%20компании" 
                  target="_blank"
                  className="inline-flex items-center text-[#0088f5] hover:text-[#0979ff] font-medium transition-colors group"
                >
                  Получить предложение
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* Taxi Companies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Top - Large Image placeholder */}
              <div className="mb-6">
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                  {/* Placeholder for large taxi/car image */}
                </div>
              </div>
              
              {/* Bottom - Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Для таксопарков</h3>
                <p className="text-gray-600 text-sm mb-4">Такси, каршеринг, трансфер</p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-700">• ОГПО перевозчика перед пассажирами</div>
                  <div className="text-sm text-gray-700">• КАСКО для автопарка</div>
                  <div className="text-sm text-gray-700">• Страхование ответственности водителей</div>
                  <div className="text-sm text-gray-700">• Страхование от несчастных случаев</div>
                </div>
                
                <a 
                  href="https://wa.me/77478609282?text=Здравствуйте!%20Интересует%20страхование%20для%20таксопарка" 
                  target="_blank"
                  className="inline-flex items-center text-[#0088f5] hover:text-[#0979ff] font-medium transition-colors group"
                >
                  Получить предложение
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* Medical Organizations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Top - Large Image placeholder */}
              <div className="mb-6">
                <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                  {/* Placeholder for large medical equipment image */}
                </div>
              </div>
              
              {/* Bottom - Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Для медицинских организаций</h3>
                <p className="text-gray-600 text-sm mb-4">Клиники, аптеки, лаборатории</p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-700">• Страхование профессиональной ответственности врачей</div>
                  <div className="text-sm text-gray-700">• Страхование медицинского оборудования</div>
                  <div className="text-sm text-gray-700">• Страхование ответственности перед пациентами</div>
                  <div className="text-sm text-gray-700">• ДМС для сотрудников</div>
                </div>
                
                <a 
                  href="https://wa.me/77478609282?text=Здравствуйте!%20Интересует%20страхование%20для%20медицинской%20организации" 
                  target="_blank"
                  className="inline-flex items-center text-[#0088f5] hover:text-[#0979ff] font-medium transition-colors group"
                >
                  Получить предложение
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA/Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Получите персональное предложение
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Оставьте заявку, и наш страховой брокер свяжется с вами в течение 15 минут.
                </p>
                
                <a
                  href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20получить%20консультацию%20по%20страхованию%20бизнеса"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#0088f5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-lg hover:bg-[#0979ff] hover:shadow-xl transition-all duration-300 gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Получить консультацию в WhatsApp
                </a>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
              >
                <InsuranceForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 