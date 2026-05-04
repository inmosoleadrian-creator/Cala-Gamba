import React from 'react';
import { Hero } from './components/Hero';
import { Specs } from './components/Specs';
import { Description } from './components/Description';
import { Location } from './components/Location';
import { LifestyleChart } from './components/LifestyleChart';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { Video } from './components/Video';
import { FloorPlans } from './components/FloorPlans';

const Content: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Specs />
            <Description />
            <FloorPlans />
            <Gallery />
            <Video />
            <LifestyleChart />
            <Location />
            <Footer />
            
            {/* Floating CTA for Mobile */}
            <div className="fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur border-t border-stone-200 md:hidden z-50 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div>
                <p className="text-xs uppercase text-stone-500">{t.floating.price_label}</p>
                <p className="font-serif font-bold text-brand-dark">{t.floating.price_value}</p>
            </div>
            <a 
                href="https://wa.me/34638307085"
                target="_blank"
                rel="noreferrer" 
                className="bg-brand-dark text-white px-6 py-2 rounded text-sm uppercase tracking-wide"
            >
                {t.floating.contact_button}
            </a>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
};

export default App;