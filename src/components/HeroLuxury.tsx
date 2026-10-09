'use client';

import React from 'react';
import { ShieldCheck, Star, ArrowRight, Phone, Sparkles, MapPin, Award } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/businessData';

export default function HeroLuxury() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-900 py-24 sm:py-32">
      {/* 1. Immersive Video Canvas with Crystal Ambient Overlays */}
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

        {/* Clean, vibrant light overlay: maintains water color while making text 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/75 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
      </div>

      {/* 2. Hero Interactive Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Floating Verified Trust Pill */}
        <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] text-slate-800 text-xs sm:text-sm font-medium tracking-wide mb-8 transition-all duration-300">
          <div className="flex items-center space-x-1.5 text-sky-800 font-bold">
            <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
            <span>{BUSINESS_INFO.license}</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center space-x-1 font-bold text-slate-900">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
            <span>5.0 Google Rating</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-slate-600 hidden sm:inline flex items-center space-x-1">
            <MapPin className="w-3 h-3 text-sky-500 inline" />
            <span>Serving 20+ Central Valley Cities</span>
          </span>
        </div>

        {/* Main Luxury Headline */}
        <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-[-0.015em] leading-[1.15] sm:leading-[1.12] max-w-5xl mb-6 drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]">
          Architects of Luxury Pools &amp; Outdoor Living in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 [filter:drop-shadow(0_2px_10px_rgba(2,132,199,0.25))]">
            Central Valley
          </span>
        </h1>

        {/* Airy Paragraph */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-2xl leading-[1.75] mb-12 drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)]">
          Licensed, insured, and trusted for 20+ years in Fresno, Clovis, Visalia, and Reedley for bespoke gunite construction, master replastering, and weekly pool care.
        </p>

        {/* Dual Primary Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4.5 w-full sm:w-auto mb-16">
          <a
            href="#estimate-calculator"
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 hover:from-sky-500 hover:via-sky-400 hover:to-cyan-500 rounded-2xl shadow-[0_12px_30px_-5px_rgba(2,132,199,0.45)] hover:shadow-[0_18px_36px_-5px_rgba(2,132,199,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2.5 group border border-white/20 tracking-wide"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Instant Project Estimator</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-slate-900 hover:text-sky-600 bg-white/90 hover:bg-white border border-white/80 hover:border-sky-200 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_30px_rgba(2,132,199,0.18)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2.5 backdrop-blur-md tracking-wide"
          >
            <Phone className="w-4 h-4 text-sky-600 animate-pulse" />
            <span>Call (559) 393-7981</span>
          </a>
        </div>

        {/* 4 Interactive 3D Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-6 w-full max-w-4xl pt-8 border-t border-slate-200/50">
          <div className="bg-white/85 hover:bg-white backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky-700">20+</span>
            <span className="text-xs font-medium text-slate-600 mt-1 text-center">Years Experience</span>
          </div>

          <div className="bg-white/85 hover:bg-white backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
            <span className="text-base sm:text-lg font-bold text-sky-800">CSLB #1023444</span>
            <span className="text-xs font-medium text-slate-600 mt-1 text-center">Licensed &amp; Bonded</span>
          </div>

          <div className="bg-white/85 hover:bg-white backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-500 flex items-center">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline mr-1" />
              5.0
            </span>
            <span className="text-xs font-medium text-slate-600 mt-1 text-center">Verified Reviews</span>
          </div>

          <div className="bg-white/85 hover:bg-white backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky-700">20+</span>
            <span className="text-xs font-medium text-slate-600 mt-1 text-center">Cities Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
