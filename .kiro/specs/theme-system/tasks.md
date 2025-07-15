# Implementation Plan

- [x] 1. Configure Tailwind CSS for dark mode support
  - Create tailwind.config.js with dark mode enabled using class-based strategy
  - Verify default Tailwind color palette works with dark: variants
  - Preserve existing brand colors (space-invader-color, dinosaur-color) as custom CSS
  - _Requirements: 4.1, 4.2, 4.3_

- [x] 2. Create theme initialization script to prevent FOUC
  - Write JavaScript module at src/scripts/theme-init.js that detects system theme preference using prefers-color-scheme
  - Implement localStorage-based theme persistence with fallback to system preference
  - Export functions for setTheme, getCurrentTheme, and setupSystemThemeListener
  - Create inline script that applies theme before page render to prevent flash of unstyled content
  - _Requirements: 1.4, 1.5_

- [ ] 3. Fix TypeScript errors in ThemeToggle component
  - Resolve event listener type issues for custom 'themechange' event
  - Fix currentTheme property initialization in TypeScript class
  - Ensure proper type definitions for theme-related interfaces
  - Update import path once theme-init.js script is created
  - _Requirements: 1.1, 1.2_

- [ ] 4. Update Layout component to integrate theme system
  - Add theme initialization script to document head as inline script
  - Include ThemeToggle component in fixed position
  - Replace hardcoded dark theme classes (bg-slate-800 text-neutral-100) with theme-aware Tailwind utilities
  - Ensure proper script loading order for theme functionality
  - _Requirements: 1.1, 1.4_

- [ ] 5. Update Timeline component to use theme-aware colors
  - Replace hardcoded gray colors (bg-gray-500, text-gray-400) with theme-aware Tailwind utilities
  - Use bg-gray-500 dark:bg-gray-400 for timeline lines
  - Use text-gray-600 dark:text-gray-400 for date labels
  - Ensure proper contrast ratios in both themes
  - _Requirements: 2.2, 2.4, 3.4_

- [ ] 6. Update JobCard component for theme compatibility
  - Replace hardcoded neutral colors with theme-aware Tailwind classes
  - Update text-neutral-100 to text-gray-900 dark:text-gray-100
  - Update text-grey-300 to text-gray-600 dark:text-gray-300
  - Ensure logo backgrounds work in both themes
  - _Requirements: 2.2, 2.4, 3.4_

- [ ] 7. Update SocialLink component styling
  - Replace text-neutral-100 with theme-aware color tokens
  - Add hover states that work in both light and dark themes
  - Ensure pixel-corners integration works with theme system
  - _Requirements: 2.2, 2.4_

- [ ] 8. Add pixel-corners styling for light theme compatibility
  - Update pixel-corners.css to work with both light and dark backgrounds
  - Ensure pixel art borders maintain visibility in light mode
  - Test pixel-corners component integration with theme system
  - _Requirements: 2.3, 2.5_

- [ ] 9. Implement theme-aware focus and interaction states
  - Define focus indicator styles that work in both light and dark themes using Tailwind utilities
  - Update hover states for all interactive elements using semantic color tokens
  - Ensure proper visual feedback for theme toggle component
  - Test keyboard navigation visibility across both themes
  - _Requirements: 2.2, 2.4_