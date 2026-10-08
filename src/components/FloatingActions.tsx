'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO } from '@/data/businessData';
import { Check } from 'lucide-react';

export default function FloatingActions() {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    const shareData = {
      title: 'Preheim Pools & Construction',
      text: 'Professional pool construction, maintenance, and outdoor living in Central Valley, CA. CSLB #1023444.',
      url: typeof window !== 'undefined' ? window.location.href : 'https://preheim-pools.vercel.app',
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // Fallback to clipboard if user dismissed or cancelled share
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        // Clipboard write fallback
      }
    }
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#contact';
    }
  };

  return (
    <>
      <nav
        aria-label="Quick contact actions"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5 sm:gap-2 py-2 select-none"
      >
        {/* 1. Phone Button (Royal Blue) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label="Call Preheim Pools"
          className="group relative flex items-center h-11 w-11 sm:h-12 sm:w-12 sm:hover:w-36 rounded-r-2xl sm:rounded-r-full bg-[#1a73e8] hover:bg-[#1557b0] text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)] hover:shadow-[0_6px_22px_rgba(26,115,232,0.45)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden pl-3"
        >
          <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
          </span>
          <span className="hidden sm:inline-block ml-3 text-xs font-semibold tracking-wide text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            Call Now
          </span>
        </a>

        {/* 2. WhatsApp Button (WhatsApp Green) */}
        <a
          href="https://wa.me/15593937981?text=Hi!%20I%20found%20you%20on%20preheimpools.com%20and%20would%20like%20to%20get%20more%20information%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center h-11 w-11 sm:h-12 sm:w-12 sm:hover:w-36 rounded-r-2xl sm:rounded-r-full bg-[#25d366] hover:bg-[#1da851] text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.45)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden pl-3"
        >
          <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          <span className="hidden sm:inline-block ml-3 text-xs font-semibold tracking-wide text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            WhatsApp
          </span>
        </a>

        {/* 3. Document / Get Quote Button (Crimson Red) */}
        <a
          href="#contact"
          onClick={handleQuoteClick}
          aria-label="Get a Quote"
          className="group relative flex items-center h-11 w-11 sm:h-12 sm:w-12 sm:hover:w-36 rounded-r-2xl sm:rounded-r-full bg-[#ea4335] hover:bg-[#c5221f] text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)] hover:shadow-[0_6px_22px_rgba(234,67,53,0.45)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden pl-3"
        >
          <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
          </span>
          <span className="hidden sm:inline-block ml-3 text-xs font-semibold tracking-wide text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            Get Quote
          </span>
        </a>

        {/* 4. Review Us Button (Amber / Warm Yellow with Dark Star Outline) */}
        <a
          href={BUSINESS_INFO.socialLinks.googleReview}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leave a Google Review"
          className="group relative flex items-center h-11 w-11 sm:h-12 sm:w-12 sm:hover:w-36 rounded-r-2xl sm:rounded-r-full bg-[#f9ab00] hover:bg-[#e89e00] text-slate-900 shadow-[0_4px_14px_rgba(0,0,0,0.22)] hover:shadow-[0_6px_22px_rgba(249,171,0,0.45)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden pl-3"
        >
          <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-slate-900 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </span>
          <span className="hidden sm:inline-block ml-3 text-xs font-bold tracking-wide text-slate-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            Review Us
          </span>
        </a>

        {/* 5. Share Button (Vibrant Green) */}
        <button
          onClick={handleShare}
          type="button"
          aria-label="Share Page"
          className="group relative flex items-center h-11 w-11 sm:h-12 sm:w-12 sm:hover:w-36 rounded-r-2xl sm:rounded-r-full bg-[#34a853] hover:bg-[#2d7a3a] text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)] hover:shadow-[0_6px_22px_rgba(52,168,83,0.45)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden pl-3 cursor-pointer text-left"
        >
          <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
            {copied ? (
              <Check className="w-5 h-5 text-white" />
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                aria-hidden="true"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            )}
          </span>
          <span className="hidden sm:inline-block ml-3 text-xs font-semibold tracking-wide text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            {copied ? 'Copied!' : 'Share'}
          </span>
        </button>
      </nav>

      {/* Toast Notification when Copied */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 backdrop-blur-md text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full shadow-2xl flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Website link copied to clipboard!</span>
        </div>
      )}
    </>
  );
}
