import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Users, 
  Award 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Молниеносная Скорость",
    description: "Оптимизированная производительность и быстрая загрузка для лучшего пользовательского опыта."
  },
  {
    icon: Shield,
    title: "Надёжность и Безопасность",
    description: "Создано с использованием лучших практик безопасности и надёжной инфраструктуры."
  },
  {
    icon: Smartphone,
    title: "Адаптивный Дизайн",
    description: "Идеальный дизайн на всех устройствах - компьютер, планшет и мобильный телефон."
  },
  {
    icon: Globe,
    title: "Глобальная Готовность",
    description: "Поддержка нескольких языков и международные лучшие практики."
  },
  {
    icon: Users,
    title: "Удобство Использования",
    description: "Интуитивный интерфейс, разработанный для лучшего пользовательского опыта."
  },
  {
    icon: Award,
    title: "Премиум Качество",
    description: "Высококачественный код и дизайн, отвечающий отраслевым стандартам."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Мощные Возможности
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Всё необходимое для создания потрясающих лендинг страниц и увеличения конверсии.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">
            Готовы начать работу с этими мощными возможностями?
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Изучить Все Возможности
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 