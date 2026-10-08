'use client';

import React from 'react';
import { ShieldCheck, Award, Wrench, CheckCircle2, XCircle, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/businessData';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-sky-600" />,
      title: "California Licensed Contractor",
      desc: "CSLB #1023444. Fully verified, bonded, and backed by comprehensive general liability and worker’s comp insurance for absolute peace of mind.",
    },
    {
      icon: <Award className="w-7 h-7 text-sky-600" />,
      title: "Over 20 Years Experience",
      desc: "Two decades mastering San Joaquin Valley soils, extreme summer heat chemistry, gunite curing, and seasonal pool behavior.",
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-sky-600" />,
      title: "Family Owned & Truly Local",
      desc: "Our shop is on Clayton Ave right here in Reedley. We aren't a distant franchise — when you call, you speak directly with our team.",
    },
    {
      icon: <Wrench className="w-7 h-7 text-sky-600" />,
      title: "Complete In-House Capabilities",
      desc: "From initial design and structural demolition to replastering, stone masonry, tile work, and automated electronics, we handle it all seamlessly.",
    },
  ];

  const comparisonRows = [
    {
      feature: "State Contractor License",
      preheim: "CSLB #1023444 (Verified Active)",
      others: "Often unlicensed or subcontracted",
    },
    {
      feature: "Central Valley Experience",
      preheim: "20+ Years Proven Track Record",
      others: "Unseasoned or high crew turnover",
    },
    {
      feature: "Water Chemistry Expertise",
      preheim: "Customized for 105°F+ Valley Summers",
      others: "Generic dosages leading to algae outbreaks",
    },
    {
      feature: "Owner Direct Accountability",
      preheim: "Robert & Sebastian hands-on oversight",
      others: "Hard to reach call centers",
    },
    {
      feature: "Scope of Services",
      preheim: "Construction, Plaster, Tile, Pumps, Turf & Patios",
      others: "Limited to simple cleaning only",
    },
  ];

  return (
    <section id="why-us" className="py-28 sm:py-36 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Proven Trust &amp; Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Homeowners Trust{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600">
              Preheim Pools
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-2xl mx-auto">
            Building or renovating a pool is a major investment. Here is how our two decades of craftsmanship protect your property and deliver lasting results.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 mb-24">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-100 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-[1.7]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5">
              The Preheim Standard vs. Typical Pool Companies
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              Transparent craftsmanship with no corner-cutting or hidden surprises.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-4.5 px-4 sm:px-6">Service Feature</th>
                  <th className="py-4.5 px-4 sm:px-6 text-sky-700 bg-sky-50/60 rounded-t-xl font-bold">
                    PREHEIM POOLS
                  </th>
                  <th className="py-4.5 px-4 sm:px-6 text-slate-400">Other Providers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-4 sm:px-6 font-semibold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="py-5 px-4 sm:px-6 bg-sky-50/40 text-slate-900 font-medium">
                      <span className="flex items-center space-x-1.5 text-sky-800 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                        <span>{row.preheim}</span>
                      </span>
                    </td>
                    <td className="py-5 px-4 sm:px-6 text-slate-500 font-normal">
                      <span className="flex items-center space-x-1.5 text-slate-400">
                        <XCircle className="w-4 h-4 text-slate-300 flex-shrink-0" />
                        <span>{row.others}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
