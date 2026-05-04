import React from 'react';
import { useLanguage } from '../LanguageContext';
import { YOUTUBE_VIDEO_ID, PROPERTY_IMAGES } from '../constants';
import { Play } from 'lucide-react';

export const Video: React.FC = () => {
  const { t } = useLanguage();

  // Use the hero image as the thumbnail background
  const thumbnailImage = PROPERTY_IMAGES[0];

  return (
    <section id="video" className="py-24 bg-stone-900 text-white text-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <h3 className="text-3xl font-serif mb-2">{t.video.title}</h3>
        <p className="text-stone-400 mb-12">{t.video.subtitle}</p>
        
        {/* Video Card Link */}
        <a 
            href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative block w-full pb-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl border border-stone-800 group cursor-pointer hover:scale-[1.01] transition-transform duration-500"
        >
           {/* Background Image */}
           <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundImage: `url("${thumbnailImage}")` }}
           ></div>
           
           {/* Overlay Gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

           {/* Play Button Center */}
           <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-gold/90 rounded-full flex items-center justify-center pl-2 shadow-lg shadow-brand-gold/20 group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-brand-dark fill-brand-dark" />
                </div>
                <p className="mt-6 text-white font-serif text-lg md:text-xl tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity">
                    Ver en YouTube
                </p>
           </div>
        </a>
      </div>
    </section>
  );
};