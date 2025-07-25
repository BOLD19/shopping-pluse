'use client'

import { ChevronDown } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="https://pluse.kz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <h1 className="text-xl font-bold text-black">
                Pluse.kz
              </h1>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
} 