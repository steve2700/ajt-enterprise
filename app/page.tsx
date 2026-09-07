import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQSchema from '@/components/faq-schema'

const GOLD = '#dcb068'
const GOLD_LIGHT = '#f4e78b'
const GOLD_DARK = '#8a6535'
const RED = '#b8161d'
const RED_DARK = '#420203'
const BG = '#0d0705'

export const metadata: Metadata = {
  title: 'AJT Enterprise | Shadeport & Carport Installation, Repairs & Maintenance',
  description:
    "Gauteng & Limpopo's trusted shadeport and carport specialists. New installations, repairs and maintenance for shadeports, cantilever shadeports, carports and parking bay cover. Call 065 867 7363.",
  keywords: [
    'shadeports Gauteng',
    'shadeports Limpopo',
    'carport installation near me',
    'cantilever shadeports Gauteng',
    'shadeport repairs South Africa',
    'shadeport maintenance',
    'parking bay shadeports',
    'carports South Africa',
    'shadeport prices',
    'shadeport installation Polokwane',
  ],
  alternates: { canonical: 'https://www.ajtenterprise.co.za' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.ajtenterprise.co.za',
    siteName: 'AJT Enterprise',
    title: 'AJT Enterprise | Shadeport & Carport Installation, Repairs & Maintenance',
    description: "Gauteng & Limpopo's trusted shadeport and carport specialists. New installations, repairs and maintenance. Call 065 867 7363.",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AJT Enterprise Shadeports & Carports', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJT Enterprise | Shadeport & Carport Installation, Repairs & Maintenance',
    description: 'New shadeport & carport installations, repairs and maintenance across Gauteng & Limpopo. Call 065 867 7363.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const services = [
  { href: '/shadeport-installation', label: 'Shadeport Installation', desc: 'New structures, built to spec', image: '/images/shadeport-installation.png' },
  { href: '/cantilever-shadeports', label: 'Cantilever Shadeports', desc: 'No centre poles, clean sightlines', image: '/images/cantilever-shadeports.png' },
  { href: '/carports', label: 'Carports', desc: 'Custom single & double shelters', image: '/images/carports.png' },
  { href: '/carport-installation', label: 'Carport Installation', desc: 'Professional fitting at your property', image: '/images/carport-installation.png' },
  { href: '/parking-bay-shadeports', label: 'Parking Bay Shadeports', desc: 'Commercial & residential cover', image: '/images/parking-bay-shadeports.png' },
  { href: '/shadeport-repairs', label: 'Shadeport Repairs', desc: 'Frames, cladding & fittings fixed', image: '/images/shadeport-repairs.png' },
  { href: '/shadeport-maintenance', label: 'Shadeport Maintenance', desc: 'Scheduled servicing & inspections', image: '/images/shadeport-maintenance.png' },
  { href: '/shadeport-recovering', label: 'Shadeport Re-Covering', desc: 'Fabric & roof sheet replacement', image: '/images/shadeport-recovering.png' },
]

// Gauteng & Limpopo coverage. Add a slug to builtAreaSlugs the moment its
// dedicated page goes live — nothing else needs to change.
const areaRegions = [
  {
    region: 'Gauteng',
    areas: [
      { name: 'Johannesburg', slug: 'johannesburg' },
      { name: 'Pretoria', slug: 'pretoria' },
      { name: 'Sandton', slug: 'sandton' },
      { name: 'Centurion', slug: 'centurion' },
      { name: 'Midrand', slug: 'midrand' },
      { name: 'Randburg', slug: 'randburg' },
      { name: 'Roodepoort', slug: 'roodepoort' },
      { name: 'Vereeniging', slug: 'vereeniging' },
    ],
  },
  {
    region: 'Limpopo',
    areas: [
      { name: 'Polokwane', slug: 'polokwane' },
      { name: 'Tzaneen', slug: 'tzaneen' },
      { name: 'Mokopane', slug: 'mokopane' },
      { name: 'Thohoyandou', slug: 'thohoyandou' },
      { name: 'Lephalale', slug: 'lephalale' },
      { name: 'Bela-Bela', slug: 'bela-bela' },
    ],
  },
]
const builtAreaSlugs = new Set<string>([]) // none live yet — all render as plain labels

const trustPillars = [
  {
    heading: 'Certified Installers',
    body: 'Trained. Experienced. Careful.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 3L5 8.5V18C5 25.18 10.74 31.9 18 33C25.26 31.9 31 25.18 31 18V8.5L18 3Z" stroke={GOLD} strokeWidth="1.8" fill="none"/>
        <path d="M12 18L16 22L24 14" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    heading: 'Fast Turnaround',
    body: 'Quoted, built and installed quickly.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="18" cy="18" r="5" stroke={GOLD} strokeWidth="1.8" fill="none"/>
        <path d="M15 4.5h6v3l2 1 2.6-1.5 4.24 4.24-1.5 2.6 1 2h3v6h-3l-1 2 1.5 2.6-4.24 4.24-2.6-1.5-2 1v3h-6v-3l-2-1-2.6 1.5L4.16 21.34l1.5-2.6-1-2h-3v-6h3l1-2-1.5-2.6L8.4 5.9l2.6 1.5 2-1V4.5Z" stroke={GOLD} strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    heading: 'Gauteng & Limpopo',
    body: 'Two provinces, one dependable team.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M21 4L9 20H18L15 32L27 16H18L21 4Z" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    heading: 'Weatherproof Builds',
    body: 'Rated for sun, wind & summer storms.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M23 5C20.24 5 18 7.24 18 10C18 10.9 18.24 11.74 18.66 12.46L5 26.12L9.88 31L23.54 17.34C24.26 17.76 25.1 18 26 18C28.76 18 31 15.76 31 13C31 12.1 30.76 11.26 30.34 10.54L26.88 14L22 13.12L21.12 8.24L24.58 4.78C24 4.6 23.5 5 23 5Z" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M8 28L14 22" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    heading: 'Trusted Service',
    body: 'Honest. Professional. Dependable.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 14H10L14 10H20L24 14H26" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M32 14H26L20 20L16 18L12 22L16 26L20 24L26 28H32" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M4 14V24H10V14H4Z" stroke={GOLD} strokeWidth="1.8" fill="none"/>
        <path d="M26 14V28H32V14H26Z" stroke={GOLD} strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
]

const homepageFAQs = [
  {
    question: 'How long does a shadeport or carport installation take?',
    answer: "Most single carports and standard shadeports are installed within a day or two once the design is confirmed. Larger cantilever structures or multi-bay parking cover can take longer depending on size and site access, and we'll give you an accurate timeline with your quote.",
  },
  {
    question: 'Do you repair existing shadeports and carports, or only build new ones?',
    answer: "Both. We repair damaged frames, replace worn cladding and fittings, and offer scheduled maintenance to keep an existing structure sound. If a shadeport has reached the end of its life, we can also re-cover it with new fabric or roof sheeting instead of a full rebuild.",
  },
  {
    question: 'What areas do you cover?',
    answer: 'We install and maintain shadeports and carports across Gauteng, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging, and across Limpopo, including Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.',
  },
]

const whyReasons = [
  {
    num: '01',
    title: 'Built To Handle Our Weather',
    body: 'Structures and materials suited to local sun, wind and summer storms, not just a generic build.',
  },
  {
    num: '02',
    title: 'Fast, Reliable Turnaround',
    body: 'We keep projects moving from quote to completion, without cutting corners on the finish.',
  },
  {
    num: '03',
    title: 'End-to-End Service',
    body: 'From the first site visit to final installation and after-care, one team handles it all.',
  },
  {
    num: '04',
    title: 'Written Quote Before Any Work',
    body: 'A clear quote for the structure, size and finish before we start. No hidden fees, no surprises on the invoice.',
  },
  {
    num: '05',
    title: 'Trusted, Professional Team',
    body: 'Honest communication and workmanship we stand behind, on every job, every time.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.ajtenterprise.co.za/#business',
      name: 'AJT Enterprise',
      description: 'Shadeport and carport installation, repairs and maintenance, serving Gauteng and Limpopo.',
      url: 'https://www.ajtenterprise.co.za',
      telephone: '+27658677363',
      email: 'Info@ajtenterprise.co.za',
      priceRange: '$$',
      currenciesAccepted: 'ZAR',
      paymentAccepted: 'Cash, EFT',
      areaServed: [
        {
          '@type': 'State',
          name: 'Gauteng',
          containsPlace: areaRegions[0].areas.map((a) => ({ '@type': 'City', name: a.name })),
        },
        {
          '@type': 'State',
          name: 'Limpopo',
          containsPlace: areaRegions[1].areas.map((a) => ({ '@type': 'City', name: a.name })),
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Shadeport & Carport Services',
        itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.label } })),
      },
      image: 'https://www.ajtenterprise.co.za/og-image.png',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.ajtenterprise.co.za/#website',
      url: 'https://www.ajtenterprise.co.za',
      name: 'AJT Enterprise',
      publisher: { '@id': 'https://www.ajtenterprise.co.za/#business' },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <FAQSchema faqs={homepageFAQs} />

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden md:min-h-[88vh] flex flex-col"
        style={{ background: BG }}
        aria-label="AJT Enterprise Shadeports & Carports"
      >
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/images/hero-shadeport.png"
            alt="AJT Enterprise cantilever shadeport installation, Gauteng"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${BG} 0%, ${BG}d9 55%, ${BG}40 100%)` }} />
          <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 w-full">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.35em] uppercase mb-6" style={{ color: GOLD }}>
                Gauteng &amp; Limpopo&apos;s Shadeport &amp; Carport Specialists
              </p>
              <h1 className="font-black text-white leading-[1.03] mb-6" style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5rem)' }}>
                Shade That<br />
                <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  Stands The Test.
                </span>
              </h1>
              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                New shadeport and carport installations, repairs and maintenance,
                built to handle Gauteng and Limpopo&apos;s sun, wind and summer storms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0658677363"
                  style={{ background: RED }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-black text-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
                  aria-label="Call AJT Enterprise on 065 867 7363"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  Call 065 867 7363
                </a>
                <Link
                  href="/contact"
                  style={{ borderColor: `${GOLD}80`, color: GOLD }}
                  className="inline-flex items-center justify-center px-8 py-4 border font-semibold text-base hover:brightness-110 transition-all"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="relative z-10 md:hidden">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/images/hero-shadeport.png"
              alt="AJT Enterprise shadeport installation"
              fill
              priority
              fetchPriority="high"
              className="object-cover object-center"
              sizes="100vw"
              quality={82}
            />
            <div className="absolute inset-x-0 top-0 h-16" style={{ background: `linear-gradient(to bottom, ${BG}, transparent)` }} />
            <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
          </div>
        </div>

        {/* Trust pillars */}
        <div className="relative z-10 border-t backdrop-blur-sm" style={{ borderColor: `${GOLD}26`, background: 'rgba(0,0,0,0.6)' }}>
          <div className="max-w-6xl mx-auto px-6 py-6 md:py-8">
            <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
              {trustPillars.map((pillar) => (
                <div key={pillar.heading} className="flex flex-col items-center text-center gap-2.5">
                  <div>{pillar.icon}</div>
                  <dt className="text-white font-bold text-[11px] uppercase tracking-widest leading-tight">{pillar.heading}</dt>
                  <dd className="text-white/45 text-[11px] leading-snug">{pillar.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES — a real photo on every card
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>What We Do</p>
              <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
                Every Shadeport &amp; Carport<br />Service, One Team
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]/45 hover:text-[#1a1a1a] transition-colors shrink-0"
            >
              View all services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col overflow-hidden rounded-xl bg-[#f5f4f0] border border-[#1a1a1a]/[0.06] hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.label} by AJT Enterprise — Gauteng & Limpopo`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to top, ${BG}90, transparent 60%)` }} />
                  <div className="absolute bottom-2 right-2 rounded-md p-1" style={{ background: 'rgba(13,7,5,0.55)', backdropFilter: 'blur(2px)' }}>
                    <Image
                      src="/images/aj-enterprise-logo.png"
                      alt=""
                      width={52}
                      height={37}
                      className="h-6 w-auto opacity-90"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#1a1a1a] text-sm mb-1 leading-snug">{service.label}</h3>
                  <p className="text-[#1a1a1a]/45 text-xs leading-snug mb-4">{service.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: GOLD_DARK }}>
                    Learn more
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Free quote banner */}
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 md:p-8 rounded-xl" style={{ background: RED }}>
            <div>
              <p className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Not Sure Which Service You Need?</p>
              <p className="text-white font-black text-xl leading-snug">Get a free, no-obligation quote on your project.</p>
            </div>
            <a
              href="tel:0658677363"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white font-black text-base hover:bg-[#f5f4f0] transition-colors shrink-0"
              style={{ color: RED }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              065 867 7363
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE US — dark, numbered reasons + image
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: BG }} aria-labelledby="why-us-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0">

            <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">
              <Image
                src="/images/why-choose-us.png"
                alt="AJT Enterprise installation team on site"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to right, transparent, ${BG}99)` }} />
              <div className="absolute top-4 right-4 rounded-md p-1.5" style={{ background: 'rgba(13,7,5,0.55)', backdropFilter: 'blur(2px)' }}>
                <Image
                  src="/images/aj-enterprise-logo.png"
                  alt=""
                  width={84}
                  height={60}
                  className="h-9 w-auto opacity-90"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '10+', label: 'Years Experience' },
                    { value: 'Free', label: 'On-Site Quotes' },
                    { value: '2', label: 'Provinces Covered' },
                    { value: '✓', label: 'Warranty Included' },
                  ].map((s) => (
                    <div key={s.label} className="backdrop-blur-sm px-4 py-3 border-l-2" style={{ background: `${BG}b3`, borderColor: GOLD }}>
                      <p className="font-black text-2xl leading-none" style={{ color: GOLD }}>{s.value}</p>
                      <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="py-16 md:py-20 px-8 md:px-12 lg:px-14">
              <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD }}>Why Choose Us</p>
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                Why Gauteng &amp; Limpopo<br />Trust AJT Enterprise
              </h2>
              <div className="w-10 h-[3px] mb-10" style={{ background: GOLD }} />

              <div className="divide-y divide-white/[0.07]">
                {whyReasons.map((item) => (
                  <div key={item.num} className="py-6 flex gap-5 group">
                    <span className="font-black text-sm leading-none shrink-0 mt-0.5 w-6 transition-colors" style={{ color: `${GOLD}40` }}>
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1.5 transition-colors">{item.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/15 text-white text-sm font-semibold hover:border-white/40 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  style={{ background: GOLD, color: BG }}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold hover:brightness-105 transition-all"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          AREAS — Gauteng & Limpopo
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f4f0]" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Where We Work</p>
              <h2 id="areas-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
                Serving Gauteng<br />&amp; Limpopo
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-[#1a1a1a]/8 mb-10">
            {areaRegions.map((group) => (
              <div key={group.region} className="bg-white p-6 md:p-7">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5 pb-3 border-b border-[#1a1a1a]/8" style={{ color: GOLD_DARK }}>
                  {group.region}
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {group.areas.map((area) => {
                    const isBuilt = builtAreaSlugs.has(area.slug)
                    return (
                      <li key={area.slug}>
                        {isBuilt ? (
                          <Link
                            href={`/${group.region.toLowerCase()}-${area.slug}`}
                            className="flex items-center justify-between text-sm font-medium text-[#1a1a1a]/65 hover:text-[#1a1a1a] transition-colors group/item"
                          >
                            {area.name}
                          </Link>
                        ) : (
                          <span className="block text-sm font-medium text-[#1a1a1a]/50 cursor-default">
                            {area.name}
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-[#1a1a1a]/45 text-sm max-w-2xl leading-relaxed">
            Our installation teams work across Gauteng and Limpopo, from residential
            driveways to commercial parking bays, with the same on-site quote,
            careful installation and after-care wherever the job is.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          QUOTE CTA — full-width impact
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative text-white overflow-hidden" style={{ background: RED }} aria-label="Get a free quote callout">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '8px 8px' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-white/55 text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Get A Free Quote</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Ready For Your<br />New Shadeport?
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Tell us what you need covered and we&apos;ll come back with an
                accurate, no-obligation quote for installation, repairs or maintenance.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
              <a
                href="tel:0658677363"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white font-black text-2xl hover:bg-[#f5f4f0] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                style={{ color: RED }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                065 867 7363
              </a>
              <Link
                href="/shadeport-installation"
                className="text-white/50 text-xs hover:text-white transition-colors underline underline-offset-4"
              >
                Learn about our installation process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COST TEASER
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="cost-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            <div className="relative aspect-[4/3] overflow-hidden group order-2 md:order-1">
              <Image
                src="/images/shadeport-quote.png"
                alt="AJT Enterprise on-site shadeport measurement and quote"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: GOLD }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: GOLD }} />
              <div className="absolute top-3 right-3 rounded-md p-1.5" style={{ background: 'rgba(13,7,5,0.55)', backdropFilter: 'blur(2px)' }}>
                <Image
                  src="/images/aj-enterprise-logo.png"
                  alt=""
                  width={84}
                  height={60}
                  className="h-9 w-auto opacity-90"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD_DARK }}>Pricing</p>
              <h2 id="cost-heading" className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-5 leading-tight">
                What Does A Shadeport<br />Or Carport Cost?
              </h2>
              <div className="w-10 h-0.5 mb-6" style={{ background: GOLD }} />
              <p className="text-base leading-relaxed text-[#1a1a1a]/65 mb-4">
                Costs vary with the size of the structure, whether it&apos;s
                post-supported or cantilever, and the cover material, whether shade
                fabric, polycarbonate or IBR roof sheeting.
              </p>
              <p className="text-base leading-relaxed text-[#1a1a1a]/65 mb-8">
                We assess your site and give you a clear written quote before any
                work starts. A clear scope, a clear number, then you decide, with
                no surprise charges on the invoice.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase hover:text-[#1a1a1a] transition-colors"
                style={{ color: GOLD_DARK }}
              >
                Request a quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ — accordion + sticky left
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f4f0]" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 items-start">

            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD_DARK }}>FAQ</p>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-[#1a1a1a] leading-tight mb-5">
                Common Questions,<br />Straight Answers
              </h2>
              <div className="w-10 h-0.5 mb-6" style={{ background: GOLD }} />
              <p className="text-[#1a1a1a]/50 text-sm leading-relaxed mb-8 max-w-xs">
                Everything you need to know about installations, repairs and
                coverage, answered by our team.
              </p>
              <Link
                href="/faq"
                style={{ background: '#1a1a1a' }}
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-bold hover:brightness-125 transition-all"
              >
                View all FAQs
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="border-t border-[#1a1a1a]/10">
              {homepageFAQs.map((faq) => (
                <details key={faq.question} className="group border-b border-[#1a1a1a]/10">
                  <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none select-none">
                    <h3 className="text-base font-bold text-[#1a1a1a] leading-snug pr-2">
                      {faq.question}
                    </h3>
                    <span className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center border border-[#1a1a1a]/20 transition-colors">
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-open:hidden" aria-hidden="true">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="hidden group-open:block" aria-hidden="true">
                        <path d="M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </summary>
                  <div className="pb-5 pr-9">
                    <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: BG }} aria-label="Final call to action">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-white/[0.07]">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                Ready To Get Your Shade Sorted?
              </h2>
              <p className="text-white/35 text-sm">
                New installation, repair or maintenance, one call gets it moving.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0658677363"
                style={{ background: RED }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-black text-base hover:brightness-110 transition-all"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                065 867 7363
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/15 text-white font-semibold text-base hover:border-white/40 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <nav aria-label="Quick links" className="flex flex-wrap gap-x-6 gap-y-2 pt-8">
            {[
              { href: '/services', label: 'All Services' },
              { href: '/shadeport-installation', label: 'Shadeport Installation' },
              { href: '/carports', label: 'Carports' },
              { href: '/shadeport-repairs', label: 'Shadeport Repairs' },
              { href: '/shadeport-maintenance', label: 'Shadeport Maintenance' },
              { href: '/faq', label: 'FAQ' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-white/25 hover:text-white/70 text-xs transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
