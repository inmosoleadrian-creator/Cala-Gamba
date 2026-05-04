import React, { useState } from 'react';
import { PROPERTY_IMAGES } from '../constants';
import { useLanguage } from '../LanguageContext';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const galleryImages = PROPERTY_IMAGES.slice(3); // Skip first 3 used elsewhere
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-stone-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <h3 className="text-3xl font-serif text-center mb-10">{t.nav.photos}</h3>
        
        <div className="relative max-w-5xl mx-auto w-full aspect-[16/9] group">
          {/* Main Image */}
          <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl bg-black relative">
             <img 
                src={galleryImages[currentIndex]} 
                alt={`Slide ${currentIndex}`} 
                className="w-full h-full object-contain"
             />
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={32} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-mono">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-8 flex space-x-2 overflow-x-auto pb-4 justify-center max-w-5xl mx-auto scrollbar-hide">
          {galleryImages.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden transition-all duration-300 border-2 ${currentIndex === idx ? 'border-brand-gold opacity-100 scale-110' : 'border-transparent opacity-50 hover:opacity-80'}`}
            >
              <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};