/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Globe, 
  FileText, 
  MonitorSmartphone, 
  Zap, 
  Users, 
  BadgeDollarSign, 
  ShieldCheck,
  Send,
  Calculator,
  CheckCircle2,
  Phone,
  Mail,
  Menu,
  X,
  Languages,
  ArrowRight,
  Briefcase,
  PenTool,
  Headphones,
  Settings,
  Trash2
} from 'lucide-react';

// --- Components ---

const TwoWayChatIcon = ({ size = 32, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Back bubble */}
    <path d="M17 15C13.5 15 10.5 12.5 10.5 9.5C10.5 6.5 13.5 4 17 4C20.5 4 23.5 6.5 23.5 9.5C23.5 10.5 23.1 11.5 22.5 12.3L23.5 15L20.8 14.3C19.7 14.8 18.4 15 17 15Z" fill="currentColor" />
    <circle cx="14.5" cy="9.5" r="1" fill="#008A27" />
    <circle cx="17" cy="9.5" r="1" fill="#008A27" />
    <circle cx="19.5" cy="9.5" r="1" fill="#008A27" />
    
    {/* Front bubble */}
    <path d="M8 21C4 21 0.5 18 0.5 14C0.5 10 4 7 8 7C12 7 15.5 10 15.5 14C15.5 15.5 14.9 16.9 13.9 18L15.5 21L12.5 20.1C11.1 20.7 9.6 21 8 21Z" fill="#008A27" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="4.5" cy="14" r="1" fill="currentColor" />
    <circle cx="8" cy="14" r="1" fill="currentColor" />
    <circle cx="11.5" cy="14" r="1" fill="currentColor" />
  </svg>
);

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full z-50 transition-all duration-300 bg-white shadow-md">
      {/* Top Contact Bar */}
      <div className="bg-tez-blue text-white/90 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6">
          <a href="mailto:tezsupport@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} className="text-tez-green-light" />
            tezsupport@gmail.com
          </a>
          <a href="tel:+919975493247" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} className="text-tez-green-light" />
            +91 99754 93247
          </a>
          <a href="https://wa.me/919975493247" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <WhatsAppIcon size={14} className="text-tez-green-light" />
            WhatsApp: +91 99754 93247
          </a>
        </div>
      </div>

      <nav className="py-3 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 relative w-[260px] md:w-[360px] h-[64px] md:h-[80px]">
              <div className="absolute top-[-20px] md:top-[-28px] left-0 z-[100] bg-white border-4 border-tez-green shadow-xl rounded-2xl flex items-center justify-center overflow-hidden w-[260px] md:w-[360px] h-[120px] md:h-[140px]">
                <img 
                  src="/logo01.png" 
                  alt="Tez Translation Services - Certified Document Translation Logo" 
                  className="h-[240px] md:h-[320px] w-auto object-contain max-w-none flex-shrink-0"
                  onError={(e) => {
                    const wrapper = e.currentTarget.parentElement;
                    if (wrapper) {
                      wrapper.style.display = 'none';
                      const fallback = wrapper.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }
                  }}
                />
              </div>
              <div className="items-center gap-2" style={{ display: 'none' }}>
                <span className="text-3xl font-bold tracking-tighter text-tez-blue">
                  <span className="italic">Tez</span>
                </span>
                <span className="text-sm font-semibold leading-tight text-gray-600">
                  TRANSLATION<br/>SERVICES
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="font-medium text-gray-700 hover:text-tez-green transition-colors">Services</a>
              <a href="#languages" className="font-medium text-gray-700 hover:text-tez-green transition-colors">Languages</a>
              <a href="#why-us" className="font-medium text-gray-700 hover:text-tez-green transition-colors">Why Us</a>
              <a href="#process" className="font-medium text-gray-700 hover:text-tez-green transition-colors">Process</a>
              <a href="#about" className="font-medium text-gray-700 hover:text-tez-green transition-colors">About Us</a>
              <a 
                href="https://wa.me/919975493247?text=Hello%2C%20I%20need%20translation%20service.%20Please%20share%20details%20for%20pricing%20and%20delivery."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-110 bg-tez-green text-white hover:bg-tez-green-dark shadow-md flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={18} />
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900" aria-label="Toggle mobile menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full">
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-800 font-medium hover:text-tez-green">Services</a>
              <a href="#languages" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-800 font-medium hover:text-tez-green">Languages</a>
              <a href="#why-us" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-800 font-medium hover:text-tez-green">Why Us</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-800 font-medium hover:text-tez-green">Process</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-800 font-medium hover:text-tez-green">About Us</a>
              <a 
                href="https://wa.me/919975493247?text=Hello%2C%20I%20need%20translation%20service.%20Please%20share%20details%20for%20pricing%20and%20delivery."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 bg-tez-green text-white px-5 py-3 rounded-xl font-medium shadow-md flex items-center justify-center transition-all transform hover:scale-105 gap-2"
              >
                <WhatsAppIcon size={20} />
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-br from-tez-blue-dark via-tez-blue to-tez-blue-light">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-tez-green/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white lg:col-span-7"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] mb-6 tracking-tight">
              Fast, Accurate & Reliable Indian Language <span className="text-tez-green-light">Translation</span> for PR & Business Needs
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Specialized in PR, Media & Business Content. We help brands communicate effectively with regional audiences across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/919975493247?text=Hello%2C%20I%20need%20translation%20service.%20Please%20share%20details%20for%20pricing%20and%20delivery."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-tez-green hover:bg-tez-green-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-tez-green/30"
              >
                <WhatsAppIcon size={24} />
                Get Instant Quote on WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-tez-green-light" />
              Share your file on WhatsApp & get a quote and Translation quickly
            </p>
            <p className="mt-6 text-base md:text-lg text-white/90 font-medium italic border-l-4 border-tez-green-light pl-4 py-1 max-w-xl">
              "Delivering fast, accurate and confidential translations trusted by PR agencies for over 20 years."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:col-span-5 flex flex-col"
          >
            <div className="mb-3">
              <p className="text-tez-green-light font-display font-bold text-xl md:text-2xl tracking-tight mb-2">
                Trusted by PR Agencies Across India
              </p>
            </div>
            <div className="mb-6 self-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-tez-green animate-pulse"></span>
                <span className="text-sm font-medium text-white">Professional Indian Language Experts</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Top Tags */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-tez-green/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-white/20 uppercase tracking-wider">
                  ⚡ Fast Turnaround
                </div>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-tez-green/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-white/20 uppercase tracking-wider">
                  ⚡ Same Day Delivery Available
                </div>
              </div>

              <img 
                src="/TopOne.png" 
                alt="Group of Indian professionals working together on Website Localization and Translation" 
                className="w-full h-[350px] lg:h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tez-blue-dark/80 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tez-green flex items-center justify-center shrink-0">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Native Experts</p>
                  <p className="text-white/80 text-sm">100% culturally relevant</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { 
      icon: <FileText size={28} />, 
      title: "Document Translation", 
      desc: "Accurate and culturally nuanced translation for all your official and business documents.",
      items: [
        "Press Releases",
        "Business Contracts",
        "Marketing Materials (Brochures, Flyers)",
        "Reports & Presentations"
      ]
    },
    { 
      icon: <Globe size={28} />, 
      title: "Website & Content Localization", 
      desc: "Localization adapts your content for regional audiences, ensuring it feels native and engaging.",
      items: [
        "Website translation",
        "Landing pages",
        "E-commerce product descriptions",
        "App content"
      ]
    },
    { 
      icon: <PenTool size={28} />, 
      title: "Content Writing + Translation", 
      desc: "Original writing and translation to maintain your brand voice across all languages.",
      items: [
        "English content writing",
        "Multilingual content creation",
        "Blog writing & translation",
        "PR content creation"
      ]
    },
    { 
      icon: <Headphones size={28} />, 
      title: "Audio & Video Services", 
      desc: "Make your multimedia content accessible to diverse regional audiences across India.",
      items: [
        "Audio transcription",
        "Video transcription",
        "Subtitling",
        "Voice-over / dubbing"
      ]
    },
    { 
      icon: <Settings size={28} />, 
      title: "Advanced Services", 
      desc: "Comprehensive technical and formatting solutions for complex localization projects.",
      items: [
        "Software & App localization",
        "Multilingual desktop publishing (formatting)",
        "Proofreading & editing"
      ]
    },
    { 
      icon: <CheckCircle2 size={28} />, 
      title: "Certified Translation", 
      desc: "Sworn and certified translations for official, legal, and immigration purposes.",
      items: [
        "Visa & Immigration documents",
        "Academic certificates",
        "Legal contracts & deeds",
        "Notarized translations"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-tez-green font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialized Translation Services</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete multilingual solutions under one roof.<br />
            High-quality localization for businesses and PR agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-tez-blue flex items-center justify-center text-white group-hover:bg-tez-green transition-colors mb-6 shrink-0">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.desc}</p>
              <ul className="space-y-3 mt-auto">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-tez-green mt-0.5 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LanguagesSection = () => {
  const languages = [
    "Hindi", "Marathi", "Gujarati", "Tamil", "Telugu", 
    "Bengali", "Kannada", "Malayalam", "Punjabi", "Odia",
    "Assamese", "Urdu", "Bhojpuri", "Maithili", "+ More"
  ];

  return (
    <section id="languages" className="py-24 bg-tez-blue-dark text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tez-blue-light/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tez-green/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-tez-green-light font-semibold tracking-wide uppercase text-sm mb-2">Languages</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">We Speak India</h3>
            <p className="text-gray-300 text-lg mb-6">
              Our extensive network of native language experts covers all major Indian languages, ensuring your message resonates authentically.
            </p>
            <button className="text-tez-green-light font-semibold flex items-center gap-2 hover:text-white transition-colors" aria-label="View all supported languages">
              View all supported languages <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="lg:w-2/3">
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-gray-200 font-medium hover:border-tez-green-light hover:bg-tez-green-light/20 hover:text-white transition-colors cursor-pointer shadow-sm hover:shadow backdrop-blur-sm"
                >
                  {lang}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Zap size={24} />, title: "Fast Turnaround", desc: "Quick delivery without compromising on quality." },
    { icon: <Users size={24} />, title: "Native Experts", desc: "Translated by professionals who understand the culture." },
    { icon: <BadgeDollarSign size={24} />, title: "Affordable Pricing", desc: "Competitive rates for premium translation services." },
    { icon: <ShieldCheck size={24} />, title: "100% Confidentiality", desc: "Your documents and data are completely secure with us." },
  ];

  return (
    <section id="why-us" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-tez-green font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Tez Advantage</h3>
            <p className="text-gray-600 text-lg mb-10">
              Trusted by PR agencies for fast and accurate multilingual communication. We combine linguistic expertise with industry knowledge to deliver translations that are not just accurate, but impactful.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-tez-green shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{reason.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/Top Image.png" 
                alt="Indian corporate team meeting for Business & Corporate Translation" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:10px_10px] -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:10px_10px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseStrip = () => {
  return (
    <div className="bg-tez-blue-dark py-4 px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-white text-base md:text-lg lg:text-xl font-medium animate-smooth-blink">
        Backed by years of expertise, we provide fast, secure and accurate translations trusted by businesses and PR professionals.
      </p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    { icon: <Send size={32} />, title: "Step 1: Send Content", desc: "Share your documents or text via email or WhatsApp." },
    { icon: <Calculator size={32} />, title: "Step 2: Get Quote", desc: "Receive an immediate, transparent pricing quote." },
    { icon: <CheckCircle2 size={32} />, title: "Step 3: Receive File", desc: "Get your accurately translated files on time." },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-tez-green font-semibold tracking-wide uppercase text-sm mb-2">Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
          <p className="text-gray-600 text-lg">A simple, streamlined process designed to save you time.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-2xl"
            >
              <div className="w-20 h-20 rounded-full bg-tez-blue text-white flex items-center justify-center mb-6 shadow-lg shadow-tez-blue/20 ring-8 ring-white">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 h-full relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl h-full">
              <img 
                src="/Bottom.png" 
                alt="Indian team discussion for PR Translation Services" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:flex items-center gap-4 z-10 border border-gray-100">
              <div className="w-12 h-12 bg-tez-green/10 rounded-full flex items-center justify-center text-tez-green">
                <Briefcase size={24} />
              </div>
              <div>
                <div className="text-base text-gray-900 font-semibold max-w-[200px] leading-relaxed">
                  Backed by <span className="text-2xl font-black text-tez-green animate-pulse inline-block mx-0.5">20+</span> years of industry experience
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <h2 className="text-tez-green font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tez Translation Service</h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Tez Translation Service is a professional Indian language translation agency dedicated to delivering accurate, fast, and culturally relevant translations for businesses, PR agencies, and organizations across India.
              </p>
              <p>
                With over 20 years of combined industry experience, our team of skilled language experts understands the importance of precision, tone, and context in every project. We specialize in helping brands communicate effectively with diverse regional audiences through high-quality multilingual solutions.
              </p>
              <p>
                Our services go beyond basic translation. From press releases and business documents to website content, multimedia, and localization, we ensure that your message is not just translated, but truly understood by your target audience.
              </p>
              <p>
                At Tez Translation Service, we focus on speed, quality, and confidentiality. Every project is handled by native language professionals and goes through a careful review process to maintain consistency and accuracy.
              </p>
              <p className="font-medium text-gray-900">
                Whether you are a PR agency managing time-sensitive content or a business expanding into new markets, we are committed to being your reliable language partner.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden text-left"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close modal">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-gray-600 space-y-4 leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const TellUsYourRequirement = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });
      
      if (!response.ok) {
        // Handle HTTP errors like 413 Payload Too Large or 403 Forbidden (often used by CDNs for large payloads)
        if (response.status === 413 || response.status === 403) {
          throw new Error("File is too large or request was blocked. Please ensure your file is under 5MB.");
        }
        
        // Try to parse JSON error if available
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Submission failed. Please try again.");
        } else {
          throw new Error(`Submission failed with status: ${response.status}`);
        }
      }
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-tez-blue-dark to-tez-blue">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tez-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:col-span-3 flex flex-col"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-tez-blue-dark mb-2">Tell Us Your Requirement</h2>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-grow">
            <input type="hidden" name="access_key" value="1f9f57d9-8911-4144-a59c-580bd45edb77" />
            <input type="hidden" name="subject" value="New Requirement from Tez Website" />
            
            {/* Left Column */}
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Name *"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-tez-green focus:border-transparent outline-none transition-all shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-tez-green focus:border-transparent outline-none transition-all shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Phone Number (Optional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-tez-green focus:border-transparent outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-5">
              <div className="flex-grow flex flex-col">
                <label htmlFor="message" className="sr-only">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Message * (Describe your document, language, and deadline...)"
                  className="w-full h-full min-h-[120px] px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-tez-green focus:border-transparent outline-none transition-all shadow-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-1">
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full bg-tez-green hover:bg-tez-green-light text-white font-bold py-3.5 px-8 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-tez-green/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={20} />
                      Get a Free Quote
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Share your project details and get a quick quote from our team.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-green-500" />
                  Thank you! Our team will contact you within 24 hours.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3"
                >
                  <X size={20} className="text-red-500" />
                  {errorMessage}
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block relative lg:col-span-1 h-full"
          >
            <div className="absolute inset-0 bg-tez-green/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="/Write Us.png" 
              alt="Team collaborating on Multilingual Content Creation" 
              className="relative rounded-2xl shadow-2xl object-cover object-[80%_center] h-full w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6 bg-white/95 rounded-2xl flex items-center justify-center mt-4 shadow-lg relative w-[260px] h-[120px] md:w-[320px] md:h-[140px] overflow-hidden border-4 border-tez-green">
              <img 
                src="/logo01.png" 
                alt="Tez Translation Services - Professional Translators Logo" 
                className="h-[240px] md:h-[320px] w-auto object-contain max-w-none flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="items-center gap-2" style={{ display: 'none' }}>
                <span className="text-3xl font-bold tracking-tighter text-tez-blue">
                  <span className="italic">Tez</span>
                </span>
                <span className="text-sm font-semibold leading-tight text-gray-600">
                  TRANSLATION<br/>SERVICES
                </span>
              </div>
            </div>
            <p className="text-gray-400 max-w-xs">
              Professional Indian language translation agency for PR, businesses, and marketing.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#languages" className="text-gray-400 hover:text-white transition-colors">Languages</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors">Why Us</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-tez-green" />
                <a href="mailto:tezsupport@gmail.com" className="hover:text-white transition-colors">tezsupport@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-tez-green" />
                <a href="tel:+919975493247" className="hover:text-white transition-colors">+91 99754 93247</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <WhatsAppIcon size={18} className="text-tez-green" />
                <a href="https://wa.me/919975493247" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp: +91 99754 93247</a>
              </li>
              <li className="text-sm text-gray-500 italic mt-4">
                We typically respond within minutes.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tez Translation Service. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('privacy'); }} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('terms'); }} className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <Modal isOpen={activeModal === 'privacy'} onClose={() => setActiveModal(null)} title="Privacy Policy">
        <p>At Tez Translation Service, we respect your privacy and are committed to protecting your personal and business information. When you use our website or services, we may collect basic details such as your name, email address, phone number, and any documents or files that you share with us for translation. We may also collect communication data such as chat messages and queries, along with limited technical information like browser type and cookies to improve website performance.</p>
        <p>We use this information strictly to provide our services, communicate with you regarding your projects, and enhance the overall user experience. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        <p>We understand that many of the documents shared with us may contain sensitive or confidential information. Therefore, all files are handled with strict confidentiality and are only accessed by authorized team members involved in the project. Your content is never shared publicly or used without your consent.</p>
        <p>We take reasonable security measures to protect your data, including secure storage systems and restricted access. Where applicable, we also use encrypted methods to ensure safe data transfer.</p>
        <p>Our website may use cookies to enhance your browsing experience and understand user behavior. You have the option to disable cookies through your browser settings if you prefer.</p>
        <p>In some cases, our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices or content of those external sites.</p>
        <p>You have the right to request access to your personal data, ask for corrections, request deletion, or withdraw your consent at any time. We may update this Privacy Policy periodically, and any changes will be reflected on this page.</p>
      </Modal>

      <Modal isOpen={activeModal === 'terms'} onClose={() => setActiveModal(null)} title="Terms & Conditions">
        <p>By using the services of Tez Translation Service, you agree to the following terms and conditions. We provide translation, localization, content writing, and other language-related services based on the requirements shared by the client. The client is responsible for providing accurate and complete source content, and we are not liable for any errors originating from the original material.</p>
        <p>Our pricing depends on factors such as word count, language pair, complexity, and urgency of the project. A final quote is always shared with the client before the work begins, and in some cases, work may start only after confirmation or advance payment.</p>
        <p>We strive to deliver all projects within the agreed timeline. However, delivery times may vary depending on the complexity of the content or unforeseen circumstances. In such cases, we ensure clear communication with the client regarding any changes.</p>
        <p>We offer reasonable revisions if required, provided that the request is made within a suitable time after delivery. Our goal is to ensure client satisfaction while maintaining quality standards.</p>
        <p>All documents and information shared with us are treated as strictly confidential, and we do not disclose or share client data with any unauthorized third parties.</p>
        <p>Once the payment is completed, the final translated content becomes the property of the client. We may retain the right to use non-sensitive work samples for demonstration or portfolio purposes unless otherwise agreed.</p>
        <p>Tez Translation Service shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability, if any, is limited to the amount paid for the service.</p>
        <p>Users must not use our website or services for any unlawful or prohibited activities, including uploading illegal or copyrighted content without proper authorization.</p>
        <p>By continuing to use our website and services, you agree to comply with these terms. We reserve the right to update or modify these Terms & Conditions at any time, and continued use of the website implies acceptance of any changes.</p>
      </Modal>
    </footer>
  );
};

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean, id: number, isSystem?: boolean}[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Request notification permission on mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('tez_chat_messages_v2');
    const lastActive = localStorage.getItem('tez_chat_last_active');
    const now = Date.now();

    let shouldClear = false;
    if (lastActive) {
      const lastActiveTime = parseInt(lastActive, 10);
      if (now - lastActiveTime > 10 * 60 * 1000) { // 10 minutes
        shouldClear = true;
      }
    }

    if (savedMessages && !shouldClear) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error("Failed to parse chat messages", e);
      }
    } else {
      // Initial greeting
      const initialMsg = { text: "Hello, Welcome to Tez Translation. How may I assist you?", isUser: false, id: Date.now() };
      setMessages([initialMsg]);
      localStorage.setItem('tez_chat_messages_v2', JSON.stringify([initialMsg]));
      localStorage.setItem('tez_chat_last_active', now.toString());
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('tez_chat_messages_v2', JSON.stringify(messages));
      localStorage.setItem('tez_chat_last_active', Date.now().toString());
    }
  }, [messages]);

  // Scroll to bottom when messages change or typing indicator shows
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Listen for custom event to open chat from other buttons
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      setHasUnread(false);
    };
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  // Focus input when chat opens and check session timeout
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);

      // Check session timeout when opening chat
      const lastActive = localStorage.getItem('tez_chat_last_active');
      const now = Date.now();
      if (lastActive) {
        const lastActiveTime = parseInt(lastActive, 10);
        if (now - lastActiveTime > 10 * 60 * 1000) { // 10 minutes
          const initialMsg = { text: "Hello, Welcome to Tez Translation. How may I assist you?", isUser: false, id: Date.now() };
          setMessages([initialMsg]);
          localStorage.setItem('tez_chat_messages_v2', JSON.stringify([initialMsg]));
          localStorage.setItem('tez_chat_last_active', now.toString());
        }
      }
    }
  }, [isOpen]);

  // Live session timeout checker
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      const lastActive = localStorage.getItem('tez_chat_last_active');
      if (lastActive && messages.length > 0) {
        const lastActiveTime = parseInt(lastActive, 10);
        const now = Date.now();
        if (now - lastActiveTime > 10 * 60 * 1000) { // 10 minutes
          const lastMsg = messages[messages.length - 1];
          if (!lastMsg.isSystem) {
            const endMsg = {
              text: "This chat session has ended due to inactivity. Thank you for reaching out to Tez Translation Service. Please send a new message to start a new chat.",
              isUser: false,
              id: Date.now(),
              isSystem: true
            };
            setMessages([endMsg]);
          }
        }
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, [isOpen, messages]);

  const triggerAdminNotification = () => {
    // Play sound
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch (e) {
      console.error("Audio play failed", e);
    }

    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification("New Chat Message", {
        body: "A user is trying to contact you on Tez Translation Service.",
        icon: "/logo.png"
      });
      notification.onclick = () => {
        window.focus();
        setIsOpen(true);
        setHasUnread(false);
        notification.close();
      };
    } else {
      setHasUnread(true);
    }
  };

  const handleClearChat = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMessages([]);
    setInputValue("");
    localStorage.removeItem('tez_chat_messages_v2');
    localStorage.removeItem('tez_chat_last_active');
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const now = Date.now();
    const lastActive = localStorage.getItem('tez_chat_last_active');
    let isNewSession = false;
    
    if (lastActive) {
      const lastActiveTime = parseInt(lastActive, 10);
      if (now - lastActiveTime > 10 * 60 * 1000) { // 10 minutes
        isNewSession = true;
      }
    }

    const newUserMsg = { text: inputValue.trim(), isUser: true, id: now };
    
    if (isNewSession) {
      const initialMsg = { text: "Hello, Welcome to Tez Translation. How may I assist you?", isUser: false, id: now - 1 };
      setMessages([initialMsg, newUserMsg]);
    } else {
      setMessages(prev => [...prev, newUserMsg]);
    }

    setInputValue("");
    setIsTyping(true);
    localStorage.setItem('tez_chat_last_active', now.toString());

    // Simulate Admin Notification
    triggerAdminNotification();

    // Auto-reply after 1.5 seconds
    setTimeout(() => {
      const botMsg = { 
        text: "Our team will contact you soon. You can also contact us directly on our phone or WhatsApp number, or drop a mail at tezsupport@gmail.com.", 
        isUser: false, 
        id: Date.now() 
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl w-[320px] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col overflow-hidden border border-gray-200 mb-4"
        >
          {/* Header */}
          <div className="bg-tez-green text-white p-4 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Tez Support</h3>
                <p className="text-xs text-white/80">Typically replies in minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleClearChat} 
                className="text-white/80 hover:text-white transition-colors"
                title="Clear Chat"
                aria-label="Clear chat history"
              >
                <Trash2 size={18} />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors" aria-label="Close chat">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((msg) => (
              msg.isSystem ? (
                <div key={msg.id} className="flex justify-center my-2">
                  <div className="bg-gray-200 text-gray-600 text-xs py-1.5 px-4 rounded-full text-center max-w-[90%] shadow-sm">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed flex flex-col ${
                    msg.isUser 
                      ? 'bg-tez-green text-white rounded-tr-sm' 
                      : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-sm'
                  }`}>
                    <div className="mb-1">{msg.text}</div>
                    <div className={`text-[10px] text-right ${msg.isUser ? 'text-white/70' : 'text-gray-400'}`}>
                      {new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, month: 'short', day: 'numeric' }).format(new Date(msg.id))}
                    </div>
                  </div>
                </div>
              )
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm p-3 rounded-2xl rounded-tl-sm flex gap-1 items-center h-10">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            <input 
              ref={inputRef}
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 border-transparent focus:bg-white focus:border-tez-green focus:ring-2 focus:ring-tez-green/20 rounded-full px-4 py-2 text-sm outline-none transition-all"
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="w-10 h-10 bg-tez-green text-white rounded-full flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-tez-green-dark transition-colors"
              aria-label="Send message"
            >
              <Send size={18} className="ml-1" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Toggle Button Container */}
      <div className="flex flex-col items-center gap-2">
        <button 
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setHasUnread(false);
          }}
          className={`w-16 h-16 bg-tez-green hover:bg-tez-green-light text-white rounded-full flex items-center justify-center shadow-2xl shadow-tez-green/40 transition-all duration-300 group relative ${!isOpen ? 'animate-heartbeat hover:animate-none hover:scale-110' : 'transform hover:scale-110'}`}
          aria-label={isOpen ? "Close Chat" : "Open Live Chat"}
        >
          {isOpen ? <X size={32} /> : <TwoWayChatIcon size={32} />}
          
          {/* Unread Badge */}
          {!isOpen && hasUnread && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
          )}
          
          {/* Tooltip */}
          {!isOpen && (
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat with us!
            </span>
          )}
        </button>

        {!isOpen && (
          <span className="text-sm font-bold text-tez-green bg-white px-3 py-1 rounded-full shadow-md animate-smooth-blink pointer-events-none">
            Live chat
          </span>
        )}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-tez-green/20 selection:text-tez-blue-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LanguagesSection />
        <WhyChooseUs />
        <ExpertiseStrip />
        <HowItWorks />
        <TellUsYourRequirement />
        <AboutUs />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
