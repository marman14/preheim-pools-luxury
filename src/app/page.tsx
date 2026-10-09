'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroLuxury from '@/components/HeroLuxury';
import Services3D from '@/components/Services3D';
import BeforeAfterCustom from '@/components/BeforeAfterCustom';
import WhyChooseUsLuxury from '@/components/WhyChooseUsLuxury';
import GalleryGrid from '@/components/GalleryGrid';
import EstimateCalculator from '@/components/EstimateCalculator';
import ServiceAreasLuxury from '@/components/ServiceAreasLuxury';
import ReviewsLuxury from '@/components/ReviewsLuxury';
import ContactSectionLuxury from '@/components/ContactSectionLuxury';
import FooterLuxury from '@/components/FooterLuxury';
import FloatingActions from '@/components/FloatingActions';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] flex flex-col selection:bg-[#e0f2fe] selection:text-[#0284c7]">
      {/* 1. Glassmorphic Sticky Luxury Navigation with Categorized Mega Dropdown */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Custom 3D Panoramic Hero Canvas (Clean Light Luxury) */}
        <HeroLuxury />

        {/* 3. Flagship Before & After Transformation Showcase (Selma CA) */}
        <BeforeAfterCustom />

        {/* 4. Interactive 3D Perspective Services Suite (11 Core Offerings) */}
        <Services3D />

        {/* 5. Trust, Licensing & Master Craftsmanship (CSLB #1023444) */}
        <WhyChooseUsLuxury />

        {/* 6. Architectural 3-Column / 9-Photo Portfolio Grid + 49-Photo Lightbox */}
        <GalleryGrid />

        {/* 7. Interactive Instant Project Cost Estimator */}
        <EstimateCalculator />

        {/* 8. Central Valley Service Route Directory (20+ Communities) */}
        <ServiceAreasLuxury />

        {/* 9. Verified 5.0 Google Customer Reviews */}
        <ReviewsLuxury />

        {/* 10. Free On-Site Consultation & Direct Contractor Contact */}
        <ContactSectionLuxury />
      </main>

      {/* 11. Multi-Column Architectural Footer (Pure Light Luxury) */}
      <FooterLuxury />

      {/* 12. Pinned Left-Edge 5 Color-Coded Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
