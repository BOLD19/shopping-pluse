import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Pluse.kz — финансовые сервисы для бизнеса',
  description: 'BNPL, интернет-магазин и онлайн-бухгалтерия для вашего бизнеса',
  themeColor: '#7F56D9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} min-h-full bg-background text-text antialiased selection:bg-primary/20 selection:text-primary`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
