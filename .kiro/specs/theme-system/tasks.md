# Implementation Plan

- [x] 1. Configure Tailwind CSS for dark mode support
  - Enable dark mode in Tailwind configuration using class-based strategy
  - Verify default Tailwind color palette works with dark: variants
  - Preserve existing brand colors (space-invader-color, dinosaur-color) as custom CSS
  - _Requirements: 4.1, 4.2, 4.3_

- [x] 2. Create theme initialization script to prevent FOUC
  - Write JavaScript module that detects system theme preference using prefers-color-scheme
  - Implement localStorage-based theme persistence with fallback to system preference
  - Create inline script that applies theme before page render to prevent flash of unstyled content
  - _Requirements: 1.4, 1.5_

- [x] 3. Implement ThemeToggle component with accessibility features
  - Create Astro component with toggle button and sun/moon icons
  - Add proper ARIA labels and keyboard navigation support
  - Implement smooth transition animations that respect prefers-reduced-motion
  - Wire up click handlers to update theme state and localStorage
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 4. Update Layout component to integrate theme system
  - Add theme initialization script to document head as inline script
  - Include ThemeToggle component in fixed position
  - Apply theme-aware CSS classes to body element
  - Ensure proper script loading order for theme functionality
  - _Requirements: 1.1, 1.4_

- [x] 5. Update global styles to use centralized color system
  - Replace all hardcoded color values in global.css with CSS custom properties
  - Ensure animation keyframes work correctly with theme-aware colors
  - Update media query styles to maintain responsive behavior
  - Verify all custom CSS integrates properly with Tailwind utilities
  - _Requirements: 3.1, 3.4, 3.5_

- [ ] 6. Fix TypeScript errors in ThemeToggle component
  - Resolve event listener type issues for custom 'themechange' event
  - Fix currentTheme property initialization in TypeScript class
  - Ensure proper type definitions for theme-related interfaces
  - _Requirements: 1.1, 1.2_

- [ ] 7. Update existing components to use semantic color tokens
  - Replace hardcoded color classes in Timeline component with semantic CSS custom properties
  - Update JobCard component styling to use centralized color system
  - Modify SocialLink component to use theme-aware color tokens
  - Ensure proper contrast ratios for all text elements in both themes
  - _Requirements: 2.2, 2.4, 3.4_

- [ ] 8. Add pixel-corners styling for light theme compatibility
  - Update pixel-corners.css to work with both light and dark backgrounds
  - Ensure pixel art borders maintain visibility in light mode
  - Test pixel-corners component integration with theme system
  - _Requirements: 2.3, 2.5_

- [ ] 9. Implement theme-aware focus and interaction states
  - Define focus indicator styles that work in both light and dark themes
  - Update hover states for all interactive elements using semantic color tokens
  - Ensure proper visual feedback for theme toggle component
  - Test keyboard navigation visibility across both themes
  - _Requirements: 2.2, 2.4_

- [ ] 10. Create comprehensive test suite for theme functionality
  - Write unit tests for theme detection and persistence logic
  - Create visual regression tests for component appearance in both themes
  - Implement accessibility tests for contrast ratios and keyboard navigation
  - Add integration tests for theme switching across different components
  - _Requirements: 2.1, 2.2, 2.4_