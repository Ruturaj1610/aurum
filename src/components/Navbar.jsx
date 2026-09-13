import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import {
  Menu,
  X,
  Phone,
  Clock,
  Sparkles,
  ChevronRight,
  Calendar,
  Sun,
  Moon,
} from 'lucide-react';

export default function Navbar({
  theme,
  onToggleTheme,
  onBookAppointmentClick,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      window.scrollTo({
        top:
          target.getBoundingClientRect().top +
          window.pageYOffset -
          80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div
        className="hidden sm:block py-2 text-xs relative z-50 border-b"
        style={{
          backgroundColor: isDark ? '#07080A' : '#F2ECE2',
          borderColor: isDark
            ? 'rgba(30,33,45,0.8)'
            : 'rgba(232,224,208,0.9)',
          color: isDark ? '#8E826C' : '#6B6860',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock
                className="w-3.5 h-3.5"
                style={{ color: 'var(--gold-primary)' }}
              />
              <span>
                Showroom: 10:30 AM – 8:30 PM (Mon – Sat)
              </span>
            </span>

            <span
              className="hidden md:inline-flex items-center gap-1 font-medium"
              style={{ color: 'var(--gold-primary)' }}
            >
              <Sparkles className="w-3 h-3" />
              <span>
                100% BIS 916 Hallmarked &amp; Certified Diamonds
              </span>
            </span>
          </div>

          <a
            href={`tel:${siteConfig.contact.phone.replace(
              /[^0-9+]/g,
              ''
            )}`}
            className="flex items-center gap-1.5 transition-colors hover:opacity-80 whitespace-nowrap"
          >
            <Phone
              className="w-3 h-3"
              style={{ color: 'var(--gold-primary)' }}
            />
            <span>
              Call Us: {siteConfig.contact.phoneDisplay}
            </span>
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className="sticky top-0 z-40 w-full transition-all duration-300"
        style={{
          backgroundColor: isScrolled
            ? 'var(--nav-bg-scrolled)'
            : 'var(--nav-bg)',
          borderBottom: `1px solid ${isScrolled
              ? 'var(--border-gold)'
              : 'var(--border-light)'
            }`,
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow: isScrolled
            ? isDark
              ? '0 4px 30px rgba(0,0,0,0.5)'
              : '0 4px 20px rgba(28,26,23,0.08)'
            : 'none',
          paddingTop: isScrolled ? '12px' : '16px',
          paddingBottom: isScrolled ? '12px' : '16px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Desktop Layout */}
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6">

            {/* Brand Logo */}
            <a
              href="#"
              className="group flex items-center gap-3 text-left focus:outline-none focus:ring-1 focus:ring-gold-400/50 rounded-sm"
              aria-label="Aurum Jewels Homepage"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  border: '1px solid var(--border-gold)',
                  backgroundColor: isDark
                    ? '#12141A'
                    : '#FDFAF6',
                  boxShadow: '0 0 12px var(--gold-glow-sm)',
                }}
              >
                <span
                  className="font-cinzel text-base font-bold"
                  style={{ color: 'var(--gold-primary)' }}
                >
                  {siteConfig.brand.monogram}
                </span>
              </div>

              <div className="flex flex-col">
                <span
                  className="font-serif text-xl sm:text-2xl font-medium tracking-[0.18em] uppercase transition-colors"
                  style={{ color: 'var(--text-heading)' }}
                >
                  {siteConfig.brand.name}
                </span>

                <span
                  className="text-[9px] uppercase tracking-[0.28em] font-sans -mt-0.5"
                  style={{
                    color: 'var(--gold-primary)',
                    opacity: 0.8,
                  }}
                >
                  Haute Joaillerie
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center justify-center gap-6 xl:gap-7"
              aria-label="Main Navigation"
            >
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href)
                  }
                  className="text-xs uppercase tracking-[0.18em] font-medium relative py-1 group transition-colors whitespace-nowrap"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    'var(--gold-primary)')
                  }
                  onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    'var(--text-muted)')
                  }
                >
                  {link.label}

                  <span
                    className="absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full"
                    style={{
                      background:
                        'linear-gradient(to right, var(--gold-primary), var(--gold-bright))',
                    }}
                  />
                </a>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="hidden sm:flex items-center justify-end gap-3">

              {/* Theme Toggle */}
              <button
                onClick={onToggleTheme}
                aria-label={
                  isDark
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
                title={
                  isDark
                    ? 'Switch to Light Mode'
                    : 'Switch to Dark Mode'
                }
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.12em] font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-gold-400/50"
                style={{
                  border: '1px solid var(--border-gold)',
                  backgroundColor: isDark
                    ? '#1E212D'
                    : '#FDFAF6',
                  color: 'var(--gold-primary)',
                }}
              >
                {isDark ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}

                <span>
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>

              {/* Book Appointment CTA */}
              <button
                onClick={onBookAppointmentClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-semibold btn-gold shadow-gold-glow cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-dark-950" />

                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="lg:hidden justify-self-end p-2 rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-gold-400"
              style={{ color: 'var(--text-muted)' }}
              aria-label={
                mobileMenuOpen
                  ? 'Close menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 backdrop-blur-md"
          style={{
            backgroundColor: isDark
              ? 'rgba(7,8,10,0.85)'
              : 'rgba(28,26,23,0.5)',
          }}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className="fixed top-0 right-0 w-full max-w-xs h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
          style={{
            backgroundColor: isDark
              ? '#0C0D11'
              : '#FAF7F2',
            borderLeft: '1px solid var(--border-gold)',
          }}
        >
          <div>

            {/* Drawer Header */}
            <div
              className="flex items-center justify-between pb-6"
              style={{
                borderBottom:
                  '1px solid var(--border-light)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    border:
                      '1px solid var(--border-gold)',
                    backgroundColor: isDark
                      ? '#12141A'
                      : '#FDFAF6',
                  }}
                >
                  <span
                    className="font-cinzel text-xs font-bold"
                    style={{
                      color: 'var(--gold-primary)',
                    }}
                  >
                    AJ
                  </span>
                </div>

                <span
                  className="font-serif text-lg uppercase tracking-wider"
                  style={{
                    color: 'var(--text-heading)',
                  }}
                >
                  {siteConfig.brand.name}
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full transition-colors"
                style={{ color: 'var(--text-muted)' }}
                aria-label="Close navigation drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-1 py-6">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href)
                  }
                  className="flex items-center justify-between px-3 py-3 rounded-lg text-sm uppercase tracking-widest transition-colors"
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span>{link.label}</span>

                  <ChevronRight
                    className="w-4 h-4"
                    style={{
                      color: 'var(--text-faint)',
                    }}
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div
            className="pt-6 space-y-4"
            style={{
              borderTop:
                '1px solid var(--border-light)',
            }}
          >
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all"
              style={{
                border: '1px solid var(--border-gold)',
                color: 'var(--gold-primary)',
                backgroundColor: 'transparent',
              }}
              aria-label={
                isDark
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}

              <span>
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>

            {/* Appointment */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookAppointmentClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs uppercase tracking-wider font-semibold btn-gold text-dark-950"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <div
              className="text-center text-xs"
              style={{ color: 'var(--text-faint)' }}
            >
              <p
                className="font-medium"
                style={{
                  color: 'var(--gold-primary)',
                }}
              >
                Bandra West Showroom
              </p>

              <p>{siteConfig.contact.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}