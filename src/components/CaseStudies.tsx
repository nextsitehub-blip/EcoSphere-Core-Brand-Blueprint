/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, FolderOpen, Compass, Award } from 'lucide-react';
import { caseStudies } from '../data/brandData';

export default function CaseStudies() {
  return (
    <section id="case-studies-section" className="relative py-32 bg-brand-forest/10 border-t border-brand-gold/15 overflow-hidden">
      {/* Blueprint Grid backplane */}
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div className="max-w-xl">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold block mb-3">
              Section 06 // Active Deployments
            </span>
            <h2 className="font-display font-light text-4xl md:text-5xl leading-tight text-brand-ivory">
              Case Studies in <br />
              <span className="font-medium text-brand-gold text-glow">Physical Rigor</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-brand-ivory-dark/60 max-w-sm font-light leading-relaxed">
            Witness how our brand blueprints are physically implemented. We combine absolute engineering validation with luxury aesthetic appeal across aviation, energy, and retail.
          </p>
        </div>

        {/* 3-Column Luxury Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white/[0.02] border border-white/10 hover:border-brand-gold/30 rounded-3xl overflow-hidden flex flex-col justify-between h-[650px] relative transition-smooth box-glow backdrop-blur-md"
              id={`case-study-card-${study.id}`}
            >
              {/* Image Frame with Immersive Hover Transitions */}
              <div className="h-56 relative overflow-hidden border-b border-white/10">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 filter saturate-75 contrast-110 brightness-90 transition-transform duration-[5s] ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual categorizer pill overlay */}
                <div className="absolute top-4 left-4 font-mono text-[8px] uppercase tracking-widest text-brand-gold bg-brand-dark-bg/90 px-3 py-1 border border-brand-gold/25 rounded-full">
                  {study.tag}
                </div>

                <div className="absolute top-4 right-4 font-mono text-[8px] text-brand-sage-light/50">
                  {study.year} SPEC
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-brand-sage-light/60 block mb-1">
                    {study.client} // {study.industry}
                  </span>
                  
                  <h3 className="font-display font-medium text-lg text-brand-ivory group-hover:text-brand-gold transition-colors duration-300 mb-4 leading-snug">
                    {study.title}
                  </h3>

                  <p className="font-sans text-xs text-brand-ivory-dark/70 font-light leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Highlight bullet points */}
                  <div className="flex flex-col gap-2 mb-6">
                    {study.highlights.map((hl, hlIdx) => (
                      <div key={hlIdx} className="flex items-center gap-2 font-mono text-[9px] text-brand-sage-light/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantitative statistics panel */}
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <div className="grid grid-cols-3 gap-2">
                    {study.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col text-left">
                        <span className="font-mono text-[8px] text-brand-sage-light/40 uppercase tracking-widest leading-none mb-1">
                          {stat.label}
                        </span>
                        <span className="font-display font-medium text-sm md:text-base text-brand-gold">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fine detail line drawings on borders */}
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/0 to-transparent group-hover:via-brand-gold/40 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
