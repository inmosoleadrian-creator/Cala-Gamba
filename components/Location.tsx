import React from 'react';
import { DISTANCES } from '../constants';
import { MapPin, Plane, Waves, ShoppingBag, Sailboat } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Location: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (key: string) => {
    if (key.includes("beach")) return <Waves className="text-blue-400" />;
    if (key.includes("airport")) return <Plane className="text-brand-dark" />;
    if (key.includes("club")) return <Sailboat className="text-blue-600" />;
    if (key.includes("shopping")) return <ShoppingBag className="text-purple-500" />;
    return <MapPin className="text-brand-copper" />;
  };

  return (
    <section id="location" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3 space-y-8">
            <h3 className="text-3xl font-serif font-bold text-brand-dark">
              {t.location.title_prefix} <br/><span className="italic text-brand-gold">{t.location.title_highlight}</span>
            </h3>
            <p className="text-stone-600 leading-relaxed">
              {t.location.description}
            </p>
            
            <div className="space-y-6 mt-8">
              {DISTANCES.map((item, idx) => (
                <div key={idx} className="flex items-center p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-stone-50 rounded-full mr-4">
                    {getIcon(item.placeKey)}
                  </div>
                  <div>
                    {/* @ts-ignore */}
                    <h4 className="font-bold text-brand-dark text-sm">{t.location.places[item.placeKey]}</h4>
                    {/* @ts-ignore */}
                    <p className="text-xs text-stone-500">{item.distance} · {item.timeValue} {t.location.times[item.timeKey]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 h-[500px] rounded-lg overflow-hidden shadow-xl bg-gray-200 relative group">
             <iframe 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                loading="lazy" 
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Cala Gamba Map"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.137837837838!2d2.6931!3d39.5495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129793976854109b%3A0x402af6ed721e0e0!2sCarrer%20de%20Bartomeu%20Castell%2C%2013%2C%2007007%20Palma%2C%20Illes%20Balears%2C%20Spain!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus">
            </iframe>
            
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow text-xs font-bold text-brand-dark">
              C. Bartomeu Castell, 13
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};