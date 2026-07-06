/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Grid, 
  Layers, 
  Sliders, 
  Shield, 
  Trees, 
  Feather, 
  ArrowUpRight, 
  X, 
  Copy, 
  Check, 
  Lock, 
  Sparkles, 
  Info 
} from 'lucide-react';
import { showcaseCards } from '../data/brandData';
import { ShowcaseCard } from '../types';

const iconMap: Record<string, React.ComponentType<any>> = {
  Compass,
  Grid,
  Layers,
  Sliders,
  Shield,
  Trees,
  Feather,
};

export default function Showcase() {
  const [selectedCard, setSelectedCard] = useState<ShowcaseCard | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="showcase-section" className="relative py-32 bg-brand-dark-bg noise-bg">
      {/* Structural horizontal spacer */}
      <div className="absolute top-0 left-12 right-12 glow-line-h opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold">
              Active Chapter // 03
            </span>
            <span className="h-[1px] w-12 bg-brand-gold/30"></span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-sage-light">
              Core Brand Assets
            </span>
          </div>
          
          <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] text-brand-ivory mb-6">
            Pristine Identity Systems <br />
            <span className="font-medium text-brand-gold text-glow">Specimen Portfolio</span>
          </h2>
          
          <p className="font-sans text-sm md:text-base text-brand-ivory-dark/70 font-light leading-relaxed max-w-2xl">
            Select an asset system below to expand its architectural specifications, 
            construction geometry, material constraints, and interactive digital code parameters.
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseCards.map((card, idx) => {
            const CardIcon = iconMap[card.iconName] || Compass;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedCard(card)}
                className="group relative h-[450px] bg-white/[0.02] border border-white/10 hover:border-brand-gold/40 rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-8 transition-smooth box-glow"
                id={`showcase-card-${card.id}`}
              >
                {/* Micro engineering corner tags */}
                <div className="absolute top-4 right-4 font-mono text-[8px] text-brand-sage-light/35 group-hover:text-brand-gold/60 transition-colors duration-500">
                  SYS_ALIGN_{card.id.toUpperCase()}
                </div>

                {/* Card Background image (faded by default, transitions nicely on hover) */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[6s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
                </div>

                {/* Top: Card Header */}
                <div className="relative z-10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold/60 block mb-2">
                    {card.subtitle}
                  </span>
                  
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-brand-forest/40 border border-white/10 mb-6 group-hover:border-brand-gold transition-colors duration-500">
                    <CardIcon className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h3 className="font-display font-medium text-xl text-brand-ivory group-hover:text-brand-gold transition-colors duration-500 mb-3">
                    {card.title}
                  </h3>

                  <p className="font-sans text-xs text-brand-ivory-dark/65 font-light leading-relaxed max-w-xs">
                    {card.shortDesc}
                  </p>
                </div>

                {/* Bottom: Action trigger line */}
                <div className="relative z-10 flex items-center justify-between border-t border-brand-gold/10 pt-4 mt-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand-sage-light/50 group-hover:text-brand-gold-bright transition-colors duration-500">
                    READ_SPECIFICATION //
                  </span>
                  <div className="flex items-center gap-1.5 text-brand-gold text-xs">
                    <span className="font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">EXPLORE</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Blueprint guide rules drawing inside card corners */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-brand-gold/5 pointer-events-none group-hover:bg-brand-gold/10 transition-colors duration-500"></div>
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-brand-gold/5 pointer-events-none group-hover:bg-brand-gold/10 transition-colors duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Luxury Detail Overlay Modal Drawer */}
        <AnimatePresence>
          {selectedCard && (
            <div className="fixed inset-0 z-50 flex justify-end">
              
              {/* Backdrop dimmer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCard(null)}
                className="absolute inset-0 bg-brand-dark-bg/80 backdrop-blur-sm"
              />

              {/* Specification drawer container */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 170 }}
                className="relative w-full max-w-2xl bg-brand-dark-bg border-l border-brand-gold/20 h-full overflow-y-auto no-scrollbar p-6 sm:p-8 md:p-12 z-10 flex flex-col justify-between noise-bg"
                id="showcase-detail-drawer"
              >
                {/* Background blueprint elements */}
                <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>

                <div>
                  {/* Drawer Header details */}
                  <div className="flex items-center justify-between border-b border-brand-gold/10 pb-6 mb-8 relative z-10">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold">
                        {selectedCard.subtitle}
                      </span>
                      <span className="font-mono text-[9px] text-brand-sage-light/50">
                        DECRYPTED SPECIFICATION // SYSTEM SECURE
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedCard(null)}
                      className="p-2 hover:bg-brand-forest/40 border border-brand-gold/10 hover:border-brand-gold rounded-none text-brand-ivory hover:text-brand-gold transition-colors duration-300"
                      aria-label="Close specification sheet"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-10 relative z-10">
                    <h3 className="font-display font-light text-3xl md:text-4xl text-brand-ivory mb-4">
                      {selectedCard.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-ivory-dark/70 leading-relaxed font-light">
                      {selectedCard.longDesc}
                    </p>
                  </div>

                  {/* Decorative Banner */}
                  <div className="w-full h-48 mb-10 overflow-hidden rounded-2xl border border-white/10 relative">
                    <img
                      src={selectedCard.image}
                      alt={selectedCard.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-bg/90 via-transparent to-brand-dark-bg/20"></div>
                  </div>

                  {/* Core specifications loop */}
                  <div className="flex flex-col gap-8 relative z-10">
                    {selectedCard.assets.map((asset, aIdx) => (
                      <div key={aIdx} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-brand-gold/30 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="font-display font-medium text-sm tracking-wide text-brand-gold">
                            {asset.title}
                          </h4>
                          <span className="font-mono text-[9px] text-brand-sage-light/40">SPEC_NODE_0{aIdx+1}</span>
                        </div>
                        
                        <p className="font-sans text-xs text-brand-ivory-dark/75 mb-6 font-light leading-relaxed">
                          {asset.description}
                        </p>

                        {/* Interactive dynamic elements based on specifications (e.g. SVG alignment or Code Snippets) */}
                        {asset.svgPreview && (
                          <div className="mb-6 p-4 bg-brand-dark-bg border border-brand-gold/15 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
                            <div dangerouslySetInnerHTML={{ __html: asset.svgPreview }} className="shrink-0" />
                            <div className="sm:ml-6 flex flex-col font-mono text-[9px] text-brand-sage-light/60 gap-1.5 border-t sm:border-t-0 sm:border-l border-brand-gold/10 pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto text-center sm:text-left">
                              <span className="text-brand-gold">FIBONACCI RADIUS LOCK</span>
                              <span>CENTER_AXIS: X:50, Y:50</span>
                              <span>MATERIAL_PIGMENT: ORGANIC GOLD</span>
                            </div>
                          </div>
                        )}

                        {asset.codeSnippet && (
                          <div className="mb-6 relative">
                            <pre className="p-4 bg-brand-dark-bg border border-brand-gold/15 font-mono text-[10px] text-brand-sage-light overflow-x-auto no-scrollbar">
                              <code>{asset.codeSnippet}</code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard(asset.codeSnippet || '', aIdx)}
                              className="absolute top-2 right-2 p-1.5 bg-brand-forest/60 hover:bg-brand-gold border border-brand-gold/25 hover:border-brand-gold text-brand-ivory hover:text-brand-forest transition-colors duration-300"
                              title="Copy Code Snippet"
                            >
                              {copiedIndex === aIdx ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        )}

                        {/* Exact Table Specifications */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-brand-gold/10 pt-4">
                          {asset.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex flex-col gap-1">
                              <span className="font-mono text-[8px] text-brand-sage-light/50 uppercase tracking-widest">{spec.label}</span>
                              
                              {/* If color swatch hex can copy */}
                              {spec.value.includes('#') ? (
                                <button 
                                  onClick={() => copyToClipboard(spec.value, aIdx + 100 + sIdx)}
                                  className="font-mono text-xs text-brand-ivory text-left hover:text-brand-gold transition-colors flex items-center gap-1.5 group/swatch"
                                >
                                  <span className="w-2.5 h-2.5 inline-block border border-brand-gold/30" style={{ backgroundColor: spec.value.split(' ')[0] }}></span>
                                  <span>{spec.value}</span>
                                  {copiedIndex === aIdx + 100 + sIdx ? (
                                    <Check className="w-3 h-3 text-brand-emerald" />
                                  ) : (
                                    <Copy className="w-3 h-3 text-brand-gold opacity-0 group-hover/swatch:opacity-100 transition-opacity" />
                                  )}
                                </button>
                              ) : (
                                <span className="font-sans text-xs text-brand-ivory font-light">{spec.value}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer specs inside drawer */}
                <div className="mt-12 border-t border-brand-gold/10 pt-6 flex items-center justify-between font-mono text-[8px] text-brand-sage-light/45 relative z-10">
                  <span>SECURE MANUAL LOCK // AUTH REQUIRED</span>
                  <span>ECOSPHERE CORE GROUP © 2026</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
