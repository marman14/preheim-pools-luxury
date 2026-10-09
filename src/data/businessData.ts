export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  features: string[];
}

export interface ReviewItem {
  name: string;
  text: string;
  rating: number;
  source: string;
  location: string;
}

export interface CityItem {
  name: string;
  highlighted?: boolean;
  isHomeBase?: boolean;
  description?: string;
  image?: string;
}

export const BUSINESS_INFO = {
  name: "Preheim Pools & Construction",
  shortName: "Preheim Pools",
  tagline: "Just a Splash Away!",
  license: "CSLB #1023444",
  licenseType: "Licensed, Bonded & Fully Insured Contractor",
  phone: "(559) 393-7981",
  phoneRaw: "+15593937981",
  address: "22170 Clayton Ave, Reedley, CA 93654",
  street: "22170 Clayton Ave",
  city: "Reedley",
  state: "CA",
  zip: "93654",
  coordinates: {
    lat: 36.5961,
    lng: -119.4503,
  },
  hours: "Monday – Friday: 8:00 AM – 5:00 PM",
  experienceYears: "20+",
  citiesServedCount: "20+",
  rating: 5.0,
  reviewCount: 48,
  socialLinks: {
    facebook: "https://www.facebook.com/preheimpools",
    instagram: "https://www.instagram.com/preheimpools",
    googleReview: "https://g.page/r/CTdaxdGOKfXfEAE/review",
  },
  heroVideo: "https://res.cloudinary.com/dt85pcaj5/video/upload/v1772994626/IMG_0325_w9trny.mp4",
  heroPoster: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-25.png",
  logo: "/images/logo.png",
};

