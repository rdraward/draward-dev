// Simple theme utilities - no complex manager needed
export function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');

  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

export function getCurrentTheme(): 'light' | 'dark' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}