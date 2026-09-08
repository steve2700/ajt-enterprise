import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQSchema from '@/components/faq-schema'
import AreaSchema from '@/components/area-schema'
import { Breadcrumbs } from '@/components/breadcrumbs'

const GOLD = '#dcb068'
const GOLD_LIGHT = '#f4e78b'
const GOLD_DARK = '#8a6535'
const RED = '#b8161d'
const RED_LIGHT = '#fc4d53'
const BG = '#0d0705'
const INK = '#1a1a1a'

const BASE_URL = 'https://www.ajtenterprise.co.za'
const AREA_NAME = 'Thohoyandou'
const AREA_SLUG = 'thohoyandou'
const AREA_URL = `/shadeport-${AREA_SLUG}`
const PAGE_URL = `${BASE_URL}${AREA_URL}`
const PHONE_DISPLAY = '065 867 7363'
const PHONE_TEL = '0658677363'

// Thohoyandou-specific suburbs for local relevance
const SUBURBS = [
  'Sibasa', 'Shayandima', 'Makwarela', 'Mvudi', 'Tshisaulu',
  'Thavhani', 'Duthuni', 'Vondwe',
]

export const metadata: Metadata = {
  title: 'Shadeport & Carport Installation Thohoyandou | AJT Enterprise',
  description:
    "Thohoyandou's trusted shadeport and carport specialists. New installations, repairs and maintenance for homes and businesses across Thohoyandou and surrounding suburbs. Free written quote, call 065 867 7363.",
  keywords: [
    'shadeport installation Thohoyandou',
    'carports Thohoyandou',
    'shadeport repairs Thohoyandou',
    'carport installation Thohoyandou',
    'cantilever shadeports Thohoyandou',
    'shadeport prices Thohoyandou',
    'parking bay shadeports Thohoyandou',
    'shadeport maintenance Thohoyandou',
    'shadeports Sibasa',
    'shadeports Shayandima',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: PAGE_URL,
    siteName: 'AJT Enterprise',
    title: 'Shadeport & Carport Installation Thohoyandou | AJT Enterprise',
    description:
      "Thohoyandou's trusted shadeport and carport specialists. New installations, repairs and maintenance. Free written quote, call 065 867 7363.",
    images: [{ url: '/images/shadeport-recovering.png', width: 1200, height: 900, alt: 'Shadeport installation in Thohoyandou by AJT Enterprise', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadeport & Carport Installation Thohoyandou | AJT Enterprise',
    description: "Thohoyandou's trusted shadeport and carport specialists. Call 065 867 7363.",
    images: ['/images/shadeport-recovering.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const faqs = [
  {
    question: `Do you install shadeports and carports in ${AREA_NAME}?`,
    answer: `Yes. ${AREA_NAME} is one of our core service areas. We install, repair and maintain shadeports and carports for homes and businesses across ${AREA_NAME} and surrounding suburbs including ${SUBURBS.slice(0, 4).join(', ')} and more.`,
  },
  {
    question: `How quickly can you get to a site in ${AREA_NAME}?`,
    answer: `We run regular installation and repair teams through ${AREA_NAME}, so most site visits and quotes can be scheduled within a few days of your call. Once a quote is approved, standard installations are usually completed within a day or two.`,
  },
  {
    question: 'Do you charge extra for quotes or site visits in this area?',
    answer: `No. On-site quotes anywhere in ${AREA_NAME} are free and come with no obligation. We measure the space, talk through your options and give you a clear written price before anything is booked.`,
  },
  {
    question: `Can you repair an existing shadeport or carport in ${AREA_NAME}?`,
    answer: 'Yes. We repair damaged frames, replace worn cladding and fittings, and offer scheduled maintenance to keep an existing structure sound, in addition to new installations.',
  },
  {
    question: 'What areas near Thohoyandou do you also cover?',
    answer: 'Alongside Thohoyandou, we install and maintain shadeports and carports across Polokwane, Tzaneen, Mokopane, Lephalale and Bela-Bela in Limpopo, and across Gauteng including Johannesburg, Pretoria and Sandton.',
  },
]

const servicesOffered = [
  { href: '/shadeport-installation', label: 'Shadeport Installation', desc: 'New structures, built to spec' },
  { href: '/cantilever-shadeports', label: 'Cantilever Shadeports', desc: 'No centre poles, clean sightlines' },
  { href: '/carports', label: 'Carports', desc: 'Custom single & double shelters' },
  { href: '/carport-installation', label: 'Carport Installation', desc: 'Professional fitting at your property' },
  { href: '/parking-bay-shadeports', label: 'Parking Bay Shadeports', desc: 'Commercial & residential cover' },
  { href: '/shadeport-repairs', label: 'Shadeport Repairs', desc: 'Frames, cladding & fittings fixed' },
  { href: '/shadeport-maintenance', label: 'Shadeport Maintenance', desc: 'Scheduled servicing & inspections' },
  { href: '/shadeport-recovering', label: 'Shadeport Re-Covering', desc: 'Fabric & roof sheet replacement' },
]

const whyLocal = [
  { title: 'Local Site Knowledge', body: `Years of installs across ${AREA_NAME} mean we know the sun, wind and space constraints typical of the area's homes and businesses.` },
  { title: 'Fast Local Turnaround', body: `Regular teams working in and around ${AREA_NAME} keep quote-to-install times short, without cutting corners.` },
  { title: 'Written Quote First', body: 'A clear, itemised quote for the structure, size and finish before we start. No hidden costs, ever.' },
  { title: 'Weatherproof Builds', body: "Frames and cladding rated for Gauteng's sun, wind and summer storms, properly anchored for long-term stability." },
]

// Other area pages for internal linking (this one excluded). Slugs without a
// dedicated page yet render as plain text further down instead of a link.
const otherAreas = {
  gauteng: [
    { name: 'Johannesburg', slug: 'johannesburg' },
    { name: 'Pretoria', slug: 'pretoria' },
    { name: 'Sandton', slug: 'sandton' },
    { name: 'Centurion', slug: 'centurion' },
    { name: 'Midrand', slug: 'midrand' },
    { name: 'Randburg', slug: 'randburg' },
    { name: 'Roodepoort', slug: 'roodepoort' },
    { name: 'Vereeniging', slug: 'vereeniging' },
  ],
  limpopo: [
    { name: 'Polokwane', slug: 'polokwane' },
    { name: 'Tzaneen', slug: 'tzaneen' },
    { name: 'Mokopane', slug: 'mokopane' },
    { name: 'Lephalale', slug: 'lephalale' },
    { name: 'Bela-Bela', slug: 'bela-bela' },
  ],
}
// All 14 area pages are confirmed and shipping — every area below links out.

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: `Shadeport & Carport Installation in ${AREA_NAME}`,
  serviceType: 'Shadeport & Carport Installation',
  description: `Shadeport and carport installation, repairs and maintenance for homes and businesses across ${AREA_NAME}.`,
  url: PAGE_URL,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'AJT Enterprise',
    telephone: '+27658677363',
    email: 'Info@ajtenterprise.co.za',
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
  },
  areaServed: { '@type': 'City', name: AREA_NAME },
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: { '@type': 'ContactPoint', telephone: '+27658677363', contactType: 'customer service', areaServed: 'ZA', availableLanguage: 'English' },
  },
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

export default function ThohoyandouAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AreaSchema areaName={AREA_NAME} url={AREA_URL} suburbs={SUBURBS} region="Limpopo" />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumb ── */}
      <div style={{ background: '#f5f4f0' }} className="border-b border-[#1a1a1a]/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Areas We Serve', href: '/services' }, { label: AREA_NAME }]} />
        </div>
      </div>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden" style={{ background: BG }} aria-label={`Shadeport and carport installation in ${AREA_NAME}`}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shadeport-recovering.png"
            alt={`AJT Enterprise shadeport installation in ${AREA_NAME}, Gauteng`}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
            quality={82}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${BG} 0%, ${BG}e6 52%, ${BG}59 100%)` }} />
          <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.35em] uppercase mb-5" style={{ color: GOLD }}>
              Shadeports &amp; Carports &middot; {AREA_NAME}
            </p>
            <h1 className="font-black text-white leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
              Shadeport &amp; Carport{' '}
              <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Installation
              </span>{' '}
              In {AREA_NAME}
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              New installations, repairs and maintenance for homes and businesses across{' '}
              {AREA_NAME} and surrounding suburbs, built to handle Gauteng&apos;s sun, wind and
              summer storms.
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
              {['Free written quote', `Local ${AREA_NAME} team`, 'Fast turnaround'].map((item) => (
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

      {/* ═══════════════ LOCAL INTRO ═══════════════ */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="intro-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Serving {AREA_NAME}</p>
              <h2 id="intro-heading" className="text-3xl md:text-4xl font-black leading-tight mb-5" style={{ color: INK }}>
                {AREA_NAME}&apos;s Shadeport &amp; Carport Specialists
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: GOLD }} />
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-5">
                From driveway shadeports in {SUBURBS[0]} and {SUBURBS[1]} to commercial parking
                cover in the {AREA_NAME} CBD, we&apos;ve built and maintained structures across the
                area for years. Every shadeport and carport is custom-measured, built with
                weather-rated materials and installed by a certified team that treats your
                property with care.
              </p>
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed">
                Whether it&apos;s a single driveway cover, a full re-cover on an ageing structure,
                or commercial parking cover for a complex, we handle the entire process for{' '}
                {AREA_NAME} clients, from site visit to design, manufacture and installation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {whyLocal.map((b) => (
                <div key={b.title} className="p-6 rounded-xl border border-[#1a1a1a]/[0.08] bg-[#f5f4f0]">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ background: BG }}>
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M5 8l2 2 4-4.5" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: INK }}>{b.title}</h3>
                  <p className="text-[#1a1a1a]/55 text-[13px] leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES OFFERED HERE ═══════════════ */}
      <section className="py-16 md:py-24" style={{ background: '#f5f4f0' }} aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>What We Offer In {AREA_NAME}</p>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-black leading-tight" style={{ color: INK }}>
              Every Shadeport &amp; Carport Service, Local To You
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(26,26,26,0.08)' }}>
            {servicesOffered.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white p-7 flex flex-col gap-3 hover:bg-[#faf9f6] transition-colors">
                <div className="w-8 h-0.5" style={{ background: GOLD }} />
                <h3 className="font-bold text-base leading-snug" style={{ color: INK }}>{s.label}</h3>
                <p className="text-[#1a1a1a]/50 text-sm leading-relaxed">{s.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: GOLD_DARK }}>
                  Learn more
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MID-PAGE CTA ═══════════════ */}
      <section className="py-14 md:py-16 bg-white" aria-label={`Request a free shadeport quote in ${AREA_NAME}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 md:p-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}>
            <div>
              <p className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Ready When You Are</p>
              <p className="text-white font-black text-2xl md:text-3xl leading-snug max-w-xl">
                Get a free, no-obligation quote for your {AREA_NAME} property today.
              </p>
            </div>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white font-black text-lg hover:brightness-95 transition-all rounded-sm shrink-0"
              style={{ color: RED }}
              aria-label={`Call AJT Enterprise on ${PHONE_DISPLAY}`}
            >
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-16 md:py-24" style={{ background: '#f5f4f0' }} aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3 text-center" style={{ color: GOLD_DARK }}>Common Questions</p>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-black leading-tight mb-10 text-center" style={{ color: INK }}>
            {AREA_NAME} Shadeport &amp; Carport FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-xl border border-[#1a1a1a]/[0.08] overflow-hidden">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-bold text-[15px] leading-snug select-none" style={{ color: INK }}>
                  {faq.question}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 transition-transform group-open:rotate-45" aria-hidden="true">
                    <path d="M9 3.5v11M3.5 9h11" stroke={GOLD_DARK} strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 -mt-1 text-[#1a1a1a]/65 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SUBURBS COVERED ═══════════════ */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="suburbs-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Local Coverage</p>
          <h2 id="suburbs-heading" className="text-2xl md:text-3xl font-black leading-tight mb-8 max-w-xl" style={{ color: INK }}>
            {AREA_NAME} Suburbs We Cover
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {SUBURBS.map((suburb) => (
              <li
                key={suburb}
                className="inline-block px-4 py-2 rounded-full border border-[#1a1a1a]/10 text-sm text-[#1a1a1a]/70 bg-[#f5f4f0]"
              >
                {suburb}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════ OTHER AREAS SERVED ═══════════════ */}
      <section className="py-16 md:py-20" style={{ background: '#f5f4f0' }} aria-labelledby="other-areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Also Serving</p>
          <h2 id="other-areas-heading" className="text-2xl md:text-3xl font-black leading-tight mb-8 max-w-xl" style={{ color: INK }}>
            Other Areas We Cover
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-[#1a1a1a]/8">
            {(['gauteng', 'limpopo'] as const).map((region) => (
              <div key={region} className="bg-white p-6 md:p-7">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5 pb-3 border-b border-[#1a1a1a]/8" style={{ color: GOLD_DARK }}>
                  {region === 'gauteng' ? 'Gauteng' : 'Limpopo'}
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {otherAreas[region].map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/shadeport-${area.slug}`}
                        className="text-sm font-medium text-[#1a1a1a]/65 hover:text-[#8a6535] transition-colors"
                      >
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section style={{ background: BG }} className="text-white" aria-label={`Contact AJT Enterprise in ${AREA_NAME}`}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Ready For Your{' '}
                <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  {AREA_NAME}
                </span>{' '}
                Shadeport?
              </h2>
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                Speak to our team for a free site visit and written quote. Trusted shadeport
                and carport installation across {AREA_NAME}, from one dependable team.
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
