import React from 'react';
import Image from 'next/image';

export const HomeTrust: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Почему нас выбирают предприниматели
          </h2>
          <p className="mt-6 text-lg text-[#64748b]">
            Pluse.kz сочетает банковскую надёжность, передовую финтех-поддержку и активное сообщество
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          {/* Main card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="text-sm font-medium text-[#0088f5] mb-4">
                  ЛИЦЕНЗИРОВАННЫЙ БАНК
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                  Pluse.kz — цифровой филиал RBK Bank
                </h3>
                <p className="text-[#64748b] text-lg">
                  Все счета и операции открываются через лицензированный банк. Ваши средства защищены государственным фондом гарантирования депозитов.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/rbk_logo.png"
                  alt="RBK Bank"
                  width={140}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
              <div className="text-sm font-medium text-[#64748b] uppercase tracking-wide mb-6">
                ИНВЕСТОР
              </div>
              <div className="flex items-center justify-center mb-8 py-4">
                <Image
                  src="/tumar_logo.png"
                  alt="Tumar Ventures"
                  width={120}
                  height={45}
                  className="h-10 w-auto object-contain opacity-80"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                  Фонд Tumar Ventures — среди наших инвесторов
                </h3>
                <p className="text-[#64748b]">
                  Tumar поддерживает сильные и масштабируемые стартапы, которые меняют рынки
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
              <div className="text-sm font-medium text-[#64748b] uppercase tracking-wide mb-6">
                ТЕХНОПАРК
              </div>
              <div className="flex items-center justify-center mb-8 py-4">
                <Image
                  src="/logo_astanahub.png"
                  alt="Astana Hub"
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain opacity-80"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                  Pluse.kz — резидент Astana Hub
                </h3>
                <p className="text-[#64748b]">
                  Мы развиваемся в крупнейшем технопарке Центральной Азии с поддержкой государства
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 