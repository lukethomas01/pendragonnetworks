'use client';

import { ReactNode } from 'react';

type SchemaProps = {
  type: 'LocalBusiness' | 'Organization' | 'Service' | 'FAQPage';
  data: any;
};

const SchemaMarkup = ({ type, data }: SchemaProps) => {
  let schema;

  switch (type) {
    case 'LocalBusiness':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: data.name || 'Pendragon Networks',
        description: data.description || 'Technical services provider based in South Wales specializing in network engineering, structured cabling, and IT infrastructure solutions.',
        url: data.url || 'https://pendragonnetworks.com',
        logo: data.logo || 'https://pendragonnetworks.com/pendragon-dragon-network-icon-shield-logo.png',
        image: data.image,
        telephone: data.telephone || '+44 7916 214 843',
        email: data.email || 'hello@pendragonnetworks.co.uk',
        priceRange: data.priceRange || '££',
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.address?.streetAddress || 'Unit 8, Bridgend Business Park',
          addressLocality: data.address?.addressLocality || 'Bridgend',
          addressRegion: data.address?.addressRegion || 'South Wales',
          postalCode: data.address?.postalCode || 'CF31 3SH',
          addressCountry: data.address?.addressCountry || 'UK'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: data.geo?.latitude || '51.504',
          longitude: data.geo?.longitude || '-3.576'
        },
        areaServed: data.areaServed || [
          'Cardiff', 'Swansea', 'Bridgend', 'Port Talbot', 
          'Llanelli', 'Merthyr Tydfil', 'Aberdare', 'Carmarthen'
        ],
        openingHoursSpecification: data.openingHours || [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:30',
            closes: '17:30'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '09:00',
            closes: '16:00',
            description: 'By appointment only'
          }
        ]
      };
      break;
      
    case 'Service':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Pendragon Networks',
          url: 'https://pendragonnetworks.com'
        },
        areaServed: data.areaServed || [
          'Cardiff', 'Swansea', 'Bridgend', 'Port Talbot', 
          'Llanelli', 'Merthyr Tydfil', 'Aberdare', 'Carmarthen'
        ],
        serviceType: data.serviceType,
        offers: data.offers ? {
          '@type': 'Offer',
          ...data.offers
        } : undefined
      };
      break;
      
    case 'FAQPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions.map((question: any) => ({
          '@type': 'Question',
          name: question.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: question.answer
          }
        }))
      };
      break;
      
    default:
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name || 'Pendragon Networks',
        description: data.description || 'Technical services provider based in South Wales specializing in network engineering, structured cabling, and IT infrastructure solutions.',
        url: data.url || 'https://pendragonnetworks.com',
        logo: data.logo || 'https://pendragonnetworks.com/pendragon-dragon-network-icon-shield-logo.png',
        sameAs: [
          'https://www.linkedin.com/company/pendragon-networks/',
          'https://www.facebook.com/pendragonnetworks/'
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Unit 8, Bridgend Business Park',
          addressLocality: 'Bridgend',
          addressRegion: 'South Wales',
          postalCode: 'CF31 3SH',
          addressCountry: 'UK'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+44 7916 214 843',
          contactType: 'customer service',
          email: 'hello@pendragonnetworks.co.uk',
          areaServed: 'South Wales'
        }
      };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
