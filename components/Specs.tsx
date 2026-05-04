import React from 'react';
import { FEATURES } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Specs: React.FC = () => {
  const { t } = useLanguage();

  const getValue = (feat: typeof FEATURES[0]) => {
    if (feat.labelKey === 'bathrooms') return t.specs_values.bathrooms;
    if (feat.labelKey === 'orientation') return t.specs_values.orientation;
    if (feat.labelKey === 'pool') return t.specs_values.pool;
    return feat.value;
  };

  return (
    <section id="details" className="relative py-24 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {FEATURES.map((feat, idx) => (
            <div key={idx} className="flex items-center p-6 bg-stone-50 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg group">
              <div className="p-3 mr-4 rounded-full bg-white text-brand-gold border border-stone-200 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                {feat.icon}
              </div>
              <div>
                {/* @ts-ignore */}
                <span className="text-xs uppercase tracking-widest text-stone-400 block mb-1">{t.specs[feat.labelKey]}</span>
                <span className="text-lg md:text-xl font-serif font-bold text-brand-dark block">{getValue(feat)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};