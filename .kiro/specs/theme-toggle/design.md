# Design Document

## Overview

This design implements a comprehensive theme toggle system for the Astro-based portfolio website, transforming it from a dark-mode-only application to a dual-theme system. The solution leverages Tailwind CSS's built-in dark mode functionality with a class-based strategy, providing seamless theme switching with persistent user preferences.

The current application uses a dark theme with `bg-slate-800` backgrounds and `text-neutral-100` text. The implementation will maintain these as dark mode styles while introducing complementary light theme variants.

## Architecture

### Theme Management Strategy
- **Class-based Dark Mode**: Tailwind's `class` strategy will be used, toggling a `dark` class on the `<html>` element
- **State Management**: Client-side JavaScript will manage theme state and persistence
- **SSR Compatibility**: Theme detection and application will work with Astro's SSR capabilities
- **Progressive Enhancement**: The system will work without JavaScript, defaulting to system preference

### Component Architecture
```
ThemeToggle Component
├── Theme Detection Logic
├── Toggle Button UI
├── State Management
└── Persistence Layer

Theme Provider Script
├── Initial Theme Detection
├── System Preference Detection
├── LocalStorage Management
└── DOM Class Management
```

## Components and Interfaces

### 1. ThemeToggle Component (`src/components/ThemeToggle.astro`)
A reusable Astro component that renders the theme toggle button and handles user interactions.

**Props Interface:**
```typescript
interface Props {
  class?: string; // Additional CSS classes
  size?: 'sm' | 'md' | 'lg'; // Button size variants
}
```

**Features:**
- Accessible button with proper ARIA labels
- Visual feedback for current theme state
- Keyboard navigation support
- Icon-based toggle (sun/moon icons)

### 2. Theme Provider Script (`src/scripts/theme.ts`)
A TypeScript module that manages theme state and persistence.

**Public API:**
```typescript
export interface ThemeManager {
  getCurrentTheme(): 'light' | 'dark';
  setTheme(theme: 'light' | 'dark'): void;
  toggleTheme(): void;
  initializeTheme(): void;
}
```

**Responsibilities:**
- Detect system color scheme preference
- Manage localStorage persistence
- Apply theme classes to DOM
- Provide theme change events

### 3. Layout Integration
The main layout will be updated to include:
- Theme provider script in the `<head>`
- Theme toggle component in the navigation area
- Updated color classes with dark mode variants

## Data Models

### Theme Preference Storage
```typescript
type ThemePreference = 'light' | dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeState {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  systemPreference: ResolvedTheme;
}
```

### LocalStorage Schema
```json
{
  "theme-preference": "light" | "dark" | "system"
}
```

## Color System Design

### Current Dark Theme Colors (to be preserved with `dark:` prefix)
- Background: `bg-slate-800` → `dark:bg-slate-800`
- Text: `text-neutral-100` → `dark:text-neutral-100`
- Secondary text: `text-grey-300` → `dark:text-grey-300`
- Borders/lines: `bg-gray-500` → `dark:bg-gray-500`

### New Light Theme Colors
- Background: `bg-white`
- Text: `text-slate-900`
- Secondary text: `text-slate-600`
- Borders/lines: `bg-slate-300`
- Card backgrounds: `bg-slate-50`

### Accessibility Considerations
- Light theme will maintain WCAG AA contrast ratios (4.5:1 for normal text)
- Dark theme will maintain current contrast levels
- Focus indicators will be visible in both themes
- Color combinations will be tested for color blindness accessibility

## Error Handling

### Graceful Degradation
1. **No JavaScript**: Falls back to system preference via CSS `prefers-color-scheme`
2. **No LocalStorage**: Uses session-based theme management
3. **Invalid stored values**: Resets to system preference
4. **System preference unavailable**: Defaults to light theme

### Error Recovery
- Theme state validation on initialization
- Automatic fallback to default theme on errors
- Console warnings for debugging (development only)

## Testing Strategy

### Unit Testing
- Theme detection logic
- LocalStorage persistence
- Theme toggle functionality
- Accessibility features

### Integration Testing
- Theme persistence across page navigation
- SSR compatibility
- System preference detection
- Component integration

### Visual Testing
- Theme consistency across all pages
- Transition smoothness
- Component appearance in both themes
- Responsive behavior

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast validation
- Focus management

## Implementation Phases

### Phase 1: Core Infrastructure
- Set up Tailwind dark mode configuration
- Create theme management script
- Implement basic theme toggle component

### Phase 2: Component Updates
- Update all existing components with dark mode variants
- Ensure consistent color usage
- Test visual consistency

### Phase 3: Integration & Polish
- Integrate toggle into all pages
- Add smooth transitions
- Implement persistence
- Accessibility enhancements

### Phase 4: Testing & Optimization
- Cross-browser testing
- Performance optimization
- Accessibility audit
- User experience refinement

## Technical Considerations

### Performance
- Theme script will be inlined to prevent FOUC (Flash of Unstyled Content)
- Minimal JavaScript footprint
- CSS-only fallbacks where possible

### Browser Support
- Modern browsers with CSS custom properties support
- Graceful degradation for older browsers
- Progressive enhancement approach

### SEO Impact
- No impact on SEO as theme is client-side only
- Server-side rendering remains unchanged
- Meta tags and structured data unaffected