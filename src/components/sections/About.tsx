import React from 'react';
import { motion } from 'motion/react';
import { AppConfig, VisualDirection } from '../../types';

export function About({ config, theme }: { config: AppConfig; theme: any }) {
  return (
    <section id="expertise" className="py-24 md:py-40 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent z-10" />
         <img 
            src="https://images.unsplash.com/photo-1507679799987-c73774573b0a?auto=format&fit=crop&q=80&w=2071" 
            alt="Abstract" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span 
              className="text-xs uppercase tracking-[0.3em] font-mono mb-6 block"
              style={{ color: theme.palette.accent }}
            >
              PHILOSOPHY & VISION
            </span>
            <h2 
              className="text-4xl md:text-7xl font-medium tracking-tighter mb-12 leading-[0.9]"
              style={{ fontFamily: theme.fonts.editorial }}
            >
              Most firms focus on <span className="italic opacity-40">paperwork.</span> <br />
              We focus on <span className="italic" style={{ color: theme.palette.accent }}>confidence.</span>
            </h2>
            <div className="space-y-8 text-xl font-light text-white/60 leading-relaxed max-w-xl">
              <p>
                Founded on the intersection of technical excellence and strategic advisory, 
                {config.brandName} serves as the financial backbone for visionary enterprises.
              </p>
              <p>
                We believe that true compliance isn't just about meeting standards—it's about building a robust foundation 
                for exponential growth in an ever-shifting economic environment.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
              <div>
                <h4 className="text-sm uppercase tracking-widest font-mono text-white/40 mb-4">Core Promise</h4>
                <p className="text-white/80 font-medium">Uncompromising Integrity</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest font-mono text-white/40 mb-4">Methodology</h4>
                <p className="text-white/80 font-medium">Precision Auditing</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
              alt="Executive Architecture"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl">
                <span className="block text-[10px] uppercase tracking-widest font-mono text-white/40 mb-2">Director's Note</span>
                <p className="text-sm italic">"In the world of finance, clarity is the ultimate luxury."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
