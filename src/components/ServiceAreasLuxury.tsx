'use client';

import React, { useState } from 'react';
import { MapPin, Search, Phone, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { CITIES_SERVED, BUSINESS_INFO } from '@/data/businessData';

export default function ServiceAreasLuxury() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = CITIES_SERVED.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="service-areas" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] text-xs font-bold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Central Valley Service Routes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Serving 20+ Communities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-xl mx-auto">
            Headquartered in Reedley, CA, our crews service homeowners across Fresno, Tulare, and Kings Counties with reliable pool construction, replastering, and chemistry maintenance.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your city (e.g., Fresno, Clovis, Visalia)..."
            className="w-full pl-12 pr-4 py-3.5 bg-[#f8fafc] border border-slate-200/90 rounded-2xl text-sm text-[#0f172a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white transition-all shadow-xs"
          />
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 max-w-6xl mx-auto mb-16">
          {filteredCities.map((city, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all duration-200 flex items-center space-x-2.5 ${
                city.isHomeBase
                  ? 'bg-[#0284c7] text-white border-[#0284c7] shadow-sm'
                  : city.highlighted
                  ? 'bg-[#e0f2fe] border-sky-200 text-[#0284c7] font-semibold'
                  : 'bg-[#f8fafc] hover:bg-white border-slate-200/90 text-slate-700 hover:shadow-sm'
              }`}
            >
              {city.isHomeBase ? (
                <Building2 className="w-4 h-4 text-white flex-shrink-0" />
              ) : (
                <MapPin className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
              )}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold truncate">{city.name}</span>
                {city.isHomeBase && (
                  <span className="text-[10px] text-sky-100 font-medium">Headquarters</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Route Inquiries Banner (Clean Light Luxury Card - Zero Dark Blocks) */}
        <div className="bg-[#f8fafc] border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-[#0f172a] text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3">
              Don&apos;t See Your Location Listed?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-[1.7] max-w-xl mx-auto mb-8">
              We frequently travel throughout rural Fresno, Tulare, and Kings counties for custom pool builds and major resurfacing projects. Call us directly to confirm service availability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#0f172a] hover:text-[#0284c7] border border-slate-200 hover:border-sky-300 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-[2px] flex items-center justify-center space-x-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#0284c7]" />
                <span>Call (559) 393-7981</span>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-[2px] flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Request Service Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
