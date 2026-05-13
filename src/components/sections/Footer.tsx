import React from 'react';
import { AppConfig } from '../../types';

export function Footer({ config, theme }: { config: AppConfig; theme: any }) {
  return (
    <footer className="py-24 bg-black text-white px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div 
                className="w-6 h-6 rounded-sm rotate-45 border"
                style={{ borderColor: theme.palette.accent }}
              />
              <span className="text-xl font-semibold tracking-tighter uppercase">
                {config.brandName}
              </span>
            </div>
            <p className="text-white/40 max-w-sm font-light leading-relaxed mb-8">
              Leading the architectural design of financial compliance and strategic advisory for India's growing elite enterprises.
            </p>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-mono">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               System Status: Operational
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white/60 transition-colors">Expertise</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Client Log</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Legal Framework</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-8">Social Grid</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white/60 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Clutch Profile</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:row items-center justify-between gap-8">
          <div className="text-[10px] uppercase tracking-widest font-mono text-white/40">
            © 2026 {config.brandName}. ALL RIGHTS ARCHITECTED.
          </div>
          <div className="flex gap-12 text-[10px] uppercase tracking-widest font-mono text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white/60 transition-colors">Tax Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
