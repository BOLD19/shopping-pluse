'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { 
  FileText, 
  BarChart, 
  CreditCard, 
  Globe, 
  Calculator, 
  Check, 
  Building, 
  Clock, 
  FileSpreadsheet, 
  FolderOpen, 
  MessageSquare, 
  HeadphonesIcon, 
  Shield, 
  Briefcase, 
  ShoppingBag, 
  Flag, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Send
} from 'lucide-react'

export default function RegisterCompanyPage() {
  const [formData, setFormData] = useState({
    phone: ''
  })
  
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ phone: '' })
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'Какие документы нужны для регистрации ТОО?',
      answer: 'Для регистрации ТОО вам понадобится минимальный набор документов: удостоверение личности учредителя, адрес регистрации и выбранное название компании. Все остальные документы мы подготовим самостоятельно.'
    },
    {
      question: 'Что если я не резидент РК?',
      answer: 'Мы помогаем иностранным гражданам открыть ТОО в Казахстане. Для этого потребуется заграничный паспорт и дополнительные документы, которые мы поможем подготовить. Весь процесс можно провести удаленно.'
    },
    {
      question: 'Как подписать документы онлайн?',
      answer: 'Для онлайн-подписания документов вы можете использовать ЭЦП (электронную цифровую подпись). Если у вас её нет, мы поможем с получением. Также возможно использование биометрической идентификации через приложение.'
    },
    {
      question: 'Сколько занимает процесс регистрации ТОО?',
      answer: 'Стандартный срок регистрации ТОО через наш сервис составляет 1 рабочий день. После этого вы получаете все необходимые документы и можете начинать деятельность. Открытие банковского счета занимает еще 1-2 дня.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden pt-32 pb-24">
        {/* Radial gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_30%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white opacity-90"></div>
        </div>
        {/* Scattered dots pattern */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <svg className="absolute left-[calc(50%-25rem)] top-0 h-[64rem] w-[128rem] stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#8F6ED5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl leading-tight">
                Регистрация ТОО <span className="text-[#8F6ED5]">бесплатно</span> за 1 день
              </h1>
              <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed">
                Мы подготовим документы, подберем налоговый режим и откроем бизнес за вас — быстро и надёжно
              </p>
              <div className="mt-10">
                <a
                  href="#contact-form"
                  className="inline-flex items-center bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                >
                  Оставить заявку
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                {/* 3D Document Illustration */}
                <div className="relative">
                  {/* Purple glow effect */}
                  <div className="absolute -z-10 inset-0 bg-[#8F6ED5] opacity-10 blur-3xl rounded-full transform -translate-y-1/4"></div>
                  
                  <div className="relative flex justify-center">
                    <div className="w-72 h-72 relative">
                      {/* Main Document */}
                      <div className="absolute top-6 left-6 w-60 h-64 bg-white rounded-lg shadow-xl transform rotate-6 border-t-4 border-[#8F6ED5]">
                        <div className="absolute top-4 left-4 right-4 h-4 bg-[#F0F4FF] rounded"></div>
                        <div className="absolute top-12 left-4 right-4 h-4 bg-[#F0F4FF] rounded"></div>
                        <div className="absolute top-20 left-4 right-16 h-4 bg-[#F0F4FF] rounded"></div>
                        <div className="absolute top-28 left-4 right-8 h-4 bg-[#F0F4FF] rounded"></div>
                        <div className="absolute top-36 left-4 right-20 h-4 bg-[#F0F4FF] rounded"></div>
                        <div className="absolute top-44 left-4 right-4 h-12 bg-[#E0FF4F] rounded-lg flex items-center justify-center">
                          <div className="font-bold text-[#1A1A1A] text-xs">ТОО &quot;PLUSE&quot;</div>
                        </div>
                      </div>
                      
                      {/* Second Document */}
                      <div className="absolute top-10 left-10 w-60 h-64 bg-white rounded-lg shadow-xl transform -rotate-3 border-t-4 border-[#E0FF4F]">
                        <div className="absolute top-4 left-4 w-8 h-8 bg-[#E0FF4F] rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-[#1A1A1A]" />
                        </div>
                        <div className="absolute top-4 left-16 right-4 h-4 bg-[#F9F9F9] rounded"></div>
                        <div className="absolute top-12 left-4 right-4 h-4 bg-[#F9F9F9] rounded"></div>
                        <div className="absolute top-20 left-4 right-16 h-4 bg-[#F9F9F9] rounded"></div>
                        <div className="absolute top-28 left-4 right-24 h-4 bg-[#F9F9F9] rounded"></div>
                        <div className="absolute bottom-4 left-4 w-24 h-8 bg-[#8F6ED5] rounded flex items-center justify-center">
                          <div className="font-medium text-white text-xs">ПОДТВЕРЖДЕНО</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Что входит в услугу */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Что входит в услугу
            </h2>
            <p className="mt-6 text-lg text-[#6B6B6B]">
              Полностью берем на себя процесс регистрации ТОО, от подготовки документов до постановки на учет
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: <FileText className="h-6 w-6 text-[#8F6ED5]" />,
                title: 'Подготовим все документы',
                description: 'Устав, учредительный договор и все заявления'
              },
              {
                icon: <BarChart className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Выберем ОКЭД и налоговый режим",
                description: 'Оптимальный вариант для вашего бизнеса'
              },
              {
                icon: <CreditCard className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Поставим ТОО на учёт по НДС",
                description: 'Если это необходимо для вашего бизнеса'
              },
              {
                icon: <Globe className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Поможем иностранным резидентам",
                description: 'Полное сопровождение для нерезидентов РК'
              },
              {
                icon: <Calculator className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Возьмем на себя бухгалтерию",
                description: 'Первый месяц бухгалтерия бесплатно'
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F4FF] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6B6B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Вы получите */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Вы получите
            </h2>
            <p className="mt-6 text-lg text-[#6B6B6B]">
              Полноценный рабочий бизнес с поддержкой на каждом этапе, а не просто документы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Building className="h-8 w-8 text-[#8F6ED5]" />,
                title: "Готовое ТОО",
                description: 'Зарегистрированное юридическое лицо со всеми документами, печатью, электронной подписью'
              },
              {
                icon: <Clock className="h-8 w-8 text-[#8F6ED5]" />,
                title: "Онлайн-бухгалтерию с напоминаниями",
                description: 'Доступ к сервису автоматической бухгалтерии, который напомнит о сроках сдачи отчетности и уплаты налогов'
              },
              {
                icon: <FileSpreadsheet className="h-8 w-8 text-[#8F6ED5]" />,
                title: "Шаблоны договоров и актов",
                description: 'Готовые документы для ведения бизнеса: договоры, акты, счета, накладные и другие необходимые формы'
              },
              {
                icon: <FolderOpen className="h-8 w-8 text-[#8F6ED5]" />,
                title: "Доступ ко всем документам",
                description: 'Круглосуточный доступ ко всем документам компании в личном кабинете: учредительные и бухгалтерские документы'
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#F0F4FF] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B6B6B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Поддержим на каждом этапе */}
      <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute right-0 top-0 -z-10 transform translate-x-1/3 -translate-y-1/4">
          <div className="h-96 w-96 rounded-full bg-[#E0FF4F] opacity-20 blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto w-full max-w-md">
                <div className="aspect-[4/3] w-full bg-[#F0F4FF] rounded-xl overflow-hidden relative">
                  {/* Decorative elements */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-[#8F6ED5] opacity-20 rounded-full"></div>
                  <div className="absolute top-12 right-12 w-8 h-8 bg-[#E0FF4F] opacity-40 rounded-full"></div>
                  
                  {/* Chat interface mockup */}
                  <div className="absolute inset-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#8F6ED5] flex items-center justify-center text-white font-bold">P</div>
                        <div className="ml-2">
                          <div className="text-sm font-semibold">Персональный менеджер</div>
                          <div className="text-xs text-[#6B6B6B]">онлайн</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    
                    <div className="flex-1 p-4 overflow-y-auto">
                      <div className="mb-3 ml-8 max-w-[80%]">
                        <div className="bg-[#F9F9F9] rounded-tl-xl rounded-tr-xl rounded-br-xl p-3">
                          <p className="text-xs">Здравствуйте! Я ваш персональный менеджер по регистрации ТОО. Как я могу вам помочь?</p>
                        </div>
                        <div className="text-xs text-[#6B6B6B] mt-1">12:42</div>
                      </div>
                      
                      <div className="mb-3 mr-8 max-w-[80%] ml-auto">
                        <div className="bg-[#F0F4FF] rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3">
                          <p className="text-xs">У меня вопрос по налоговому режиму. Какой лучше выбрать для интернет-магазина?</p>
                        </div>
                        <div className="text-xs text-[#6B6B6B] mt-1 text-right">12:45</div>
                      </div>
                      
                      <div className="mb-3 ml-8 max-w-[80%]">
                        <div className="bg-[#F9F9F9] rounded-tl-xl rounded-tr-xl rounded-br-xl p-3">
                          <p className="text-xs">Для интернет-магазина оптимально подойдёт упрощенный режим. Давайте обсудим детали вашего бизнеса, и я предложу наилучший вариант.</p>
                        </div>
                        <div className="text-xs text-[#6B6B6B] mt-1">12:47</div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-100 flex items-center">
                      <input
                        type="text"
                        placeholder="Напишите сообщение..."
                        className="flex-1 bg-[#F9F9F9] rounded-lg px-4 py-2 text-sm focus:outline-none"
                      />
                      <button className="ml-2 h-8 w-8 flex items-center justify-center rounded-full bg-[#8F6ED5]">
                        <Send className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl mb-8">
                Поддержим на каждом этапе
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <MessageSquare className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Персональный менеджер",
                    description: 'Выделенный специалист будет вести ваш проект от начала до конца, решая все вопросы максимально быстро'
                  },
                  {
                    icon: <HeadphonesIcon className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Чат без ожиданий",
                    description: 'Средняя скорость ответа на сообщения — 5 минут. Вам не придётся ждать часами, чтобы получить консультацию'
                  },
                  {
                    icon: <Calculator className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Вся бухгалтерия на нас",
                    description: 'Мы поможем с начальными настройками бухгалтерии, первичной документацией и отчетностью'
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Поддержка по налогам и отчётности",
                    description: 'Юристы и бухгалтеры проконсультируют по всем вопросам касательно налогов и отчетности'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F0F4FF]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A1A1A]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[#6B6B6B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Для кого подойдёт */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Для кого подойдёт
            </h2>
            <p className="mt-6 text-lg text-[#6B6B6B]">
              Наш сервис создан для предпринимателей, которые ценят время и хотят быстро запустить свой бизнес
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Briefcase className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Фрилансеры",
                description: 'Легализуйте свою деятельность и получите доступ к корпоративным клиентам'
              },
              {
                icon: <BarChart className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Стартапы",
                description: 'Быстрый запуск юридического лица для привлечения инвестиций и масштабирования'
              },
              {
                icon: <ShoppingBag className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Онлайн-магазины",
                description: 'Возможность принимать официальные платежи и работать с крупными маркетплейсами'
              },
              {
                icon: <Flag className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Иностранцы",
                description: 'Полное сопровождение и помощь в регистрации бизнеса для нерезидентов'
              },
              {
                icon: <Users className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Начинающие предприниматели",
                description: 'Подробные консультации и поддержка для тех, кто только начинает свой бизнес'
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F4FF] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6B6B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Часто задаваемые вопросы
            </h2>
            <p className="mt-6 text-lg text-[#6B6B6B]">
              Ответы на самые распространенные вопросы о регистрации ТОО
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-300 ${openFaq === index ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-[#1A1A1A]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#8F6ED5]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#6B6B6B]" />
                  )}
                </button>
                <div 
                  className={`px-6 pb-5 transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-[#6B6B6B]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA form */}
      <div id="contact-form" className="py-24 sm:py-32 bg-[#F0F4FF]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Остались вопросы?
              </h2>
              <p className="mt-4 text-lg text-[#6B6B6B] mb-8">
                Оставьте номер — мы свяжемся с вами в течение дня
              </p>

              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-[#6B6B6B] text-sm mb-2">Номер телефона</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:border-transparent transition"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#8F6ED5] text-white px-8 py-4 rounded-xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                  >
                    Оставить заявку
                  </button>
                  <p className="mt-3 text-sm text-[#6B6B6B]">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </form>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative background elements */}
                <div className="absolute -z-10 top-20 left-20 w-32 h-32 bg-[#E0FF4F] opacity-30 rounded-full blur-2xl"></div>
                <div className="absolute -z-10 top-40 right-4 w-16 h-16 bg-[#8F6ED5] opacity-20 rounded-full blur-xl"></div>
                
                {/* Document stack illustration */}
                <div className="relative w-72 h-80">
                  <div className="absolute bottom-0 left-0 w-64 h-48 rounded-lg bg-white shadow-xl transform -rotate-6 flex items-center justify-center border-t-4 border-[#8F6ED5]">
                    <div className="text-center">
                      <CheckIcon size={32} className="mx-auto text-[#8F6ED5] mb-2" />
                      <div className="text-sm font-medium">ТОО зарегистрировано</div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 w-64 h-48 rounded-lg bg-white shadow-xl transform rotate-3 flex items-center justify-center border-t-4 border-[#E0FF4F]">
                    <div className="text-center">
                      <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-[#E0FF4F] flex items-center justify-center">
                        <Check className="h-5 w-5 text-[#1A1A1A]" />
                      </div>
                      <div className="text-sm font-medium">Счет открыт</div>
                    </div>
                  </div>
                  <div className="absolute bottom-16 left-16 w-64 h-48 rounded-lg bg-white shadow-xl flex items-center justify-center p-6">
                    <div className="text-center">
                      <p className="text-lg font-bold text-[#1A1A1A] mb-2">
                        Готово к работе!
                      </p>
                      <p className="text-sm text-[#6B6B6B]">
                        Ваше ТОО полностью готово для ведения бизнеса
                      </p>
                    </div>
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

function CheckIcon(props: any) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
} 