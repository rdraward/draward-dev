# Project Structure

## Root Level
- `astro.config.mjs` - Astro configuration with Tailwind integration
- `package.json` - Dependencies and scripts (uses pnpm)
- `tsconfig.json` - TypeScript configuration

## Source Directory (`src/`)

### Pages (`src/pages/`)
- `index.astro` - Homepage with About component
- `stuff.astro` - Content/links page
- Follow Astro file-based routing conventions

### Components (`src/components/`)
- `About.astro` - Main profile/hero section
- `Timeline.astro` - Work experience timeline
- `JobCard.astro` - Individual job entries
- `SocialLink.astro` - Reusable social media links
- `Content.astro` - Content display component
- `TimelineDot.astro` - Timeline visual elements

### Layouts (`src/layouts/`)
- Base layout components for page structure

### Content (`src/content/`)
- `links.json` - Article/content data with schema validation
- `content.config.ts` - Content collection definitions with Zod schemas

### Assets (`src/assets/`)
- `icons/` - SVG icons for social media and navigation
- `logos/` - Company/brand logos for timeline
- Organized by type for easy maintenance

### Styles (`src/styles/`)
- `global.css` - Global styles and CSS variables
- `pixel-corners.css` - Retro gaming aesthetic styles
- Complement Tailwind with custom styling

## Content Schema
Links collection uses structured data with:
- `title`, `url`, `date`, `type` (case study, guide, editorial, etc.)
- `ghost` boolean for content visibility
- UUID-based IDs for unique identification

## Conventions
- Use `.astro` extension for components and pages
- TypeScript enabled throughout
- Tailwind classes for styling with custom CSS supplements
- Content collections for type-safe data management