'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Images, Sparkles } from 'lucide-react';
import { HOMEPAGE_GALLERY_PHOTOS, ALL_49_CAROUSEL_IMAGES } from '@/data/businessData';

export default function GalleryGrid() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % ALL_49_CAROUSEL_IMAGES.length);
  };

  const showPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + ALL_49_CAROUSEL_IMAGES.length) % ALL_49_CAROUSEL_IMAGES.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Master Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Craftsmanship in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.75] max-w-xl mx-auto">
            A curated showcase of recent gunite pool builds, custom spas, and luxury replastering projects across Central Valley.
          </p>
        </div>

        {/* 3-Column Grid (Exact 9 Authentic Pictures on Desktop: 3 rows of 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
          {HOMEPAGE_GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(2,132,199,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Gradient & Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <span className="text-xs text-sky-300 font-semibold uppercase tracking-wider block mb-0.5">
                        Preheim Pools
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white drop-shadow-sm">
                        {photo.title}
                      </h4>
                    </div>
                    <span className="p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md transition-all shadow-md">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to View Full 49-Photo Portfolio */}
        <div className="text-center">
          <button
            onClick={() => openLightbox(0)}
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-slate-900 hover:bg-sky-600 text-white rounded-2xl font-bold text-sm tracking-wide shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            <Images className="w-4 h-4 text-sky-400" />
            <span>Browse Full Portfolio (49 Project Photos)</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal (All 49 Photos with Keyboard Controls) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous Photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next Photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Image & Caption Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={ALL_49_CAROUSEL_IMAGES[currentImageIndex].url}
              alt={ALL_49_CAROUSEL_IMAGES[currentImageIndex].alt}
              className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />

            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-wider text-sky-400 font-bold block mb-1">
                Photo {currentImageIndex + 1} of {ALL_49_CAROUSEL_IMAGES.length}
              </span>
              <p className="text-sm sm:text-base font-semibold">
                {ALL_49_CAROUSEL_IMAGES[currentImageIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
