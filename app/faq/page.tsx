import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FAQSchema } from '@/components/faq-schema'

const GOLD = '#dcb068'
const GOLD_LIGHT = '#f4e78b'
const GOLD_DARK = '#8a6535'
const RED = '#b8161d'
const BG = '#0d0705'

export const metadata: Metadata = {
  title: 'Shadeport & Carport FAQ | AJT Enterprise Gauteng & Limpopo',
  description:
    'Answers to common questions about shadeport and carport installation, repairs, maintenance and pricing from AJT Enterprise. Call 065 867 7363.',
  keywords: [
    'shadeport FAQ',
    'carport installation questions',
    'shadeport cost South Africa',
    'shadeport repairs questions',
    'cantilever shadeport FAQ',
    'shadeport maintenance South Africa',
  ],
  alternates: {
    canonical: 'https://www.ajtenterprise.co.za/faq',
  },
  openGraph: {
    title: 'Shadeport & Carport FAQ | AJT Enterprise',
    description: 'Common questions about installation, repairs, maintenance and pricing, answered by our team.',
    url: 'https://www.ajtenterprise.co.za/faq',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: 'How much does a shadeport or carport cost?',
    answer:
      "Cost depends on the size of the structure, whether it's post-supported or cantilever, and the cover material, whether shade fabric, polycarbonate or IBR roof sheeting. We assess your site and give a clear written quote before any work starts, so you know the number before you decide.",
    category: 'Costs & Pricing',
  },
  {
    question: 'Do you charge for quotes or site visits?',
    answer:
      'On-site quotes are free and come with no obligation. We measure the space, talk through your options and give you a clear price before anything is booked.',
    category: 'Costs & Pricing',
  },
  {
    question: 'How long does a shadeport installation take?',
    answer:
      'Most standard shadeports are installed within a day or two once the design is confirmed. Larger cantilever structures or multi-bay parking cover can take longer depending on size and site access.',
    category: 'Shadeport Installation',
    related: { href: '/shadeport-installation', label: 'Shadeport Installation' },
  },
  {
    question: "What's the difference between a post-supported and a cantilever shadeport?",
    answer:
      'A post-supported shadeport uses upright poles along the edges, while a cantilever shadeport is anchored on one side only, leaving the parking area clear of poles. Cantilever structures cost more but give cleaner sightlines and easier access.',
    category: 'Shadeport Installation',
    related: { href: '/cantilever-shadeports', label: 'Cantilever Shadeports' },
  },
  {
    question: "Can you build a carport to match my home's style?",
    answer:
      'Yes. Carports are custom built to size and finish, single or double, and we can match roofing materials, colours and framing to suit your property.',
    category: 'Carports',
    related: { href: '/carports', label: 'Carports' },
  },
  {
    question: 'Do you install carports for businesses, not just homes?',
    answer:
      'Yes, we install both residential carports and commercial parking cover, including carports for offices, complexes and parking bays.',
    category: 'Carports',
    related: { href: '/parking-bay-shadeports', label: 'Parking Bay Shadeports' },
  },
  {
    question: 'Do you repair existing shadeports and carports, or only build new ones?',
    answer:
      'Both. We repair damaged frames, replace worn cladding and fittings, and offer scheduled maintenance to keep an existing structure sound.',
    category: 'Repairs & Maintenance',
    related: { href: '/shadeport-repairs', label: 'Shadeport Repairs' },
  },
  {
    question: 'How do I know if my shadeport needs re-covering instead of a full repair?',
    answer:
      "If the frame is still structurally sound but the fabric or roof sheeting is worn, faded or torn, re-covering is usually enough. We'll assess it on-site and tell you honestly which option makes sense.",
    category: 'Repairs & Maintenance',
    related: { href: '/shadeport-recovering', label: 'Shadeport Re-Covering' },
  },
  {
    question: 'Do you offer scheduled maintenance, or only once-off repairs?',
    answer:
      "Both. We can inspect and service a shadeport on a schedule that suits you, catching small issues before they turn into a full repair job.",
    category: 'Repairs & Maintenance',
    related: { href: '/shadeport-maintenance', label: 'Shadeport Maintenance' },
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We install and maintain shadeports and carports across Gauteng, including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort and Vereeniging, and across Limpopo, including Polokwane, Tzaneen, Mokopane, Thohoyandou, Lephalale and Bela-Bela.',
    category: 'Service Areas',
  },
  {
    question: 'Do you travel outside these towns for a project?',
    answer:
      "Get in touch with your location and we'll let you know if it falls within our usual service area or can be arranged as a special trip.",
    category: 'Service Areas',
  },
  {
    question: 'Is there a warranty on new installations?',
    answer:
      "Yes, new installations are backed by a workmanship warranty. We'll confirm the exact terms for your structure and materials when we quote.",
    category: 'Warranty & Aftercare',
  },
  {
    question: 'What happens if something goes wrong after installation?',
    answer:
      "Tell us straight away and we'll assess it. Honest communication is part of how we operate, if there's an issue with the work, you'll hear it from us directly, not find out on your own.",
    category: 'Warranty & Aftercare',
  },
]

