# BeyondAlpha Monorepo - Claude Code Documentation

## Project Overview

This is a monorepo for the Beyond Alpha ecosystem, containing multiple applications and shared packages for the financial services platform.

### Project Structure

```
beyondalpha/web/
├── apps/
│   ├── bav/              # Beyond Alpha Ventures (VC Fund & Marketing)
│   └── begm/             # Beyond Equity Global Marketplace (Trading Platform)
├── packages/
│   ├── analytics/        # Unified analytics tracking (GA, FB, Twitter/X)
│   ├── types/            # Shared TypeScript type definitions
│   ├── portfolio/        # Shared portfolio data and utilities
│   └── ui/               # Shared UI components (built on @hanzo/ui)
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # PNPM workspace configuration
└── package.json          # Root package.json with workspace scripts
```

## Applications

### apps/bav - Beyond Alpha Ventures

**Purpose**: Marketing website and VC fund information portal

**Port**: 3000 (default)

**Tech Stack**:
- Next.js 15.5.6 with App Router
- React 19.2.0
- Tailwind CSS 4.1.14
- Framer Motion 12.23.24
- Static export for GitHub Pages deployment

**Key Features**:
- Investment portfolio showcase
- Fund performance metrics
- Team profiles
- News and updates
- Institutional services information

### apps/begm - Beyond Equity Global Marketplace

**Purpose**: Trading platform for stocks, crypto, options, and commodities

**Port**: 3001

**Tech Stack**:
- Next.js 15.5.6 with App Router
- React 19.2.0
- Tailwind CSS 4.1.14
- Framer Motion 12.23.24
- Recharts 2.15.0 (charts)
- Zustand 5.0.2 (state management)
- Alpaca API integration

**Key Features**:
- $0 commission trading
- 24/5 market access
- Multi-asset trading (stocks, crypto, options, commodities)
- Real-time portfolio tracking
- Educational resources
- BTC/ETH leap call options promotions
- User authentication (login/signup pages with analytics tracking)
- Social login integration (Google, Apple)

## Shared Packages

### packages/analytics

Unified analytics tracking across all Beyond Alpha applications.

**Supported Platforms**:
- Google Analytics 4
- Facebook Pixel
- Twitter/X Pixel

**Key Features**:
- Automatic page view tracking
- Custom event tracking
- Conversion tracking (signup, login, trade, etc.)
- Privacy-friendly (IP anonymization)
- Production-only tracking
- Unified API for all platforms

**Usage**:
```typescript
import { useAnalytics } from '@beyondalpha/analytics/providers'

const { trackEvent, trackConversion } = useAnalytics()

// Track custom event
trackEvent({
  category: 'Trading',
  action: 'Place Order',
  label: 'BTC',
})

// Track conversion
trackConversion({
  type: 'signup',
  metadata: { source: 'landing-page' },
})
```

### packages/types

Shared TypeScript type definitions for the entire ecosystem.

**Key Types**:
- Portfolio types: `PortfolioCompany`, `PortfolioMetrics`, `InvestmentSector`
- Trading types: `Asset`, `Position`, `Order`, `Trade`, `OptionContract`
- User types: `User`, `Account`, `UserPreferences`

**Usage**:
```typescript
import type { PortfolioCompany, Asset, User } from '@beyondalpha/types'
```

### packages/portfolio

Centralized portfolio data and utilities shared across all apps.

**Key Exports**:
- `portfolioCompanies`: Array of all portfolio companies
- `getPortfolioCompany(id)`: Get company by ID
- `getCompaniesBySector(sector)`: Filter by sector
- `getPortfolioSummary()`: Get aggregate statistics

**Usage**:
```typescript
import { 
  portfolioCompanies, 
  getPortfolioCompany,
  getPortfolioSummary 
} from '@beyondalpha/portfolio'
```

### packages/ui

Shared UI components built on top of @hanzo/ui.

**Key Components**:
- `Header`: Responsive header with navigation (desktop + mobile)
- `Footer`: Footer with links and branding
- `Logo`: Customizable brand logo