// 11 Core Services with professional icon identifiers (No emojis)
export const SERVICES: ServiceItem[] = [
  {
    id: "new-pool-construction",
    title: "New Pool Construction",
    shortDesc: "Custom inground gunite pool design and installation from excavation to final fill.",
    fullDesc: "Complete turn-key pool construction tailored for Central Valley backyards. Custom gunite shells, integrated spas, tanning ledges, and energy-efficient plumbing systems.",
    iconName: "Compass",
    badge: "CSLB Certified",
    features: [
      "Custom Gunite & Shotcrete Basins",
      "Integrated Spas & Spillways",
      "Baja Shelves & Tanning Ledges",
      "Full Project Permitting & Startup",
    ],
  },
  {
    id: "pool-renovations",
    title: "Pool Renovations & Replastering",
    shortDesc: "Transform aged, rough pools with smooth new plaster, coping, and designer waterline tile.",
    fullDesc: "Complete resurfacing and structural rejuvenation. Restore worn surfaces with brilliant white Marcite or quartz finishes, replace chipped coping, and install modern waterline tile.",
    iconName: "Sparkles",
    badge: "Flagship Service",
    features: [
      "Smooth White Marcite Plastering",
      "Designer Waterline Glass & Ceramic Tile",
      "Travertine & Safety Pool Coping",
      "Gunite Shell Crack Repair & Sealing",
    ],
  },
  {
    id: "pool-maintenance",
    title: "Weekly Pool Maintenance",
    shortDesc: "Effortless, crystal-clear water year-round with dedicated chemical balancing and care.",
    fullDesc: "Comprehensive weekly route service including thorough chemical testing, skimmer basket cleaning, wall brushing, vacuuming, and equipment health monitoring.",
    iconName: "Waves",
    badge: "Year-Round Care",
    features: [
      "Professional Chemical Balancing",
      "Surface Skimming & Bottom Vacuuming",
      "Tile & Wall Scrubbing",
      "Equipment Pressure & Leak Checks",
    ],
  },
  {
    id: "tile-cleaning",
    title: "Tile Cleaning & Calcium Removal",
    shortDesc: "Professional calcium scale removal restoring your waterline tile to its original luster.",
    fullDesc: "Gentle, non-destructive low-pressure bead blasting and specialized descaling formulations that safely eliminate hard water crust without scratching tile or grout.",
    iconName: "Brush",
    badge: "Restoration",
    features: [
      "Waterline Calcium Ridge Removal",
      "Safe for Glass, Ceramic & Stone Tile",
      "Grout Line Restoration & Sealing",
      "Spillway & Feature Descaling",
    ],
  },
  {
    id: "chemical-wash",
    title: "Deep Chemical & Acid Wash",
    shortDesc: "Safely strip away years of tough algae stains and mineral discoloration from plaster.",
    fullDesc: "Full drain and controlled acid washing process to remove organic stains and calcium haze, revealing a fresh, clean surface layer.",
    iconName: "FlaskConical",
    badge: "Deep Clean",
    features: [
      "Deep Organic Stain Removal",
      "Algae Root Eradication",
      "Restores Uniform Surface Hue",
      "Full Neutralization Before Refill",
    ],
  },
  {
    id: "equipment-repair",
    title: "Equipment Repair & Automation",
    shortDesc: "Expert diagnosis and repair for variable-speed pumps, filters, heaters, and smart controls.",
    fullDesc: "Certified repair and replacement for pool circulation pumps, automated salt systems, gas heaters, and modern app-controlled automation panels.",
    iconName: "Wrench",
    badge: "Efficiency",
    features: [
      "Variable-Speed Pump Replacements",
      "Gas & Electric Pool Heaters",
      "Smartphone Automation Systems",
      "Plumbing Leak Detection & Repair",
    ],
  },
  {
    id: "filter-cleaning",
    title: "Filter Cleaning & Grid Rebuild",
    shortDesc: "Deep cleaning and grid inspection to optimize filtration pressure and water circulation.",
    fullDesc: "Complete teardown, high-pressure washing, chemical degreasing, and manifold inspection for DE and cartridge pool filters.",
    iconName: "Filter",
    badge: "Circulation",
    features: [
      "DE Grid Teardown & Chemical Soak",
      "Cartridge Deep Pressure Cleaning",
      "Manifold & Pressure Gauge Inspection",
      "Air Relief Valve Verification",
    ],
  },
  {
    id: "outdoor-construction",
    title: "Outdoor Living & Construction",
    shortDesc: "Complete backyard construction including shade pergolas, block walls, and patio extensions.",
    fullDesc: "Comprehensive outdoor construction designed to turn your yard into an integrated entertainment space complementing your pool architecture.",
    iconName: "Home",
    badge: "Contracting",
    features: [
      "Architectural Retaining Walls",
      "Covered Patios & Modern Pergolas",
      "Custom Fire Pits & Fire Tables",
      "Low-Voltage Landscape Lighting",
    ],
  },
  {
    id: "landscaping",
    title: "Landscaping & Artificial Turf",
    shortDesc: "Drought-tolerant green turf and decorative concrete flatwork surrounding your pool edge.",
    fullDesc: "Custom concrete decks, broom finishes, pavers, and high-density synthetic turf installation providing a clean, mud-free perimeter around your swimming pool.",
    iconName: "Trees",
    badge: "Clean Surround",
    features: [
      "Cool-Fiber Synthetic Turf",
      "Decorative Concrete Patios",
      "Efficient Drainage Systems",
      "Zero-Mud Pool Edge Protection",
    ],
  },
  {
    id: "outdoor-kitchens",
    title: "Custom Outdoor Kitchens",
    shortDesc: "Custom grilling islands with stainless appliances and durable outdoor countertops.",
    fullDesc: "Custom masonry outdoor kitchens with built-in gas grills, bar seating, outdoor refrigeration, and durable weather-resistant finishes.",
    iconName: "Flame",
    badge: "Entertainment",
    features: [
      "Stainless Steel Built-in Grills",
      "Weatherproof Granite & Concrete Tops",
      "Refrigeration & Beverage Centers",
      "Bar Seating & Utility Hookups",
    ],
  },
  {
    id: "commercial-maintenance",
    title: "Commercial Pool Maintenance",
    shortDesc: "County health code compliant maintenance for apartment communities and HOAs.",
    fullDesc: "Certified commercial service meeting Fresno, Tulare, and Kings County health department regulations, including daily log bookkeeping and bather safety audits.",
    iconName: "Building2",
    badge: "Code Compliant",
    features: [
      "County Health Code Compliance",
      "Chemical Log Sheet Maintenance",
      "VGB Suction Safety Compliance",
      "Priority Dispatch for Commercial Units",
    ],
  },
];

