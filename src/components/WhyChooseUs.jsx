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
              <Reveal key={feature.id} delay={index * 120}>
                <div
                  className="group h-full p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 4px 20px -4px rgba(28,26,23,0.07)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(197,155,75,0.45)';
                    e.currentTarget.style.boxShadow = '0 12px 40px -8px var(--gold-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.boxShadow = '0 4px 20px -4px rgba(28,26,23,0.07)';
                  }}
                >
                  {/* Subtle ambient glow corner */}
                  <div
                    className="absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl pointer-events-none"
                    style={{ backgroundColor: 'var(--gold-glow-sm)' }}
                  />

                  <div>
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm"
                      style={{
                        backgroundColor: 'rgba(197,155,75,0.08)',
                        border: '1px solid var(--border-gold)',
                        color: 'var(--gold-primary)',
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-serif mb-3 font-medium transition-colors"
                      style={{ color: 'var(--text-heading)' }}
                    >
                      {feature.title}
                    </h3>

                    <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {feature.description}
                    </p>

                    <p
                      className="text-xs font-light leading-relaxed pt-3"
                      style={{ borderTop: '1px solid var(--border-light)', color: 'var(--text-faint)' }}
                    >
                      {feature.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-medium" style={{ color: 'var(--gold-primary)' }}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
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
