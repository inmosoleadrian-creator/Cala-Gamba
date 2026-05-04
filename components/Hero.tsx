import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { PROPERTY_IMAGES } from '../constants';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-ken-burns"
        style={{ 
          backgroundImage: `url("${PROPERTY_IMAGES[0]}")`,
          filter: 'brightness(0.65)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <h2 className="text-sm md:text-lg tracking-[0.4em] uppercase mb-6 text-brand-gold font-light animate-fade-in-up">
          {t.hero.subtitle}
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight animate-fade-in-up delay-100 drop-shadow-lg">
          {t.hero.title}
        </h1>
        <div className="w-24 h-1 bg-brand-gold mx-auto mb-8 rounded-full animate-fade-in-up delay-200"></div>
        <p className="text-lg md:text-xl font-light text-stone-100 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          {t.hero.description}
        </p>
        
        {/* Price Display */}
        <div className="mb-10 animate-fade-in-up delay-300">
            <p className="text-xs uppercase tracking-widest opacity-80 mb-2">{t.hero.price_prefix}</p>
            <p className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-md">
                {t.floating.price_value}
            </p>
        </div>

        <button 
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/40 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-500 text-white px-10 py-4 uppercase tracking-widest text-sm font-medium backdrop-blur-sm animate-fade-in-up delay-300"
        >
          {t.hero.cta}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10 text-white/60">
        <ArrowDown size={32} />
      </div>
      
      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-out infinite alternate;
        }
      `}</style>
    </section>
  );
};