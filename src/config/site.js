/**
 * Aurum Jewels — Centralized Configuration
 * 
 * All business details, contact information, showroom hours, 
 * collection items, and showcase products are defined here.
 * Rebrand this file to instantly customize the site for any jewellery client.
 */

export const siteConfig = {
  brand: {
    name: "Aurum Jewels",
    monogram: "AJ",
    tagline: "Timeless Jewellery. Made for Your Moments.",
    shortDescription: "A premier Indian luxury jewellery showroom specializing in hallmarked gold, certified solitaire diamonds, opulent royal bridal sets, and bespoke custom design.",
    foundedYear: 1998,
    founderQuote: "Jewellery is never merely an adornment; it is an heirloom of memory, passed down from one cherished moment to the next.",
  },

  contact: {
    phone: "+91 98765 43210",
    phoneLandline: "+91 (022) 2640-8899",
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210", // Raw digits with country code for WhatsApp link
    whatsappDisplay: "+91 98765 43210",
    email: "concierge@aurumjewels.com",
    appointmentEmail: "appointments@aurumjewels.com",
  },

  showroom: {
    title: "Visit Our Flagship Showroom",
    tagline: "Experience the Brilliance in Person",
    addressLine1: "Plot 42, Heritage Boulevard",
    addressLine2: "Opp. Grand Opera House, Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400050",
    country: "India",
    fullAddress: "Plot 42, Heritage Boulevard, Opp. Grand Opera House, Bandra West, Mumbai, Maharashtra 400050",
    openingHours: {
      weekdays: "Monday – Saturday: 10:30 AM – 8:30 PM",
      sunday: "Sunday: 11:00 AM – 7:00 PM",
      note: "Private VIP consultation rooms available upon prior reservation.",
    },
    googleMapsUrl: "https://maps.google.com/?q=Bandra+West+Mumbai+Jewellery",
    valetParkingAvailable: true,
  },

  socialLinks: [
    { name: "Instagram", href: "https://instagram.com", handle: "@aurumjewels.official" },
    { name: "Facebook", href: "https://facebook.com", handle: "AurumJewelsHeritage" },
    { name: "Pinterest", href: "https://pinterest.com", handle: "AurumJewelsBespoke" },
    { name: "YouTube", href: "https://youtube.com", handle: "AurumJewelsStudio" },
  ],

  stats: [
    {
      value: "25+",
      label: "Years of Craftsmanship",
      description: "Dedicated to the finest Indian goldsmithing tradition since 1998",
    },
    {
      value: "10,000+",
      label: "Happy Customers",
      description: "Generations of families trusting us with their milestone celebrations",
    },
    {
      value: "100%",
      label: "Hallmarked Gold",
      description: "BIS 916 certified purity with laser hallmark on every single piece",
    },
  ],

  whyChooseUs: [
    {
      id: "hallmarked-gold",
      title: "BIS Hallmarked Gold",
      description: "Purity you can trust, crafted with complete transparency.",
      detail: "Every gram of our gold jewellery bears the government-authorized BIS hallmark and 6-digit HUID code for absolute authenticity.",
      iconName: "ShieldCheck",
    },
    {
      id: "certified-diamonds",
      title: "Certified Diamonds",
      description: "Carefully selected diamonds accompanied by trusted certification.",
      detail: "Every natural solitaire and diamond jewel is graded and certified by world-recognized authorities including IGI and GIA.",
      iconName: "Gem",
    },
    {
      id: "custom-designs",
      title: "Custom Designs",
      description: "Bring your vision to life with jewellery designed around you.",
      detail: "Collaborate directly with our master designers to translate your family heritage or contemporary dream into a one-of-a-kind jewel.",
      iconName: "Sparkles",
    },
    {
      id: "trusted-craftsmanship",
      title: "Trusted Craftsmanship",
      description: "Attention to detail that turns fine jewellery into lasting memories.",
      detail: "Over two decades of meticulous artisanal bench work, ensuring flawless prong settings, comfortable daily wear, and lasting heirloom value.",
      iconName: "Award",
    },
  ],

  collections: [
    {
      id: "gold",
      title: "Gold Jewellery",
      category: "Gold",
      description: "Pure 22 Karat gold creations shaped by centuries-old Indian heritage and modern sculptural aesthetics.",
      image: "/images/collection-gold.webp",
      tag: "BIS 916 Pure",
    },
    {
      id: "diamond",
      title: "Diamond Jewellery",
      category: "Diamond",
      description: "Brilliant-cut diamonds set in luminous white and rose gold, radiating unmatched clarity and fire.",
      image: "/images/collection-diamond.webp",
      tag: "IGI / GIA Certified",
    },
    {
      id: "bridal",
      title: "Bridal Collection",
      category: "Bridal",
      description: "Grand choker sets, polki neckpieces, and maang tikkas curated for the unforgettable wedding journey.",
      image: "/images/collection-bridal.webp",
      tag: "Royal Heritage",
    },
    {
      id: "rings",
      title: "Rings",
      category: "Rings",
      description: "Timeless engagement solitaires, royal statement cocktail rings, and delicate everyday bands.",
      image: "/images/collection-rings.webp",
      tag: "Hand-Set Solitaires",
    },
    {
      id: "necklaces",
      title: "Necklaces",
      category: "Necklaces",
      description: "From graceful collar chains to grand multistrand rani haars that make every entrance memorable.",
      image: "/images/collection-necklaces.webp",
      tag: "Artisanal Chokers",
    },
    {
      id: "bangles",
      title: "Bangles",
      category: "Bangles",
      description: "Handcrafted temple kadas, intricately carved gold bangles, and sparkling diamond tennis bracelets.",
      image: "/images/collection-bangles.webp",
      tag: "Traditional Kadas",
    },
  ],

  signatureCollection: {
    eyebrow: "Atelier Showcase",
    heading: "The Art of Timeless Craft",
    copy: "Every piece begins with a vision — shaped by skilled hands, refined through detail and created to be treasured for generations.",
    image: "/images/signature-craft.webp",
    craftPillars: [
      {
        title: "Purity of Raw Gold",
        description: "Strictly authenticated 22K & 18K alloys blended for enduring luster.",
      },
      {
        title: "Artisanal Hand-Setting",
        description: "Individual prong and bezel placement executed under 40x stereoscopic magnification.",
      },
      {
        title: "Generational Heirlooms",
        description: "Designed with enduring weight, structural balance, and everlasting value.",
      },
    ],
    ctaText: "Discover Our Craft",
  },

  showcaseProducts: [
    {
      id: "heritage-gold-necklace",
      name: "Heritage Gold Necklace",
      category: "Gold",
      purity: "22K BIS Hallmarked",
      description: "Intricately detailed filigree gold necklace featuring delicate floral motifs and handcrafted drop beads.",
      image: "/images/product-heritage-necklace.webp",
      badge: "Signature Piece",
    },
    {
      id: "solitaire-diamond-ring",
      name: "Solitaire Diamond Ring",
      category: "Diamond",
      purity: "18K White Gold | 1.5ct Solitaire",
      description: "Flawless round brilliant-cut diamond certified by GIA, mounted on a diamond pavé cathedral setting.",
      image: "/images/product-solitaire-ring.webp",
      badge: "GIA Certified",
    },
    {
      id: "royal-bridal-set",
      name: "Royal Bridal Set",
      category: "Bridal",
      purity: "22K Yellow Gold & Uncut Polki",
      description: "Grand bridal choker ensemble adorned with natural emerald drops, uncut polki diamonds, and matching jhumkas.",
      image: "/images/product-bridal-set.webp",
      badge: "Bridal Masterpiece",
    },
    {
      id: "classic-gold-bangles",
      name: "Classic Gold Bangles",
      category: "Gold",
      purity: "22K BIS Hallmarked Pair",
      description: "Traditional embossed floral pattern pair of kadas crafted with a comfortable screw-lock mechanism.",
      image: "/images/product-gold-bangles.webp",
      badge: "Timeless Classic",
    },
    {
      id: "signature-diamond-earrings",
      name: "Signature Diamond Earrings",
      category: "Diamond",
      purity: "18K Rose Gold | VVS Clarity",
      description: "Cascading chandelier drops set with brilliant-cut diamonds designed to dance with every movement.",
      image: "/images/product-diamond-earrings.webp",
      badge: "Evening Glamour",
    },
    {
      id: "contemporary-gold-ring",
      name: "Contemporary Gold Ring",
      category: "Gold",
      purity: "18K Yellow Gold",
      description: "Architectural geometric band blending matte satin finish with high-polish bevelled gold contours.",
      image: "/images/product-contemporary-ring.webp",
      badge: "Modern Luxury",
    },
  ],

  bridalFeature: {
    eyebrow: "The Wedding Atelier",
    headline: "For The Moments That Deserve Forever.",
    copy: "From the first celebration to the wedding day, discover jewellery crafted to make every chapter unforgettable.",
    subtext: "Our bridal consultants work closely with brides and their families to coordinate matching trousseau jewellery, custom waistbands (kamarbandh), maang tikkas, and heirloom royal neckpieces.",
    ctaText: "Explore Bridal Collection",
    image: "/images/bridal-feature.webp",
    perks: [
      "Dedicated Private Bridal Lounge",
      "Custom Trousseau Colour Matching",
      "Family Heirloom Redesign Consultation",
    ],
  },

  ourStory: {
    eyebrow: "Our Heritage",
    heading: "A Tradition of Craftsmanship",
    content: "Aurum Jewels brings together timeless Indian jewellery traditions and contemporary design. Every creation is thoughtfully crafted with a focus on purity, detail and lasting beauty.",
    extendedStory: "Founded with the ambition to honor India's rich goldsmithing lineage, our atelier collaborates with multi-generational karigars (craftsmen) who have preserved age-old techniques such as jadau, polki setting, and meenakari enameling. We balance this historic devotion with modern precision casting to deliver pieces that feel featherlight yet structurally immortal.",
    image: "/images/story-craft.webp",
  },

  appointment: {
    eyebrow: "Bespoke Consultation",
    heading: "Find Your Perfect Piece",
    text: "Tell us what you're looking for and our jewellery specialists will help you find or create something truly special.",
    options: [
      "Bridal Jewellery Consultation",
      "Diamond Solitaire & Engagement",
      "Daily Wear & Contemporary Gold",
      "Bespoke Custom Design",
      "Heirloom Restyling & Repair",
      "Showroom Private Tour",
    ],
  },

  navLinks: [
    { label: "Collections", href: "#collections" },
    { label: "Signature Craft", href: "#signature" },
    { label: "Why Us", href: "#why-us" },
    { label: "Showcase", href: "#showcase" },
    { label: "Bridal", href: "#bridal" },
    { label: "Our Story", href: "#our-story" },
    { label: "Showroom", href: "#showroom" },
  ],
};
