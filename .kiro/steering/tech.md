# Technology Stack

## Framework & Build System
- **Astro 5.11.0** - Static site generator with component islands architecture
- **TypeScript** - Strict configuration extending Astro's strict tsconfig
- **Vite** - Build tool and dev server (integrated with Astro)

## Styling & UI
- **Tailwind CSS 4.1.7** - Utility-first CSS framework with custom theme configuration
- **Custom CSS** - Pixel art animations and retro gaming effects
- **Dark/Light Theme** - System preference aware with localStorage persistence

## Development Tools
- **pnpm** - Package manager (lockfile present)
- **Sharp** - Image optimization
- **ESM** - ES modules throughout (type: "module" in package.json)

## Common Commands
```bash
# Development server
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Run Astro CLI commands
pnpm astro [command]
```

## Deployment
- Static site deployment to draward.dev
- CNAME file configured for custom domain