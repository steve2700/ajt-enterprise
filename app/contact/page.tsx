import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'

const GOLD = '#dcb068'
const GOLD_DARK = '#8a6535'
const RED = '#b8161d'
const BG = '#0d0705'

export const metadata: Metadata = {
  title: 'Contact AJT Enterprise | Shadeport & Carport Quote',
  description:
    'Contact AJT Enterprise for shadeport and carport installation, repairs and maintenance across Gauteng and Limpopo. Call 065 867 7363 or request a free quote online.',
  keywords: [
    'contact shadeport company Gauteng',
    'contact carport installer Limpopo',
    'shadeport quote South Africa',
    'shadeport company phone number',
    'free carport quote Gauteng',
  ],
  alternates: {
    canonical: 'https://www.ajtenterprise.co.za/contact',
  },
  openGraph: {
    title: 'Contact AJT Enterprise | Shadeport & Carport Quote',
    description: 'Call 065 867 7363 or request a free quote online. Shadeports & carports across Gauteng and Limpopo.',
    url: 'https://www.ajtenterprise.co.za/contact',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.ajtenterprise.co.za/contact',
  name: 'Contact AJT Enterprise',
  url: 'https://www.ajtenterprise.co.za/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.ajtenterprise.co.za/#business',
    name: 'AJT Enterprise',
    telephone: '+27658677363',
    email: 'Info@ajtenterprise.co.za',
    url: 'https://www.ajtenterprise.co.za',
    areaServed: [
      { '@type': 'State', name: 'Gauteng' },
      { '@type': 'State', name: 'Limpopo' },
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
    ],
  },
}

const services = [
  'Shadeport Installation',
  'Cantilever Shadeports',
  'Carports',
  'Carport Installation',
  'Parking Bay Shadeports',
  'Shadeport Repairs',
  'Shadeport Maintenance',
  'Shadeport Re-Covering',
  'Other',
]

