export type Theme = 'light' | 'dark' | 'system';

export interface ThemeChangeEventDetail {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
}

export interface ThemeChangeEvent extends CustomEvent<ThemeChangeEventDetail> {
  detail: ThemeChangeEventDetail;
}

declare global {
  interface WindowEventMap {
    'themechange': ThemeChangeEvent;
  }
}