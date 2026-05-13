import React from 'react';
import { motion } from 'motion/react';
import { AppConfig } from '../../types';
import * as LucideIcons from 'lucide-react';

export function Process({ config, theme }: { config: AppConfig; theme: any }) {
  const steps = [
    { 
      id: '01', 
      title: 'Discovery & Diagnostic', 
      desc: 'We map your existing financial state, uncovering latent liabilities and optimization vectors across your entire operation.',
      icon: 'Strategy',
      graphic: (
        <div className="w-full h-full flex items-center justify-center relative group/graphic">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-48 h-48 border border-white/10 rounded-full relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37]" />
          </motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="w-32 h-32 border border-white/20 rounded-full absolute"
          >
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-16 h-16 bg-[#D4AF37]/20 rounded-full blur-2xl absolute"
          />
          <LucideIcons.Search size={40} className="text-white/20 absolute group-hover/graphic:scale-125 transition-transform duration-500" strokeWidth={1} />
        </div>
      )
    },
    { 
      id: '02', 
      title: 'Architecture & Filing', 
      desc: 'Re-engineering your tax posture and GST workflows under partner signature. Total compliance alignment with paperwork-free efficiency.',
      icon: 'Execution',
      graphic: (
        <div className="w-full h-full p-12 flex flex-col justify-center gap-6 relative group/graphic">
          <div className="grid grid-cols-6 gap-4 opacity-20">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0.1 }}
                whileHover={{ opacity: 1, backgroundColor: '#D4AF37', scale: 1.5 }}
                className="w-2 h-2 bg-white rounded-sm transition-all duration-300" 
              />
            ))}
          </div>
          <div className="relative h-px w-full bg-white/10 overflow-hidden">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            />
          </div>
          <LucideIcons.Layers size={40} className="text-white/20 absolute right-12 bottom-12 group-hover/graphic:rotate-12 transition-transform duration-500" strokeWidth={1} />
        </div>
      )
    },
    { 
      id: '03', 
      title: 'Stewardship & Scale', 
      desc: 'Quarterly partner reviews and board-level advisory. Your numbers, watched the way a vintner watches a cellar.',
      icon: 'Support',
      graphic: (
        <div className="w-full h-full flex items-center justify-center relative group/graphic">
          <svg viewBox="0 0 200 100" className="w-full h-32 text-[#D4AF37] opacity-40">
            <motion.path
              d="M0,50 L30,50 L40,20 L60,80 L80,50 L120,50 L130,10 L150,90 L170,50 L200,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-1/4 right-1/4 w-20 h-20 bg-[#D4AF37]/10 rounded-full blur-3xl"
          />
          <LucideIcons.TrendingUp size={40} className="text-white/20 absolute group-hover/graphic:-translate-y-4 transition-transform duration-500" strokeWidth={1} />
        </div>
      )
    }
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-[1400px] mx-auto space-y-4">
        {steps.map((step, index) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="sticky top-24 min-h-[80vh] bg-[#F8F8F8] rounded-[3rem] border border-black/5 overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)]"
            style={{ 
              zIndex: index + 1,
              marginTop: index === 0 ? 0 : `-15vh` 
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[80vh]">
              <div className="p-10 md:p-20 flex flex-col justify-center">
                <span className="text-[10px] font-mono tracking-[0.4em] text-black/30 mb-12 block font-black">
                  STEP {step.id}
                </span>
                <h3 
                  className="text-5xl md:text-8xl font-medium mb-10 tracking-tighter leading-[0.9] text-black" 
                  style={{ fontFamily: theme.fonts.editorial }}
                >
                  {step.title}
                </h3>
                <p className="text-black/50 text-xl md:text-2xl font-light leading-relaxed max-w-lg">
                  {step.desc}
                </p>
                <div className="mt-16 flex items-center gap-6">
                   <div className="w-12 h-px bg-black/10" />
                   <span className="text-[10px] uppercase tracking-widest font-mono text-black/30">Verified Protocol</span>
                </div>
              </div>

              <div className="bg-[#0B0D12] m-6 md:m-10 rounded-[2rem] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                </div>
                {step.graphic}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
