<div align="center">

# KIRV Engineering Studio

**Precision software systems for complex problems**

[![TypeScript](https://img.shields.io/badge/TypeScript-95.5%25-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff.svg)](https://vitejs.dev/)

</div>

---

## Overview

KIRV is an engineering studio specializing in building foundational software infrastructure for complex technical challenges. This repository houses the source code for the KIRV corporate website and design system.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Form Handling**: React Hook Form + Zod validation
- **State Management**: TanStack Query

## Design System

KIRV implements a distinctive design system with an architectural, industrial aesthetic:

### Typography
- **Display**: Space Grotesk - Modern geometric sans-serif
- **Technical**: JetBrains Mono - Monospace for code and data

### Color Palette
- **Cream** - Warm neutral base
- **Stone** - Subtle backgrounds
- **Charcoal** - Primary text
- **Graphite** - Accents and borders

### Design Language
- **Border Radius**: 0px - Strict rectangular geometry
- **Grid System**: Precision-aligned layouts
- **Motion**: Purposeful, engineering-grade animations

## Development

### Prerequisites
- Node.js 18+ or Bun runtime
- npm, pnpm, or bun package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build Commands

```bash
# Development build
npm run build:dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Project Structure

```
kirv-studio-build/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Header, Footer, etc.
│   │   ├── sections/    # Page sections (Hero, About, etc.)
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Route pages
│   └── main.tsx         # Application entry point
├── public/              # Static assets
└── vite.config.ts       # Vite configuration
```

## Features

- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Dark Mode** - System-aware theme switching
- **Performance Optimized** - Lazy loading, code splitting, optimized assets
- **Accessibility** - WCAG compliant components
- **SEO Ready** - Meta tags, semantic HTML, sitemap
- **Type Safety** - Full TypeScript coverage

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

## License

Copyright © 2026 KIRV Engineering Studio. All rights reserved.

---

<div align="center">
Built with precision by KIRV Engineering Studio
</div>
