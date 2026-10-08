import type { Metadata } from 'next';
import './globals.css';
import { BUSINESS_INFO, CITIES_SERVED_LIST } from '@/data/businessData';

export const metadata: Metadata = {
  title: 'Preheim Pools & Construction | Premier Pool Builders & Remodeling in Central Valley',
  description: 'Licensed California pool contractor CSLB #1023444. Luxury custom pool construction, replastering, renovations, tile cleaning, and weekly maintenance serving Fresno, Clovis, Visalia, Reedley, and 20+ Central Valley cities.',
  keywords: [
    'pool construction Fresno',
    'pool remodeling Central Valley',
    'pool replastering Reedley CA',
    'Preheim Pools',
    'pool tile cleaning Visalia',
    'custom gunite pools Clovis',
    'CSLB 1023444',
    'swimming pool contractor Hanford',
  ],
  authors: [{ name: 'Preheim Pools & Construction' }],
  creator: 'Preheim Pools & Construction',
  publisher: 'Preheim Pools & Construction',
  metadataBase: new URL('https://www.preheimpools.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Preheim Pools & Construction | Professional Pool Construction & Remodeling',
    description: 'Elevate your backyard with custom gunite pools, luxury replastering, and dependable maintenance across Central Valley. CSLB #1023444.',
    url: 'https://www.preheimpools.com',
    siteName: 'Preheim Pools & Construction',
    images: [
      {
        url: 'https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-25.png',
        width: 1200,
        height: 630,
        alt: 'Preheim Pools Custom Construction & Remodeling',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preheim Pools & Construction | Central Valley Pool Builders',
    description: 'Licensed pool construction, replastering, and maintenance in Central Valley. CSLB #1023444.',
    images: ['https://res.cloudinary.com/dt85pcaj5/image/upload/v1770738218/preheim-pools/carousel/carousel-25.png'],
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/logo.png',
  },
};

export const viewport = {
  themeColor: '#0284c7',
};


const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'PoolService'],
  name: BUSINESS_INFO.name,
  alternateName: 'Preheim Pools',
  image: 'https://www.preheimpools.com/images/logo.png',
  description: 'Professional pool construction, renovations, tile cleaning, and maintenance services serving Central Valley, California.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_INFO.street,
    addressLocality: BUSINESS_INFO.city,
    addressRegion: BUSINESS_INFO.state,
    postalCode: BUSINESS_INFO.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS_INFO.coordinates.lat,
    longitude: BUSINESS_INFO.coordinates.lng,
  },
  telephone: BUSINESS_INFO.phoneRaw,
  url: 'https://www.preheimpools.com',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: CITIES_SERVED_LIST,
  sameAs: [
    BUSINESS_INFO.socialLinks.facebook,
    BUSINESS_INFO.socialLinks.instagram,
    BUSINESS_INFO.socialLinks.googleReview,
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: BUSINESS_INFO.license,
    recognizedBy: {
      '@type': 'Organization',
      name: 'California State License Board',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-white text-slate-800 antialiased selection:bg-sky-100 selection:text-sky-800">
        {children}
      </body>
    </html>
  );
}
