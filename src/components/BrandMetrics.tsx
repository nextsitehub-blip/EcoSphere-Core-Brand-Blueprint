/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { metrics } from '../data/brandData';

function CountingNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds counting animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out cubic: f(t) = 1 - (1-t)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-light text-5xl md:text-6xl text-brand-gold text-glow select-none">
      {count}
      <span className="text-brand-ivory text-glow">{suffix}</span>
    </span>
  );
}

export default function BrandMetrics() {
  return (
    <section className="relative py-24 bg-brand-forest/15 border-y border-brand-gold/10 overflow-hidden">
      {/* Blueprint grid backing */}
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Sub-Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold-bright block mb-3">
              Section 02 // Ecological Audits
            </span>
            <h2 className="font-display font-light text-3xl md:text-4xl leading-tight text-brand-ivory">
              Verifiable Metrics of <br />
              <span className="italic font-normal text-brand-gold text-glow">Prestige & Performance</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-brand-ivory-dark/60 max-w-sm font-light leading-relaxed">
            We hold every design element accountable. Every brand blueprint integrates continuous monitoring modules to ensure aesthetic absolute purity alongside verified environmental benefits.
          </p>
        </div>

        {/* 4-Column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md group hover:border-brand-gold/40 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 box-glow"
              id={`metric-card-${metric.id}`}
            >
              {/* Corner decorative bracket ticks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500"></div>

              {/* Number counting and label */}
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <CountingNumber value={metric.value} suffix={metric.suffix} />
                  <span className="font-mono text-[9px] text-brand-sage-light/40 group-hover:text-brand-gold transition-colors duration-500">
                    [0{index + 1}]
                  </span>
                </div>
                
                <div className="border-t border-brand-gold/10 pt-4 mt-2">
                  <h3 className="font-display font-medium text-xs tracking-wider uppercase text-brand-ivory mb-2 group-hover:text-brand-gold transition-colors duration-500">
                    {metric.label}
                  </h3>
                  <p className="font-sans text-xs text-brand-ivory-dark/65 leading-relaxed font-light">
                    {metric.description}
                  </p>
                </div>
              </div>

              {/* Bottom linear accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/0 to-transparent group-hover:via-brand-gold/30 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
