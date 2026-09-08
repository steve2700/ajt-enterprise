import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQSchema from '@/components/faq-schema'
import { Breadcrumbs } from '@/components/breadcrumbs'

const GOLD = '#dcb068'
const GOLD_LIGHT = '#f4e78b'
const GOLD_DARK = '#8a6535'
const RED = '#b8161d'
const RED_LIGHT = '#fc4d53'
const BG = '#0d0705'
const INK = '#1a1a1a'

const BASE_URL = 'https://www.ajtenterprise.co.za'
const PHONE_DISPLAY = '065 867 7363'
const PHONE_TEL = '0658677363'

export const metadata: Metadata = {
  title: 'Areas We Serve | Shadeports & Carports Gauteng & Limpopo | AJT Enterprise',
  description:
    "AJT Enterprise installs, repairs and maintains shadeports and carports across Gauteng and Limpopo, including Johannesburg, Pretoria, Sandton, Centurion, Polokwane and Tzaneen. Free written quote, call 065 867 7363.",
  keywords: [
    'shadeport areas Gauteng',
    'shadeport areas Limpopo',
    'carport installation near me',
    'shadeports Johannesburg',
    'shadeports Pretoria',
    'shadeports Polokwane',
    'shadeport service areas South Africa',
  ],
  alternates: { canonical: `${BASE_URL}/areas` },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: `${BASE_URL}/areas`,
    siteName: 'AJT Enterprise',
    title: 'Areas We Serve | Shadeports & Carports Gauteng & Limpopo',
    description:
      "AJT Enterprise installs, repairs and maintains shadeports and carports across Gauteng and Limpopo. Free written quote, call 065 867 7363.",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AJT Enterprise service areas', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areas We Serve | AJT Enterprise',
    description: 'Shadeport & carport installation, repairs and maintenance across Gauteng & Limpopo. Call 065 867 7363.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

// Every area below already has a dedicated /shadeport-{slug} page live.
// Adding a new area is a two-step job: build /shadeport-{slug}/page.tsx,
// then add its entry to the relevant region array here.
const regions = [
  {
    region: 'Gauteng',
    blurb: "Our home base. Regular installation and repair teams cover the full metro, from Johannesburg driveways to Sandton office parks.",
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
    blurb: "From Polokwane out to Thohoyandou and Lephalale, we run the same free-quote, careful-installation process across the province.",
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

const allAreas = regions.flatMap((r) => r.areas)

const services = [
  { href: '/shadeport-installation', label: 'Shadeport Installation' },
  { href: '/cantilever-shadeports', label: 'Cantilever Shadeports' },
  { href: '/carports', label: 'Carports' },
  { href: '/carport-installation', label: 'Carport Installation' },
  { href: '/parking-bay-shadeports', label: 'Parking Bay Shadeports' },
  { href: '/shadeport-repairs', label: 'Shadeport Repairs' },
  { href: '/shadeport-maintenance', label: 'Shadeport Maintenance' },
  { href: '/shadeport-recovering', label: 'Shadeport Re-Covering' },
]

const whyPoints = [
  {
    heading: 'Local Site Knowledge',
    body: 'Years of installs in each area mean we know the sun, wind and space constraints typical of local homes and businesses.',
  },
  {
    heading: 'Free On-Site Quotes',
    body: 'We measure the space, talk through your options and give you a clear written price before anything is booked, anywhere we cover.',
  },
  {
    heading: 'Fast Regional Turnaround',
    body: 'Regular teams working across Gauteng and Limpopo keep quote-to-install times short, without cutting corners.',
  },
  {
    heading: 'Weatherproof Builds',
    body: "Frames and cladding rated for local sun, wind and summer storms, properly anchored for long-term stability.",
  },
]

const faqs = [
  {
    question: 'Which areas does AJT Enterprise cover?',
    answer:
      'We install, repair and maintain shadeports and carports across Gauteng, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging, and across Limpopo, including Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.',
  },
  {
    question: "What if my town isn't listed?",
    answer:
      "Give us a call. We regularly take on jobs just outside our listed areas, especially in Gauteng and Limpopo, so it's worth checking before assuming we can't reach you.",
  },
  {
    question: 'Do you charge extra for quotes further from Johannesburg?',
    answer:
      'No. On-site quotes are free and come with no obligation wherever you are in our coverage area. Larger jobs further out may factor travel into the overall project timeline, which we always explain upfront.',
  },
  {
    question: 'Is the installation process different depending on the area?',
    answer:
      'No. Every job, wherever it is, gets the same process: a site visit, a written quote before any work starts, and installation by a certified team with the same after-care and warranty.',
  },
]

const areaListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: allAreas.map((area, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: area.name,
    url: `${BASE_URL}/shadeport-${area.slug}`,
  })),
}

const areaBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: 'AJT Enterprise',
  telephone: '+27658677363',
  email: 'Info@ajtenterprise.co.za',
  url: BASE_URL,
  areaServed: regions.map((r) => ({
    '@type': 'State',
    name: r.region,
    containsPlace: r.areas.map((a) => ({ '@type': 'City', name: a.name })),
  })),
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

export default function AreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaListSchema) }} />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumb ── */}
      <div style={{ background: '#f5f4f0' }} className="border-b border-[#1a1a1a]/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Areas We Serve' }]} />
        </div>
      </div>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden" style={{ background: BG }} aria-label="AJT Enterprise service areas">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/why-choose-us.png"
            alt="AJT Enterprise shadeport and carport installations across Gauteng and Limpopo"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
            quality={82}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${BG} 0%, ${BG}e6 55%, ${BG}59 100%)` }} />
          <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.35em] uppercase mb-5" style={{ color: GOLD }}>
              Where We Work
            </p>
            <h1 className="font-black text-white leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4rem)' }}>
              Serving Gauteng{' '}
              <span style={{ backgroundImage: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                &amp; Limpopo
              </span>
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              From Johannesburg driveways to Polokwane parking bays, our installation
              teams cover 14 areas across two provinces, all with the same free
              quote, careful build and after-care.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
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
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY / TRUST POINTS ═══════════════ */}
      <section className="py-14 md:py-16 bg-white border-b border-[#1a1a1a]/[0.06]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="why-heading" className="sr-only">Why choose AJT Enterprise in your area</h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPoints.map((p) => (
              <div key={p.heading} className="border-l-2 pl-5" style={{ borderColor: GOLD }}>
                <dt className="font-bold text-[#1a1a1a] text-sm mb-2">{p.heading}</dt>
                <dd className="text-[#1a1a1a]/60 text-sm leading-relaxed">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══════════════ REGIONS ═══════════════ */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="regions-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Coverage</p>
          <h2 id="regions-heading" className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: INK }}>
            Two Provinces,<br />One Dependable Team
          </h2>
          <p className="text-[#1a1a1a]/55 text-base md:text-lg mb-12 max-w-2xl leading-relaxed">
            Every area below has its own dedicated page with local turnaround times
            and suburb coverage. Tap through for details, or call us directly.
          </p>

          <div className="grid lg:grid-cols-2 gap-px" style={{ background: 'rgba(26,26,26,0.08)' }}>
            {regions.map((group) => (
              <div key={group.region} className="bg-white p-7 md:p-9">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: GOLD_DARK }}>
                  {group.region}
                </p>
                <p className="text-[#1a1a1a]/55 text-sm leading-relaxed mb-6 max-w-md">
                  {group.blurb}
                </p>
                <nav aria-label={`Areas in ${group.region}`}>
                  <ul className="grid grid-cols-2 gap-2.5">
                    {group.areas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/shadeport-${area.slug}`}
                          className="group/item flex items-center justify-between gap-2 px-3.5 py-2.5 border border-[#1a1a1a]/10 text-sm font-medium text-[#1a1a1a]/75 hover:border-transparent hover:bg-[#0d0705] hover:text-white transition-colors"
                        >
                          {area.name}
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" aria-hidden="true">
                            <path d="M2 5h6M5 2l3 3-3 3" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FULL DIRECTORY ═══════════════ */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="directory-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Full Directory</p>
          <h2 id="directory-heading" className="text-2xl md:text-3xl font-black leading-tight mb-8" style={{ color: INK }}>
            All 14 Areas We Cover
          </h2>
          <nav aria-label="Full list of service areas">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {allAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/shadeport-${area.slug}`}
                    className="group flex items-center justify-between px-4 py-3 border border-[#1a1a1a]/10 bg-[#f5f4f0] hover:bg-white hover:border-[#dcb068] transition-colors"
                  >
                    <span className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#8a6535] transition-colors">
                      {area.name}
                    </span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" aria-hidden="true">
                      <path d="M2 5h6M5 2l3 3-3 3" stroke={GOLD_DARK} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ═══════════════ SERVICES EVERYWHERE ═══════════════ */}
      <section className="py-16 md:py-20 bg-[#f5f4f0] border-t border-[#1a1a1a]/[0.06]" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD_DARK }}>Everywhere We Cover</p>
          <h2 id="services-heading" className="text-2xl md:text-3xl font-black leading-tight mb-3" style={{ color: INK }}>
            Every Service, Every Area
          </h2>
          <p className="text-[#1a1a1a]/55 text-base mb-8 max-w-2xl leading-relaxed">
            Wherever you are on the map above, the full range is available to you.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block px-4 py-3 bg-white border border-[#1a1a1a]/10 text-sm font-medium text-[#1a1a1a] hover:border-[#dcb068] hover:text-[#8a6535] transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-3 text-center" style={{ color: GOLD_DARK }}>Common Questions</p>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-black leading-tight mb-10 text-center" style={{ color: INK }}>
            Coverage FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-[#f5f4f0] rounded-xl border border-[#1a1a1a]/[0.08] overflow-hidden">
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

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section style={{ background: BG }} className="text-white" aria-label="Contact AJT Enterprise">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Don&apos;t See Your Area Listed?
              </h2>
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                Give us a call anyway. We regularly take on jobs just outside our
                listed areas across Gauteng and Limpopo.
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
