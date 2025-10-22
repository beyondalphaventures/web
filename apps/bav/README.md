# Beyond Alpha Ventures (BAV)

Marketing website and VC fund information portal for Beyond Alpha Ventures.

## Overview

This application serves as the public-facing website for Beyond Alpha Ventures, showcasing:
- Investment portfolio and track record
- Fund performance metrics
- Team information
- News and updates
- Contact and investor relations

## Technology Stack

- **Framework**: Next.js 15.5.6 with App Router
- **UI**: React 19.2.0, Tailwind CSS 4.1.14
- **Animations**: Framer Motion 12.23.24
- **Testing**: Playwright 1.56.1
- **Deployment**: Static export to GitHub Pages

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test
```

## Key Features

- Static site generation for optimal performance
- Responsive design with mobile-first approach
- Dark theme with gold accents (#D4AF37)
- Portfolio data integration from shared packages
- News and updates section
- Team member profiles

## Deployment

This app is deployed as a static site to GitHub Pages. The build process generates static HTML/CSS/JS files that can be served from any static hosting provider.

```bash
# Export static site
pnpm export
```
