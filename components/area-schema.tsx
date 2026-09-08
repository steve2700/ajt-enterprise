const BASE_URL = 'https://www.ajtenterprise.co.za'
const BUSINESS_ID = `${BASE_URL}/#business`

interface AreaSchemaProps {
  areaName: string
  url: string
  /** Optional: list of specific suburbs/neighbourhoods within the area */
  suburbs?: string[]
  /** Optional: override the province — AJT Enterprise covers both Gauteng and Limpopo */
  region?: 'Gauteng' | 'Limpopo'
}

export default function AreaSchema({ areaName, url, suburbs, region = 'Gauteng' }: AreaSchemaProps) {
  if (!areaName?.trim() || !url?.trim()) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: 'AJT Enterprise',
    description: `Shadeport and carport installation, repairs and maintenance serving ${areaName} and surrounding areas.`,
    url: BASE_URL,
    telephone: '+27658677363',
    email: 'Info@ajtenterprise.co.za',
    priceRange: '$$',
    currenciesAccepted: 'ZAR',
    paymentAccepted: 'Cash, EFT',
    image: `${BASE_URL}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: areaName,
      addressRegion: region,
      addressCountry: 'ZA',
    },
    areaServed: [
      {
        '@type': 'City',
        name: areaName,
        containedInPlace: {
          '@type': 'State',
          name: region,
          containedInPlace: {
            '@type': 'Country',
            name: 'South Africa',
            sameAs: 'https://www.wikidata.org/wiki/Q258',
          },
        },
      },
      // Spread in any suburbs passed as props
      ...(suburbs ?? []).map((suburb) => ({
        '@type': 'Place',
        name: suburb,
        containedInPlace: {
          '@type': 'City',
          name: areaName,
        },
      })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Shadeport & Carport Services in ${areaName}`,
      itemListElement: [
        'Shadeport Installation',
        'Cantilever Shadeports',
        'Carports',
        'Carport Installation',
        'Parking Bay Shadeports',
        'Shadeport Repairs',
        'Shadeport Maintenance',
        'Shadeport Re-Covering',
      ].map((service, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: service,
          provider: { '@id': BUSINESS_ID },
        },
      })),
    },
    sameAs: [`${BASE_URL}${url}`],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
