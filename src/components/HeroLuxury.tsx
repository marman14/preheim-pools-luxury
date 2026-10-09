'use client';

import React, { useState, useRef } from 'react';
import { ShieldCheck, Star, ArrowRight, Phone, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/businessData';

export default function HeroLuxury() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Subtle 3D tilt angle
    const maxTilt = 4;
    setTilt({
      x: -(y / (rect.height / 2)) * maxTilt,
      y: (x / (rect.width / 2)) * maxTilt,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-white py-20 sm:py-28"
    >
      {/* 1. Light Ambient Luxury Water Canvas (No Dark Blocks, No Heavy Overlays) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={BUSINESS_INFO.heroPoster}
          className="w-full h-full object-cover opacity-20 filter contrast-105"
        >
          <source src={BUSINESS_INFO.heroVideo} type="video/mp4" />
        </video>

        {/* Soft Radial Ambient Pool Glow */}
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* 2. Interactive 3D Perspective Hero Content */}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Floating Trust Pill */}
        <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-white/95 border border-slate-200/90 shadow-sm text-slate-700 text-xs sm:text-sm font-medium mb-8 hover:-translate-y-0.5 transition-transform duration-300">
          <div className="flex items-center space-x-1.5 text-[#0284c7] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
            <span>{BUSINESS_INFO.license}</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center space-x-1 font-semibold text-[#0f172a]">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
            <span>5.0 Google Rating</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-slate-600 hidden sm:inline flex items-center space-x-1">
            <MapPin className="w-3.5 h-3.5 text-[#0284c7] inline" />
            <span>Serving Central Valley, CA</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0f172a] tracking-tight leading-[1.14] max-w-5xl mb-6">
          Architects of Luxury Pools &amp; Outdoor Living in{' '}
          <span className="text-[#0284c7]">
            Central Valley
          </span>
        </h1>

        {/* Airy Paragraph */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-[1.7] mb-12">
          Licensed, bonded, and trusted for 20+ years across Fresno, Clovis, Visalia, and Reedley for bespoke gunite pool construction, master replastering, and weekly pool care.
        </p>

        {/* Dual Primary Call-to-Action Buttons with -3px Hover Lift */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#estimate-calculator"
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-[3px] active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2.5 group"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Instant Project Estimator</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-[#0f172a] hover:text-[#0284c7] bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-[3px] active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2.5"
          >
            <Phone className="w-4 h-4 text-[#0284c7]" />
            <span>Call (559) 393-7981</span>
          </a>
        </div>

        {/* 4 Interactive 3D Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl pt-10 border-t border-slate-200/80">
          <div className="bg-white/95 p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-[4px] hover:border-sky-300 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0284c7]">20+</span>
            <span className="text-xs font-medium text-slate-600 mt-1.5 text-center">Years Experience</span>
          </div>

          <div className="bg-white/95 p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-[4px] hover:border-sky-300 flex flex-col items-center">
            <span className="text-base sm:text-lg font-bold text-[#0f172a]">CSLB #1023444</span>
            <span className="text-xs font-medium text-slate-600 mt-1.5 text-center">Licensed &amp; Bonded</span>
          </div>

          <div className="bg-white/95 p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-[4px] hover:border-sky-300 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-500 flex items-center">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline mr-1" />
              5.0
            </span>
            <span className="text-xs font-medium text-slate-600 mt-1.5 text-center">Verified Reviews</span>
          </div>

          <div className="bg-white/95 p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-[4px] hover:border-sky-300 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0284c7]">20+</span>
            <span className="text-xs font-medium text-slate-600 mt-1.5 text-center">Cities Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
