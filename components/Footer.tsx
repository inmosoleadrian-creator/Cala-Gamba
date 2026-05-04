import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark text-stone-400 py-16 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm">
          
          {/* Brand & Legal */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl text-white mb-2">DE PRADA MOYA</h4>
            <p className="text-xs uppercase tracking-[0.3em] mb-6 text-brand-gold">Real Estate</p>
            <p className="text-xs text-stone-500 mb-4 max-w-xs mx-auto md:mx-0">
               Agente Inmobiliario Oficial de les Illes Balears nº GOIBE584661/2024.
            </p>
            <p className="italic text-stone-600 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              {t.footer.legal}
            </p>
          </div>

          {/* Agents */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-2">{t.footer.contact}</h5>
            
            <div className="space-y-4 w-full max-w-xs">
                {/* Agent 1 */}
                <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                    <div>
                        <p className="text-white font-serif">Adrian de Prada</p>
                        <p className="text-xs text-brand-copper">+34 638 307 085</p>
                    </div>
                    <a 
                        href="https://wa.me/34638307085" 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 bg-green-600/20 text-green-500 rounded-full hover:bg-green-600 hover:text-white transition-colors"
                    >
                        <MessageCircle size={18} />
                    </a>
                </div>

                {/* Agent 2 */}
                <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                    <div>
                        <p className="text-white font-serif">Alberto Perez</p>
                        <p className="text-xs text-brand-copper">+34 617 672 105</p>
                    </div>
                    <a 
                        href="https://wa.me/34617672105" 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 bg-green-600/20 text-green-500 rounded-full hover:bg-green-600 hover:text-white transition-colors"
                    >
                        <MessageCircle size={18} />
                    </a>
                </div>
            </div>
          </div>

          {/* Offices */}
          <div className="flex flex-col items-center md:items-start space-y-6">
             <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-2">{t.footer.offices_title}</h5>
             <div className="space-y-4">
                 <div className="flex items-start">
                    <MapPin size={16} className="text-brand-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                        <p className="text-white">Palma</p>
                        <p className="text-xs">C. Cardenal Rossell 15A, 07007</p>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <MapPin size={16} className="text-brand-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                        <p className="text-white">Cala Pi</p>
                        <p className="text-xs">Passeig de Cala Pi 6</p>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <MapPin size={16} className="text-brand-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                        <p className="text-white">Campos</p>
                        <p className="text-xs">Carrer d'Antoni Maura 2A</p>
                    </div>
                 </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
            <p>© 2025 De Prada Moya Real Estate.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            </div>
        </div>
      </div>
    </footer>
  );
};