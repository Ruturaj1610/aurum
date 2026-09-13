import React from 'react';
import { siteConfig } from '../config/site';
import Reveal from './Reveal';
import { Sparkles, Calendar, Check, ArrowRight } from 'lucide-react';

export default function BridalSection({ onBookAppointmentClick, onExploreBridalClick }) {
  const { bridalFeature } = siteConfig;

  return (
    <section id="bridal" className="relative py-28 md:py-36 overflow-hidden">
      {/* Full-width background image — stays dramatic in both themes */}
      <div className="absolute inset-0 z-0">
        <img
          src={bridalFeature.image}
          alt="Indian Bride Adorned in Royal Bridal Jewellery"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(197,155,75,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <Reveal>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-[0.25em] font-medium backdrop-blur-md mb-6"
              style={{ backgroundColor: 'rgba(197,155,75,0.2)', border: '1px solid rgba(197,155,75,0.4)', color: 'var(--gold-bright)' }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{bridalFeature.eyebrow}</span>
            </div>

            {/* Headline — always white/cream on dark cinematic bg */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white leading-[1.12] mb-6">
              For The Moments That{' '}
              <span className="font-serif italic font-light gold-gradient-text">
                Deserve Forever.
              </span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed mb-6">
              {bridalFeature.copy}
            </p>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
              {bridalFeature.subtext}
            </p>

            {/* Perks */}
            <div className="space-y-3 mb-10">
              {bridalFeature.perks.map((perk) => (
                <div key={perk} className="flex items-center gap-3 text-white/80 text-sm">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(197,155,75,0.2)', border: '1px solid rgba(197,155,75,0.5)' }}
                  >
                    <Check className="w-3 h-3" style={{ color: 'var(--gold-bright)' }} />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreBridalClick}
                className="px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold btn-gold shadow-gold-glow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{bridalFeature.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onBookAppointmentClick}
                className="px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 cursor-pointer transition-all"
                style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#F5E6CA', backgroundColor: 'rgba(12,13,17,0.4)', backdropFilter: 'blur(8px)' }}
              >
                <Calendar className="w-4 h-4" style={{ color: 'var(--gold-bright)' }} />
                <span>Book Bridal Consultation</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
