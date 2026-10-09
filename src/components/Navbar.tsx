'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Phone,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronDown,
  Sparkles,
  Layers,
  Wrench,
  Droplets,
  Award,
  MapPin
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '@/data/businessData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 180);
  };

  const constructionServices = SERVICES.filter((s) =>
    ['custom-pool-construction', 'pool-spas', 'pool-decking-patios'].includes(s.id)
  );
  const renovationServices = SERVICES.filter((s) =>
    ['pool-replastering', 'tile-cleaning', 'pool-equipment'].includes(s.id)
  );
  const maintenanceServices = SERVICES.filter((s) =>
    ['weekly-pool-service', 'commercial-pool-service', 'energy-efficient-pumps'].includes(s.id)
  );

  return (
    <>
      {/* 1. Light Luxury Credentials Top Bar (Zero Dark Blocks) */}
      <div className="bg-[#f8fafc] text-slate-600 text-xs py-2.5 px-4 border-b border-slate-200/90 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 font-medium tracking-wide text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0284c7] flex-shrink-0" />
              <span>
                <strong className="text-[#0f172a] font-semibold">{BUSINESS_INFO.license}</strong> • Licensed, Bonded &amp; Insured California Pool Contractor
              </span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-[#0284c7] flex-shrink-0" />
              <span>{BUSINESS_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-slate-600 font-medium flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Serving Fresno, Clovis, Visalia, Reedley &amp; 20+ Cities</span>
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[#0f172a] font-bold hover:text-[#0284c7] transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3 h-3 text-[#0284c7]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Glassmorphic Sticky Luxury Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(15,23,42,0.05)] py-3.5 border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-sm py-4.5 border-b border-slate-100/90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Identification */}
          <a href="#" className="flex items-center space-x-3.5 group flex-shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Preheim Pools & Construction Logo"
                width={48}
                height={48}
                className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0f172a] group-hover:text-[#0284c7] transition-colors leading-none">
                PREHEIM POOLS
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#0284c7] uppercase mt-1 leading-none">
                &amp; CONSTRUCTION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Mega Dropdown for Services */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-all flex items-center space-x-1.5 ${
                  isServicesDropdownOpen
                    ? 'text-[#0284c7] bg-[#e0f2fe]'
                    : 'text-[#0f172a] hover:text-[#0284c7] hover:bg-slate-50'
                }`}
                aria-expanded={isServicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180 text-[#0284c7]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Categorized Mega Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[660px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/80 p-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Category 1: Construction */}
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#0284c7] uppercase tracking-wider mb-3 pb-1 border-b border-sky-100">
                        <Layers className="w-3.5 h-3.5 text-[#0284c7]" />
                        <span>New Builds</span>
                      </div>
                      <div className="space-y-1.5">
                        {constructionServices.map((svc) => (
                          <a
                            key={svc.id}
                            href="#services"
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="block p-2 rounded-xl hover:bg-[#f8fafc] transition-colors group/item"
                          >
                            <span className="text-xs font-bold text-[#0f172a] group-hover/item:text-[#0284c7] transition-colors block leading-tight">
                              {svc.title}
                            </span>
                            <span className="text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                              {svc.shortDesc}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Category 2: Renovation & Replastering */}
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#0284c7] uppercase tracking-wider mb-3 pb-1 border-b border-sky-100">
                        <Wrench className="w-3.5 h-3.5 text-[#0284c7]" />
                        <span>Renovation</span>
                      </div>
                      <div className="space-y-1.5">
                        {renovationServices.map((svc) => (
                          <a
                            key={svc.id}
                            href="#services"
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="block p-2 rounded-xl hover:bg-[#f8fafc] transition-colors group/item"
                          >
                            <span className="text-xs font-bold text-[#0f172a] group-hover/item:text-[#0284c7] transition-colors block leading-tight">
                              {svc.title}
                            </span>
                            <span className="text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                              {svc.shortDesc}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Category 3: Care & Maintenance */}
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#0284c7] uppercase tracking-wider mb-3 pb-1 border-b border-sky-100">
                        <Droplets className="w-3.5 h-3.5 text-[#0284c7]" />
                        <span>Maintenance</span>
                      </div>
                      <div className="space-y-1.5">
                        {maintenanceServices.map((svc) => (
                          <a
                            key={svc.id}
                            href="#services"
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="block p-2 rounded-xl hover:bg-[#f8fafc] transition-colors group/item"
                          >
                            <span className="text-xs font-bold text-[#0f172a] group-hover/item:text-[#0284c7] transition-colors block leading-tight">
                              {svc.title}
                            </span>
                            <span className="text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                              {svc.shortDesc}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mega Dropdown Footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs bg-[#f8fafc] -mx-6 -mb-6 p-4 rounded-b-3xl">
                    <span className="text-slate-600 font-medium flex items-center space-x-1.5">
                      <Award className="w-4 h-4 text-[#0284c7]" />
                      <span>CSLB #1023444 Verified Licensed Contractor</span>
                    </span>
                    <a
                      href="#services"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="text-[#0284c7] font-bold hover:underline flex items-center space-x-1 transition-colors"
                    >
                      <span>Explore All 11 Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#before-after"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0284c7] hover:bg-slate-50 rounded-xl transition-all whitespace-nowrap"
            >
              Before &amp; After
            </a>

            <a
              href="#gallery"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0284c7] hover:bg-slate-50 rounded-xl transition-all whitespace-nowrap"
            >
              Gallery
            </a>

            <a
              href="#estimate-calculator"
              className="px-3.5 py-2 text-sm font-semibold text-[#0284c7] bg-[#e0f2fe] hover:bg-sky-100 rounded-xl transition-all whitespace-nowrap flex items-center space-x-1.5 border border-sky-200/60"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Estimator</span>
            </a>

            <a
              href="#why-us"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0284c7] hover:bg-slate-50 rounded-xl transition-all whitespace-nowrap"
            >
              Why Us
            </a>

            <a
              href="#service-areas"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0284c7] hover:bg-slate-50 rounded-xl transition-all whitespace-nowrap"
            >
              Service Areas
            </a>

            <a
              href="#reviews"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0284c7] hover:bg-slate-50 rounded-xl transition-all whitespace-nowrap"
            >
              Reviews
            </a>

            <a
              href="#contact"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0284c7] hover:bg-slate-50 rounded-xl transition-all whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Action Call & Consultation Buttons */}
          <div className="hidden lg:flex items-center space-x-3 ml-4 flex-shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden xl:inline-flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold text-[#0284c7] bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-xs whitespace-nowrap hover:-translate-y-[2px]"
            >
              <Phone className="w-4 h-4 text-[#0284c7]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href="#estimate-calculator"
              className="inline-flex items-center justify-center space-x-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-[2px] group whitespace-nowrap"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2.5 text-[#0284c7] bg-[#e0f2fe] rounded-xl sm:hidden border border-sky-100"
              aria-label="Call Preheim Pools"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-[#0284c7] hover:bg-slate-100 focus:outline-none border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-5 pt-4 pb-8 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex flex-col space-y-1.5">
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-[#0f172a] hover:bg-slate-50 hover:text-[#0284c7] rounded-xl transition-colors flex items-center justify-between"
              >
                <span>Services (11 Offerings)</span>
                <ChevronDown className="w-4 h-4 text-[#0284c7]" />
              </a>

              <a
                href="#estimate-calculator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-bold text-[#0284c7] bg-[#e0f2fe] rounded-xl transition-colors flex items-center justify-between border border-sky-200/60"
              >
                <span>Instant Project Estimator</span>
                <Sparkles className="w-4 h-4 text-[#0284c7]" />
              </a>

              <a
                href="#before-after"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0284c7] rounded-xl transition-colors"
              >
                Before &amp; After Showcase
              </a>

              <a
                href="#gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0284c7] rounded-xl transition-colors"
              >
                Project Gallery (49 Photos)
              </a>

              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0284c7] rounded-xl transition-colors"
              >
                Why Choose Us (CSLB #1023444)
              </a>

              <a
                href="#service-areas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0284c7] rounded-xl transition-colors"
              >
                Central Valley Service Areas (20+)
              </a>

              <a
                href="#reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0284c7] rounded-xl transition-colors"
              >
                Verified Google Reviews (5.0 ★)
              </a>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0284c7] rounded-xl transition-colors"
              >
                Contact &amp; Consultation
              </a>

              <div className="pt-5 mt-2 border-t border-slate-100 flex flex-col space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-3.5 text-center font-bold text-[#0284c7] bg-[#f8fafc] border border-slate-200 rounded-2xl flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-[#0284c7]" />
                  <span>Call (559) 393-7981</span>
                </a>

                <a
                  href="#estimate-calculator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3.5 text-center font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-2xl shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Calculate Instant Price</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
