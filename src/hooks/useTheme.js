import { useState, useEffect } from 'react';

/**
 * useTheme — manages light/dark theme with:
 * - localStorage persistence
 * - System preference on first visit (no saved preference)
 * - CSS class toggling on <html> element
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Read saved preference from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aurum-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      // First visit: use system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    // Default: light luxury
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('aurum-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
