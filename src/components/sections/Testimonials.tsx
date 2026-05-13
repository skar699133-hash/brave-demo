import React from 'react';
import { motion } from 'motion/react';
import { AppConfig } from '../../types';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../lib/utils';

export function Testimonials({ config, theme }: { config: AppConfig; theme: any }) {
  const tiers = [
    {
      name: 'ESSENTIAL',
      price: '₹45,000',
      period: '/ quarter',
      desc: 'For founders and solo professionals who want a partner-led tax & ROC engagement, not a portal.',
      features: ['Quarterly partner review', 'ITR + GST filings', 'Statutory compliance calendar', 'Email advisory'],
      isMostChosen: false
    },
    {
      name: 'PERFORMANCE',
      price: '₹1,80,000',
      period: '/ quarter',
      desc: 'For scaling companies and HNIs who need audits, structuring, and a direct line to a chartered accountant.',
      features: ['Everything in Essential', 'Statutory + internal audit', 'Capital gains structuring', 'Board observer reporting', 'Priority advisory line'],
      isMostChosen: true
    },
    {
      name: 'ENTERPRISE',
      price: 'On request',
      period: '',
      desc: 'For family offices, cross-border holdings, and enterprises requiring a dedicated partner team.',
      features: ['Dedicated partner pod', 'Group audit & consolidation', 'Transfer pricing & DTAA', 'M&A and due diligence', 'Forensic & regulatory liaison'],
      isMostChosen: false
    }
  ];

  return (
    <section id="insights" className="py-24 md:py-48 bg-[#F8F8F8] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.4em] font-mono mb-6 block font-black text-[#D4AF37]">
                MEMBERSHIP
              </span>
              <h2 
                className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-black"
                style={{ fontFamily: theme.fonts.editorial }}
              >
                Three engagements, <br />
                one standard.
              </h2>
           </div>
           <div className="max-w-xs text-right hidden md:block">
              <p className="text-black/40 text-sm italic font-light">
                Every tier is partner-led. We do not delegate the work that carries our name.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-10%" }}
              className={cn(
                "p-12 rounded-[3.5rem] border transition-all duration-700 relative overflow-hidden group",
                tier.isMostChosen 
                  ? "bg-[#0B0D12] text-white border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
                  : "bg-white text-black border-black/5"
              )}
            >
              {tier.isMostChosen && (
                 <div className="absolute top-8 right-8 px-4 py-1 bg-[#D4AF37] text-black text-[8px] font-black uppercase tracking-widest rounded-full">
                    MOST CHOSEN
                 </div>
              )}

              <span className="text-[10px] font-mono tracking-[0.2em] font-black opacity-40 mb-6 block">
                {tier.name}
              </span>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl md:text-5xl font-medium tracking-tighter" style={{ fontFamily: theme.fonts.editorial }}>
                  {tier.price}
                </span>
                <span className="text-xs opacity-40">{tier.period}</span>
              </div>

              <p className={cn(
                "text-sm mb-10 min-h-[60px]",
                tier.isMostChosen ? "text-white/60" : "text-black/40"
              )}>
                {tier.desc}
              </p>

              <div className="space-y-4 mb-12">
                {tier.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={cn(
                      "w-4 h-4 rounded-full flex items-center justify-center",
                      tier.isMostChosen ? "bg-white/10 text-[#D4AF37]" : "bg-black/5 text-[#D4AF37]"
                    )}>
                      <LucideIcons.Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={cn(
                  "w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                  tier.isMostChosen 
                    ? "bg-white text-black hover:bg-[#D4AF37]" 
                    : "bg-[#0B0D12] text-white hover:bg-black/80"
                )}
              >
                Book consultation
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:hidden text-center">
            <p className="text-black/40 text-xs italic font-light">
              Every tier is partner-led. We do not delegate the work that carries our name.
            </p>
        </div>
      </div>
    </section>
  );
}
