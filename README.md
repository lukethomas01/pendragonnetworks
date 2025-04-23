# Pendragon Networks Website

A Next.js 15 website for Pendragon Networks, a technical services provider based in South Wales.

## Features

- **Modern Next.js 15 with App Router**
- **React Server Components**
- **Tailwind CSS for styling**
- **Fully responsive design**
- **Static Site Generation with ISR**
- **Dynamic routes for services and locations**
- **SEO optimized**
- **Automated sitemap generation**
- **Contact form with email functionality**

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
/                   # Root directory
├── app/            # App Router directory
│   ├── page.tsx    # Homepage
│   ├── services/   # Services pages
│   │   ├── page.tsx                # Services overview
│   │   ├── [slug]/                 # Dynamic service pages
│   │   │   ├── page.tsx            # Individual service page
│   │   │   └── [location]/         # Location-specific service pages
│   │   │       └── page.tsx        # Service in location page
│   ├── contact/    # Contact page and form
│   ├── sitemap.ts  # Dynamic sitemap generation
│   └── ...         # Other pages
├── components/     # Shared React components
├── lib/            # Utility functions and data
├── public/         # Static assets
└── ...
```

## Contact Form

The website includes a fully functional contact form with:

- Client-side validation using React
- Server-side validation using Zod
- Email functionality using Resend API
- Confirmation emails for customers
- Notification emails for administrators

### Email Configuration

Emails are sent using the Resend API. The API key is configured in the `.env` file:

```
RESEND_API_KEY=your_resend_api_key
```

For production deployment on Vercel, add the RESEND_API_KEY to your environment variables.

## SEO

The website is optimized for search engines with:

- Dynamic metadata for all pages
- OpenGraph data for social sharing
- JSON-LD structured data using Schema.org
- Comprehensive sitemap generation
- SEO-friendly URLs

### Sitemap

The sitemap is automatically generated based on the services and locations data. When adding new services or locations, the sitemap will update automatically.

## Deployment

The website is configured for deployment on Vercel with no special configuration needed.

## License

Copyright © 2025 Pendragon Networks. All rights reserved.
