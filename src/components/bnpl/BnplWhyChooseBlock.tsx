import React from 'react';
import { Calendar, PiggyBank, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BnplWhyChooseBlock() {
  return (
    <section className="py-20 bg-[#FDFCFB] relative overflow-hidden">
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
            <span>
              Почему предприниматели выбирают <span className="text-[#0088f5]">Pluse.kz,</span> даже если привыкли <br className="hidden sm:block" />к другим банкам
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-[#64748b] text-left px-4 sm:text-center">
            Пример: при продаже товара за 100 000 ₸
          </p>
        </motion.div>

        {/* Мобильная версия — карточки */}
        <div className="grid gap-4 mt-8 block md:hidden">
          {[
            {
              title: "Рассрочка 0-0-24",
              old: "только во время акции",
              new: "24/7 — в любое время"
            },
            {
              title: "Комиссия продавцу",
              old: "14–20%",
              new: "от 3%"
            },
            {
              title: "Сколько получаете вы",
              old: "80 000–86 000 ₸",
              new: "97 000 ₸"
            },
            {
              title: "Контроль и звонки клиенту",
              old: "Есть",
              new: "—"
            },
            {
              title: "Подключение",
              old: "до 3 дней, с проверкой оборота, ИП/ТОО, лицензий",
              new: "10 минут — онлайн, без лишней бюрократии"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 flex flex-col gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <div className="font-semibold text-[#0f172a] text-base">{item.title}</div>
              <div className="text-xs text-[#64748b] flex items-start gap-2">
                <span className="text-lg">✖️</span>
                <span>
                  <span className="font-medium block">Банки по старым правилам:</span>
                  <span className="block">{item.old}</span>
                </span>
          </div>
              <div className="text-xs text-[#0088f5] flex items-center gap-2">
                <span className="text-lg text-black">✔️</span>
                <span className="font-medium">Pluse.kz:</span> {item.new}
          </div>
            </motion.div>
          ))}
        </div>

        {/* Планшет и десктоп — таблица */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden md:block mt-8"
        >
          <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <table className="w-full">
            <thead>
                <tr className="text-left text-[#0f172a] font-semibold border-b border-[#f1f5f9]">
                <th className="p-4">&nbsp;</th>
                <th className="p-4">Банки по старым правилам</th>
                <th className="p-4">Pluse.kz</th>
              </tr>
            </thead>
            <tbody>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="p-4 font-semibold text-[#0f172a]">Рассрочка 0-0-24</td>
                  <td className="p-4 text-sm text-[#64748b]">только во время акции</td>
                  <td className="p-4 text-sm text-[#0088f5]">24/7 — в любое время</td>
              </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="p-4 font-semibold text-[#0f172a]">Комиссия продавцу</td>
                  <td className="p-4 text-sm text-[#64748b]">14–20%</td>
                  <td className="p-4 text-sm text-[#0088f5]">от 3%</td>
              </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="p-4 font-semibold text-[#0f172a]">Сколько получаете вы</td>
                  <td className="p-4 text-sm text-[#64748b]">80 000–86 000 ₸</td>
                  <td className="p-4 text-sm text-[#0088f5]">97 000 ₸</td>
              </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="p-4 font-semibold text-[#0f172a]">Контроль и звонки клиенту</td>
                  <td className="p-4 text-sm text-[#64748b]">Есть</td>
                  <td className="p-4 text-sm text-[#0088f5]">—</td>
              </tr>
              <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Подключение</td>
                  <td className="p-4 text-sm text-[#64748b]">до 3 дней, с проверкой оборота, ИП/ТОО, лицензий</td>
                  <td className="p-4 text-sm text-[#0088f5]">10 минут — онлайн, без лишней бюрократии</td>
              </tr>
            </tbody>
          </table>
        </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Calendar,
              title: "Рассрочка 24/7",
              description: "Всегда доступна, без акций и ограничений"
            },
            {
              icon: PiggyBank,
              title: "Больше денег на руки",
              description: "Минимальная комиссия от 3%"
            },
            {
              icon: ShieldCheck,
              title: "Быстрое подключение",
              description: "Всего 10 минут онлайн, без лишней бюрократии"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0088f5] to-[#0979ff] rounded-2xl p-6 text-white shadow-[0_8px_30px_rgba(0,136,245,0.2)] hover:shadow-[0_8px_30px_rgba(0,136,245,0.4)] transition-shadow"
            >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {React.createElement(item.icon, { className: "w-5 h-5" })}
              </div>
                <h3 className="text-base sm:text-lg font-medium">{item.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 