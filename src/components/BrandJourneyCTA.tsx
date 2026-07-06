/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, FileText, ChevronRight, CheckCircle, Sparkles, Terminal } from 'lucide-react';

export default function BrandJourneyCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('Luxury Retail');
  const [inquiry, setInquiry] = useState('');
  const [email, setEmail] = useState('');
  const [showDownloadReceipt, setShowDownloadReceipt] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !company) return;
    
    setFormSubmitted(true);
  };

  const handleDownloadClick = () => {
    setShowDownloadReceipt(true);
    setTimeout(() => setShowDownloadReceipt(false), 3000);
  };

  return (
    <section id="contact-section" className="relative py-32 bg-brand-forest/10 border-t border-brand-gold/15 overflow-hidden noise-bg">
      {/* Blueprint grid backplane */}
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 grid-blueprint-fine opacity-20 pointer-events-none"></div>

      {/* Decorative vertical coordinates alignment rulers */}
      <div className="absolute left-12 top-0 bottom-0 glow-line-v opacity-25"></div>
      <div className="absolute right-12 top-0 bottom-0 glow-line-v opacity-25"></div>

      {/* Floating lights */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-brand-forest/20 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Final Statement & CTAs (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold block mb-4">
              Final Invitation // Chapter 08
            </span>
            
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-brand-ivory mb-6">
              Let's Build the <br />
              <span className="font-medium text-brand-gold text-glow">Future of Sustainable</span> <br />
              Brands together.
            </h2>

            <p className="font-sans text-sm text-brand-ivory-dark/75 font-light leading-relaxed max-w-lg mb-10">
              Engage the EcoSphere Core Blueprint system to establish an uncompromising heritage. 
              We audit material supply chains, synthesize digital parameters, and design pristine 
              identity assets that position your brand at the absolute summit of physical and visual prestige.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById('company-input');
                  if (el) el.focus();
                }}
                className="px-8 py-4 rounded-full bg-brand-gold text-brand-forest text-xs tracking-widest uppercase font-mono font-semibold hover:bg-brand-gold-bright transition-all duration-300 shadow-lg shadow-brand-gold/10"
              >
                START YOUR BRAND JOURNEY
              </button>
              
              <button
                onClick={handleDownloadClick}
                className="px-8 py-4 rounded-full border border-brand-gold/30 text-brand-ivory text-xs tracking-widest uppercase font-mono hover:border-brand-gold hover:bg-brand-forest/10 transition-colors duration-300 flex items-center justify-center gap-2 relative group"
              >
                <FileText className="w-4 h-4 text-brand-gold" />
                <span className="relative z-10">DOWNLOAD OVERVIEW</span>
              </button>
            </div>

            {/* Simulated instant download notification */}
            <AnimatePresence>
              {showDownloadReceipt && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-3 bg-brand-dark-bg border border-brand-gold/20 rounded-2xl font-mono text-[9px] text-brand-gold flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>DECRYPTING MANUAL OVERVIEW (PDF) ... DOWNLOAD SECURED</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Intake Application Form (6 Columns) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 md:p-10 bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-3xl relative box-glow" id="contact-form-container">

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="intake-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="border-b border-brand-gold/10 pb-4 mb-2 flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-brand-ivory font-semibold">
                        BRAND_INTAKE_REGISTRY
                      </span>
                      <span className="font-mono text-[8px] text-brand-sage-light/40">SECURE_SSL</span>
                    </div>

                    {/* Company Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company-input" className="font-mono text-[8px] uppercase tracking-widest text-brand-gold">
                        01 / Company / Brand Name
                      </label>
                      <input
                        type="text"
                        id="company-input"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. VANGUARD ATELIER"
                        className="w-full bg-white/[0.02] border border-white/15 rounded-xl px-4 py-3 text-sm text-brand-ivory placeholder-brand-sage-light/30 focus:border-brand-gold focus:ring-0 outline-none font-sans"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email-input" className="font-mono text-[8px] uppercase tracking-widest text-brand-gold">
                        02 / Principal Contact Email
                      </label>
                      <input
                        type="email"
                        id="email-input"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. curator@vanguard.com"
                        className="w-full bg-white/[0.02] border border-white/15 rounded-xl px-4 py-3 text-sm text-brand-ivory placeholder-brand-sage-light/30 focus:border-brand-gold focus:ring-0 outline-none font-sans"
                      />
                    </div>

                    {/* Industry Selector */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="industry-select" className="font-mono text-[8px] uppercase tracking-widest text-brand-gold">
                        03 / Industry Segment
                      </label>
                      <select
                        id="industry-select"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/15 rounded-xl px-4 py-3 text-sm text-brand-ivory focus:border-brand-gold focus:ring-0 outline-none font-sans"
                      >
                        <option value="Luxury Retail">Luxury Retail & Apparel</option>
                        <option value="Aviation">Aviation & Aerospace</option>
                        <option value="Renewable Energy">Renewable Megastructures</option>
                        <option value="Biophilic Architecture">Biophilic Architecture</option>
                        <option value="Elite Hospitality">Elite Hospitality</option>
                      </select>
                    </div>

                    {/* Inquiry description */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="narrative-textarea" className="font-mono text-[8px] uppercase tracking-widest text-brand-gold">
                        04 / Brand Narrative & Ambitions
                      </label>
                      <textarea
                        id="narrative-textarea"
                        rows={3}
                        value={inquiry}
                        onChange={(e) => setInquiry(e.target.value)}
                        placeholder="Detail your environmental carbon offsets or physical packaging criteria..."
                        className="w-full bg-white/[0.02] border border-white/15 rounded-xl px-4 py-3 text-sm text-brand-ivory placeholder-brand-sage-light/30 focus:border-brand-gold focus:ring-0 outline-none font-sans resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 mt-2 bg-brand-forest border border-brand-emerald/40 hover:border-brand-emerald text-brand-ivory hover:text-brand-gold-bright text-xs tracking-widest uppercase font-mono font-semibold transition-all duration-300 flex items-center justify-center gap-2 group rounded-full"
                    >
                      <span>TRANSMIT APPLICATION</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                  </motion.form>
                ) : (
                  // Elegant customized decrypted receipt on success!
                  <motion.div
                    key="success-receipt"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6 font-mono text-[11px] text-brand-sage-light leading-relaxed"
                  >
                    <div className="flex items-center gap-3 border-b border-brand-gold/10 pb-4">
                      <Terminal className="w-4 h-4 text-brand-gold animate-spin" style={{ animationDuration: '4s' }} />
                      <span className="text-brand-gold uppercase text-[10px] tracking-widest font-semibold">
                        DECRYPTION_SUCCESS
                      </span>
                    </div>

                    <div className="p-4 bg-brand-dark-bg border border-brand-emerald/30 text-brand-emerald flex items-center gap-3 rounded-2xl">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <div>
                        <span className="font-display font-medium text-xs block text-brand-ivory">Transmission Receipted</span>
                        <span className="text-[9px]">EcoSphere brand mainframe is mapping parameters.</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 bg-brand-dark-bg p-4 border border-brand-gold/10 text-[10px] rounded-2xl">
                      <div className="flex justify-between border-b border-brand-gold/5 pb-1.5">
                        <span className="text-brand-gold/50">PARTNER_BRAND:</span>
                        <span className="text-brand-ivory">{company.toUpperCase()}</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-gold/5 pb-1.5">
                        <span className="text-brand-gold/50">SECTOR_INDEX:</span>
                        <span className="text-brand-ivory">{industry.toUpperCase()}</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-gold/5 pb-1.5">
                        <span className="text-brand-gold/50">REGISTRY_ID:</span>
                        <span className="text-brand-gold">ESC_ID_{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-brand-gold/50">COMPASS_ALIGN:</span>
                        <span className="text-brand-ivory">N_34.52° // GOLDEN_LOCKED</span>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-brand-ivory-dark/65 font-light">
                      Thank you. We have recorded your narrative profile. A principal creative architect will reach out to curator at <strong className="text-brand-gold font-normal">{email}</strong> to begin establishing your physical blueprint specs.
                    </p>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setCompany('');
                        setEmail('');
                        setInquiry('');
                      }}
                      className="w-full py-3 bg-brand-charcoal hover:bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] uppercase font-mono tracking-widest transition-colors mt-2 rounded-full"
                    >
                      REGISTER ANOTHER CORE SPEC
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
