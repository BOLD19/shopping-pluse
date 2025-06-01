'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CabinetPage() {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement proper form submission logic
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setFormData({ login: '', password: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-[#F0F4FF] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-[#1A1A1A]">
            Вход в личный кабинет
          </h2>
          <p className="mt-2 text-center text-sm text-[#6B6B6B]">
            Введите данные для входа в систему
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="login" className="block text-sm font-medium text-[#4A4A4A] mb-1">
                Логин
              </label>
              <input
                id="login"
                name="login"
                type="text"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-200 rounded-xl placeholder-gray-400 text-[#1A1A1A] focus:outline-none focus:ring-[#8F6ED5] focus:border-[#8F6ED5] focus:z-10 sm:text-sm"
                placeholder="Введите логин"
                value={formData.login}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#4A4A4A] mb-1">
                Пароль
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-200 rounded-xl placeholder-gray-400 text-[#1A1A1A] focus:outline-none focus:ring-[#8F6ED5] focus:border-[#8F6ED5] focus:z-10 sm:text-sm"
                placeholder="Введите пароль"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-base font-medium text-white bg-[#8F6ED5] hover:bg-[#7F5EC5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8F6ED5] transition-all duration-300"
            >
              Войти
            </button>
        </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                href="#"
                className="font-medium text-[#8F6ED5] hover:text-[#7F5EC5] transition-all duration-300"
              >
                Забыли пароль?
              </Link>
            </div>
            <div className="text-sm">
              <Link
                href="/"
                className="font-medium text-[#8F6ED5] hover:text-[#7F5EC5] transition-all duration-300"
              >
                На главную
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 