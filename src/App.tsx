import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { TrustMetrics } from './components/sections/TrustMetrics';
import { Testimonials } from './components/sections/Testimonials';
import { Process } from './components/sections/Process';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { CustomizerOverlay } from './components/CustomizerOverlay';
import { AppConfig, VisualDirection } from './types';
import { DEFAULT_SERVICES, DEFAULT_TESTIMONIALS, THEME_PRESETS } from './constants';

export default function App() {
  const [config, setConfig] = useState<AppConfig>({
    brandName: 'Sharma & Associates',
    tagline: 'Chartered Accountants & Financial Advisors',
    visualDirection: VisualDirection.MidnightWealth,
    services: DEFAULT_SERVICES,
    primaryCTA: 'Book a Free Consultation',
    location: 'Hyderabad',
    testimonials: DEFAULT_TESTIMONIALS,
  });

  const [isCustomizing, setIsCustomizing] = useState(false);
  const theme = THEME_PRESETS[config.visualDirection];
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Apply theme variables to root
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.palette.primary);
    root.style.setProperty('--accent', theme.palette.accent);
    root.style.setProperty('--background', theme.palette.background);
    root.style.setProperty('--text', theme.palette.text);
    root.style.setProperty('--font-heading', theme.fonts.heading);
    root.style.setProperty('--font-editorial', theme.fonts.editorial);
  }, [theme]);

  return (
    <div 
      className="min-h-screen transition-colors duration-700"
      style={{ 
        backgroundColor: theme.palette.background,
        color: theme.palette.text,
        fontFamily: (theme as any).fonts.body || theme.fonts.heading 
      }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
        style={{ 
          scaleX: scrollYProgress,
          backgroundColor: theme.palette.accent 
        }}
      />
      
      <div className="noise-overlay" />
      <div className="atmospheric-glow-top" />
      <div className="atmospheric-glow-bottom" />
      
      <Navbar config={config} theme={theme} />
      
      <main>
        <Hero config={config} theme={theme} />
        <Services config={config} theme={theme} />
        <About config={config} theme={theme} />
        <TrustMetrics config={config} theme={theme} />
        <Process config={config} theme={theme} />
        <Testimonials config={config} theme={theme} />
        <Contact config={config} theme={theme} />
      </main>

      <Footer config={config} theme={theme} />

      {/* Sticky Customizer Trigger */}
      <button
        onClick={() => setIsCustomizing(true)}
        className="fixed bottom-8 left-8 z-50 p-4 rounded-full bg-white text-black shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <div className="w-4 h-4 bg-black rounded-full animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-widest hidden group-hover:block">Customize Brand</span>
      </button>

      <AnimatePresence>
        {isCustomizing && (
          <CustomizerOverlay 
            config={config} 
            setConfig={setConfig} 
            onClose={() => setIsCustomizing(false)} 
          />
        )}
      </AnimatePresence>

      {/* Sticky WhatsApp CTA */}
      <div className="fixed bottom-8 right-8 z-40">
        <motion.a
          href="https://wa.me/#"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-6 py-4 rounded-full bg-[#25D366] text-white shadow-xl"
        >
          <span className="font-medium text-sm">Consult Advisor</span>
        </motion.a>
      </div>
    </div>
  );
}
