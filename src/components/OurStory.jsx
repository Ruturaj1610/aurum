import React from 'react';
import { siteConfig } from '../config/site';
import Reveal from './Reveal';
import { Award, Heart, CheckCircle2 } from 'lucide-react';

const statIcons = [Award, Heart, CheckCircle2];

export default function OurStory() {
  const { ourStory, stats } = siteConfig;

  return (
    <section id="our-story" className="py-24 md:py-32 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-24">

          {/* Left: Story */}
          <div className="lg:col-span-6">
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-4"
                style={{ backgroundColor: 'rgba(197,155,75,0.08)', border: '1px solid var(--border-gold)', color: 'var(--gold-primary)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--gold-primary)' }} />
                <span>{ourStory.eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15] mb-6 font-normal" style={{ color: 'var(--text-heading)' }}>
                {ourStory.heading}
              </h2>

              <div className="w-16 h-[1.5px] mb-6" style={{ background: 'linear-gradient(to right, var(--gold-primary), transparent)' }} />

              <p className="text-base sm:text-lg font-light leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {ourStory.content}
              </p>
              <p className="text-sm sm:text-base font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                {ourStory.extendedStory}
              </p>

              {/* Founder Quote */}
              <div
                className="p-5 sm:p-6 rounded-xl relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card-alt)',
                  border: '1px solid var(--border-light)',
                  borderLeft: '3px solid var(--gold-primary)',
                  boxShadow: '0 2px 10px -2px rgba(28,26,23,0.03)',
                }}
              >
                <p className="font-serif italic text-base sm:text-lg leading-relaxed mb-2.5" style={{ color: 'var(--text-heading)' }}>
                  "{siteConfig.brand.founderQuote}"
                </p>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium block" style={{ color: 'var(--gold-primary)' }}>
                  — Atelier Master, {siteConfig.brand.name}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-6">
            <Reveal direction="left">
              <div className="relative">
                <div
                  className="absolute -inset-3 sm:-inset-4 rounded-2xl rotate-1 pointer-events-none"
                  style={{ border: '1px solid var(--border-gold)', opacity: 0.5 }}
                />
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{ border: '1px solid var(--border-light)' }}
                >
                  <img
                    src={ourStory.image}
                    alt="Artisan Goldsmith Workbench with Gold and Tools"
                    loading="lazy"
                    className="w-full h-[400px] sm:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Legacy badge */}
                  <div
                    className="absolute bottom-6 right-6 px-5 py-3.5 rounded-xl backdrop-blur-md text-center shadow-lg"
                    style={{ backgroundColor: 'rgba(12,13,17,0.88)', border: '1px solid var(--border-gold)' }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] block font-semibold" style={{ color: 'var(--gold-bright)' }}>
                      Legacy Since
                    </span>
                    <span className="font-serif text-2xl font-normal text-white tracking-wide">
                      {siteConfig.brand.foundedYear}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Trust Statistics */}
        <Reveal delay={150}>
          <div
            className="p-8 sm:p-10 rounded-2xl backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 4px 24px -4px rgba(28,26,23,0.06)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x" style={{ '--tw-divide-color': 'var(--border-light)' }}>
              {stats.map((stat, idx) => {
                const Icon = statIcons[idx] || Award;
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
                    style={idx > 0 ? { borderTop: '1px solid var(--border-light)' } : {}}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: 'rgba(197,155,75,0.08)', border: '1px solid var(--border-gold)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--gold-primary)' }} />
                    </div>
                    <div className="font-serif text-4xl sm:text-5xl font-normal mb-2 tracking-tight" style={{ color: 'var(--gold-primary)' }}>
                      {stat.value}
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-1.5" style={{ color: 'var(--text-heading)' }}>
                      {stat.label}
                    </h4>
                    <p className="text-xs sm:text-sm font-light max-w-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
