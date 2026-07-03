/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Layers, Sparkles, Compass, Shield } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effects
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const yWidget = useTransform(scrollY, [0, 500], [0, -40]);
  const opacityFade = useTransform(scrollY, [0, 350], [1, 0]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-dark-bg noise-bg"
    >
      {/* 1. Animated Blueprint Grids */}
      <div className="absolute inset-0 grid-blueprint opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 grid-blueprint-fine opacity-30 pointer-events-none"></div>
      
      {/* 2. Luxury Lighting & Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-forest/30 blur-[130px] mix-blend-screen animate-pulse pointer-events-none duration-[8s]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-gold/10 blur-[110px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-10 right-10 w-[200px] h-[200px] rounded-full bg-brand-emerald/10 blur-[90px] mix-blend-screen pointer-events-none" />

      {/* Decorative vertical lines representing alignment rulers */}
      <div className="absolute left-12 top-0 bottom-0 glow-line-v opacity-30 hidden md:block"></div>
      <div className="absolute right-12 top-0 bottom-0 glow-line-v opacity-30 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column - Core Typography and CTAs (occupies 7 columns) */}
        <motion.div
          style={{ y: yText, opacity: opacityFade }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
          id="hero-content"
        >
          {/* Metadata Tag */}
          <div className="flex items-center gap-2 mb-6 px-3 py-1 rounded-none bg-brand-forest/40 border border-brand-gold/20" id="hero-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping" />
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold">
              Active Specification Manual // v2.6.4
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] leading-[1.02] tracking-tight text-brand-ivory mb-6" id="hero-title">
            Designing <br />
            <span className="italic font-normal text-brand-gold text-glow">Sustainable</span> <br />
            Brands That Endure.
          </h1>

          {/* Supporting Prose */}
          <p className="font-sans text-sm md:text-base text-brand-ivory-dark/75 leading-relaxed max-w-xl mb-10 font-light" id="hero-desc">
            The EcoSphere Core Brand Blueprint is an immersive luxury sustainability design system. 
            We architect pristine identity systems, organic vectors, and closed-loop material 
            specifications to craft brand lineages that transcend temporal and ecological limits.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto" id="hero-buttons">
            <button
              onClick={() => handleScrollTo('blueprint-section')}
              className="px-8 py-4 rounded-full bg-brand-ivory text-brand-forest text-xs tracking-widest uppercase font-mono font-semibold hover:bg-brand-gold hover:text-brand-forest hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-brand-gold/10 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                EXPLORE BLUEPRINT
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => handleScrollTo('showcase-section')}
              className="px-8 py-4 rounded-full border border-brand-gold/30 text-brand-ivory text-xs tracking-widest uppercase font-mono hover:border-brand-gold hover:bg-brand-forest/20 transition-all duration-300 relative group"
            >
              <span className="relative z-10">VIEW BRAND ASSETS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-brand-gold/15 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Micro layout details matching blueprint specs */}
          <div className="flex items-center gap-10 mt-16 pt-8 border-t border-brand-gold/10 w-full font-mono text-[10px] text-brand-sage-light/55">
            <div className="flex flex-col">
              <span className="text-brand-gold/60">GEOMETRY_SYSTEM</span>
              <span>1.618 Golden Scale</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-gold/60">FABRICATION_INDEX</span>
              <span>100% PCR Cellulose</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-gold/60">COORD_LOCK</span>
              <span>37° 46' N, 122° 24' W</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Premium Emblem Widget / Interactive Blueprint (occupies 5 columns) */}
        <motion.div
          style={{ y: yWidget }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative w-full h-[450px] lg:h-[550px]"
          id="hero-widget"
        >
          {/* Main concentric circle structures with animations */}
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            
            {/* Outermost rotating coordinate ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-brand-gold/15 border-dashed"
            >
              {/* Outer micro ticks */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1 h-3 bg-brand-gold/40"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1 h-3 bg-brand-gold/40"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-3 h-1 bg-brand-gold/40"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-3 h-1 bg-brand-gold/40"></div>
            </motion.div>

            {/* Middle technical ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
              className="absolute inset-6 rounded-full border border-brand-sage-light/20 flex items-center justify-center"
            >
              {/* Internal layout guide ticks */}
              <div className="w-[95%] h-[95%] rounded-full border border-brand-gold/10 border-dotted"></div>
            </motion.div>

            {/* Geometric diamond accent container */}
            <div className="absolute inset-12 border border-brand-gold/10 rotate-45 pointer-events-none"></div>
            <div className="absolute inset-16 border border-brand-gold/5 -rotate-45 pointer-events-none"></div>

            {/* Inner Glassmorphic Frame containing the premium generated asset */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute inset-12 rounded-full overflow-hidden border border-brand-gold/25 bg-brand-forest/40 backdrop-blur-md p-2 shadow-2xl box-glow group cursor-pointer"
            >
              {/* Core Image container */}
              <div className="w-full h-full rounded-full overflow-hidden relative">
                {/* Visual Image */}
                <img
                  src="/src/assets/images/ecosphere_hero_bg_1783051482229.jpg"
                  alt="EcoSphere Architectural Backdrop"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[4s] ease-out select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Radial golden and dark shadow overlays to darken edges */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-dark-bg/20 to-brand-dark-bg/85 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 via-transparent to-transparent opacity-80"></div>
                
                {/* Floating coordinate overlays in mono */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-[9px] tracking-widest text-brand-gold-bright/90 bg-brand-dark-bg/80 px-3 py-1 border border-brand-gold/25 pointer-events-none">
                  <span>SCALE: 1:1.618</span>
                  <span className="text-[7px] text-brand-sage-light/50">SYS_VERIFIED</span>
                </div>
              </div>
            </motion.div>

            {/* Floating abstract structural nodes representing coordinates */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 right-10 flex items-center gap-2 bg-brand-charcoal/90 border border-brand-gold/20 px-3 py-1.5 font-mono text-[9px] tracking-widest text-brand-ivory shadow-lg backdrop-blur-sm"
            >
              <Compass className="w-3.5 h-3.5 text-brand-gold animate-spin" style={{ animationDuration: '15s' }} />
              <span>N 34.02° // SEED</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-10 -left-6 flex items-center gap-2 bg-brand-charcoal/90 border border-brand-gold/20 px-3 py-1.5 font-mono text-[9px] tracking-widest text-brand-ivory shadow-lg backdrop-blur-sm"
            >
              <Shield className="w-3.5 h-3.5 text-brand-emerald" />
              <span>CARBON NET -120%</span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Decorative scroll prompt at the bottom of hero */}
      <motion.div
        style={{ opacity: opacityFade }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => handleScrollTo('blueprint-section')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        id="hero-scroll-prompt"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300">
          BEGIN SPECIFICATION DECRYPT
        </span>
        <ArrowDown className="w-4 h-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300" />
      </motion.div>
    </section>
  );
}
