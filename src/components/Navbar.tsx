import { useEffect, useState } from 'react';
import type { FC } from 'react';

interface NavbarProps {
  lang: 'id' | 'en';
  onLangChange?: (lang: 'id' | 'en') => void;
}

export const Navbar: FC<NavbarProps> = ({ lang, onLangChange }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newDarkMode = !isDark;
    
    if (newDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setIsDark(newDarkMode);
  };

  const navLinks = lang === 'id' 
    ? [
        { href: '#about', label: 'Tentang' },
        { href: '#skills', label: 'Keahlian' },
        { href: '#projects', label: 'Proyek' },
        { href: '#services', label: 'Layanan' },
        { href: '#contact', label: 'Kontak' },
      ]
    : [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#services', label: 'Services' },
        { href: '#contact', label: 'Contact' },
      ];

  const langLabel = lang === 'id' ? 'EN' : 'ID';
  const otherLang = lang === 'id' ? 'en' : 'id';

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b-hard border-black bg-white dark:border-white dark:bg-black shadow-hard-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a
            href={lang === 'id' ? '/' : '/en'}
            className="font-space-mono text-xl font-bold hover:translate-y-[-2px] transition-transform"
            aria-label="Baji - Home"
          >
            Ba<span className="text-neon-blue">jif</span>.
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-space-mono text-sm font-medium hover:text-neon-blue dark:hover:text-neon-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => {
                const newPath = lang === 'id' ? '/en' : '/';
                window.location.href = newPath;
              }}
              className="px-3 py-2 font-space-mono text-xs font-bold border-hard border-black dark:border-white hover:shadow-hard-sm dark:hover:shadow-hard-sm transition-shadow"
              aria-label={`Switch to ${otherLang}`}
            >
              {langLabel}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-3 py-2 font-space-mono text-xs font-bold border-hard border-black dark:border-white hover:shadow-hard-sm dark:hover:shadow-hard-sm transition-shadow"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};