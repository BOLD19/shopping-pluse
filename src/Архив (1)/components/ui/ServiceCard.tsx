'use client'

import { motion } from 'framer-motion'
import { ServiceCardProps } from '@/types'
import { ArrowRight } from 'lucide-react'

const getServiceStyles = (id: string, isActive: boolean) => {
  const styles = {
    bnpl: {
      active: 'from-[#8F6ED5] to-[#6C4CB3]',
      inactive: 'from-[#F472B6] to-[#EC4899]',
      icon: (
        <div className="relative w-12 h-12 flex flex-row justify-center gap-2">
          <div className={`w-2 h-full ${isActive ? 'bg-white' : 'bg-white'} rounded-full`}></div>
          <div className={`w-2 h-full ${isActive ? 'bg-white' : 'bg-white'} rounded-full`}></div>
          <div className={`w-2 h-full ${isActive ? 'bg-white' : 'bg-white'} rounded-full`}></div>
        </div>
      )
    },
    shopping: {
      active: 'from-[#8F6ED5] to-[#6C4CB3]',
      inactive: 'from-[#E0FF4F] to-[#D4F63C]',
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className={`
            w-12 h-14
            ${isActive ? 'bg-white' : 'bg-[#F472B6]'}
            transform rotate-[-12deg]
            transition-all duration-300
            relative
          `}
          style={{
            clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'
          }}
          >
            <div className={`
              absolute top-[12%] left-[12%]
              w-2.5 h-2.5 rounded-full
              ${isActive ? 'bg-[#6C4CB3]' : 'bg-[#E0FF4F]'}
              transition-all duration-300
            `}></div>
            
            <div className={`
              absolute top-0 left-0
              w-[25%] h-[25%]
              ${isActive ? 'bg-[#8F6ED5]/20' : 'bg-[#EC4899]'}
              transition-all duration-300
            `}
            style={{
              clipPath: 'polygon(0 100%, 100% 0, 0 0)'
            }}
            ></div>

            <div className={`
              absolute top-1/2 left-1/2 
              transform -translate-x-1/2 -translate-y-1/2
              text-xl font-bold
              ${isActive ? 'text-[#6C4CB3]' : 'text-[#E0FF4F]'}
              transition-all duration-300
            `}>
              %
            </div>
          </div>
        </div>
      )
    },
    accounting: {
      active: 'from-[#8F6ED5] to-[#6C4CB3]',
      inactive: 'from-[#40E0D0] to-[#20B2AA]',
      icon: (
        <div className="w-16 h-20 bg-white rounded-lg p-2">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-[#40E0D0] rounded-sm"></div>
            ))}
          </div>
        </div>
      )
    },
    bank: {
      active: 'from-[#8F6ED5] to-[#6C4CB3]',
      inactive: 'from-black to-[#2A2A2A]',
      icon: (
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-10 bg-[#FFD700] rounded-lg"></div>
          <div className="w-12 h-8 bg-white rounded-lg"></div>
        </div>
      )
    },
    other: {
      active: 'from-[#8F6ED5] to-[#6C4CB3]',
      inactive: 'from-[#DEB887] to-[#D2B48C]',
      icon: (
        <div className="grid grid-cols-2 gap-1.5 md:gap-3">
          <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded"></div>
          <div className="w-4 h-4 md:w-6 md:h-6 bg-[#E0FF4F] rounded"></div>
          <div className="w-4 h-4 md:w-6 md:h-6 bg-[#E0FF4F] rounded"></div>
          <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded"></div>
        </div>
      )
    }
  }

  return styles[id as keyof typeof styles]
}

export default function ServiceCard({ service, isActive, onClick }: ServiceCardProps) {
  const styles = getServiceStyles(service.id, isActive)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`flex flex-col items-center group cursor-pointer relative mb-9 md:mb-0`}
      onClick={onClick}
    >
      <div className={`
        relative w-16 h-16 md:w-24 md:h-24 mb-3 md:mb-6 
        transition-all duration-300
      `}>
        <div className={`
          absolute inset-0 bg-gradient-to-br 
          ${isActive ? styles.active : styles.inactive}
          rounded-xl md:rounded-2xl transform rotate-[-5deg] shadow-xl
          transition-all duration-300
        `}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center scale-[0.7] md:scale-100">
          {styles.icon}
        </div>
      </div>
      <span className={`text-[10px] md:text-sm font-medium text-center transition-colors duration-200 ${
        isActive ? 'text-[#8F6ED5]' : 'text-[#4A4A4A]'
      }`}>
        {service.name}
      </span>
    </motion.div>
  )
} 