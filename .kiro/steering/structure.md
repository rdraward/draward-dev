# Project Structure

## Root Level
- `astro.config.mjs` - Astro configuration with Tailwind integration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration extending Astro strict
- `public/` - Static assets (favicon, CNAME)

## Source Organization (`src/`)

### Pages (`src/pages/`)
- `index.astro` - Homepage with About component
- `stuff.astro` - Additional content page
- Follow Astro file-based routing conventions

### Components (`src/components/`)
- **Reusable UI components** - Each component in separate .astro file
- `ThemeToggle.astro` - Dark/light theme switcher with accessibility
- `Timeline.astro` & `TimelineDot.astro` - Professional timeline components
- `SocialLink.astro` - Social media link component
- `About.astro` - Main about section
- `JobCard.astro` - Professional experience cards

### Layouts (`src/layouts/`)
- `Layout.astro` - Base layout with theme initialization and global styles
- Contains inline theme script to prevent FOUC

### Styles (`src/styles/`)
- `global.css` - Global styles with Tailwind imports and custom animations
- `pixel-corners.css` - Specialized styling utilities
- Custom CSS variables for theming and pixel art

### Scripts (`src/scripts/`)
- `theme.ts` - Theme management utilities
- `theme-init.js` - Theme initialization logic
- Client-side JavaScript for interactive features

### Content (`src/content/`)
- `links.json` - Structured content data
- `content.config.ts` - Content collection configuration

### Assets (`src/assets/`)
- `icons/` - SVG icons for social links and navigation
- `logos/` - Company/project logos for timeline

## Conventions
- Use `.astro` extension for components and pages
- TypeScript interfaces defined at component level
- Tailwind classes for styling with custom CSS for animations
- Accessibility attributes (aria-label, title) on interactive elements