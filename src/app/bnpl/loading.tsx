export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#8F6ED5]"></div>
        <p className="text-[#6B6B6B]">Загрузка...</p>
      </div>
    </div>
  )
} 