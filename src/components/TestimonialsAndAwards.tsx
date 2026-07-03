/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { testimonials, certifications } from '../data/brandData';

export default function TestimonialsAndAwards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 bg-brand-dark-bg noise-bg overflow-hidden">
      {/* Decorative vertical lines representing alignment rulers */}
      <div className="absolute left-12 top-0 bottom-0 glow-line-v opacity-20 pointer-events-none"></div>
      <div className="absolute right-12 top-0 bottom-0 glow-line-v opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Testimonials Sub-Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-gold block mb-3">
            Section 07 // Client Verifications
          </span>
          <h2 className="font-display font-light text-3xl md:text-4xl text-brand-ivory mb-4">
            Endorsed by <span className="font-medium text-brand-gold">Industry Pioneers</span>
          </h2>
          <p className="font-sans text-xs text-brand-ivory-dark/60 font-light max-w-md mx-auto">
            Our blueprints are actively utilized by global market leaders to transition their brand 
            heritage into circular operations without compromising high-end aesthetic value.
          </p>
        </div>

        {/* Minimalist Glass Card Slider */}
        <div className="max-w-4xl mx-auto relative mb-32" id="testimonials-block">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.02] border border-white/10 backdrop-blur-md p-8 md:p-14 relative rounded-3xl flex flex-col md:flex-row gap-8 items-center md:items-start box-glow"
            >
              {/* Quotation icon decoration */}
              <Quote className="w-10 h-10 text-brand-gold/30 shrink-0 md:self-start" />

              <div className="flex-1 text-center md:text-left">
                <blockquote className="font-display font-light text-base md:text-lg text-brand-ivory leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author Credentials */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-brand-gold/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-gold/30">
                      <img 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].author}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-display font-medium text-xs text-brand-ivory uppercase tracking-wider">
                        {testimonials[activeIndex].author}
                      </span>
                      <span className="font-mono text-[9px] text-brand-sage-light/65">
                        {testimonials[activeIndex].role} @ {testimonials[activeIndex].company}
                      </span>
                    </div>
                  </div>

                  {/* Micro coordinate marker */}
                  <span className="font-mono text-[8px] text-brand-sage-light/30 hidden sm:inline">
                    VERIFIED_CONTRACT // ACC_N°_00{activeIndex + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation sliders buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2.5 bg-brand-charcoal hover:bg-brand-gold border border-brand-gold/20 hover:border-brand-gold text-brand-gold hover:text-brand-forest transition-colors rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-[10px] text-brand-sage-light/60">
              0{activeIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2.5 bg-brand-charcoal hover:bg-brand-gold border border-brand-gold/20 hover:border-brand-gold text-brand-gold hover:text-brand-forest transition-colors rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Awards scrolling strip title */}
        <div className="border-t border-brand-gold/10 pt-16 mb-8 text-center flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-brand-gold/60">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
            <span>Accredited Certifications & Alliances</span>
          </div>
        </div>

        {/* DOUBLE MARQUEE KINETIC SCROLL */}
        <div className="w-full overflow-hidden py-4 border-y border-brand-gold/5 relative mb-12 bg-brand-charcoal/30 select-none">
          {/* Subtle masking gradients on edges to fade scrolling content */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-dark-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-dark-bg to-transparent z-10 pointer-events-none"></div>

          {/* Row 1: Scrolling Left */}
          <div className="flex overflow-hidden relative">
            <div className="animate-marquee flex items-center gap-8 py-2">
              {certifications.concat(certifications).map((cert, cIdx) => (
                <div 
                  key={cIdx} 
                  className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-brand-ivory-dark/65 px-6 py-2 bg-white/[0.02] border border-white/10 rounded-full shrink-0 whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex overflow-hidden relative border-t border-brand-gold/5 mt-4">
            <div className="animate-marquee-reverse flex items-center gap-8 py-2">
              {certifications.concat(certifications).map((cert, cIdx) => (
                <div 
                  key={`rev-${cIdx}`} 
                  className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-brand-ivory-dark/65 px-6 py-2 bg-white/[0.02] border border-white/10 rounded-full shrink-0 whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
