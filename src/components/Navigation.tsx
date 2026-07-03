/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { navItems } from '../data/brandData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link tracker
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-brand-dark-bg/85 backdrop-blur-md border-brand-gold/15 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Emblem */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group"
            id="nav-logo"
          >
            <div className="relative w-9 h-9 flex items-center justify-center rounded-full bg-brand-forest/60 border border-brand-gold/25 group-hover:border-brand-gold-bright/60 transition-colors duration-500">
              {/* Custom SVG logo symbol */}
              <svg viewBox="0 0 100 100" className="w-5 h-5 fill-none stroke-brand-gold group-hover:stroke-brand-gold-bright transition-colors duration-500" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                {/* Fibonacci spiral loop */}
                <path d="M 50,50 A 20,20 0 1,1 30,50 A 10,10 0 1,1 40,50 A 5,5 0 1,1 45,50" />
                {/* Clean vertical axis */}
                <line x1="50" y1="15" x2="50" y2="85" strokeWidth="3" strokeDasharray="6 6" className="opacity-40" />
              </svg>
              <div className="absolute -inset-0.5 rounded-full bg-brand-gold/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-[0.18em] uppercase text-brand-ivory group-hover:text-brand-gold transition-colors duration-500">
                ECOSPHERE
              </span>
              <span className="font-mono text-[9px] tracking-widest uppercase text-brand-sage-light/60">
                CORE BLUEPRINT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative font-sans text-xs uppercase tracking-widest py-2 transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-brand-gold font-medium'
                    : 'text-brand-ivory-dark/65 hover:text-brand-ivory'
                }`}
                id={`link-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact-section"
              onClick={(e) => handleLinkClick(e, '#contact-section')}
              className="px-6 py-2 rounded-full border border-brand-gold/30 hover:border-brand-gold-bright/80 bg-brand-forest/20 text-brand-ivory text-[10px] tracking-widest uppercase font-mono transition-smooth flex items-center gap-2 group relative overflow-hidden"
              id="nav-cta"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                ESTABLISH BRAND <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-brand-gold/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-ivory hover:text-brand-gold transition-colors duration-300 z-50 focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-dark-bg/98 z-40 lg:hidden flex flex-col justify-center px-8 md:px-16"
            id="mobile-menu-overlay"
          >
            {/* Background alignment grid decoration */}
            <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>
            
            <div className="flex flex-col gap-6 md:gap-8 max-w-md w-full mx-auto relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold/50 border-b border-brand-gold/10 pb-4">
                Core Manual Directory
              </span>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="font-display text-2xl md:text-3xl font-light hover:text-brand-gold transition-colors duration-300 flex items-center justify-between group"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-brand-sage-light/50">0{index + 1}</span>
                    <span className={activeSection === item.id ? 'text-brand-gold font-normal' : 'text-brand-ivory'}>
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-brand-gold/0 group-hover:text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
              ))}

              <div className="pt-8 border-t border-brand-gold/10 flex flex-col gap-4">
                <a
                  href="#contact-section"
                  onClick={(e) => handleLinkClick(e, '#contact-section')}
                  className="w-full text-center py-3.5 bg-brand-forest/40 rounded-full border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-forest/60 text-brand-ivory text-xs tracking-widest uppercase font-mono transition-smooth"
                >
                  ENGAGE BLUEPRINT CONSULTANCY
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
