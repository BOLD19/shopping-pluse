'use client'

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
              Критическая ошибка
            </h2>
            <p className="text-[#6B6B6B] mb-8">
              Произошла критическая ошибка при загрузке страницы. Пожалуйста, попробуйте позже.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#8F6ED5] text-white px-6 py-3 rounded-xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-[#7F5EC5] transition-all duration-300"
            >
              Обновить страницу
            </button>
          </div>
        </div>
      </body>
    </html>
  )
} 