export type Theme = 'light' | 'dark';
export type ThemePreference = Theme | 'system';

const STORAGE_KEY = 'theme-preference';

export class ThemeManager {
  private currentTheme: Theme = 'light';
  
  constructor() {
    this.initializeTheme();
  }

  /**
   * Get the current resolved theme
   */
  getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Get the user's stored preference
   */
  getStoredPreference(): ThemePreference {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    } catch (error) {
      console.warn('Failed to read theme preference from localStorage:', error);
    }
    return 'system';
  }

  /**
   * Detect system color scheme preference
   */
  getSystemPreference(): Theme {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }

  /**
   * Resolve theme preference to actual theme
   */
  resolveTheme(preference: ThemePreference): Theme {
    if (preference === 'system') {
      return this.getSystemPreference();
    }
    return preference;
  }

  /**
   * Set theme preference and apply it
   */
  setTheme(preference: ThemePreference): void {
    try {
      localStorage.setItem(STORAGE_KEY, preference);
    } catch (error) {
      console.warn('Failed to save theme preference to localStorage:', error);
    }
    
    const resolvedTheme = this.resolveTheme(preference);
    this.applyTheme(resolvedTheme);
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Apply theme to the document
   */
  private applyTheme(theme: Theme): void {
    this.currentTheme = theme;
    
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
      
      // Dispatch custom event for components that need to react to theme changes
      const event = new CustomEvent('theme-changed', { 
        detail: { theme } 
      });
      document.dispatchEvent(event);
    }
  }

  /**
   * Initialize theme on page load
   */
  initializeTheme(): void {
    const preference = this.getStoredPreference();
    const resolvedTheme = this.resolveTheme(preference);
    this.applyTheme(resolvedTheme);
    
    // Listen for system preference changes
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', () => {
        const currentPreference = this.getStoredPreference();
        if (currentPreference === 'system') {
          const newTheme = this.getSystemPreference();
          this.applyTheme(newTheme);
        }
      });
    }
  }
}

// Create and export a singleton instance
export const themeManager = new ThemeManager();

// Export convenience functions
export const getCurrentTheme = () => themeManager.getCurrentTheme();
export const setTheme = (theme: ThemePreference) => themeManager.setTheme(theme);
export const toggleTheme = () => themeManager.toggleTheme();