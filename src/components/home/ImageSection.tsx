import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ImageSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[800px]">
        <Image
          src="/frame1.png"
          alt="Frame"
          fill
          className="object-contain w-full h-full hidden sm:block"
          quality={100}
        />
        <Image
          src="/blue.png"
          alt="Frame Mobile"
          fill
          className="object-contain w-full h-full sm:hidden"
          quality={100}
          sizes="100vw"
        />
      </div>
    </section>
  );
}; 