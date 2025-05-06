'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Главная', href: '/' },
    { name: 'BNPL', href: '/bnpl' },
    { name: 'Pluse.Market', href: '/market' },
    { name: 'Сервисы', href: '/services' },
    { name: 'Тарифы', href: '/pricing' },
    { name: 'О компании', href: '/about' },
    { name: 'Кабинет', href: '/login' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#1A1A1A]">
          Pluse.kz
            </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/bnpl" className="text-[#4A4A4A] hover:text-[#1A1A1A]">
            Сервисы
          </Link>
          <Link href="/partners" className="text-[#4A4A4A] hover:text-[#1A1A1A]">
            Партнёрам
          </Link>
          <Link href="/digital-branch" className="text-[#4A4A4A] hover:text-[#1A1A1A]">
            Цифровой филиал
              </Link>
              <Link
            href="/cabinet" 
            className="bg-[#9539F2] text-white px-4 py-2 rounded-lg hover:bg-[#8033D8] transition-colors"
              >
            Кабинет
              </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 