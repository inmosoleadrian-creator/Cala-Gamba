import React from 'react';
import { useLanguage } from '../LanguageContext';
import { PROPERTY_IMAGES } from '../constants';

export const Description: React.FC = () => {
  const { t } = useLanguage();

  // Helper to parse **text** into <strong>text</strong>
  const parseText = (text: string) => {
    const parts = text.split('**');
    return parts.map((part, index) => 
      index % 2 === 1 
        ? <span key={index} className="font-bold text-brand-copper">{part}</span> 
        : part
    );
  };

  return (
    <section className="py-24 bg-brand-sand text-brand-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark leading-tight">
              {t.description.title_prefix} <br className="hidden md:block"/>
              <span className="text-brand-copper italic">{t.description.title_highlight}</span>
            </h3>
            
            <div className="w-20 h-1 bg-brand-dark/10"></div>

            <div className="prose prose-lg text-stone-600 font-light leading-relaxed">
              <p>{parseText(t.description.p1)}</p>
              <p>{parseText(t.description.p2)}</p>
              <p>{parseText(t.description.p3)}</p>
            </div>
            <div className="pt-6 border-t border-brand-dark/10">
              <ul className="space-y-4">
                 <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-brand-copper mr-4 rounded-full"></span>
                    <span>{parseText(t.description.list1)}</span>
                 </li>
                 <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-brand-copper mr-4 rounded-full"></span>
                    <span>{parseText(t.description.list2)}</span>
                 </li>
                 <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-brand-copper mr-4 rounded-full"></span>
                    <span>{parseText(t.description.list3)}</span>
                 </li>
              </ul>
            </div>
          </div>
          
          {/* Images Grid */}
          <div className="relative h-[700px] w-full hidden md:block">
             <div className="absolute top-0 right-0 w-3/4 h-3/5 overflow-hidden rounded-lg shadow-2xl z-10">
                <img src={PROPERTY_IMAGES[1]} alt="Interior Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
             </div>
             <div className="absolute bottom-0 left-0 w-3/4 h-1/2 overflow-hidden rounded-lg shadow-2xl z-20 border-8 border-brand-sand">
                <img src={PROPERTY_IMAGES[2]} alt="Terrace" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
             </div>
          </div>
          
          {/* Mobile Image */}
          <div className="md:hidden w-full h-96 rounded-lg overflow-hidden shadow-xl">
             <img src={PROPERTY_IMAGES[1]} alt="Interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};