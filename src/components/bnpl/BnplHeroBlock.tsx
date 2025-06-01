import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function BnplHeroBlock() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#181C36] h-[568px] py-8 sm:py-0">
      {/* Геометрические элементы */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        {/* Большой фиолетовый угол */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] transform rotate-[-10deg] translate-x-1/4 translate-y-[-10%] bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#FDFCFB] opacity-40 rounded-[40px] transition-all duration-1000"></div>
        {/* Средний угол */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[400px] transform rotate-[-15deg] translate-x-1/3 bg-gradient-to-br from-[#7F5EC5] via-[#5B3FD5] to-[#FDFCFB] opacity-30 rounded-[40px] transition-all duration-1000"></div>
        {/* Маленький угол */}
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[200px] transform rotate-[-5deg] bg-gradient-to-br from-[#6B4FD5] via-[#4B2FD5] to-[#FDFCFB] opacity-20 rounded-[40px] transition-all duration-1000"></div>
      </div>
      {/* Текстовый блок hero */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10 flex items-center min-h-[80vh] sm:min-h-[60vh]">
        <div className="w-full md:max-w-[800px] lg:max-w-[900px] text-left mt-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight text-left break-words px-4">
            Помогаем предпринимателям<br />не терять прибыль <span className='whitespace-nowrap'>на рассрочках</span>
          </h1>
          <div className="text-sm sm:text-lg text-white/80 mb-8 max-w-lg text-left px-4">
            <ul className="list-none space-y-2">
              <li><span className="inline-block align-middle mr-2">—</span>Процент одобрения — до 60%</li>
              <li><span className="inline-block align-middle mr-2">—</span>Вы выбираете срок и проценты</li>
              <li><span className="inline-block align-middle mr-2">—</span>от 3% на 36 месяцев</li>
            </ul>
          </div>
          <a
            href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20условия%20рассрочки%20от%20Pluse.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#8F6ED5] border-2 border-[#8F6ED5] sm:bg-[#8F6ED5] sm:text-white sm:border-none px-4 py-3 text-sm rounded-lg sm:px-8 sm:py-4 sm:text-base sm:rounded-xl hover:bg-[#F0F4FF] sm:hover:bg-[#7F5EC5] transition-all duration-200 ml-4"
          >
            <MessageCircle size={20} />
            Получить детали в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
} 