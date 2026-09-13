import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';

export default function Showcase({ onEnquireProduct, selectedCategory = 'All' }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Gold', 'Diamond', 'Bridal'];
  const filteredProducts =
    activeFilter === 'All'
      ? siteConfig.showcaseProducts
      : siteConfig.showcaseProducts.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section
      id="showcase"
      className="py-24 md:py-32 relative"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'var(--gold-glow-sm)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Exclusive Showcase"
            title="Pieces Worth Remembering"
            subtitle="An intimate selection of fine handcrafted jewels representing our finest gold work, rare solitaire diamonds, and bridal crowns."
          />
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className="px-6 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer"
                style={
                  activeFilter === category
                    ? {
                        background: 'var(--btn-gold-bg)',
                        color: '#07080A',
                        fontWeight: 600,
                        boxShadow: '0 0 18px var(--gold-glow)',
                      }
                    : {
                        backgroundColor: 'var(--bg-card)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-light)',
                      }
                }
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 80}>
              <div
                className="group rounded-xl overflow-hidden flex flex-col transition-all duration-500"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 4px 20px -4px rgba(28,26,23,0.07)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(197,155,75,0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px -8px var(--gold-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = '0 4px 20px -4px rgba(28,26,23,0.07)';
                }}
              >
                {/* Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <img
                    src={product.image}
                    alt={`${product.name} — Aurum Jewels`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold backdrop-blur-md"
                      style={{ backgroundColor: 'rgba(12,13,17,0.85)', border: '1px solid var(--border-gold)', color: 'var(--gold-bright)' }}
                    >
                      <Sparkles className="w-3 h-3" />
                      {product.badge}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-widest backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(12,13,17,0.7)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(12,13,17,0.35)' }}>
                    <button
                      onClick={() => onEnquireProduct(product)}
                      className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium flex items-center gap-2 shadow-lg transition-all"
                      style={{ backgroundColor: 'rgba(12,13,17,0.9)', color: 'white', border: '1px solid var(--border-gold)' }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View & Enquire</span>
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] font-medium mb-1.5" style={{ color: 'var(--gold-primary)' }}>
                      {product.purity}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif mb-2.5 transition-colors" style={{ color: 'var(--text-heading)' }}>
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-light leading-relaxed line-clamp-2 mb-6" style={{ color: 'var(--text-muted)' }}>
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3" style={{ borderTop: '1px solid var(--border-light)' }}>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider block" style={{ color: 'var(--text-faint)' }}>Pricing</span>
                      <span className="text-xs sm:text-sm font-medium tracking-wide" style={{ color: 'var(--gold-primary)' }}>
                        Enquire for Details
                      </span>
                    </div>
                    <button
                      onClick={() => onEnquireProduct(product)}
                      className="px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold btn-outline-gold flex items-center gap-1.5 group/btn cursor-pointer"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
