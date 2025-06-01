import React from 'react';
import { AlertCircle, Ban, Percent, UserX, ShieldOff, Clock } from 'lucide-react';
import Link from 'next/link';

export default function BnplProblemsBlock() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl text-left sm:text-center break-words leading-snug px-4 sm:px-2">
            Проблемы, которые&nbsp;мы решаем
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Карточки */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 break-words text-left">
                  80% покупателей приходят без денег
                </h3>
                <p className="text-sm sm:text-lg text-[#6B6B6B] text-left">
                  Не отдавайте клиента конкурентам — подключите рассрочку за 1 день.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-3">
              <Ban className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 break-words text-left">
                  У клиента везде отказ
                </h3>
                <p className="text-sm sm:text-lg text-[#6B6B6B] text-left">
                  Больше шансов на одобрение — благодаря выписке из банка.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-3">
              <Percent className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 break-words text-left">
                  Теряете прибыль<br className="hidden sm:block" />на процентах банка
                </h3>
                <p className="text-sm sm:text-lg text-[#6B6B6B] text-left">
                  Теперь вы сами решаете, какие товары и под какой процент продавать.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-3">
              <UserX className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 break-words text-left">
                  Зависимость от "соседа"
                </h3>
                <p className="text-sm sm:text-lg text-[#6B6B6B] text-left">
                  Перестаньте отдавать маржу чужому ИП — подключаем даже без оборота.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-3">
              <ShieldOff className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 break-words text-left">
                  Защитим от блокировок
                </h3>
                <p className="text-sm sm:text-lg text-[#6B6B6B] text-left">
                  Продажи не проседают из-за "мелочи", мы решаем, а не выгоняем.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#8F6ED5] flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 break-words text-left">
                  Ответов по неделям —<br className="hidden sm:block" />не будет
                </h3>
                <p className="text-sm sm:text-lg text-[#6B6B6B] text-left">
                  Отвечаем быстро, как будто сами теряем клиента.
                </p>
              </div>
            </div>
          </div>
          {/* Спецблок */}
          <div className="md:col-span-2 lg:col-span-3 bg-[#E0FF4F] rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3 break-words text-left px-4">
                  Продавай с комиссией 0%
                </h3>
                <p className="text-sm sm:text-lg text-[#1A1A1A] text-left px-4">
                  Первые 7 дней после подключения
                </p>
              </div>
              <a
                href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20условия%20рассрочки%20от%20Pluse.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1A1A1A] text-white px-4 py-3 text-sm rounded-lg sm:px-8 sm:py-4 sm:text-base sm:rounded-2xl font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 gap-2"
              >
                Активировать 0%
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 