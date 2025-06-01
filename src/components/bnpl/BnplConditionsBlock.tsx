import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function BnplConditionsBlock() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#181C36]">
      {/* Геометрические элементы на фоне */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] transform rotate-[-10deg] translate-x-1/4 translate-y-[-10%] bg-gradient-to-br from-[#8F6ED5] via-[#6B4FD5] to-[#FDFCFB] opacity-40 rounded-[40px] transition-all duration-1000"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[400px] transform rotate-[-15deg] translate-x-1/3 bg-gradient-to-br from-[#7F5EC5] via-[#5B3FD5] to-[#FDFCFB] opacity-30 rounded-[40px] transition-all duration-1000"></div>
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[200px] transform rotate-[-5deg] bg-gradient-to-br from-[#6B4FD5] via-[#4B2FD5] to-[#FDFCFB] opacity-20 rounded-[40px] transition-all duration-1000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ознакомиться <br /> с условиями
          </h2>
          <p className="text-lg text-white/80 mb-6">
            Помогаем предпринимателям быстро и без лишней бюрократии открыть ТОО. Сразу показываем, какие нужны документы и оформляем всё за 1 день.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <ContactForm
            utm="bnpl_conditions_form"
            submitButtonText="Узнать условия"
            title="Заполните форму, и наш менеджер свяжется с вами в ближайшее время"
            description=""
          />
        </div>
      </div>
    </section>
  );
} 