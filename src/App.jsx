import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { siteConfig } from './config/site';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import SignatureCollection from './components/SignatureCollection';
import WhyChooseUs from './components/WhyChooseUs';
import Showcase from './components/Showcase';
import BridalSection from './components/BridalSection';
import OurStory from './components/OurStory';
import Appointment from './components/Appointment';
import Showroom from './components/Showroom';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import Toast from './components/Toast';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');
  const [appointmentCategory, setAppointmentCategory] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const scrollToAppointment = (category = '') => {
    if (category) setAppointmentCategory(category);

    const el = document.getElementById('appointment');

    if (el) {
      const offset = 80;

      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: 'smooth',
      });

      setTimeout(() => {
        const n = document.getElementById('name');
        if (n) n.focus();
      }, 700);
    }
  };

  const handleSelectCollection = (categoryName) => {
    setSelectedCategoryFilter(categoryName);

    const el = document.getElementById('showcase');

    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleDiscoverCraft = () => {
    const el = document.getElementById('our-story');

    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleExploreBridal = () => handleSelectCollection('Bridal');

  return (
    <div
      className="min-h-screen flex flex-col font-sans overflow-x-hidden"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-body)',
      }}
    >
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onBookAppointmentClick={() => scrollToAppointment()}
      />

      <main className="flex-grow">
        <Hero
          theme={theme}
          onBookAppointmentClick={() => scrollToAppointment()}
        />

        <Collections onSelectCollection={handleSelectCollection} />

        <SignatureCollection
          onDiscoverCraftClick={handleDiscoverCraft}
        />

        <WhyChooseUs />

        <Showcase
          selectedCategory={selectedCategoryFilter}
          onEnquireProduct={(product) =>
            setSelectedProductForModal(product)
          }
        />

        <BridalSection
          onBookAppointmentClick={() =>
            scrollToAppointment('Bridal Jewellery Consultation')
          }
          onExploreBridalClick={handleExploreBridal}
        />

        <OurStory />

        <Appointment
          initialCategory={appointmentCategory}
          onShowToast={(msg) => setToastMessage(msg)}
        />

        <Showroom
          onBookAppointmentClick={() =>
            scrollToAppointment('Showroom Private Tour')
          }
        />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <aside
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40"
      >
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
            'Hello Aurum Jewels, I would like to connect with a jewellery specialist.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Aurum Jewels on WhatsApp"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full border shadow-[0_6px_25px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-gold)',
            color: 'var(--gold-primary)',
          }}
        >
          <MessageCircle
            className="w-5 h-5 flex-shrink-0"
            style={{ color: 'var(--gold-primary)' }}
          />

          <span
            className="hidden sm:inline-block pr-1 text-[11px] uppercase tracking-[0.16em] font-medium transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {selectedProductForModal && (
        <EnquiryModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          onBookAppointment={(category) =>
            scrollToAppointment(category)
          }
        />
      )}

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}