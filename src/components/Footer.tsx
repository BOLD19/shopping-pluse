'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MessageCircle, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1f1f24] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <Image
              src="/logo_white.png"
              alt="Pluse.kz"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-white">О компании</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link href="/digital-branch" className="text-sm text-gray-300 hover:text-white transition-colors">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Партнёрство
                  </Link>
                </li>
                <li>
                  <Link href="/digital-branch#trust" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Резидент Astana Hub
                  </Link>
                </li>
                <li>
                  <Link href="/digital-branch" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Поддержка
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Сервисы</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link href="/account" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Открытие счёта
                  </Link>
                </li>
                <li>
                  <Link href="/bnpl" className="text-sm text-gray-300 hover:text-white transition-colors">
                    BNPL
                  </Link>
                </li>
                <li>
                  <Link href="/shopping" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Pluse.Shopping
                  </Link>
                </li>
                <li>
                  <Link href="/register-company" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Регистрация ТОО
                  </Link>
                </li>
                <li>
                  <Link href="/insurance" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Страхование
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Документы</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Пользовательское соглашение',
                  'Политика конфиденциальности',
                  'Правила обработки данных'
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Контакты</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link href="mailto:support@pluse.kz" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    support@pluse.kz
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://wa.me/77474288095?text=Здравствуйте!%20Мне%20нужна%20помощь%20по%20работе%20с%20сервисом%20Pluse.kz."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    +7 747 428 8095
                  </a>
                </li>
                <li>
                  <Link href="https://instagram.com/pluse.kz" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <Instagram className="h-4 w-4" />
                    @pluse.kz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 Pluse.kz</p>
            <div className="text-sm text-gray-400">
              Проект реализуется ТОО &quot;Persons&quot; БИН 220640014105 в сотрудничестве с АО «Bank RBK» (лицензия №1.2.100/245/41 от 05.04.2021 г., выдана АРРФР)
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 