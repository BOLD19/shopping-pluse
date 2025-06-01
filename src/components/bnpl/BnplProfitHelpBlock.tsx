import React from 'react';
import { CreditCard, DollarSign, ShieldCheck, Smile } from 'lucide-react';

export default function BnplProfitHelpBlock() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl mb-4">
            Помогаем предпринимателям <br className="hidden sm:block" />не терять прибыль на рассрочках
          </h2>
          <p className="text-lg text-[#4A4A4A]">
            Pluse.kz выплачивает вам всю сумму сразу, а клиент платит частями. Вы не ждёте деньги и не теряете оборот.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Вся сумма сразу</h3>
            <p className="text-[#4A4A4A]">Получаете всю оплату за товар или услугу в день сделки, без ожидания.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Нет кассовых разрывов</h3>
            <p className="text-[#4A4A4A]">Ваш бизнес не страдает от нехватки оборотных средств — деньги всегда в обороте.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Без скрытых комиссий</h3>
            <p className="text-[#4A4A4A]">Прозрачные условия — вы заранее знаете, сколько получите на руки.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
              <Smile className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Удобно для клиентов</h3>
            <p className="text-[#4A4A4A]">Ваши клиенты покупают больше, потому что могут платить частями — а вы не рискуете прибылью.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 