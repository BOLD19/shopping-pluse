import React from 'react';
import { Check } from 'lucide-react';

export default function BusinessTrustBlock() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-0 items-stretch min-h-[600px]">
      {/* Левая часть: заголовок и дескрипшн сверху */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start pt-2">
        <h2 className="text-3xl font-bold text-white leading-snug">
          Pluse.kz — надёжный сервис <br className='hidden lg:block' />для бизнеса с поддержкой банков, государства и инвесторов
        </h2>
        <p className="mt-4 mb-8 lg:mb-0 text-lg text-white/80">
          С нами вы работаете официально, без рисков<br className='hidden lg:block' />и с полным контролем.
        </p>
      </div>
      {/* Правая часть: карточки */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center relative z-20">
        <div className="group relative bg-white/90 rounded-2xl shadow p-6 z-20 w-full max-w-3xl mx-auto transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 cursor-pointer">
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" style={{boxShadow: '0 0 60px 0 #8F6ED5, 0 0 120px 0 #8F6ED5'}}></div>
          <h3 className="text-base font-semibold mb-2">Ваши деньги в безопасности</h3>
          <p className="text-base text-gray-800">
            Все расчёты проходят через RBK Bank — один из самых стабильных банков Казахстана. Средства клиентов защищены в рамках банковской лицензии.
          </p>
        </div>
        <div className="group relative bg-white/90 rounded-2xl shadow p-6 z-20 w-full max-w-3xl mx-auto transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 cursor-pointer">
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" style={{boxShadow: '0 0 60px 0 #8F6ED5, 0 0 120px 0 #8F6ED5'}}></div>
          <h3 className="text-base font-semibold mb-2">Работаем по закону</h3>
          <p className="text-base text-gray-800">
            У нас лицензия АРРФР. Всё прозрачно, официально<br className="hidden lg:block" />и под контролем регулятора.
          </p>
        </div>
        <div className="group relative bg-white/90 rounded-2xl shadow p-6 z-20 w-full max-w-3xl mx-auto transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 cursor-pointer">
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" style={{boxShadow: '0 0 60px 0 #8F6ED5, 0 0 120px 0 #8F6ED5'}}></div>
          <h3 className="text-base font-semibold mb-2">Нас поддерживают лидеры цифровых решений в стране</h3>
          <p className="text-base text-gray-800 mb-2">
            В развитие нашей платформы вложился фонд Tumar Ventures при поддержке Всемирного банка и Минцифры — значит, вы пользуетесь решением, которому доверяют на государственном уровне.
          </p>
        </div>
        <div className="group relative bg-white/90 rounded-2xl shadow p-6 z-30 w-full max-w-3xl mx-auto transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 cursor-pointer">
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" style={{boxShadow: '0 0 60px 0 #8F6ED5, 0 0 120px 0 #8F6ED5'}}></div>
          <h3 className="text-base font-semibold mb-2">Мы встроены в цифровую экосистему страны</h3>
          <p className="text-base text-gray-800 mb-2">
            Мы резидент Astana Hub, что даёт нам прямой доступ к госорганам<br className="hidden lg:block" /> и техподдержке. Это упрощает интеграцию с eGov, ЭЦП, ЦОНами<br className="hidden lg:block" /> и другими сервисами для работы вашего бизнеса — без задержек<br className="hidden lg:block" /> и лишней бюрократии.
          </p>
        </div>
        <div className="group relative bg-white/90 rounded-2xl shadow p-6 z-20 w-full max-w-3xl mx-auto transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 cursor-pointer">
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-100 transition-all duration-300 z-0" style={{boxShadow: '0 0 60px 0 #8F6ED5, 0 0 120px 0 #8F6ED5'}}></div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8F6ED5] flex items-center justify-center mt-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <p className="text-base text-gray-800">
              Вы получаете надёжный инструмент, который автоматизирует базовые процессы бизнеса — от расчётов до налоговой отчётности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 