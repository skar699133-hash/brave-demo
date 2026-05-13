import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AppConfig } from '../../types';
import { cn } from '../../lib/utils';

export function Navbar({ config, theme }: { config: AppConfig; theme: any }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      className={cn(
        "fixed top-4 md:top-8 left-1/2 z-50 transition-all duration-700 px-6 md:px-10 flex items-center justify-between",
        "w-[95%] max-w-[1200px]",
        isScrolled 
          ? "h-16 bg-black/80 backdrop-blur-2xl border border-white/5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
          : "h-20 bg-[#1A1C23]/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      )}
    >
      <div className="flex items-center gap-3">
        <div 
          className="w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-lg"
          style={{ backgroundColor: theme.palette.accent, color: '#0B0D12' }}
        >
          {config.brandName.charAt(0)}
        </div>
        <span 
          className="text-sm font-semibold tracking-[0.25em] uppercase"
          style={{ 
            fontFamily: theme.fonts.heading,
            color: '#FFFFFF'
          }}
        >
          {config.brandName.split(' ')[0]}
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        {['Expertise', 'Services', 'Insights', 'Protocol'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/50 hover:text-[#D4AF37] transition-all duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <button 
        className="px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-95"
        style={{ 
          backgroundColor: theme.palette.accent,
          color: '#0B0D12'
        }}
      >
        Book Consultation
      </button>
    </motion.nav>
  );
}
