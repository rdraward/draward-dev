# Implementation Plan

- [x] 1. Create theme management infrastructure
  - [x] 1.1 Implement core theme detection and management script
    - Write TypeScript module for theme state management
    - Implement system preference detection using `prefers-color-scheme`
    - Create localStorage persistence functions with error handling
    - _Requirements: 1.2, 5.1, 5.3_
  
  - [x] 1.2 Create theme toggle component
    - Build Astro component with accessible button markup
    - Implement sun/moon icon toggle with proper ARIA labels
    - Add keyboard navigation support and focus management
    - _Requirements: 2.2, 2.4_

- [x] 2. Add theme initialization script to prevent FOUC
  - Create inline script for immediate theme application on page load
  - Implement fallback to system preference when no stored preference exists
  - Handle edge cases for invalid stored values
  - _Requirements: 1.2, 1.3, 5.2, 5.4_

- [x] 3. Update existing components with light theme variants
  - [x] 3.1 Update Layout.astro with theme support
    - Add dark mode variants to body classes (`bg-slate-800` → `bg-white dark:bg-slate-800`)
    - Integrate theme provider script in document head
    - Include theme toggle component in layout
    - _Requirements: 3.2, 3.4_
  
  - [x] 3.2 Update About.astro component styling
    - Convert text colors to use light/dark variants (`text-neutral-100` → `text-slate-900 dark:text-neutral-100`)
    - Ensure proper contrast for both themes
    - _Requirements: 3.2, 4.1, 4.3_
  
  - [x] 3.3 Update SocialLink.astro component styling
    - Add light theme variants for text and hover states
    - Maintain pixel-corners styling in both themes
    - _Requirements: 3.2, 4.2_
  
  - [x] 3.4 Update Timeline.astro component styling
    - Convert timeline line colors (`bg-gray-500` → `bg-slate-300 dark:bg-gray-500`)
    - Update date text colors for light theme visibility
    - _Requirements: 3.2, 4.1_
  
  - [x] 3.5 Update JobCard.astro component styling
    - Add light theme variants for text colors and backgrounds
    - Ensure logo backgrounds work in both themes
    - _Requirements: 3.2, 4.1_
  
  - [x] 3.6 Update TimelineDot.astro component styling
    - Create light theme variants for dot colors and states
    - Maintain visual hierarchy in both themes
    - _Requirements: 3.2, 4.3_

- [x] 4. Wire up theme toggle functionality
  - Connect toggle button to theme management functions
  - Implement smooth theme transitions
  - Add visual feedback for theme changes
  - _Requirements: 1.1, 1.4_

- [ ] 5. Add theme toggle to all pages
  - [ ] 5.1 Integrate toggle in main layout
    - Position theme toggle accessibly in the layout
    - Ensure visibility and usability across all viewport sizes
    - _Requirements: 2.1, 2.3_
  
  - [ ] 5.2 Test theme toggle on stuff.astro page
    - Verify theme toggle works consistently across different pages
    - Ensure theme persistence during navigation
    - _Requirements: 2.1, 5.1_

- [ ] 6. Implement accessibility enhancements
  - [ ] 6.1 Add proper ARIA attributes and labels
    - Implement screen reader announcements for theme changes
    - Add descriptive labels for current theme state
    - _Requirements: 2.4_
  
  - [ ] 6.2 Ensure keyboard navigation support
    - Test and refine keyboard accessibility for theme toggle
    - Implement proper focus management during theme changes
    - _Requirements: 2.3_

- [ ] 7. Add smooth theme transitions
  - [ ] 7.1 Implement CSS transitions for theme changes
    - Add transition classes for smooth color changes
    - Prevent jarring visual shifts during theme switching
    - _Requirements: 1.4, 4.4_
  
  - [ ] 7.2 Optimize transition performance
    - Ensure transitions don't impact page performance
    - Test transition smoothness across different devices
    - _Requirements: 4.4_

- [ ] 8. Create comprehensive test coverage
  - [ ] 8.1 Write unit tests for theme management functions
    - Test theme detection, persistence, and toggle functionality
    - Mock localStorage and system preferences for testing
    - _Requirements: 1.1, 1.2, 5.1_
  
  - [ ] 8.2 Test accessibility compliance
    - Verify WCAG AA contrast ratios for both themes
    - Test keyboard navigation and screen reader compatibility
    - _Requirements: 2.4, 4.1_
  
  - [ ] 8.3 Test cross-browser compatibility
    - Verify theme functionality across modern browsers
    - Test graceful degradation for unsupported features
    - _Requirements: 1.3, 5.3_