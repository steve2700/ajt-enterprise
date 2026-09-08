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
const PAGE_URL = `${BASE_URL}/shadeport-maintenance`
const PHONE_DISPLAY = '065 867 7363'
const PHONE_TEL = '0658677363'

export const metadata: Metadata = {
  title: 'Shadeport Maintenance Gauteng & Limpopo | AJT Enterprise',
  description:
    'Scheduled shadeport and carport maintenance across Gauteng & Limpopo. Regular inspections that catch small issues before they become big repairs. Call 065 867 7363.',
  keywords: [
    'shadeport maintenance Gauteng',
    'shadeport maintenance Limpopo',
    'shadeport servicing near me',
    'carport maintenance South Africa',
    'shadeport inspection',
    'shadeport maintenance Johannesburg',
    'shadeport maintenance Pretoria',
    'shadeport maintenance Polokwane',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: PAGE_URL,
    siteName: 'AJT Enterprise',
    title: 'Shadeport Maintenance Gauteng & Limpopo | AJT Enterprise',
    description: 'Scheduled shadeport and carport maintenance across Gauteng & Limpopo. Call 065 867 7363.',
    images: [{ url: '/images/shadeport-maintenance.png', width: 1200, height: 900, alt: 'Shadeport maintenance by AJT Enterprise', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadeport Maintenance Gauteng & Limpopo | AJT Enterprise',
    description: 'Scheduled shadeport and carport maintenance across Gauteng & Limpopo.',
    images: ['/images/shadeport-maintenance.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const faqs = [
  {
    question: 'What does a shadeport maintenance visit include?',
    answer:
      'We check the frame for rust or movement, inspect fittings and anchor points, look over the fabric or roof sheeting for wear, and tighten or touch up anything that needs it before it becomes a bigger problem.',
  },
  {
    question: 'How often should a shadeport be serviced?',
    answer:
      'It depends on the structure, the materials and local weather exposure, but an annual inspection is a sensible baseline for most residential and commercial shadeports. We can recommend a schedule that suits your specific structure.',
  },
  {
    question: 'Can maintenance prevent the need for a full repair later?',
    answer:
      'In many cases, yes. Catching a loose fitting, a small rust spot or an early tear during a scheduled visit is far cheaper than waiting until it fails outright. That is the whole point of a maintenance plan.',
  },
  {
    question: 'Do you offer maintenance contracts for commercial sites?',
    answer:
      'Yes. For offices, complexes and retail parking, we can set up a recurring maintenance schedule so your parking cover is checked and serviced on a predictable timetable.',
  },
  {
    question: 'Which areas do you offer shadeport maintenance in?',
    answer:
      'We service shadeports and carports across Gauteng, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging, and across Limpopo, including Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.',
  },
]

const benefits = [
  { title: 'Full Structural Inspection', body: 'Frame, fittings and anchor points checked for rust, movement or wear.' },
  { title: 'Early Problem Detection', body: 'Small issues caught and fixed before they turn into costly repairs.' },
  { title: 'Scheduled, Predictable Visits', body: 'A maintenance schedule that suits your structure and how it is used.' },
  { title: 'Commercial Maintenance Plans', body: 'Recurring servicing for offices, complexes and retail parking cover.' },
]

const process = [
  { step: '01', title: 'Book A Maintenance Visit', body: 'Call or request a quote and we will schedule an inspection at a convenient time.' },
  { step: '02', title: 'Full Structural Check', body: 'We inspect the frame, fittings, fabric or sheeting and anchor points.' },
  { step: '03', title: 'On-The-Spot Fixes', body: 'Minor tightening or touch-ups are handled during the visit where possible.' },
  { step: '04', title: 'Report & Recommendations', body: 'We tell you what was done and flag anything that needs a follow-up repair.' },
]

const structureTypes = [
  { label: 'Residential Shadeports & Carports', desc: 'Annual or seasonal inspections' },
  { label: 'Commercial Parking Cover', desc: 'Recurring maintenance contracts' },
  { label: 'Post-Storm Check-Ups', desc: 'Structural review after severe weather' },
  { label: 'Pre-Sale Property Inspections', desc: 'Condition report before listing or transfer' },
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

const relatedServices = [
  { href: '/shadeport-repairs', label: 'Shadeport Repairs', desc: 'Frames, cladding & fittings fixed' },
  { href: '/shadeport-recovering', label: 'Shadeport Re-Covering', desc: 'Fabric & roof sheet replacement' },
  { href: '/parking-bay-shadeports', label: 'Parking Bay Shadeports', desc: 'Commercial & residential cover' },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Shadeport Maintenance',
  serviceType: 'Shadeport & Carport Maintenance',
  description: 'Scheduled inspection and maintenance for shadeports and carports across Gauteng and Limpopo.',
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
  areaServed: [
    { '@type': 'State', name: 'Gauteng' },
    { '@type': 'State', name: 'Limpopo' },
  ],
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: { '@type': 'ContactPoint', telephone: '+27658677363', contactType: 'customer service', areaServed: 'ZA', availableLanguage: 'English' },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Shadeport Maintenance' },
  ],
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

function LogoWatermark({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const w = size === 'lg' ? 84 : 52
  const h = size === 'lg' ? 60 : 37
  return (
    <div className={size === 'lg' ? 'absolute top-3 right-3 rounded-md p-1.5' : 'absolute bottom-2 right-2 rounded-md p-1'} style={{ background: 'rgba(13,7,5,0.55)', backdropFilter: 'blur(2px)' }}>
      <Image src="/images/aj-enterprise-logo.png" alt="" width={w} height={h} className={size === 'lg' ? 'h-9 w-auto opacity-90' : 'h-6 w-auto opacity-90'} aria-hidden="true" />
    </div>
  )
}

export default function ShadeportMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FAQSchema faqs={faqs} />

      <div style={{ background: '#f5f4f0' }} className="border-b border-[#1a1a1a]/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="py-3 text-sm">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors">Home</Link></li>
              <li className="text-[#1a1a1a]/30" aria-hidden="true">/</li>
              <li><Link href="/services" className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors">Services</Link></li>
              <li className="text-[#1a1a1a]/30" aria-hidden="true">/</li>
              <li className="text-[#1a1a1a] font-medium" aria-current="page">Shadeport Maintenance</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: BG }} aria-label="Shadeport maintenance across Gauteng and Limpopo">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shadeport-maintenance.png"
            alt="AJT Enterprise technician servicing a shadeport"
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
              Shadeport Maintenance · Gauteng &amp; Limpopo
            </p>
            <h1 className="font-black text-white leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
              Catch The Small Stuff{' '}
              <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Before It Grows.
              </span>
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Scheduled inspections that check the frame, fittings and covering of your
              shadeport or carport, so small problems get fixed before they become
              expensive ones.
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
                Book A Maintenance Visit
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Key benefits">
              {['Full structural check', 'Early problem detection', 'Commercial contracts available'].map((item) => (
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

      {/* INTRO + BENEFITS, with rotated secondary image */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="intro-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Why AJT Enterprise</p>
              <h2 id="intro-heading" className="text-3xl md:text-4xl font-black leading-tight mb-5" style={{ color: INK }}>
                Maintenance Is Cheaper Than A Repair
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: GOLD }} />
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-5">
                A loose bolt, a spot of surface rust or a small tear in the fabric
                rarely feels urgent on its own. Left unchecked over a few seasons,
                that is exactly how a simple fix turns into a full repair or, in the
                worst case, a structure that needs replacing.
              </p>
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed">
                A scheduled maintenance visit catches those small issues early. We
                can set up a one-off inspection or a recurring plan, whichever suits
                your structure and how you use it.
              </p>
              <div className="mt-6 relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/hero-shadeport.png"
                  alt="A well-maintained shadeport installed by AJT Enterprise"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <LogoWatermark />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((b) => (
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

      {/* STRUCTURE TYPES */}
      <section className="py-16 md:py-24" style={{ background: '#f5f4f0' }} aria-labelledby="types-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Who We Help</p>
            <h2 id="types-heading" className="text-3xl md:text-4xl font-black leading-tight" style={{ color: INK }}>
              Maintenance For Every Structure
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(26,26,26,0.08)' }}>
            {structureTypes.map((t) => (
              <div key={t.label} className="bg-white p-7 flex flex-col gap-3">
                <div className="w-8 h-0.5" style={{ background: GOLD }} />
                <h3 className="font-bold text-base leading-snug" style={{ color: INK }}>{t.label}</h3>
                <p className="text-[#1a1a1a]/50 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24" style={{ background: BG }} aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD }}>How It Works</p>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-black text-white leading-tight">
              From Booking To A Completed Check
            </h2>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <li key={p.step} className="relative p-6 rounded-xl border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <span className="block font-black text-3xl mb-4" style={{ color: GOLD }}>{p.step}</span>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-14 md:py-16 bg-white" aria-label="Book a shadeport maintenance visit">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 md:p-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}>
            <div>
              <p className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Ready When You Are</p>
              <p className="text-white font-black text-2xl md:text-3xl leading-snug max-w-xl">
                Book a maintenance visit before the next storm season.
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

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: '#f5f4f0' }} aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3 text-center" style={{ color: GOLD_DARK }}>Common Questions</p>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-black leading-tight mb-10 text-center" style={{ color: INK }}>
            Shadeport Maintenance FAQs
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

      {/* AREAS SERVED, real internal links */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Where We Work</p>
          <h2 id="areas-heading" className="text-2xl md:text-3xl font-black leading-tight mb-8 max-w-xl" style={{ color: INK }}>
            Shadeport Maintenance Across Gauteng &amp; Limpopo
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

      {/* RELATED SERVICES */}
      <section className="py-16 md:py-20" style={{ background: '#f5f4f0' }} aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Also Consider</p>
          <h2 id="related-heading" className="text-2xl md:text-3xl font-black leading-tight mb-8 max-w-xl" style={{ color: INK }}>
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-6 rounded-xl bg-white border border-[#1a1a1a]/[0.08] hover:shadow-lg transition-shadow flex flex-col"
              >
                <h3 className="font-bold text-base mb-1" style={{ color: INK }}>{s.label}</h3>
                <p className="text-[#1a1a1a]/50 text-sm leading-relaxed mb-4">{s.desc}</p>
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

      {/* FINAL CTA */}
      <section style={{ background: BG }} className="text-white" aria-label="Contact AJT Enterprise about shadeport maintenance">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Keep Your{' '}
                <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  Shadeport In Shape
                </span>
              </h2>
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                Speak to our team about a maintenance visit or a recurring plan.
                Trusted servicing across Gauteng and Limpopo, from one dependable team.
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
