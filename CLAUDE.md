# BeyondAlpha - Claude Code Documentation

## Project Overview

This is the Beyond Alpha Ventures website and marketing platform.

### Project Structure

```
beyondalpha/web/
├── apps/
│   └── bav/              # Beyond Alpha Ventures (VC Fund & Marketing)
├── packages/
│   └── analytics/        # Unified analytics tracking (GA, FB, Twitter/X)
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # PNPM workspace configuration
└── package.json          # Root package.json with workspace scripts
```

## Application

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
- Investment portfolio showcase (5 sectors: AI, Blockchain, Quantum Computing, Robotics, Longevity)
- Fund performance metrics
- Team profiles
- News and updates
- Institutional services information

## Shared Package

### packages/analytics

Unified analytics tracking for Beyond Alpha applications.

**Supported Platforms**:
- Google Analytics 4
- Facebook Pixel
- Twitter/X Pixel

**Key Features**:
- Automatic page view tracking
- Custom event tracking
- Conversion tracking (signup, login, etc.)
- Privacy-friendly (IP anonymization)
- Production-only tracking

**Usage**:
```typescript
import { useAnalytics } from '@beyondalpha/analytics/providers'

const { trackEvent, trackConversion } = useAnalytics()

trackEvent({
  category: 'Engagement',
  action: 'View Portfolio',
})
```

## Development Commands

### Install Dependencies

```bash
pnpm install
```

### Development Server

```bash
# Run all apps
pnpm dev

# Run specific app
pnpm --filter @beyondalpha/bav dev     # BAV on port 3000
```

### Building

```bash
# Build all
pnpm build

# Build specific app or package
pnpm --filter @beyondalpha/analytics build
pnpm --filter @beyondalpha/bav build
```

### Export Static Site

```bash
# Export BAV to static files
pnpm --filter @beyondalpha/bav export
# Output in apps/bav/out/
```

## Technology Stack

### Core Framework
- **Next.js**: 15.5.6
- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Package Manager**: pnpm 9.15.4

### UI & Styling
- **Tailwind CSS**: 4.1.14
- **Framer Motion**: 12.23.24

### Build & Monorepo
- **Turborepo**: 2.4.2
- **tsup**: 8.3.5

## Deployment

BAV is configured for static export and deploys to GitHub Pages:

```bash
cd apps/bav
pnpm build
pnpm export
# Files in 'out' directory ready for deployment
```

## Environment Variables

Create a `.env.local` file in the root with:

```env
# Analytics (optional, only for production)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
NEXT_PUBLIC_TWITTER_PIXEL_ID=o1234
```

Analytics tracking is only enabled in production (`NODE_ENV=production`).

---

*Last updated: January 2025*
