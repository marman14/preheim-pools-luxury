'use client';

import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/businessData';

const PILLARS = [
  {
    icon: <ShieldCheck className="w-8 h-8 stroke-[1.8]" />,
    badge: 'CSLB #1023444',
    title: 'Licensed, Bonded & Insured',
    description:
      'Zero liability risk. We carry complete California contractor licensing, general liability, and workers compensation coverage for your total peace of mind.',
    points: ['Verified California CSLB #1023444', 'Active Bond & Full Liability Coverage', 'Strict Adherence to Safety Codes'],
  },
  {
    icon: <Award className="w-8 h-8 stroke-[1.8]" />,
    badge: '20+ Years Excellence',
    title: 'Master Gunite & Plaster Craft',
    description:
      'Two decades of specialized pool building and resurfacing. We use industry-benchmark Marcite plaster mixes and premium waterline glass tile for lifelong endurance.',
    points: ['20+ Years Central Valley Experience', 'Commercial-Grade Plaster Formulations', 'Expert Inground Structural Engineering'],
  },
  {
    icon: <HeartHandshake className="w-8 h-8 stroke-[1.8]" />,
    badge: 'Family Owned & Operated',
    title: 'Direct Contractor Oversight',
    description:
      'No middlemen or detached corporate sales reps. You speak directly with the builder who inspects your site, oversees the crews, and guarantees craftsmanship.',
    points: ['Direct Contractor Accessibility', 'Transparent, Itemized Pricing', 'Honest Timelines & Realistic Milestones'],
  },
  {
    icon: <Clock className="w-8 h-8 stroke-[1.8]" />,
    badge: 'Turnkey Execution',
    title: 'Seamless Design to Startup',
    description:
      'From city permitting and excavation to water balancing and automated equipment startup, our in-house team handles every single detail with precision.',
    points: ['Fast-Track City Permitting', 'Clean Jobsite Protocol', 'Complete Chemical Balancing at Startup'],
  },
];

export default function WhyChooseUsLuxury() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>The Preheim Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Why Central Valley Chooses Preheim Pools
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-xl mx-auto">
            Investing in a custom pool or replastering project requires confidence. Here is how our licensing, family values, and craftsmanship protect your investment.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] hover:bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-[4px] hover:border-sky-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#e0f2fe] border border-sky-200 text-[#0284c7] flex items-center justify-center group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-xs">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-[#0284c7] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-[1.7] mb-6">
                  {pillar.description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-6 border-t border-slate-200/80">
                {pillar.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center space-x-2.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
