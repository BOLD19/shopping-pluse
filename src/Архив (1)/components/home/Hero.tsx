'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Простой хук для отслеживания состояния монтирования
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
  }, [])
  
  return hasMounted
}

const bnplStats = [
  { id: 1, text: '82 заявки одобрено за месяц' },
  { id: 2, text: '15 заявок одобрено сегодня' },
  { id: 3, text: 'Средняя сумма — 240 000 ₸' },
]

const shopStats = [
  { id: 1, text: 'Магазин создан: pluse.market/demo' },
  { id: 2, text: 'Открыт магазин по продаже техники' },
  { id: 3, text: 'Первый заказ оформлен через 2 часа' },
]

export default function Hero() {
  const hasMounted = useHasMounted()
  const [currentBnplStat, setCurrentBnplStat] = useState(0)
  const [currentShopStat, setCurrentShopStat] = useState(0)
  
  const { scrollY } = useScroll()
  const phoneX = useTransform(scrollY, [0, 300], [0, 300])
  const phoneOpacity = useTransform(scrollY, [0, 200], [1, 0])
  const springPhoneX = useSpring(phoneX, { stiffness: 100, damping: 30 })
  const springPhoneOpacity = useSpring(phoneOpacity, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const bnplInterval = setInterval(() => {
      setCurrentBnplStat((prev) => (prev + 1) % bnplStats.length)
    }, 5000)
    
    const shopInterval = setInterval(() => {
      setCurrentShopStat((prev) => (prev + 1) % shopStats.length)
    }, 5000)
    
    return () => {
      clearInterval(bnplInterval)
      clearInterval(shopInterval)
    }
  }, [])

  // Используем пустые div до монтирования, чтобы обеспечить полную идентичность структуры DOM
  if (!hasMounted) {
    return (
      <section className="relative isolate overflow-hidden py-16 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mt-8 md:mt-0 h-12 md:h-16 lg:h-20 w-full max-w-md bg-gray-200 animate-pulse rounded"></div>
              <div className="mt-6 h-20 w-full max-w-md bg-gray-200 animate-pulse rounded"></div>
              <div className="mt-10 flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-40 h-14 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full md:w-32 h-6 bg-gray-200 animate-pulse rounded"></div>
              </div>
              <div className="mt-4 md:mt-16 pt-3 md:pt-8 border-t border-[#E5E7EB]">
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-8">
                  <div className="flex justify-center w-full md:w-auto">
                    <div className="h-24 w-[200px] bg-gray-200 animate-pulse rounded"></div>
                  </div>
                  <div className="h-10 w-full md:w-64 bg-gray-200 animate-pulse rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="relative hidden md:flex justify-end">
              <div className="w-[280px] h-[560px] bg-gray-200 animate-pulse rounded-[35px]"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Полный рендеринг после монтирования
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 md:mt-0 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] text-center md:text-left"
            >
              Необанк для{' '}
              <span className="text-[#8F6ED5]">предпринимателей</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base md:text-lg leading-8 text-[#4A4A4A] text-center md:text-left"
            >
              Откройте счёт за 5 минут, предложите клиентам рассрочку 0%, запустите интернет-магазин и автоматизируйте бухгалтерию.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-col md:flex-row items-center gap-6"
            >
              <Link
                href="/register"
                className="w-full md:w-auto bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 text-center"
              >
                Открыть счёт
              </Link>
              <Link
                href="/about"
                className="w-full md:w-auto text-center inline-flex items-center justify-center text-[#8F6ED5] font-medium hover:opacity-80 transition-opacity"
              >
                Узнать больше →
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 md:mt-16 pt-3 md:pt-8 border-t border-[#E5E7EB]"
            >
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-8">
                <div className="flex justify-center w-full md:w-auto">
                  <img
                    src="/people_home.svg"
                    alt="Предприниматели"
                    className="h-24 md:h-24 w-auto"
                  />
                </div>
                <div className="-mt-6 md:mt-0 flex items-center justify-center w-full md:w-auto gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-center text-[#1A1A1A] whitespace-nowrap flex items-center">
                    <span className="flex items-center gap-1">
                      <div className="w-4 h-4 text-[#FF69B4] flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      </div>
                      100+
                    </span>
                    {' '}предпринимателей уже с нами
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Phone with Cards */}
          <div className="relative hidden md:flex justify-end">
            <motion.div 
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8
              }}
              style={{
                x: springPhoneX,
                opacity: springPhoneOpacity
              }}
              className="relative w-[280px] h-[560px] translate-x-4"
            >
              {/* iPhone Frame */}
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-[35px] transform rotate-[15deg] perspective-1000">
                {/* Power Button */}
                <div className="absolute -right-[2px] top-[100px] w-[2px] h-[50px] bg-[#2A2A2A] rounded-r-lg" />
                {/* Volume Buttons */}
                <div className="absolute -left-[2px] top-[85px] w-[2px] h-[25px] bg-[#2A2A2A] rounded-l-lg" />
                <div className="absolute -left-[2px] top-[120px] w-[2px] h-[25px] bg-[#2A2A2A] rounded-l-lg" />
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-[#1A1A1A] rounded-b-[14px] flex items-center justify-center">
                  <div className="w-[50px] h-[4px] bg-[#2A2A2A] rounded-full" />
                </div>

                {/* Screen */}
                <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] bg-[#FAFAFA] rounded-[32px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-12 px-4 flex items-center justify-between text-xs bg-gradient-to-b from-[#FAFAFA] to-transparent">
                    <span className="text-[#1A1A1A] font-medium">9:41</span>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="#1A1A1A"/>
                        </svg>
                      </div>
                      <div className="w-3 h-3">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M2 9.5V14.5C2 15.33 2.67 16 3.5 16H4.5C5.33 16 6 15.33 6 14.5V9.5C6 8.67 5.33 8 4.5 8H3.5C2.67 8 2 8.67 2 9.5ZM8 5.5V14.5C8 15.33 8.67 16 9.5 16H10.5C11.33 16 12 15.33 12 14.5V5.5C12 4.67 11.33 4 10.5 4H9.5C8.67 4 8 4.67 8 5.5ZM14 3.5V14.5C14 15.33 14.67 16 15.5 16H16.5C17.33 16 18 15.33 18 14.5V3.5C18 2.67 17.33 2 16.5 2H15.5C14.67 2 14 2.67 14 3.5Z" fill="#1A1A1A"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Cards Container */}
                  <div className="relative w-full h-[calc(100%-3rem)] p-4 flex flex-col gap-4">
                    {/* BNPL Card */}
                    <div className="w-full bg-gradient-to-br from-[#8F6ED5] to-[#6C4CB3] rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <div className="relative w-6 h-6 flex flex-row justify-center gap-1">
                            <div className="w-1 h-full bg-white rounded-full"></div>
                            <div className="w-1 h-full bg-white rounded-full"></div>
                            <div className="w-1 h-full bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white">Рассрочка 0%</h3>
                          <p className="text-xs text-white/70">Мгновенно</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/70">Сумма покупки</span>
                          <span className="text-base font-semibold text-white">250 000 ₸</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/70">Ежемесячный платеж</span>
                          <span className="text-sm font-medium text-white">41 667 ₸ × 6</span>
                        </div>
                        <div className="mt-3">
                          <div className="py-1.5 px-3 bg-[#E0FF4F] rounded-lg inline-block">
                            <span className="text-xs text-[#1A1A1A] font-medium">Одобрено</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Shop Card */}
                    <div className="w-full bg-white rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-[#E0FF4F] rounded-lg flex items-center justify-center">
                          <div className="relative w-6 h-6 flex items-center justify-center">
                            <div className={`
                              w-5 h-6
                              bg-[#F472B6]
                              transform rotate-[-12deg]
                              relative
                            `}
                            style={{
                              clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'
                            }}
                            >
                              <div className="absolute top-[12%] left-[12%] w-1 h-1 rounded-full bg-[#E0FF4F]"></div>
                              <div className="absolute top-0 left-0 w-[25%] h-[25%] bg-[#EC4899]"
                                style={{
                                  clipPath: 'polygon(0 100%, 100% 0, 0 0)'
                                }}
                              ></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-[#E0FF4F]">
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-[#1A1A1A]">Магазин</h3>
                          <p className="text-xs text-[#4A4A4A]">pluse.shopping/demo</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#F9FAFF] rounded-lg p-2">
                          <div className="text-base font-semibold text-[#1A1A1A]">24</div>
                          <div className="text-xs text-[#4A4A4A]">Товара</div>
                        </div>
                        <div className="bg-[#F9FAFF] rounded-lg p-2">
                          <div className="text-base font-semibold text-[#1A1A1A]">12</div>
                          <div className="text-xs text-[#4A4A4A]">Заказов</div>
                        </div>
                        <div className="bg-[#F9FAFF] rounded-lg p-2">
                          <div className="text-base font-semibold text-[#8F6ED5]">4.9</div>
                          <div className="text-xs text-[#4A4A4A]">Рейтинг</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 