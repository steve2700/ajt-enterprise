import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import WhatsAppButton from '@/components/whatsapp-button'
import OrganizationSchema from '@/components/organization-schema'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const BASE_URL = 'https://www.ajtenterprise.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'AJT Enterprise | Shadeport & Carport Installation, Repairs & Maintenance',
    template: '%s | AJT Enterprise',
  },
  description:
    "Gauteng & Limpopo's trusted shadeport and carport specialists. New installations, repairs and maintenance for shadeports, cantilever shadeports, carports and parking bay cover. Call 065 867 7363.",
  keywords: [
    'shadeports Gauteng',
    'shadeports Limpopo',
    'shadeport installation South Africa',
    'carport installation Gauteng',
    'cantilever shadeports',
    'shadeport repairs',
    'shadeport maintenance',
    'parking bay shadeports',
    'carports South Africa',
    'shadeport prices',
  ],
  authors: [{ name: 'AJT Enterprise', url: BASE_URL }],
  creator: 'AJT Enterprise',
  publisher: 'AJT Enterprise',

  // ── Favicons & icons ──────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // ── Web app manifest ──────────────────────────────────────────────
  manifest: '/site.webmanifest',

  // ── Open Graph ────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: BASE_URL,
    siteName: 'AJT Enterprise',
    title: 'AJT Enterprise | Shadeport & Carport Installation, Repairs & Maintenance',
    description:
      "Gauteng & Limpopo's trusted shadeport and carport specialists. New installations, repairs and maintenance. Call 065 867 7363.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AJT Enterprise — shadeports and carports across Gauteng & Limpopo',
        type: 'image/png',
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'AJT Enterprise | Shadeport & Carport Specialists',
    description:
      'New shadeport & carport installations, repairs and maintenance across Gauteng & Limpopo. Call 065 867 7363.',
    images: ['/og-image.png'],
  },

  // ── Robots ────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Canonical ─────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Misc ──────────────────────────────────────────────────────────
  category: 'Shadeports & Carports',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#dcb068',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <OrganizationSchema />
        {/* MS Tile */}
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-config" content="none" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        {/* Google Tag (gtag.js) Loaded via Next.js Script component */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18328564945"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18328564945');
          `}
        </Script>

        <SiteHeader />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
