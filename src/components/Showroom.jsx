import React from 'react';
import { siteConfig } from '../config/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Car, Shield, Sparkles } from 'lucide-react';

export default function Showroom({ onBookAppointmentClick }) {
  const { showroom, contact } = siteConfig;

  return (
    <section id="showroom" className="py-24 md:py-32 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Experience"
            title={showroom.title}
            subtitle={showroom.tagline}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Showroom Image & Lounge Highlight */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl group"
                style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card)' }}
              >
                <img
                  src="/images/showroom.webp"
                  alt="Aurum Jewels Flagship Showroom and Private VIP Lounge"
                  loading="lazy"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Overlaid Badge */}
                <div
                  className="absolute bottom-6 left-6 right-6 p-5 rounded-xl backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg"
                  style={{
                    backgroundColor: 'rgba(18,20,26,0.88)',
                    border: '1px solid var(--border-gold)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(197,155,75,0.15)', border: '1px solid var(--border-gold)' }}
                    >
                      <Sparkles className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-medium text-white tracking-wide">
                        Private VIP Viewing Lounges
                      </h4>
                      <p className="text-xs text-white/75 font-light leading-relaxed">
                        Enjoy confidential bridal consultations and custom design previews over champagne.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onBookAppointmentClick}
                    className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold btn-gold text-dark-950 whitespace-nowrap cursor-pointer shadow-gold-glow"
                  >
                    Reserve Lounge
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Address, Hours, & Direct Action CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="left">
              <div
                className="p-7 sm:p-8 rounded-2xl shadow-xl space-y-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 4px 24px -4px rgba(28,26,23,0.06)',
                }}
              >
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: 'rgba(197,155,75,0.08)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--gold-primary)',
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--gold-primary)' }}>
                      Showroom Address
                    </h4>
                    <p className="text-sm font-normal leading-relaxed" style={{ color: 'var(--text-heading)' }}>
                      {showroom.addressLine1},<br />
                      {showroom.addressLine2},<br />
                      {showroom.city}, {showroom.state} {showroom.postalCode}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 text-xs font-light" style={{ color: 'var(--text-muted)' }}>
                      <Car className="w-3.5 h-3.5" style={{ color: 'var(--gold-primary)' }} />
                      <span>Complimentary Valet Parking Available</span>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 pt-5" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: 'rgba(197,155,75,0.08)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--gold-primary)',
                    }}
                  >
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--gold-primary)' }}>
                      Operating Hours
                    </h4>
                    <p className="text-xs sm:text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                      {showroom.openingHours.weekdays}
                    </p>
                    <p className="text-xs sm:text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                      {showroom.openingHours.sunday}
                    </p>
                    <p className="text-[11px] mt-1 italic font-light" style={{ color: 'var(--gold-primary)' }}>
                      {showroom.openingHours.note}
                    </p>
                  </div>
                </div>

                {/* Phone Concierge */}
                <div className="flex items-start gap-4 pt-5" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: 'rgba(197,155,75,0.08)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--gold-primary)',
                    }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--gold-primary)' }}>
                      Showroom Concierge
                    </h4>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-heading)' }}>
                      {contact.phoneDisplay}
                    </p>
                    <p className="text-xs font-light" style={{ color: 'var(--text-muted)' }}>
                      Landline: {contact.phoneLandline}
                    </p>
                  </div>
                </div>

                {/* Dual CTAs: WhatsApp & Google Maps */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-full text-xs uppercase tracking-wider font-semibold btn-gold text-dark-950 flex items-center justify-center gap-2 shadow-gold-glow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>

                  <a
                    href={showroom.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-full text-xs uppercase tracking-wider font-medium btn-outline-gold flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" style={{ color: 'var(--gold-primary)' }} />
                    <span>Google Maps</span>
                  </a>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
