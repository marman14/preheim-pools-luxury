'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroVideo from '@/components/HeroVideo';
import BeforeAfter from '@/components/BeforeAfter';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import GalleryCarousel from '@/components/GalleryCarousel';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServiceAreas from '@/components/ServiceAreas';
import Reviews from '@/components/Reviews';
import EstimateCalculator from '@/components/EstimateCalculator';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { FAQS, BUSINESS_INFO } from '@/data/businessData';
import { ChevronDown, Phone, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-sky-100 selection:text-sky-900">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Full-Screen Video Hero */}
        <HeroVideo />

        {/* 3. Flagship Before & After Comparison Slider */}
        <BeforeAfter />

        {/* 4. Core Services Grid (11 Services with Line-Art SVG Icons) */}
        <ServicesGrid />

        {/* 5. Trust & Credentials (CSLB #1023444) */}
        <WhyChooseUs />

        {/* 6. Carousel of Work (8 Original Slides + Full 49-Photo Modal) */}
        <GalleryCarousel />

        {/* 7. Featured Recent Projects (3 Authentic Projects) */}
        <FeaturedProjects />

        {/* 8. Service Areas Spotlight (20+ Central Valley Cities) */}
        <ServiceAreas />

        {/* 9. Verified Google Reviews (5.0 Rating) */}
        <Reviews />

        {/* 10. Frequently Asked Questions */}
        <section className="py-28 sm:py-36 bg-slate-50 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Pool Construction &amp; Care FAQs
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-xl mx-auto">
                Common questions about licensing, replastering timelines, and service routes in the Central Valley.
              </p>
            </div>

            <div className="space-y-4.5">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-6 px-7 text-left font-semibold text-slate-900 flex items-center justify-between hover:text-sky-600 transition-colors"
                  >
                    <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-sky-600 flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-7 pb-7 pt-2 text-sm text-slate-600 font-normal leading-[1.75] border-t border-slate-100 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Interactive Instant Pool Project Estimator */}
        <EstimateCalculator />

        {/* 12. Quote Request Form & Direct Contact Info */}
        <ContactSection />
      </main>

      {/* 12. Modernized Clean Footer */}
      <Footer />

      {/* Floating Side Action Buttons (Phone, WhatsApp, Quote, Reviews, Share) */}
      <FloatingActions />
    </div>
  );
}
