import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { FLOOR_PLANS } from '../constants';
import { X, ZoomIn } from 'lucide-react';

export const FloorPlans: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const plans = [
    { title: t.plans.ground_floor, src: FLOOR_PLANS.ground },
    { title: t.plans.first_floor, src: FLOOR_PLANS.first }
  ];

  // Bloquear el scroll del cuerpo cuando el modal está abierto
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <section id="plans" className="py-24 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
           <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">{t.plans.title}</h3>
           <p className="text-stone-500 max-w-2xl mx-auto">{t.plans.subtitle}</p>
        </div>

        {/* Thumbnails Grid (Carrusel visual en pequeño) */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {plans.map((plan, index) => (
                <div 
                    key={index}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(plan.src)}
                >
                    <div className="bg-white p-3 rounded-xl shadow-lg border border-stone-200 overflow-hidden relative transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                        {/* Contenedor de imagen */}
                        <div className="aspect-[4/3] w-full bg-stone-50 flex items-center justify-center rounded-lg overflow-hidden relative">
                             <img 
                                src={plan.src} 
                                alt={plan.title} 
                                className="w-full h-full object-contain p-2"
                            />
                            
                            {/* Overlay al pasar el ratón */}
                            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-all duration-300 flex items-center justify-center">
                                <div className="bg-white/90 p-4 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
                                    <ZoomIn className="w-8 h-8 text-brand-dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center font-serif text-xl text-brand-dark mt-6 border-b border-transparent group-hover:border-brand-gold inline-block w-full transition-colors pb-2">
                        {plan.title}
                    </h4>
                </div>
            ))}
        </div>

        <p className="text-center text-xs text-stone-400 mt-16 italic">{t.plans.disclaimer}</p>
      </div>

      {/* Modal Lightbox (Pantalla Completa) */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
            {/* Botón de Cerrar (La Cruz) */}
            <button 
                className="fixed top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-[110] backdrop-blur-md cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                }}
            >
                <X size={32} />
            </button>
            
            <div 
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
            >
                <img 
                    src={selectedImage} 
                    alt="Plano ampliado" 
                    className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl bg-white p-1 pointer-events-auto cursor-default"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
      )}
    </section>
  );
};