import { MetadataRoute } from 'next';
import { services } from '@/lib/data';

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

function getBaseURL() {
  // Use the consistent domain
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://pendragonnetworks.com';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseURL();
  const currentDate = new Date().toISOString();

  // Static routes
  const staticRoutes: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  // Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Location routes based on services
  const locations = [
    'cardiff',
    'swansea',
    'bridgend',
    'port-talbot',
    'llanelli',
    'merthyr',
    'aberdare',
    'carmarthen'
  ];

  const serviceLocationRoutes = services.flatMap(service => 
    locations.map(location => ({
      url: `${baseUrl}/services/${service.id}/${location}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...serviceLocationRoutes];
}
