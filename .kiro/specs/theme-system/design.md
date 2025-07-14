# Design Document

## Overview

The theme system will provide a comprehensive light/dark mode toggle with centralized color management for the Riley Draward portfolio site. The design leverages Tailwind CSS 4.x's native dark mode support while maintaining the existing retro gaming aesthetic through custom CSS properties and pixel art elements.

The system will replace hardcoded color values with semantic tokens, implement a theme toggle component, and ensure all visual elements adapt appropriately between light and dark modes while preserving the site's unique character.

## Architecture

### Theme Management Strategy
- **Class-Based Dark Mode**: Use Tailwind's `dark:` variants with `.dark` class on `<html>` element for manual control
- **Default Tailwind Colors**: Leverage Tailwind's built-in color palette with semantic class mapping
- **Minimal Configuration**: No custom color definitions needed - use Tailwind's gray, blue, purple scales
- **System Preference Integration**: Automatic detection via `prefers-color-scheme` with manual override capability
- **FOUC Prevention**: Inline script to set theme class before page render

### Color Token System
Using Tailwind's default color palette with semantic mapping for consistency:

**Light Theme Colors**:
- Background: `bg-white`, `bg-gray-50`, `bg-gray-100`
- Text: `text-gray-900`, `text-gray-700`, `text-gray-500`
- Interactive: `text-blue-600`, `hover:text-blue-700`
- Borders: `border-gray-200`
- Accents: `text-purple-600`

**Dark Theme Colors**:
- Background: `dark:bg-gray-900`, `dark:bg-gray-800`, `dark:bg-gray-700`
- Text: `dark:text-gray-100`, `dark:text-gray-300`, `dark:text-gray-400`
- Interactive: `dark:text-blue-400`, `dark:hover:text-blue-300`
- Borders: `dark:border-gray-600`
- Accents: `dark:text-purple-400`

**Brand Colors** (preserved as custom CSS):
- Space Invader: `#a3e635` (lime-400 equivalent)
- Dinosaur: `#d2042d` (red-700 equivalent)

This approach uses Tailwind's built-in color system with `dark:` variants, eliminating the need for custom color definitions while maintaining design consistency.

## Components and Interfaces

### ThemeToggle Component
**Location**: `src/components/ThemeToggle.astro`

**Features**:
- Toggle button with sun/moon icons
- Smooth transition animations
- Accessible keyboard navigation
- Visual feedback for current state

**Interface**:
```typescript
interface ThemeToggleProps {
  position?: 'fixed' | 'relative';
  className?: string;
}
```

### Theme Initialization Script
**Location**: `src/scripts/theme-init.js`

**Responsibilities**:
- Detect system preference via `prefers-color-scheme`
- Read stored preference from localStorage
- Apply theme class to document before render
- Prevent flash of unstyled content (FOUC)

### Updated Layout Component
**Location**: `src/layouts/Layout.astro`

**Changes**:
- Include theme initialization script inline
- Add theme toggle component
- Apply theme-aware body classes
- Ensure proper script loading order

## Data Models

### Theme State Management
```typescript
type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  current: Theme;
  resolved: 'light' | 'dark'; // actual applied theme
  systemPreference: 'light' | 'dark';
}
```

### Color Configuration
Since we're using Tailwind's default colors, no custom color configuration is needed. The theme system relies on:

```typescript
// Tailwind class mappings for semantic usage
type ThemeColors = {
  light: {
    bg: 'bg-white' | 'bg-gray-50' | 'bg-gray-100';
    text: 'text-gray-900' | 'text-gray-700' | 'text-gray-500';
    interactive: 'text-blue-600' | 'hover:text-blue-700';
    border: 'border-gray-200';
    accent: 'text-purple-600';
  };
  dark: {
    bg: 'dark:bg-gray-900' | 'dark:bg-gray-800' | 'dark:bg-gray-700';
    text: 'dark:text-gray-100' | 'dark:text-gray-300' | 'dark:text-gray-400';
    interactive: 'dark:text-blue-400' | 'dark:hover:text-blue-300';
    border: 'dark:border-gray-600';
    accent: 'dark:text-purple-400';
  };
}
```

## Error Handling

### Theme Loading Failures
- **Fallback Strategy**: Default to light theme if localStorage is corrupted or unavailable
- **System Detection Failure**: Graceful degradation to light theme if `prefers-color-scheme` is unsupported
- **Script Loading Issues**: CSS-only fallback ensures basic theming works without JavaScript

### Color Token Fallbacks
- **Missing Tokens**: Each CSS custom property includes fallback values
- **Browser Compatibility**: Progressive enhancement approach for older browsers
- **Contrast Validation**: Automated testing to ensure WCAG compliance in both themes

### Component Resilience
- **Toggle Component**: Functional even if theme detection fails
- **Icon Loading**: Text fallbacks for sun/moon icons
- **Animation Degradation**: Respects `prefers-reduced-motion` setting

## Testing Strategy

### Visual Regression Testing
- **Component Screenshots**: Automated screenshots of all components in both themes
- **Pixel Art Preservation**: Verify retro gaming elements maintain visual integrity
- **Responsive Testing**: Ensure theme switching works across all breakpoints

### Accessibility Testing
- **Contrast Ratios**: Automated testing for WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)
- **Keyboard Navigation**: Theme toggle accessible via keyboard
- **Screen Reader Testing**: Proper announcements for theme changes
- **Focus Management**: Visible focus indicators in both themes

### Functional Testing
- **Theme Persistence**: Verify localStorage correctly saves and restores preferences
- **System Preference Detection**: Test automatic theme switching based on OS settings
- **FOUC Prevention**: Validate no flash of unstyled content occurs
- **Performance Impact**: Measure theme switching performance and bundle size impact

### Cross-Browser Testing
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **CSS Custom Properties**: Fallback testing for older browsers
- **JavaScript Features**: localStorage and media query support validation

### Integration Testing
- **Tailwind Integration**: Verify custom colors work with Tailwind utilities
- **Build Process**: Ensure theme system doesn't break production builds
- **Component Compatibility**: Test all existing components adapt correctly to theme changes

## Implementation Considerations

### Performance Optimization
- **CSS Variables**: Minimal runtime overhead for theme switching
- **Bundle Size**: Theme toggle component adds <2KB to bundle
- **Animation Performance**: Use CSS transforms for smooth transitions
- **Lazy Loading**: Theme icons loaded only when needed

### Accessibility Compliance
- **Color Independence**: Information not conveyed by color alone
- **High Contrast Support**: Compatible with system high contrast modes
- **Motion Sensitivity**: Respect `prefers-reduced-motion` for animations
- **Focus Indicators**: Clear focus states in both themes

### Browser Support
- **CSS Custom Properties**: IE11+ (with fallbacks)
- **Dark Mode Media Query**: Modern browsers with graceful degradation
- **localStorage**: Universal support with error handling
- **Progressive Enhancement**: Core functionality works without JavaScript

### Maintenance Strategy
- **Color Token Documentation**: Clear naming conventions and usage guidelines
- **Component Library**: Reusable theme-aware components
- **Design System**: Consistent application of color tokens across components
- **Migration Path**: Systematic replacement of hardcoded colors