import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { Calendar, Phone, User, MessageCircle, CheckCircle, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

export default function Appointment({ initialCategory = '', onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: initialCategory || siteConfig.appointment.options[0],
    preferredDate: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  React.useEffect(() => {
    if (initialCategory) setFormData((prev) => ({ ...prev, category: initialCategory }));
  }, [initialCategory]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) newErrors.name = 'Please enter your full name.';
    if (!formData.phone.trim() || !/^[0-9+ ()-]{8,18}$/.test(formData.phone.trim())) newErrors.phone = 'Please enter a valid phone number.';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    const textLines = [
      `*Private Appointment Request — Aurum Jewels*`,
      ``,
      `*Client Name:* ${formData.name.trim()}`,
      `*Contact:* ${formData.phone.trim()}`,
      `*Interested In:* ${formData.category}`,
      `*Preferred Date:* ${formData.preferredDate}`,
      formData.message.trim() ? `*Special Request:* ${formData.message.trim()}` : null,
      ``,
      `_Sent via Aurum Jewels Concierge Portal_`,
    ].filter(Boolean);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(textLines.join('\n'))}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (onShowToast) onShowToast('Appointment details prepared! Opening WhatsApp to connect directly with our specialist.');
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const todayDateString = new Date().toISOString().split('T')[0];

  // Shared input styles
  const inputBase = {
    backgroundColor: 'var(--bg-card)',
    color: 'var(--text-heading)',
    border: '1px solid var(--border-light)',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    width: '100%',
    padding: '12px 16px 12px 40px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };
  const inputError = { borderColor: '#EF4444', boxShadow: '0 0 0 3px rgba(239,68,68,0.15)' };
  const inputFocus = { borderColor: 'var(--gold-primary)', boxShadow: '0 0 0 3px var(--gold-glow-sm)' };

  const handleFocus = (e) => Object.assign(e.target.style, inputFocus);
  const handleBlur = (e) => {
    e.target.style.borderColor = errors[e.target.name] ? '#EF4444' : 'var(--border-light)';
    e.target.style.boxShadow = errors[e.target.name] ? '0 0 0 3px rgba(239,68,68,0.15)' : 'none';
  };

  return (
    <section id="appointment" className="py-24 md:py-32 relative" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none" style={{ backgroundColor: 'var(--gold-glow-sm)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow={siteConfig.appointment.eyebrow}
            title={siteConfig.appointment.heading}
            subtitle={siteConfig.appointment.text}
          />
        </Reveal>

        <Reveal delay={120}>
          <div
            className="rounded-2xl shadow-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)' }}
          >
            {/* Top gold accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent, var(--gold-primary), transparent)' }} />

            {submittedSuccess ? (
              <div className="py-12 text-center max-w-lg mx-auto">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'rgba(197,155,75,0.1)', border: '1px solid var(--border-gold)' }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: 'var(--gold-primary)' }} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif mb-3" style={{ color: 'var(--text-heading)' }}>
                  Appointment Request Sent
                </h3>
                <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                  Your consultation request has been formatted and redirected to WhatsApp. Our senior jewellery specialist will confirm your private viewing time shortly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => { setSubmittedSuccess(false); setFormData({ name: '', phone: '', category: siteConfig.appointment.options[0], preferredDate: '', message: '' }); }}
                    className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold btn-outline-gold"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold btn-gold text-dark-950 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name & Phone row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Full Name <span style={{ color: 'var(--gold-primary)' }}>*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User className="w-4 h-4" style={{ color: 'var(--gold-primary)', opacity: 0.7 }} />
                      </div>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                        placeholder="e.g. Radhika Sharma"
                        style={{ ...inputBase, ...(errors.name ? inputError : {}) }}
                        onFocus={handleFocus} onBlur={handleBlur}
                      />
                    </div>
                    {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /><span>{errors.name}</span></p>}
                  </div>
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Phone Number <span style={{ color: 'var(--gold-primary)' }}>*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Phone className="w-4 h-4" style={{ color: 'var(--gold-primary)', opacity: 0.7 }} />
                      </div>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+91 98765 00000"
                        style={{ ...inputBase, ...(errors.phone ? inputError : {}) }}
                        onFocus={handleFocus} onBlur={handleBlur}
                      />
                    </div>
                    {errors.phone && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /><span>{errors.phone}</span></p>}
                  </div>
                </div>

                {/* Category & Date row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-xs uppercase tracking-wider font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      What are you looking for?
                    </label>
                    <select
                      id="category" name="category" value={formData.category} onChange={handleChange}
                      className="cursor-pointer"
                      style={{ ...inputBase, padding: '12px 16px', backgroundColor: 'var(--bg-card)', color: 'var(--text-heading)' }}
                    >
                      {siteConfig.appointment.options.map((opt) => (
                        <option key={opt} value={opt} style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-heading)' }}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  {/* Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs uppercase tracking-wider font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Preferred Date <span style={{ color: 'var(--gold-primary)' }}>*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Calendar className="w-4 h-4" style={{ color: 'var(--gold-primary)', opacity: 0.7 }} />
                      </div>
                      <input type="date" id="preferredDate" name="preferredDate" min={todayDateString}
                        value={formData.preferredDate} onChange={handleChange}
                        style={{ ...inputBase, ...(errors.preferredDate ? inputError : {}) }}
                        onFocus={handleFocus} onBlur={handleBlur}
                      />
                    </div>
                    {errors.preferredDate && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /><span>{errors.preferredDate}</span></p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Message / Custom Request{' '}
                    <span className="text-[10px] normal-case" style={{ color: 'var(--text-faint)' }}>(Optional)</span>
                  </label>
                  <textarea
                    id="message" name="message" rows="3" value={formData.message} onChange={handleChange}
                    placeholder="Tell us about the occasion, design preferences, or budget considerations..."
                    style={{ ...inputBase, padding: '12px 16px', resize: 'vertical', fontFamily: 'inherit' }}
                    onFocus={handleFocus}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-light" style={{ color: 'var(--text-muted)' }}>
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--gold-primary)' }} />
                    <span>Direct WhatsApp confirmation · Zero spam assurance</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold btn-gold shadow-gold-glow flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <><Clock className="w-4 h-4 animate-spin text-dark-950" /><span>Formatting...</span></>
                    ) : (
                      <><MessageCircle className="w-4 h-4 text-dark-950" /><span>Request Appointment</span></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
