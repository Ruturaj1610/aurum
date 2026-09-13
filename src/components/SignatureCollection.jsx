import React from 'react';
import { siteConfig } from '../config/site';
import Reveal from './Reveal';
import { Sparkles, ArrowRight, ShieldCheck, Feather, Compass } from 'lucide-react';

const pillarIcons = [ShieldCheck, Feather, Compass];

export default function SignatureCollection({ onDiscoverCraftClick }) {
  const { signatureCollection } = siteConfig;

  return (
    <section
      id="signature"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 right-10 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'var(--gold-glow-sm)' }} />
      <div className="absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'var(--gold-glow-sm)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal direction="right">
              <div className="relative">
                {/* Offset decorative frame */}
                <div
                  className="absolute -inset-3 sm:-inset-4 rounded-2xl -rotate-1 pointer-events-none"
                  style={{ border: '1px solid var(--border-gold)', opacity: 0.5 }}
                />
                <div
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                  style={{ border: '1px solid var(--border-light)' }}
                >
                  <img
                    src={signatureCollection.image}
                    alt="Master Artisan Goldsmith Crafting Fine Gold Jewellery"
                    loading="lazy"
                    className="w-full h-[450px] sm:h-[550px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating Atelier Badge */}
                  <div
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-lg backdrop-blur-md flex items-center justify-between"
                    style={{
                      backgroundColor: 'rgba(12,13,17,0.85)',
                      border: '1px solid var(--border-gold)',
                    }}
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] font-semibold block" style={{ color: 'var(--gold-primary)' }}>
                        Signature Atelier
                      </span>
                      <p className="text-sm font-serif text-white">Handcrafted by Master Karigars</p>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(197,155,75,0.2)', border: '1px solid var(--border-gold)' }}>
                      <Sparkles className="w-4 h-4" style={{ color: 'var(--gold-bright)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal direction="left">
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-medium mb-4"
                style={{ backgroundColor: 'rgba(197,155,75,0.1)', border: '1px solid var(--border-gold)', color: 'var(--gold-primary)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--gold-primary)' }} />
                <span>{signatureCollection.eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15] mb-6 font-normal" style={{ color: 'var(--text-heading)' }}>
                {signatureCollection.heading}
              </h2>

              <div className="w-20 h-[1.5px] mb-6" style={{ background: 'linear-gradient(to right, var(--gold-primary), transparent)' }} />

              <p className="text-base sm:text-lg font-light leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                {signatureCollection.copy}
              </p>

              {/* Craft Pillars */}
              <div className="space-y-4 mb-10">
                {signatureCollection.craftPillars.map((pillar, i) => {
                  const Icon = pillarIcons[i] || ShieldCheck;
                  return (
                    <div
                      key={pillar.title}
                      className="p-4 rounded-lg flex items-start gap-4 transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: 'rgba(197,155,75,0.1)', border: '1px solid var(--border-gold)' }}
                      >
                        <Icon className="w-4 h-4" style={{ color: 'var(--gold-primary)' }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif font-semibold tracking-wide mb-1" style={{ color: 'var(--text-heading)' }}>
                          {pillar.title}
                        </h4>
                        <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={onDiscoverCraftClick}
                className="px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold btn-gold shadow-gold-glow flex items-center gap-2 group cursor-pointer"
              >
                <span>{signatureCollection.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
