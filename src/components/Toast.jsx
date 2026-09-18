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
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full transition-all duration-300">
      <div
        className="p-4 rounded-xl shadow-2xl flex items-start gap-3 backdrop-blur-md"
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-gold)',
          boxShadow: '0 10px 35px -5px rgba(0,0,0,0.18)',
        }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{
            backgroundColor: 'rgba(197,155,75,0.12)',
            border: '1px solid var(--border-gold)',
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: 'var(--gold-primary)' }} />
        </div>
        <div className="flex-1 text-xs font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {message}
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-sm transition-opacity hover:opacity-75 cursor-pointer"
          style={{ color: 'var(--text-muted)' }}
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
