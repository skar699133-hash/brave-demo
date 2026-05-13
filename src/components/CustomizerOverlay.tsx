import React from 'react';
import { motion } from 'motion/react';
import { AppConfig, VisualDirection } from '../types';
import { X, Check } from 'lucide-react';

interface CustomizerProps {
  config: AppConfig;
  setConfig: React.Dispatch<React.SetStateAction<AppConfig>>;
  onClose: () => void;
}

export function CustomizerOverlay({ config, setConfig, onClose }: CustomizerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-end"
    >
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-xl h-full bg-white text-black p-12 overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-medium tracking-tighter">Brand Configuration</h2>
            <p className="text-black/40 text-sm mt-1">Design your cinematic financial identity.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-12">
          {/* Question 1: Brand Name */}
          <section>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-black/40 mb-4 font-bold">
              01. Firm / Brand Name
            </label>
            <input 
              type="text"
              value={config.brandName}
              onChange={(e) => setConfig({ ...config, brandName: e.target.value })}
              className="w-full bg-transparent border-b border-black/10 py-4 text-2xl focus:outline-none focus:border-black transition-colors"
              placeholder="e.g. Sharma & Associates"
            />
            <input 
              type="text"
              value={config.tagline}
              onChange={(e) => setConfig({ ...config, tagline: e.target.value })}
              className="w-full bg-transparent border-b border-black/10 py-3 text-sm mt-2 focus:outline-none focus:border-black transition-colors placeholder:italic"
              placeholder="Tagline: e.g. Excellence in Audit"
            />
          </section>

          {/* Question 2: Visual Direction */}
          <section>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-black/40 mb-6 font-bold">
              02. Visual Direction
            </label>
            <div className="grid grid-cols-2 gap-4">
              {Object.values(VisualDirection).map((dir) => (
                <button
                  key={dir}
                  onClick={() => setConfig({ ...config, visualDirection: dir })}
                  className={`p-6 rounded-2xl border text-left transition-all ${
                    config.visualDirection === dir 
                      ? 'border-black bg-black text-white shadow-xl' 
                      : 'border-black/5 hover:border-black/20 bg-black/5'
                  }`}
                >
                  <div className="text-sm font-medium mb-1">{dir}</div>
                  <div className="text-[10px] opacity-60 uppercase tracking-widest font-mono">
                    {dir === VisualDirection.MidnightWealth ? 'Premium Elite' : 'Executive'}
                  </div>
                  {config.visualDirection === dir && <Check size={14} className="mt-4" />}
                </button>
              ))}
            </div>
          </section>

          {/* Question 3: Primary CTA */}
          <section>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-black/40 mb-4 font-bold">
              03. Primary CTA
            </label>
            <input 
              type="text"
              value={config.primaryCTA}
              onChange={(e) => setConfig({ ...config, primaryCTA: e.target.value })}
              className="w-full bg-transparent border-b border-black/10 py-4 text-xl focus:outline-none focus:border-black transition-colors"
              placeholder="e.g. Book a Free Consultation"
            />
          </section>

          {/* Question 4: Location */}
          <section>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-black/40 mb-4 font-bold">
              04. Location / City
            </label>
            <input 
              type="text"
              value={config.location}
              onChange={(e) => setConfig({ ...config, location: e.target.value })}
              className="w-full bg-transparent border-b border-black/10 py-4 text-xl focus:outline-none focus:border-black transition-colors"
              placeholder="e.g. Hyderabad"
            />
          </section>

          <button 
            onClick={onClose}
            className="w-full py-6 bg-black text-white rounded-full font-medium uppercase tracking-[0.3em] text-xs hover:bg-black/90 transition-colors shadow-2xl"
          >
            Generate Identity
          </button>
        </div>

        <div className="mt-24 pt-12 border-t border-black/5">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-mono text-black/40">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            System Operational
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
