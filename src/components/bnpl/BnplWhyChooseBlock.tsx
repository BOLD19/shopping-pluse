import React from 'react';
import { Calendar, PiggyBank, ShieldCheck } from 'lucide-react';

export default function BnplWhyChooseBlock() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl text-left sm:text-center break-words leading-snug px-4 sm:px-2">
            <span>
              Почему предприниматели выбирают <span className="text-[#8F6ED5]">Pluse.kz,</span> даже если привыкли <br className="hidden sm:block" />к другим банкам
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-[#6B6B6B] text-left px-4 sm:text-center">
            Пример: при продаже товара за 100 000 ₸
          </p>
        </div>

        {/* Мобильная версия — карточки */}
        <div className="grid gap-4 mt-8 block md:hidden">
          {/* 1 */}
          <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
            <div className="font-semibold text-[#1A1A1A] text-base">Рассрочка 0-0-24</div>
            <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">только во время акции</span></span></div>
            <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> 24/7 — в любое время</div>
          </div>
          {/* 2 */}
          <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
            <div className="font-semibold text-[#1A1A1A] text-base">Комиссия продавцу</div>
            <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">14–20%</span></span></div>
            <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> от 3%</div>
          </div>
          {/* 3 */}
          <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
            <div className="font-semibold text-[#1A1A1A] text-base">Сколько получаете вы</div>
            <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">80 000–86 000 ₸</span></span></div>
            <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> 97 000 ₸</div>
          </div>
          {/* 4 */}
          <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
            <div className="font-semibold text-[#1A1A1A] text-base">Контроль и звонки клиенту</div>
            <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">Есть</span></span></div>
            <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> —</div>
          </div>
          {/* 5 */}
          <div className="bg-[#F9FAFF] rounded-xl p-4 flex flex-col gap-2">
            <div className="font-semibold text-[#1A1A1A] text-base">Подключение</div>
            <div className="text-xs text-[#6B6B6B] flex items-start gap-2"><span className="text-lg">✖️</span><span><span className="font-medium block">Банки по старым правилам:</span><span className="block">до 3 дней, с проверкой оборота, ИП/ТОО, лицензий</span></span></div>
            <div className="text-xs text-[#8F6ED5] flex items-center gap-2"><span className="text-lg text-black">✔️</span><span className="font-medium">Pluse.kz:</span> 10 минут — онлайн, без лишней бюрократии</div>
          </div>
        </div>
        {/* Планшет и десктоп — таблица */}
        <div className="hidden md:block mt-8">
          <table className="w-full bg-[#F9FAFF] rounded-xl overflow-hidden">
            <thead>
              <tr className="text-left text-[#1A1A1A] font-semibold">
                <th className="p-4">&nbsp;</th>
                <th className="p-4">Банки по старым правилам</th>
                <th className="p-4">Pluse.kz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-semibold">Рассрочка 0-0-24</td>
                <td className="p-4 text-xs">только во время акции</td>
                <td className="p-4 text-xs text-[#8F6ED5]">24/7 — в любое время</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Комиссия продавцу</td>
                <td className="p-4 text-xs">14–20%</td>
                <td className="p-4 text-xs text-[#8F6ED5]">от 3%</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Сколько получаете вы</td>
                <td className="p-4 text-xs">80 000–86 000 ₸</td>
                <td className="p-4 text-xs text-[#8F6ED5]">97 000 ₸</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Контроль и звонки клиенту</td>
                <td className="p-4 text-xs">Есть</td>
                <td className="p-4 text-xs text-[#8F6ED5]">—</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Подключение</td>
                <td className="p-4 text-xs">до 3 дней, с проверкой оборота, ИП/ТОО, лицензий</td>
                <td className="p-4 text-xs text-[#8F6ED5]">10 минут — онлайн, без лишней бюрократии</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#1A1A3A] rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-medium">Рассрочка 24/7</h3>
            </div>
            <p className="text-sm sm:text-base text-white/80">Всегда доступна, без акций и ограничений</p>
          </div>
          <div className="bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#1A1A3A] rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <PiggyBank className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-medium">Больше денег<br className='block sm:hidden' /> на руки</h3>
            </div>
            <p className="text-sm sm:text-base text-white/80">Минимальная комиссия от 3%</p>
          </div>
          <div className="bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#1A1A3A] rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-medium">Быстрое подключение</h3>
            </div>
            <p className="text-sm sm:text-base text-white/80">Всего 10 минут онлайн, без лишней бюрократии</p>
          </div>
        </div>
      </div>
    </section>
  );
} 