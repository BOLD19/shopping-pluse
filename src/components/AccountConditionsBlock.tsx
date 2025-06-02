import React, { useState } from 'react';
import { Download } from 'lucide-react';

export default function AccountConditionsBlock() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/telegram-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, utm: 'account_conditions_form' }),
      });
      if (res.ok) {
        setSuccess(true);
        setName('');
        setPhone('');
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const data = await res.json();
        setError(data.error || 'Ошибка отправки');
      }
    } catch (e) {
      setError('Ошибка отправки');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0f172a]">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Ознакомиться <br /> с условиями
            </h2>
            <p className="text-lg leading-8 text-gray-300 mb-6">
              Откройте счёт для бизнеса за 1 день — полностью онлайн. Прозрачно показываем условия, чтобы вы сразу понимали, подходит ли вам наш сервис.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 w-full max-w-md relative z-10">
              <h3 className="text-xl font-semibold text-[#0f172a] mb-4 mt-8">
                Заполните форму, и наш менеджер свяжется с вами в ближайшее время
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0088f5] outline-none"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <div className="flex items-center mb-3">
                  <span className="inline-block bg-[#EBF8FF] px-3 py-2 rounded-l-xl border border-r-0 border-gray-200 text-[#0088f5] font-medium">+7</span>
                  <input
                    type="tel"
                    placeholder="(___) ___-__-__"
                    className="w-full px-4 py-3 rounded-r-xl border border-gray-200 focus:border-[#0088f5] outline-none"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="privacy" className="mr-2" required />
                  <label htmlFor="privacy" className="text-xs text-[#64748b]">
                    Я согласен с <a href="/privacy" className="underline text-[#0088f5]">политикой конфиденциальности</a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? 'Отправка...' : 'Записаться в список ожидания'}
                </button>
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
              </form>
              {success && (
                <div
                  className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
                  onClick={() => setSuccess(false)}
                >
                  <div className="bg-white rounded-2xl px-8 py-6 shadow-xl text-center max-w-xs mx-auto">
                    <div className="text-2xl mb-2">🎉</div>
                    <div className="text-lg font-semibold text-[#0f172a] mb-2">Форма успешно отправлена!</div>
                    <div className="text-[#64748b] text-sm mb-2">Спасибо! Мы свяжемся с вами в ближайшее время.</div>
                    <button
                      className="mt-2 px-4 py-2 bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white rounded-xl font-medium shadow-[0_8px_30px_rgba(0,136,245,0.3)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.5)] hover:scale-[1.02] transition-all duration-300"
                      onClick={() => setSuccess(false)}
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#0088f5" />
            <stop offset="1" stopColor="#0979ff" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
} 