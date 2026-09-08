import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'

const GOLD = '#dcb068'
const GOLD_LIGHT = '#f4e78b'
const GOLD_DARK = '#8a6535'
const RED = '#b8161d'
const BG = '#0d0705'

export const metadata: Metadata = {
  title: 'About Us | AJT Enterprise Shadeports & Carports',
  description:
    "Gauteng & Limpopo's trusted shadeport and carport specialists. Certified installers, weatherproof builds and honest written quotes on every job. Call 065 867 7363.",
  keywords: [
    'about AJT Enterprise',
    'shadeport company Gauteng',
    'shadeport company Limpopo',
    'carport installers South Africa',
    'trusted shadeport specialists',
  ],
  alternates: { canonical: 'https://www.ajtenterprise.co.za/about' },
  openGraph: {
    title: 'About AJT Enterprise | Shadeport & Carport Specialists',
    description: "Gauteng & Limpopo's trusted shadeport and carport specialists. Call 065 867 7363.",
    url: 'https://www.ajtenterprise.co.za/about',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://www.ajtenterprise.co.za/about',
  name: 'About AJT Enterprise',
  url: 'https://www.ajtenterprise.co.za/about',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.ajtenterprise.co.za/#business',
    name: 'AJT Enterprise',
    description: 'Shadeport and carport installation, repairs and maintenance, serving Gauteng and Limpopo.',
    telephone: '+27658677363',
    email: 'Info@ajtenterprise.co.za',
    url: 'https://www.ajtenterprise.co.za',
    areaServed: [
      { '@type': 'State', name: 'Gauteng' },
      { '@type': 'State', name: 'Limpopo' },
    ],
  },
}

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: 'Free', label: 'On-Site Quotes' },
  { value: '2', label: 'Provinces Covered' },
  { value: '✓', label: 'Warranty Included' },
]

const pillars = [
  {
    heading: 'Certified Installers',
    body: 'Every installer on site is trained and experienced, so your structure is measured, built and fitted correctly the first time.',
  },
  {
    heading: 'Weatherproof Builds',
    body: 'We spec frames, fixings and cover materials for local sun, wind and summer storms, not a generic one-size structure.',
  },
  {
    heading: 'Transparent Pricing',
    body: 'You receive a clear written quote before any work starts, covering structure, size and finish. No hidden fees, no surprises on the invoice.',
  },
  {
    heading: 'Fast, Reliable Turnaround',
    body: 'From first site visit to final installation, we keep projects moving without cutting corners on the finish.',
  },
  {
    heading: 'End-To-End Service',
    body: 'New installations, repairs, maintenance and re-covering, one team handles the structure for as long as you own it.',
  },
  {
    heading: 'Trusted, Professional Team',
    body: 'Honest communication and workmanship we stand behind, on every job, every time, across Gauteng and Limpopo.',
  },
]

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

const coverage = [
  { name: 'Gauteng', body: 'Our home base, covering Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging.' },
  { name: 'Limpopo', body: 'Regular installation and repair work across Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.' },
  { name: 'Residential', body: 'Driveway carports and shadeports sized and fitted to suit the home, not a stock template.' },
  { name: 'Commercial', body: 'Parking bay cover and larger cantilever structures for businesses, sites and body corporates.' },
]

