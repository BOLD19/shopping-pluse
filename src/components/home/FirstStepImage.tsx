import React from 'react';
import Image from 'next/image';

export const FirstStepImage: React.FC = () => {
  return (
    <section className="w-full relative">
      <Image
        src="/1.png"
        alt="Первый шаг"
        width={500}
        height={300}
        className="object-contain rounded-xl"
      />
    </section>
  );
}; 