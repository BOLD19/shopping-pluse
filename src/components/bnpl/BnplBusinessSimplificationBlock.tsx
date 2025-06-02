import React from 'react';
import Link from 'next/link';
import { UserRound, PiggyBank, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: UserRound,
    label: "Клиентов",
    value: "200+",
    description: "довольных предпринимателей",
    style: "bg-gradient-to-br from-white to-blue-50/50",
    accentColor: "#0088f5"
  },
  {
    icon: PiggyBank,
    label: "Сумма займов",
    value: "₸15 млрд",
    description: "выдано в рассрочку",
    style: "bg-gradient-to-br from-[#0088f5]/20 to-[#0979ff]/10",
    accentColor: "#0979ff"
  },
  {
    icon: MapPin,
    label: "География",
    value: "17",
    description: "городов Казахстана",
    style: "bg-gradient-to-br from-[#0088f5] to-[#0979ff]",
    accentColor: "#ffffff",
    isHighlight: true
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function BnplBusinessSimplificationBlock() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FDFCFB] via-blue-50/30 to-[#FDFCFB] relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, #0088f5 1px, transparent 1px),
              linear-gradient(to bottom, #0088f5 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>
        
        {/* Floating gradient orbs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-[#0088f5]/20 to-[#0979ff]/10 blur-[120px] pointer-events-none"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-blue-400/15 to-blue-600/5 blur-[100px] pointer-events-none"
        />
        
        {/* Animated sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 right-20"
        >
          <Sparkles className="w-6 h-6 text-[#0088f5]/30" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.2 }}
          className="absolute bottom-32 left-16"
        >
          <Sparkles className="w-4 h-4 text-[#0979ff]/40" />
        </motion.div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white/90 backdrop-blur-sm rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,136,245,0.15)] transition-all duration-500 border border-white/50"
        >
          {/* Card background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-transparent opacity-60" />
          
          <div className="relative px-6 py-8 lg:p-12">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <motion.div variants={itemVariants}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] mb-8 break-words leading-tight">
                    Мы делаем бизнес проще —{" "}
                    <span className="text-[#0088f5] relative inline-block">
                      честно и прозрачно
                      <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#0088f5]/30 to-[#0979ff]/20 -z-10 rounded-full"
                      />
                    </span>
                  </h2>
                  
                  <div className="space-y-8">
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-lg lg:text-xl text-[#64748b] leading-relaxed"
                    >
                      Pluse.kz — это цифровая платформа для предпринимателей в Казахстане. Мы являемся резидентом Astana Hub и лицензирован Агентством по регулированию и развитию финансового рынка Республики Казахстан (АРРФР).
                    </motion.p>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg lg:text-xl text-[#64748b] leading-relaxed"
                    >
                      Среди инвесторов проекта — венчурный фонд Tumar Ventures, поддерживаемый Всемирным банком и Министерством цифрового развития, инноваций и аэрокосмической промышленности Казахстана.
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="pt-4"
                    >
                      <Link
                        href="/digital-branch"
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#0088f5] to-[#0979ff] text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-[0_8px_30px_rgba(0,136,245,0.4)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.6)] hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0979ff] to-[#0088f5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Познакомиться ближе</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative lg:block">
                {/* Mobile version: vertical stack */}
                <div className="block lg:hidden w-full flex flex-col gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      whileHover={{ 
                        scale: 1.02, 
                        transition: { duration: 0.2 } 
                      }}
                      className={`relative w-full ${stat.style} rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,136,245,0.1)] p-8 transition-all duration-300 backdrop-blur-sm border border-white/20 overflow-hidden group`}
                    >
                      {/* Card hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div 
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className={`w-12 h-12 rounded-xl ${
                              stat.isHighlight 
                                ? "bg-white/20" 
                                : "bg-[#0088f5]/10"
                            } flex items-center justify-center backdrop-blur-sm`}
                          >
                            {React.createElement(stat.icon, { 
                              className: `w-6 h-6 ${
                                stat.isHighlight
                                  ? "text-white"
                                  : "text-[#0088f5]"
                              }`
                            })}
                          </motion.div>
                          <span className={`${
                            stat.isHighlight
                              ? "text-white/90"
                              : "text-[#64748b]"
                          } text-base font-medium`}>{stat.label}</span>
                        </div>
                        
                        <div>
                          <motion.div 
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={`text-3xl font-bold mb-2 ${
                              stat.isHighlight
                                ? "text-white"
                                : "text-[#0f172a]"
                            }`}
                          >
                            {stat.value}
                          </motion.div>
                          <div className={`text-base ${
                            stat.isHighlight
                              ? "text-white/80"
                              : "text-[#64748b]"
                          }`}>{stat.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Desktop version: absolute positioned cards */}
                <div className="hidden lg:block relative w-full h-[600px]">
                  {/* Enhanced background visualization */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 800 600" className="w-full h-full">
                      <defs>
                        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0088f5" stopOpacity="0.3" />
                          <stop offset="50%" stopColor="#0979ff" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#0088f5" stopOpacity="0.1" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Connection lines */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 1 }}
                        d="M400 150 Q 480 200 550 180 Q 650 140 700 220 Q 750 300 650 340 Q 550 380 480 450 Q 400 520 320 450 Q 250 380 150 340 Q 50 300 100 220 Q 150 140 250 180 Q 320 200 400 150" 
                        fill="none" 
                        stroke="url(#pathGradient)"
                        strokeWidth="2"
                        filter="url(#glow)"
                      />
                      
                      {/* Animated dots along the path */}
                      <motion.circle
                        r="3"
                        fill="#0088f5"
                        opacity="0.6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: 2 
                        }}
                      >
                        <animateMotion dur="6s" repeatCount="indefinite">
                          <mpath href="#connectionPath"/>
                        </animateMotion>
                      </motion.circle>
                      
                      <path id="connectionPath" d="M400 150 Q 480 200 550 180 Q 650 140 700 220 Q 750 300 650 340 Q 550 380 480 450 Q 400 520 320 450 Q 250 380 150 340 Q 50 300 100 220 Q 150 140 250 180 Q 320 200 400 150" fill="none" stroke="none"/>
                    </svg>
                  </motion.div>

                  {/* Enhanced stats cards */}
                  {stats.map((stat, index) => {
                    const positions = [
                      "top-12 right-8",
                      "top-56 right-56", 
                      "bottom-12 right-12"
                    ];
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.7, 
                          delay: index * 0.3 + 0.5, 
                          ease: "easeOut" 
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotate: 2,
                          transition: { duration: 0.3 } 
                        }}
                        className={`absolute ${positions[index]} w-72 h-52 ${stat.style} rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,136,245,0.15)] transition-all duration-500 p-8 backdrop-blur-sm border border-white/30 overflow-hidden group cursor-pointer`}
                      >
                        {/* Enhanced card background effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div 
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 0.1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 + 1 }}
                          className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#0088f5] to-[#0979ff] blur-xl"
                        />
                        
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              whileHover={{ rotate: 15, scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                              className={`w-14 h-14 rounded-xl ${
                                stat.isHighlight 
                                  ? "bg-white/20 backdrop-blur-sm" 
                                  : "bg-[#0088f5]/10 backdrop-blur-sm"
                              } flex items-center justify-center shadow-lg`}
                            >
                              {React.createElement(stat.icon, { 
                                className: `w-7 h-7 ${
                                  stat.isHighlight
                                    ? "text-white"
                                    : "text-[#0088f5]"
                                }`
                              })}
                            </motion.div>
                            <span className={`${
                              stat.isHighlight
                                ? "text-white/90"
                                : "text-[#64748b]"
                            } text-sm font-medium`}>{stat.label}</span>
                          </div>
                          
                          <div className="mt-6">
                            <motion.div 
                              initial={{ scale: 0.8, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                              className={`text-4xl font-bold mb-2 ${
                                stat.isHighlight
                                  ? "text-white"
                                  : "text-[#0f172a]"
                              }`}
                            >
                              {stat.value}
                            </motion.div>
                            <div className={`text-sm leading-relaxed ${
                              stat.isHighlight
                                ? "text-white/80"
                                : "text-[#64748b]"
                            }`}>{stat.description}</div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 