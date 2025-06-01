import React from 'react';
import Link from 'next/link';

export const HomeCTA: React.FC = () => {
  return (
    <div className="bg-[#FDFCFB] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Готовы начать?
          </h2>
          <p className="mt-6 text-lg text-[#4A4A4A]">
            Присоединяйтесь к 100+ предпринимателям, которые уже растут с Pluse.kz
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/register"
            className="bg-[#8F6ED5] text-white px-8 py-4 rounded-xl text-lg font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
          >
            Начать сейчас
          </Link>
        </div>
      </div>
    </div>
  );
}; 