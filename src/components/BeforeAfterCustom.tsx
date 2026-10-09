'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, SlidersHorizontal, MapPin, Sparkles } from 'lucide-react';
import { AUTHENTIC_BEFORE_AFTER } from '@/data/businessData';

export default function BeforeAfterCustom() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0) return;
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="before-after" className="py-28 sm:py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Signature Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Interactive Before &amp; After Showcase
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.75] max-w-2xl mx-auto">
            Experience our craftsmanship firsthand. Drag the interactive slider to see how we revitalized an aged, stained pool in Selma, CA into a resort-worthy retreat.
          </p>
        </div>

        {/* Comparison Showcase Container */}
        <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-200/90 max-w-5xl mx-auto">
          {/* Slider Element */}
          <div
            ref={containerRef}
            role="slider"
            aria-label="Before and after pool renovation comparison slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none shadow-inner border border-slate-200 group focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            style={{
              touchAction: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
          >
            {/* 1. AFTER Image (Base Layer) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
              <img
                src={AUTHENTIC_BEFORE_AFTER.afterImage}
                alt={AUTHENTIC_BEFORE_AFTER.afterLabel}
                draggable={false}
                className="w-full h-full object-cover object-center pointer-events-none select-none"
              />
              <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full bg-sky-950/85 backdrop-blur-md text-white text-xs font-bold tracking-wider shadow-md border border-white/20 pointer-events-none select-none">
                AFTER: FINISHED POOL
              </div>
            </div>

            {/* 2. BEFORE Image (Clipped Reveal Layer) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={AUTHENTIC_BEFORE_AFTER.beforeImage}
                alt={AUTHENTIC_BEFORE_AFTER.beforeLabel}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none',
                  height: '100%',
                }}
              />
              <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold tracking-wider shadow-md border border-white/20 pointer-events-none select-none">
                BEFORE: WORN PLASTER
              </div>
            </div>

            {/* 3. Divider Line & Interactive Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none select-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-1 h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] -ml-0.5 pointer-events-none" />

              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-2xl border-2 border-sky-500 flex items-center justify-center text-sky-700 pointer-events-none transition-transform duration-100 group-hover:scale-105">
                <div className="flex items-center space-x-0.5 text-sky-600">
                  <ChevronLeft className="w-4 h-4 -mr-1" />
                  <ChevronRight className="w-4 h-4 -ml-1" />
                </div>
              </div>

              <div className="absolute bottom-4 -translate-x-1/2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-[11px] font-bold text-white whitespace-nowrap shadow-md pointer-events-none select-none border border-white/10">
                {Math.round(sliderPosition)}% View
              </div>
            </div>
          </div>

          {/* Subtext Controls Guide */}
          <div className="flex items-center justify-between text-xs text-slate-500 mt-4 px-2">
            <span className="font-semibold text-slate-700">BEFORE: Selma Pool (Drained &amp; Chipped)</span>
            <span className="flex items-center space-x-1.5 text-slate-500 font-medium hidden sm:flex">
              <SlidersHorizontal className="w-3.5 h-3.5 text-sky-500" />
              <span>Drag handle left or right to inspect finish</span>
            </span>
            <span className="font-semibold text-sky-700">AFTER: Smooth Marcite &amp; Royal Blue Tile</span>
          </div>

          {/* Detailed Project Story Card */}
          <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{AUTHENTIC_BEFORE_AFTER.location} • {AUTHENTIC_BEFORE_AFTER.serviceType}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5">
                {AUTHENTIC_BEFORE_AFTER.title}
              </h3>
              <p className="text-sm text-slate-600 font-normal leading-[1.75]">
                {AUTHENTIC_BEFORE_AFTER.description}
              </p>
            </div>

            {/* Scope Bullets */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs">
              <span className="text-xs font-bold text-sky-900 uppercase tracking-wider block mb-3.5">
                Key Scope of Work
              </span>
              <ul className="space-y-3">
                {AUTHENTIC_BEFORE_AFTER.highlights.map((scope, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-normal text-slate-600 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#estimate-calculator"
                className="mt-6 w-full py-2.5 px-3 text-center text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors block shadow-xs"
              >
                Estimate Similar Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
