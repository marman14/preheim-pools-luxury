'use client';

import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/businessData';

export default function HeroVideo() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={BUSINESS_INFO.heroPoster}
          className="w-full h-full object-cover scale-105 filter brightness-105 contrast-105"
        >
          <source src={BUSINESS_INFO.heroVideo} type="video/mp4" />
        </video>

        {/* Crisp & Vibrant Water Overlay - allows natural turquoise water and sun ripples to shine through */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/35 to-white/70 pointer-events-none" />
        
        {/* Subtle Water Reflection Ambient Accent */}
        <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Trust Pill Badge (Sleek Glassmorphic Luxury Badge) */}
        <div className="inline-flex items-center space-x-2.5 px-4.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/80 hover:bg-white/95 backdrop-blur-md border border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-slate-800 text-xs sm:text-sm font-medium tracking-wide mb-7 transition-all duration-300">
          <div className="flex items-center space-x-1.5 text-sky-800 font-semibold">
            <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
            <span>CSLB #1023444</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center space-x-1 font-bold text-slate-900">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
            <span>5.0 Google Rating</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-slate-600 hidden sm:inline">Serving Fresno, Clovis, Visalia &amp; Beyond</span>
        </div>

        {/* Primary Semantic H1 */}
        <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-[-0.015em] leading-[1.18] sm:leading-[1.15] lg:leading-[1.12] max-w-5xl mb-6 drop-shadow-[0_2px_14px_rgba(255,255,255,0.95)]">
          Professional Pool &amp; Construction Services in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 [filter:drop-shadow(0_2px_10px_rgba(2,132,199,0.3))]">
            Central Valley
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-2xl leading-[1.7] mb-12 drop-shadow-[0_1px_8px_rgba(255,255,255,0.9)]">
          Licensed, insured, and trusted by homeowners across 20+ cities for custom new construction, replastering, and weekly maintenance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 hover:from-sky-500 hover:via-sky-400 hover:to-cyan-500 rounded-xl sm:rounded-2xl shadow-[0_10px_25px_-5px_rgba(2,132,199,0.4)] hover:shadow-[0_14px_30px_-5px_rgba(2,132,199,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2.5 group border border-white/20 tracking-wide"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-slate-900 hover:text-sky-600 bg-white/85 hover:bg-white border border-white/80 hover:border-sky-200 rounded-xl sm:rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(2,132,199,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2.5 backdrop-blur-md tracking-wide"
          >
            <Phone className="w-4.5 h-4.5 text-sky-600 animate-pulse" />
            <span>(559) 393-7981</span>
          </a>
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl pt-6 border-t border-slate-200/50">
          <div className="bg-white/80 hover:bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-sky-700">20+</span>
            <span className="text-xs font-normal text-slate-500 mt-1 text-center">Years Experience</span>
          </div>
          <div className="bg-white/80 hover:bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-sky-700">CSLB #1023444</span>
            <span className="text-xs font-normal text-slate-500 mt-1 text-center">Licensed &amp; Insured</span>
          </div>
          <div className="bg-white/80 hover:bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-amber-500 flex items-center">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline mr-1" />
              5.0
            </span>
            <span className="text-xs font-normal text-slate-500 mt-1 text-center">Google Reviews</span>
          </div>
          <div className="bg-white/80 hover:bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-sky-700">20+ Cities</span>
            <span className="text-xs font-normal text-slate-500 mt-1 text-center">Central Valley Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
