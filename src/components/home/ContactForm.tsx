import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, Sparkles } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    privacy: false,
  });
  const [utmData, setUtmData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms: { [key: string]: string } = {};
    params.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        utms[key] = value;
      }
    });
    setUtmData(utms);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.privacy) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          utm: utmData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', privacy: false });
      } else {
        console.error('Form submission error:', result.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <span className="text-2xl font-bold">₸</span>,
      title: "Без комиссий — 100% прибыли у вас",
      description: (
        <>
          Не платите маркетплейсам. Зарабатывайте
          <br />
          больше с каждой продажи.
        </>
      )
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Все инструменты уже внутри",
      description: (
        <>
          Касса, рассрочка, доставка, CRM, аналитика —
          <br />
          ничего не нужно подключать отдельно.
        </>
      )
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Клиенты — навсегда ваши",
      description: (
        <>
          Полный доступ к контактам, историям
          <br />
          покупок и базе. Стройте повторные продажи и бренд.
        </>
      )
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Посмотреть демо-версию
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Ваше имя <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Номер телефона <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+7 700 123 45 67"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacy}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, privacy: e.target.checked }))
                  }
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-slate-600 leading-relaxed">
                  Я согласен с политикой конфиденциальности
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors ${
                  isSubmitting
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:bg-blue-600'
                }`}
              >
                {isSubmitting ? 'Отправка...' : 'Посмотреть демо-версию'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm mt-2 text-center">
                  Спасибо! Ваша заявка успешно отправлена.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm mt-2 text-center">
                  Произошла ошибка. Попробуйте еще раз.
                </div>
              )}
            </form>
          </motion.div>

          {/* Right Section - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Присоединяйтесь
                <br />
                <span className="text-blue-600">к независимым продавцам</span>
              </h2>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-blue-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}; 