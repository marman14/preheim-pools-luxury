'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MapPin, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '@/data/businessData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-2xl p-1.5 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Preheim Pools Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  PREHEIM POOLS
                </span>
                <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider block">
                  &amp; Construction • CSLB #1023444
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-normal leading-[1.7] max-w-sm">
              Just a Splash Away! Elevating Central Valley backyards for over 20 years with custom gunite pools, luxury replastering, waterline tile cleaning, and dependable weekly service.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.license} • Licensed, Bonded &amp; Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Core Services Column */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-xs font-normal text-slate-400">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-sky-400 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-sky-400 hover:text-sky-300 font-semibold">
                  View All 11 Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-xs font-normal text-slate-400">
              <li>
                <a href="#before-after" className="hover:text-sky-400 transition-colors">
                  Before &amp; After Showcase
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-400 transition-colors">
                  Why Choose Preheim Pools
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-sky-400 transition-colors">
                  Pool Photo Gallery (49)
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-sky-400 transition-colors">
                  Central Valley Service Areas
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-400 transition-colors">
                  Google Customer Reviews (5.0 ★)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Request Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas Summary */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Service Areas
            </h4>
            <p className="text-xs text-slate-400 font-normal leading-relaxed mb-3">
              Serving 20+ cities throughout Fresno, Tulare, and Kings Counties:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300 font-normal">
              <span className="bg-slate-800 px-2 py-0.5 rounded">Reedley (HQ)</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Fresno</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Clovis</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Visalia</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Hanford</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Dinuba</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Tulare</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Kingsburg</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Selma</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Preheim Pools &amp; Construction. All rights reserved. CSLB #1023444.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href={BUSINESS_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              Facebook
            </a>
            <span>•</span>
            <a
              href={BUSINESS_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-sky-400 hover:text-sky-300 font-semibold ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
