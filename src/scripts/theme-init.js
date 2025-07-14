// Inline script to prevent FOUC (Flash of Unstyled Content)
// This script runs immediately when the page loads, before any CSS is applied

(function() {
  const STORAGE_KEY = 'theme-preference';
  
  function getStoredPreference() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    } catch (error) {
      // localStorage might not be available
    }
    return 'system';
  }
  
  function getSystemPreference() {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }
  
  function resolveTheme(preference) {
    if (preference === 'system') {
      return getSystemPreference();
    }
    return preference;
  }
  
  function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
  
  // Apply theme immediately
  const preference = getStoredPreference();
  const resolvedTheme = resolveTheme(preference);
  applyTheme(resolvedTheme);
})();