// Group faqs by category for the sidebar nav
const categories = [...new Set(faqs.map((f) => f.category))]

// Categories that map to a dedicated service page get an "Explore this
// service" link next to their heading.
const categoryServiceLinks: Record<string, { href: string; label: string }> = {
  'Shadeport Installation': { href: '/shadeport-installation', label: 'Explore Shadeport Installation' },
  Carports: { href: '/carports', label: 'Explore Carports' },
  'Repairs & Maintenance': { href: '/shadeport-repairs', label: 'Explore Repairs & Maintenance' },
}

const relatedLinks = [
  { href: '/services', label: 'All Services' },
  { href: '/shadeport-installation', label: 'Shadeport Installation' },
  { href: '/carports', label: 'Carports' },
  { href: '/shadeport-repairs', label: 'Shadeport Repairs' },
  { href: '/shadeport-maintenance', label: 'Shadeport Maintenance' },
  { href: '/contact', label: 'Get a Free Quote' },
]

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
        </div>
      </div>

      {/* ── Page hero — split text / photo ── */}
      <section style={{ background: BG, borderColor: `${GOLD}26` }} className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-0 grid md:grid-cols-2 items-center gap-8 md:gap-0">
          <div className="md:py-16">
            <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD }}>
              Got Questions?
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 max-w-lg">
              Frequently Asked Questions
            </h1>
            <p className="text-white/55 text-lg max-w-md leading-relaxed">
              Answers to common questions about shadeport and carport
              installation, repairs, maintenance and pricing across Gauteng and
              Limpopo.
            </p>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto md:h-[340px] overflow-hidden">
            <Image
              src="/images/faq-hero.jpg"
              alt="AJT Enterprise team installing a shadeport"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 md:hidden" style={{ background: `linear-gradient(to top, ${BG}, transparent 40%)` }} />
          </div>
        </div>
      </section>

      {/* ── Category chips ── */}
      <section className="bg-white border-b border-[#1a1a1a]/8 overflow-x-auto" aria-label="FAQ categories">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex items-center gap-1.5 py-3 min-w-max">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
                  style={{ '--hover-color': GOLD } as React.CSSProperties}
                  className="inline-block px-3.5 py-1.5 text-[12px] font-medium text-[#1a1a1a]/65 hover:text-[#8a6535] hover:bg-[#f5f4f0] border border-transparent hover:border-[#dcb068]/40 transition-colors whitespace-nowrap"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Main content: FAQs + sidebar ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">

          {/* FAQ list */}
          <div>
            {categories.map((cat, catIndex) => {
              const catFaqs = faqs.filter((f) => f.category === cat)
              const anchorId = cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')
              const serviceLink = categoryServiceLinks[cat]

              return (
                <div key={cat}>
                  <div id={anchorId} className="mb-12 scroll-mt-24">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="block w-3 h-3" style={{ background: GOLD }} aria-hidden="true" />
                        <h2 className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: GOLD_DARK }}>
                          {cat}
                        </h2>
                      </div>
                      {serviceLink && (
                        <Link
                          href={serviceLink.href}
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide uppercase hover:text-[#1a1a1a] transition-colors"
                          style={{ color: GOLD_DARK }}
                        >
                          {serviceLink.label}
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      )}
                    </div>

                    <div className="space-y-0 border-t border-[#1a1a1a]/10">
                      {catFaqs.map((faq, i) => (
                        <details key={i} className="group border-b border-[#1a1a1a]/10">
                          <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none select-none">
                            <h3 className="text-base font-bold text-[#1a1a1a] leading-snug pr-2">
                              {faq.question}
                            </h3>
                            <span className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center border border-[#1a1a1a]/20 transition-colors">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="group-open:hidden">
                                <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                              </svg>
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="hidden group-open:block">
                                <path d="M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                              </svg>
                            </span>
                          </summary>
                          <div className="pb-5 pr-9">
                            <p className="text-[#1a1a1a]/65 text-base leading-relaxed mb-2">
                              {faq.answer}
                            </p>
                            {faq.related && (
                              <Link
                                href={faq.related.href}
                                className="inline-flex items-center gap-1.5 text-[12px] font-bold hover:text-[#1a1a1a] transition-colors"
                                style={{ color: GOLD_DARK }}
                              >
                                Related: {faq.related.label}
                                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </Link>
                            )}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>

                  {/* Mid-page image break, after the second category */}
                  {catIndex === 1 && (
                    <div className="relative mb-12 overflow-hidden rounded-xl">
                      <div className="relative aspect-[21/9]">
                        <Image
                          src="/images/faq-banner.jpg"
                          alt="AJT Enterprise carport and shadeport installation"
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                        <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${BG}e6 0%, ${BG}80 55%, transparent 100%)` }} />
                        <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-6 md:px-10 max-w-md">
                          <p className="font-black text-white text-xl md:text-2xl leading-snug mb-2">
                            Free On-Site Quotes,<br />Honest Answers.
                          </p>
                          <a href="tel:0658677363" style={{ color: GOLD }} className="text-sm font-bold hover:text-white transition-colors w-fit">
                            Call 065 867 7363 →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {/* Still have questions */}
            <div className="mt-4 p-7 border" style={{ background: BG, borderColor: `${GOLD}33` }}>
              <div className="w-8 h-0.5 mb-4" style={{ background: GOLD }} />
              <h2 className="text-xl font-black text-white mb-2">
                Still Have Questions?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Our team is happy to answer any question about your project.
                Call us or send a message and we will get back to you promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0658677363"
                  style={{ background: RED }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-bold text-sm hover:brightness-110 transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  Call 065 867 7363
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold text-sm hover:border-white/50 transition-colors"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block space-y-6 sticky top-24" aria-label="Related resources">

            {/* Quick call card */}
            <div className="p-6" style={{ background: RED }}>
              <p className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                Need A Quote?
              </p>
              <p className="text-white font-black text-lg leading-snug mb-4">
                Free on-site quotes.<br />Fast, honest turnaround.
              </p>
              <a
                href="tel:0658677363"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white font-black text-base hover:bg-[#f5f4f0] transition-colors"
                style={{ color: RED }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                065 867 7363
              </a>
            </div>

            {/* Recent work photo card */}
            <Link
              href="/shadeport-installation"
              className="group block border border-[#1a1a1a]/10 overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/faq-sidebar.jpg"
                  alt="Recent AJT Enterprise shadeport installation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="280px"
                />
              </div>
              <div className="px-4 py-3 bg-[#f5f4f0]">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/50 group-hover:text-[#8a6535] transition-colors">
                  See Recent Work →
                </p>
              </div>
            </Link>

            {/* Related links */}
            <div className="border border-[#1a1a1a]/10 bg-[#f5f4f0]">
              <div className="px-5 py-4 border-b border-[#1a1a1a]/10">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a]/40">
                  Helpful Links
                </p>
              </div>
              <ul className="divide-y divide-[#1a1a1a]/8">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between px-5 py-3.5 text-sm text-[#1a1a1a]/70 hover:text-[#8a6535] hover:bg-white transition-colors group"
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: GOLD_DARK }} aria-hidden="true">
                        <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories nav */}
            <div className="border border-[#1a1a1a]/10">
              <div className="px-5 py-4 border-b border-[#1a1a1a]/10 bg-[#f5f4f0]">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a]/40">
                  Jump to Category
                </p>
              </div>
              <ul className="divide-y divide-[#1a1a1a]/8">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
                      className="flex items-center gap-2.5 px-5 py-3 text-sm text-[#1a1a1a]/65 hover:text-[#8a6535] hover:bg-[#f5f4f0] transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full transition-colors shrink-0" style={{ background: `${GOLD}66` }} />
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="text-white border-t" style={{ background: BG, borderColor: `${GOLD}1a` }} aria-label="Contact CTA">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-black mb-2">
                Need A Shadeport Or Carport Sorted?
              </h2>
              <p className="text-white/45 text-sm">
                Free on-site quotes &middot; New installs &amp; repairs &middot; Gauteng &amp; Limpopo
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0658677363"
                style={{ background: RED }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-black text-base hover:brightness-110 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                065 867 7363
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white font-semibold text-base hover:border-white/50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
