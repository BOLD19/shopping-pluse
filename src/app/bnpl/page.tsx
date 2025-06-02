'use client'

import { useState } from 'react'
import { Check, ArrowRight, PhoneCall, Smartphone, Sofa, GraduationCap, Stethoscope, Home, ShoppingBag, ShieldCheck, PiggyBank, MapPin, CreditCard, UserRound, Calendar, Banknote, Percent, QrCode, Headset, MessageCircle, AlertCircle, Ban, UserX, ShieldOff, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import BnplHeroBlock from '@/components/bnpl/BnplHeroBlock'
import BnplProblemsBlock from '@/components/bnpl/BnplProblemsBlock'
import BnplApprovalBlock from '@/components/bnpl/BnplApprovalBlock'
import BnplPersonalCabinetBlock from '@/components/bnpl/BnplPersonalCabinetBlock'
import BnplConditionsBlock from '@/components/bnpl/BnplConditionsBlock'

export default function BnplPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })
  const [phoneError, setPhoneError] = useState('')

  // Состояние для калькулятора
  const [calculator, setCalculator] = useState({
    price: 100000,
    term: 12,
    commission: 3,
    type: 'installment'
  })

  // Добавляем состояние для pop-up окон
  const [showPopups, setShowPopups] = useState({
    price: false,
    term: false,
    commission: false
  })

  // Обработчик изменений для калькулятора
  const handleCalculatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCalculator(prev => ({
      ...prev,
      [name]: parseInt(value)
    }))
  }

  // Расчеты для калькулятора
  const commissionAmount = Math.round(calculator.price * (calculator.commission / 100))
  const finalAmount = calculator.price - commissionAmount
  const monthlyPayment = Math.round(calculator.price / calculator.term)

  // Форматирование чисел
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    // Очищаем ошибку при изменении номера
    if (name === 'phone') {
      setPhoneError('')
    }
    
    // Убираем все нецифровые символы из номера
    const phoneValue = name === 'phone' ? value.replace(/\D/g, '') : value
    
    setFormData({
      ...formData,
      [name]: phoneValue
    })
  }

  // Отправка сообщения в Telegram
  const sendTelegramMessage = async (name: string, phone: string) => {
    const token = '8017614856:AAGdZg1ipHv5pDDZTfBlACaGhBOpqDH7oJc';
    const chatId = '5639011935';
    const message = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });
  };

  // Обработка отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObj = new FormData(e.target as HTMLFormElement);
    const name = formDataObj.get('name') || '';
    const phone = formDataObj.get('phone') || '';

    await sendTelegramMessage(name.toString().trim(), phone.toString().trim());

    alert('Спасибо! Ваша заявка отправлена.');
    (e.target as HTMLFormElement).reset();
    setFormData({ name: '', phone: '' });
    setPhoneError('');
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="flex-1">
        <BnplHeroBlock />

        <BnplProblemsBlock />

        <BnplApprovalBlock />

        <BnplPersonalCabinetBlock />

        <BnplConditionsBlock />

        {/* Terms Section */}
        {/* Удалён блок 'Pluse.kz — надёжный сервис для бизнеса' */}
      </main>
    </div>
  )
} 