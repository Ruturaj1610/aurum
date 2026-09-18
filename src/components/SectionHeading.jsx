import React from 'react';

export default function SectionHeading({ eyebrow, title, subtitle, centered = true, className = '' }) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-3.5"
          style={{
            backgroundColor: 'rgba(197,155,75,0.08)',
            border: '1px solid var(--border-gold)',
            color: 'var(--gold-primary)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--gold-primary)' }} />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-wide leading-[1.16]"
        style={{ color: 'var(--text-heading)' }}
      >
        {title}
      </h2>

      {/* Gold Ornament Divider */}
      <div className={`flex items-center gap-3 my-4 sm:my-5 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="h-[1px] w-12 sm:w-16" style={{ background: 'linear-gradient(to right, transparent, var(--gold-primary))' }} />
        <span
          className="w-1.5 h-1.5 rotate-45 flex-shrink-0"
          style={{
            backgroundColor: 'var(--gold-primary)',
            boxShadow: '0 0 8px var(--gold-glow)',
          }}
        />
        <span className="h-[1px] w-12 sm:w-16" style={{ background: 'linear-gradient(to left, transparent, var(--gold-primary))' }} />
      </div>

      {subtitle && (
        <p
          className="max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed tracking-wide"
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
