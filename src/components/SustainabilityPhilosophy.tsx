/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, Recycle, CheckCircle, Flame, CalendarDays } from 'lucide-react';
import { sustainabilityMilestones } from '../data/brandData';

export default function SustainabilityPhilosophy() {
  return (
    <section id="sustainability-section" className="relative py-32 bg-brand-dark-bg noise-bg overflow-hidden">
      {/* Decorative vertical lines representing alignment rulers */}
      <div className="absolute left-12 top-0 bottom-0 glow-line-v opacity-25"></div>
      <div className="absolute right-12 top-0 bottom-0 glow-line-v opacity-25"></div>

      {/* Floating backlights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-brand-forest/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Philosophical Editorial (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold">
                Chapter 05 // Ecological Stewardship
              </span>
              <span className="h-[1px] w-8 bg-brand-gold/30"></span>
            </div>

            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] text-brand-ivory mb-8">
              A Design Philosophy <br />
              <span className="font-medium text-brand-gold text-glow">Bound to Earth</span>
            </h2>

            <p className="font-sans text-sm text-brand-ivory-dark/75 font-light leading-relaxed mb-8">
              True luxury is not defined by excess, but by absolute restraint, intelligence, and permanence. 
              At EcoSphere, we believe that every brand signature should contribute positively to the planet's circular material flows.
            </p>

            <p className="font-sans text-sm text-brand-ivory-dark/75 font-light leading-relaxed mb-10">
              We replace linear 'take-make-waste' pipelines with closed-loop geometry systems, 100% bio-derived pigments, and localized resource logistics. This is design engineered for the next century.
            </p>

            {/* Immersive circular economy visual card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md relative box-glow"
              id="philosophy-visual-card"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-brand-sage-light/30">
                CIRCULAR_FLOW_MODEL
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-brand-forest border border-brand-gold/20 rounded-full">
                  <Recycle className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-display text-xs tracking-wider uppercase text-brand-ivory">Zero Adhesive Joint</h4>
                  <p className="font-mono text-[9px] text-brand-sage-light/60">Interlocking Mechanical Frictions</p>
                </div>
              </div>

              {/* Quick graphic depicting circular input/outputs */}
              <div className="relative h-1 bg-brand-gold/10 rounded-full mb-6">
                <motion.div 
                  animate={{ left: ['0%', '100%', '0%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-8 bg-brand-gold rounded-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-[9px] text-brand-sage-light/80">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[7px] uppercase text-brand-gold/50">INPUT MATERIAL</span>
                  <span>100% Kelp Cellulose</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[7px] uppercase text-brand-gold/50">ECO RECOVERY RATE</span>
                  <span className="text-brand-emerald">120% Positive Net</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Vertically Animated Timeline (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-start" id="sustainability-timeline">
            <div className="flex items-center justify-between border-b border-brand-gold/10 pb-4 mb-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-ivory font-semibold">
                Blueprinted Milestones Timeline
              </span>
              <span className="font-mono text-[9px] text-brand-sage-light/50">
                2020 - 2028 SPEC
              </span>
            </div>

            <div className="relative pl-6 md:pl-10 border-l border-brand-gold/10 flex flex-col gap-12">
              {sustainabilityMilestones.map((milestone, idx) => {
                const isAchieved = milestone.status === 'achieved';
                const isActive = milestone.status === 'active';
                
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group"
                    id={`timeline-node-${milestone.year}`}
                  >
                    {/* Bullet marker on timeline axis */}
                    <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center">
                      <div className={`w-3.5 h-3.5 rounded-full border transition-all duration-500 flex items-center justify-center ${
                        isAchieved 
                          ? 'bg-brand-emerald border-brand-emerald/40' 
                          : isActive 
                            ? 'bg-brand-gold border-brand-gold animate-pulse' 
                            : 'bg-brand-dark-bg border-brand-gold/40'
                      }`}>
                        {isAchieved && <CheckCircle className="w-2.5 h-2.5 text-brand-dark-bg" />}
                      </div>
                    </div>

                    {/* Timeline Node Content Card */}
                    <div className="p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md group-hover:border-brand-gold/30 transition-all duration-500 box-glow relative overflow-hidden">
                      {/* Top status bar details */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-brand-gold/5 pb-3 mb-4">
                        <div className="flex items-baseline gap-4">
                          <span className="font-display font-light text-xl text-brand-gold">
                            {milestone.year}
                          </span>
                          <span className={`font-mono text-[8px] uppercase tracking-wider px-2.5 py-0.5 border rounded-full ${
                            isAchieved 
                              ? 'border-brand-emerald/20 text-brand-emerald bg-brand-emerald/5' 
                              : isActive 
                                ? 'border-brand-gold/30 text-brand-gold bg-brand-gold/5' 
                                : 'border-brand-ivory/10 text-brand-ivory-dark/40'
                          }`}>
                            {milestone.status}
                          </span>
                        </div>

                        {/* Impact badge savings */}
                        <div className="flex items-center gap-1 font-mono text-[9px] text-brand-gold-bright">
                          <Award className="w-3.5 h-3.5 text-brand-gold" />
                          <span>{milestone.impactMetric}</span>
                        </div>
                      </div>

                      {/* Headline and Narrative */}
                      <h3 className="font-display font-medium text-sm tracking-wide text-brand-ivory mb-2 group-hover:text-brand-gold transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="font-sans text-xs text-brand-ivory-dark/70 font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
