import React from 'react';
import { siteConfig } from '../config/site';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ShieldCheck, 
  Sparkles,
  Award
} from 'lucide-react';

// Custom Crisp Brand SVGs
const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-ivory-300 border-t border-dark-750/70 relative overflow-hidden">
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Trust & Certification Strip */}
      <div className="border-b border-dark-800/80 py-8 bg-dark-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-5 h-5 text-gold-400 mb-2" />
              <span className="text-xs uppercase tracking-widest text-ivory-100 font-semibold">100% BIS Hallmarked</span>
              <span className="text-[11px] text-ivory-400 mt-0.5 font-light">Government HUID Assured</span>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-5 h-5 text-gold-400 mb-2" />
              <span className="text-xs uppercase tracking-widest text-ivory-100 font-semibold">Certified Diamonds</span>
              <span className="text-[11px] text-ivory-400 mt-0.5 font-light">IGI & GIA Graded Solitaires</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-5 h-5 text-gold-400 mb-2" />
              <span className="text-xs uppercase tracking-widest text-ivory-100 font-semibold">Bespoke Artisanship</span>
              <span className="text-[11px] text-ivory-400 mt-0.5 font-light">Master Karigar Benchwork</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-lg text-gold-400 font-bold mb-1">AJ</span>
              <span className="text-xs uppercase tracking-widest text-ivory-100 font-semibold">Insured Transit</span>
              <span className="text-[11px] text-ivory-400 mt-0.5 font-light">Safe & Discreet Handling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-400/60 flex items-center justify-center bg-dark-850 shadow-gold-glow">
                <span className="font-cinzel text-base font-bold text-gold-400">
                  {siteConfig.brand.monogram}
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl font-normal tracking-[0.18em] uppercase text-ivory-50 block">
                  {siteConfig.brand.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.28em] text-gold-400 font-sans block -mt-1">
                  Haute Joaillerie
                </span>
              </div>
            </div>

            <p className="text-ivory-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              {siteConfig.brand.shortDescription}
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-ivory-300 block mb-3 font-semibold">
                Follow The Atelier
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Aurum Jewels on Instagram"
                  className="w-9 h-9 rounded-full bg-dark-850 border border-dark-750 flex items-center justify-center text-ivory-300 hover:text-gold-300 hover:border-gold-400/50 hover:bg-dark-800 transition-all hover:scale-105"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Aurum Jewels on Facebook"
                  className="w-9 h-9 rounded-full bg-dark-850 border border-dark-750 flex items-center justify-center text-ivory-300 hover:text-gold-300 hover:border-gold-400/50 hover:bg-dark-800 transition-all hover:scale-105"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Aurum Jewels on YouTube"
                  className="w-9 h-9 rounded-full bg-dark-850 border border-dark-750 flex items-center justify-center text-ivory-300 hover:text-gold-300 hover:border-gold-400/50 hover:bg-dark-800 transition-all hover:scale-105"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Collections Column (Col 6-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base uppercase tracking-widest text-ivory-50 font-semibold">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-400 font-light">
              {siteConfig.collections.map((item) => (
                <li key={item.id}>
                  <a
                    href="#collections"
                    className="hover:text-gold-300 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base uppercase tracking-widest text-ivory-50 font-semibold">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-400 font-light">
              <li>
                <a href="#our-story" className="hover:text-gold-300 transition-colors">
                  Our Heritage & Story
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-gold-300 transition-colors">
                  Artisanal Craftsmanship
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-300 transition-colors">
                  Purity & Certification
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-gold-300 transition-colors">
                  Bridal Trouseau Lounge
                </a>
              </li>
              <li>
                <a href="#showroom" className="hover:text-gold-300 transition-colors">
                  Bandra West Showroom
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base uppercase tracking-widest text-ivory-50 font-semibold">
              Showroom Concierge
            </h4>
            <div className="space-y-3 text-xs text-ivory-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.showroom.addressLine1}, {siteConfig.showroom.addressLine2}, {siteConfig.showroom.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold-300 transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-300 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="mt-16 pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-500 font-light">
          <p>
            © {currentYear} {siteConfig.brand.name}. All rights reserved. Portfolio & showroom demonstration website.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-850 hover:bg-dark-800 text-ivory-300 hover:text-gold-300 border border-dark-750 transition-colors cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
