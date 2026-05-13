import React from 'react';
import { motion } from 'motion/react';
import { AppConfig } from '../../types';

export function TrustMetrics({ config, theme }: { config: AppConfig; theme: any }) {
  const metrics = [
    { label: 'Years Experience', value: '25+', sub: 'Elite Advisory' },
    { label: 'Tax Returns Filed', value: '12K', sub: 'Last Fiscal Year' },
    { label: 'Businesses Supported', value: '450', sub: 'Regional Growth' },
    { label: 'Compliance Rating', value: '100%', sub: 'Audit Excellence' },
  ];

  return (
    <section className="py-24 border-y border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="text-4xl md:text-6xl font-medium tracking-tighter mb-4"
                style={{ fontFamily: theme.fonts.editorial }}
              >
                {metric.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-black/40 mb-1 font-bold">
                {metric.label}
              </div>
              <div className="text-[10px] text-black/20 italic">{metric.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
