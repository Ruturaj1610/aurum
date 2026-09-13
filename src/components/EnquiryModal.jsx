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
      <div className="relative w-full max-w-2xl bg-dark-900 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-dark-950/70 border border-white/10 text-ivory-300 hover:text-white hover:bg-dark-800 transition-colors"
          aria-label="Close product preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative h-64 md:h-full min-h-[280px] bg-dark-950">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent md:hidden" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-dark-900/90 text-gold-300 border border-gold-500/40 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>{product.badge}</span>
              </span>
            </div>
          </div>

          {/* Product Information */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block mb-1">
                {product.category} Collection
              </span>

              <h3 className="text-2xl font-serif text-ivory-50 mb-2">
                {product.name}
              </h3>

              <div className="inline-block px-2.5 py-1 rounded bg-dark-850 border border-dark-750 text-xs text-gold-300 font-medium mb-4">
                {product.purity}
              </div>

              <p className="text-ivory-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="space-y-2 mb-6 text-xs text-ivory-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>Certified BIS 916 Hallmark / IGI Diamond</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Complimentary Lifetime Cleaning & Polish</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-dark-750">
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-3 rounded-full text-xs uppercase tracking-wider font-semibold btn-gold text-dark-950 flex items-center justify-center gap-2 shadow-gold-glow cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </button>

              <button
                onClick={handleBookViewing}
                className="w-full py-3 rounded-full text-xs uppercase tracking-wider font-medium btn-outline-gold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Book In-Person Viewing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
