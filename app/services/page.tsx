import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQSchema from '@/components/faq-schema'

const GOLD = '#dcb068'
const GOLD_LIGHT = '#f4e78b'
const GOLD_DARK = '#8a6535'
const RED = '#b8161d'
const RED_LIGHT = '#fc4d53'
const BG = '#0d0705'
const INK = '#1a1a1a'

const BASE_URL = 'https://www.ajtenterprise.co.za'
const PAGE_URL = `${BASE_URL}/services`
const PHONE_DISPLAY = '065 867 7363'
const PHONE_TEL = '0658677363'

export const metadata: Metadata = {
  title: 'Shadeport & Carport Services | AJT Enterprise',
  description:
    'Full range of shadeport and carport services across Gauteng & Limpopo. Installation, cantilever structures, carports, repairs, maintenance & re-covering. Free written quote, call 065 867 7363.',
  keywords: [
    'shadeport services Gauteng',
    'carport services Limpopo',
    'shadeport installation',
    'cantilever shadeports',
    'carport installation',
    'parking bay shadeports',
    'shadeport repairs',
    'shadeport maintenance',
    'shadeport re-covering',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: PAGE_URL,
    siteName: 'AJT Enterprise',
    title: 'Shadeport & Carport Services | AJT Enterprise',
    description:
      'Installation, cantilever structures, carports, repairs, maintenance and re-covering across Gauteng & Limpopo. Call 065 867 7363.',
    images: [{ url: '/images/shadeport-installation.png', width: 1200, height: 900, alt: 'AJT Enterprise shadeport and carport services', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadeport & Carport Services | AJT Enterprise',
    description: 'Installation, repairs, maintenance and more across Gauteng & Limpopo. Call 065 867 7363.',
    images: ['/images/shadeport-installation.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

// ── Structured Data ────────────────────────────────────────────────────────────

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Shadeport & Carport Services — AJT Enterprise',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Shadeport Installation',    url: `${BASE_URL}/shadeport-installation` },
    { '@type': 'ListItem', position: 2, name: 'Cantilever Shadeports',     url: `${BASE_URL}/cantilever-shadeports` },
    { '@type': 'ListItem', position: 3, name: 'Carports',                  url: `${BASE_URL}/carports` },
    { '@type': 'ListItem', position: 4, name: 'Carport Installation',      url: `${BASE_URL}/carport-installation` },
    { '@type': 'ListItem', position: 5, name: 'Parking Bay Shadeports',    url: `${BASE_URL}/parking-bay-shadeports` },
    { '@type': 'ListItem', position: 6, name: 'Shadeport Repairs',         url: `${BASE_URL}/shadeport-repairs` },
    { '@type': 'ListItem', position: 7, name: 'Shadeport Maintenance',     url: `${BASE_URL}/shadeport-maintenance` },
    { '@type': 'ListItem', position: 8, name: 'Shadeport Re-Covering',     url: `${BASE_URL}/shadeport-recovering` },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: PAGE_URL },
  ],
}

const serviceNodes = [
  { name: 'Shadeport Installation', url: '/shadeport-installation' },
  { name: 'Cantilever Shadeports', url: '/cantilever-shadeports' },
  { name: 'Carports', url: '/carports' },
  { name: 'Carport Installation', url: '/carport-installation' },
  { name: 'Parking Bay Shadeports', url: '/parking-bay-shadeports' },
  { name: 'Shadeport Repairs', url: '/shadeport-repairs' },
  { name: 'Shadeport Maintenance', url: '/shadeport-maintenance' },
  { name: 'Shadeport Re-Covering', url: '/shadeport-recovering' },
].map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  url: `${BASE_URL}${s.url}`,
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'State', name: 'Gauteng' },
    { '@type': 'State', name: 'Limpopo' },
  ],
  serviceType: 'Shadeport & Carport Installation',
}))

// ── Page data ──────────────────────────────────────────────────────────────────

