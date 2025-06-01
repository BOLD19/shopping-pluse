import React from 'react';
import { Clock, Smartphone, Shield, MessageSquare } from 'lucide-react';

export default function DigitalBranchComparison() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl text-left mb-12">
          Чем цифровой филиал <br className="hidden sm:block" />
          отличается от обычного банка?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Без привязки<br className="hidden sm:block" /> ко времени</h3>
            <p className="text-[#4A4A4A]">Не нужно ждать открытия отделения. Заявки, документы и платежи — доступны онлайн, в любое удобное для вас время.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Всё под рукой — прямо в телефоне</h3>
            <p className="text-[#4A4A4A]">Без походов в офис<br className="hidden sm:block" /> и бесконечных звонков. Персональный менеджер и все сервисы доступны через удобный кабинет.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Банковская защита — без банковской бюрократии</h3>
            <p className="text-[#4A4A4A]">Все операции проходят через лицензированный банк с полной защитой средств. Такой же уровень безопасности, но в 10 раз быстрее и проще.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Вопросы решаются<br className="hidden sm:block" /> в чате, а не на линии ожидания</h3>
            <p className="text-[#4A4A4A]">Вместо ожидания в колл-центре — быстрые ответы от менеджера, который вас знает.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 