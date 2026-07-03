/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowUpRight, 
  ChevronRight,
  Mail, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';
import { navItems } from '../data/brandData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-brand-dark-bg noise-bg border-t border-brand-gold/15 pt-24 pb-12 overflow-hidden select-none">
      {/* Absolute blueprint matrix backline */}
      <div className="absolute inset-0 grid-blueprint opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Block layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-brand-gold/10">
          
          {/* Column 1: Logo & Vision (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 group mb-6">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-forest/60 border border-brand-gold/25">
                <svg viewBox="0 0 100 100" className="w-4.5 h-4.5 fill-none stroke-brand-gold" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 50,50 A 20,20 0 1,1 30,50 A 10,10 0 1,1 40,50 A 5,5 0 1,1 45,50" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-sm tracking-[0.18em] text-brand-ivory uppercase">
                  ECOSPHERE
                </span>
                <span className="font-mono text-[8px] tracking-widest text-brand-sage-light/60 uppercase">
                  Core Brand Blueprint
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-brand-ivory-dark/60 leading-relaxed max-w-sm mb-8 font-light">
              EcoSphere Group establishes pristine, biophilic identity systems, closed-loop packaging language, and structural guidelines for international sustainability leaders.
            </p>

            {/* Social Icons with custom circular brackets */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: 'https://instagram.com/ecosphere' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/ecosphere' },
                { Icon: Twitter, href: 'https://twitter.com/ecosphere' },
                { Icon: Github, href: 'https://github.com/ecosphere' }
              ].map((soc, sIdx) => (
                <a
                  key={sIdx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-brand-gold/15 text-brand-gold hover:text-brand-forest hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 rounded-full group"
                  aria-label="Social Link"
                >
                  <soc.Icon className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Directory Directory Link List (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold mb-6 border-b border-brand-gold/5 pb-2 w-full">
              CORE DIRECTORY
            </h4>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="font-sans text-xs text-brand-ivory-dark/70 hover:text-brand-gold transition-colors duration-300 flex items-center gap-1.5 group font-light"
                >
                  <ChevronRight className="w-3 h-3 text-brand-gold/0 group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all duration-300" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter Intake Box (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold mb-6 border-b border-brand-gold/5 pb-2 w-full">
              BLUEPRINT DIGEST
            </h4>
            
            <p className="font-sans text-xs text-brand-ivory-dark/60 leading-relaxed mb-6 font-light">
              Subscribe to receive active chapters, vector files, and composting chemical specifications directly inside your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-2 relative">
              <div className="relative w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter.curator@email.com"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-full pl-4 pr-12 py-3 text-xs text-brand-ivory placeholder-brand-sage-light/35 outline-none focus:border-brand-gold focus:ring-0"
                />
                
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-brand-forest rounded-full border-l border-white/10 text-brand-gold hover:text-brand-gold-bright transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>

              <AnimatePresence>
                {subscribed && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-[9px] text-brand-emerald mt-1.5"
                  >
                    DIGEST PROTOCOL INITIATED // OK
                  </motion.span>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* Bottom copyright details and regulatory footnotes */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[8px] text-brand-sage-light/40">
          
          <div className="flex flex-wrap items-center gap-6">
            <span>ECOSPHERE CORE GROUP © 2026 // ALL COGNITIVE RIGHTS RESERVED</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold/40" />
              <span>FSC® CERTIFIED // CO2 RECOVERED</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>LATITUDE: 37.7749° N</span>
            <span>LONGITUDE: 122.4194° W</span>
            <span className="text-brand-gold">GRID_STABILITY: ACTIVE_1.618</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
