import React from 'react';

export default function BnplApprovalBlock() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight mb-0 text-[#1A1A1A]">
          Повышаем шанс одобрения<br />рассрочки до 60%
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
          <div className="max-w-xl text-left z-10">
            <p className="text-base leading-normal mb-0 text-[#1A1A1A]/80">
              Даже если раньше клиенту отказывали, свежая банковская выписка через Pluse.kz помогает показать реальную платёжеспособность.
            </p>
            <p className="text-base leading-normal mb-8 text-[#1A1A1A]/80">
              Подгрузить выписку можно только через наш сервис.
            </p>
            <a
              href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20условия%20рассрочки%20от%20Pluse.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#8F6ED5] text-white px-8 py-4 text-base rounded-2xl font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 gap-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M17.6 6.32A8.86 8.86 0 0 0 12.04 4C7.58 4 4 7.58 4 12.04C4 13.84 4.52 15.56 5.5 17L4 20.5L7.6 19.02C9.02 19.92 10.48 20.38 12.04 20.38C16.5 20.38 20.38 16.8 20.38 12.34C20.38 9.5 19.38 7.04 17.6 6.32ZM12.04 18.98C10.62 18.98 9.26 18.54 8.1 17.7L7.82 17.52L5.86 18.34L6.68 16.44L6.44 16.1C5.52 14.9 5.02 13.48 5.02 12.04C5.02 8.12 8.12 5.02 12.04 5.02C15.96 5.02 18.96 8.12 18.96 12.04C18.96 15.96 15.94 18.98 12.04 18.98Z" fill="currentColor"/>
              </svg>
              Получить детали в WhatsApp
            </a>
          </div>
          <div className="mt-10 md:mt-0 md:ml-0 z-10 flex justify-center md:justify-end">
            <img
              src="/ser2.png"
              alt="Bank Statement Upload"
              className="w-full max-w-xs md:max-w-md h-auto object-contain opacity-90 mx-auto"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 