/**
 * Inline theme initialization script to prevent FOUC
 * This script should be placed in the <head> as an inline script
 * It's a minimal version of the theme-init.js functionality
 */

(function() {
  'use strict';
  
  const THEME_STORAGE_KEY = 'theme-preference';
  const THEME_CLASS = 'dark';

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add(THEME_CLASS);
    } else {
      html.classList.remove(THEME_CLASS);
    }
  }

  // Initialize theme immediately
  const storedTheme = getStoredTheme();
  const preference = storedTheme || 'system';
  let resolvedTheme;
  
  if (preference === 'system' || !preference) {
    resolvedTheme = getSystemTheme();
  } else {
    resolvedTheme = preference === 'dark' ? 'dark' : 'light';
  }
  
  applyTheme(resolvedTheme);
})();