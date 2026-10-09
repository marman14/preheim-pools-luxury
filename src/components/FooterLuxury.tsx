'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUp, Star } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, CITIES_SERVED } from '@/data/businessData';

export default function FooterLuxury() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm pt-20 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Col 1: Brand & Licensing (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Preheim Pools Logo"
                  width={48}
                  height={48}
                  className="object-contain brightness-110"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block leading-none">
                  PREHEIM POOLS
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-sky-400 uppercase mt-1 block leading-none">
                  &amp; CONSTRUCTION
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-normal leading-[1.8] max-w-sm">
              Central Valley&apos;s premier licensed swimming pool contractor. Specializing in luxury gunite builds, smooth Marcite replastering, waterline tile restoration, and dedicated chemical maintenance.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>CSLB #1023444</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-300 font-medium">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 Rating (48 Reviews)</span>
              </span>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-xs font-normal">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Custom Gunite Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Pool Replastering &amp; Marcite Finish
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Waterline Tile &amp; Calcium Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Integrated Spas &amp; Spillways
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Travertine &amp; Safety Coping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Weekly Chemical Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Energy-Efficient Pump Upgrades
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Sitemap (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5 text-xs font-normal">
              <li>
                <a href="#before-after" className="hover:text-sky-400 transition-colors">
                  Before &amp; After
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-sky-400 transition-colors">
                  Portfolio Gallery (49)
                </a>
              </li>
              <li>
                <a href="#estimate-calculator" className="hover:text-sky-400 transition-colors">
                  Instant Project Estimator
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-400 transition-colors">
                  Why Preheim Pools
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-sky-400 transition-colors">
                  Cities Served (20+)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Request Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contractor Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-3.5 text-xs font-normal">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-start space-x-2.5 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>

              <div className="flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>California State License Board CSLB #1023444</span>
              </div>
            </div>
          </div>
        </div>

        {/* Central Valley Cities Served Badges */}
        <div className="py-8 border-b border-slate-800/80">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
            Service Routes:
          </span>
          <div className="flex flex-wrap gap-2 text-xs text-slate-400">
            {CITIES_SERVED.map((c, i) => (
              <span key={i} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg">
                {c.name} {c.isHomeBase ? '(HQ)' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Preheim Pools &amp; Construction. All rights reserved. CSLB #1023444.</p>

          <div className="flex items-center space-x-5">
            <a
              href={BUSINESS_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href={BUSINESS_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              Instagram
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-sky-400 hover:text-sky-300 font-semibold ml-2 transition-colors"
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
