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
const PAGE_URL = `${BASE_URL}/carports`
const PHONE_DISPLAY = '065 867 7363'
const PHONE_TEL = '0658677363'

export const metadata: Metadata = {
  title: 'Carports Gauteng & Limpopo | Custom Built | AJT Enterprise',
  description:
    'Custom-built carports for homes and businesses across Gauteng & Limpopo. Single & double, matched to your property. Free written quote, call 065 867 7363.',
  keywords: [
    'carports Gauteng',
    'carports Limpopo',
    'carport prices near me',
    'double carport installation',
    'single carport South Africa',
    'carport Johannesburg',
    'carport Pretoria',
    'carport Polokwane',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: PAGE_URL,
    siteName: 'AJT Enterprise',
    title: 'Carports Gauteng & Limpopo | Custom Built | AJT Enterprise',
    description: 'Custom-built carports for homes and businesses across Gauteng & Limpopo. Call 065 867 7363.',
    images: [{ url: '/images/carports.png', width: 1200, height: 900, alt: 'Custom carport by AJT Enterprise', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carports Gauteng & Limpopo | Custom Built | AJT Enterprise',
    description: 'Custom-built carports for homes and businesses across Gauteng & Limpopo.',
    images: ['/images/carports.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const faqs = [
  {
    question: "Can you build a carport to match my home's style?",
    answer:
      'Yes. Carports are custom built to size and finish, single or double, and we can match roofing materials, colours and framing to suit your property rather than fitting a generic kit.',
  },
  {
    question: 'What size carports do you build?',
    answer:
      'Single carports for one vehicle and double carports for two are the most common, but we size every structure to your space and needs, including longer bays for larger vehicles or trailers.',
  },
  {
    question: 'Do you install carports for businesses, not just homes?',
    answer:
      'Yes, we install both residential carports and commercial parking cover, including carports for offices, complexes and staff parking areas.',
  },
  {
    question: 'What roofing materials can I choose for my carport?',
    answer:
      'Common options include IBR roof sheeting, polycarbonate sheeting for more natural light, and shade fabric for a lighter, more open feel. We will talk through what suits your budget and property during the quote.',
  },
  {
    question: 'Which areas do you build carports in?',
    answer:
      'We build carports across Gauteng, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging, and across Limpopo, including Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.',
  },
]

const benefits = [
  { title: "Matches Your Home's Style", body: 'Roofing, colours and framing chosen to suit your property, not a generic off-the-shelf kit.' },
  { title: 'Single & Double Options', body: 'Sized to fit one vehicle or two, with longer bays available for larger vehicles or trailers.' },
  { title: 'Solid Roofing Options', body: 'IBR sheeting, polycarbonate or shade fabric, whichever suits your budget and look.' },
  { title: 'Quick, Clean Installation', body: 'Most single and double carports are up within a day or two once the design is confirmed.' },
]

const process = [
  { step: '01', title: 'Free Site Visit & Quote', body: 'We measure your space and give you a clear written quote for the size and finish you want.' },
  { step: '02', title: 'Design & Approval', body: 'We confirm roofing material, colour and framing with you before anything is ordered.' },
  { step: '03', title: 'Manufacture', body: 'Your carport is fabricated to spec using quality, weather-rated materials.' },
  { step: '04', title: 'Professional Installation', body: 'Our certified team installs and anchors the structure cleanly, then walks you through the finished result.' },
]

const structureTypes = [
  { label: 'Single Carports', desc: 'Compact cover for one vehicle' },
  { label: 'Double Carports', desc: 'Side-by-side cover for two vehicles' },
  { label: 'Flat-Roof Carports', desc: 'A clean, minimalist modern look' },
  { label: 'Gable & Pitched Carports', desc: 'Traditional pitched roofline to match a home' },
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
  { href: '/carport-installation', label: 'Carport Installation', desc: 'Professional fitting at your property' },
  { href: '/shadeport-installation', label: 'Shadeport Installation', desc: 'New structures, built to spec' },
  { href: '/parking-bay-shadeports', label: 'Parking Bay Shadeports', desc: 'Commercial & residential cover' },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Carports',
  serviceType: 'Carport Supply & Installation',
  description: 'Custom-built single and double carports for residential and commercial properties across Gauteng and Limpopo.',
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
    { '@type': 'ListItem', position: 3, name: 'Carports' },
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

export default function CarportsPage() {
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
              <li className="text-[#1a1a1a] font-medium" aria-current="page">Carports</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: BG }} aria-label="Carports across Gauteng and Limpopo">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/carports.png"
            alt="Custom-built carport installed by AJT Enterprise"
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
              Carports · Gauteng &amp; Limpopo
            </p>
            <h1 className="font-black text-white leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
              Carports Built{' '}
              <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Around You
              </span>
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Single or double, matched to your home or business, and installed by a team
              that gets the finish right the first time. Built to handle Gauteng and
              Limpopo&apos;s sun, wind and summer storms.
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
              {['Single & double', 'Custom finishes', 'Fast installation'].map((item) => (
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
                A Carport That Actually Suits Your Home
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: GOLD }} />
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-5">
                A carport bolted straight off a catalogue rarely looks like it belongs.
                We measure your space and talk through roofing, colour and framing so
                the finished structure looks like part of the property, not an
                afterthought.
              </p>
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed">
                Single or double, residential or commercial, every carport is built to
                spec with materials rated for local weather and installed by a
                certified team across Gauteng and Limpopo.
              </p>
              <div className="mt-6 relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/car_shadeports.jfif"
                  alt="Finished carport shading a parked vehicle"
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
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>What We Build</p>
            <h2 id="types-heading" className="text-3xl md:text-4xl font-black leading-tight" style={{ color: INK }}>
              Carports For Every Property
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
              From First Call To Finished Carport
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
      <section className="py-14 md:py-16 bg-white" aria-label="Request a free carport quote">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 md:p-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}>
            <div>
              <p className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Ready When You Are</p>
              <p className="text-white font-black text-2xl md:text-3xl leading-snug max-w-xl">
                Get a free, no-obligation quote on your carport today.
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
            Carport FAQs
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
            Carports Across Gauteng &amp; Limpopo
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
      <section style={{ background: BG }} className="text-white" aria-label="Contact AJT Enterprise about carports">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Let&apos;s Build Your{' '}
                <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  Carport
                </span>
              </h2>
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                Speak to our team for a free site visit and written quote. Trusted
                carport installation across Gauteng and Limpopo, from one dependable team.
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
