import React from 'react';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

export default function BnplConditionsBlock() {
  return (
    <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4 sm:text-4xl">
            Готовы начать работу с{" "}
            <span className="text-[#0088f5]">рассрочкой?</span>
          </h2>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            Оставьте заявку — наш менеджер ответит на все вопросы
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-md"
          >
            <ContactForm
              utm="bnpl_conditions_form"
              submitButtonText="Оставить заявку"
              title="Связаться с менеджером"
              description="Расскажем про все возможности платформы"
            />
          </motion.div>

          {/* Right - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Или свяжитесь напрямую</h3>
              
              <div>
                <a
                  href="https://wa.me/77478609282?text=Здравствуйте!%20Хочу%20подключить%20рассрочку%20для%20бизнеса"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[#f1f5f9] hover:border-[#0088f5] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0f172a] text-lg">WhatsApp</div>
                    <div className="text-[#64748b]">Быстрый ответ в мессенджере</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 