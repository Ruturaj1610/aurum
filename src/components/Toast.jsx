import React, { useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-slide-up">
      <div className="p-4 rounded-xl bg-dark-850 border border-gold-400/40 shadow-2xl flex items-start gap-3 backdrop-blur-md">
        <div className="w-8 h-8 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-300 flex-shrink-0 mt-0.5">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex-1 text-xs text-ivory-200 font-light leading-relaxed">
          {message}
        </div>
        <button
          onClick={onClose}
          className="text-ivory-400 hover:text-white p-1 rounded-sm"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