**Site Definitions**:
- `bavSiteDef`: Beyond Alpha Ventures branding
- `begmSiteDef`: BEGM trading platform branding

**Usage**:
```typescript
import { Header, Footer, Logo } from '@beyondalpha/ui'
import { bavSiteDef, begmSiteDef } from '@beyondalpha/ui/site-def'

// Use in app
<Header siteDef={bavSiteDef} />
```

## Development Commands

All commands should be run from the monorepo root (`/Users/z/work/beyondalpha/web/`).

### Install Dependencies

```bash
pnpm install
```

### Development Servers

```bash
# Run all apps in development mode
pnpm dev

# Run specific app
pnpm --filter @beyondalpha/bav dev     # BAV on port 3000
pnpm --filter @beyondalpha/begm dev    # BEGM on port 3001

# Or use turbo directly
turbo run dev
turbo run dev --filter @beyondalpha/bav
```

### Building

```bash
# Build all apps and packages
pnpm build

# Build specific app or package
pnpm --filter @beyondalpha/types build
pnpm --filter @beyondalpha/portfolio build
pnpm --filter @beyondalpha/bav build
pnpm --filter @beyondalpha/begm build

# Or use turbo
turbo run build
turbo run build --filter @beyondalpha/bav
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests for specific app
pnpm --filter @beyondalpha/bav test
```

### Linting

```bash
# Lint all apps and packages
pnpm lint

# Lint specific app
pnpm --filter @beyondalpha/bav lint
```

## Technology Stack

### Core Framework
- **Next.js**: 15.5.6 (latest stable)
- **React**: 19.2.0 (latest)
- **TypeScript**: 5.9.3
- **Node.js**: >=18.0.0
- **Package Manager**: pnpm 9.15.4

### UI & Styling
- **Tailwind CSS**: 4.1.14 (latest)
- **@hanzo/ui**: 5.1.1 (base component library)
- **Framer Motion**: 12.23.24 (animations)
- **Lucide React**: 0.456.0 (icons)

### State & Data
- **Zustand**: 5.0.2 (BEGM state management)
- **Recharts**: 2.15.0 (data visualization)

### Build & Monorepo
- **Turborepo**: 2.4.2 (monorepo build system)
- **tsup**: 8.3.5 (TypeScript package builder)

### Testing
- **Playwright**: 1.56.1 (E2E testing)

## Architecture Notes

### Next.js 15 Async Params Pattern

**CRITICAL**: Next.js 15 introduces async params. All dynamic routes must use `await props.params`:

```typescript
// CORRECT - Next.js 15 pattern
export default async function Page(props: { 
  params: Promise<{ slug: string }> 
}) {
  const params = await props.params
  const slug = params.slug
  // ...
}

// INCORRECT - Old pattern (will break)
export default function Page({ params }: { 
  params: { slug: string } 
}) {
  const slug = params.slug // ERROR!
}
```

### Monorepo Dependencies

**Workspace Dependencies**: Use `workspace:*` for internal package references:

```json
{
  "dependencies": {
    "@beyondalpha/types": "workspace:*",
    "@beyondalpha/portfolio": "workspace:*",
    "@beyondalpha/ui": "workspace:*"
  }
}
```

### Package Exports

Packages use modern ES module exports with multiple entry points:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./data": {
      "types": "./dist/data.d.ts",
      "import": "./dist/data.mjs",
      "require": "./dist/data.js"
    }
  }
}
```

### Tailwind CSS 4.x Configuration

This project uses Tailwind CSS 4.x with the new `@import` directive:

```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-primary: #0A0A0A;
  --color-gold: #D4AF37;
}
```

### @hanzo/ui Integration

All UI components are built on @hanzo/ui (v5.1.1), which provides:
- Radix UI primitives
- shadcn/ui component patterns
- Multi-framework support (React, Vue, Svelte)
- Comprehensive component library

**Note**: We're using React 19 and Next.js 15, which are newer than @hanzo/ui's peer dependencies (React 18, Next.js 14). This causes peer dependency warnings but works fine in practice.

## Design System

### Brand Colors

**BAV (Beyond Alpha Ventures)**:
- Primary: `#0A0A0A` (near black)
- Secondary: `#141414`
- Gold: `#D4AF37`
- Gold Light: `#F4E4BC`

