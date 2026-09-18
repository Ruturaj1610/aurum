import React from 'react';
import { siteConfig } from '../config/site';
import { ArrowDown, Calendar, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Hero({ theme, onBookAppointmentClick }) {
  const isDark = theme === 'dark';

  const handleScrollToCollections = (e) => {
    e.preventDefault();
    const target = document.getElementById('collections');
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.webp"
          alt="Exquisite Gold and Diamond Indian Royal Jewellery"
          className="w-full h-full object-cover object-center"
          style={{
            opacity: isDark ? 0.38 : 0.18,
            filter: isDark
              ? 'brightness(0.75)'
              : 'brightness(1.05) saturate(0.8)',
          }}
        />

        {/* Gradient Overlays — themed */}
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D11] via-[#0C0D11]/80 to-[#0C0D11]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0C0D11_85%)]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/88 to-[#F4EFE6]/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/85 via-transparent to-[#FAF7F2]/65" />
          </>
        )}

        {/* Ambient gold radial glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: 'var(--gold-glow)' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">

        {/* Eyebrow Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full backdrop-blur-md mb-8 animate-shimmer"
          style={{
            backgroundColor: isDark
              ? 'rgba(18,20,26,0.85)'
              : 'rgba(255,255,255,0.9)',
            border: '1px solid var(--border-gold)',
            boxShadow: '0 0 20px var(--gold-glow-sm)',
          }}
        >
          <Sparkles
            className="w-3.5 h-3.5"
            style={{ color: 'var(--gold-primary)' }}
          />

          <span
            className="text-[11px] uppercase tracking-[0.25em] font-medium"
            style={{ color: 'var(--gold-primary)' }}
          >
            Fine Indian Haute Joaillerie
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.08] mb-6"
          style={{ color: 'var(--text-heading)' }}
        >
          Timeless Jewellery.

          <span
            className="block mt-1.5 sm:mt-2.5 font-serif italic font-light"
            style={{
              color: isDark
                ? 'var(--gold-light)'
                : 'var(--gold-primary)',
            }}
          >
            Made for Your Moments.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          className="max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 tracking-wide"
          style={{ color: 'var(--text-secondary)' }}
        >
          Discover finely crafted gold, diamond and bridal jewellery designed
          to become part of your most unforgettable moments.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-16">

          <a
            href="#collections"
            onClick={handleScrollToCollections}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold btn-gold shadow-gold-glow flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Collection</span>

            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onBookAppointmentClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium btn-outline-gold flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar
              className="w-4 h-4"
              style={{ color: 'var(--gold-primary)' }}
            />

            <span>Book an Appointment</span>
          </button>
        </div>

        {/* Trust Badges Row */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-6 max-w-3xl w-full"
          style={{ borderTop: '1px solid var(--border-light)' }}
        >
          {[
            { icon: ShieldCheck, text: '100% BIS 916 Hallmarked' },
            { icon: Sparkles, text: 'Certified Natural Solitaires' },
            { text: 'Private VIP Lounge Consultation', dot: true },
          ].map(({ icon: Icon, text, dot }) => (
            <div
              key={text}
              className={`flex items-center justify-center gap-2 text-xs sm:text-sm font-light ${
                dot ? 'col-span-2 md:col-span-1' : ''
              }`}
              style={{ color: 'var(--text-secondary)' }}
            >
              {Icon && (
                <Icon
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: 'var(--gold-primary)' }}
                />
              )}

              {dot && (
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--gold-primary)' }}
                />
              )}

              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <a
        href="#collections"
        onClick={handleScrollToCollections}
        className="group absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 transition-opacity opacity-75 hover:opacity-100 cursor-pointer"
        aria-label="Scroll down to collections"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--gold-primary)' }}>
          Explore
        </span>
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center p-1"
          style={{ border: '1px solid var(--border-gold)', backgroundColor: 'var(--bg-card)' }}
        >
          <div
            className="w-1 h-2 rounded-full transition-all duration-300 group-hover:translate-y-2"
            style={{ backgroundColor: 'var(--gold-primary)' }}
          />
        </div>
      </a>
    </section>
  );
}