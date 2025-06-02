import React from 'react';
import { AlertCircle, Ban, Percent, UserX, ShieldOff, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: AlertCircle,
    title: "80% покупателей приходят без денег",
    description: "Не отдавайте клиента конкурентам — подключите рассрочку за 1 день."
  },
  {
    icon: Ban,
    title: "У клиента везде отказ",
    description: "Больше шансов на одобрение — благодаря выписке из банка."
  },
  {
    icon: Percent,
    title: "Теряете прибыль на процентах банка",
    description: "Теперь вы сами решаете, какие товары и под какой процент продавать."
  },
  {
    icon: UserX,
    title: "Зависимость от 'соседа'",
    description: "Перестаньте отдавать маржу чужому ИП — подключаем даже без оборота."
  },
  {
    icon: ShieldOff,
    title: "Защитим от блокировок",
    description: "Продажи не проседают из-за 'мелочи', мы решаем, а не выгоняем."
  },
  {
    icon: Clock,
    title: "Ответов по неделям — не будет",
    description: "Отвечаем быстро, как будто сами теряем клиента."
  }
];

export default function BnplProblemsBlock() {
  return (
    <section className="py-20 bg-[#FDFCFB] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-blue/[0.02] bg-[length:20px_20px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0088f5]/10 blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl text-left sm:text-center break-words leading-snug px-4 sm:px-2">
            Проблемы, которые&nbsp;мы решаем
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.1)] transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0088f5]/5 flex items-center justify-center group-hover:bg-[#0088f5]/10 transition-colors">
                  {React.createElement(problem.icon, { className: "w-5 h-5 text-[#0088f5]" })}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a] mb-3 break-words text-left">
                    {problem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#64748b] text-left">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Special Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#0088f5] to-[#0979ff] rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,136,245,0.2)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.4)] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words text-left px-4">
                  Продавай с комиссией 0%
                </h3>
                <p className="text-sm sm:text-lg text-white/80 text-left px-4">
                  Первые 7 дней после подключения
                </p>
              </div>
              <a
                href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20узнать%20условия%20рассрочки%20от%20Pluse.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white text-[#0088f5] px-8 py-4 rounded-2xl text-base font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300"
              >
                Активировать 0%
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 