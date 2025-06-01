'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Pluse.kz"
              width={280}
              height={80}
              className="h-8 w-auto"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10">
            <div className="relative group">
              <Link href="/services" className="text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors flex items-center gap-1">
                Сервисы
                <ChevronDown className="w-4 h-4" />
              </Link>
              {/* Dropdown menu */}
              <div className="fixed left-0 right-0 mt-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="container mx-auto px-6">
                  <div className="py-8 grid grid-cols-2 gap-x-24">
                    <div>
                      <h3 className="text-[#1A1A1A] font-bold mb-4">Банковское обслуживание</h3>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/account" className="text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors">
                            Открытие счета
                          </Link>
                        </li>
                        <li>
                          <Link href="/tariffs" className="text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors">
                            Тарифы
                          </Link>
                        </li>
                        <li>
                          <Link href="/banking" className="text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors">
                            Мобильный и интернет-банк
                          </Link>
                        </li>
                        <li>
                          <Link href="/card" className="text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors">
                            Бизнес карта
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[#1A1A1A] font-bold mb-4">Сервисы</h3>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/bnpl" className="text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors">
                            Рассрочка (BNPL)
                          </Link>
                        </li>
                        <li>
                          <Link href="/register-company" className="text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors">
                            Регистрация ТОО
                          </Link>
                        </li>
                        <li>
                          <Link href="/insurance" className="text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors">
                            Страхование
                          </Link>
                        </li>
                        <li>
                          <Link href="/shopping" className="text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors">
                            Pluse.Shopping
                          </Link>
                        </li>
                        <li>
                          <div className="text-[#4A4A4A] opacity-50 flex items-center gap-1">
                            Бухгалтерия
                            <span className="text-xs bg-[#E0FF4F] text-[#1A1A1A] px-2 py-0.5 rounded">скоро</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link 
              href="/partners" 
              className={`text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors ${
                pathname === "/partners" ? 'text-[#8F6ED5]' : ''
              }`}
            >
              Партнёрам
            </Link>
            <Link 
              href="/digital-branch" 
              className={`text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors ${
                pathname === "/digital-branch" ? 'text-[#8F6ED5]' : ''
              }`}
            >
              Цифровой филиал
            </Link>
            <Link 
              href="/cabinet" 
              className="bg-[#8F6ED5] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-200"
            >
              Кабинет
            </Link>
          </nav>

          <button 
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#F0F0F0]">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <div className="space-y-3">
              <h3 className="text-[#1A1A1A] font-bold text-sm">Банковское обслуживание</h3>
              <Link href="/account" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors pl-4">
                Открытие счета
              </Link>
              <Link href="/tariffs" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors pl-4">
                Тарифы
              </Link>
              <Link href="/banking" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors pl-4">
                Мобильный и интернет-банк
              </Link>
              <Link href="/card" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors pl-4">
                Бизнес карта
              </Link>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-[#1A1A1A] font-bold text-sm">Сервисы</h3>
              <Link href="/bnpl" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors pl-4">
                Рассрочка (BNPL)
              </Link>
              <Link href="/register-company" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors pl-4">
                Регистрация ТОО
              </Link>
              <Link href="/insurance" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors pl-4">
                Страхование
              </Link>
              <Link href="/shopping" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors pl-4">
                Pluse.Shopping
          </Link>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <Link href="/partners" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors">
            Партнёрам
          </Link>
              <Link href="/digital-branch" className="block text-[#4A4A4A] text-sm hover:text-[#8F6ED5] transition-colors">
            Цифровой филиал
              </Link>
              <Link
            href="/cabinet" 
                className="inline-block bg-[#8F6ED5] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-200"
              >
            Кабинет
              </Link>
        </div>
          </div>
        </div>
      )}
    </header>
  );
} 