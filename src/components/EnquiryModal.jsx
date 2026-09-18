import React from 'react';
import { siteConfig } from '../config/site';
import { X, MessageCircle, Calendar, ShieldCheck, Sparkles } from 'lucide-react';

export default function EnquiryModal({ product, onClose, onBookAppointment }) {
  if (!product) return null;

  const handleWhatsAppEnquiry = () => {
    const text = `Hello Aurum Jewels,\n\nI am inquiring about the *${product.name}* (${product.category} — ${product.purity}) from your online catalogue.\n\nCould you please share more details regarding availability, customization, and booking a private viewing?\n\nThank you!`;
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleBookViewing = () => {
    onClose();
    if (onBookAppointment) {
      onBookAppointment(product.category);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className="relative w-full max-w-2xl border rounded-2xl shadow-2xl overflow-hidden z-10 my-8 transition-colors"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-gold)',
          boxShadow: '0 20px 60px -15px rgba(0,0,0,0.3)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
          style={{
            backgroundColor: 'rgba(12,13,17,0.6)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#FFFFFF',
          }}
          aria-label="Close product preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative h-64 md:h-full min-h-[280px]" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
            <div className="absolute top-4 left-4">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold backdrop-blur-md shadow-sm"
                style={{ backgroundColor: 'rgba(12,13,17,0.85)', border: '1px solid var(--border-gold)', color: 'var(--gold-bright)' }}
              >
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>{product.badge}</span>
              </span>
            </div>
          </div>

          {/* Product Information */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold block mb-1" style={{ color: 'var(--gold-primary)' }}>
                {product.category} Collection
              </span>

              <h3 className="text-2xl font-serif mb-2.5 font-normal" style={{ color: 'var(--text-heading)' }}>
                {product.name}
              </h3>

              <div
                className="inline-block px-3 py-1 rounded-md text-xs font-medium mb-4"
                style={{
                  backgroundColor: 'var(--bg-card-alt)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--gold-primary)',
                }}
              >
                {product.purity}
              </div>

              <p className="text-xs sm:text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {product.description}
              </p>

              <div className="space-y-2 mb-6 text-xs" style={{ color: 'var(--text-muted)' }}>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Certified BIS 916 Hallmark / IGI Diamond</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Complimentary Lifetime Cleaning & Polish</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold btn-gold text-dark-950 flex items-center justify-center gap-2 shadow-gold-glow cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </button>

              <button
                onClick={handleBookViewing}
                className="w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-medium btn-outline-gold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" style={{ color: 'var(--gold-primary)' }} />
                <span>Book In-Person Viewing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
