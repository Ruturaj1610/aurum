import React from 'react';
import { siteConfig } from '../config/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { ShieldCheck, Gem, Sparkles, Award, CheckCircle2 } from 'lucide-react';

const iconMap = { ShieldCheck, Gem, Sparkles, Award };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: 'var(--gold-glow-sm)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="The Aurum Promise"
            title="Crafted With Trust"
            subtitle="Built on four unwavering pillars of purity, certified brilliance, bespoke creativity and multi-generational craftsmanship."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.whyChooseUs.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || ShieldCheck;
            return (
              <Reveal key={feature.id} delay={index * 100}>
                <div
                  className="group h-full p-7 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-400 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 4px 20px -4px rgba(28,26,23,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-gold)';
                    e.currentTarget.style.boxShadow = '0 14px 40px -8px var(--gold-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.boxShadow = '0 4px 20px -4px rgba(28,26,23,0.06)';
                  }}
                >
                  {/* Subtle index numeral in top right corner */}
                  <span
                    className="absolute top-5 right-6 font-serif text-2xl sm:text-3xl font-light select-none transition-colors"
                    style={{ color: 'var(--border-muted)', opacity: 0.7 }}
                  >
                    0{index + 1}
                  </span>

                  <div>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm"
                      style={{
                        backgroundColor: 'rgba(197,155,75,0.08)',
                        border: '1px solid var(--border-gold)',
                        color: 'var(--gold-primary)',
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-serif mb-3 font-normal transition-colors"
                      style={{ color: 'var(--text-heading)' }}
                    >
                      {feature.title}
                    </h3>

                    <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {feature.description}
                    </p>

                    <p
                      className="text-xs font-light leading-relaxed pt-3"
                      style={{ borderTop: '1px solid var(--border-light)', color: 'var(--text-muted)' }}
                    >
                      {feature.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium" style={{ color: 'var(--gold-primary)' }}>
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Certified Quality</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
