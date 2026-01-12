import React, { useState, useEffect } from 'react';
import { Button } from '../UI/Button';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.header.home, id: 'home' },
    { label: t.header.features, id: 'features' },
    { label: t.header.pricing, id: 'pricing' },
    { label: t.header.faq, id: 'faq' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  // Smooth scroll handler without changing URL
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80; // Approximate header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Scrolls to Home */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img src="/logo.svg" alt="Logo" className="h-6 w-auto object-contain" />
          <span className={`text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700`}>
            Initium
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Lang Switch & Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-slate-600 hover:text-brand-600 hover:bg-slate-100 rounded-full transition-colors mr-1 flex items-center gap-1 font-medium text-xs uppercase"
            aria-label="Toggle Language"
          >
            <Globe className="w-5 h-5" />
            <span>{language}</span>
          </button>
          <div className="h-6 w-px bg-slate-300 mx-1"></div>
          <Button variant="ghost" size="sm" onClick={() => console.log('Login clicked')}>
            {t.header.signin}
          </Button>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={(e) => scrollToSection(e, 'pricing')} 
            className="bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 border-none shadow-brand-500/30"
          >
            {t.header.getStarted}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-slate-700 p-2 rounded-lg hover:bg-slate-100 flex items-center gap-1"
          >
             <Globe className="w-5 h-5" />
             <span className="text-xs font-bold uppercase">{language}</span>
          </button>
          <button 
            className="text-slate-700 p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`}
                  className="text-lg font-medium text-slate-800 block p-2 hover:bg-slate-50 rounded-lg"
                  onClick={(e) => scrollToSection(e, link.id)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-slate-100 my-2" />
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => console.log('Login clicked')}
              >
                {t.header.signin}
              </Button>
              <Button 
                variant="primary" 
                className="w-full bg-gradient-to-r from-brand-600 to-purple-600" 
                onClick={(e) => scrollToSection(e, 'pricing')}
              >
                {t.header.getStarted}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
