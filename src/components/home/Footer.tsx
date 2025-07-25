import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo_white.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          
          <div className="text-slate-400 text-sm">
            © 2024 Pluse. Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
}; 