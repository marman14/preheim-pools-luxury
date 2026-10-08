'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  X,
  Phone,
  Compass,
  Sparkles,
  Waves,
  Brush,
  FlaskConical,
  Wrench,
  Filter,
  Home,
  Trees,
  Flame,
  Building2,
  LucideIcon,
} from 'lucide-react';
import { SERVICES, ServiceItem, BUSINESS_INFO } from '@/data/businessData';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Sparkles,
  Waves,
  Brush,
  FlaskConical,
  Wrench,
  Filter,
  Home,
  Trees,
  Flame,
  Building2,
};

interface TiltState {
  rotateX: number;
  rotateY: number;
  glareX: number;
  glareY: number;
  isHovered: boolean;
}

function ServiceCard({
  service,
  onSelect,
}: {
  service: ServiceItem;
  onSelect: (s: ServiceItem) => void;
}) {
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  const IconComponent = iconMap[service.iconName] || Waves;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt.isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-5px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: tilt.isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className="relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-shadow duration-300 flex flex-col justify-between group overflow-hidden"
    >
      {/* 3D Radial Glare Sheen */}
      {tilt.isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl opacity-25 transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(56, 189, 248, 0.35) 0%, transparent 60%)`,
          }}
        />
      )}

      <div>
        {/* Top Header: Premium Line-Art Icon & Badge */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-13 h-13 p-3.5 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 shadow-xs group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
            <IconComponent className="w-6 h-6 stroke-[1.8]" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {service.badge}
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-500 font-normal leading-[1.65] mb-6">
          {service.shortDesc}
        </p>

        {/* Features Bullet List */}
        <ul className="space-y-2.5 mb-6 pt-5 border-t border-slate-100">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-xs font-normal text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
        <button
          onClick={() => onSelect(service)}
          className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center space-x-1 group/btn"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <a
          href="#contact"
          className="px-3.5 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-sky-600 hover:text-white rounded-xl transition-all"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const ModalIcon = selectedService ? iconMap[selectedService.iconName] || Waves : Waves;

  return (
    <section id="services" className="py-28 sm:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <span>What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comprehensive Pool Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-2xl mx-auto">
            From new pool construction and complete replastering to weekly chemistry care, our licensed contractors deliver quality craftsmanship you can trust.
          </p>
        </div>

        {/* Spacious Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(s) => setSelectedService(s)}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-1.5">
              Have questions about your pool project?
            </h3>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              Speak directly with Robert or Sebastian for expert advice and written estimates.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-xs transition-all flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>(559) 393-7981</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-md transition-all"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-sky-50 rounded-2xl border border-sky-100 text-sky-600">
                <ModalIcon className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                  {selectedService.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Scope Deliverables */}
            <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Included Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="flex-1 py-3 px-4 text-center text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-md transition-all"
              >
                Request Free Quote
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-3 px-4 text-center text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call (559) 393-7981</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