const areaRegions = [
  {
    region: 'Gauteng',
    areas: ['Johannesburg', 'Pretoria', 'Sandton', 'Centurion', 'Midrand', 'Randburg', 'Roodepoort', 'Vereeniging'],
  },
  {
    region: 'Limpopo',
    areas: ['Polokwane', 'Tzaneen', 'Mokopane', 'Thohoyandou', 'Lephalale', 'Bela-Bela'],
  },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-black/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="relative overflow-hidden" style={{ background: BG }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cantilever-shade-port.jpg"
            alt="Completed AJT Enterprise cantilever shadeport installation"
            fill
            priority
            className="object-cover object-center opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${BG} 15%, ${BG}d9 55%, ${BG}70 100%)` }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD }}>
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Built On Trust,<br />Backed By Craftsmanship
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            AJT Enterprise installs, repairs and maintains shadeports and carports
            across Gauteng and Limpopo, built to handle real South African sun,
            wind and summer storms.
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ background: '#111111', borderColor: `${GOLD}26` }} className="border-b" aria-label="Company statistics">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/[0.07]">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center md:px-8">
                <dt className="text-2xl md:text-3xl font-black mb-1" style={{ color: GOLD }}>{s.value}</dt>
                <dd className="text-white/45 text-xs font-medium uppercase tracking-wider">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Our story ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="story-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD_DARK }}>Our Story</p>
              <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Shade That&apos;s<br />Built To Last
              </h2>
              <div className="w-10 h-0.5 mb-6" style={{ background: GOLD }} />
              <div className="space-y-4 text-[#1a1a1a]/70 text-base leading-relaxed">
                <p>
                  AJT Enterprise was built on a straightforward mission, give homeowners
                  and businesses across Gauteng and Limpopo a shadeport and carport
                  specialist they can genuinely rely on, not one that disappears after
                  the deposit or cuts corners on the frame.
                </p>
                <p>
                  Our installers measure every site properly, build to the structure and
                  finish agreed in the quote, and stand behind the work once it&apos;s up,
                  whether it&apos;s a single residential carport or a multi-bay commercial
                  parking cover.
                </p>
                <p>
                  What matters most hasn&apos;t changed, arrive prepared, quote honestly,
                  and install it right the first time.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src="/images/shadeport-quote.png"
                alt="AJT Enterprise team measuring a site ahead of a written quote"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: GOLD }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: GOLD }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why choose us — 6 pillars ── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD_DARK }}>Why Choose Us</p>
          <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 max-w-xl leading-tight">
            What Sets Us Apart
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.08]">
            {pillars.map((p) => (
              <div key={p.heading} className="bg-white p-7 md:p-8">
                <div className="w-8 h-[2px] mb-5" style={{ background: GOLD }} />
                <dt className="font-bold text-[#1a1a1a] text-base mb-3">{p.heading}</dt>
                <dd className="text-[#1a1a1a]/60 text-sm leading-relaxed">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services + coverage ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Services list */}
            <div>
              <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD_DARK }}>What We Do</p>
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Our Services
              </h2>
              <div className="w-10 h-0.5 mb-7" style={{ background: GOLD }} />
              <p className="text-[#1a1a1a]/65 text-base leading-relaxed mb-7">
                We handle every stage in-house, from the first measure-up to the final
                fitting, no subcontracting the install to someone else.
              </p>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-start gap-3 text-sm text-[#1a1a1a]/75 hover:text-[#1a1a1a] transition-colors"
                    >
                      <span className="mt-0.5 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="7.5" stroke={GOLD_DARK} strokeWidth="1" />
                          <path d="M5 8l2 2 4-4" stroke={GOLD_DARK} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage */}
            <div>
              <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD_DARK }}>Where We Work</p>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Two Provinces, One Team
              </h3>
              <div className="w-10 h-0.5 mb-7" style={{ background: GOLD }} />
              <p className="text-[#1a1a1a]/65 text-sm leading-relaxed mb-7">
                Our installation teams work residential driveways and commercial parking
                bays alike, with the same on-site quote, careful installation and
                after-care wherever the job is.
              </p>
              <div className="space-y-4">
                {coverage.map((n) => (
                  <div key={n.name} className="px-4 py-4 bg-[#f5f4f0] border border-black/[0.08]">
                    <p className="text-sm font-bold text-[#1a1a1a] mb-1">{n.name}</p>
                    <p className="text-[#1a1a1a]/55 text-xs leading-relaxed">{n.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured work strip ── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="work-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD_DARK }}>Recent Work</p>
          <h2 id="work-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10 leading-tight">
            Structures We&apos;ve Installed
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { src: '/images/cantilever-shade-port.jpg', alt: 'Cantilever shadeport installed by AJT Enterprise' },
              { src: '/images/car_shadeports.jfif', alt: 'Residential carport shadeport installed by AJT Enterprise' },
              { src: '/images/custom_shadeports.jfif', alt: 'Custom shadeport structure installed by AJT Enterprise' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className="py-14 bg-white border-t border-black/[0.08]" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="areas-heading" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
            Everywhere We Cover
          </h2>
          <p className="text-[#1a1a1a]/55 text-base mb-8 max-w-2xl">
            We install and maintain shadeports and carports across Gauteng and Limpopo.
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-black/[0.08]">
            {areaRegions.map((group) => (
              <div key={group.region} className="bg-[#f5f4f0] p-6 md:p-7">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5 pb-3 border-b border-black/[0.08]" style={{ color: GOLD_DARK }}>
                  {group.region}
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {group.areas.map((name) => (
                    <li key={name} className="text-sm font-medium text-[#1a1a1a]/65">{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: BG }} className="text-white" aria-label="Get a free quote from AJT Enterprise">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Ready For Your New Shadeport?
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                Get a free, no-obligation quote on installation, repairs or
                maintenance, anywhere across Gauteng or Limpopo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0658677363"
                style={{ background: RED }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-black text-lg hover:brightness-110 transition-all"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                065 867 7363
              </a>
              <Link
                href="/contact"
                style={{ borderColor: `${GOLD}40` }}
                className="inline-flex items-center justify-center px-8 py-4 border text-white font-semibold hover:border-white/40 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
