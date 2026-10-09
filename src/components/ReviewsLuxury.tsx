'use client';

import React from 'react';
import { Star, Quote, ExternalLink, MapPin } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '@/data/businessData';

export default function ReviewsLuxury() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] text-xs font-bold tracking-wider uppercase mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            5.0-Star Rated in Central Valley
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-xl mx-auto">
            Read authentic reviews from homeowners across Fresno, Clovis, Visalia, and Reedley who trusted Preheim Pools with their backyard investments.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {REVIEWS.slice(0, 6).map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-[4px] hover:border-sky-300 flex flex-col justify-between group"
            >
              <div>
                {/* Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-200 text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-sky-200 group-hover:text-[#0284c7] transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 font-normal leading-[1.7] mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">{review.name}</h4>
                  <div className="flex items-center space-x-1 text-xs text-slate-500 font-normal mt-0.5">
                    <MapPin className="w-3 h-3 text-[#0284c7]" />
                    <span>{review.location}</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-[#0284c7] bg-[#e0f2fe] px-2.5 py-1 rounded-full border border-sky-200">
                  Google Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Google Reviews Verification Badge */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.socialLinks.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-7 py-3.5 bg-white hover:bg-[#e0f2fe] border border-slate-200/90 text-[#0f172a] rounded-2xl font-bold text-sm tracking-wide shadow-xs transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Read All Verified Google Reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
