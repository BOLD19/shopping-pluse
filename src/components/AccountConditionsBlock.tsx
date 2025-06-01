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
    <section className="py-20 relative overflow-hidden bg-[#181C36]">
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
            Откройте счёт для бизнеса за 1 день — полностью онлайн. Прозрачно показываем условия, чтобы вы сразу понимали, подходит ли вам наш сервис.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md relative z-10">
            <h3 className="text-xl font-semibold mb-4 mt-8">Заполните форму, и наш менеджер свяжется с вами в ближайшее время</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full mb-3 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8F6ED5] outline-none"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <div className="flex items-center mb-3">
                <span className="inline-block bg-[#F0F4FF] px-3 py-2 rounded-l-xl border border-r-0 border-gray-200 text-[#8F6ED5] font-medium">+7</span>
                <input
                  type="tel"
                  placeholder="(___) ___-__-__"
                  className="w-full px-4 py-3 rounded-r-xl border border-gray-200 focus:border-[#8F6ED5] outline-none"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="privacy" className="mr-2" required />
                <label htmlFor="privacy" className="text-xs text-gray-500">Я согласен с <a href="/privacy" className="underline text-[#8F6ED5]">политикой конфиденциальности</a></label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8F6ED5] hover:bg-[#7F5EC5] text-white font-medium py-3 px-6 rounded-xl transition-all disabled:opacity-60"
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
                  <div className="text-lg font-semibold mb-2">Форма успешно отправлена!</div>
                  <div className="text-gray-500 text-sm mb-2">Спасибо! Мы свяжемся с вами в ближайшее время.</div>
                  <button
                    className="mt-2 px-4 py-2 bg-[#8F6ED5] text-white rounded-xl font-medium hover:bg-[#7F5EC5] transition"
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
    </section>
  );
} 