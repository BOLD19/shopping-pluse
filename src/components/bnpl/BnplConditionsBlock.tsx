import React from 'react';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const decorativeVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function BnplConditionsBlock() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Enhanced geometric elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        {/* Main decorative shapes with blue gradients */}
        <motion.div 
          variants={decorativeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-0 right-0 w-[800px] h-[600px] transform rotate-[-10deg] translate-x-1/4 translate-y-[-10%] bg-gradient-to-br from-[#0088f5]/40 via-[#0979ff]/30 to-transparent opacity-60 rounded-[40px] backdrop-blur-sm"
        />
        <motion.div 
          variants={decorativeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute top-1/3 right-0 w-[600px] h-[400px] transform rotate-[-15deg] translate-x-1/3 bg-gradient-to-br from-[#0979ff]/35 via-[#0088f5]/25 to-transparent opacity-50 rounded-[40px] backdrop-blur-sm"
        />
        <motion.div 
          variants={decorativeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-10 right-1/4 w-[300px] h-[200px] transform rotate-[-5deg] bg-gradient-to-br from-[#0088f5]/30 via-[#0979ff]/20 to-transparent opacity-40 rounded-[40px] backdrop-blur-sm"
        />
        
        {/* Floating particles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 left-20"
        >
          <Sparkles className="w-8 h-8 text-[#0088f5]/40" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-32 left-1/3"
        >
          <Sparkles className="w-6 h-6 text-[#0979ff]/30" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 2 }}
          className="absolute top-1/2 left-16"
        >
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#0088f5] to-[#0979ff] opacity-60" />
        </motion.div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, #0088f5 1px, transparent 1px),
              linear-gradient(to bottom, #0088f5 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Left content */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Ознакомиться{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088f5] to-[#0979ff] relative">
                с условиями
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                  className="absolute bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#0088f5]/40 to-[#0979ff]/30 -z-10 rounded-full"
                />
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              Помогаем предпринимателям быстро и без лишней бюрократии открыть ТОО. Сразу показываем, какие нужны документы и оформляем всё за{" "}
              <span className="text-[#0088f5] font-semibold">1 день</span>.
            </motion.p>
            
            {/* Additional benefits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              {[
                "✓ Подготовка всех документов",
                "✓ Подача в государственные органы", 
                "✓ Получение справок и печати"
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 text-white/80 text-lg"
                >
                  <span className="text-[#0088f5] font-bold">{benefit.slice(0, 1)}</span>
                  <span>{benefit.slice(1)}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right form */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-md"
            >
              <div className="relative">
                {/* Form background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-md border border-white/20" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0088f5]/20 to-[#0979ff]/20 rounded-3xl blur-xl opacity-60" />
                
                <div className="relative z-10 p-8 rounded-3xl">
          <ContactForm
            utm="bnpl_conditions_form"
            submitButtonText="Узнать условия"
            title="Заполните форму, и наш менеджер свяжется с вами в ближайшее время"
            description=""
          />
        </div>
      </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0088f5]/5 to-transparent"
      />
    </section>
  );
} 