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
const PAGE_URL = `${BASE_URL}/shadeport-recovering`
const PHONE_DISPLAY = '065 867 7363'
const PHONE_TEL = '0658677363'

export const metadata: Metadata = {
  title: 'Shadeport Re-Covering Gauteng & Limpopo | AJT Enterprise',
  description:
    'Shadeport re-covering across Gauteng & Limpopo. New fabric or roof sheeting fitted to your existing frame, no full rebuild needed. Free written quote, call 065 867 7363.',
  keywords: [
    'shadeport re-covering Gauteng',
    'shadeport re-covering Limpopo',
    'shadeport fabric replacement',
    'shadeport roof sheet replacement',
    'recover shadeport near me',
    'shadeport re-covering Johannesburg',
    'shadeport re-covering Pretoria',
    'shadeport re-covering Polokwane',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: PAGE_URL,
    siteName: 'AJT Enterprise',
    title: 'Shadeport Re-Covering Gauteng & Limpopo | AJT Enterprise',
    description: 'New fabric or roof sheeting fitted to your existing frame, across Gauteng & Limpopo. Call 065 867 7363.',
    images: [{ url: '/images/shadeport-recovering.png', width: 1200, height: 900, alt: 'Shadeport re-covering by AJT Enterprise', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadeport Re-Covering Gauteng & Limpopo | AJT Enterprise',
    description: 'New fabric or roof sheeting fitted to your existing frame, across Gauteng & Limpopo.',
    images: ['/images/shadeport-recovering.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const faqs = [
  {
    question: 'What is shadeport re-covering?',
    answer:
      'Re-covering means fitting new shade fabric or roof sheeting to your existing frame, instead of replacing the whole structure. If the frame and foundation are still sound, it is a faster and more affordable way to get years more life out of your shadeport.',
  },
  {
    question: 'How do I know if I need a repair or a full re-cover?',
    answer:
      'A repair fixes a specific section, a tear, a loose fitting, a damaged panel. A re-cover replaces the entire fabric or sheeting when it has generally worn out, faded or degraded across the whole structure. We will tell you honestly which one your shadeport needs.',
  },
  {
    question: 'Can you match my existing frame and colour?',
    answer:
      'In most cases, yes. We will talk through fabric or sheeting options during the site visit and recommend a match or a refresh, whichever you prefer.',
  },
  {
    question: 'How long does a re-cover take?',
    answer:
      'Most standard residential re-covers are completed within a day once materials are on-site. Larger or commercial structures may take longer depending on size and access.',
  },
  {
    question: 'Which areas do you offer shadeport re-covering in?',
    answer:
      'We re-cover shadeports across Gauteng, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging, and across Limpopo, including Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.',
  },
]

const benefits = [
  { title: 'No Full Rebuild Needed', body: 'If the frame is sound, we replace only the covering, saving you the cost of a new structure.' },
  { title: 'Fabric Or Roof Sheeting', body: 'Shade fabric, polycarbonate or IBR sheeting, whichever suits your structure and budget.' },
  { title: 'Colour & Style Options', body: 'Match your existing look or refresh it entirely, your choice.' },
  { title: 'Fast Turnaround', body: 'Most residential re-covers are completed in a single day once materials arrive.' },
]

const process = [
  { step: '01', title: 'Free Site Assessment', body: 'We check the frame condition and confirm re-covering is the right fit, not a repair or rebuild.' },
  { step: '02', title: 'Material Selection', body: 'We help you choose fabric or sheeting, colour and finish for the new covering.' },
  { step: '03', title: 'Old Covering Removed', body: 'The worn fabric or sheeting is stripped cleanly from the existing frame.' },
  { step: '04', title: 'New Covering Fitted', body: 'The new material is fitted and secured, and we walk you through the finished result.' },
]

const structureTypes = [
  { label: 'Faded Or Torn Fabric', desc: 'Shade cloth worn out by years of UV exposure' },
  { label: 'Damaged Roof Sheeting', desc: 'IBR or polycarbonate cracked by hail or wind' },
  { label: 'Old Or Mismatched Covers', desc: 'A style or colour refresh on a sound frame' },
  { label: 'Commercial Structure Refreshes', desc: 'Re-covering for offices, complexes & retail' },
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
  { href: '/shadeport-maintenance', label: 'Shadeport Maintenance', desc: 'Scheduled servicing & inspections' },
  { href: '/shadeport-installation', label: 'Shadeport Installation', desc: 'New structures, built to spec' },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Shadeport Re-Covering',
  serviceType: 'Shadeport Re-Covering',
  description: 'Replacement of shade fabric or roof sheeting on existing shadeport frames for properties across Gauteng and Limpopo.',
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
    { '@type': 'ListItem', position: 3, name: 'Shadeport Re-Covering' },
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

export default function ShadeportRecoveringPage() {
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
              <li className="text-[#1a1a1a] font-medium" aria-current="page">Shadeport Re-Covering</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: BG }} aria-label="Shadeport re-covering across Gauteng and Limpopo">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shadeport-recovering.png"
            alt="AJT Enterprise fitting new fabric to a shadeport frame"
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
              Shadeport Re-Covering · Gauteng &amp; Limpopo
            </p>
            <h1 className="font-black text-white leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
              Same Frame.{' '}
              <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                New Life.
              </span>
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              If your frame is still solid but the fabric or roof sheeting has had
              enough, we fit new covering instead of a full rebuild, saving you
              time and money.
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
              {['No full rebuild needed', 'Fabric or roof sheeting', 'Fast turnaround'].map((item) => (
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
                Why Replace The Whole Structure?
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: GOLD }} />
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-5">
                Years of sun fade and weaken shade fabric long before the frame
                underneath gives up. A cracked or discoloured roof sheet often tells
                the same story. If the structure itself is still sound, replacing
                just the covering gets you years more life for a fraction of the
                cost of starting over.
              </p>
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed">
                We assess the frame honestly before recommending a re-cover. If it
                turns out you actually need a repair or a full rebuild instead, we
                will tell you that too.
              </p>
              <div className="mt-6 relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/shadeport-repairs.png"
                  alt="AJT Enterprise technician working on a shadeport structure"
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
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>When To Re-Cover</p>
            <h2 id="types-heading" className="text-3xl md:text-4xl font-black leading-tight" style={{ color: INK }}>
              Signs Your Shadeport Needs Re-Covering
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
              From First Call To A Fresh Cover
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
      <section className="py-14 md:py-16 bg-white" aria-label="Request a free re-covering quote">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 md:p-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}>
            <div>
              <p className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Ready When You Are</p>
              <p className="text-white font-black text-2xl md:text-3xl leading-snug max-w-xl">
                Get a free, no-obligation re-covering quote today.
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
            Shadeport Re-Covering FAQs
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
            Shadeport Re-Covering Across Gauteng &amp; Limpopo
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
      <section style={{ background: BG }} className="text-white" aria-label="Contact AJT Enterprise about shadeport re-covering">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Let&apos;s Give Your{' '}
                <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  Shadeport New Life
                </span>
              </h2>
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                Speak to our team for a free site visit and written quote. Trusted
                re-covering across Gauteng and Limpopo, from one dependable team.
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
