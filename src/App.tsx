/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BrandMetrics from './components/BrandMetrics';
import Showcase from './components/Showcase';
import BlueprintDashboard from './components/BlueprintDashboard';
import SustainabilityPhilosophy from './components/SustainabilityPhilosophy';
import CaseStudies from './components/CaseStudies';
import TestimonialsAndAwards from './components/TestimonialsAndAwards';
import BrandJourneyCTA from './components/BrandJourneyCTA';
import Footer from './components/Footer';
import BrandManualPortal from './components/BrandManualPortal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewMode, setViewMode] = useState<'presentation' | 'portal'>('presentation');
  const [selectedChapter, setSelectedChapter] = useState('blueprint');

  // Custom Event Listener to change view to portal from other components
  useEffect(() => {
    const handleOpenPortal = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && typeof customEvent.detail.chapter === 'string') {
        setSelectedChapter(customEvent.detail.chapter);
      } else {
        setSelectedChapter('blueprint');
      }
      setViewMode('portal');
      window.scrollTo(0, 0);
    };

    window.addEventListener('open-brand-portal', handleOpenPortal);
    return () => window.removeEventListener('open-brand-portal', handleOpenPortal);
  }, []);

  // 1. Loader simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Small pause for aesthetic reveal
          return 100;
        }
        // Random elegant increment steps
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // 2. Scroll Progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark-bg text-brand-ivory antialiased selection:bg-brand-gold selection:text-brand-forest overflow-x-hidden">
      
      {/* Premium Loader Sequence Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-brand-dark-bg flex flex-col items-center justify-center p-6 select-none"
            id="loader-screen"
          >
            {/* Elegant abstract rotating design guides */}
            <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>
            
            <div className="flex flex-col items-center gap-6 max-w-sm w-full text-center relative z-10">
              
              {/* Compass spinning model */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-brand-gold/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                  className="absolute inset-2 rounded-full border border-brand-emerald/20"
                />
                
                {/* Seed loop path */}
                <svg viewBox="0 0 100 100" className="w-6 h-6 stroke-brand-gold fill-none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 50,50 A 20,20 0 1,1 30,50 A 10,10 0 1,1 40,50 A 5,5 0 1,1 45,50" />
                </svg>
              </div>

              {/* Loader Text labels */}
              <div className="flex flex-col gap-1.5 mt-4">
                <span className="font-display font-medium text-xs tracking-[0.2em] text-brand-ivory uppercase">
                  ECOSPHERE CORE SYSTEM
                </span>
                <span className="font-mono text-[9px] tracking-widest text-brand-sage-light/50 uppercase">
                  DECRYPTING SPECIFICATION MANUAL // OK
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-[1px] bg-brand-gold/10 mt-6 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-brand-gold"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Percent numerals */}
              <span className="font-mono text-[10px] tracking-widest text-brand-gold font-light mt-1">
                SECURE_LOAD_SEQ // {progress.toString().padStart(3, '0')}%
              </span>

            </div>

            {/* Bottom credential footnote inside loader */}
            <div className="absolute bottom-8 font-mono text-[8px] text-brand-sage-light/25 tracking-widest uppercase">
              ESTABLISHED IN COOPERATION WITH THE ELLEN MACARTHUR TRUST © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Structure (Only active or fades in nicely once loader is done) */}
      <div className={loading ? 'h-screen overflow-hidden' : ''} id="brand-manual-container">
        
        {/* Scroll Progress line at the top of viewport */}
        <div className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold/10 z-[60]">
          <div 
            className="h-full bg-brand-gold shadow-[0_0_10px_rgba(197,168,128,0.5)] transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'portal' ? (
            <motion.div
              key="portal"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <BrandManualPortal 
                onClose={() => setViewMode('presentation')} 
                initialChapter={selectedChapter} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* 1. Header Navigation */}
              <Navigation />

              {/* 2. Hero Presentation */}
              <Hero />

              {/* 3. Stat Audit Metrics */}
              <BrandMetrics />

              {/* 4. Showcase Brand Assets */}
              <Showcase />

              {/* 5. Interactive Vault Sandbox */}
              <BlueprintDashboard />

              {/* 6. Editorial Philosophy & Timeline */}
              <SustainabilityPhilosophy />

              {/* 7. High-End Case Studies */}
              <CaseStudies />

              {/* 8. Endorsement Testimonials & Cert Marquee */}
              <TestimonialsAndAwards />

              {/* 9. Final Strategic Intake Form */}
              <BrandJourneyCTA />

              {/* 10. Minimal Luxury Footer */}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Floating Workspace Access Control Toggle */}
        <AnimatePresence>
          {viewMode === 'presentation' && !loading && (
            <motion.div
              initial={{ y: 80, x: '-50%', opacity: 0 }}
              animate={{ y: 0, x: '-50%', opacity: 1 }}
              exit={{ y: 80, x: '-50%', opacity: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-6 left-1/2 z-50 px-6 py-3.5 bg-brand-dark-bg/90 border border-brand-gold/30 backdrop-blur-md rounded-full flex items-center gap-6 shadow-2xl shadow-black/60 box-glow"
              id="floating-workstation-bar"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="font-mono text-[9px] tracking-widest text-brand-sage-light uppercase font-semibold">
                  BLUEPRINT PORTAL INITIATED
                </span>
              </div>
              <button
                onClick={() => {
                  setSelectedChapter('blueprint');
                  setViewMode('portal');
                  window.scrollTo(0, 0);
                }}
                className="px-5 py-2 bg-brand-gold text-brand-forest rounded-full font-mono text-[9px] tracking-widest uppercase font-bold hover:bg-brand-gold-bright hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-brand-gold/20"
              >
                EXPLORE WORKSTATION (19 CHAPTERS)
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
