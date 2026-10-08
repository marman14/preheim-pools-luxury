'use client';

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { HOMEPAGE_FEATURED_PROJECTS } from '@/data/businessData';

export default function FeaturedProjects() {
  return (
    <section className="py-28 sm:py-36 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <span>Completed Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Recent Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-xl mx-auto">
            See what we have built for homeowners and communities across the Central Valley.
          </p>
        </div>

        {/* 3 Featured Project Cards (Synchronized with original homepage) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-9 max-w-6xl mx-auto mb-14">
          {HOMEPAGE_FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wide shadow-md">
                  {project.category}
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-sky-600 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold shadow-md shadow-sky-600/25 transition-all"
          >
            <span>Discuss Your Project With Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
