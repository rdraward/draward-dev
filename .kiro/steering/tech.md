# Tech Stack

## Framework & Build System
- **Astro 5.11.0** - Static site generator with component-based architecture
- **Node.js** with ES modules (`"type": "module"`)
- **TypeScript** support enabled

## Styling
- **Tailwind CSS 4.1.7** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite plugin integration
- Custom CSS files for specialized styling (pixel-corners, global styles)

## Content Management
- **Astro Content Collections** - Type-safe content management
- **Zod schemas** for content validation
- JSON-based content storage for links/articles

## Image Processing
- **Sharp** - High-performance image processing

## Common Commands
```bash
# Development server
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Run Astro CLI
pnpm astro
```

## Deployment
- Site URL: https://draward.dev
- Static site deployment (configured in astro.config.mjs)