const hours = [
  { day: 'Monday – Friday', time: '07:30 – 17:00' },
  { day: 'Saturday', time: '08:00 – 13:00' },
  { day: 'Sunday', time: 'By arrangement' },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-black/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section style={{ background: BG, borderColor: `${GOLD}26` }} className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD }}>
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 max-w-2xl">
            Contact AJT Enterprise
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            For new shadeport or carport installations, repairs, maintenance or a
            free quote — we&apos;re ready to help across Gauteng and Limpopo.
          </p>
        </div>
      </section>

      {/* ── Quick contact bar ── */}
      <section style={{ background: '#111111' }} className="border-b border-white/[0.07]" aria-label="Quick contact options">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:0658677363"
              style={{ background: RED }}
              className="flex items-center justify-center gap-2.5 px-6 py-3 text-white font-bold text-sm hover:brightness-110 transition-all flex-1 sm:flex-none"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call 065 867 7363
            </a>
            <a
              href="https://wa.me/27658677363?text=Hi%2C%20I%27d%20like%20a%20shadeport%20or%20carport%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-3 bg-[#1a1a1a] border border-white/10 text-white font-bold text-sm hover:border-white/30 transition-colors flex-1 sm:flex-none"
              style={{ ['--hover' as string]: GOLD }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="mailto:Info@ajtenterprise.co.za"
              className="flex items-center justify-center gap-2.5 px-6 py-3 bg-[#1a1a1a] border border-white/10 text-white font-bold text-sm hover:border-white/30 transition-colors flex-1 sm:flex-none"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-14 md:py-20 bg-[#f5f4f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">

            {/* ── Left: info ── */}
            <div className="space-y-10">

              {/* Contact details */}
              <div className="bg-white border border-black/[0.08]">
                <div className="px-7 py-5 border-b border-black/[0.08]">
                  <h2 className="font-bold text-[#1a1a1a] text-lg">Contact Details</h2>
                </div>
                <div className="divide-y divide-black/[0.08]">

                  {/* Phone */}
                  <div className="px-7 py-5 flex items-start gap-5">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center" style={{ background: RED }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-1">Phone</p>
                      <a href="tel:0658677363" className="text-[#1a1a1a] font-bold text-xl transition-colors" style={{ color: '#1a1a1a' }}>
                        065 867 7363
                      </a>
                      <p className="text-[#1a1a1a]/50 text-sm mt-0.5">Call for a free on-site quote</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="px-7 py-5 flex items-start gap-5">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#1a1a1a]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/27658677363?text=Hi%2C%20I%27d%20like%20a%20shadeport%20or%20carport%20quote."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a1a1a] font-bold text-xl transition-colors"
                      >
                        065 867 7363
                      </a>
                      <p className="text-[#1a1a1a]/50 text-sm mt-0.5">Quick responses via WhatsApp</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="px-7 py-5 flex items-start gap-5">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center" style={{ background: GOLD }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-1">Email</p>
                      <a
                        href="mailto:Info@ajtenterprise.co.za"
                        className="text-[#1a1a1a] font-bold text-base transition-colors break-all"
                      >
                        Info@ajtenterprise.co.za
                      </a>
                      <p className="text-[#1a1a1a]/50 text-sm mt-0.5">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Service area */}
                  <div className="px-7 py-5 flex items-start gap-5">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#f5f4f0] border border-black/[0.10]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD_DARK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-1">Service Area</p>
                      <p className="text-[#1a1a1a] font-bold text-base">Gauteng &amp; Limpopo, South Africa</p>
                      <p className="text-[#1a1a1a]/50 text-sm mt-0.5">
                        Johannesburg, Pretoria, Sandton, Polokwane, Tzaneen &amp; all surrounding areas
                      </p>
                      <Link href="/services" className="text-[12px] font-semibold uppercase tracking-wider mt-1.5 inline-block" style={{ color: GOLD_DARK }}>
                        View all services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="bg-white border border-black/[0.08]">
                <div className="px-7 py-5 border-b border-black/[0.08]">
                  <h2 className="font-bold text-[#1a1a1a] text-lg">Business Hours</h2>
                </div>
                <div className="px-7 py-5">
                  <dl className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between border-b border-black/[0.06] pb-3 last:border-0 last:pb-0">
                        <dt className="text-sm font-medium text-[#1a1a1a]/70">{h.day}</dt>
                        <dd className="text-sm font-bold text-[#1a1a1a]">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-5 flex items-start gap-3 px-4 py-3" style={{ background: `${RED}0d`, border: `1px solid ${RED}26` }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: RED }} />
                    <p className="text-sm font-medium leading-relaxed" style={{ color: RED }}>
                      Call anytime to arrange a site visit — most quotes are confirmed within a day or two
                    </p>
                  </div>
                </div>
              </div>

              {/* Internal links */}
              <div className="bg-white border border-black/[0.08]">
                <div className="px-7 py-5 border-b border-black/[0.08]">
                  <h2 className="font-bold text-[#1a1a1a] text-lg">What We Offer</h2>
                </div>
                <ul className="divide-y divide-black/[0.08]">
                  {[
                    { href: '/services', label: 'View all shadeport & carport services' },
                    { href: '/shadeport-installation', label: 'Shadeport installation' },
                    { href: '/carports', label: 'Carports' },
                    { href: '/shadeport-repairs', label: 'Shadeport repairs' },
                    { href: '/shadeport-maintenance', label: 'Shadeport maintenance' },
                    { href: '/faq', label: 'Frequently asked questions' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-7 py-4 text-sm text-[#1a1a1a]/65 hover:bg-[#f5f4f0] transition-colors group"
                      >
                        {item.label}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: GOLD_DARK }} aria-hidden="true">
                          <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="bg-white border border-black/[0.08] sticky top-24">
              <div className="px-7 py-6 border-b border-black/[0.08]" style={{ background: BG }}>
                <div className="w-8 h-0.5 mb-3" style={{ background: GOLD }} />
                <h2 className="text-white font-black text-xl mb-1">Request a Free Quote</h2>
                <p className="text-white/45 text-sm">
                  We respond within 24 hours, faster during business hours.
                </p>
              </div>

              <div className="px-7 py-6">
                <form
                  method="POST"
                  action="/api/contact"
                  className="space-y-4"
                  aria-label="Shadeport and carport quote request form"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Full Name <span style={{ color: RED }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="block w-full border border-black/[0.15] bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:outline-none focus:bg-white transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Phone Number <span style={{ color: RED }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      className="block w-full border border-black/[0.15] bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:outline-none focus:bg-white transition-colors"
                      placeholder="e.g. 082 123 4567"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="block w-full border border-black/[0.15] bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:outline-none focus:bg-white transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Service needed */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Service Needed <span style={{ color: RED }}>*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="block w-full border border-black/[0.15] bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] focus:outline-none focus:bg-white transition-colors"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Structure details */}
                  <div>
                    <label htmlFor="structure-details" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Structure Details
                    </label>
                    <input
                      type="text"
                      id="structure-details"
                      name="structure-details"
                      className="block w-full border border-black/[0.15] bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:outline-none focus:bg-white transition-colors"
                      placeholder="e.g. double carport, approx. 6m x 5.5m"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Location <span style={{ color: RED }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      className="block w-full border border-black/[0.15] bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:outline-none focus:bg-white transition-colors"
                      placeholder="e.g. Centurion, Gauteng"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Tell Us What You Need <span style={{ color: RED }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="block w-full border border-black/[0.15] bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:outline-none focus:bg-white transition-colors resize-none"
                      placeholder="Tell us about the structure, site access and preferred timing…"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ background: '#1a1a1a' }}
                    className="w-full py-3.5 text-white font-bold text-sm tracking-wide uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Send Enquiry
                  </button>

                  <p className="text-center text-xs text-[#1a1a1a]/40">
                    Or call us directly:{' '}
                    <a href="tel:0658677363" className="font-semibold transition-colors" style={{ color: GOLD_DARK }}>
                      065 867 7363
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ background: RED }} className="text-white" aria-label="Get a free quote CTA">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-2">Ready For Your New Shadeport?</h2>
              <p className="text-white/75 text-base">
                We install and repair shadeports and carports across Gauteng and Limpopo — call now for a free quote.
              </p>
            </div>
            <a
              href="tel:0658677363"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-white font-black text-xl hover:bg-[#f5f4f0] transition-colors shrink-0"
              style={{ color: RED }}
              aria-label="Call AJT Enterprise: 065 867 7363"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              065 867 7363
            </a>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
