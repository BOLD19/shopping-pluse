import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserPlus, Layers, Rocket } from 'lucide-react';

export const HomeHowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: 'Зарегистрируйтесь и откройте счёт',
      description: 'Создайте аккаунт и откройте расчётный счёт онлайн за 5 минут.'
    },
    {
      id: 2,
      icon: Layers,
      title: 'Выберите нужные инструменты',
      description: 'Подключите рассрочку, интернет-магазин, бухгалтерию и другие сервисы.'
    },
    {
      id: 3,
      icon: Rocket,
      title: 'Развивайте бизнес — мы помогаем',
      description: 'Pluse.kz автоматизирует рутину, а вы фокусируетесь на росте.'
    }
  ];

  return (
    <div className="py-24 sm:py-32 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Как подключиться к Pluse.kz
          </h2>
          <p className="mt-6 text-[#64748b] text-lg">
            Подключение занимает 10 минут. Всё онлайн, без похода в банк и лишних документов.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-20">
          <div className="relative grid gap-10 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center">
                      <step.icon className="h-8 w-8 text-[#0088f5]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-[#0088f5] bg-[#0088f5]/10 px-2 py-1 rounded-lg">
                        {step.id}
                      </span>
                      <h3 className="text-xl font-semibold text-[#0f172a]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-[#64748b]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="https://wa.me/77474288095?text=Здравствуйте!%20Хочу%20попробовать%20Pluse.kz%20бесплатно"
            className="inline-flex items-center bg-[#0088f5] hover:bg-[#0979ff] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-[0_8px_30px_rgba(0,136,245,0.2)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.4)] transition-all duration-300"
          >
            Попробовать бесплатно
          </Link>
        </div>
      </div>
    </div>
  );
}; 