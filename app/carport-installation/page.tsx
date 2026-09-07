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
const PAGE_URL = `${BASE_URL}/carport-installation`
const PHONE_DISPLAY = '065 867 7363'
const PHONE_TEL = '0658677363'

export const metadata: Metadata = {
  title: 'Carport Installation Gauteng & Limpopo | AJT Enterprise',
  description:
    'Professional carport installation across Gauteng & Limpopo. Site assessment, secure anchoring and clean, on-time fitting. Free written quote, call 065 867 7363.',
  keywords: [
    'carport installation Gauteng',
    'carport installation Limpopo',
    'carport installers near me',
    'carport fitting South Africa',
    'carport installation Johannesburg',
    'carport installation Pretoria',
    'carport installation Polokwane',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: PAGE_URL,
    siteName: 'AJT Enterprise',
    title: 'Carport Installation Gauteng & Limpopo | AJT Enterprise',
    description: 'Professional carport installation across Gauteng & Limpopo. Call 065 867 7363.',
    images: [{ url: '/images/carport-installation.png', width: 1200, height: 900, alt: 'Carport installation by AJT Enterprise', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carport Installation Gauteng & Limpopo | AJT Enterprise',
    description: 'Professional carport installation across Gauteng & Limpopo.',
    images: ['/images/carport-installation.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const faqs = [
  {
    question: 'How long does carport installation take?',
    answer:
      'Most single and double carports are installed within a day or two once the design and quote are confirmed. Larger or multi-bay installations take longer depending on site access and foundation work required.',
  },
  {
    question: 'Do I need to prepare the site before you arrive?',
    answer:
      'Not usually. Clear the parking area of vehicles and any obstructions on installation day, and our team handles the rest, including any foundation or anchoring work needed.',
  },
  {
    question: 'Do I need council approval to install a carport?',
    answer:
      'This depends on your municipality, the size of the structure and whether it attaches to an existing building. We can advise on what your project is likely to need during the site visit, but final approval requirements are confirmed with your local authority.',
  },
  {
    question: 'Can you install a carport on an existing slab or paving?',
    answer:
      'In many cases, yes. We assess the existing surface during the site visit to confirm whether it can support the structure, or whether additional foundation work is needed first.',
  },
  {
    question: 'Which areas do you install carports in?',
    answer:
      'We install carports across Gauteng, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging, and across Limpopo, including Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.',
  },
]

const benefits = [
  { title: 'Professional On-Site Fitting', body: 'A certified team that measures, anchors and finishes the job cleanly, on your property.' },
  { title: 'Secure Anchoring & Foundations', body: 'Proper foundation work where needed, so the structure stays solid for years, not just months.' },
  { title: 'Site Assessment Included', body: 'We check ground conditions, access and any approval considerations before work starts.' },
  { title: 'Clean, Timely Installation', body: 'We work efficiently and tidy up after ourselves, minimising disruption to your property.' },
]

const process = [
  { step: '01', title: 'Free Site Visit & Quote', body: 'We assess ground conditions, access and size requirements, then give you a clear written quote.' },
  { step: '02', title: 'Scheduling & Prep', body: 'We confirm a fitting date and let you know exactly what to clear before our team arrives.' },
  { step: '03', title: 'Foundation & Anchoring', body: 'Where needed, we prepare footings or anchors so the structure is secure for the long term.' },
  { step: '04', title: 'Installation & Walkthrough', body: 'Our team fits and finishes the carport, then walks you through the completed job.' },
]

const structureTypes = [
  { label: 'New Carport Installation', desc: 'Full fitting for a newly built structure' },
  { label: 'Carport Base & Foundation Work', desc: 'Footings and anchoring for solid, lasting support' },
  { label: 'Existing Structure Upgrades', desc: 'Reinforcing or extending a carport you already have' },
  { label: 'Multi-Bay Installations', desc: 'Fitting for complexes, offices & retail parking' },
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
  { href: '/carports', label: 'Carports', desc: 'Custom single & double shelters' },
  { href: '/shadeport-installation', label: 'Shadeport Installation', desc: 'New structures, built to spec' },
  { href: '/cantilever-shadeports', label: 'Cantilever Shadeports', desc: 'No centre poles, clean sightlines' },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Carport Installation',
  serviceType: 'Carport Installation',
  description: 'Professional carport installation, including site assessment, foundation work and anchoring, for properties across Gauteng and Limpopo.',
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
    { '@type': 'ListItem', position: 3, name: 'Carport Installation' },
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

export default function CarportInstallationPage() {
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
              <li className="text-[#1a1a1a] font-medium" aria-current="page">Carport Installation</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: BG }} aria-label="Carport installation across Gauteng and Limpopo">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/carport-installation.png"
            alt="AJT Enterprise team fitting a carport on site"
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
              Carport Installation · Gauteng &amp; Limpopo
            </p>
            <h1 className="font-black text-white leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
              Professional Fitting,{' '}
              <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Done Right
              </span>
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              From site assessment to secure anchoring and a clean finish, our team
              handles every step of your carport installation across Gauteng and
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
              {['Site assessment included', 'Secure anchoring', 'Clean, timely fitting'].map((item) => (
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
                Installation Is Where A Carport Succeeds Or Fails
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: GOLD }} />
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-5">
                Good materials still fail if the foundation is wrong or the anchoring
                is rushed. Our team assesses your site properly before any work
                starts, so the structure stays solid through wind, rain and years of
                use.
              </p>
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed">
                Whether it is a brand new carport, extra foundation work under an
                existing slab, or a multi-bay commercial fit, we handle the
                installation end to end and leave the site clean when we are done.
              </p>
              <div className="mt-6 relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/custom_shadeports.jfif"
                  alt="Custom structure installation in progress by AJT Enterprise"
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
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>What We Handle</p>
            <h2 id="types-heading" className="text-3xl md:text-4xl font-black leading-tight" style={{ color: INK }}>
              Installation Services We Offer
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
              From First Call To Finished Installation
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
      <section className="py-14 md:py-16 bg-white" aria-label="Request a free carport installation quote">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 md:p-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}>
            <div>
              <p className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Ready When You Are</p>
              <p className="text-white font-black text-2xl md:text-3xl leading-snug max-w-xl">
                Get a free, no-obligation installation quote today.
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
            Carport Installation FAQs
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
            Carport Installation Across Gauteng &amp; Limpopo
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
      <section style={{ background: BG }} className="text-white" aria-label="Contact AJT Enterprise about carport installation">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Let&apos;s Get Your{' '}
                <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  Carport Installed
                </span>
              </h2>
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                Speak to our team for a free site visit and written quote. Trusted
                installation across Gauteng and Limpopo, from one dependable team.
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
