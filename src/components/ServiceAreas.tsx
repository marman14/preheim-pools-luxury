'use client';

import React, { useState } from 'react';
import { MapPin, Phone, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOMEPAGE_SPOTLIGHT_CITIES, CITIES_SERVED_LIST, BUSINESS_INFO } from '@/data/businessData';

export default function ServiceAreas() {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);

  const activeCity = HOMEPAGE_SPOTLIGHT_CITIES[selectedCityIndex];

  return (
    <section id="service-areas" className="py-28 sm:py-36 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <span>Service Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Service Area
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-2xl mx-auto">
            Proudly providing pool construction, maintenance, renovation, and repair across 20+ cities in California’s Central Valley.
          </p>
        </div>

        {/* Featured City Spotlight Card (3 original cities: Reedley, Hanford, Visalia) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* City Image */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={activeCity.image}
                alt={`Pool services in ${activeCity.name}, CA`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sky-900/85 backdrop-blur-md text-white text-xs font-bold shadow-md">
                {activeCity.isHomeBase ? 'OUR HOME BASE' : 'SERVICE AREA'}
              </div>
            </div>

            {/* City Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Central Valley, California</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  Pool Services in {activeCity.name}, CA
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-[1.75] mb-7">
                  {activeCity.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center space-x-2 text-xs font-normal text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>Weekly Maintenance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-normal text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>New Construction</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-normal text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>Plaster &amp; Tile Remodel</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-normal text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>Equipment Repair</span>
                  </div>
                </div>
              </div>

              {/* City Switcher Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-5 border-t border-slate-100">
                {HOMEPAGE_SPOTLIGHT_CITIES.map((city, idx) => (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCityIndex(idx)}
                    className={`px-4.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                      activeCity.name === city.name
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Where We Serve Grid */}
        <div className="max-w-5xl mx-auto">
          <h4 className="text-center text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center justify-center space-x-2">
            <MapPin className="w-4 h-4 text-sky-600" />
            <span>Where We Serve (20+ Cities)</span>
          </h4>
          <div className="flex flex-wrap justify-center gap-2.5">
            {CITIES_SERVED_LIST.map((cityName) => (
              <span
                key={cityName}
                className="px-4 py-2 bg-white border border-slate-200/90 text-slate-600 rounded-xl text-xs font-normal shadow-xs"
              >
                {cityName}
              </span>
            ))}
          </div>

          {/* CTA Bar */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-left">
              <span className="text-base font-bold text-slate-900 block mb-0.5">
                Not sure if we serve your area?
              </span>
              <span className="text-xs text-slate-500 font-normal">
                Give us a call — we may be able to help!
              </span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2.5 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors whitespace-nowrap flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(559) 393-7981</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
