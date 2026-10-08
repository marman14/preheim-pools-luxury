'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Send, CheckCircle2, Droplets } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '@/data/businessData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    city: '',
    message: '',
    consent: false,
  });

  const [sliderVerified, setSliderVerified] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSliderDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setSliderPosition(val);
    if (val >= 95) {
      setSliderVerified(true);
      setSliderPosition(100);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sliderVerified) {
      alert('Please complete the verification slider.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <span>Direct Estimates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Request a Free Quote
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-[1.7] max-w-2xl mx-auto">
            Fill out the form below and we will get back to you within 24 hours. For urgent requests, call us directly at (559) 393-7981.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-slate-600 font-normal max-w-md mb-6 leading-[1.7]">
                  Thank you, {formData.name || 'valued customer'}. We have received your inquiry and will contact you at {formData.phone || 'your phone number'} shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSliderVerified(false);
                    setSliderPosition(0);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      service: '',
                      city: '',
                      message: '',
                      consent: false,
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-sky-600 bg-sky-50 hover:bg-sky-100 rounded-xl transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-sm font-normal text-slate-700 transition-all bg-slate-50/50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(559) 555-1234"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-sm font-normal text-slate-700 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-sm font-normal text-slate-700 transition-all bg-slate-50/50"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Reedley"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-sm font-normal text-slate-700 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Service Interested In *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-sm font-normal text-slate-700 transition-all bg-slate-50/50"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Consultation">Other / General Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-sm font-normal text-slate-700 transition-all bg-slate-50/50"
                  />
                </div>

                {/* Clean Slider Verification (No cheap emojis) */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                      <Droplets className="w-3.5 h-3.5 text-sky-600" />
                      <span>Security Verification: Slide to Confirm</span>
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      {sliderVerified ? (
                        <span className="text-emerald-600 flex items-center space-x-1">
                          <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />
                          <span>Verified</span>
                        </span>
                      ) : (
                        `${sliderPosition}%`
                      )}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={handleSliderDrag}
                    disabled={sliderVerified}
                    className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <p className="text-[11px] text-slate-500 mt-1.5">
                    {sliderVerified
                      ? 'Verification complete.'
                      : 'Slide to the right to verify before submitting.'}
                  </p>
                </div>

                {/* Consent */}
                <label className="flex items-start space-x-2.5 text-xs text-slate-600 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded text-sky-600 focus:ring-sky-500"
                  />
                  <span>
                    I consent to receive communications by phone, email, or SMS regarding my inquiry. Message and data rates may apply.
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !sliderVerified}
                  className={`w-full py-4 text-sm sm:text-base font-bold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 ${
                    sliderVerified
                      ? 'bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white shadow-sky-600/30 cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Phone */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Phone
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-sky-600 transition-colors block mb-1"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-slate-500 font-normal">
                    Call or text us for quick estimates
                  </span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Address
                  </span>
                  <p className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                    {BUSINESS_INFO.street}
                  </p>
                  <p className="text-xs text-slate-500 font-normal">
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Business Hours
                  </span>
                  <p className="text-sm font-semibold text-slate-900">
                    {BUSINESS_INFO.hours}
                  </p>
                  <p className="text-xs text-slate-500 font-normal mt-1">
                    Saturday &amp; Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* License Credential Card */}
            <div className="bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-7 sm:p-8 text-white shadow-xl">
              <div className="flex items-center space-x-3 mb-2.5">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <h4 className="font-bold text-base text-white">
                  Licensed &amp; Insured
                </h4>
              </div>
              <p className="text-xs text-sky-100 font-normal leading-[1.7] mb-3.5">
                California State License Board CSLB #1023444. Bonded and fully insured for complete homeowner protection.
              </p>
              <div className="inline-block px-3 py-1 rounded-lg bg-sky-800/80 text-sky-200 text-xs font-mono font-bold">
                {BUSINESS_INFO.license}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
