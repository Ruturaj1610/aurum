import React from 'react';
import { siteConfig } from '../config/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Car, Shield, Sparkles } from 'lucide-react';

export default function Showroom({ onBookAppointmentClick }) {
  const { showroom, contact } = siteConfig;

  return (
    <section id="showroom" className="py-24 md:py-32 bg-dark-900 relative">
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
              <div className="relative rounded-2xl overflow-hidden border border-dark-750/80 shadow-2xl group bg-dark-850">
                <img
                  src="/images/showroom.webp"
                  alt="Aurum Jewels Flagship Showroom and Private VIP Lounge"
                  loading="lazy"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-dark-900/85 backdrop-blur-md border border-gold-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-400/20 border border-gold-400/50 flex items-center justify-center text-gold-300 flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-semibold text-ivory-50 tracking-wide">
                        Private VIP Viewing Lounges
                      </h4>
                      <p className="text-xs text-ivory-400 font-light">
                        Enjoy confidential bridal consultations and custom design previews over champagne.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onBookAppointmentClick}
                    className="px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold btn-gold text-dark-950 whitespace-nowrap cursor-pointer"
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
              <div className="p-8 rounded-2xl bg-dark-850 border border-dark-750/90 shadow-dark-card space-y-6">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                      Showroom Address
                    </h4>
                    <p className="text-sm text-ivory-100 font-normal leading-relaxed">
                      {showroom.addressLine1},<br />
                      {showroom.addressLine2},<br />
                      {showroom.city}, {showroom.state} {showroom.postalCode}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-ivory-400">
                      <Car className="w-3.5 h-3.5 text-gold-400" />
                      <span>Complimentary Valet Parking Available</span>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 pt-5 border-t border-dark-750">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                      Operating Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-ivory-200 font-light">
                      {showroom.openingHours.weekdays}
                    </p>
                    <p className="text-xs sm:text-sm text-ivory-300 font-light">
                      {showroom.openingHours.sunday}
                    </p>
                    <p className="text-[11px] text-gold-400/80 mt-1 italic font-light">
                      {showroom.openingHours.note}
                    </p>
                  </div>
                </div>

                {/* Phone Concierge */}
                <div className="flex items-start gap-4 pt-5 border-t border-dark-750">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                      Showroom Concierge
                    </h4>
                    <p className="text-sm text-ivory-100 font-medium">
                      {contact.phoneDisplay}
                    </p>
                    <p className="text-xs text-ivory-400 font-light">
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
                    className="px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold btn-gold text-dark-950 flex items-center justify-center gap-2 shadow-gold-glow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>

                  <a
                    href={showroom.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-medium btn-outline-gold flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4 text-gold-400" />
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
