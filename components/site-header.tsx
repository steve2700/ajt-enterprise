'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const services = [
  { href: '/shadeport-installation', label: 'Shadeport Installation', desc: 'New structures, built to spec' },
  { href: '/cantilever-shadeports', label: 'Cantilever Shadeports', desc: 'No centre poles, clean sightlines' },
  { href: '/carports', label: 'Carports', desc: 'Custom single & double shelters' },
  { href: '/carport-installation', label: 'Carport Installation', desc: 'Professional fitting at your property' },
  { href: '/parking-bay-shadeports', label: 'Parking Bay Shadeports', desc: 'Commercial & residential cover' },
  { href: '/shadeport-repairs', label: 'Shadeport Repairs', desc: 'Frames, cladding & fittings fixed' },
  { href: '/shadeport-maintenance', label: 'Shadeport Maintenance', desc: 'Scheduled servicing & inspections' },
  { href: '/shadeport-recovering', label: 'Shadeport Re-Covering', desc: 'Fabric & roof sheet replacement' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', dropdown: 'services' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

type DropdownKey = 'services' | null

const GOLD = '#dcb068'
const GOLD_LIGHT = '#f4e78b'
const RED = '#b8161d'
const RED_LIGHT = '#fc4d53'
const BG = '#0d0705'
const BG_SOFT = '#1a1013'

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
    setMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isServiceActive = (path: string) =>
    path.includes('shadeport') || path.includes('carport') || path === '/services'

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 text-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]' : ''
      }`}
      style={{ background: BG }}
    >
      {/* thin gold progress line at very top */}
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD_LIGHT} 50%, ${GOLD} 100%)` }} />

      {/* ── Top bar ── */}
      <div className="hidden md:block border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-9 flex justify-between items-center">
          <p className="text-white/45 text-xs tracking-wide flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7l8 6 8-6" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="3" y="5" width="18" height="14" rx="2" stroke={GOLD} strokeWidth="1.6" />
            </svg>
            Shadeports &amp; Carports Specialists
            <span className="text-white/25">·</span>
            New Installations
            <span className="text-white/25">·</span>
            Repairs &amp; Maintenance
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:Info@ajtenterprise.co.za"
              className="text-white/45 hover:text-white transition-colors text-xs tracking-wide"
            >
              Info@ajtenterprise.co.za
            </a>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <a
              href="tel:0115685348"
              className="text-white/45 hover:text-white transition-colors text-xs tracking-wide"
            >
              011 568 5348
            </a>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <a
              href="tel:0658677363"
              style={{ color: GOLD }}
              className="hover:brightness-110 transition-all text-xs font-semibold tracking-widest"
            >
              065 867 7363
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-[74px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="AJT Enterprise, home">
            <Image
              src="/logo-horizontal.png"
              alt="AJT Enterprise"
              width={520}
              height={130}
              className="object-contain h-10 md:h-[52px] w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const hasDropdown = !!link.dropdown
              const isActive =
                link.dropdown === 'services' ? isServiceActive(pathname) : pathname === link.href
              const isOpen = openDropdown === link.dropdown

              if (hasDropdown) {
                return (
                  <div key={link.href} className="relative">
                    <button
                      onMouseEnter={() => setOpenDropdown(link.dropdown as DropdownKey)}
                      onClick={() => setOpenDropdown(isOpen ? null : (link.dropdown as DropdownKey))}
                      style={isActive || isOpen ? { color: GOLD } : undefined}
                      className={`relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                        isActive || isOpen ? '' : 'text-white/70 hover:text-white'
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {isActive && !isOpen && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full" style={{ background: GOLD }} />
                      )}
                    </button>

                    {/* ── Services dropdown ── */}
                    {link.dropdown === 'services' && isOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                        style={{ background: BG_SOFT }}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="h-[2px]" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
                        <div className="p-5">
                          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-4">All Services</p>
                          <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {services.map((s) => {
                              const active = pathname === s.href
                              return (
                                <li key={s.href}>
                                  <Link
                                    href={s.href}
                                    className={`flex flex-col rounded-lg px-3 py-2.5 transition-colors ${
                                      active ? 'bg-white/[0.06]' : 'hover:bg-white/[0.05]'
                                    }`}
                                  >
                                    <span
                                      style={active ? { color: GOLD } : undefined}
                                      className={`text-[13px] font-semibold transition-colors ${active ? '' : 'text-white/85'}`}
                                    >
                                      {s.label}
                                    </span>
                                    <span className="text-[11px] text-white/40 mt-0.5">{s.desc}</span>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                          <div className="mt-4 pt-4 border-t border-white/[0.08] flex justify-between items-center">
                            <Link href="/services" style={{ color: GOLD }} className="text-[12px] hover:brightness-110 font-semibold tracking-wide uppercase transition-all">
                              View all services
                            </Link>
                            <a href="tel:0658677363" className="text-[12px] text-white/40 hover:text-white transition-colors">
                              Call: 065 867 7363
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={isActive ? { color: GOLD } : undefined}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    isActive ? '' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full" style={{ background: GOLD }} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:0658677363"
            style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}
            className="hidden md:inline-flex items-center gap-2 rounded-full pl-4 pr-5 py-2.5 text-white text-[13px] font-bold tracking-wide shadow-[0_6px_20px_-8px_rgba(184,22,29,0.9)] hover:brightness-105 hover:-translate-y-0.5 transition-all shrink-0"
          >
            <span className="grid place-items-center w-6 h-6 rounded-full bg-white/15">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </span>
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
            style={{ '--tw-ring-color': GOLD, '--tw-ring-offset-color': BG } as React.CSSProperties}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className={`block w-5 h-[2px] bg-current origin-center transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-current origin-center transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}66, transparent)` }} />
        <div className="px-6 pt-3 pb-6" style={{ background: BG_SOFT }}>
          <ul className="space-y-0">
            {navLinks.map((link) => {
              const active = pathname === link.href

              /* ── Mobile Services accordion ── */
              if (link.dropdown === 'services') {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.08] text-white/80 hover:text-white transition-colors"
                      aria-expanded={mobileServicesOpen}
                    >
                      Services
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none"
                        className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                      <ul className="pl-4 py-2 space-y-0">
                        {services.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              onClick={() => setIsMenuOpen(false)}
                              style={pathname === s.href ? { color: GOLD } : undefined}
                              className={`flex py-2.5 text-[13px] border-b border-white/[0.05] transition-colors ${pathname === s.href ? '' : 'text-white/55 hover:text-white'}`}
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link href="/services" onClick={() => setIsMenuOpen(false)} style={{ color: GOLD }} className="block pt-3 text-[12px] font-bold tracking-widest uppercase">
                            All Services →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                )
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={active ? { color: GOLD } : undefined}
                    className={`flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.08] transition-colors ${active ? '' : 'text-white/80 hover:text-white'}`}
                  >
                    {link.label}
                    {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} aria-hidden="true" />}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-5 space-y-2.5">
            <a
              href="tel:0658677363"
              style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}
              className="flex items-center justify-center gap-2.5 w-full rounded-full py-4 text-white font-bold text-[15px] tracking-wide hover:brightness-105 transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call 065 867 7363
            </a>
            <a
              href="tel:0115685348"
              className="flex items-center justify-center gap-2.5 w-full rounded-full py-3 border border-white/15 text-white/70 font-medium text-[13px] tracking-wide hover:text-white hover:border-white/30 transition-colors"
            >
              Office: 011 568 5348
            </a>
            <a
              href="mailto:Info@ajtenterprise.co.za"
              className="flex items-center justify-center gap-2.5 w-full rounded-full py-3 border border-white/15 text-white/70 font-medium text-[13px] tracking-wide hover:text-white hover:border-white/30 transition-colors"
            >
              Info@ajtenterprise.co.za
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
