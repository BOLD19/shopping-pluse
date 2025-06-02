import React from 'react';
import { Clock, Smartphone, Shield, MessageSquare } from 'lucide-react';

export default function DigitalBranchComparison() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl text-left mb-12">
          Чем Необанк отличается от обычного банка?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0088f5] to-[#0979ff] mb-6">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Banking-as-a-Service</h3>
            <p className="text-[#64748b]">Банковские услуги через удобный интерфейс</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0088f5] to-[#0979ff] mb-6">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Всё онлайн</h3>
            <p className="text-[#64748b]">Создан для мобильных устройств и современного пользователя.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0088f5] to-[#0979ff] mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Фокус на предпринимателях</h3>
            <p className="text-[#64748b]">Мы помогаем предпринимателям развивать бизнес и решать их задачи.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0088f5] to-[#0979ff] mb-6">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Надежность</h3>
            <p className="text-[#64748b]">Надёжность банка, скорость и удобство стартапа</p>
          </div>
        </div>
      </div>
    </div>
  );
} 