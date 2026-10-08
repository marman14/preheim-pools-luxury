'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Images } from 'lucide-react';
import { HOMEPAGE_GALLERY_PHOTOS, ALL_49_CAROUSEL_IMAGES } from '@/data/businessData';

export default function GalleryCarousel() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const openFullGallery = (initialIndex: number = 0) => {
    setLightboxImageIndex(initialIndex);
    setIsGalleryOpen(true);
  };

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Work in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-xl mx-auto">
            See more pools we have built and serviced across the Central Valley.
          </p>
        </div>

        {/* 3-Column Grid Gallery (Exact 9 Pictures on Desktop: 3 rows of 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
          {HOMEPAGE_GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openFullGallery(photo.id - 1)}
              className="group relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Gradient & Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6">
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

                {/* Mobile Tap Hint Icon */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-900/60 backdrop-blur-md text-white sm:hidden pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Call to Action: Opens Full 49-Photo Gallery */}
        <div className="text-center">
          <button
            onClick={() => openFullGallery(0)}
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-700 text-sm font-bold border border-slate-200 hover:border-sky-200 shadow-xs transition-all hover:-translate-y-0.5"
          >
            <Images className="w-4 h-4 text-sky-600" />
            <span>View All Photos (49)</span>
          </button>
        </div>
      </div>

      {/* Full 49-Photo Gallery Modal (Keeps Homepage Clutter-Free) */}
      {isGalleryOpen && (
        <div
          onClick={() => setIsGalleryOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-3 max-w-6xl mx-auto w-full">
            <span className="text-sm font-semibold tracking-wide text-slate-300">
              Preheim Pools Portfolio • Image {lightboxImageIndex + 1} of 49
            </span>
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Main Stage Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-auto"
          >
            <button
              onClick={() => setLightboxImageIndex((prev) => (prev - 1 + 49) % 49)}
              className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white shadow-xl transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={`https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738158/preheim-pools/carousel/carousel-${lightboxImageIndex + 1}.png`}
              alt={`Preheim Pools photo ${lightboxImageIndex + 1}`}
              className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            <button
              onClick={() => setLightboxImageIndex((prev) => (prev + 1) % 49)}
              className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white shadow-xl transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl mx-auto w-full overflow-x-auto py-2 flex space-x-2"
          >
            {ALL_49_CAROUSEL_IMAGES.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setLightboxImageIndex(idx)}
                className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  lightboxImageIndex === idx
                    ? 'border-sky-400 scale-105 opacity-100'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
