'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import DigitalBranchComparison from '@/components/about-us/DigitalBranchComparison'
import PartnershipWithRBK from '@/components/about-us/PartnershipWithRBK'

export default function AboutUs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "Что такое Pluse.kz?",
      answer: "Pluse.kz — это цифровая финансовая платформа для предпринимателей в Казахстане. Мы предоставляем инновационные решения для бизнеса: рассрочку, цифровые банковские услуги, платежные решения. Наша миссия — сделать финансовые услуги простыми и доступными для всех предпринимателей."
    },
    {
      question: "Кто стоит за компанией?",
      answer: "Pluse.kz является резидентом Astana Hub и имеет лицензию Агентства по регулированию и развитию финансового рынка Республики Казахстан (АРРФР). Среди наших инвесторов — венчурный фонд Tumar Ventures, поддерживаемый Всемирным банком и Министерством цифрового развития, инноваций и аэрокосмической промышленности Казахстана."
    },
    {
      question: "Как работает наша бизнес-модель?",
      answer: "Мы работаем как BaaS (Banking as a Service) платформа, предоставляя финтех-услуги через партнерские банки. Наша технологическая платформа интегрируется с банковскими системами, позволяя предпринимателям получать современные финансовые услуги через единый интерфейс."
    },
    {
      question: "Что такое Astana Hub?",
      answer: "Astana Hub — международный технопарк финансовых технологий в Казахстане. Как резидент Astana Hub, мы работаем в особой правовой зоне с льготным налогообложением и упрощенным регулированием. Это позволяет нам быстрее внедрять инновации и предлагать конкурентные условия."
    },
    {
      question: "Кто такой Tumar Ventures?",
      answer: "Tumar Ventures — венчурный фонд, созданный при поддержке Всемирного банка и правительства Казахстана для развития финтех-экосистемы. Фонд инвестирует в перспективные технологические стартапы региона. Их инвестиции подтверждают качество и потенциал нашего проекта."
    },
    {
      question: "Почему мы безопасны?",
      answer: "Мы работаем под надзором АРРФР — главного финансового регулятора Казахстана. Все средства клиентов хранятся в партнерских банках с полным страхованием депозитов. Наша платформа соответствует международным стандартам безопасности и проходит регулярные аудиты."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Partnership Section */}
      <PartnershipWithRBK />
      
      {/* Digital Branch Comparison */}
      <DigitalBranchComparison />

      {/* FAQ Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl mb-4">
              Частые вопросы
            </h2>
            <p className="text-lg text-[#64748b]">
              Всё, что нужно знать о Pluse.kz и нашей деятельности
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-[#f1f5f9] overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#f8fafc] transition-colors"
                >
                  <span className="text-lg font-semibold text-[#0f172a] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#64748b] transition-transform flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-[#f1f5f9] pt-4">
                      <p className="text-[#64748b] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 