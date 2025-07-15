/**
 * Theme initialization script for light/dark mode support
 * Prevents FOUC (Flash of Unstyled Content) by applying theme before page render
 */

const THEME_STORAGE_KEY = 'theme-preference';
const THEME_CLASS = 'dark';

/**
 * Gets the system theme preference using prefers-color-scheme
 * @returns {'light' | 'dark'} The system theme preference
 */
function getSystemTheme() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  // return false;
  return 'light'; // fallback
}

/**
 * Gets the stored theme preference from localStorage
 * @returns {'light' | 'dark' | 'system' | null} The stored theme preference
 */
function getStoredTheme() {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to read theme preference from localStorage:', error);
      return null;
    }
  }
  return null;
}

/**
 * Stores the theme preference in localStorage
 * @param {'light' | 'dark' | 'system'} theme - The theme to store
 */
function storeTheme(theme) {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.warn('Failed to store theme preference in localStorage:', error);
    }
  }
}

/**
 * Resolves the actual theme to apply based on preference and system settings
 * @param {'light' | 'dark' | 'system'} preference - The theme preference
 * @returns {'light' | 'dark'} The resolved theme
 */
function resolveTheme(preference) {
  if (preference === 'system' || !preference) {
    return getSystemTheme();
  }
  return preference === 'dark' ? 'dark' : 'light';
}

/**
 * Applies the theme to the document by adding/removing the dark class
 * @param {'light' | 'dark'} theme - The theme to apply
 */
function applyTheme(theme) {
  if (typeof document !== 'undefined') {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add(THEME_CLASS);
    } else {
      html.classList.remove(THEME_CLASS);
    }
  }
}

/**
 * Gets the current theme preference
 * @returns {'light' | 'dark' | 'system'} The current theme preference
 */
export function getCurrentTheme() {
  return getStoredTheme() || 'system';
}

/**
 * Sets the theme preference and applies it
 * @param {'light' | 'dark' | 'system'} theme - The theme to set
 */
export function setTheme(theme) {
  const validThemes = ['light', 'dark', 'system'];
  if (!validThemes.includes(theme)) {
    console.warn(`Invalid theme: ${theme}. Must be one of: ${validThemes.join(', ')}`);
    return;
  }

  storeTheme(theme);
  const resolvedTheme = resolveTheme(theme);
  applyTheme(resolvedTheme);

  // Dispatch custom event for components to listen to theme changes
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme, resolvedTheme }
    }));
  }
}

/**
 * Sets up a listener for system theme changes
 * @returns {Function} Cleanup function to remove the listener
 */
export function setupSystemThemeListener() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return () => { }; // No-op cleanup function
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleSystemThemeChange = (e) => {
    const currentPreference = getCurrentTheme();
    if (currentPreference === 'system') {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      applyTheme(newSystemTheme);

      // Dispatch event for system theme change
      window.dispatchEvent(new CustomEvent('themechange', {
        detail: { theme: 'system', resolvedTheme: newSystemTheme }
      }));
    }
  };

  // Use addEventListener (supported in all modern browsers)
  mediaQuery.addEventListener('change', handleSystemThemeChange);
  return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
}

/**
 * Initializes the theme system - should be called as early as possible
 * This function is designed to be used in an inline script to prevent FOUC
 */
export function initializeTheme() {
  const storedTheme = getStoredTheme();
  const preference = storedTheme || 'system';
  const resolvedTheme = resolveTheme(preference);
  applyTheme(resolvedTheme);
}

// Auto-initialize if this script is loaded directly (not as a module)
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  initializeTheme();
}