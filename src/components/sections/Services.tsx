import React from 'react';
import { motion } from 'motion/react';
import { AppConfig } from '../../types';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../lib/utils';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  '1': LucideIcons.FileText,
  '2': LucideIcons.ClipboardCheck,
  '3': LucideIcons.TrendingUp,
  '4': LucideIcons.Briefcase,
  '5': LucideIcons.ShieldCheck,
  '6': LucideIcons.Clock,
};

export function Services({ config, theme }: { config: AppConfig; theme: any }) {
  return (
    <section id="services" className="py-24 md:py-40 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] font-mono mb-6 block"
            style={{ color: theme.palette.accent }}
          >
            OPERATIONAL ARCHITECTURE
          </motion.span>
          <h2 
            className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 text-white"
            style={{ fontFamily: theme.fonts.editorial }}
          >
            Strategic Solutions <br />
            <span className="italic opacity-40">Built For Resilience.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {config.services.map((service, index) => {
            const isSpecial = index === 2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className={cn(
                  "group p-12 rounded-[3rem] border transition-all duration-700 overflow-hidden relative",
                  "flex flex-col h-full",
                  isSpecial 
                    ? "bg-[#D4AF37] border-white/20 text-[#0B0D12] shadow-[0_30px_60px_-15px_rgba(212,175,55,0.2)]" 
                    : "bg-[#15171E] border-white/5 hover:border-white/20 hover:bg-[#1A1C23]"
                )}
              >
                <div 
                  className={cn(
                    "text-[10px] font-mono mb-10 tracking-[0.3em] font-black",
                    isSpecial ? "opacity-60" : "text-[#D4AF37]"
                  )}
                >
                  PROTOCOL.0{index + 1}
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={cn(
                    "w-12 h-12 mb-12 transition-transform duration-500",
                    isSpecial ? "text-[#0B0D12]" : "text-[#D4AF37]"
                  )}
                >
                  {React.createElement(SERVICE_ICONS[service.id] || LucideIcons.HelpCircle, { 
                    size: 48, 
                    strokeWidth: 1 
                  })}
                </motion.div>

                <h3 className={cn(
                  "text-3xl font-medium mb-6 tracking-tight",
                  isSpecial ? "font-bold" : "text-white"
                )}>
                  {service.title}
                </h3>
                
                <p className={cn(
                  "text-base leading-relaxed mb-10 flex-grow",
                  isSpecial ? "opacity-90 font-medium" : "text-white/40"
                )}>
                  {service.description}
                </p>

                <div className={cn(
                  "flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] cursor-pointer group/link mt-auto",
                  isSpecial ? "text-[#0B0D12]" : "text-[#D4AF37]"
                )}>
                  <span>Analyze Protocol</span>
                  <LucideIcons.ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
