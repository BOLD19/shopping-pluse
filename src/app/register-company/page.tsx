'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
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
  Send,
  MessageCircle,
  ArrowRight
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
    // TODO: Implement proper form submission logic
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
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
      <section className="relative isolate pt-32 pb-20">
        {/* Radial gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_30%,_var(--tw-gradient-stops))] from-[#EBF8FF] via-white to-white opacity-90"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-6xl">
              Регистрация ТОО за 1 день
              </h1>
            <p className="mt-6 text-lg text-[#64748b]">
                Мы подготовим документы, подберем налоговый режим и откроем бизнес за вас — быстро и надёжно
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/77474288095?text=Здравствуйте!%20Хочу%20открыть%20ТОО,%20нужна%20консультация."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0f172a] px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#0088f5]/20 hover:border-[#0088f5]/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Консультация
              </a>
                <a
                href="https://wa.me/77474288095?text=Здравствуйте!%20Хочу%20открыть%20ТОО%20через%20вас.%20Какой%20следующий%20шаг?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight size={20} />
                Открыть компанию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Что входит в услугу */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Что входит в услугу
            </h2>
            <p className="mt-6 text-lg text-[#64748b]">
              Полностью берем на себя процесс регистрации ТОО,<br />от подготовки документов до постановки на учет
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="h-6 w-6 text-[#0088f5]" />,
                title: 'Подготовим\nвсе документы',
                description: 'Устав, учредительный\nдоговор и все заявления'
              },
              {
                icon: <BarChart className="h-6 w-6 text-[#0088f5]" />,
                title: 'Выберем ОКЭД\nи налоговый режим',
                description: 'Оптимальный вариант\nдля вашего бизнеса'
              },
              {
                icon: <CreditCard className="h-6 w-6 text-[#0088f5]" />,
                title: 'Поставим ТОО\nна учёт по НДС',
                description: 'Если это необходимо\nдля вашего бизнеса'
              },
              {
                icon: <Calculator className="h-6 w-6 text-[#0088f5]" />,
                title: 'Закроем вопросы\nпо налогам',
                description: 'Первый месяц\nбухгалтерия бесплатно'
              },
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 max-w-xs w-full mx-auto">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF8FF] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-[#0f172a] mb-2">
                  {item.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== item.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="text-sm text-[#64748b]">
                  {item.description.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== item.description.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Вы получите */}
      <div className="py-24 sm:py-32 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Вы получите
            </h2>
            <p className="mt-6 text-lg text-[#64748b]">
              Полноценный рабочий бизнес с поддержкой на каждом этапе,<br />а не просто документы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Building className="h-8 w-8 text-[#0088f5]" />,
                title: "Готовое ТОО",
                description: 'Зарегистрированное юридическое лицо со всеми документами, печатью, электронной подписью'
              },
              {
                icon: <Clock className="h-8 w-8 text-[#0088f5]" />,
                title: "Онлайн-бухгалтерию с напоминаниями",
                description: 'Доступ к сервису автоматической бухгалтерии, который напомнит о сроках сдачи отчетности и уплаты налогов'
              },
              {
                icon: <FileSpreadsheet className="h-8 w-8 text-[#0088f5]" />,
                title: "Шаблоны договоров и актов",
                description: 'Готовые документы для ведения бизнеса: договоры, акты, счета, накладные и другие необходимые формы'
              },
              {
                icon: <FolderOpen className="h-8 w-8 text-[#0088f5]" />,
                title: "Доступ ко всем документам",
                description: 'Круглосуточный доступ ко всем документам компании в личном кабинете: учредительные и бухгалтерские документы'
              },
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#EBF8FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#64748b]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Поддержим на каждом этапе */}
      <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-right skew-x-[-30deg] bg-white shadow-xl shadow-[#0088f5]/10 ring-1 ring-[#0088f5]/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="aspect-[4/3] w-full bg-[#EBF8FF] rounded-xl overflow-hidden relative">
                  {/* Decorative elements */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-[#0088f5] opacity-20 rounded-full"></div>
                  <div className="absolute top-12 right-12 w-8 h-8 bg-[#0088f5] opacity-40 rounded-full"></div>
                  
                  {/* Chat interface mockup */}
                  <div className="absolute inset-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#0088f5] flex items-center justify-center text-white font-bold">P</div>
                        <div className="ml-2">
                          <div className="text-sm font-semibold">Персональный менеджер</div>
                          <div className="text-xs text-[#64748b]">онлайн</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    
                    <div className="flex-1 p-4 overflow-y-auto">
                      <div className="mb-3 ml-8 max-w-[80%]">
                        <div className="bg-[#f8fafc] rounded-tl-xl rounded-tr-xl rounded-br-xl p-3">
                          <p className="text-xs">Здравствуйте! Я ваш персональный менеджер по регистрации ТОО. Как я могу вам помочь?</p>
                        </div>
                        <div className="text-xs text-[#64748b] mt-1">12:42</div>
                      </div>
                      
                      <div className="mb-3 mr-8 max-w-[80%] ml-auto">
                        <div className="bg-[#EBF8FF] rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3">
                          <p className="text-xs">У меня вопрос по налоговому режиму. Какой лучше выбрать для интернет-магазина?</p>
                        </div>
                        <div className="text-xs text-[#64748b] mt-1 text-right">12:45</div>
                      </div>
                      
                      <div className="mb-3 ml-8 max-w-[80%]">
                        <div className="bg-[#f8fafc] rounded-tl-xl rounded-tr-xl rounded-br-xl p-3">
                          <p className="text-xs">Для интернет-магазина оптимально подойдёт упрощенный режим. Давайте обсудим детали вашего бизнеса, и я предложу наилучший вариант.</p>
                        </div>
                        <div className="text-xs text-[#64748b] mt-1">12:47</div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-100 flex items-center">
                      <input
                        type="text"
                        placeholder="Напишите сообщение..."
                        className="flex-1 bg-[#f8fafc] rounded-lg px-4 py-2 text-sm focus:outline-none"
                      />
                      <button className="ml-2 h-8 w-8 flex items-center justify-center rounded-full bg-[#0088f5]">
                        <Send className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-8">
                Поддержим на каждом этапе
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <MessageSquare className="h-6 w-6 text-[#0088f5]" />,
                    title: "Персональный менеджер",
                    description: 'Выделенный специалист будет вести ваш проект от начала до конца, решая все вопросы максимально быстро'
                  },
                  {
                    icon: <HeadphonesIcon className="h-6 w-6 text-[#0088f5]" />,
                    title: "Чат без ожиданий",
                    description: 'Средняя скорость ответа на сообщения — 5 минут. Вам не придётся ждать часами, чтобы получить консультацию'
                  },
                  {
                    icon: <Calculator className="h-6 w-6 text-[#0088f5]" />,
                    title: "Вся бухгалтерия на нас",
                    description: 'Мы поможем с начальными настройками бухгалтерии, первичной документацией и отчетностью'
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-[#0088f5]" />,
                    title: "Поддержка по налогам и отчётности",
                    description: 'Юристы и бухгалтеры проконсультируют по всем вопросам касательно налогов и отчетности'
                  },
                ].map((item, index) => (
                  <div key={index} className="group flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#EBF8FF] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0f172a]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[#64748b]">
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

      {/* FAQ */}
      <div className="py-24 sm:py-32 bg-[#f8fafc]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Часто задаваемые вопросы
            </h2>
            <p className="mt-6 text-lg text-[#64748b]">
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
                  <span className="text-lg font-medium text-[#0f172a]">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#0088f5]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#64748b]" />
                  )}
                </button>
                <div 
                  className={`px-6 pb-5 transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-[#64748b]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate overflow-hidden bg-[#0f172a]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Начните свой бизнес уже сегодня
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Зарегистрируйте ТОО за 1 день и получите полностью готовый к работе бизнес с поддержкой на каждом этапе
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/77474288095?text=Здравствуйте!%20Хочу%20открыть%20ТОО%20через%20вас.%20Какой%20следующий%20шаг?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight size={20} />
                Открыть компанию
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