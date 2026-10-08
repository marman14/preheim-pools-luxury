'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Send, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/businessData';

interface ServiceOption {
  id: string;
  name: string;
  baseMin: number;
  baseMax: number;
  unit: string;
}

const SERVICES_ESTIMATE: ServiceOption[] = [
  { id: 'replaster', name: 'Pool Replastering & Remodeling', baseMin: 6500, baseMax: 11000, unit: 'project' },
  { id: 'construction', name: 'New Custom Gunite Pool', baseMin: 55000, baseMax: 95000, unit: 'project' },
  { id: 'tile', name: 'Waterline Tile Cleaning & Calcium Removal', baseMin: 450, baseMax: 850, unit: 'treatment' },
  { id: 'maintenance', name: 'Weekly Pool Chemistry & Cleaning', baseMin: 120, baseMax: 180, unit: 'month' },
  { id: 'equipment', name: 'Equipment Repair & Pump Upgrades', baseMin: 350, baseMax: 2400, unit: 'service' },
];

const POOL_SIZES = [
  { id: 'small', label: 'Compact / Spool', sub: 'Up to 15 × 30 ft', multiplier: 0.85 },
  { id: 'medium', label: 'Standard Backyard', sub: '16 × 32 to 18 × 36 ft', multiplier: 1.0 },
  { id: 'large', label: 'Large / Estate Pool', sub: '20 × 40+ ft', multiplier: 1.35 },
];

const UPGRADES = [
  { id: 'spa', label: 'Integrated Spa & Spillway', cost: 12000 },
  { id: 'glassTile', label: 'Royal Blue Waterline Glass Tile', cost: 2200 },
  { id: 'bajaShelf', label: 'Baja Shelf / Tanning Ledge', cost: 4500 },
  { id: 'pump', label: 'Energy-Efficient Variable Speed Pump', cost: 1800 },
];

export default function EstimateCalculator() {
  const [selectedService, setSelectedService] = useState('replaster');
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>(['glassTile']);
  const [submitted, setSubmitted] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
  });

  const toggleUpgrade = (id: string) => {
    setSelectedUpgrades((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentService = SERVICES_ESTIMATE.find((s) => s.id === selectedService) || SERVICES_ESTIMATE[0];
  const currentSize = POOL_SIZES.find((s) => s.id === selectedSize) || POOL_SIZES[1];

  // Calculate dynamic price
  const baseMin = currentService.baseMin * currentSize.multiplier;
  const baseMax = currentService.baseMax * currentSize.multiplier;

  const upgradesCost = selectedUpgrades.reduce((sum, uId) => {
    const upgrade = UPGRADES.find((u) => u.id === uId);
    return sum + (upgrade ? upgrade.cost : 0);
  }, 0);

  const totalMin = Math.round((baseMin + (currentService.id === 'construction' || currentService.id === 'replaster' ? upgradesCost : 0)) / 50) * 50;
  const totalMax = Math.round((baseMax + (currentService.id === 'construction' || currentService.id === 'replaster' ? upgradesCost * 1.15 : 0)) / 50) * 50;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimate-calculator" className="py-24 sm:py-32 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Instant Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Interactive Pool Project Estimator
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Select your pool service, dimensions, and custom upgrades to get an instant realistic estimate range from a licensed Central Valley contractor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-xl space-y-8">
            {/* Step 1: Service Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Pool Service Needed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES_ESTIMATE.map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setSelectedService(svc.id)}
                    className={`p-3.5 text-left rounded-2xl border text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                      selectedService === svc.id
                        ? 'border-sky-500 bg-sky-50/80 text-sky-900 shadow-sm ring-1 ring-sky-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white hover:bg-slate-50/50'
                    }`}
                  >
                    <span>{svc.name}</span>
                    {selectedService === svc.id && (
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pool Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                2. Approximate Pool Basin Size
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {POOL_SIZES.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-4 text-center rounded-2xl border transition-all duration-200 ${
                      selectedSize === size.id
                        ? 'border-sky-500 bg-sky-50/80 text-sky-900 shadow-sm ring-1 ring-sky-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white hover:bg-slate-50/50'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">{size.label}</span>
                    <span className="block text-[11px] text-slate-500">{size.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Upgrades (Relevant for construction & replaster) */}
            {(selectedService === 'replaster' || selectedService === 'construction') && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  3. Optional Custom Add-ons &amp; Finishes
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {UPGRADES.map((upgrade) => {
                    const isSelected = selectedUpgrades.includes(upgrade.id);
                    return (
                      <button
                        key={upgrade.id}
                        type="button"
                        onClick={() => toggleUpgrade(upgrade.id)}
                        className={`p-3 text-left rounded-2xl border text-xs font-medium transition-all duration-200 flex items-center justify-between ${
                          isSelected
                            ? 'border-sky-500 bg-sky-50/60 text-sky-900 font-semibold'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                        }`}
                      >
                        <span>{upgrade.label}</span>
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center flex-shrink-0 ml-2 border ${
                            isSelected
                              ? 'bg-sky-600 border-sky-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Result & Lead Box Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-7 sm:p-9 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2">
                Estimated Investment
              </span>

              <div className="mb-4">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}
                  <span className="text-sm font-normal text-sky-200 ml-2">
                    / {currentService.unit}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-normal mt-2 leading-relaxed">
                  Based on Central Valley labor &amp; material standards. Final pricing depends on water chemistry balance, yard access, and permit specifications.
                </p>
              </div>

              <div className="pt-4 pb-6 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>CSLB #1023444 Licensed &amp; Insured Contractor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Free in-person consultation &amp; precise 3D quote</span>
                </div>
              </div>

              {submitted ? (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/15">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-white mb-1">Estimate Sent!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you {customerInfo.name || 'homeowner'}. Our team will contact you at {customerInfo.phone || 'your phone'} within 24 hours to schedule your free inspection.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-sky-300 underline hover:text-white"
                  >
                    Recalculate or Edit Details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Lock In This Estimate With a Free On-Site Inspection:
                  </h4>

                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <input
                      type="text"
                      required
                      placeholder="City (e.g. Reedley) *"
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Request Official Written Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center pt-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="inline-flex items-center space-x-1.5 text-xs text-sky-300 hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Prefer to call? (559) 393-7981</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
