// 49 Authentic Project Photos Data for Full Lightbox Portfolio
const GALLERY_PHOTOS = [
  { id: 1, url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-1.png', title: 'Luxury Gunite Pool with Integrated Spillover Spa', location: 'Fresno, CA' },
  { id: 2, url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-2.png', title: 'Geometric Pool with Travertine Coping & Baja Shelf', location: 'Clovis, CA' },
  { id: 3, url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-3.png', title: 'Freeform Gunite Pool & Natural Flagstone Waterfall', location: 'Visalia, CA' },
  { id: 4, url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-4.png', title: 'Complete Pool Replastering & Royal Blue Glass Waterline Tile', location: 'Reedley, CA' },
  { id: 5, url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-5.png', title: 'Modern Clean-Line Lap Pool with Sun Ledge & Bubblers', location: 'Kingsburg, CA' },
  { id: 6, url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-6.png', title: 'Resort-Style Backyard Living with Custom Concrete Decking', location: 'Hanford, CA' },
  { id: 7, url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-7.png', title: 'Custom Deep Basin Pool with LED Mood Lighting', location: 'Sanger, CA' },
  { id: 8, url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-8.png', title: 'Architectural Rectangular Pool with Premium Plaster Finish', location: 'Dinuba, CA' },
  { id: 9, url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-9.png', title: 'Executive Pool Remodel with Raised Fire Pit & Spillway', location: 'Selma, CA' }
];

// Generate remaining photo entries (up to 49)
for (let i = 10; i <= 49; i++) {
  GALLERY_PHOTOS.push({
    id: i,
    url: `https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-${i}.png`,
    title: `Central Valley Luxury Project #${i}`,
    location: 'Central Valley, CA'
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initBeforeAfterSlider();
  initGalleryLightbox();
  init3DCardTilt();
  initEstimator();
  initCitySearch();
  initMobileMenu();
});

// 1. Interactive Before / After Slider
function initBeforeAfterSlider() {
  const canvas = document.getElementById('slider-canvas');
  const reveal = document.getElementById('slider-reveal');
  const revealImg = document.getElementById('slider-reveal-img');
  const handleLine = document.getElementById('slider-handle-line');
  const viewPercentText = document.getElementById('slider-percent');

  if (!canvas || !reveal || !handleLine) return;

  let isDragging = false;

  const updatePosition = (clientX) => {
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;

    reveal.style.width = `${percentage}%`;
    handleLine.style.left = `${percentage}%`;
    if (revealImg) {
      revealImg.style.width = `${rect.width}px`;
    }
    if (viewPercentText) {
      viewPercentText.textContent = `${Math.round(percentage)}% View`;
    }
  };

  const handlePointerDown = (e) => {
    isDragging = true;
    try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    isDragging = false;
    try { canvas.releasePointerCapture(e.pointerId); } catch (_) {}
  };

  canvas.addEventListener('pointerdown', handlePointerDown);
  canvas.addEventListener('pointermove', handlePointerMove);
  canvas.addEventListener('pointerup', handlePointerUp);
  canvas.addEventListener('pointercancel', handlePointerUp);

  // Resize listener to ensure inner image matches canvas width
  window.addEventListener('resize', () => {
    if (revealImg && canvas) {
      revealImg.style.width = `${canvas.getBoundingClientRect().width}px`;
    }
  });

  // Initial call
  setTimeout(() => {
    if (revealImg && canvas) {
      revealImg.style.width = `${canvas.getBoundingClientRect().width}px`;
    }
  }, 100);
}

// 2. 3D Perspective Tilt on Mouse Movement
function init3DCardTilt() {
  const heroCard = document.getElementById('hero-3d-card');
  const heroSection = document.getElementById('hero-section');

  if (heroCard && heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const maxTilt = 5;
      const rotateX = -(y / (rect.height / 2)) * maxTilt;
      const rotateY = (x / (rect.width / 2)) * maxTilt;
      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroSection.addEventListener('mouseleave', () => {
      heroCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
  }

  // Tilt on Service Cards
  const serviceCards = document.querySelectorAll('.card-3d');
  serviceCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const maxTilt = 6;
      const rotateX = -(y / (rect.height / 2)) * maxTilt;
      const rotateY = (x / (rect.width / 2)) * maxTilt;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}

// 3. Gallery Lightbox Modal
let currentLightboxIdx = 0;

function initGalleryLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal) return;

  window.openLightbox = (index) => {
    currentLightboxIdx = index;
    updateLightbox();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const updateLightbox = () => {
    const photo = GALLERY_PHOTOS[currentLightboxIdx];
    if (lightboxImg && photo) {
      lightboxImg.src = photo.url;
      lightboxImg.alt = photo.title;
    }
    if (lightboxCaption && photo) {
      lightboxCaption.textContent = `${photo.title} (${currentLightboxIdx + 1} of ${GALLERY_PHOTOS.length})`;
    }
  };

  const showNext = () => {
    currentLightboxIdx = (currentLightboxIdx + 1) % GALLERY_PHOTOS.length;
    updateLightbox();
  };

  const showPrev = () => {
    currentLightboxIdx = (currentLightboxIdx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    updateLightbox();
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (nextBtn) nextBtn.addEventListener('click', showNext);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

// 4. Interactive Project Cost Estimator
function initEstimator() {
  const serviceRates = {
    replaster: { min: 6500, max: 11000, unit: 'project' },
    construction: { min: 55000, max: 95000, unit: 'project' },
    tile: { min: 450, max: 850, unit: 'treatment' },
    maintenance: { min: 120, max: 180, unit: 'month' },
    equipment: { min: 350, max: 2400, unit: 'service' }
  };

  const sizeMultipliers = {
    small: 0.85,
    medium: 1.0,
    large: 1.35
  };

  let selectedService = 'replaster';
  let selectedSize = 'medium';

  const priceRangeEl = document.getElementById('estimator-price-range');
  const unitEl = document.getElementById('estimator-unit');

  const updateEstimate = () => {
    const sRate = serviceRates[selectedService] || serviceRates.replaster;
    const sMult = sizeMultipliers[selectedSize] || 1.0;

    const min = Math.round((sRate.min * sMult) / 50) * 50;
    const max = Math.round((sRate.max * sMult) / 50) * 50;

    if (priceRangeEl) {
      priceRangeEl.textContent = `$${min.toLocaleString()} – $${max.toLocaleString()}`;
    }
    if (unitEl) {
      unitEl.textContent = `/ ${sRate.unit}`;
    }
  };

  // Button Click Listeners
  document.querySelectorAll('[data-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-service]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedService = btn.getAttribute('data-service');
      updateEstimate();
    });
  });

  document.querySelectorAll('[data-size]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-size]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.getAttribute('data-size');
      updateEstimate();
    });
  });

  const estForm = document.getElementById('estimator-form');
  if (estForm) {
    estForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('estimator-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        estForm.style.display = 'none';
      }
    });
  }

  updateEstimate();
}

// 5. City Search Directory Filter
function initCitySearch() {
  const searchInput = document.getElementById('city-search-input');
  const cityItems = document.querySelectorAll('.city-item');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    cityItems.forEach((item) => {
      const name = item.getAttribute('data-city-name').toLowerCase();
      item.style.display = name.includes(val) ? 'flex' : 'none';
    });
  });
}

// 6. Share & Copy Link Functionality
window.handleSharePage = async function () {
  const shareData = {
    title: 'Preheim Pools & Construction',
    text: 'Premier custom pool builders and replastering specialists in Central Valley, CA. CSLB #1023444.',
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (_) {}
  }

  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(shareData.url);
      showToast('Website link copied to clipboard!');
    } catch (_) {}
  }
};

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'share-toast';
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '24px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = '#0f172a';
  toast.style.color = '#ffffff';
  toast.style.padding = '12px 24px';
  toast.style.borderRadius = '9999px';
  toast.style.fontSize = '14px';
  toast.style.fontWeight = '600';
  toast.style.zIndex = '9999';
  toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}

// 7. Mobile Menu Drawer
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }
}
