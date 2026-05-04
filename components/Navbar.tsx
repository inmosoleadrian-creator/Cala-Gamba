import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../types';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' },
    { code: 'se', label: 'SE' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-brand-dark shadow-md py-3' : 'bg-transparent text-white py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <span className="text-xl md:text-2xl font-serif font-bold tracking-widest leading-none">
                DE PRADA MOYA
             </span>
             <span className={`text-[0.6rem] md:text-xs uppercase tracking-[0.3em] ${isScrolled ? 'text-brand-gold' : 'text-stone-300'}`}>
                Real Estate
             </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
          <button onClick={() => scrollToSection('plans')} className="hover:text-brand-gold transition-colors">{t.nav.plans}</button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-brand-gold transition-colors">{t.nav.photos}</button>
          <button onClick={() => scrollToSection('video')} className="hover:text-brand-gold transition-colors">{t.nav.video}</button>
          <button onClick={() => scrollToSection('location')} className="hover:text-brand-gold transition-colors">{t.nav.location}</button>
          
          {/* Language Selector - Improved Hover */}
          <div className="relative group h-full flex items-center ml-4 pb-1">
            <button className="flex items-center hover:text-brand-gold py-2">
                <Globe className="w-4 h-4 mr-1" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3 ml-1 opacity-70" />
            </button>
            
            {/* Dropdown with invisible bridge to prevent mouse-leave issues */}
            <div className="absolute top-full right-0 pt-2 hidden group-hover:block z-50 min-w-[100px]">
                <div className="bg-white rounded shadow-xl py-2 text-brand-dark border border-stone-100">
                    {languages.map(lang => (
                        <button 
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`block w-full text-left px-4 py-2 hover:bg-stone-50 transition-colors text-xs ${language === lang.code ? 'font-bold text-brand-gold' : 'text-stone-600'}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-brand-dark shadow-xl p-6 md:hidden flex flex-col space-y-4 text-center border-t border-stone-100">
            <button onClick={() => scrollToSection('plans')}>{t.nav.plans}</button>
            <button onClick={() => scrollToSection('gallery')}>{t.nav.photos}</button>
            <button onClick={() => scrollToSection('video')}>{t.nav.video}</button>
            <button onClick={() => scrollToSection('location')}>{t.nav.location}</button>
            <div className="flex justify-center space-x-4 pt-4 border-t border-stone-100 flex-wrap gap-y-2">
                {languages.map(lang => (
                    <button 
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setIsMobileMenuOpen(false); }}
                        className={`px-3 py-1 border rounded text-xs ${language === lang.code ? 'border-brand-gold text-brand-gold font-bold' : 'border-stone-200 text-stone-500'}`}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
        </div>
      )}
    </nav>
  );
};