const services = [
  {
    href: '/shadeport-installation',
    title: 'Shadeport Installation',
    shortTitle: 'Installation',
    image: '/images/shadeport-installation.png',
    alt: 'New shadeport structure installed by AJT Enterprise',
    badge: 'Most Requested',
    description:
      'New shadeport structures, built to spec for homes and businesses across Gauteng and Limpopo. From a single driveway cover to a full commercial installation, every structure is custom-measured and installed by a certified team.',
    points: [
      'Custom-measured to fit your property',
      'Weather-rated materials for local conditions',
      'Free written quote before any work starts',
      'Fast turnaround from site visit to finished install',
    ],
  },
  {
    href: '/cantilever-shadeports',
    title: 'Cantilever Shadeports',
    shortTitle: 'Cantilever',
    image: '/images/cantilever-shadeports.png',
    alt: 'Cantilever shadeport with no centre poles, installed by AJT Enterprise',
    badge: null,
    description:
      'Anchored on one side only, cantilever shadeports leave your driveway, showroom or parking area completely clear of poles. Ideal for tight spaces, dealership forecourts and properties that want a cleaner, more architectural finish.',
    points: [
      'No centre poles, completely open parking area',
      'Engineered foundation for the full load',
      'Suited to tight driveways and showrooms',
      'Multi-bay spans available for commercial sites',
    ],
  },
  {
    href: '/carports',
    title: 'Carports',
    shortTitle: 'Carports',
    image: '/images/carports.png',
    alt: 'Custom-built carport installed by AJT Enterprise',
    badge: null,
    description:
      'Custom-built single and double carports, matched to your home or business rather than fitted from a generic kit. Roofing, colour and framing chosen to suit your property and budget.',
    points: [
      'Single and double options, sized to fit',
      'IBR sheeting, polycarbonate or shade fabric roofing',
      'Residential and commercial installations',
      'Most builds completed within a day or two',
    ],
  },
  {
    href: '/carport-installation',
    title: 'Carport Installation',
    shortTitle: 'Fitting',
    image: '/images/carport-installation.png',
    alt: 'AJT Enterprise team fitting a carport on site',
    badge: 'Popular for Business',
    description:
      'Professional, on-site fitting for new and existing carports, including site assessment, foundation work and secure anchoring. A structure is only as good as its installation, and we take that step seriously.',
    points: [
      'Site assessment included in every quote',
      'Foundation and anchoring work where needed',
      'Clean, timely installation with minimal disruption',
      'Multi-bay fitting for complexes and offices',
    ],
  },
  {
    href: '/parking-bay-shadeports',
    title: 'Parking Bay Shadeports',
    shortTitle: 'Parking Cover',
    image: '/images/parking-bay-shadeports.png',
    alt: 'Commercial parking bay shadeports installed by AJT Enterprise',
    badge: null,
    description:
      'Multi-bay shadeports for offices, retail parks, complexes and schools, engineered for heavy daily traffic. We plan installation around your business, working in sections or outside hours where needed.',
    points: [
      'Built for commercial-scale, daily traffic',
      'Sectioned installation to minimise disruption',
      'Durable IBR and polycarbonate roofing options',
      'Layout planned around your existing bays',
    ],
  },
  {
    href: '/shadeport-repairs',
    title: 'Shadeport Repairs',
    shortTitle: 'Repairs',
    image: '/images/shadeport-repairs.png',
    alt: 'AJT Enterprise technician repairing a shadeport frame',
    badge: null,
    description:
      'A shadeport rarely fails all at once, rust starts at a joint, fabric tears at a stitch line, a bracket works loose. We give an honest on-site assessment and repair frames, fabric, roof sheeting and fittings, whether we installed the original structure or not.',
    points: [
      'Honest on-site assessment, not an upsell',
      'Frame, cladding and fitting repairs',
      'Fast response to storm and wind damage',
      'Works on any installer\u2019s structure',
    ],
  },
  {
    href: '/shadeport-maintenance',
    title: 'Shadeport Maintenance',
    shortTitle: 'Maintenance',
    image: '/images/shadeport-maintenance.png',
    alt: 'AJT Enterprise technician servicing a shadeport',
    badge: null,
    description:
      'A loose bolt, a spot of surface rust or a small tear rarely feels urgent on its own, but left unchecked it turns into a full repair. Scheduled inspections check the frame, fittings and covering, catching small issues before they become expensive ones.',
    points: [
      'Full structural inspection of frame and fittings',
      'Early problem detection before failure',
      'Scheduled visits suited to your structure',
      'Recurring maintenance plans for commercial sites',
    ],
  },
  {
    href: '/shadeport-recovering',
    title: 'Shadeport Re-Covering',
    shortTitle: 'Re-Covering',
    image: '/images/shadeport-recovering.png',
    alt: 'AJT Enterprise fitting new fabric to a shadeport frame',
    badge: null,
    description:
      'Years of sun fade and weaken shade fabric long before the frame underneath gives up. If your structure is still sound but the covering has had enough, we fit new fabric or roof sheeting instead of a full rebuild, saving time and money.',
    points: [
      'No full rebuild needed if the frame is sound',
      'Fabric, polycarbonate or IBR sheeting options',
      'Match your existing look or refresh it',
      'Most residential re-covers done within a day',
    ],
  },
]

