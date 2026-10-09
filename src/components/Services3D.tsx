'use client';

import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  Waves,
  Brush,
  Wrench,
  Activity,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Zap,
  Hammer
} from 'lucide-react';
import { SERVICES, ServiceItem } from '@/data/businessData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 stroke-[1.8]" />,
  Sparkles: <Sparkles className="w-6 h-6 stroke-[1.8]" />,
  Waves: <Waves className="w-6 h-6 stroke-[1.8]" />,
  Brush: <Brush className="w-6 h-6 stroke-[1.8]" />,
  Wrench: <Wrench className="w-6 h-6 stroke-[1.8]" />,
  Activity: <Activity className="w-6 h-6 stroke-[1.8]" />,
  Layers: <Layers className="w-6 h-6 stroke-[1.8]" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 stroke-[1.8]" />,
  Building: <Building className="w-6 h-6 stroke-[1.8]" />,
  Zap: <Zap className="w-6 h-6 stroke-[1.8]" />,
  Hammer: <Hammer className="w-6 h-6 stroke-[1.8]" />,
};

// 3D Card Component with Interactive Perspective Tilt
function Card3D({ service }: { service: ServiceItem }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Moderate tilt angles for subtle luxury feel
    const maxTilt = 7;
    setRotateX(-(y / (rect.height / 2)) * maxTilt);
    setRotateY((x / (rect.width / 2)) * maxTilt);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${rotateX !== 0 ? -4 : 0}px)`,
        transition: 'transform 0.25s ease-out',
      }}
      className="relative bg-white/95 rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] transition-shadow duration-300 flex flex-col justify-between group overflow-hidden"
    >
      {/* Top Details & Icon */}
      <div>
        <div className="flex items-start justify-between mb-5">
          <div className="w-13 h-13 p-3.5 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 shadow-xs group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
            {ICON_MAP[service.iconName] || <Sparkles className="w-6 h-6 stroke-[1.8]" />}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {service.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 font-normal leading-[1.7] mb-6">
          {service.fullDesc || service.shortDesc}
        </p>

        {/* Feature Checkpoints */}
        <ul className="space-y-2.5 mb-6 pt-5 border-t border-slate-100">
          {service.features.map((feature, fIdx) => (
            <li key={fIdx} className="flex items-start space-x-2.5 text-xs font-normal text-slate-600 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
        <a
          href="#estimate-calculator"
          className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center space-x-1 group/btn"
        >
          <span>Calculate Price</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </a>

        <a
          href="#contact"
          className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-sky-600 hover:text-white rounded-xl transition-all shadow-xs"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}

export default function Services3D() {
  const [activeTab, setActiveTab] = useState<'all' | 'builds' | 'renovation' | 'care'>('all');

  const filteredServices = SERVICES.filter((s) => {
    if (activeTab === 'builds') {
      return ['custom-pool-construction', 'pool-spas', 'pool-decking-patios'].includes(s.id);
    }
    if (activeTab === 'renovation') {
      return ['pool-replastering', 'tile-cleaning', 'pool-coping-tile', 'structural-crack-repair'].includes(s.id);
    }
    if (activeTab === 'care') {
      return ['weekly-pool-service', 'pool-equipment', 'energy-efficient-pumps', 'commercial-pool-service'].includes(s.id);
    }
    return true;
  });

  return (
    <section id="services" className="py-28 sm:py-36 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <span>What We Master</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comprehensive Pool Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.75] max-w-2xl mx-auto">
            From ground-up luxury gunite construction and Marcite replastering to weekly chemistry care, our licensed contractors deliver perfection.
          </p>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
              activeTab === 'all'
                ? 'bg-sky-600 text-white shadow-sky-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            All Services (11)
          </button>
          <button
            onClick={() => setActiveTab('builds')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
              activeTab === 'builds'
                ? 'bg-sky-600 text-white shadow-sky-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            New Construction (3)
          </button>
          <button
            onClick={() => setActiveTab('renovation')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
              activeTab === 'renovation'
                ? 'bg-sky-600 text-white shadow-sky-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            Renovation &amp; Replastering (4)
          </button>
          <button
            onClick={() => setActiveTab('care')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
              activeTab === 'care'
                ? 'bg-sky-600 text-white shadow-sky-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            Care &amp; Maintenance (4)
          </button>
        </div>

        {/* 3D Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
          {filteredServices.map((service) => (
            <Card3D key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
