import React from 'react';
import Link from 'next/link';
import { UserRound, PiggyBank, MapPin, ArrowRight } from 'lucide-react';

export default function BnplBusinessSimplificationBlock() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative bg-white rounded-[32px] overflow-hidden hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(143,110,213,0.25)] transition-all duration-300">
          <div className="relative px-6 py-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl mb-6 break-words leading-snug text-left px-4">
                  Мы делаем бизнес проще — честно и прозрачно
                </h2>
                <div className="space-y-6">
                  <p className="text-sm sm:text-lg text-[#1A1A1A]/80 leading-relaxed text-left px-4">
                    Pluse.kz&nbsp;— это цифровая платформа для&nbsp;предпринимателей в&nbsp;Казахстане. Мы&nbsp;являемся резидентом Astana Hub и&nbsp;лицензирован Агентством по&nbsp;регулированию и&nbsp;развитию финансового рынка Республики Казахстан (АРРФР).
                    <br /><br />
                    Среди инвесторов проекта&nbsp;— венчурный фонд Tumar Ventures, поддерживаемый Всемирным банком и&nbsp;Министерством цифрового развития, инноваций и&nbsp;аэрокосмической промышленности Казахстана.
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
  );
} 