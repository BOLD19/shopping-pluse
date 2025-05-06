import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
          Страница рассрочки не найдена
        </h2>
        <p className="text-[#6B6B6B] mb-8">
          Возможно, страница была перемещена или удалена.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#8F6ED5] text-white px-6 py-3 rounded-xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-[#7F5EC5] transition-all duration-300"
          >
            На главную
          </Link>
          <Link
            href="/services"
            className="bg-white text-[#8F6ED5] border border-[#8F6ED5] px-6 py-3 rounded-xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-[#F0F4FF] transition-all duration-300"
          >
            Все услуги
          </Link>
        </div>
      </div>
    </div>
  )
} 