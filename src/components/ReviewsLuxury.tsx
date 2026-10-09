'use client';

import React from 'react';
import { Star, ShieldCheck, Quote, ExternalLink, MapPin } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '@/data/businessData';

export default function ReviewsLuxury() {
  return (
    <section id="reviews" className="py-28 sm:py-36 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            5.0-Star Rated in Central Valley
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.75] max-w-xl mx-auto">
            Read authentic reviews from homeowners across Fresno, Clovis, Visalia, and Reedley who trusted Preheim Pools with their backyard investments.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {REVIEWS.slice(0, 6).map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
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
                  <Quote className="w-6 h-6 text-sky-200 group-hover:text-sky-400 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 font-normal leading-[1.75] mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                  <div className="flex items-center space-x-1 text-xs text-slate-400 font-normal mt-0.5">
                    <MapPin className="w-3 h-3 text-sky-500" />
                    <span>{review.location}</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
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
            className="inline-flex items-center space-x-2.5 px-7 py-3.5 bg-white hover:bg-sky-50 border border-slate-200/90 text-slate-800 rounded-2xl font-bold text-sm tracking-wide shadow-xs transition-all duration-200 hover:shadow-md"
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
