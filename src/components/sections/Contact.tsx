import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppConfig } from '../../types';
import { Mail, Phone, MapPin, ArrowUpRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FormState {
  name: string;
  email: string;
  company: string;
  concern: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact({ config, theme }: { config: AppConfig; theme: any }) {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    concern: 'Tax Strategy',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (data: FormState) => {
    const newErrors: FormErrors = {};
    if (!data.name || data.name.trim().length < 2) {
      newErrors.name = 'VALID IDENTITY REQUIRED';
    }
    if (!data.email || !data.email.trim()) {
      newErrors.email = 'PROTOCOL ADDRESS REQUIRED';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'INVALID COMMUNICATION PROTOCOL';
    }
    if (!data.message || data.message.trim().length < 10) {
      newErrors.message = 'NARRATIVE TOO BRIEF (MIN 10 CHARS)';
    }
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation for the specific field
    const fieldErrors = validate({ ...formData, [name]: value });
    setErrors(prev => ({
      ...prev,
      [name]: fieldErrors[name as keyof FormErrors]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalErrors = validate(formData);
    
    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      // Trigger a subtle shake effect or similar if needed
      return;
    }

    setIsSubmitting(true);
    // Secure Transmission Emulation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-black text-white px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span 
              className="text-xs uppercase tracking-[0.3em] font-mono mb-6 block"
              style={{ color: theme.palette.accent }}
            >
              INITIATE CONSULTATION
            </span>
            <h2 
              className="text-4xl md:text-8xl font-medium tracking-tighter mb-12 leading-[0.8]"
              style={{ fontFamily: theme.fonts.editorial }}
            >
              Ready to <br />
              <span className="italic" style={{ color: theme.palette.accent }}>Elevate?</span>
            </h2>
            <p className="text-white/60 text-xl font-light max-w-md mb-16 leading-relaxed">
              Let's define your fiscal future. Our advisors are ready to architect your compliance strategy.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Protocol', value: `hello@${config.brandName.toLowerCase().replace(/[^a-z]/g, '')}.com` },
                { icon: Phone, label: 'Secure Line', value: '+91 99887 76655' },
                { icon: MapPin, label: 'Presence', value: `${config.location}, Corporate Hub` }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-1">{item.label}</div>
                    <div className="text-lg">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[3rem]"
              >
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Full Identity</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={cn(
                          "w-full bg-transparent border-b py-4 focus:outline-none transition-colors",
                          errors.name ? "border-red-500/50" : "border-white/20 focus:border-white"
                        )}
                      />
                      {errors.name && <span className="text-[10px] font-mono text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</span>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Company Entity</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Electronic Mail Protocol</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full bg-transparent border-b py-4 focus:outline-none transition-colors",
                        errors.email ? "border-red-500/50" : "border-white/20 focus:border-white"
                      )}
                    />
                    {errors.email && <span className="text-[10px] font-mono text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Primary Concern</label>
                    <select 
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                    >
                      <option className="bg-black">Tax Strategy</option>
                      <option className="bg-black">Corporate Audit</option>
                      <option className="bg-black">Compliance Audit</option>
                      <option className="bg-black">Other Advisory</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Brief Narrative</label>
                    <textarea 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full bg-transparent border-b py-4 focus:outline-none transition-colors resize-none",
                        errors.message ? "border-red-500/50" : "border-white/20 focus:border-white"
                      )}
                    />
                    {errors.message && <span className="text-[10px] font-mono text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</span>}
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-6 flex items-center justify-center gap-4 group transition-all rounded-[1rem] relative overflow-hidden",
                      isSubmitting ? "opacity-70 cursor-wait" : ""
                    )}
                    style={{ backgroundColor: theme.palette.accent, color: theme.palette.primary }}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <span className="text-xs font-bold uppercase tracking-[0.3em]">Initialize Discussion</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 backdrop-blur-3xl border border-[#D4AF37]/30 p-16 rounded-[3rem] text-center flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center mb-8 text-black">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-medium mb-4 tracking-tight" style={{ fontFamily: theme.fonts.editorial }}>Protocol Initiated.</h3>
                <p className="text-white/60 mb-10 max-w-xs mx-auto italic font-light">
                  A senior financial architect will verify your credentials and initiate contact within the next 24 business hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-[10px] uppercase tracking-widest font-mono text-white/40 hover:text-white transition-colors"
                >
                  Close Session
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
