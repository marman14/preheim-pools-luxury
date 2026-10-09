'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '@/data/businessData';

export default function ContactSectionLuxury() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: 'pool-replastering',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] text-xs font-bold tracking-wider uppercase mb-4">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Schedule Your Free Site Consultation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-xl mx-auto">
            Ready to remodel, replaster, or construct your dream pool? Contact contractor Eric Preheim directly for a detailed on-site assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">Contractor Direct Contact</h3>

              <div className="space-y-6">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-start space-x-4 group p-3 -mx-3 rounded-2xl hover:bg-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0284c7] group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Direct Phone</span>
                    <span className="text-base font-bold text-[#0f172a] group-hover:text-[#0284c7] transition-colors">
                      {BUSINESS_INFO.phone}
                    </span>
                    <span className="text-xs text-slate-500 font-normal block mt-0.5">Direct line to contractor</span>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-3 -mx-3 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Office &amp; Headquarters</span>
                    <span className="text-sm font-bold text-[#0f172a] block">
                      {BUSINESS_INFO.address}
                    </span>
                    <span className="text-xs text-slate-500 font-normal block mt-0.5">Reedley, CA 93654</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 -mx-3 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Operating Hours</span>
                    <span className="text-sm font-bold text-[#0f172a] block">{BUSINESS_INFO.hours}</span>
                    <span className="text-xs text-slate-500 font-normal block mt-0.5">Saturday: By appointment</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 -mx-3 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">California License</span>
                    <span className="text-sm font-bold text-[#0f172a] block">{BUSINESS_INFO.license}</span>
                    <span className="text-xs text-slate-500 font-normal block mt-0.5">Licensed, Bonded &amp; Fully Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#e0f2fe] text-[#0284c7] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a]">Consultation Request Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-[1.7]">
                  Thank you, <strong className="text-[#0f172a]">{formData.name}</strong>. Eric Preheim will review your project details and contact you shortly at{' '}
                  <strong className="text-[#0f172a]">{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-[#f8fafc] hover:bg-slate-200 text-[#0f172a] rounded-xl text-xs font-bold transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Request an Estimate</h3>
                <p className="text-xs text-slate-500 font-normal mb-6">
                  Fill in your project specifications for a fast, itemized estimate.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-200/90 rounded-xl text-sm text-[#0f172a] focus:bg-white focus:ring-2 focus:ring-[#0284c7] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1.5 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(559) 000-0000"
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-200/90 rounded-xl text-sm text-[#0f172a] focus:bg-white focus:ring-2 focus:ring-[#0284c7] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-200/90 rounded-xl text-sm text-[#0f172a] focus:bg-white focus:ring-2 focus:ring-[#0284c7] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1.5 uppercase tracking-wider">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Clovis, Fresno, Visalia"
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-200/90 rounded-xl text-sm text-[#0f172a] focus:bg-white focus:ring-2 focus:ring-[#0284c7] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-1.5 uppercase tracking-wider">
                    Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-200/90 rounded-xl text-sm text-[#0f172a] focus:bg-white focus:ring-2 focus:ring-[#0284c7] focus:outline-none transition-all"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-1.5 uppercase tracking-wider">
                    Project Notes &amp; Approximate Dimensions
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your pool (dimensions, current condition, plaster color preferences, or timeline)..."
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-200/90 rounded-xl text-sm text-[#0f172a] focus:bg-white focus:ring-2 focus:ring-[#0284c7] focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-[2px] flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Estimate Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