**BEGM (Trading Platform)**:
- Primary: `#0A0A0A`
- Success: `#10B981` (green)
- Danger: `#EF4444` (red)
- Warning: `#F59E0B` (amber)
- Info: `#3B82F6` (blue)

### Custom CSS Classes

Both apps include a `glass-effect` utility class:

```css
.glass-effect {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Common Development Tasks

### Adding a New Shared Component

1. Create component in `packages/ui/components/`
2. Export from `packages/ui/components/index.ts`
3. Build the package: `pnpm --filter @beyondalpha/ui build`
4. Use in apps: `import { Component } from '@beyondalpha/ui'`

### Adding Portfolio Data

1. Edit `packages/portfolio/src/data.ts`
2. Add new company to `portfolioCompanies` array
3. Build: `pnpm --filter @beyondalpha/portfolio build`
4. Data is automatically available in all apps

### Creating a New Type

1. Add type to appropriate file in `packages/types/src/`
2. Export from `packages/types/src/index.ts`
3. Build: `pnpm --filter @beyondalpha/types build`
4. Import: `import type { YourType } from '@beyondalpha/types'`

### Running Tests

```bash
# Run Playwright tests for BAV
cd apps/bav
pnpm test

# Run with UI
pnpm test:e2e:ui

# Debug mode
pnpm test:e2e:debug
```

## Environment Variables

Create a `.env.local` file in the root of the monorepo with the following variables:

```env
# Analytics (shared across both apps)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
NEXT_PUBLIC_TWITTER_PIXEL_ID=o1234

# Alpaca API (BEGM only)
ALPACA_API_KEY=your_api_key
ALPACA_API_SECRET=your_api_secret
ALPACA_API_URL=https://paper-api.alpaca.markets
```

**Notes**:
- Analytics IDs are prefixed with `NEXT_PUBLIC_` to make them available in the browser
- Analytics tracking is only enabled in production (`NODE_ENV=production`)
- All analytics providers include IP anonymization for privacy
- BAV requires no environment variables for basic operation (static site)
- BEGM requires Alpaca API credentials for trading functionality

See `.env.example` for a template.

## Deployment

### BAV Deployment

BAV is configured for static export and deploys to GitHub Pages:

```bash
cd apps/bav
pnpm build        # Generates static files
pnpm export       # Exports to 'out' directory
```

The exported files can be served from any static hosting provider.

### BEGM Deployment

BEGM can be deployed as:
- Vercel (recommended for Next.js)
- Self-hosted with Node.js
- Docker container

## Troubleshooting

### Peer Dependency Warnings

If you see warnings about React 19/Next.js 15 vs React 18/Next.js 14:
- These are expected and safe to ignore
- @hanzo/ui specifies older versions but works with newer ones
- No action needed unless you encounter actual runtime errors

### Build Errors in Shared Packages

If a package fails to build:
```bash
# Clean and rebuild
pnpm --filter @beyondalpha/types clean
pnpm --filter @beyondalpha/types build
```

### Turbo Cache Issues

If builds seem stuck or outdated:
```bash
# Clear Turbo cache
turbo run build --force

# Or clean everything
pnpm clean
pnpm install
pnpm build
```

## Additional Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [PNPM Workspaces](https://pnpm.io/workspaces)
- [@hanzo/ui GitHub](https://github.com/hanzoai/react-sdk)
- [Tailwind CSS 4.0](https://tailwindcss.com/docs)
- [Alpaca API Docs](https://alpaca.markets/docs/)

---

*Last updated: January 2025*
*For questions or updates, please update this file accordingly.*
