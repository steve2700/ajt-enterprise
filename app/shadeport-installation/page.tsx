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
const PAGE_URL = `${BASE_URL}/shadeport-installation`
const PHONE_DISPLAY = '065 867 7363'
const PHONE_TEL = '0658677363'

export const metadata: Metadata = {
  title: 'Shadeport Installation Gauteng & Limpopo | AJT Enterprise',
  description:
    'Professional shadeport installation across Gauteng & Limpopo. Custom-built, weatherproof shadeports for homes and businesses, installed by certified fitters. Free written quote, call 065 867 7363.',
  keywords: [
    'shadeport installation Gauteng',
    'shadeport installation Limpopo',
    'shadeport installers near me',
    'shadeport installation Johannesburg',
    'shadeport installation Pretoria',
    'shadeport installation Polokwane',
    'shadeport prices Gauteng',
    'residential shadeport installation',
    'commercial shadeport installation',
    'custom shadeport builder South Africa',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: PAGE_URL,
    siteName: 'AJT Enterprise',
    title: 'Shadeport Installation Gauteng & Limpopo | AJT Enterprise',
    description:
      'Custom-built, weatherproof shadeport installation for homes and businesses across Gauteng & Limpopo. Free written quote, call 065 867 7363.',
    images: [{ url: '/images/shadeport-installation.png', width: 1200, height: 900, alt: 'Shadeport installation by AJT Enterprise', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadeport Installation Gauteng & Limpopo | AJT Enterprise',
    description: 'Custom-built, weatherproof shadeport installation across Gauteng & Limpopo. Call 065 867 7363.',
    images: ['/images/shadeport-installation.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const faqs = [
  {
    question: 'How much does a shadeport installation cost?',
    answer:
      'The cost depends on the size, span and finish of the structure, and on site access. Because every shadeport is built to spec, we give you a clear written quote before any work begins, with no hidden fees and no surprises on the invoice. Call 065 867 7363 for a free, no-obligation quote.',
  },
  {
    question: 'How long does it take to install a shadeport?',
    answer:
      'Most standard residential shadeports are installed within a day or two once the design and quote are confirmed. Larger commercial or multi-bay structures take longer depending on size and site access. We give you an accurate timeline together with your quote.',
  },
  {
    question: 'Do you install shadeports for both homes and businesses?',
    answer:
      'Yes. We install residential shadeports for driveways and patios, as well as commercial and parking-bay shadeports for offices, complexes, schools and retail sites across Gauteng and Limpopo.',
  },
  {
    question: 'Are your shadeports built to handle our weather?',
    answer:
      'Every structure is engineered and anchored for local conditions, including harsh sun, strong wind and summer storms. We use quality frames and cladding rated for South African weather, not a generic import build.',
  },
  {
    question: 'Which areas do you cover for shadeport installation?',
    answer:
      'We install shadeports across Gauteng, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging, and across Limpopo, including Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.',
  },
]

const benefits = [
  {
    title: 'Custom-Built To Your Space',
    body: 'Every shadeport is measured and built to fit your driveway, patio or parking area exactly, never a one-size-fits-all kit.',
  },
  {
    title: 'Weatherproof Engineering',
    body: 'Frames and cladding rated for harsh sun, strong wind and summer storms, properly anchored for long-term stability.',
  },
  {
    title: 'Certified, Careful Fitters',
    body: 'Trained installers who protect your property, work cleanly and finish the job to a standard we stand behind.',
  },
  {
    title: 'Written Quote First',
    body: 'A clear, itemised quote for the structure, size and finish before we start. No hidden costs, ever.',
  },
]

const process = [
  { step: '01', title: 'Free Site Visit & Quote', body: 'We assess your site, take measurements and give you a clear written quote for the structure and finish.' },
  { step: '02', title: 'Design & Approval', body: 'We confirm the size, layout and cladding with you, then finalise a design that suits your space and budget.' },
  { step: '03', title: 'Manufacture', body: 'Your shadeport is fabricated to spec using quality, weather-rated materials built for local conditions.' },
  { step: '04', title: 'Professional Installation', body: 'Our certified team installs and anchors the structure cleanly, then walks you through the finished result.' },
]

const structureTypes = [
  { label: 'Residential Driveway Shadeports', desc: 'Single & double vehicle cover for homes' },
  { label: 'Patio & Entertainment Shade', desc: 'Comfortable, shaded outdoor living areas' },
  { label: 'Commercial & Office Shadeports', desc: 'Staff and visitor parking protection' },
  { label: 'Parking Bay Shadeports', desc: 'Multi-bay cover for complexes & retail' },
]

const areas = [
  'Johannesburg', 'Pretoria', 'Sandton', 'Centurion', 'Midrand', 'Randburg', 'Roodepoort', 'Vereeniging',
  'Polokwane', 'Tzaneen', 'Mokopane', 'Thohoyandou', 'Lephalale', 'Bela-Bela',
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Shadeport Installation',
  serviceType: 'Shadeport Installation',
  description:
    'Custom-built, weatherproof shadeport installation for residential and commercial properties across Gauteng and Limpopo.',
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
    { '@type': 'ListItem', position: 3, name: 'Shadeport Installation' },
  ],
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

export default function ShadeportInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumb ── */}
      <div style={{ background: '#f5f4f0' }} className="border-b border-[#1a1a1a]/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="py-3 text-sm">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors">Home</Link></li>
              <li className="text-[#1a1a1a]/30" aria-hidden="true">/</li>
              <li><Link href="/services" className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors">Services</Link></li>
              <li className="text-[#1a1a1a]/30" aria-hidden="true">/</li>
              <li className="text-[#1a1a1a] font-medium" aria-current="page">Shadeport Installation</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden" style={{ background: BG }} aria-label="Shadeport installation across Gauteng and Limpopo">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shadeport-installation.png"
            alt="AJT Enterprise team installing a custom shadeport in Gauteng"
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
              Shadeport Installation · Gauteng &amp; Limpopo
            </p>
            <h1 className="font-black text-white leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
              Custom Shadeport{' '}
              <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                Installation
              </span>{' '}
              Done Right
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Weatherproof shadeports, built to spec and professionally installed at your home
              or business, engineered to handle Gauteng and Limpopo&apos;s sun, wind and summer storms.
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
              {['Free written quote', 'Certified installers', 'Fast turnaround'].map((item) => (
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

      {/* ═══════════════ INTRO + BENEFITS ═══════════════ */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="intro-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Why AJT Enterprise</p>
              <h2 id="intro-heading" className="text-3xl md:text-4xl font-black leading-tight mb-5" style={{ color: INK }}>
                Shadeports Built To Last, Installed To Impress
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: GOLD }} />
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-5">
                A shadeport should protect your vehicles and outdoor spaces for years, not sag,
                rust or blow loose after the first big storm. That&apos;s why every AJT Enterprise
                shadeport is custom-measured, built with weather-rated materials and installed by
                a certified team that treats your property with care.
              </p>
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed">
                From a single driveway cover to full commercial parking, we handle the entire
                process, from site visit to design, manufacture and installation, as one dependable
                team across Gauteng and Limpopo.
              </p>
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

      {/* ═══════════════ STRUCTURE TYPES ═══════════════ */}
      <section className="py-16 md:py-24" style={{ background: '#f5f4f0' }} aria-labelledby="types-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>What We Install</p>
            <h2 id="types-heading" className="text-3xl md:text-4xl font-black leading-tight" style={{ color: INK }}>
              Shadeports For Every Property
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

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section className="py-16 md:py-24" style={{ background: BG }} aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD }}>How It Works</p>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-black text-white leading-tight">
              From First Call To Finished Shadeport
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

      {/* ═══════════════ MID-PAGE CTA ═══════════════ */}
      <section className="py-14 md:py-16 bg-white" aria-label="Request a free shadeport quote">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 md:p-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}>
            <div>
              <p className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Ready When You Are</p>
              <p className="text-white font-black text-2xl md:text-3xl leading-snug max-w-xl">
                Get a free, no-obligation quote on your shadeport today.
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
            Shadeport Installation FAQs
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

      {/* ═══════════════ AREAS SERVED ═══════════════ */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Where We Work</p>
          <h2 id="areas-heading" className="text-2xl md:text-3xl font-black leading-tight mb-8 max-w-xl" style={{ color: INK }}>
            Shadeport Installation Across Gauteng &amp; Limpopo
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {areas.map((area) => (
              <li key={area} className="px-4 py-2 rounded-full border border-[#1a1a1a]/10 text-sm text-[#1a1a1a]/70 bg-[#f5f4f0]">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section style={{ background: BG }} className="text-white" aria-label="Contact AJT Enterprise for shadeport installation">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Let&apos;s Build Your{' '}
                <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  Shadeport
                </span>
              </h2>
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                Speak to our team for a free site visit and written quote. Trusted shadeport
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
