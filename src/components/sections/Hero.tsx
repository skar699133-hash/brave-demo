import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { AppConfig } from '../../types';
import { cn } from '../../lib/utils';
import * as LucideIcons from 'lucide-react';

export function Hero({ config, theme }: { config: AppConfig; theme: any }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-end overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" 
          style={{ backgroundImage: `linear-gradient(to top, ${theme.palette.primary}, transparent)` }}
        />
        <img 
          src={config.visualDirection === 'Midnight Wealth' 
            ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070' 
            : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069'} 
          alt="Luxury Office"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-30 container mx-auto px-6 mb-24 md:mb-32"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span 
              className="text-xs uppercase tracking-[0.3em] font-mono mb-6 block"
              style={{ color: theme.palette.accent }}
            >
              ESTABLISHED EXCELLENCE
            </span>
            <h1 
              className="text-6xl md:text-[8rem] lg:text-[10rem] font-medium leading-[0.8] tracking-tighter mb-10"
              style={{ 
                fontFamily: theme.fonts.editorial,
                color: '#FFFFFF' 
              }}
            >
              <span className="block font-bold">Wealth</span>
              <span className="block italic text-3xl md:text-5xl lg:text-6xl opacity-70 mt-2" style={{ color: theme.palette.accent }}>
                Defined & Mastered.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-12 font-sans font-light leading-relaxed">
              {config.tagline || "Providing elite compliance architectures for high-growth businesses and wealth advisory."}
            </p>

            <div className="flex flex-wrap gap-4 md:gap-8">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 30px ${theme.palette.accent}40`,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 md:px-14 py-5 md:py-6 rounded-full text-xs md:text-sm font-black tracking-[0.3em] uppercase transition-all duration-500 shadow-2xl shadow-black/40 flex items-center justify-center gap-3 group/cta relative overflow-hidden"
                style={{ 
                  backgroundColor: theme.palette.accent,
                  color: '#0B0D12'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 translate-x-[-100%]"
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">{config.primaryCTA}</span>
                <LucideIcons.ArrowRight size={18} className="relative z-10 group-hover/cta:translate-x-2 transition-transform duration-300" />
                
                {/* Pulse ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-current opacity-0"
                  animate={{ 
                    scale: [1, 1.2],
                    opacity: [0.5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  style={{ borderColor: theme.palette.accent }}
                />
              </motion.button>
              
              <div className="flex items-center gap-10 pl-6 border-l border-white/10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-3xl font-medium text-white" style={{ fontFamily: theme.fonts.editorial }}>24+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono">Years Pedigree</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-3xl font-medium text-white" style={{ fontFamily: theme.fonts.editorial }}>₹4.2B</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono">Assets Managed</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Rail */}
      <div className="absolute bottom-12 right-12 z-30 hidden lg:block">
        <div 
          className="text-[10px] uppercase tracking-[0.5em] vertical-text font-mono opacity-30"
          style={{ color: '#FFFFFF', writingMode: 'vertical-rl' }}
        >
          {config.location} ● REGIONAL HEADQUARTERS
        </div>
      </div>
    </section>
  );
}
