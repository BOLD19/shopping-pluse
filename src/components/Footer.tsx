'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Pluse.kz</h3>
            <p className="text-gray-400 text-sm">
              Финансовые сервисы для бизнеса
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Сервисы</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bnpl" className="text-gray-400 hover:text-white text-sm">
                  Рассрочка
                </Link>
              </li>
              <li>
                <Link href="/shopping" className="text-gray-400 hover:text-white text-sm">
                  Интернет-магазин
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="text-gray-400 hover:text-white text-sm">
                  Бухгалтерия
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Компания</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white text-sm">
                  Партнёрам
                </Link>
              </li>
              <li>
                <Link href="/digital-branch" className="text-gray-400 hover:text-white text-sm">
                  Цифровой филиал
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Контакты</h4>
            <div className="space-y-4">
              <a 
                href="mailto:hello@pluse.kz" 
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <Mail size={16} />
                hello@pluse.kz
              </a>
              <a 
                href="https://instagram.com/pluse.kz" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <Instagram size={16} />
                @pluse.kz
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Pluse.kz. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Конфиденциальность
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 