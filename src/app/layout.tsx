import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Шаблон Лендинг Страницы — Современный и Адаптивный',
  description: 'Создавайте потрясающие лендинг страницы с нашим современным шаблоном. Next.js, TypeScript, Tailwind CSS. Готов к использованию.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="h-full scroll-smooth bg-white">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} min-h-full bg-white text-[#171717] antialiased selection:bg-primary/20 selection:text-primary`}>
        {children}
      </body>
    </html>
  )
}
