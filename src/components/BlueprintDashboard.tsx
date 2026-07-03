/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Grid, 
  Sliders, 
  Compass, 
  Layers, 
  Eye, 
  Printer, 
  Monitor, 
  Copy, 
  Check, 
  Download,
  Terminal,
  Focus,
  Maximize2
} from 'lucide-react';
import { blueprintTokens } from '../data/brandData';

const categories = [
  { id: 'grid', label: 'Grid System', icon: Grid, desc: 'Geometric layouts' },
  { id: 'spacing', label: 'Spacing Tokens', icon: Sliders, desc: 'Aesthetic padding' },
  { id: 'vectors', label: 'Vector Library', icon: Compass, desc: 'Constructed marks' },
  { id: 'photography', label: 'Photography Style', icon: Eye, desc: 'Editorial curation' },
  { id: 'print', label: 'Print Assets', icon: Printer, desc: 'Organic paper specs' },
  { id: 'digital', label: 'Digital Assets', icon: Monitor, desc: 'Web & screen systems' },
];

export default function BlueprintDashboard() {
  const [activeCategory, setActiveCategory] = useState('grid');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [gridShowGuides, setGridShowGuides] = useState(true);
  const [gridIntensity, setGridIntensity] = useState(50);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const copyToken = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  const handleDownloadVector = (name: string, content: string) => {
    const blob = new Blob([content], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Mock Vector data to download/copy
  const mockVectors = [
    {
      name: 'EcoSphere Core Mark',
      desc: 'The certified signature emblem featuring Fibonacci circular constraints.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <path d="M50,15 C69.33,15 85,30.67 85,50 C85,69.33 69.33,85 50,85 C30.67,85 15,69.33 15,50 C15,30.67 30.67,15 50,15 Z" fill="none" stroke="#C5A880" stroke-width="2"/>
  <path d="M50,30 A20,20 0 1,1 30,50 A10,10 0 1,1 40,50 A5,5 0 1,1 45,50" fill="none" stroke="#10B981" stroke-width="2.5"/>
</svg>`
    },
    {
      name: 'Circular Material Loop',
      desc: 'Vector icon representing zero-waste material regeneration pipelines.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <path d="M30,50 A20,20 0 1,1 70,50" fill="none" stroke="#C5A880" stroke-width="2" stroke-dasharray="4 2"/>
  <path d="M70,50 A20,20 0 1,1 30,50" fill="none" stroke="#10B981" stroke-width="2"/>
  <polygon points="30,46 25,54 35,54" fill="#C5A880"/>
  <polygon points="70,54 65,46 75,46" fill="#10B981"/>
</svg>`
    }
  ];

  return (
    <section id="blueprint-section" className="relative py-32 bg-brand-forest/10 border-y border-brand-gold/15 overflow-hidden">
      {/* Absolute blueprint matrix guides */}
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 grid-blueprint-fine opacity-20 pointer-events-none"></div>
      <div className="absolute left-1/4 top-0 bottom-0 glow-line-v opacity-15 pointer-events-none"></div>
      <div className="absolute right-1/4 top-0 bottom-0 glow-line-v opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-gold block mb-3">
            Interactive Blueprint Terminal // Section 04
          </span>
          <h2 className="font-display font-light text-3xl md:text-5xl tracking-tight text-brand-ivory mb-6">
            Explore the <span className="font-medium text-brand-gold">Administrative Vault</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-ivory-dark/65 max-w-lg mx-auto font-light leading-relaxed">
            A comprehensive, modular environment providing direct access to design system tokens, 
            spatial grids, scale measures, vector assets, and cross-platform variables.
          </p>
        </div>

        {/* Master-Detail Dashboard Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl box-glow" id="dashboard-window">
          
          {/* LEFT: Category Navigation Sidebar (4 Columns) */}
          <div className="lg:col-span-4 border-r border-white/10 p-6 md:p-8 flex flex-col gap-6" id="dashboard-sidebar">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Terminal className="w-4 h-4 text-brand-gold" />
              <span className="font-mono text-[10px] tracking-widest text-brand-ivory font-semibold uppercase">
                SPECIFICATION_DIRS
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-4 p-3 rounded-2xl text-left transition-smooth group ${
                      isActive 
                        ? 'bg-white/[0.04] border-l-2 border-brand-gold text-brand-ivory shadow-sm' 
                        : 'border-l border-transparent text-brand-ivory-dark/60 hover:text-brand-ivory hover:bg-white/[0.01]'
                    }`}
                  >
                    <div className={`p-2 rounded-xl border transition-colors duration-300 ${
                      isActive ? 'border-brand-gold/40 text-brand-gold bg-brand-dark-bg/50' : 'border-transparent text-brand-sage-light/50 group-hover:border-brand-gold/10 group-hover:text-brand-gold'
                    }`}>
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display font-medium text-xs tracking-wider uppercase">
                        {cat.label}
                      </span>
                      <span className="font-mono text-[8px] text-brand-sage-light/40 group-hover:text-brand-sage-light/60 transition-colors">
                        {cat.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick specifications label block */}
            <div className="mt-auto pt-6 border-t border-brand-gold/10 hidden lg:flex flex-col gap-3">
              <button
                onClick={() => {
                  // Map dashboard categories to corresponding manual chapter IDs
                  const chapterMapping: { [key: string]: string } = {
                    'grid': 'blueprint',
                    'spacing': 'components',
                    'vectors': 'vectors',
                    'photography': 'photography',
                    'print': 'packaging',
                    'digital': 'components'
                  };
                  const chapterId = chapterMapping[activeCategory] || 'blueprint';
                  window.dispatchEvent(new CustomEvent('open-brand-portal', { detail: { chapter: chapterId } }));
                }}
                className="w-full py-2.5 bg-brand-gold/10 hover:bg-brand-gold hover:text-brand-forest border border-brand-gold/30 hover:border-brand-gold text-brand-gold text-[9px] tracking-widest uppercase font-mono transition-all duration-300 rounded-xl font-bold flex items-center justify-center gap-1.5"
              >
                <Maximize2 className="w-3 h-3" /> LAUNCH WORKSPACE SPEC
              </button>

              <div className="flex flex-col gap-1.5 font-mono text-[8px] text-brand-sage-light/40">
                <span className="flex justify-between"><span>VAULT_INTEGRITY</span><span className="text-brand-emerald">100% ONLINE</span></span>
                <span className="flex justify-between"><span>BLUEPRINT_REF_ID</span><span>ESC-X9-2026</span></span>
                <span className="flex justify-between"><span>RESONANCE_INDEX</span><span>0.6180339</span></span>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Board Sandbox (8 Columns) */}
          <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden" id="dashboard-sandbox">
            {/* Fine grid overlay */}
            <div className="absolute inset-0 grid-blueprint-fine opacity-20 pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full h-full flex flex-col justify-between"
              >
                
                {/* 1. GRID SYSTEM SANDBOX */}
                {activeCategory === 'grid' && (
                  <div className="flex flex-col h-full justify-between gap-6" id="sandbox-grid">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg text-brand-gold">Golden Margin Grid</h3>
                        <span className="font-mono text-[9px] text-brand-sage-light/50">[SYS_SIMULATOR]</span>
                      </div>
                      <p className="font-sans text-xs text-brand-ivory-dark/70 font-light leading-relaxed mb-6">
                        An interactive simulator demonstrating our 8px geometry alignment grid and Golden Ratio bounding limits. 
                        Adjust guides or inspect spacing vectors.
                      </p>
                    </div>

                    {/* Interactive Canvas Rendering */}
                    <div className="relative w-full aspect-video bg-brand-dark-bg/80 rounded-2xl border border-white/10 p-1 flex items-center justify-center overflow-hidden">
                      {/* Grid overlays based on controls */}
                      {gridShowGuides && (
                        <>
                          <div className="absolute inset-0 grid-blueprint opacity-30"></div>
                          {/* Circle overlays */}
                          <div className="absolute w-48 h-48 rounded-full border border-brand-gold/20 animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />
                          <div className="absolute w-28 h-28 rounded-full border border-brand-emerald/15 pointer-events-none" />
                          <div className="absolute w-16 h-16 rounded-full border border-brand-gold/20 pointer-events-none" />
                          
                          {/* Coordinate axes */}
                          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-brand-gold/20"></div>
                          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-brand-gold/20"></div>
                          
                          {/* Moving focus cursor indicator */}
                          <motion.div 
                            animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }}
                            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                            className="absolute flex items-center gap-1.5 pointer-events-none"
                          >
                            <Focus className="w-4 h-4 text-brand-gold" />
                            <span className="font-mono text-[7px] text-brand-gold bg-brand-charcoal px-1.5 py-0.5 border border-brand-gold/15">
                              LOCK: φ_ALIGNED
                            </span>
                          </motion.div>
                        </>
                      )}

                      {/* Custom brand emblem vector model inside simulated grid */}
                      <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-brand-gold fill-none relative z-10" strokeWidth="1.5">
                        <circle cx="50" cy="50" r="40" strokeDasharray="3 3" className="opacity-40" />
                        <circle cx="50" cy="50" r="24" stroke="rgba(197, 168, 128, 0.4)" />
                        <path d="M 50,50 A 16,16 0 1,1 34,50 A 8,8 0 1,1 42,50" stroke="#10B981" strokeWidth="2" />
                        <line x1="50" y1="5" x2="50" y2="95" className="opacity-30" strokeWidth="0.5" />
                        <line x1="5" y1="50" x2="95" y2="50" className="opacity-30" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="1.5" fill="#C5A880" />
                      </svg>

                      {/* Info coordinates overlay */}
                      <div className="absolute bottom-3 left-4 font-mono text-[8px] text-brand-sage-light/60 flex gap-4">
                        <span>DIMENSION: 1920x1080</span>
                        <span>GRID_LOCK: 8px</span>
                        <span>PHI: 1.618</span>
                      </div>
                    </div>

                    {/* Simulation Controllers */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-brand-gold/10 pt-4 mt-2">
                      <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 cursor-pointer font-mono text-[9px] text-brand-ivory select-none">
                          <input 
                            type="checkbox" 
                            checked={gridShowGuides} 
                            onChange={(e) => setGridShowGuides(e.target.checked)}
                            className="rounded-none border-brand-gold/30 bg-brand-charcoal text-brand-gold focus:ring-0 w-3 h-3"
                          />
                          <span>SHOW GUIDES</span>
                        </label>
                      </div>

                      <span className="font-mono text-[8px] text-brand-sage-light/40">
                        SIM_STATE: EXEC_OK
                      </span>
                    </div>
                  </div>
                )}


                {/* 2. SPACING TOKENS SANDBOX */}
                {activeCategory === 'spacing' && (
                  <div className="flex flex-col h-full justify-between gap-6" id="sandbox-spacing">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg text-brand-gold">Spatial Rhythm Scale</h3>
                        <span className="font-mono text-[9px] text-brand-sage-light/50">[TOKENS_JSON]</span>
                      </div>
                      <p className="font-sans text-xs text-brand-ivory-dark/70 font-light leading-relaxed">
                        We define vertical rhythm and inset padding with an immutable 5-tier spacing matrix. 
                        Click on any variable name below to copy its system variable.
                      </p>
                    </div>

                    {/* Interactive token spacing list rendering */}
                    <div className="flex flex-col gap-3 max-h-[250px] overflow-y-auto no-scrollbar rounded-2xl border border-white/10 p-4 bg-brand-dark-bg/80">
                      {blueprintTokens.filter(t => t.category === 'Spacing').map((token) => (
                        <div 
                          key={token.name}
                          onClick={() => copyToken(token.name)}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white/[0.02] border border-white/10 hover:border-brand-gold/30 rounded-xl cursor-pointer transition-smooth group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[10px] text-brand-gold group-hover:text-brand-gold-bright">
                              {token.name}
                            </span>
                            <span className="font-mono text-[9px] text-brand-sage-light/60">
                              {token.value}
                            </span>
                          </div>

                          {/* Render visual bar representing actual padding! */}
                          <div className="flex items-center gap-4">
                            <div className="h-2 bg-brand-gold/20 border-l border-brand-gold rounded-full relative overflow-hidden" 
                                 style={{ 
                                   width: token.name.includes('xs') ? '16px' :
                                          token.name.includes('sm') ? '48px' :
                                          token.name.includes('md') ? '96px' :
                                          token.name.includes('lg') ? '140px' : '190px' 
                                 }}>
                            </div>

                            <span className="font-mono text-[9px] text-brand-sage-light/40 group-hover:text-brand-gold transition-colors">
                              {copiedToken === token.name ? <span className="text-brand-emerald">COPIED</span> : 'COPY'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-brand-gold/10 pt-4 font-mono text-[8px] text-brand-sage-light/40 flex justify-between">
                      <span>TOKEN_STANDARD: W3C_SPEC</span>
                      <span>GRID_COEFFICIENT: 8</span>
                    </div>
                  </div>
                )}


                {/* 3. VECTOR LIBRARY SANDBOX */}
                {activeCategory === 'vectors' && (
                  <div className="flex flex-col h-full justify-between gap-6" id="sandbox-vectors">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg text-brand-gold">Vector Assets</h3>
                        <span className="font-mono text-[9px] text-brand-sage-light/50">[SVG_DRAFT]</span>
                      </div>
                      <p className="font-sans text-xs text-brand-ivory-dark/70 font-light leading-relaxed">
                        Secure architectural SVG vectors compiled with strict mathematical precision. 
                        Download or copy raw XML for designer usage.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {mockVectors.map((v, index) => (
                        <div key={index} className="p-4 bg-brand-dark-bg/80 border border-white/10 rounded-2xl flex flex-col gap-4">
                          <div className="flex items-center justify-between border-b border-brand-gold/10 pb-2">
                            <span className="font-display text-xs text-brand-ivory font-medium">{v.name}</span>
                            <span className="font-mono text-[8px] text-brand-sage-light/40">V_0{index+1}</span>
                          </div>

                          <div className="flex items-center justify-center h-24 bg-white/[0.02] border border-white/5 rounded-xl relative group">
                            <div dangerouslySetInnerHTML={{ __html: v.svg }} />
                          </div>

                          <div className="flex justify-between gap-2">
                            <button
                              onClick={() => copyToken(v.svg)}
                              className="flex-1 py-1.5 bg-white/[0.04] hover:bg-brand-gold/10 border border-white/10 hover:border-brand-gold text-brand-gold hover:text-brand-gold-bright font-mono text-[9px] tracking-widest uppercase transition-colors rounded-xl"
                            >
                              COPY RAW
                            </button>
                            <button
                              onClick={() => handleDownloadVector(v.name.toLowerCase().replace(/ /g, '_'), v.svg)}
                              className="flex-1 py-1.5 bg-brand-forest hover:bg-brand-emerald border border-brand-emerald/30 text-brand-ivory font-mono text-[9px] tracking-widest uppercase transition-colors flex items-center justify-center gap-1 rounded-xl"
                            >
                              <Download className="w-3.5 h-3.5" /> DOWNLOAD
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-brand-gold/10 pt-4 font-mono text-[8px] text-brand-sage-light/40 flex justify-between">
                      <span>COMPRESSION: NONE_RAW</span>
                      <span>FORMAT: W3C_SVG_1.1</span>
                    </div>
                  </div>
                )}


                {/* 4. PHOTOGRAPHY STYLE SANDBOX */}
                {activeCategory === 'photography' && (
                  <div className="flex flex-col h-full justify-between gap-6" id="sandbox-photography">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg text-brand-gold">Photography Specimen</h3>
                        <span className="font-mono text-[9px] text-brand-sage-light/50">[EXPOSURE_SYSTEM]</span>
                      </div>
                      <p className="font-sans text-xs text-brand-ivory-dark/70 font-light leading-relaxed">
                        Our brand photography focuses on micro-textures, organic material depth, raw stone, and 
                        natural light. We mandate high contrast and avoid artificial saturation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative aspect-video sm:aspect-square overflow-hidden rounded-2xl border border-white/10">
                        <img 
                          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600" 
                          alt="EcoSphere Photography Spec"
                          className="w-full h-full object-cover filter contrast-125 saturate-50 hover:scale-105 transition-transform duration-[4s]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 left-2 font-mono text-[7px] text-brand-gold bg-brand-charcoal px-2 py-0.5 border border-brand-gold/25">
                          SPEC_01 // VEINED_MARBLE
                        </div>
                      </div>

                      <div className="p-4 bg-brand-dark-bg/80 border border-white/10 rounded-2xl flex flex-col justify-between font-mono text-[10px] text-brand-sage-light/80 gap-3">
                        <div className="flex flex-col gap-1 border-b border-brand-gold/10 pb-2">
                          <span className="text-brand-gold uppercase text-[8px]">Exposure Mode</span>
                          <span>Chiaroscuro (High contrast shadows)</span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-brand-gold/10 pb-2">
                          <span className="text-brand-gold uppercase text-[8px]">Color Temperature</span>
                          <span>Warm natural light, kelvin range: 3400K - 4500K</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-brand-gold uppercase text-[8px]">Focal Depth</span>
                          <span>Macro-focus with organic, soft circular bokeh</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-brand-gold/10 pt-4 font-mono text-[8px] text-brand-sage-light/40 flex justify-between">
                      <span>CROP_BOUND: 4:3_EDITORIAL</span>
                      <span>PIGMENT_ACCENT: DESATURATED</span>
                    </div>
                  </div>
                )}


                {/* 5. PRINT ASSETS SANDBOX */}
                {activeCategory === 'print' && (
                  <div className="flex flex-col h-full justify-between gap-6" id="sandbox-print">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg text-brand-gold">Print Materials</h3>
                        <span className="font-mono text-[9px] text-brand-sage-light/50">[FABRICATION_INDEX]</span>
                      </div>
                      <p className="font-sans text-xs text-brand-ivory-dark/70 font-light leading-relaxed">
                        Authentic tactility guides for physical publication templates, stationery stock, 
                        and brand collateral materials. We mandate 100% compostable fiberboards.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 p-4 bg-brand-dark-bg/80 border border-white/10 rounded-2xl font-sans text-xs">
                      <div className="flex justify-between items-center border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-ivory font-light">Identity Letterhead Stock</span>
                        <span className="font-mono text-[10px] text-brand-gold">320gsm Linen Uncoated</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-ivory font-light">Debossing Tolerance Limit</span>
                        <span className="font-mono text-[10px] text-brand-gold">Max depth: 1.2mm blind</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-ivory font-light">Permitted Bind Adhesive</span>
                        <span className="font-mono text-[10px] text-brand-emerald">Organic Algae Compound</span>
                      </div>
                      <div className="flex justify-between items-center pb-1">
                        <span className="text-brand-ivory font-light">Shipping Kraft Fiberboard</span>
                        <span className="font-mono text-[10px] text-brand-gold">450gsm Post-Consumer Waste</span>
                      </div>
                    </div>

                    <div className="border-t border-brand-gold/10 pt-4 font-mono text-[8px] text-brand-sage-light/40 flex justify-between">
                      <span>STANDARD: ISO_PRINT_9001</span>
                      <span>REGULATION: FSC_CERT_100</span>
                    </div>
                  </div>
                )}


                {/* 6. DIGITAL ASSETS SANDBOX */}
                {activeCategory === 'digital' && (
                  <div className="flex flex-col h-full justify-between gap-6" id="sandbox-digital">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-lg text-brand-gold">Digital Specifications</h3>
                        <span className="font-mono text-[9px] text-brand-sage-light/50">[DEV_ENVIRONMENT]</span>
                      </div>
                      <p className="font-sans text-xs text-brand-ivory-dark/70 font-light leading-relaxed">
                        Pre-compiled screen tokens ready for integration inside Vite, React, and Tailwind CSS.
                      </p>
                    </div>

                    <div className="relative">
                      <pre className="p-4 bg-brand-dark-bg/80 border border-white/10 rounded-2xl font-mono text-[9px] text-brand-sage-light max-h-[180px] overflow-y-auto no-scrollbar">
                        <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'forest-green': '#0A1A10',
        'prestige-gold': '#C5A059',
        'warm-ivory': '#F5F2ED',
        'muted-sage': '#8DA399',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    }
  }
}`}</code>
                      </pre>
                      <button
                        onClick={() => copyToken('Vite Config Source Code')}
                        className="absolute top-2 right-2 p-1.5 bg-brand-forest/60 hover:bg-brand-gold border border-brand-gold/25 text-brand-ivory hover:text-brand-forest transition-colors duration-300 rounded-xl"
                        title="Copy Config Block"
                      >
                        {copiedToken === 'Vite Config Source Code' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="border-t border-brand-gold/10 pt-4 font-mono text-[8px] text-brand-sage-light/40 flex justify-between">
                      <span>ENGINE: VITE_REACT_TS</span>
                      <span>COMPILER: ES_NEXT</span>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