// Single, Authentic Before & After Case (Selma, CA Pool Replastering & Royal Blue Tile Upgrade)
// Both images are confirmed from the EXACT same pool & perspective (img2 = stripped before, img9 = finished shimmering after)
export const AUTHENTIC_BEFORE_AFTER = {
  title: "Pool Replastering & Royal Blue Glass Tile Upgrade",
  location: "Selma, CA",
  serviceType: "Pool Renovation",
  description: "This Selma pool had deteriorated 15-year-old plaster and faded tile. Preheim Pools stripped the old surface, installed royal blue waterline glass tile, applied smooth white Marcite plaster, and balanced the startup chemistry.",
  beforeImage: "/images/selma_before_aligned.jpg",
  afterImage: "/images/selma_after_aligned.jpg",
  beforeLabel: "BEFORE: Drained & Worn Plaster",
  afterLabel: "AFTER: Smooth Marcite & Royal Blue Tile",
  highlights: [
    "100% Smooth Marcite Plaster Finish",
    "Royal Blue Waterline Glass Tile Along Raised Steps",
    "Clean Startup Water Chemistry Balancing",
    "Completed in Just Over One Week",
  ],
};

// Exactly 9 authentic pool project photos for the homepage 3-column grid
export const HOMEPAGE_GALLERY_PHOTOS = [
  { id: 41, url: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738257/preheim-pools/carousel/carousel-41.png", alt: "Pool construction and maintenance - Reedley estate", title: "Reedley Pool Construction" },
  { id: 18, url: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738200/preheim-pools/carousel/carousel-18.png", alt: "Crystal clear pool maintenance", title: "Crystal Clear Water Care" },
  { id: 16, url: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738194/preheim-pools/carousel/carousel-16.png", alt: "Pool renovation and deep blue replastering", title: "Replastering & Resurfacing" },
  { id: 45, url: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738270/preheim-pools/carousel/carousel-45.png", alt: "Outdoor construction and patio deck", title: "Outdoor Patio & Living" },
  { id: 23, url: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738212/preheim-pools/carousel/carousel-23.png", alt: "Backyard pool in Central Valley sunlight", title: "Custom Gunite Pool Basin" },
  { id: 13, url: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738187/preheim-pools/carousel/carousel-13.png", alt: "Sparkling blue resort-style swimming pool", title: "Resort-Style Swimming Pool" },
  { id: 28, url: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738227/preheim-pools/carousel/carousel-28.png", alt: "Pool coping and clean water maintenance", title: "Designer Coping & Steps" },
  { id: 15, url: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738191/preheim-pools/carousel/carousel-15.png", alt: "Turquoise water and clean step edge", title: "Waterline Step Detailing" },
  { id: 25, url: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-25.png", alt: "Luxury custom pool and spa retreat", title: "Luxury Pool & Spa Retreat" },
];

export const HOMEPAGE_CAROUSEL_PHOTOS = HOMEPAGE_GALLERY_PHOTOS;

// All 49 Cloudinary carousel images for the full gallery lightbox
export const ALL_49_CAROUSEL_IMAGES = Array.from({ length: 49 }, (_, i) => ({
  id: i + 1,
  url: `https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738158/preheim-pools/carousel/carousel-${i + 1}.png`,
  alt: `Preheim Pools project photo ${i + 1}`,
}));

// Exactly the 3 featured projects from the original homepage
export const HOMEPAGE_FEATURED_PROJECTS = [
  {
    title: "Backyard Pool Installation",
    location: "Reedley, CA",
    category: "New Construction",
    image: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770732975/preheim-pools/projects/backyard-pool-installation-reedley-2024/img1.jpg",
  },
  {
    title: "Commercial Pool Maintenance for Apartment Communities",
    location: "Fresno Area, CA",
    category: "Commercial",
    image: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770732995/preheim-pools/projects/commercial-pool-maintenance-fresno-2024/img1.jpg",
  },
  {
    title: "Backyard Concrete Patio & Artificial Grass Installation",
    location: "Reedley, CA",
    category: "Landscaping",
    image: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1770732949/preheim-pools/projects/backyard-concrete-turf-reedley-2023/img1.jpg",
  },
];

// Exactly the 3 service area spotlight slides from the original homepage
export const HOMEPAGE_SPOTLIGHT_CITIES: CityItem[] = [
  {
    name: "Reedley",
    isHomeBase: true,
    highlighted: true,
    description: "Preheim Pools is family-owned right on Clayton Ave in Reedley. When you call, you speak directly with local pool specialists who understand Central Valley climate and water care.",
    image: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1777892448/preheim-pools/content/city-reedley/img-1777892449811.jpg",
  },
  {
    name: "Hanford",
    highlighted: true,
    description: "Over 20 years of trusted pool construction, replastering, and equipment service in Hanford, CA. Licensed, insured, and dedicated to reliable local craftsmanship.",
    image: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1778514236/preheim-pools/content/pool-service-hanford-ca/img-1778514232340.jpg",
  },
  {
    name: "Visalia",
    highlighted: true,
    description: "Serving homeowners across Visalia with custom renovations, weekly maintenance, waterline tile cleaning, and dependable equipment repairs.",
    image: "https://res.cloudinary.com/dt85pcaj5/image/upload/v1778514432/preheim-pools/content/city-visalia/img-1778514432020.jpg",
  },
];

export const CITIES_SERVED_LIST = [
  "Reedley", "Dinuba", "Orange Cove", "Woodlake", "Cutler", "Orosi",
  "Visalia", "Tulare", "Hanford", "Lemoore", "Kingsburg", "Caruthers",
  "Kerman", "Fresno", "Clovis", "Fowler", "Parlier", "Sanger",
  "Laton", "Madera", "Madera Ranchos", "Farmersville", "Exeter",
];

export const CITIES_SERVED: CityItem[] = CITIES_SERVED_LIST.map((cityName) => ({
  name: cityName,
  isHomeBase: cityName === "Reedley",
  highlighted: ["Reedley", "Fresno", "Clovis", "Visalia", "Hanford", "Dinuba", "Selma", "Kingsburg"].includes(cityName),
}));

export const REVIEWS: ReviewItem[] = [
  {
    name: "Vicki Worthley",
    rating: 5,
    source: "Google",
    text: "Preheim's have serviced our pool for about a decade now and always get it right! Couldn't be happier with their service.",
    location: "Central Valley",
  },
  {
    name: "Mark Rojas",
    rating: 5,
    source: "Google",
    text: "Robert with Preheim pools came out and drained our pool, the price and the service was perfect, the monthly cost makes the entire service even better. I highly recommend Preheim pools.",
    location: "Dinuba, CA",
  },
  {
    name: "Virgil Garza",
    rating: 5,
    source: "Google",
    text: "Robert has been servicing our pool for the past 14 years and it's always crystal clear. If you need a reliable pool service I highly recommend Preheim Pools.",
    location: "Reedley, CA",
  },
  {
    name: "Sylvia Amburgey",
    rating: 5,
    source: "Google",
    text: "Robert and Sebastian at Preheim Pool are great — super kind, friendly, and easy to work with. They really care about doing things the right way and take customer service seriously. They're always willing to help, answer questions, and explain things without ever making you feel rushed. Very patient and knowledgeable. Highly recommend!",
    location: "Fresno, CA",
  },
  {
    name: "Shiva Ziba",
    rating: 5,
    source: "Google",
    text: "Sebastian is the most professional and reliable person I have had the pleasure of working with. I wish everyone shared his work ethics.",
    location: "Clovis, CA",
  },
  {
    name: "Jesus Agavo Jr.",
    rating: 5,
    source: "Google",
    text: "Robert has been providing exceptional pool service for us for the past few years. He is flexible and gives great quality work. He also doesn't hassle you with all the bells and whistles that other providers tend to do.",
    location: "Reedley, CA",
  },
];

export const FAQS = [
  {
    q: "Are you licensed and insured in California?",
    a: "Yes. Preheim Pools & Construction is an active licensed contractor with the California State License Board (CSLB #1023444), carrying comprehensive liability and worker's compensation insurance.",
  },
  {
    q: "How long does a pool renovation or replastering take?",
    a: "A typical residential replaster and waterline tile upgrade is completed within 7 to 10 working days, from initial drain and prep to plaster curing, fresh water refill, and chemical startup balance.",
  },
  {
    q: "What areas in the Central Valley do you service?",
    a: "Our home base is on Clayton Ave in Reedley, CA. We regularly service Reedley, Fresno, Clovis, Visalia, Hanford, Dinuba, Kingsburg, Selma, Tulare, and 20+ surrounding Central Valley communities.",
  },
  {
    q: "Do you offer free estimates and on-site consultations?",
    a: "Yes. We offer free on-site consultations and written estimates for new pool construction, replastering, equipment repairs, tile restoration, and weekly service.",
  },
];
