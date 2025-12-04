# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Choccy Box is a marketing website for an intelligent workout management system designed for gym owners and trainers. The site is a single-page application built with React, Vite, and Tailwind CSS. This is a code bundle originally exported from a Figma design (https://www.figma.com/design/YXPZcpjQBcZChQfq61FEJs/Choccy-Box).

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start development server (runs on port 3000, opens browser automatically)
- `npm run build` - Build for production (output to `build/` directory)

## Architecture

### Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6 with SWC for fast compilation
- **Styling**: Tailwind CSS v4 (using CSS custom properties and utility classes)
- **UI Components**: Radix UI primitives (accordion, dialog, dropdown, etc.)
- **Icons**: lucide-react

### Application Structure

The site is a single-page landing page composed of these main sections (in order):
1. **Header** - Fixed navigation header
2. **Hero** - Main banner with logo and "Coming Soon" message
3. **Features** - Grid of 4 feature cards (Smart Programming, Station-Based Display, Automated Timers, Flexible Configuration)
4. **HowItWorks** - Explains the workout management system workflow
5. **CTA** - Call-to-action section

### Key Configuration

**Vite Aliases**: The project uses extensive module aliases defined in `vite.config.ts`:
- `@/*` maps to `./src/*`
- Package version aliases (e.g., `vaul@1.1.2` → `vaul`)
- Special Figma asset alias for images

**Port**: Development server runs on port 3000 by default

**Build Target**: ESNext (modern JavaScript)

### Component Organization

```
src/
├── components/
│   ├── Header.tsx, Hero.tsx, Features.tsx, HowItWorks.tsx, CTA.tsx
│   ├── figma/               # Figma-exported components
│   │   └── ImageWithFallback.tsx
│   └── ui/                  # shadcn/ui components (Radix UI wrappers)
│       └── [50+ UI primitives]
├── assets/                  # Static images
├── index.css                # Tailwind CSS with custom theme variables
└── App.tsx                  # Main app component that composes all sections
```

### Styling Approach

- Uses Tailwind CSS v4 with CSS custom properties defined in `index.css`
- Custom color palette: purple-600 (primary), orange-500 (accent), gray shades
- Custom spacing system based on `--spacing: .25rem` (multiplied by scale factors)
- Responsive design with breakpoints: 40rem (sm), 64rem (lg)
- Dark mode support via CSS variables (`.dark` class)

### Import Patterns

When importing from the UI library, use the versioned aliases or direct paths:
```typescript
// Figma assets
import logo from "figma:asset/[hash].png"

// UI components
import { Button } from "@/components/ui/button"

// Icons
import { Dumbbell, Tv } from "lucide-react"
```

## Build Optimizations

This project is optimized for production deployment with the following configurations:

### Vite Build Configuration (vite.config.ts:53-71)

**Code Splitting**: The build automatically splits code into optimized chunks:
- `react-vendor.js` - React and ReactDOM (139KB / 44.94KB gzipped)
- `ui-vendor.js` - Radix UI components (0.74KB / 0.47KB gzipped)
- `index.js` - Application code (9.30KB / 3.36KB gzipped)

**Minification**: Uses Terser with aggressive compression:
- Removes all `console.*` statements in production
- Removes debugger statements
- Optimizes for size and performance

### Performance Optimizations

**Image Loading** (src/components/Hero.tsx:9-17):
- Explicit width/height attributes prevent layout shift
- `loading="eager"` and `fetchpriority="high"` for above-the-fold logo
- Hero logo is 459KB PNG (consider WebP conversion if adding more images)

**SEO & Meta Tags** (index.html:7-19):
- Complete meta description for search engines
- Open Graph tags for social media sharing (Facebook, LinkedIn)
- Twitter Card tags for Twitter previews
- Theme color for mobile browser chrome

## Deployment

### Netlify Configuration (netlify.toml)

The site is configured for Netlify with:
- Build command: `npm run build`
- Publish directory: `build/`
- Node version: 20
- SPA redirect rules (/* → /index.html)
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Asset caching: 1 year with immutable flag for /assets/*

### Deployment Options

**Option 1 - Netlify UI**: Push to GitHub/GitLab/Bitbucket, then connect via Netlify dashboard

**Option 2 - Netlify CLI**:
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## Security & Public Repository

This is a public repository. The following protections are in place:

**.gitignore**: Comprehensive exclusions including:
- Environment variables (`.env*`)
- Sensitive files (`.pem`, `.key`, `.cert`, certificates)
- Build artifacts and dependencies
- IDE and OS-specific files

**No Secrets**: This is a static marketing site with no API keys, tokens, or backend services. All code and assets are safe for public access.

## Guidelines

The `src/guidelines/Guidelines.md` file is a template placeholder - it doesn't contain active project guidelines.
