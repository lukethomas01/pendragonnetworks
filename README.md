# Pendragon Networks Website

A modern, responsive website for Pendragon Networks, a technical services provider in South Wales specializing in network engineering, rack & stack services, and IT infrastructure solutions.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Rendering Strategy**: Static Site Generation with Incremental Static Regeneration (ISR)
- **Deployment Target**: Vercel-optimized

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout with metadata
│   ├── services/           # Services routes
│   │   ├── page.tsx        # Services overview page
│   │   ├── [slug]/         # Individual service pages
│   │   └── [service]/[location]/ # Location-specific service pages for SEO
│   └── contact/            # Contact page
├── components/             # Reusable UI components
│   ├── Header.tsx          # Site navigation
│   └── Footer.tsx          # Site footer
├── lib/                    # Shared utilities and data
│   └── data.ts             # Services and locations data
├── public/                 # Static assets
│   └── images/             # Image files
└── tailwind.config.js      # Tailwind configuration
```

## Pages

1. **Homepage** (`/`): Company overview, services highlight, featured projects, and call-to-action
2. **Services Overview** (`/services`): Grid layout of all available services
3. **Service Details** (`/services/[slug]`): Detailed page for each service
4. **Location-Based SEO Pages** (`/services/[service]/[location]`): Service pages targeted to specific locations
5. **Contact Page** (`/contact`): Contact form, map, and company information

## Features

- **Responsive Design**: Mobile-first approach ensures optimal viewing on all devices
- **Modern UI**: Clean, technical aesthetic with the brand color scheme
- **SEO Optimization**: Metadata, OpenGraph tags, and location-specific pages
- **Performance**: Optimized for Core Web Vitals
- **Accessibility**: Semantic HTML and proper ARIA attributes

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/lukethomas01/pendragonnetworks.git
cd pendragonnetworks

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at http://localhost:3000

### Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## Deployment

This project is optimized for deployment on Vercel without any special configuration.

## Design Considerations

- **Color Palette**:
  - Dark slate (`#1a1a1a`): Primary background color
  - Dragon red (`#e60000`): Accent color for buttons and highlights
  - White (`#ffffff`): Text and contrast elements

- **Typography**: 
  - Geist Sans for body text and headings
  - Geist Mono for code blocks and technical elements

- **Imagery**:
  - Modern technical imagery that reflects network engineering and IT infrastructure
  - Placeholder divs are included where actual images will be added later

## Future Enhancements

- Add authentication for client area
- Add case studies for completed projects
- Expand location-specific service pages
- Enhance schema.org structured data
- Integrate with a CMS for easier content management
