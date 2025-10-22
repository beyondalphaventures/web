# Beyond Alpha Ventures

Venture capital fund website and marketing platform.

## Project Structure

```
beyondalpha/
├── apps/
│   └── bav/              # Beyond Alpha Ventures website
└── packages/
    └── analytics/        # Analytics tracking (GA, FB, Twitter/X)
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Export static site
pnpm export
```

## Technology Stack

- Next.js 15.5.6 with App Router
- React 19.2.0
- Tailwind CSS 4.1.14
- Framer Motion for animations
- Static export for GitHub Pages deployment

## Beyond Alpha Ventures (BAV)

**Purpose**: Marketing website and VC fund information portal

**Port**: 3000 (default)

**Key Features**:
- Investment portfolio showcase (5 sectors: AI, Blockchain, Quantum, Robotics, Longevity)
- Fund performance metrics
- Team profiles
- News and updates
- Institutional services information

## Development

The BAV app is a static Next.js site optimized for GitHub Pages deployment.

```bash
cd apps/bav
pnpm dev     # Development server
pnpm build   # Production build
pnpm export  # Static export to 'out' directory
```

## Analytics

Unified analytics tracking is provided by the `@beyondalpha/analytics` package:

- Google Analytics 4
- Facebook Pixel
- Twitter/X Pixel

Analytics is only enabled in production and includes IP anonymization for privacy.

## Deployment

BAV is configured for static export and deploys to GitHub Pages. The site is exported to the `out` directory and can be served from any static hosting provider.

---

© 2025 Beyond Alpha Ventures. All rights reserved.
