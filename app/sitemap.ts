import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ajtenterprise.co.za'
  const currentDate = new Date().toISOString()

  const mainPages = [
    { url: baseUrl,                     priority: 1.0, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/services`,       priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/areas`,          priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/about`,          priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`,        priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/faq`,            priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly'  as const },
    { url: `${baseUrl}/terms`,          priority: 0.3, changeFrequency: 'yearly'  as const },
  ]

  const servicePages = [
    'shadeport-installation',
    'cantilever-shadeports',
    'carports',
    'carport-installation',
    'parking-bay-shadeports',
    'shadeport-repairs',
    'shadeport-maintenance',
    'shadeport-recovering',
  ].map((service) => ({
    url: `${baseUrl}/${service}`,
    priority: 0.85,
    changeFrequency: 'weekly' as const,
  }))

  // All 14 area pages, live across Gauteng and Limpopo. Add a new slug here
  // the moment its page goes live, nothing else needs to change.
  const areaPages = [
    // Gauteng
    'johannesburg',
    'pretoria',
    'sandton',
    'centurion',
    'midrand',
    'randburg',
    'roodepoort',
    'vereeniging',
    // Limpopo
    'polokwane',
    'tzaneen',
    'mokopane',
    'thohoyandou',
    'lephalale',
    'bela-bela',
  ].map((area) => ({
    url: `${baseUrl}/shadeport-${area}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }))

  return [...mainPages, ...servicePages, ...areaPages].map((page) => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
