import React from 'react';
import { siteConfig } from '../config/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Collections({ onSelectCollection }) {
  return (
    <section
      id="collections"
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Ambient gold glow */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-60"
        style={{ backgroundColor: 'var(--gold-glow-sm)' }}
      />

      <div
        className="absolute bottom-10 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-50"
        style={{ backgroundColor: 'var(--gold-glow-sm)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="Curated Portfolio"
            title="Explore Our Collections"
            subtitle="Crafted to celebrate every story, every style and every occasion."
          />
        </Reveal>

        {/* Collection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {siteConfig.collections.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>

              <div
                onClick={() => onSelectCollection?.(item.category)}
                className="group relative h-[420px] rounded-2xl overflow-hidden flex flex-col justify-end p-6 cursor-pointer transition-all duration-500"
                style={{
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-card)',
                  boxShadow: '0 8px 30px -10px rgba(28,26,23,0.12)',
                }}

                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-gold)';
                  e.currentTarget.style.boxShadow =
                    '0 14px 45px -12px var(--gold-glow)';
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 30px -10px rgba(28,26,23,0.12)';
                }}
              >

                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">

                  <img
                    src={item.image}
                    alt={`${item.title} — Aurum Jewels`}
                    loading="lazy"
                    className="
                      w-full h-full
                      object-cover object-center
                      transition-transform duration-700 ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Softer luxury gradient */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* Subtle gold glow on hover */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-500
                    "
                    style={{
                      background:
                        'linear-gradient(to top, rgba(174,130,35,0.18), transparent 55%)',
                    }}
                  />

                </div>

                {/* Collection Tag */}
                <div className="absolute top-5 left-5 z-10">

                  <span
                    className="
                      inline-flex items-center gap-1.5
                      px-3 py-1.5
                      rounded-full
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      font-medium
                      backdrop-blur-md
                    "
                    style={{
                      backgroundColor: 'rgba(250,247,242,0.92)',
                      border: '1px solid rgba(196,145,39,0.45)',
                      color: 'var(--gold-primary)',
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{item.tag}</span>
                  </span>

                </div>

                {/* Card Content */}
                <div
                  className="
                    relative z-10
                    transform translate-y-1
                    group-hover:translate-y-0
                    transition-transform duration-300
                  "
                >

                  {/* Title + Arrow */}
                  <div className="flex items-center justify-between mb-2">

                    <h3
                      className="
                        text-2xl sm:text-3xl
                        font-serif
                        text-white
                        tracking-wide
                        transition-colors duration-300
                      "
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                        w-10 h-10
                        rounded-full
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:-rotate-6
                        shrink-0
                      "
                      style={{
                        border: '1px solid rgba(229,195,111,0.7)',
                        backgroundColor: 'rgba(250,247,242,0.94)',
                        color: 'var(--gold-primary)',
                      }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                  </div>

                  {/* Description */}
                  <p
                    className="
                      text-white/80
                      text-xs sm:text-sm
                      font-light
                      leading-relaxed
                      mb-4
                      line-clamp-2
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  >
                    {item.description}
                  </p>

                  {/* Bottom Meta */}
                  <div
                    className="
                      pt-3
                      flex items-center justify-between
                      text-[10px]
                      sm:text-[11px]
                      tracking-[0.16em]
                      uppercase
                      font-medium
                    "
                    style={{
                      borderTop: '1px solid rgba(255,255,255,0.22)',
                      color: 'var(--gold-light)',
                    }}
                  >
                    <span>Explore Collection</span>

                    <span className="text-white/55 tracking-wider">
                      View Showcase →
                    </span>
                  </div>

                </div>

              </div>

            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}