import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Features: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:hidden"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Что вы получаете?
          </h2>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Fixed Header */}
          <div className="sticky top-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">
                Что вы получаете?
              </h2>
            </motion.div>
          </div>

          {/* Right Side - Scrolling Content */}
          <div className="space-y-16">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-800">
                Свой интернет-магазин под ключ
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Не страница в чужой системе. Полноценный магазин под вашим брендом — с оплатой, доставкой и рассрочкой.
              </p>
              <div className="flex justify-center mb-8">
                <div className="w-[300px] h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/123.png"
                    alt="Интернет-магазин под ключ"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-800">
                Никаких чужих в вашем бизнесе
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Только вы управляете карточками, ценами и витриной. Никаких демпингов, никаких вмешательств.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-800">
                Прямой контакт с клиентами
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Вся база у вас. Повторные продажи без рекламы.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-800">
                AI всё сделает за вас
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Фото, тексты и описание товара — генерируются нейросетью.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Features Grid */}
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">
                Свой интернет-магазин под ключ
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Не страница в чужой системе. Полноценный магазин под вашим брендом — с оплатой, доставкой и рассрочкой.
              </p>
              <div className="flex justify-center mb-8">
                <div className="w-full max-w-[300px] h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/123.png"
                    alt="Интернет-магазин под ключ"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">
                Никаких чужих в вашем бизнесе
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Только вы управляете карточками, ценами и витриной. Никаких демпингов, никаких вмешательств.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">
                Прямой контакт с клиентами
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Вся база у вас. Повторные продажи без рекламы.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">
                AI всё сделает за вас
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Фото, тексты и описание товара — генерируются нейросетью.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}; 