const faqs = [
  {
    question: 'How much does a shadeport or carport cost?',
    answer:
      'Cost depends on size, structure type (post-supported or cantilever), roofing material and site conditions. We give a clear written quote after a free site visit, so you know the number before anything is booked.',
  },
  {
    question: 'How long does an installation take?',
    answer:
      'Most single and double structures are completed within a day or two once the design and quote are confirmed. Larger commercial or multi-bay installations take longer depending on scope and site access.',
  },
  {
    question: 'Do you repair structures you did not originally install?',
    answer:
      'Yes. We assess and repair existing shadeports and carports regardless of who installed them, including frame repairs, cladding replacement and full re-covers.',
  },
  {
    question: 'Which areas do you service?',
    answer:
      'We work across Gauteng, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging, and across Limpopo, including Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.',
  },
]

const areas = [
  { name: 'Johannesburg', slug: 'johannesburg' }, { name: 'Pretoria', slug: 'pretoria' },
  { name: 'Sandton', slug: 'sandton' }, { name: 'Centurion', slug: 'centurion' },
  { name: 'Midrand', slug: 'midrand' }, { name: 'Randburg', slug: 'randburg' },
  { name: 'Roodepoort', slug: 'roodepoort' }, { name: 'Vereeniging', slug: 'vereeniging' },
  { name: 'Polokwane', slug: 'polokwane' }, { name: 'Tzaneen', slug: 'tzaneen' },
  { name: 'Mokopane', slug: 'mokopane' }, { name: 'Thohoyandou', slug: 'thohoyandou' },
  { name: 'Lephalale', slug: 'lephalale' }, { name: 'Bela-Bela', slug: 'bela-bela' },
]

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Structured data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {serviceNodes.map((node, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumb ── */}
      <div style={{ background: '#f5f4f0' }} className="border-b border-[#1a1a1a]/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="py-3 text-sm">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors">Home</Link></li>
              <li className="text-[#1a1a1a]/30" aria-hidden="true">/</li>
              <li className="text-[#1a1a1a] font-medium" aria-current="page">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: BG }} aria-label="Shadeport and carport services across Gauteng and Limpopo">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shadeport-installation.png"
            alt="AJT Enterprise shadeport and carport services"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center opacity-40"
            sizes="100vw"
            quality={82}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${BG} 0%, ${BG}e6 52%, ${BG}59 100%)` }} />
          <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.35em] uppercase mb-5" style={{ color: GOLD }}>
              What We Do
            </p>
            <h1 className="font-black text-white leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
              Every Shadeport &amp;{' '}
              <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Carport Service
              </span>{' '}
              Under One Roof
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Installation, cantilever structures, carports, repairs, maintenance and
              re-covering, all handled by one dependable team across Gauteng and
              Limpopo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={`tel:${PHONE_TEL}`}
                style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-black text-lg hover:brightness-110 transition-all rounded-sm"
                aria-label={`Call AJT Enterprise on ${PHONE_DISPLAY}`}
              >
                <PhoneIcon />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                style={{ borderColor: `${GOLD}80`, color: GOLD }}
                className="inline-flex items-center justify-center px-8 py-4 border font-semibold text-base hover:brightness-110 transition-all rounded-sm"
              >
                Get a Free Quote
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Key benefits">
              {['Free written quote', 'Gauteng & Limpopo', 'Fast turnaround'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7.25" stroke={GOLD} strokeWidth="1" />
                    <path d="M5 8l2 2 4-4.5" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Quick-nav chips ── */}
      <nav className="bg-white border-b border-[#1a1a1a]/[0.08] overflow-x-auto" aria-label="Jump to service section">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex items-center gap-1 py-3 min-w-max">
            {services.map((s) => (
              <li key={s.href}>
                <a
                  href={`#${s.href.replace('/', '')}`}
                  className="inline-block px-3.5 py-1.5 text-[12px] font-medium text-[#1a1a1a]/70 hover:text-[#8a6535] hover:bg-[#f5f4f0] transition-colors whitespace-nowrap border border-transparent hover:border-[#dcb068]/30 rounded-sm"
                >
                  {s.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Service entries ── */}
      <main>
        {services.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <section
              key={service.href}
              id={service.href.replace('/', '')}
              className={`py-16 md:py-20 ${isEven ? 'bg-[#f5f4f0]' : 'bg-white'}`}
              aria-labelledby={`service-heading-${index}`}
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: GOLD }} />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: GOLD }} />
                    {service.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 text-[11px] font-bold tracking-wider uppercase rounded-sm" style={{ background: GOLD, color: INK }}>
                        {service.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h2 id={`service-heading-${index}`} className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight" style={{ color: INK }}>
                      <Link href={service.href} className="hover:opacity-80 transition-opacity">
                        {service.title}
                      </Link>
                    </h2>
                    <div className="w-10 h-0.5 mb-5" style={{ background: GOLD }} />
                    <p className="text-base md:text-lg leading-relaxed text-[#1a1a1a]/70 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-[#1a1a1a]/75">
                          <span className="mt-1 w-4 h-4 shrink-0 flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <circle cx="7" cy="7" r="6.5" stroke={GOLD_DARK} strokeWidth="1"/>
                              <path d="M4 7l2 2 4-4" stroke={GOLD_DARK} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={service.href}
                        style={{ background: BG }}
                        className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold text-sm hover:brightness-125 transition-all rounded-sm"
                      >
                        Learn more
                      </Link>
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="inline-flex items-center justify-center px-6 py-3 border border-[#1a1a1a]/20 text-[#1a1a1a] font-semibold text-sm hover:border-[#dcb068] hover:text-[#8a6535] transition-colors rounded-sm"
                      >
                        Get a quote
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          )
        })}
      </main>

      {/* ── FAQ section ── */}
      <section className="py-16 md:py-24" style={{ background: BG }} aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD }}>Common Questions</p>
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-black text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-white/[0.08] p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <h3 className="text-white font-bold text-base mb-3 leading-snug">{faq.question}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/30 text-sm">
            More questions?{' '}
            <Link href="/faq" style={{ color: GOLD }} className="hover:underline">
              Visit our full FAQ page
            </Link>{' '}
            or{' '}
            <a href={`tel:${PHONE_TEL}`} style={{ color: GOLD }} className="hover:underline">
              call us directly
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── AREAS SERVED ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Where We Work</p>
          <h2 id="areas-heading" className="text-2xl md:text-3xl font-black leading-tight mb-8 max-w-xl" style={{ color: INK }}>
            Every Service, Across Gauteng &amp; Limpopo
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/shadeport-${area.slug}`}
                  className="inline-block px-4 py-2 rounded-full border border-[#1a1a1a]/10 text-sm text-[#1a1a1a]/70 bg-[#f5f4f0] hover:border-[#dcb068]/60 hover:text-[#8a6535] transition-colors"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Internal linking ── */}
      <section className="py-14" style={{ background: '#f5f4f0' }} aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-xl font-black mb-6" style={{ color: INK }}>Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/about',   label: 'About Us',    sub: 'Who we are' },
              { href: '/faq',     label: 'FAQ',          sub: 'Common questions answered' },
              { href: '/contact', label: 'Get a Quote',  sub: 'Free site visit & quote' },
              { href: '/shadeport-johannesburg', label: 'Service Areas', sub: 'Where we operate' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-4 bg-white border border-[#1a1a1a]/[0.08] hover:border-[#dcb068]/40 transition-colors rounded-lg"
              >
                <p className="font-bold text-sm group-hover:text-[#8a6535] transition-colors mb-1" style={{ color: INK }}>{item.label}</p>
                <p className="text-xs text-[#1a1a1a]/50">{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: BG }} className="text-white" aria-label="Contact AJT Enterprise">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Ready For Your{' '}
                <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  Shadeport Or Carport
                </span>?
              </h2>
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                Speak to our team for a free site visit and written quote. Trusted
                shadeport and carport services across Gauteng and Limpopo, from one
                dependable team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${PHONE_TEL}`}
                style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-black text-lg hover:brightness-110 transition-all rounded-sm"
                aria-label={`Call AJT Enterprise on ${PHONE_DISPLAY}`}
              >
                <PhoneIcon />
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                style={{ borderColor: `${GOLD}80`, color: GOLD }}
                className="inline-flex items-center justify-center px-8 py-4 border font-semibold hover:brightness-110 transition-all rounded-sm"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
