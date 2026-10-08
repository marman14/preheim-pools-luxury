'use client';

import React from 'react';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '@/data/businessData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 sm:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>5.0 · Google Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-xl mx-auto">
            Real reviews from pool owners across the Central Valley.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-16">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-slate-50/70 rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-slate-400 ml-2">5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm font-normal leading-[1.7] mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Footnote */}
              <div className="pt-5 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-900 text-sm block">
                    {review.name}
                  </span>
                  <span className="text-xs text-sky-600 font-normal">
                    {review.location}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  <span className="text-blue-500 font-bold">G</span>
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Google Review Action */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.socialLinks.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-2xl bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-700 text-xs sm:text-sm font-bold border border-slate-200 transition-all shadow-xs"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Leave Us a Google Review</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
