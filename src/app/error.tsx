'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
          Что-то пошло не так
        </h2>
        <p className="text-[#6B6B6B] mb-6">
          Произошла ошибка при загрузке страницы
        </p>
        <button
          onClick={reset}
          className="bg-[#8F6ED5] text-white px-6 py-3 rounded-xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-[#7F5EC5] transition-all duration-300"
        >
          Попробовать снова
        </button>
      </div>
    </div>
  )
} 