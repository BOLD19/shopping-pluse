'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { 
  SmartphoneNfc,
  CreditCard, 
  Wallet, 
  Clock, 
  BarChart2,
  Bell,
  MessageSquare,
  Users,
  MonitorSmartphone,
  Shield,
  Zap,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import BnplBusinessSimplificationBlock from '@/components/BnplBusinessSimplificationBlock'

export default function BankingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Dark Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#232136] to-[#2D2A3A] z-0"></div>
        <div className="absolute inset-0 bg-grid-purple/[0.04] bg-[length:20px_20px] z-0"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#8F6ED5]/10 blur-[100px] z-0"></div>
        {/* Фиолетовые прямоугольники как на BNPL */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] transform rotate-[-10deg] translate-x-1/4 translate-y-[-10%] bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#FDFCFB] opacity-40 rounded-[40px] transition-all duration-1000"></div>
          <div className="absolute top-1/3 right-0 w-[600px] h-[400px] transform rotate-[-15deg] translate-x-1/3 bg-gradient-to-br from-[#7F5EC5] via-[#5B3FD5] to-[#FDFCFB] opacity-30 rounded-[40px] transition-all duration-1000"></div>
          <div className="absolute bottom-10 right-1/4 w-[300px] h-[200px] transform rotate-[-5deg] bg-gradient-to-br from-[#6B4FD5] via-[#4B2FD5] to-[#FDFCFB] opacity-20 rounded-[40px] transition-all duration-1000"></div>
        </div>
        
        <div className="container relative z-10 flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
          <div className="flex-1 text-left mb-10 lg:mb-0 w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 md:-ml-[36px]">
              Современный банкинг<br />для бизнеса
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 md:-ml-[36px]">
              Мобильное приложение и интернет-банк Pluse — всё, что нужно предпринимателю для контроля за деньгами.
            </p>
            
            <Link
              href={`https://wa.me/77474288095?text=${encodeURIComponent('Здравствуйте! Хочу отрыть счет для бизнеса у вас')}`}
              className="inline-flex items-center bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] hover:from-[#7F5EC5] hover:to-[#6F4DB5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all md:-ml-[36px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Записаться в список ожидания
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Device Frame */}
              <div className="relative bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-100 rounded-full"></div>
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <SmartphoneNfc className="w-8 h-8 text-[#8F6ED5] mr-2" />
                      <span className="text-[#1A1A1A] font-bold">Pluse Banking</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-lime-500"></div>
                      <div className="w-3 h-3 rounded-full bg-[#8F6ED5]"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-[#F0F4FF] rounded-xl p-4">
                      <p className="text-sm text-[#6B6B6B] mb-1">Баланс счёта</p>
                      <p className="text-2xl font-bold text-[#1A1A1A]">358 950 ₸</p>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-xs text-[#6B6B6B]">Счёт: KZ123456789</span>
                        <span className="text-xs px-2 py-1 bg-lime-100 text-lime-600 rounded-full">Активен</span>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <CreditCard className="w-5 h-5 text-[#8F6ED5] mr-2" />
                          <span className="text-sm font-medium text-[#1A1A1A]">Последние операции</span>
                        </div>
                        <span className="text-xs text-[#6B6B6B]">Обновлено</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-[#1A1A1A]">Перевод ТОО &quot;Альфа&quot;</p>
                            <p className="text-xs text-[#6B6B6B]">12:30, сегодня</p>
                          </div>
                          <p className="text-sm font-medium text-lime-600">+45 000 ₸</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-[#1A1A1A]">Оплата счета №123</p>
                            <p className="text-xs text-[#6B6B6B]">10:15, сегодня</p>
                          </div>
                          <p className="text-sm font-medium text-red-500">-12 500 ₸</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 py-3 bg-[#F0F4FF] rounded-xl flex flex-col items-center justify-center">
                    <Wallet className="h-5 w-5 text-[#8F6ED5] mb-1" />
                    <span className="text-xs text-[#6B6B6B]">Платёж</span>
                  </button>
                  <button className="flex-1 py-3 bg-[#F0F4FF] rounded-xl flex flex-col items-center justify-center">
                    <BarChart2 className="h-5 w-5 text-[#8F6ED5] mb-1" />
                    <span className="text-xs text-[#6B6B6B]">Аналитика</span>
                  </button>
                  <button className="flex-1 py-3 bg-[#F0F4FF] rounded-xl flex flex-col items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-[#8F6ED5] mb-1" />
                    <span className="text-xs text-[#6B6B6B]">Поддержка</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F0F4FF]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-16">
            Возможности интернет-банка Pluse.kz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Платежи и переводы<br className='hidden md:block' />за 1 минуту</h3>
              <p className="text-[#6B6B6B]">Мгновенные переводы между счетами и оплата налогов, коммунальных услуг и счетов контрагентов</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                <BarChart2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">История операций<br className='hidden md:block' />и аналитика</h3>
              <p className="text-[#6B6B6B]">Полная история транзакций с удобной фильтрацией и графики доходов/расходов по категориям</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                <Bell className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Уведомления<br className='hidden md:block' />о движениях</h3>
              <p className="text-[#6B6B6B]">Мгновенные push и email-уведомления о каждой операции по вашим счетам и картам</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Поддержка в чате</h3>
              <p className="text-[#6B6B6B]">Консультация со специалистами банка прямо в приложении без звонков и ожидания</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Мультидоступ</h3>
              <p className="text-[#6B6B6B]">Настройка различных уровней доступа для сотрудников с разграничением прав операций</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                <MonitorSmartphone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Доступ с любого устройства</h3>
              <p className="text-[#6B6B6B]">Одинаково удобный интерфейс на телефоне, планшете или компьютере с синхронизацией данных</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-16">
            Почему это удобно для бизнеса
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-[#F0F4FF] rounded-2xl p-8 group-hover:bg-opacity-0 transition-colors min-h-[340px]">
                <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-opacity-10">
                  <Clock className="h-8 w-8 text-[#8F6ED5] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-white transition-colors">
                  Работает 24/7
                </h3>
                
                <p className="text-[#6B6B6B] group-hover:text-white/90 transition-colors">
                  Доступ к счетам и операциям в любое время суток с любого устройства
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-[#F0F4FF] rounded-2xl p-8 group-hover:bg-opacity-0 transition-colors min-h-[340px]">
                <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-opacity-10">
                  <Zap className="h-8 w-8 text-[#8F6ED5] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-white transition-colors">
                  Простой доступ
                </h3>
                
                <p className="text-[#6B6B6B] group-hover:text-white/90 transition-colors">
                  Не нужно посещать отделение — все операции в вашем смартфоне
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-[#F0F4FF] rounded-2xl p-8 group-hover:bg-opacity-0 transition-colors min-h-[340px]">
                <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-opacity-10">
                  <Shield className="h-8 w-8 text-[#8F6ED5] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-white transition-colors">
                  Надёжная защита
                </h3>
                
                <p className="text-[#6B6B6B] group-hover:text-white/90 transition-colors">
                  Многоуровневая система безопасности для защиты ваших данных и средств
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-[#F0F4FF] rounded-2xl p-8 group-hover:bg-opacity-0 transition-colors min-h-[340px]">
                <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-opacity-10">
                  <FileSpreadsheet className="h-8 w-8 text-[#8F6ED5] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-white transition-colors">
                  Интеграции
                </h3>
                
                <p className="text-[#6B6B6B] group-hover:text-white/90 transition-colors">
                  Автоматический обмен данными с бухгалтерией и другими сервисами Pluse
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок: Мы делаем бизнес проще — честно и прозрачно */}
      <BnplBusinessSimplificationBlock />

      {/* Steps Section */}
      <section className="py-20 bg-[#F0F4FF]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-16">
            Как подключить?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg min-h-[320px]">
                <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Откройте счёт в Pluse</h3>
                <p className="text-[#6B6B6B]">Зарегистрируйтесь онлайн или посетите отделение банка для открытия счёта</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg min-h-[320px]">
                <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Войдите в приложение</h3>
                <p className="text-[#6B6B6B]">Скачайте и установите приложение Pluse Banking и авторизуйтесь</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg min-h-[320px]">
                <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Получите доступ</h3>
                <p className="text-[#6B6B6B]">Доступ к интернет-банку и мобильному приложению предоставляется автоматически</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" id="connect">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              Всё под контролем — прямо с телефона
            </h2>
            
            <p className="text-xl text-[#6B6B6B] mb-10">
              Управляйте финансами вашего бизнеса где бы вы ни находились —<br />
              в офисе, дома или в командировке
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href={`https://wa.me/77474288095?text=${encodeURIComponent('Добрый день! Хочу открыть интернет-банк Pluse для бизнеса.')}`}
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] hover:from-[#7F5EC5] hover:to-[#6F4DB5] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Подключить интернет-банк
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center space-x-6 text-[#6B6B6B]">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#8F6ED5] mr-2" />
                <span>Доступ 24/7</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#8F6ED5] mr-2" />
                <span>Надёжная защита</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#8F6ED5] mr-2" />
                <span>Техподдержка</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 