'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { 
  Store,
  Truck, 
  CreditCard, 
  Package,
  Smartphone,
  ShoppingBag,
  Building2,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Boxes,
  Percent,
  Users,
  Repeat,
  BadgeCheck,
  Settings,
  Globe,
  MessageSquare,
  Briefcase,
  ShieldCheck,
  Zap,
  BarChart3
} from 'lucide-react'

export default function ShoppingPage() {
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement proper form submission logic
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setPhone('')
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F4FF] via-white to-white"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[length:20px_20px]"></div>
        
        {/* Purple Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#8F6ED5]/10 blur-[120px]"></div>
        
        <div className="container relative z-10 max-w-6xl mx-auto pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-8">
                Интернет-магазин без комиссий — { }
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8F6ED5] to-lime-500">
                  за 1 день
                </span>
              </h1>
              
              <div className="space-y-4 mb-10">
                <p className="text-lg md:text-xl text-[#6B6B6B]">
                  Создайте свой магазин с доставкой, оплатой и рассрочкой.
                </p>
                <p className="text-lg md:text-xl text-[#6B6B6B]">
                  Без программиста, без комиссии, без ограничений маркетплейсов.
                </p>
              </div>
              
              <Link 
                href="#start"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
              >
                Запустить магазин
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="relative">
              {/* 3D Device Frame */}
              <div className="relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-2xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-100 rounded-full"></div>
                
                {/* Store Interface */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Store className="h-8 w-8 text-[#8F6ED5]" />
                      <span className="text-[#1A1A1A] font-medium">Ваш магазин</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-lime-500"></div>
                      <div className="w-3 h-3 rounded-full bg-[#8F6ED5]"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F0F4FF] p-4 rounded-xl">
                      <div className="bg-white p-3 rounded-lg text-center mb-3">
                        <Truck className="h-6 w-6 text-[#8F6ED5] mx-auto mb-2" />
                        <p className="text-sm text-[#6B6B6B]">Доставка</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <CreditCard className="h-6 w-6 text-[#8F6ED5] mx-auto mb-2" />
                        <p className="text-sm text-[#6B6B6B]">Оплата</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#F0F4FF] p-4 rounded-xl">
                      <div className="bg-white p-3 rounded-lg text-center mb-3">
                        <ShoppingBag className="h-6 w-6 text-[#8F6ED5] mx-auto mb-2" />
                        <p className="text-sm text-[#6B6B6B]">Товары</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <Briefcase className="h-6 w-6 text-[#8F6ED5] mx-auto mb-2" />
                        <p className="text-sm text-[#6B6B6B]">Бренд</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] p-4 rounded-xl">
                    <p className="text-white font-medium">Готово к запуску</p>
                    <p className="text-sm text-white/80">Ваш магазин онлайн</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center text-sm text-lime-600">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Без комиссии
                  </span>
                </div>
              </div>

              {/* 3D Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-lime-400/20 to-lime-600/20 rounded-2xl transform rotate-12 backdrop-blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#8F6ED5]/20 to-[#7F5EC5]/20 rounded-2xl transform -rotate-12 backdrop-blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Pluse.Shopping Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[length:20px_20px]"></div>
        
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
                Что такое Pluse.Shopping
              </h2>
              
              <div className="space-y-6 mb-12">
                <p className="text-xl text-[#6B6B6B]">
                  Pluse.Shopping — это ваш собственный магазин с полным контролем над бизнесом. Создайте уникальный бренд-опыт для ваших клиентов, без ограничений маркетплейсов.
                </p>
                <p className="text-xl text-[#6B6B6B]">
                  В отличие от маркетплейсов, вы не платите комиссии, сами контролируете клиентскую базу и развиваете собственный бренд. Все инструменты для успешной торговли уже встроены в платформу.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#F0F4FF] rounded-2xl p-6">
                  <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Конструктор без кода</h3>
                  <p className="text-[#6B6B6B]">Создавайте магазин без знаний программирования</p>
                </div>

                <div className="bg-[#F0F4FF] rounded-2xl p-6">
                  <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Оплата и рассрочка</h3>
                  <p className="text-[#6B6B6B]">Встроенный эквайринг и рассрочка от Pluse</p>
                </div>

                <div className="bg-[#F0F4FF] rounded-2xl p-6">
                  <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Доставка</h3>
                  <p className="text-[#6B6B6B]">Интеграция с популярными службами доставки</p>
                </div>

                <div className="bg-[#F0F4FF] rounded-2xl p-6">
                  <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Панель заказов</h3>
                  <p className="text-[#6B6B6B]">Удобное управление всеми заказами</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#8F6ED5]/10 rounded-full blur-3xl"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-xl">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#F0F4FF] rounded-xl p-4">
                    <h4 className="text-2xl font-bold text-[#1A1A1A] mb-2">0%</h4>
                    <p className="text-[#6B6B6B]">Комиссия за заказы</p>
                  </div>
                  <div className="bg-[#F0F4FF] rounded-xl p-4">
                    <h4 className="text-2xl font-bold text-[#1A1A1A] mb-2">1 день</h4>
                    <p className="text-[#6B6B6B]">Запуск магазина</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-5 w-5 text-lime-500 mr-3" />
                    <span>Собственный домен</span>
                  </div>
                  <div className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-5 w-5 text-lime-500 mr-3" />
                    <span>Без ограничений на товары</span>
                  </div>
                  <div className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-5 w-5 text-lime-500 mr-3" />
                    <span>Контроль клиентской базы</span>
                  </div>
                  <div className="flex items-center text-[#6B6B6B]">
                    <CheckCircle2 className="h-5 w-5 text-lime-500 mr-3" />
                    <span>Интеграция с мессенджерами</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 overflow-hidden bg-[#F0F4FF]">
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[length:20px_20px]"></div>
        
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-16">
            Что входит в Pluse.Shopping
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#8F6ED5] transition-colors shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Интернет-магазин с корзиной</h3>
              <p className="text-[#6B6B6B]">Готовый магазин с каталогом, корзиной и оформлением заказа</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#8F6ED5] transition-colors shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Уникальный домен</h3>
              <p className="text-[#6B6B6B]">Подключите свой домен или получите поддомен pluse.shopping</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#8F6ED5] transition-colors shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Percent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">0% комиссия за заказы</h3>
              <p className="text-[#6B6B6B]">Никаких скрытых комиссий и платежей с оборота</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#8F6ED5] transition-colors shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Эквайринг и рассрочка</h3>
              <p className="text-[#6B6B6B]">Встроенные платежи и рассрочка от Pluse</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#8F6ED5] transition-colors shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Telegram и WhatsApp</h3>
              <p className="text-[#6B6B6B]">Подключение мессенджеров для общения с клиентами</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#8F6ED5] transition-colors shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Доставка и управление</h3>
              <p className="text-[#6B6B6B]">Интеграция с службами доставки и панель управления</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[length:20px_20px]"></div>
        
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-16">
            Для кого подойдёт Pluse.Shopping
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-[#F0F4FF] rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[#8F6ED5] hover:to-[#7F5EC5] transition-all">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white mb-4">Магазины одежды и электроники</h3>
              <p className="text-[#6B6B6B] group-hover:text-white/90">Создайте собственный интернет-магазин с уникальным дизайном и полным контролем над продажами</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-[#6B6B6B] group-hover:text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-lime-500 group-hover:text-lime-400 mr-3 flex-shrink-0" />
                  <span>Удобный каталог товаров</span>
                </div>
                <div className="flex items-center text-[#6B6B6B] group-hover:text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-lime-500 group-hover:text-lime-400 mr-3 flex-shrink-0" />
                  <span>Система размеров и характеристик</span>
                </div>
              </div>
            </div>

            <div className="group bg-[#F0F4FF] rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[#8F6ED5] hover:to-[#7F5EC5] transition-all">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white mb-4">Продавцы в Instagram и Telegram</h3>
              <p className="text-[#6B6B6B] group-hover:text-white/90">Объедините все каналы продаж в одном месте и автоматизируйте работу с заказами</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-[#6B6B6B] group-hover:text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-lime-500 group-hover:text-lime-400 mr-3 flex-shrink-0" />
                  <span>Интеграция с мессенджерами</span>
                </div>
                <div className="flex items-center text-[#6B6B6B] group-hover:text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-lime-500 group-hover:text-lime-400 mr-3 flex-shrink-0" />
                  <span>Единая база клиентов</span>
                </div>
              </div>
            </div>

            <div className="group bg-[#F0F4FF] rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[#8F6ED5] hover:to-[#7F5EC5] transition-all">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white mb-4">Онлайн-курсы и эксперты</h3>
              <p className="text-[#6B6B6B] group-hover:text-white/90">Продавайте цифровые товары и доступы к обучению через удобный магазин</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-[#6B6B6B] group-hover:text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-lime-500 group-hover:text-lime-400 mr-3 flex-shrink-0" />
                  <span>Автоматическая выдача доступов</span>
                </div>
                <div className="flex items-center text-[#6B6B6B] group-hover:text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-lime-500 group-hover:text-lime-400 mr-3 flex-shrink-0" />
                  <span>Рассрочка для клиентов</span>
                </div>
              </div>
            </div>

            <div className="group bg-[#F0F4FF] rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[#8F6ED5] hover:to-[#7F5EC5] transition-all">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white mb-4">Бренды с маркетплейсов</h3>
              <p className="text-[#6B6B6B] group-hover:text-white/90">Развивайте прямые продажи без комиссий и ограничений площадок</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-[#6B6B6B] group-hover:text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-lime-500 group-hover:text-lime-400 mr-3 flex-shrink-0" />
                  <span>Собственный брендинг</span>
                </div>
                <div className="flex items-center text-[#6B6B6B] group-hover:text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-lime-500 group-hover:text-lime-400 mr-3 flex-shrink-0" />
                  <span>Выше маржинальность</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative py-24 overflow-hidden bg-[#F0F4FF]">
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[length:20px_20px]"></div>
        
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-16">
            Как работает Pluse.Shopping
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Регистрируетесь</h3>
                <p className="text-[#6B6B6B]">Создайте аккаунт в Pluse.Shopping за 2 минуты</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-[#8F6ED5] to-transparent"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Заполняете товары</h3>
                <p className="text-[#6B6B6B]">Добавьте товары и настройте каталог магазина</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-[#8F6ED5] to-transparent"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Получаете магазин</h3>
                <p className="text-[#6B6B6B]">Ваш магазин готов принимать заказы онлайн</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-[#8F6ED5] to-transparent"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Продаёте</h3>
                <p className="text-[#6B6B6B]">Принимайте заказы без комиссий и ограничений</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-[#6B6B6B]">
              Всё занимает до 1 дня. Без модерации, как на маркетплейсах.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[length:20px_20px]"></div>
        
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-16">
            Ваши выгоды с Pluse.Shopping
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F0F4FF] rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Percent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">25%</h3>
              <p className="text-[#6B6B6B]">Экономия на комиссиях маркетплейсов</p>
            </div>

            <div className="bg-[#F0F4FF] rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Прямое общение</h3>
              <p className="text-[#6B6B6B]">Вы сами общаетесь с клиентами через удобные каналы</p>
            </div>

            <div className="bg-[#F0F4FF] rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Свой бренд</h3>
              <p className="text-[#6B6B6B]">Развивайте узнаваемость через собственный магазин</p>
            </div>

            <div className="bg-[#F0F4FF] rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-[#8F6ED5] to-[#7F5EC5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Больше продаж</h3>
              <p className="text-[#6B6B6B]">Повышайте повторные продажи и средний чек</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-[#F0F4FF]" id="start">
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[length:20px_20px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#8F6ED5]/10 blur-[120px]"></div>
        
        <div className="container relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Запустите интернет-магазин уже сегодня — бесплатно
          </h2>
          
          <p className="text-xl text-[#6B6B6B] mb-12">
            Создайте магазин за 1 день и начните продавать без комиссий
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ваш телефон"
                className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#8F6ED5]"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] rounded-xl text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
              >
                Создать магазин
              </button>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-6 text-[#6B6B6B]">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-lime-500 mr-2" />
              <span>Без комиссии</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-lime-500 mr-2" />
              <span>Запуск за 1 день</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-lime-500 mr-2" />
              <span>Поддержка 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 