# AJT Enterprise

Shadeport and carport installation, repairs, maintenance and re-covering, serving Gauteng and Limpopo. Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Live site: [www.ajtenterprise.co.za](https://www.ajtenterprise.co.za)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Images | Next.js `<Image>` (WebP/PNG optimisation) |
| SEO | Metadata API + JSON-LD structured data |
| Package manager | pnpm |
| Deployment | Vercel |

---

## Project Structure

```
app/
├── page.tsx                        # Homepage
├── layout.tsx                      # Root layout (nav, footer, mobile call bar)
├── globals.css                     # Global styles + Tailwind base, brand tokens
├── robots.ts                       # robots.txt generation
├── sitemap.ts                      # sitemap.xml generation (30 URLs)
│
├── about/                          # About Us
├── areas/                          # Service areas overview
├── contact/                        # Contact & quote request form
├── faq/                            # Frequently asked questions
├── privacy-policy/                 # Privacy policy
├── services/                       # All services overview
├── terms/                          # Terms & conditions
│
├── shadeport-installation/         # Shadeport Installation
├── cantilever-shadeports/          # Cantilever Shadeports
├── carports/                       # Carports
├── carport-installation/           # Carport Installation
├── parking-bay-shadeports/         # Parking Bay Shadeports
├── shadeport-repairs/              # Shadeport Repairs
├── shadeport-maintenance/          # Shadeport Maintenance
├── shadeport-recovering/           # Shadeport Re-Covering
│
├── shadeport-johannesburg/         # Area page, Johannesburg (Gauteng)
├── shadeport-pretoria/             # Area page, Pretoria (Gauteng)
├── shadeport-sandton/              # Area page, Sandton (Gauteng)
├── shadeport-centurion/            # Area page, Centurion (Gauteng)
├── shadeport-midrand/              # Area page, Midrand (Gauteng)
├── shadeport-randburg/             # Area page, Randburg (Gauteng)
├── shadeport-roodepoort/           # Area page, Roodepoort (Gauteng)
├── shadeport-vereeniging/          # Area page, Vereeniging (Gauteng)
├── shadeport-polokwane/            # Area page, Polokwane (Limpopo)
├── shadeport-tzaneen/              # Area page, Tzaneen (Limpopo)
├── shadeport-mokopane/             # Area page, Mokopane (Limpopo)
├── shadeport-thohoyandou/          # Area page, Thohoyandou (Limpopo)
├── shadeport-lephalale/            # Area page, Lephalale (Limpopo)
└── shadeport-bela-bela/            # Area page, Bela-Bela (Limpopo)

components/
├── site-header.tsx                 # Main nav, services dropdown, Call Now CTA
├── site-footer.tsx                 # Footer, services & areas, contact block
├── breadcrumbs.tsx                 # Breadcrumb nav (schema-ready)
├── faq-schema.tsx                  # Shared FAQPage JSON-LD component
├── organization-schema.tsx         # Sitewide LocalBusiness + WebSite JSON-LD
└── area-schema.tsx                 # Per-area LocalBusiness JSON-LD (region-aware)

public/images/                      # All optimised images (PNG/JPG/JFIF)
```

> Every route above is a live, built page, nothing on the homepage, `/services`, or `/areas` links to a page that doesn't exist. See the note at the bottom of Area Coverage on the one thing left to sync.

---

## Service Coverage

All 8 services have a dedicated page, each carrying its own `Service` + `BreadcrumbList` JSON-LD and a page-specific FAQ set:

| Service | Route |
|---|---|
| Shadeport Installation | `/shadeport-installation` |
| Cantilever Shadeports | `/cantilever-shadeports` |
| Carports | `/carports` |
| Carport Installation | `/carport-installation` |
| Parking Bay Shadeports | `/parking-bay-shadeports` |
| Shadeport Repairs | `/shadeport-repairs` |
| Shadeport Maintenance | `/shadeport-maintenance` |
| Shadeport Re-Covering | `/shadeport-recovering` |

---

## Area Coverage

All 14 area pages are live, covering Gauteng and Limpopo:

| Area | Province | Route |
|---|---|---|
| Johannesburg | Gauteng | `/shadeport-johannesburg` |
| Pretoria | Gauteng | `/shadeport-pretoria` |
| Sandton | Gauteng | `/shadeport-sandton` |
| Centurion | Gauteng | `/shadeport-centurion` |
| Midrand | Gauteng | `/shadeport-midrand` |
| Randburg | Gauteng | `/shadeport-randburg` |
| Roodepoort | Gauteng | `/shadeport-roodepoort` |
| Vereeniging | Gauteng | `/shadeport-vereeniging` |
| Polokwane | Limpopo | `/shadeport-polokwane` |
| Tzaneen | Limpopo | `/shadeport-tzaneen` |
| Mokopane | Limpopo | `/shadeport-mokopane` |
| Thohoyandou | Limpopo | `/shadeport-thohoyandou` |
| Lephalale | Limpopo | `/shadeport-lephalale` |
| Bela-Bela | Limpopo | `/shadeport-bela-bela` |

Every route follows a single `shadeport-<city>` slug pattern, regardless of province. The `AreaSchema` component carries the province separately via a `region` prop (`region="Limpopo"` on the six Limpopo pages, defaults to `"Gauteng"` elsewhere), so the URL structure never has to encode which province a town is in.

**Known follow-up:** `app/page.tsx` (homepage) controls which area names render as clickable links versus plain text via a `builtAreaSlugs` set. That set was left empty while the pages were still being built and has not yet been updated to include all 14 live slugs, confirm it's synced before treating the homepage's area links as fully wired.

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
pnpm build
pnpm start
```

---

## SEO Architecture

### Metadata (per page)
- Unique `title` and `description`
- `canonical` URL
- `robots` directives (`index`, `follow`, `max-snippet`, `max-image-preview`)
- `openGraph` with real image URLs, dimensions and alt text
- `twitter:card` with `summary_large_image`
- Geo-targeted `keywords` (Gauteng and Limpopo towns, per service)

### Structured Data (JSON-LD)

| Schema Type | Where it lives | Purpose |
|---|---|---|
| `LocalBusiness` + `WebSite` | Homepage, `organization-schema.tsx` | NAP, service areas (Gauteng + Limpopo as separate `State` entries), offer catalogue |
| `Service` | Every service page | One node per service, linked to `LocalBusiness` via `@id` |
| `LocalBusiness` (region-aware) | Every area page, via `area-schema.tsx` | Localised business data per city, correct province via `region` prop |
| `FAQPage` | Homepage, FAQ page, every service page | Page-specific Q&As eligible for Google rich results |
| `BreadcrumbList` | Every service and area page | Breadcrumb trail for rich results |

### Sitemap
Auto-generated at `/sitemap.xml` via `app/sitemap.ts`:
- 8 main/info pages (home, services, areas, about, contact, faq, privacy-policy, terms)
- 8 service pages
- 14 area pages
- **30 URLs total**

### Robots
`/robots.txt` via `app/robots.ts`:
- Allows all crawlers by default, with explicit Googlebot and Googlebot-Image rules
- Explicitly allows major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and others), so the site can be referenced and cited in AI-generated answers
- Blocks low-value SEO scrapers (AhrefsBot, SemrushBot, MJ12bot, DotBot)
- Disallows `/api/`, `/_next/`, `/admin/`, and query-string URLs
- Points to the sitemap

---

## Internal Linking Architecture

Fourteen near-identical area pages and eight service pages are a well-known SEO trap if they only differ by a swapped name, search engines can quietly demote a whole batch of thin, duplicate-feeling pages instead of ranking them individually. Two things were built specifically to work against that:

1. **Every service page links to all 14 area pages.** The "Where We Work" section on each service page renders real `<Link>` elements to `/shadeport-<city>`, not static text, so the crawl graph treats service and area pages as connected rather than isolated.
2. **Every service page cross-links to 2 to 3 related services** in a dedicated "Also Consider" section, so a visitor (and a crawler) landing on any one service page has a direct path to the others, rather than having to bounce back through `/services` each time.

---

## Design System

| Token | Value |
|---|---|
| Background, brand black | `#0d0705` |
| Dark grey, ink | `#1a1a1a` |
| Gold | `#dcb068` |
| Gold, light | `#f4e78b` |
| Gold, dark (text on light backgrounds) | `#8a6535` |
| Red, CTAs | `#b8161d` |
| Red, light (gradients) | `#fc4d53` |
| Off-white surface | `#f5f4f0` |
| Body font | Geist, system sans-serif fallback |

Gold carries navigation highlights, section labels and primary buttons. Red is reserved for calls to action, matching the same roles those colours play in the AJT Enterprise logo. Sitewide copy avoids em dashes as a house style, commas and periods carry the same breaks instead.

---

## Images

All images are stored in `public/images/` and served via Next.js `<Image>`. Rather than repeating a single hero photo across every page, each of the 8 service pages pairs its own primary product image with a rotated secondary image, so no two pages look identical:

| Page | Primary image | Secondary image |
|---|---|---|
| Shadeport Installation | `shadeport-installation.png` | (hero reused) |
| Cantilever Shadeports | `cantilever-shadeports.png` | `cantilever-shade-port.jpg` |
| Carports | `carports.png` | `car_shadeports.jfif` |
| Carport Installation | `carport-installation.png` | `custom_shadeports.jfif` |
| Parking Bay Shadeports | `parking-bay-shadeports.png` | `why-choose-us.png` |
| Shadeport Repairs | `shadeport-repairs.png` | `shadeport-quote.png` |
| Shadeport Maintenance | `shadeport-maintenance.png` | `hero-shadeport.png` |
| Shadeport Re-Covering | `shadeport-recovering.png` | `shadeport-repairs.png` |

`aj-enterprise-logo.png` is used as a small watermark overlay on hero and secondary images across the site.

> Two source images (`car_shadeports.jfif`, `custom_shadeports.jfif`) are `.jfif` rather than `.jpg`. Next.js generally handles this fine, but if the build pipeline ever rejects them, renaming the files to `.jpg` (same content, new extension) resolves it.

---

## Deployment

The site deploys automatically to **Vercel** on every push to `main`.

Environment variables required: none (no API keys or external services).

After deploying:
1. Submit `https://www.ajtenterprise.co.za/sitemap.xml` to Google Search Console
2. Verify the canonical domain (`www`) in Search Console
3. Check structured data with [Google's Rich Results Test](https://search.google.com/test/rich-results)

---

## Contact

**AJT Enterprise**
Office: 011 568 5348
Mobile: 065 867 7363
Email: Info@ajtenterprise.co.za
Website: www.ajtenterprise.co.za
