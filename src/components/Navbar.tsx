'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Clock, ChevronDown, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '@/data/businessData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  return (
    <>
      {/* Top Banner Bar for Trust & License */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 text-sky-100 text-xs py-2 px-4 border-b border-sky-700/50 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>{BUSINESS_INFO.license} • Licensed, Bonded & Insured</span>
            </span>
            <span className="flex items-center space-x-1.5 text-sky-200">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>{BUSINESS_INFO.hours}</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sky-300">Serving Fresno, Clovis, Visalia, Reedley & 20+ Cities</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-white font-semibold hover:text-sky-300 transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-sky-100'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group flex-shrink-0">
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
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors leading-none">
                PREHEIM POOLS
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-sky-600 uppercase mt-1 leading-none">
                &amp; CONSTRUCTION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Working Services Dropdown */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Services with Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`px-3 py-2 text-[13px] xl:text-sm font-semibold rounded-lg transition-all flex items-center space-x-1.5 ${
                  isServicesOpen
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50/70'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  {SERVICES.map((svc) => (
                    <a
                      key={svc.id}
                      href={`#services`}
                      onClick={() => setIsServicesOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-sky-50/80 transition-colors group/item block"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover/item:text-sky-600 transition-colors block mb-0.5">
                        {svc.title}
                      </span>
                      <span className="text-[11px] text-slate-500 font-normal line-clamp-1 block">
                        {svc.shortDesc}
                      </span>
                    </a>
                  ))}
                  <div className="col-span-2 pt-2 mt-1 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">CSLB #1023444 Licensed Contractor</span>
                    <a
                      href="#services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-sky-600 font-bold hover:underline flex items-center space-x-1"
                    >
                      <span>View All 11 Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#before-after"
              className="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-lg transition-all whitespace-nowrap"
            >
              Before &amp; After
            </a>
            <a
              href="#estimate-calculator"
              className="px-3 py-2 text-[13px] xl:text-sm font-semibold text-sky-700 bg-sky-50/70 hover:bg-sky-100 hover:text-sky-800 rounded-lg transition-all whitespace-nowrap flex items-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Instant Estimate</span>
            </a>
            <a
              href="#gallery"
              className="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-lg transition-all whitespace-nowrap"
            >
              Gallery
            </a>
            <a
              href="#why-us"
              className="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-lg transition-all whitespace-nowrap"
            >
              Why Us
            </a>
            <a
              href="#service-areas"
              className="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-lg transition-all whitespace-nowrap"
            >
              Service Areas
            </a>
            <a
              href="#reviews"
              className="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-lg transition-all whitespace-nowrap"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-lg transition-all whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3 ml-4 xl:ml-6 flex-shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden xl:inline-flex items-center justify-center space-x-2 px-3.5 py-2 text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200/80 rounded-xl transition-all shadow-sm hover:shadow whitespace-nowrap flex-shrink-0"
            >
              <Phone className="w-4 h-4 text-sky-600 animate-pulse" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href="#estimate-calculator"
              className="inline-flex items-center justify-center space-x-1.5 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 rounded-xl transition-all shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 group whitespace-nowrap flex-shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 text-sky-600 bg-sky-50 rounded-lg sm:hidden"
              aria-label="Call Preheim Pools"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Accordion Services */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-sky-100 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full px-4 py-2.5 text-base font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>Services (11)</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl mb-2">
                    {SERVICES.map((s) => (
                      <a
                        key={s.id}
                        href="#services"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                        className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-sky-600 rounded"
                      >
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#before-after"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors"
              >
                Before &amp; After
              </a>
              <a
                href="#estimate-calculator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-bold text-sky-700 bg-sky-50/70 hover:bg-sky-100 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>Instant Estimate Calculator</span>
                <Sparkles className="w-4 h-4 text-sky-600" />
              </a>
              <a
                href="#gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors"
              >
                Gallery
              </a>
              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors"
              >
                Why Us
              </a>
              <a
                href="#service-areas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors"
              >
                Service Areas
              </a>
              <a
                href="#reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors"
              >
                Contact
              </a>

              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-3 text-center font-semibold text-sky-700 bg-sky-50 rounded-xl border border-sky-200/80 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (559) 393-7981</span>
                </a>
                <a
                  href="#estimate-calculator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 text-center font-semibold text-white bg-gradient-to-r from-sky-600 to-cyan-600 rounded-xl shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Get an Instant Quote</span>
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
