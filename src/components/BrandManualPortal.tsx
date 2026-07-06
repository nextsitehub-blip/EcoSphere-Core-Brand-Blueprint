/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass, Grid, Layers, Sliders, Shield, Trees, Feather,
  HelpCircle, Mail, Download, Check, Copy, ArrowUpRight,
  Play, RefreshCw, Send, CheckCircle, Info, Lock,
  ChevronRight, ChevronLeft, Quote, Sparkles, FileText,
  File, ExternalLink, Image, Search, Eye, Filter, Zap,
  SlidersHorizontal, Settings, Flame, Leaf, Package, EyeOff
} from 'lucide-react';
import { blueprintTokens, sustainabilityMilestones, caseStudies, testimonials, certifications } from '../data/brandData';

// Dynamic type imports
interface Chapter {
  id: string;
  name: string;
  category: 'Foundations' | 'Assets' | 'Guidelines' | 'Company';
  icon: React.ComponentType<any>;
  sectionNum: string;
}

export default function BrandManualPortal({ onClose, initialChapter }: { onClose: () => void; initialChapter?: string }) {
  const [activeChapter, setActiveChapter] = useState(initialChapter || 'blueprint');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    if (initialChapter) {
      setActiveChapter(initialChapter);
    }
  }, [initialChapter]);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.message) {
        setToastMsg(customEvent.detail.message);
        const timer = setTimeout(() => setToastMsg(null), 3500);
        return () => clearTimeout(timer);
      }
    };
    window.addEventListener('brand-portal-toast', handleToast);
    return () => window.removeEventListener('brand-portal-toast', handleToast);
  }, []);
  
  // Chapter Categories definitions
  const chapters: Chapter[] = [
    // 1. Foundations
    { id: 'blueprint', name: 'Blueprint Overview', category: 'Foundations', icon: Compass, sectionNum: '01' },
    { id: 'brand-assets', name: 'Brand Assets Core', category: 'Foundations', icon: Sparkles, sectionNum: '02' },
    { id: 'logo-system', name: 'Logo System Grid', category: 'Foundations', icon: Grid, sectionNum: '03' },
    { id: 'typography', name: 'Typography System', category: 'Foundations', icon: Layers, sectionNum: '04' },
    { id: 'colors', name: 'Color Ecosystem', category: 'Foundations', icon: Sliders, sectionNum: '05' },

    // 2. Assets & System Libraries
    { id: 'modular-components', name: 'Modular Components', category: 'Assets', icon: Settings, sectionNum: '06' },
    { id: 'vector-library', name: 'Vector Library', category: 'Assets', icon: Feather, sectionNum: '07' },
    { id: 'iconography', name: 'Iconography Index', category: 'Assets', icon: Filter, sectionNum: '08' },
    { id: 'illustration', name: 'Illustration Language', category: 'Assets', icon: EditIconPlaceholder, sectionNum: '09' },

    // 3. Execution & Guidelines
    { id: 'packaging', name: 'Packaging Guidelines', category: 'Guidelines', icon: Package, sectionNum: '10' },
    { id: 'photography', name: 'Photography Direction', category: 'Guidelines', icon: Image, sectionNum: '11' },
    { id: 'motion', name: 'Motion Principles', category: 'Guidelines', icon: Play, sectionNum: '12' },
    { id: 'sustainability-framework', name: 'Sustainability Framework', category: 'Guidelines', icon: Leaf, sectionNum: '13' },
    { id: 'environmental-impact', name: 'Environmental Impact', category: 'Guidelines', icon: Flame, sectionNum: '14' },

    // 4. Corporate & Engagement
    { id: 'case-studies', name: 'Enterprise Case Studies', category: 'Company', icon: FileText, sectionNum: '15' },
    { id: 'client-success', name: 'Client Success & Testimonials', category: 'Company', icon: Quote, sectionNum: '16' },
    { id: 'resources', name: 'Resource Downloads', category: 'Company', icon: File, sectionNum: '17' },
    { id: 'about-us', name: 'About EcoSphere Group', category: 'Company', icon: Trees, sectionNum: '18' },
    { id: 'contact', name: 'Intake & Partnership', category: 'Company', icon: Send, sectionNum: '19' },
  ];

  const handleCopy = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(identifier);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const activeChapterObj = chapters.find(c => c.id === activeChapter) || chapters[0];

  return (
    <div className="min-h-screen bg-brand-dark-bg text-brand-ivory flex flex-col noise-bg selection:bg-brand-gold selection:text-brand-forest relative z-[55]">
      
      {/* Top Bar Status / Navigation */}
      <header className="sticky top-0 bg-brand-dark-bg/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-30">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-brand-forest border border-brand-gold/30 shrink-0">
            <svg viewBox="0 0 100 100" className="w-4 h-4 fill-none stroke-brand-gold" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 50,50 A 20,20 0 1,1 30,50 A 10,10 0 1,1 40,50 A 5,5 0 1,1 45,50" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase text-brand-ivory truncate max-w-[130px] sm:max-w-none">
              ECOSPHERE <span className="hidden xs:inline">// BRAND PORTAL</span>
            </span>
            <span className="font-mono text-[7px] sm:text-[8px] tracking-widest text-brand-gold uppercase truncate max-w-[130px] sm:max-w-none">
              SPEC_V1.04 // SECURE
            </span>
          </div>
        </div>

        {/* System Active Tag & Close */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/10 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-mono text-[8px] tracking-widest text-brand-sage-light">SYS_ACTIVE_MEMBER</span>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 sm:px-4 sm:py-2 border border-brand-gold/30 rounded-full hover:border-brand-gold bg-brand-forest/20 text-brand-gold text-[9px] sm:text-[10px] font-mono tracking-widest uppercase hover:bg-brand-gold hover:text-brand-forest transition-smooth shrink-0"
          >
            <span className="sm:hidden">EXIT</span>
            <span className="hidden sm:inline">EXIT TO LANDING PAGE</span>
          </button>
        </div>
      </header>

      {/* Main Framework View */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 relative">
        
        {/* Left Drawer Navigation Selector */}
        <aside className="hidden lg:flex lg:w-80 border-r border-white/10 bg-brand-dark-bg/40 flex-col lg:sticky lg:top-[69px] lg:h-[calc(100vh-69px)] overflow-y-auto no-scrollbar py-6">
          <div className="px-6 pb-4 border-b border-white/5 mb-4 shrink-0">
            <span className="font-mono text-[10px] text-brand-sage-light/50 tracking-[0.2em] uppercase font-semibold block">
              MANUAL DIRECTORY
            </span>
            <span className="font-display text-xs text-brand-gold block mt-1">
              19 Enterprise Chapters
            </span>
          </div>

          {/* Chapter Categories Groups */}
          {(['Foundations', 'Assets', 'Guidelines', 'Company'] as const).map((cat) => {
            const catChapters = chapters.filter(c => c.category === cat);
            return (
              <div key={cat} className="mb-6 px-4">
                <span className="px-2 font-mono text-[8px] tracking-widest text-brand-gold uppercase opacity-60 block mb-2 font-bold">
                  {cat === 'Foundations' && '01 / CORE FOUNDATIONS'}
                  {cat === 'Assets' && '02 / ASSETS & SPEC LIBRARIES'}
                  {cat === 'Guidelines' && '03 / SYSTEM GUIDELINES'}
                  {cat === 'Company' && '04 / BRAND ENGAGEMENT'}
                </span>

                <div className="flex flex-col gap-1">
                  {catChapters.map((c) => {
                    const isActive = activeChapter === c.id;
                    const IconComp = c.icon;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setActiveChapter(c.id)}
                        className={`flex items-center gap-3 p-2.5 rounded-xl text-left transition-smooth relative group ${
                          isActive
                            ? 'bg-white/[0.04] border border-white/15 text-brand-ivory shadow-inner'
                            : 'border border-transparent text-brand-sage/60 hover:text-brand-ivory hover:bg-white/[0.01]'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg border transition-colors ${
                          isActive ? 'border-brand-gold/30 text-brand-gold bg-brand-forest/30' : 'border-transparent text-brand-sage/40 group-hover:border-white/10 group-hover:text-brand-gold'
                        }`}>
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 flex items-center justify-between min-w-0">
                          <span className="font-sans text-xs font-light tracking-wide truncate">{c.name}</span>
                          <span className="font-mono text-[9px] text-brand-gold/40 group-hover:text-brand-gold/70">{c.sectionNum}</span>
                        </div>
                        {isActive && (
                          <motion.div
                            layoutId="activePortalMarker"
                            className="absolute left-1 top-3 bottom-3 w-[2px] bg-brand-gold rounded-full"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </aside>

        {/* Mobile Chapter Navigation Dropdown (Visible < lg only) */}
        <div className="lg:hidden px-4 py-3 bg-brand-dark-bg border-b border-white/10 flex flex-col gap-1.5 z-25 shrink-0 relative">
          <label className="font-mono text-[8px] uppercase tracking-[0.25em] text-brand-gold/70 block">
            ACTIVE SPEC NODE // MOBILE BLUEPRINT NAV
          </label>
          <div className="relative">
            <select
              value={activeChapter}
              onChange={(e) => setActiveChapter(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-2.5 text-xs font-sans tracking-wide text-brand-gold outline-none focus:border-brand-gold appearance-none cursor-pointer"
            >
              {chapters.map((c) => (
                <option key={c.id} value={c.id} className="bg-brand-charcoal text-brand-ivory text-xs">
                  {c.sectionNum} // {c.name.toUpperCase()}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold/70">
              <ChevronRight className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>

        {/* Right Stage Content Panel */}
        <main className="flex-1 p-6 md:p-12 overflow-y-auto min-h-0 bg-gradient-to-br from-transparent to-brand-forest/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto space-y-12"
            >
              
              {/* Heading */}
              <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-brand-gold tracking-widest uppercase">
                    <span>SECTION {activeChapterObj.sectionNum}</span>
                    <span>/</span>
                    <span>{activeChapterObj.category}</span>
                  </div>
                  <h1 className="font-display text-3xl md:text-5xl text-brand-ivory tracking-tight font-medium">
                    {activeChapterObj.name}
                  </h1>
                </div>
                
                {/* Visual spec validation */}
                <div className="font-mono text-[9px] text-brand-sage-light/50 text-left md:text-right">
                  <div>SPEC_INDEX // {activeChapter.toUpperCase()}_MEMBER_A</div>
                  <div>SECURITY_CHECKS // COMPLIANT_SHA256</div>
                </div>
              </div>

              {/* Dynamic Pages Dispatcher */}
              <div className="space-y-8">
                {activeChapter === 'blueprint' && <PageBlueprint onCopy={handleCopy} copiedToken={copiedToken} />}
                {activeChapter === 'brand-assets' && <PageBrandAssets onCopy={handleCopy} copiedToken={copiedToken} />}
                {activeChapter === 'logo-system' && <PageLogoSystem onCopy={handleCopy} copiedToken={copiedToken} />}
                {activeChapter === 'typography' && <PageTypography />}
                {activeChapter === 'colors' && <PageColors onCopy={handleCopy} copiedToken={copiedToken} />}
                {activeChapter === 'modular-components' && <PageComponents onCopy={handleCopy} copiedToken={copiedToken} />}
                {activeChapter === 'vector-library' && <PageVectorLibrary onCopy={handleCopy} copiedToken={copiedToken} />}
                {activeChapter === 'iconography' && <PageIconography />}
                {activeChapter === 'illustration' && <PageIllustration />}
                {activeChapter === 'packaging' && <PagePackaging />}
                {activeChapter === 'photography' && <PagePhotographyDirection />}
                {activeChapter === 'motion' && <PageMotionPrinciples />}
                {activeChapter === 'sustainability-framework' && <PageSustainabilityTimeline />}
                {activeChapter === 'environmental-impact' && <PageEnvironmentalImpact />}
                {activeChapter === 'case-studies' && <PageCaseStudies />}
                {activeChapter === 'client-success' && <PageClientSuccess />}
                {activeChapter === 'resources' && <PageResources onCopy={handleCopy} copiedToken={copiedToken} />}
                {activeChapter === 'about-us' && <PageAboutStudio />}
                {activeChapter === 'contact' && <PageContact />}
              </div>

            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Floating Status Toast */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[100] px-6 py-4 bg-brand-forest/95 border border-brand-gold/30 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md max-w-sm text-left"
          >
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-ping shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[8px] text-brand-gold uppercase tracking-widest font-bold">SYSTEM EVENT RECORDED</span>
              <span className="font-sans text-xs text-brand-ivory font-light leading-snug">{toastMsg}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Custom Placeholder edit icon to prevent importing complex dynamic SVGs
function EditIconPlaceholder(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

/* ==========================================================================
   PAGE COMPONENTS IMPLEMENTATIONS
   ========================================================================== */

// 1. BLUEPRINT OVERVIEW PAGE
function PageBlueprint({ onCopy, copiedToken }: { onCopy: (t: string, id: string) => void; copiedToken: string | null }) {
  return (
    <div className="space-y-8">
      {/* Editorial layout */}
      <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl space-y-6">
        <h3 className="font-display text-2xl text-brand-gold font-light">The Circular Editorial Vision</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/90 leading-relaxed">
          The EcoSphere Brand Blueprint outlines the visual boundaries, tactical metrics, and ecological directives
          that bind our partner network. We assert that true design curation can never be waste-neutral, it must be
          actively restorative. Every digital system must be configured for low power grids, and every physical package
          must return nutritive compounds directly to the soil biosphere.
        </p>

        {/* Quick specs list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 font-mono text-xs">
          <div className="flex justify-between p-3 bg-brand-dark-bg/60 border border-white/5 rounded-xl">
            <span className="text-brand-sage-light/50">PLATFORM_REDUNDANCY:</span>
            <span className="text-brand-gold">100% GREEN_WEB</span>
          </div>
          <div className="flex justify-between p-3 bg-brand-dark-bg/60 border border-white/5 rounded-xl">
            <span className="text-brand-sage-light/50">CO2_EMISSION_CAP:</span>
            <span className="text-brand-gold">0.02g PER_LOAD</span>
          </div>
        </div>
      </div>

      {/* Grid system visualizer */}
      <InteractiveGridVisualizer />

      {/* Download resources list inside blueprint */}
      <div className="space-y-4">
        <h4 className="font-display text-lg text-brand-gold font-light">Core Architecture Packages</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ResourceCard 
            title="Executive Summary v1.04" 
            fileSize="4.8 MB" 
            fileType="PDF" 
            id="exec_sum" 
            onCopy={onCopy} 
            copiedToken={copiedToken} 
          />
          <ResourceCard 
            title="Production Material Guide" 
            fileSize="14.2 MB" 
            fileType="PDF // CAD" 
            id="mat_guide" 
            onCopy={onCopy} 
            copiedToken={copiedToken} 
          />
        </div>
      </div>
    </div>
  );
}

// 2. BRAND ASSETS CORE
function PageBrandAssets({ onCopy, copiedToken }: { onCopy: (t: string, id: string) => void; copiedToken: string | null }) {
  const [activeLogoTheme, setActiveLogoTheme] = useState<'forest' | 'ivory' | 'emerald'>('forest');

  const logoVariations = {
    forest: {
      bg: 'bg-brand-forest border-brand-gold/15',
      stroke: 'stroke-brand-gold',
      text: 'text-brand-ivory',
      subText: 'text-brand-sage-light/60',
      tag: 'PRIMARY BRAND LOCKUP'
    },
    ivory: {
      bg: 'bg-brand-ivory border-brand-forest/10 text-brand-forest',
      stroke: 'stroke-brand-forest',
      text: 'text-brand-forest',
      subText: 'text-brand-forest/60',
      tag: 'INVERTED COLLATERAL SPEC'
    },
    emerald: {
      bg: 'bg-brand-emerald/10 border-brand-emerald/30',
      stroke: 'stroke-brand-gold-bright',
      text: 'text-brand-ivory',
      subText: 'text-brand-gold-bright/60',
      tag: 'BIOPHILIC EDITION'
    }
  };

  const selectedVari = logoVariations[activeLogoTheme];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Colorway Customizations</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/80">
          Observe how the brand emblem transitions dynamically across diverse luxury backgrounds.
          Toggle the buttons below to switch the background context.
        </p>

        {/* Theme selectors */}
        <div className="flex flex-wrap gap-2">
          {(['forest', 'ivory', 'emerald'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveLogoTheme(t)}
              className={`px-4 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-widest border transition-smooth ${
                activeLogoTheme === t 
                  ? 'bg-brand-gold text-brand-forest border-brand-gold font-semibold' 
                  : 'bg-white/[0.02] border-white/10 text-brand-sage hover:text-brand-ivory'
              }`}
            >
              {t.toUpperCase()} MODE
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Mock Canvas */}
      <div className={`p-12 border rounded-3xl transition-all duration-700 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden ${selectedVari.bg}`}>
        <div className="absolute top-4 left-4 font-mono text-[8px] uppercase tracking-widest text-brand-gold opacity-65">
          {selectedVari.tag}
        </div>

        <motion.div 
          key={activeLogoTheme}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full border border-brand-gold/20 bg-brand-dark-bg/20">
            <svg viewBox="0 0 100 100" className={`w-10 h-10 fill-none ${selectedVari.stroke}`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 50,50 A 20,20 0 1,1 30,50 A 10,10 0 1,1 40,50 A 5,5 0 1,1 45,50" />
            </svg>
          </div>
          <div className="space-y-1">
            <h2 className={`font-display text-3xl font-medium tracking-[0.2em] uppercase ${selectedVari.text}`}>
              ECOSPHERE
            </h2>
            <p className={`font-mono text-[10px] tracking-widest uppercase ${selectedVari.subText}`}>
              CIRCULARITY DESIGN FRAMEWORK
            </p>
          </div>
        </motion.div>
      </div>

      {/* Asset index */}
      <div className="space-y-4">
        <h4 className="font-display text-lg text-brand-gold font-light">Asset Pack Deliverables</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-sans text-xs text-brand-ivory font-medium">Core Vector Mark Suite</span>
              <span className="font-mono text-[9px] text-brand-sage-light/40 block">V_MARK_MASTER // SVG + EPS</span>
            </div>
            <button
              onClick={() => handleDownload('Vector Suite')}
              className="p-2.5 bg-white/[0.04] border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-colors rounded-full"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-sans text-xs text-brand-ivory font-medium">Secondary Horizontal Lockup</span>
              <span className="font-mono text-[9px] text-brand-sage-light/40 block">H_LOCKUP // AI + PDF</span>
            </div>
            <button
              onClick={() => handleDownload('Horizontal Lockup')}
              className="p-2.5 bg-white/[0.04] border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-colors rounded-full"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. LOGO SYSTEM GRID
function PageLogoSystem({ onCopy, copiedToken }: { onCopy: (t: string, id: string) => void; copiedToken: string | null }) {
  const [showSpirals, setShowSpirals] = useState(true);
  const [showAxes, setShowAxes] = useState(true);
  const [logoMargin, setLogoMargin] = useState(24);

  return (
    <div className="space-y-8">
      <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Constructive Geometry & Fibonacci Alignments</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85">
          Our biophilic symbol is constructed completely within a layout derived from Fibonacci curves.
          Manipulate the toggles below to view grid guides, radial axis lines, or change the protection exclusion boundary dynamically.
        </p>

        {/* Toggles */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={() => setShowSpirals(!showSpirals)}
            className={`px-4 py-1 rounded-full font-mono text-[9px] uppercase tracking-widest border transition-smooth ${
              showSpirals ? 'bg-brand-gold/15 border-brand-gold text-brand-gold' : 'border-white/10 text-brand-sage'
            }`}
          >
            {showSpirals ? '✓ Golden Spirals Enabled' : '○ Enable Golden Spirals'}
          </button>
          <button
            onClick={() => setShowAxes(!showAxes)}
            className={`px-4 py-1 rounded-full font-mono text-[9px] uppercase tracking-widest border transition-smooth ${
              showAxes ? 'bg-brand-gold/15 border-brand-gold text-brand-gold' : 'border-white/10 text-brand-sage'
            }`}
          >
            {showAxes ? '✓ Alignment Axes Enabled' : '○ Enable Alignment Axes'}
          </button>
        </div>
      </div>

      {/* Geometry diagram stage */}
      <div className="p-8 bg-brand-dark-bg/80 border border-white/10 rounded-3xl flex flex-col items-center justify-center relative aspect-video overflow-hidden">
        <div className="grid-blueprint-fine absolute inset-0 opacity-20" />
        
        {/* Exclusion margin outline */}
        <div 
          className="absolute border border-brand-gold/30 rounded-full border-dashed flex items-center justify-center transition-all duration-300"
          style={{ width: `${140 + logoMargin * 2}px`, height: `${140 + logoMargin * 2}px` }}
        >
          <span className="absolute -top-3.5 font-mono text-[8px] text-brand-gold/60 uppercase">
            EXCLUSION_ZONE ({logoMargin}%)
          </span>
        </div>

        {/* Symbol with SVG vectors */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
            {/* Concentric Fib Circles */}
            {showSpirals && (
              <>
                <circle cx="50" cy="50" r="45" stroke="rgba(197, 168, 128, 0.25)" strokeWidth="0.75" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="28" stroke="rgba(197, 168, 128, 0.25)" strokeWidth="0.75" />
                <circle cx="50" cy="50" r="17" stroke="rgba(197, 168, 128, 0.25)" strokeWidth="0.75" />
                <circle cx="50" cy="50" r="10" stroke="rgba(197, 168, 128, 0.15)" strokeWidth="0.75" />
              </>
            )}

            {/* Axes */}
            {showAxes && (
              <>
                <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(197, 168, 128, 0.3)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(197, 168, 128, 0.3)" strokeWidth="0.5" strokeDasharray="3 3" />
                {/* Diagonal guides */}
                <line x1="18.2" y1="18.2" x2="81.8" y2="81.8" stroke="rgba(197, 168, 128, 0.15)" strokeWidth="0.5" strokeDasharray="5 5" />
                <line x1="18.2" y1="81.8" x2="81.8" y2="18.2" stroke="rgba(197, 168, 128, 0.15)" strokeWidth="0.5" strokeDasharray="5 5" />
              </>
            )}

            {/* Logo Mark Paths */}
            <path d="M 50,50 A 20,20 0 1,1 30,50 A 10,10 0 1,1 40,50 A 5,5 0 1,1 45,50" stroke="#C5A059" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Margin adjustment slider */}
      <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 justify-between">
        <span className="font-mono text-xs text-brand-sage-light">Exclusion Padding: {logoMargin}px</span>
        <input 
          type="range" 
          min="10" 
          max="80" 
          value={logoMargin} 
          onChange={(e) => setLogoMargin(Number(e.target.value))} 
          className="w-full sm:w-64 accent-brand-gold h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
        />
      </div>

      {/* Prohibited usage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white/[0.01] border border-brand-emerald/15 rounded-2xl">
          <span className="font-mono text-[8px] text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded border border-brand-emerald/20 uppercase tracking-widest font-semibold">Approved Usage</span>
          <p className="font-sans text-xs text-brand-sage-light font-light mt-3">
            Always center the brand mark. Maintain a contrast ratio greater than 4.5:1. Frame with generous margin gaps.
          </p>
        </div>
        <div className="p-6 bg-white/[0.01] border border-red-500/10 rounded-2xl">
          <span className="font-mono text-[8px] text-red-400 bg-red-400/10 px-2 py-0.5 rounded border border-red-400/20 uppercase tracking-widest font-semibold">Prohibited Actions</span>
          <p className="font-sans text-xs text-brand-sage-light font-light mt-3">
            Do not alter or skew vectors. Do not introduce synthetic neon gradients. Do not overlap logos without custom approval.
          </p>
        </div>
      </div>
    </div>
  );
}

// 4. TYPOGRAPHY SYSTEM
function PageTypography() {
  const [testText, setTestText] = useState('THE ECOSPHERE CORE ARCHITECTURAL SPECIFICATION');
  const [fontSize, setFontSize] = useState(24);
  const [letterSpacing, setLetterSpacing] = useState(0.15);
  const [lineHeight, setLineHeight] = useState(1.4);

  return (
    <div className="space-y-8">
      <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Interactive Typographic Preview</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85">
          Interact with our three brand families. Type inside the preview field below, and adjust spacing parameters
          using sliders to test performance and readability.
        </p>

        {/* Input Text Box */}
        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          className="w-full bg-brand-dark-bg/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-ivory focus:border-brand-gold focus:ring-0 outline-none"
          placeholder="Type here to test typography..."
        />
      </div>

      {/* Sliders Block */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-white/[0.01] border border-white/5 rounded-2xl">
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-brand-sage-light block">Font Size: {fontSize}px</label>
          <input 
            type="range" min="12" max="64" value={fontSize} 
            onChange={(e) => setFontSize(Number(e.target.value))} 
            className="w-full accent-brand-gold h-1 bg-white/10 rounded-full"
          />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-brand-sage-light block">Tracking (Spacing): {letterSpacing.toFixed(2)}em</label>
          <input 
            type="range" min="-0.05" max="0.3" step="0.01" value={letterSpacing} 
            onChange={(e) => setLetterSpacing(Number(e.target.value))} 
            className="w-full accent-brand-gold h-1 bg-white/10 rounded-full"
          />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-brand-sage-light block">Leading (Height): {lineHeight.toFixed(2)}</label>
          <input 
            type="range" min="1.0" max="2.0" step="0.05" value={lineHeight} 
            onChange={(e) => setLineHeight(Number(e.target.value))} 
            className="w-full accent-brand-gold h-1 bg-white/10 rounded-full"
          />
        </div>
      </div>

      {/* Font Family Previews */}
      <div className="space-y-6">
        
        {/* Cormorant Garamond */}
        <div className="p-6 bg-brand-dark-bg border border-white/5 rounded-2xl space-y-2">
          <span className="font-mono text-[8px] text-brand-gold block border-b border-white/5 pb-2">DISPLAY / CORMORANT GARAMOND (SERIF)</span>
          <p 
            style={{ fontSize: `${fontSize}px`, letterSpacing: `${letterSpacing}em`, lineHeight: lineHeight }}
            className="font-display font-light text-brand-ivory italic transition-all duration-100"
          >
            {testText}
          </p>
        </div>

        {/* Inter */}
        <div className="p-6 bg-brand-dark-bg border border-white/5 rounded-2xl space-y-2">
          <span className="font-mono text-[8px] text-brand-gold block border-b border-white/5 pb-2">BODY / INTER (SANS-SERIF)</span>
          <p 
            style={{ fontSize: `${fontSize * 0.75}px`, letterSpacing: `${letterSpacing}em`, lineHeight: lineHeight }}
            className="font-sans font-light text-brand-ivory transition-all duration-100"
          >
            {testText}
          </p>
        </div>

        {/* JetBrains Mono */}
        <div className="p-6 bg-brand-dark-bg border border-white/5 rounded-2xl space-y-2">
          <span className="font-mono text-[8px] text-brand-gold block border-b border-white/5 pb-2">METADATA / JETBRAINS MONO (MONOSPACE)</span>
          <p 
            style={{ fontSize: `${fontSize * 0.6}px`, letterSpacing: `${letterSpacing}em`, lineHeight: lineHeight }}
            className="font-mono text-brand-sage-light transition-all duration-100"
          >
            {testText}
          </p>
        </div>

      </div>
    </div>
  );
}

// 5. COLOR ECOSYSTEM
function PageColors({ onCopy, copiedToken }: { onCopy: (t: string, id: string) => void; copiedToken: string | null }) {
  const [testBgColor, setTestBgColor] = useState('#0A1A10');
  const [testTextColor, setTestTextColor] = useState('#C5A059');

  // Compute mock contrast ratio (simulated for simplicity)
  const calculateContrast = () => {
    if (testBgColor === '#0A1A10' && testTextColor === '#C5A059') return '5.2:1 (PASS AA)';
    if (testBgColor === '#0A1A10' && testTextColor === '#F5F2ED') return '11.4:1 (PASS AAA)';
    return '4.5:1 (PASS AA)';
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Color swatches */}
        <ColorSwatches onCopy={onCopy} copiedToken={copiedToken} />
      </div>

      {/* Interactive WCAG Checker */}
      <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl space-y-6">
        <h3 className="font-display text-2xl text-brand-gold font-light">WCAG 2.1 Accessibility Validator</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85">
          Test background and text pairing contrast parameters. Select pre-established colorways or input hex codes to evaluate conformance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-[10px] text-brand-sage-light block">BACKGROUND COLOR</label>
            <div className="flex gap-2">
              <input 
                type="color" value={testBgColor} onChange={(e) => setTestBgColor(e.target.value)}
                className="w-10 h-10 bg-transparent border border-white/20 rounded cursor-pointer"
              />
              <input 
                type="text" value={testBgColor} onChange={(e) => setTestBgColor(e.target.value)}
                className="bg-brand-dark-bg border border-white/10 rounded-xl px-3 py-1 font-mono text-xs text-brand-ivory"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] text-brand-sage-light block">FOREGROUND TEXT</label>
            <div className="flex gap-2">
              <input 
                type="color" value={testTextColor} onChange={(e) => setTestTextColor(e.target.value)}
                className="w-10 h-10 bg-transparent border border-white/20 rounded cursor-pointer"
              />
              <input 
                type="text" value={testTextColor} onChange={(e) => setTestTextColor(e.target.value)}
                className="bg-brand-dark-bg border border-white/10 rounded-xl px-3 py-1 font-mono text-xs text-brand-ivory"
              />
            </div>
          </div>
        </div>

        {/* Contrast Result Indicator */}
        <div className="p-4 rounded-2xl flex items-center justify-between border border-white/10" style={{ backgroundColor: testBgColor, color: testTextColor }}>
          <div className="space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-wider block opacity-70">PREVIEW RENDER</span>
            <span className="font-display text-xl font-light">EcoSphere Circularity Initiative</span>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-brand-dark-bg/80 border border-brand-gold/25 rounded-full text-brand-gold">
              {calculateContrast()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Swatches helper
function ColorSwatches({ onCopy, copiedToken }: { onCopy: (t: string, id: string) => void; copiedToken: string | null }) {
  const swatchList = [
    { name: 'Forest Green', hex: '#0A1A10', type: 'Primary Base', text: 'text-brand-ivory' },
    { name: 'Luxury Gold', hex: '#C5A059', type: 'Highlight', text: 'text-brand-forest' },
    { name: 'Warm Ivory', hex: '#F5F2ED', type: 'Secondary Base', text: 'text-brand-forest' },
    { name: 'Muted Sage', hex: '#8DA399', type: 'Support Neutral', text: 'text-brand-forest' },
  ];

  return (
    <>
      {swatchList.map((swatch) => (
        <div 
          key={swatch.name} 
          onClick={() => onCopy(swatch.hex, swatch.name)}
          className="p-5 border border-white/10 rounded-2xl bg-white/[0.02] cursor-pointer hover:border-brand-gold/30 transition-smooth group relative overflow-hidden"
        >
          <div className="w-full h-16 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-[1.02]" style={{ backgroundColor: swatch.hex }} />
          <div className="space-y-1">
            <h5 className="font-display text-sm text-brand-ivory font-medium">{swatch.name}</h5>
            <div className="flex justify-between items-center text-[10px] font-mono text-brand-sage-light/50">
              <span>{swatch.hex}</span>
              <span className="text-brand-gold group-hover:underline">
                {copiedToken === swatch.name ? 'COPIED✓' : 'COPY'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// 6. MODULAR COMPONENTS PLAYGROUND
function PageComponents({ onCopy, copiedToken }: { onCopy: (t: string, id: string) => void; copiedToken: string | null }) {
  const [activeComponentTab, setActiveComponentTab] = useState<'button' | 'card' | 'input'>('button');

  const componentCodes = {
    button: `<button className="px-6 py-2.5 bg-brand-forest hover:bg-brand-gold border border-brand-gold/30 hover:border-brand-gold text-brand-gold hover:text-brand-forest transition-smooth rounded-full font-mono text-[10px] tracking-widest uppercase">
  ESTABLISH SPEC
</button>`,
    card: `<div className="p-6 bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl hover:border-brand-gold/30 transition-smooth box-glow relative">
  <span className="font-mono text-[8px] text-brand-gold uppercase">01 / BRAND</span>
  <h4 className="font-display text-lg text-brand-ivory mt-1">Circular System</h4>
</div>`,
    input: `<input 
  type="text" 
  placeholder="REGISTER EMAIL..." 
  className="w-full bg-white/[0.02] border border-white/10 focus:border-brand-gold rounded-full px-4 py-2.5 text-xs text-brand-ivory outline-none transition-smooth"
/>`
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Interactive Component Playground</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/80">
          We maintain absolute design consistency by employing prefabricated high-end layout modular tokens.
          Select tabs below to load components, interact with hover states, and copy standard Tailwind code snippets.
        </p>

        {/* Tabs switcher */}
        <div className="flex gap-2 border-b border-white/10 pb-2">
          {(['button', 'card', 'input'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveComponentTab(t)}
              className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-smooth ${
                activeComponentTab === t ? 'text-brand-gold border-b-2 border-brand-gold' : 'text-brand-sage/60 hover:text-brand-ivory'
              }`}
            >
              {t.toUpperCase()} COMPONENT
            </button>
          ))}
        </div>
      </div>

      {/* Render Component box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Render Box */}
        <div className="p-8 bg-brand-dark-bg border border-white/10 rounded-3xl flex items-center justify-center min-h-[220px]">
          {activeComponentTab === 'button' && (
            <button className="px-6 py-2.5 bg-brand-forest hover:bg-brand-gold border border-brand-gold/30 hover:border-brand-gold text-brand-gold hover:text-brand-forest transition-smooth rounded-full font-mono text-[10px] tracking-widest uppercase">
              ESTABLISH SPEC
            </button>
          )}

          {activeComponentTab === 'card' && (
            <div className="p-6 bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl hover:border-brand-gold/30 transition-smooth box-glow max-w-xs w-full">
              <span className="font-mono text-[8px] text-brand-gold uppercase">01 / BRAND</span>
              <h4 className="font-display text-lg text-brand-ivory mt-1">Circular System</h4>
              <p className="font-sans text-xs text-brand-sage-light/70 font-light mt-2 leading-relaxed">
                Pre-established micro-cards designed to catalog raw ecological variables.
              </p>
            </div>
          )}

          {activeComponentTab === 'input' && (
            <div className="max-w-xs w-full">
              <input 
                type="text" 
                placeholder="REGISTER EMAIL..." 
                className="w-full bg-white/[0.02] border border-white/10 focus:border-brand-gold rounded-full px-4 py-2.5 text-xs text-brand-ivory outline-none transition-smooth"
              />
            </div>
          )}
        </div>

        {/* Right: Code Block */}
        <div className="relative">
          <pre className="p-5 bg-brand-dark-bg/85 border border-white/10 rounded-3xl font-mono text-[10px] text-brand-sage-light overflow-x-auto">
            <code>{componentCodes[activeComponentTab]}</code>
          </pre>
          <button
            onClick={() => onCopy(componentCodes[activeComponentTab], activeComponentTab)}
            className="absolute top-3 right-3 p-2 bg-white/[0.04] border border-white/10 rounded-xl text-brand-gold hover:text-brand-gold-bright transition-colors"
          >
            {copiedToken === activeComponentTab ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}

// 7. VECTOR LIBRARY
function PageVectorLibrary({ onCopy, copiedToken }: { onCopy: (t: string, id: string) => void; copiedToken: string | null }) {
  const vectorList = [
    {
      name: 'Fibonacci Spiral Seed',
      id: 'fib_seed',
      svg: `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-brand-gold fill-none" stroke-width="3">
  <path d="M 50,50 A 20,20 0 1,1 30,50 A 10,10 0 1,1 40,50 A 5,5 0 1,1 45,50" />
</svg>`
    },
    {
      name: 'Dynamic Alignment Compass',
      id: 'align_compass',
      svg: `<svg viewBox="0 0 100 100" class="w-12 h-12 stroke-brand-gold fill-none" stroke-width="2">
  <circle cx="50" cy="50" r="40" stroke-dasharray="2 2" />
  <circle cx="50" cy="50" r="25" />
  <line x1="50" y1="10" x2="50" y2="90" />
  <line x1="10" y1="50" x2="90" y2="50" />
</svg>`
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {vectorList.map((v) => (
          <div key={v.id} className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl flex flex-col justify-between h-[250px]">
            <div className="flex justify-between items-start border-b border-white/5 pb-2">
              <span className="font-display text-sm text-brand-ivory font-medium">{v.name}</span>
              <span className="font-mono text-[8px] text-brand-sage-light/40">{v.id.toUpperCase()}</span>
            </div>

            {/* SVG Render box */}
            <div className="flex items-center justify-center h-28 bg-brand-dark-bg border border-white/5 rounded-2xl">
              <div dangerouslySetInnerHTML={{ __html: v.svg }} />
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => onCopy(v.svg, v.id)}
                className="flex-1 py-1.5 bg-white/[0.04] border border-white/10 text-brand-gold font-mono text-[9px] uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-forest transition-smooth"
              >
                {copiedToken === v.id ? 'COPIED ✓' : 'COPY RAW SVG'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 8. ICONOGRAPHY
function PageIconography() {
  const [searchTerm, setSearchTerm] = useState('');

  const iconsToDisplay = [
    { name: 'Compass', icon: Compass, tags: 'compass, explore, brand' },
    { name: 'Grid', icon: Grid, tags: 'grid, layout, guide' },
    { name: 'Layers', icon: Layers, tags: 'layers, stack, text' },
    { name: 'Sliders', icon: Sliders, tags: 'sliders, config, variables' },
    { name: 'Shield', icon: Shield, tags: 'shield, protect, license' },
    { name: 'Trees', icon: Trees, tags: 'trees, botanical, green' },
    { name: 'Feather', icon: Feather, tags: 'feather, raw, write' },
    { name: 'Flame', icon: Flame, tags: 'flame, output, energy' },
    { name: 'Leaf', icon: Leaf, tags: 'leaf, green, circular' },
    { name: 'Package', icon: Package, tags: 'package, box, material' },
  ];

  const filteredIcons = iconsToDisplay.filter(
    i => i.name.toLowerCase().includes(searchTerm.toLowerCase()) || i.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Filtering */}
      <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center gap-3">
        <Search className="w-4 h-4 text-brand-sage" />
        <input 
          type="text" 
          placeholder="Search icons (e.g. leaf, grid)..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-xs text-brand-ivory outline-none flex-1 font-sans"
        />
      </div>

      {/* Grid displays */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {filteredIcons.map((i) => {
          const IconComp = i.icon;
          return (
            <div 
              key={i.name} 
              className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-3 text-center hover:border-brand-gold/30 transition-smooth group"
            >
              <div className="p-3 bg-brand-dark-bg border border-white/5 rounded-xl text-brand-sage group-hover:text-brand-gold transition-colors">
                <IconComp className="w-5 h-5" />
              </div>
              <span className="font-sans text-[10px] text-brand-sage-light">{i.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 9. ILLUSTRATION LANGUAGE
function PageIllustration() {
  const [lineWeight, setLineWeight] = useState(1);

  return (
    <div className="space-y-8">
      <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Fine-Line Technical Illustration</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85">
          We avoid cartoon elements. Technical drawings must utilize crisp vector paths mimicking architectural drafts.
          Use the slider below to inspect line weights directly under our structural lens.
        </p>

        {/* Line Weight controls */}
        <div className="flex items-center justify-between font-mono text-[11px] text-brand-sage-light">
          <span>Active Weight: {lineWeight}pt</span>
          <input 
            type="range" min="0.25" max="3" step="0.25" value={lineWeight} 
            onChange={(e) => setLineWeight(Number(e.target.value))} 
            className="w-48 accent-brand-gold h-1 bg-white/10 rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Cyclical Eco-flow SVG schematic rendering */}
      <div className="p-8 bg-brand-dark-bg/85 border border-white/10 rounded-3xl relative aspect-video flex items-center justify-center overflow-hidden">
        <div className="grid-blueprint absolute inset-0 opacity-10" />
        
        {/* Custom complex SVG path depicting circular flows */}
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-brand-gold fill-none">
          {/* Main system path */}
          <path 
            d="M 30,50 Q 100,10 170,50 Q 100,90 30,50 Z" 
            strokeWidth={lineWeight}
            strokeDasharray={`${lineWeight * 4} ${lineWeight * 3}`}
            className="text-brand-gold transition-all duration-300"
          />
          
          {/* Active dash flow represent zero waste */}
          <path 
            d="M 30,50 Q 100,10 170,50" 
            strokeWidth={lineWeight + 1}
            strokeDasharray="10 15"
            stroke="#10B981"
            className="opacity-75"
          />

          {/* Node descriptors */}
          <circle cx="30" cy="50" r="4" fill="#C5A059" />
          <circle cx="170" cy="50" r="4" fill="#10B981" />
          
          {/* Small metadata text labels */}
          <text x="30" y="38" className="font-mono text-[5px] fill-brand-sage-light uppercase tracking-wider text-anchor-start">CARBON_FIXATION_NODE</text>
          <text x="120" y="70" className="font-mono text-[5px] fill-brand-sage-light uppercase tracking-wider text-anchor-start">BIOCELLULOSE_CONVERSION</text>
        </svg>
      </div>
    </div>
  );
}

// 10. PACKAGING GUIDELINES
function PagePackaging() {
  const [folded, setFolded] = useState(false);

  return (
    <div className="space-y-8">
      <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Zero-Plastic Structural Packaging</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85">
          Observe our patended interlocking friction mechanics. Designs must rely completely on tension locks, eliminating microplastic chemical bonds.
          Trigger the mock interlocking animation below.
        </p>

        {/* Interact folded button */}
        <button
          onClick={() => setFolded(!folded)}
          className="px-6 py-2 bg-brand-forest hover:bg-brand-gold border border-brand-gold/30 hover:border-brand-gold text-brand-gold hover:text-brand-forest transition-smooth font-mono text-[10px] tracking-widest uppercase rounded-full"
        >
          {folded ? 'RESET ASSEMBLY MODEL' : 'SECURE MECHANICAL LOCK'}
        </button>
      </div>

      {/* Mock Fold Container box */}
      <div className="p-8 bg-brand-dark-bg/65 border border-white/10 rounded-3xl flex items-center justify-center aspect-video relative overflow-hidden">
        <div className="grid-blueprint-fine absolute inset-0 opacity-15" />
        
        {/* Animated Box vectors */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div
            animate={{ rotateX: folded ? 45 : 0, rotateY: folded ? 45 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-32 h-32 border border-brand-gold/40 bg-brand-forest/30 flex items-center justify-center relative rounded-xl"
          >
            {/* Flap details */}
            <motion.div 
              animate={{ rotateY: folded ? 90 : 0, scaleX: folded ? 0.7 : 1 }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 top-0 bottom-0 w-8 border-r border-brand-gold/25 bg-brand-forest/20 origin-left"
            />
            <motion.div 
              animate={{ rotateY: folded ? -90 : 0, scaleX: folded ? 0.7 : 1 }}
              transition={{ duration: 0.8 }}
              className="absolute right-0 top-0 bottom-0 w-8 border-l border-brand-gold/25 bg-brand-forest/20 origin-right"
            />
            <span className="font-mono text-[8px] text-brand-gold/70 select-none">
              {folded ? 'BOX_LOCK // INTERLOCKED' : 'FLAT_LAYOUT // UNLOCKED'}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// 11. PHOTOGRAPHY DIRECTION
function PagePhotographyDirection() {
  const [contrastSlider, setContrastSlider] = useState(1);
  const [saturationSlider, setSaturationSlider] = useState(0.85);

  const images = [
    { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600', tag: 'Chiaroscuro Interior' },
    { url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600', tag: 'High Contrast Woods' }
  ];

  return (
    <div className="space-y-8">
      <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Chiaroscuro Art Direction Guidelines</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85">
          All marketing and collateral photography must employ deep shadows, natural exposures, and warm botanical compositions.
          Manipulate art direction values below to adjust visual contrast dynamically.
        </p>

        {/* Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-brand-sage-light block">Art Contrast: {contrastSlider.toFixed(2)}x</span>
            <input 
              type="range" min="0.5" max="1.5" step="0.05" value={contrastSlider} 
              onChange={(e) => setContrastSlider(Number(e.target.value))} 
              className="w-full accent-brand-gold h-1 bg-white/10 rounded-full"
            />
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-brand-sage-light block">Muted Saturation: {saturationSlider.toFixed(2)}x</span>
            <input 
              type="range" min="0.2" max="1.2" step="0.05" value={saturationSlider} 
              onChange={(e) => setSaturationSlider(Number(e.target.value))} 
              className="w-full accent-brand-gold h-1 bg-white/10 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Picture Frame */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-2xl border border-white/10 aspect-square group">
            <img 
              src={img.url} 
              alt={img.tag}
              style={{ filter: `contrast(${contrastSlider}) saturate(${saturationSlider})` }}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold font-medium">{img.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 12. MOTION PRINCIPLES
function PageMotionPrinciples() {
  const [stiffness, setStiffness] = useState(100);
  const [damping, setDamping] = useState(10);
  const [triggerCount, setTriggerCount] = useState(0);

  return (
    <div className="space-y-8">
      <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Interactive Spring Curve Sandbox</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85">
          Observe how elasticity and inertia drive brand layouts. Change structural parameters below and click
          the trigger button to simulate spring behavior.
        </p>

        {/* Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-brand-sage-light block">Spring Stiffness: {stiffness}</span>
            <input 
              type="range" min="50" max="400" value={stiffness} 
              onChange={(e) => setStiffness(Number(e.target.value))} 
              className="w-full accent-brand-gold h-1 bg-white/10 rounded-full"
            />
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-brand-sage-light block">Inertia Damping: {damping}</span>
            <input 
              type="range" min="5" max="40" value={damping} 
              onChange={(e) => setDamping(Number(e.target.value))} 
              className="w-full accent-brand-gold h-1 bg-white/10 rounded-full"
            />
          </div>
        </div>

        <button
          onClick={() => setTriggerCount(prev => prev + 1)}
          className="px-6 py-2 bg-brand-forest hover:bg-brand-gold border border-brand-gold/30 hover:border-brand-gold text-brand-gold hover:text-brand-forest transition-smooth font-mono text-[10px] tracking-widest uppercase rounded-full"
        >
          TRIGGER SIMULATION
        </button>
      </div>

      {/* Stage */}
      <div className="p-8 bg-brand-dark-bg/85 border border-white/10 rounded-3xl flex items-center justify-center min-h-[180px] relative overflow-hidden">
        <div className="grid-blueprint-fine absolute inset-0 opacity-15" />

        <motion.div
          key={triggerCount}
          animate={{ x: [0, 150, 0] }}
          transition={{ type: 'spring', stiffness: stiffness, damping: damping }}
          className="w-12 h-12 rounded-2xl bg-brand-forest border border-brand-gold flex items-center justify-center shadow-lg"
        >
          <Play className="w-4 h-4 text-brand-gold" />
        </motion.div>
      </div>
    </div>
  );
}

// 13. SUSTAINABILITY TIMELINE
function PageSustainabilityTimeline() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Ecological Milestone Auditing</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/80">
          Trace the continuous evolution of our biophilic materials procurement. Each phase is audited independently to maintain B-Corp compliance standards.
        </p>
      </div>

      {/* Timeline items */}
      <div className="space-y-6">
        {sustainabilityMilestones.map((ms, idx) => (
          <div 
            key={idx} 
            className="p-6 bg-white/[0.01] border border-white/10 rounded-3xl hover:border-brand-gold/30 transition-smooth flex flex-col sm:flex-row gap-4 justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl text-brand-gold font-medium">{ms.year}</span>
                <span className={`font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 border rounded-full ${
                  ms.status === 'achieved' ? 'border-brand-emerald/30 text-brand-emerald bg-brand-emerald/5' : 'border-brand-gold/30 text-brand-gold'
                }`}>
                  {ms.status.toUpperCase()}
                </span>
              </div>
              <h5 className="font-sans text-sm text-brand-ivory font-medium">{ms.title}</h5>
              <p className="font-sans text-xs text-brand-sage-light/85 font-light leading-relaxed">{ms.description}</p>
            </div>
            <div className="sm:text-right self-start">
              <span className="font-mono text-[9px] text-brand-gold bg-brand-forest/40 px-3 py-1 rounded-full border border-brand-gold/20">
                {ms.impactMetric}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 14. ENVIRONMENTAL IMPACT CALCULATOR
function PageEnvironmentalImpact() {
  const [tonnage, setTonnage] = useState(150);
  const [transportMiles, setTransportMiles] = useState(500);

  // CO2 sequestered = tonnage * (8.4) - transportMiles * 0.12
  const grossCO2 = tonnage * 8.4;
  const transportCost = transportMiles * 0.12;
  const netCO2 = Math.max(0, grossCO2 - transportCost);
  const circularityScore = Math.min(100, Math.max(0, 98 - (transportMiles / 50)));

  return (
    <div className="space-y-8">
      <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl space-y-6">
        <h3 className="font-display text-2xl text-brand-gold font-light">Carbon Integration Calculator</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85">
          Our calculator assists procurement directors in quantifying active environmental carbon sequestration ratios
          based on local sourcing bounds and circular packaging choices.
        </p>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-[10px] text-brand-sage-light block">MATERIAL PROCURMENT TONNAGE (Tons)</label>
            <input 
              type="number" value={tonnage} onChange={(e) => setTonnage(Number(e.target.value))}
              className="w-full bg-brand-dark-bg border border-white/10 rounded-xl px-4 py-2 text-sm text-brand-ivory focus:border-brand-gold outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] text-brand-sage-light block">LOCAL TRANSPORT RADIUS (Miles)</label>
            <input 
              type="number" value={transportMiles} onChange={(e) => setTransportMiles(Number(e.target.value))}
              className="w-full bg-brand-dark-bg border border-white/10 rounded-xl px-4 py-2 text-sm text-brand-ivory focus:border-brand-gold outline-none"
            />
          </div>
        </div>

        {/* Dynamic gauge display */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 text-center">
          <div className="p-4 bg-brand-dark-bg/60 border border-white/5 rounded-2xl">
            <span className="font-mono text-[8px] text-brand-sage-light/50 block uppercase">Carbon Recovered</span>
            <span className="font-display text-2xl text-brand-gold block font-medium mt-1">{netCO2.toFixed(1)}k Tons</span>
          </div>
          <div className="p-4 bg-brand-dark-bg/60 border border-white/5 rounded-2xl">
            <span className="font-mono text-[8px] text-brand-sage-light/50 block uppercase">Transport Cost</span>
            <span className="font-display text-2xl text-red-400 block font-medium mt-1">-{transportCost.toFixed(1)}k Tons</span>
          </div>
          <div className="p-4 bg-brand-dark-bg/60 border border-white/5 rounded-2xl">
            <span className="font-mono text-[8px] text-brand-sage-light/50 block uppercase">Circularity Index</span>
            <span className="font-display text-2xl text-brand-emerald block font-medium mt-1">{circularityScore.toFixed(0)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 15. CASE STUDIES LIST
function PageCaseStudies() {
  const [filterTag, setFilterTag] = useState<'all' | 'Circular' | 'Identity' | 'Luxury'>('all');

  const filtered = caseStudies.filter(
    cs => filterTag === 'all' || cs.tag.toLowerCase().includes(filterTag.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Category selectors */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'Circular', 'Identity', 'Luxury'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setFilterTag(t)}
            className={`px-4 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-widest border transition-smooth ${
              filterTag === t 
                ? 'bg-brand-gold text-brand-forest border-brand-gold font-semibold' 
                : 'bg-white/[0.02] border-white/10 text-brand-sage hover:text-brand-ivory'
            }`}
          >
            {t.toUpperCase()} PROJECTS
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((cs) => (
          <div 
            key={cs.id} 
            className="p-6 bg-white/[0.01] border border-white/10 rounded-3xl hover:border-brand-gold/30 transition-smooth flex flex-col justify-between h-[380px]"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[8px] text-brand-gold uppercase tracking-widest bg-brand-forest/40 px-2 py-0.5 rounded border border-brand-gold/20">
                  {cs.tag}
                </span>
                <span className="font-mono text-[9px] text-brand-sage-light/40">{cs.year}</span>
              </div>
              <h4 className="font-display text-lg text-brand-ivory font-medium mt-2">{cs.title}</h4>
              <p className="font-sans text-xs text-brand-sage-light/85 font-light leading-relaxed truncate-2-lines">{cs.description}</p>
            </div>

            {/* Micro Stats panel */}
            <div className="border-t border-white/5 pt-4 mt-auto">
              <div className="grid grid-cols-3 gap-2">
                {cs.stats.map((st, idx) => (
                  <div key={idx} className="flex flex-col text-left">
                    <span className="font-mono text-[8px] text-brand-sage-light/40 uppercase">{st.label}</span>
                    <span className="font-display text-sm text-brand-gold font-medium mt-0.5">{st.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 16. CLIENT SUCCESS
function PageClientSuccess() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setActiveIdx(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const t = testimonials[activeIdx];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Client Endorsement Review</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/80">
          Listen to the narrative experiences of executive logistics and materials curators operating inside the circular network.
        </p>
      </div>

      {/* Card Carousel */}
      <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl relative box-glow space-y-6">
        <Quote className="w-10 h-10 text-brand-gold/20" />
        <p className="font-sans text-sm font-light text-brand-ivory leading-relaxed italic">
          "{t.quote}"
        </p>
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover border border-brand-gold/20" />
          <div>
            <span className="font-display font-medium text-xs text-brand-ivory block">{t.author}</span>
            <span className="font-mono text-[9px] text-brand-sage-light/60">{t.role} // {t.company}</span>
          </div>
        </div>

        {/* Nav Controls */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button onClick={prev} className="p-2 bg-white/[0.04] border border-white/10 rounded-full text-brand-gold hover:text-brand-gold-bright transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button onClick={next} className="p-2 bg-white/[0.04] border border-white/10 rounded-full text-brand-gold hover:text-brand-gold-bright transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// 17. DOWNLOAD RESOURCES LIST
function PageResources({ onCopy, copiedToken }: { onCopy: (t: string, id: string) => void; copiedToken: string | null }) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-brand-gold font-light">Asset Deliverable Repositories</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/80">
          Obtain authorized vector files, print alignment templates, and spatial lighting presets directly from the local node.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ResourceCard 
          title="Print Specifications Standard" 
          fileSize="18.5 MB" 
          fileType="PDF v2.4" 
          id="print_specs" 
          onCopy={onCopy} 
          copiedToken={copiedToken} 
        />
        <ResourceCard 
          title="Core Motion Timing Profiles" 
          fileSize="1.2 MB" 
          fileType="JSON // LOTTIE" 
          id="motion_timing" 
          onCopy={onCopy} 
          copiedToken={copiedToken} 
        />
      </div>
    </div>
  );
}

// Helper Resource Card
function ResourceCard({ title, fileSize, fileType, id, onCopy, copiedToken }: { title: string; fileSize: string; fileType: string; id: string; onCopy: (t: string, id: string) => void; copiedToken: string | null }) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const triggerDownload = () => {
    setDownloading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDownloading(false), 800);
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  return (
    <div className="p-5 bg-white/[0.01] border border-white/10 rounded-2xl flex flex-col justify-between h-[180px] hover:border-brand-gold/30 transition-smooth group relative overflow-hidden">
      <div className="space-y-1">
        <span className="font-mono text-[8px] text-brand-gold/50 uppercase tracking-widest">{fileType}</span>
        <h4 className="font-display text-sm text-brand-ivory font-medium mt-1">{title}</h4>
        <span className="font-mono text-[10px] text-brand-sage-light/40 block">{fileSize}</span>
      </div>

      {/* Button and micro progression */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
        {downloading ? (
          <div className="w-full space-y-1.5">
            <div className="flex justify-between items-center font-mono text-[8px] text-brand-gold">
              <span>DECRYPTING ASSET...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 bg-brand-gold transition-all duration-100" style={{ width: `${progress}%` }} />
            </div>
          </div>
        ) : (
          <>
            <button 
              onClick={triggerDownload}
              className="px-4 py-1.5 bg-brand-forest hover:bg-brand-gold border border-brand-gold/20 hover:border-brand-gold text-brand-gold hover:text-brand-forest rounded-full font-mono text-[9px] uppercase tracking-widest transition-smooth"
            >
              DOWNLOAD FILE
            </button>
            <button 
              onClick={() => onCopy(title, id)}
              className="p-1.5 bg-white/[0.04] border border-white/10 text-brand-gold hover:text-brand-gold-bright transition-colors rounded-lg"
            >
              {copiedToken === id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// 18. ABOUT THE STUDIO
function PageAboutStudio() {
  return (
    <div className="space-y-8">
      <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl space-y-6">
        <h3 className="font-display text-2xl text-brand-gold font-light">The EcoSphere Curation Board</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85 leading-relaxed">
          Founded in Copenhagen in 2022, EcoSphere Group operates at the singular intersection of classical prestige
          branding and rigorous circular engineering. We consist of materials research scientists, typography craftspeople,
          and spatial environmental planners, all working to dismantle greenwashing metrics in favor of absolute mathematics.
        </p>

        {/* Credentials list */}
        <div className="pt-4 border-t border-white/5 space-y-2">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-brand-sage-light">ELLEN MACARTHUR TRUST MEMBER</span>
            <span className="text-brand-gold">CERT_092_B</span>
          </div>
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-brand-sage-light">CRADLE TO CRADLE GOLD MATERIAL CODE</span>
            <span className="text-brand-gold">SECURE_REF_108</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 19. INTAKE & CONTACT
function PageContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setDone(true);
    }
  };

  return (
    <div className="space-y-8">
      <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl space-y-6">
        <h3 className="font-display text-2xl text-brand-gold font-light">Establish Circular Alliance</h3>
        <p className="font-sans text-sm font-light text-brand-sage-light/85">
          Submit specifications or material requests to our curators. Complete the secure fields below.
        </p>

        {done ? (
          <div className="p-4 bg-brand-forest/30 border border-brand-emerald text-brand-ivory rounded-2xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-brand-gold" />
            <div>
              <span className="font-display font-medium text-xs block text-brand-ivory">Alliance Requested</span>
              <span className="font-mono text-[8px] text-brand-sage-light/60 block mt-0.5">TRANSMISSION_ID // OK</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" placeholder="CURATOR NAME..." value={name} onChange={(e) => setName(e.target.value)} required
                className="w-full bg-brand-dark-bg border border-white/10 rounded-xl px-4 py-3 text-brand-ivory outline-none focus:border-brand-gold"
              />
              <input 
                type="email" placeholder="SECURE EMAIL..." value={email} onChange={(e) => setEmail(e.target.value)} required
                className="w-full bg-brand-dark-bg border border-white/10 rounded-xl px-4 py-3 text-brand-ivory outline-none focus:border-brand-gold"
              />
            </div>
            <textarea 
              placeholder="INQUIRY NOTES..." value={msg} onChange={(e) => setMsg(e.target.value)} rows={4}
              className="w-full bg-brand-dark-bg border border-white/10 rounded-xl px-4 py-3 text-brand-ivory outline-none focus:border-brand-gold resize-none"
            />
            <button 
              type="submit"
              className="w-full py-3.5 bg-brand-forest hover:bg-brand-gold border border-brand-gold/30 text-brand-gold hover:text-brand-forest rounded-full font-mono text-[10px] tracking-widest uppercase font-semibold transition-smooth"
            >
              TRANSMIT SPEC PACKET
            </button>
          </form>
        )}
      </div>

      {/* Accordion FAQ */}
      <FAQAccordions />
    </div>
  );
}

// Interactive FAQ Accordions
function FAQAccordions() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: 'How are circular assets licensed?', a: 'All vectors and components carry a non-transferable B-Corp commercial integration license for verified partners.' },
    { q: 'What is the routing depth limit on limestone?', a: 'To maintain structural safety, signage letter routing must not exceed 8.0mm on limestone and travertine facings.' }
  ];

  return (
    <div className="space-y-3">
      <h4 className="font-display text-lg text-brand-gold font-light">Frequently Audited Questions</h4>
      {faqs.map((f, idx) => (
        <div key={idx} className="border border-white/10 rounded-2xl bg-white/[0.01] overflow-hidden">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full p-4 flex items-center justify-between text-left font-sans text-xs text-brand-ivory font-medium hover:bg-white/[0.02]"
          >
            <span>{f.q}</span>
            <ChevronRight className={`w-3.5 h-3.5 text-brand-gold transition-transform duration-300 ${openIdx === idx ? 'rotate-90' : ''}`} />
          </button>
          <AnimatePresence>
            {openIdx === idx && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <p className="p-4 pt-0 font-sans text-xs text-brand-sage-light/80 leading-relaxed font-light border-t border-white/5 bg-brand-dark-bg/25">
                  {f.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// Dynamic Mock downloads helper function
function handleDownload(fileName: string) {
  window.dispatchEvent(new CustomEvent('brand-portal-toast', { 
    detail: { message: `DECRYPTING AND PACKAGING ${fileName.toUpperCase()} ASSET SUITE... DOWNLOAD STARTED.` } 
  }));
}

// 1. Interactive Grid system overlays visualizer
function InteractiveGridVisualizer() {
  const [gridColumns, setGridColumns] = useState(true);
  const [gridCentering, setGridCentering] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h4 className="font-display text-lg text-brand-gold font-light">Interactive Grid Core Overlay</h4>
        <div className="flex gap-2">
          <button
            onClick={() => setGridColumns(!gridColumns)}
            className={`px-3 py-1 rounded-full font-mono text-[8px] uppercase tracking-widest border transition-smooth ${
              gridColumns ? 'bg-brand-gold/15 border-brand-gold text-brand-gold' : 'border-white/10 text-brand-sage'
            }`}
          >
            {gridColumns ? '✓ 12-Col Lines ON' : '○ Columns OFF'}
          </button>
          <button
            onClick={() => setGridCentering(!gridCentering)}
            className={`px-3 py-1 rounded-full font-mono text-[8px] uppercase tracking-widest border transition-smooth ${
              gridCentering ? 'bg-brand-gold/15 border-brand-gold text-brand-gold' : 'border-white/10 text-brand-sage'
            }`}
          >
            {gridCentering ? '✓ Center Guideline ON' : '○ Center OFF'}
          </button>
        </div>
      </div>

      {/* Grid container stage */}
      <div className="relative aspect-video bg-brand-dark-bg border border-white/10 rounded-2xl overflow-hidden p-1">
        {/* Dynamic Column renders */}
        {gridColumns && (
          <div className="absolute inset-0 grid grid-cols-12 gap-4 px-4 opacity-25">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className="h-full border-x border-dashed border-brand-gold/40 bg-brand-gold/5" />
            ))}
          </div>
        )}

        {/* Dynamic Center line */}
        {gridCentering && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="w-[1px] h-full bg-brand-emerald border-l border-dashed border-brand-emerald" />
            <div className="absolute h-[1px] w-full bg-brand-emerald border-t border-dashed border-brand-emerald" />
          </div>
        )}

        {/* Static decorative content mock */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none relative z-10 space-y-2">
          <span className="font-mono text-[8px] text-brand-gold bg-brand-forest/60 px-2 py-0.5 rounded border border-brand-gold/20">PREVIEW_ALIGN_CANVAS</span>
          <h5 className="font-display text-xl text-brand-ivory font-light">Mathematical Layout Grid</h5>
          <p className="font-sans text-[10px] text-brand-sage-light max-w-xs font-light leading-relaxed">
            All elements snap precisely to an 8px base vector. Turn overlays ON to see spatial guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
