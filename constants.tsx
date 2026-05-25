import { PropertyFeature, DistanceInfo, ClimateData } from './types';
import { Home, Ruler, Bed, Bath, Trees, Sun, Waves } from 'lucide-react';
import React from 'react';

export const PROPERTY_IMAGES = [
  // Hero Image (Best Landscape)
  "https://i.postimg.cc/7L6MJXCb/Gemini-Generated-Image-5xis7z5xis7z5xis.jpg",
  
  // Description Images (Vertical & Detail)
  "https://i.postimg.cc/SQ72qCR4/BARTOMEU-CASTE1LL-SALON-01.jpg", 
  "https://i.postimg.cc/3x6W9ZSn/BARTOMEU-CASTELL-JARDIN-01.jpg",
  
  // Gallery Start
  "https://i.postimg.cc/QdVHpzb9/BARTOMEU-CASTELL-EXTERIOR.jpg",
  "https://i.postimg.cc/9QzrGkp9/BARTOMEU-CASTELL-FACHADA-01.jpg",
  "https://i.postimg.cc/c1MgZwCH/BARTOMEU-CASTELL-13-SALON-COCINA-02.jpg",
  "https://i.postimg.cc/m2Lcrk1h/BARTOMEU-CASTELL-COCINA-COMEDOR-01.jpg",
  "https://i.postimg.cc/SNSXKRYY/BARTOMEU-CASTELL-COCINA-COMEDOR-02.jpg",
  "https://i.postimg.cc/02k6NjKD/BARTOMEU-CASTELL-COCINA-SALON-01.jpg",
  "https://i.postimg.cc/ncFsLr91/BARTOMEU-CASTELL-COMEDOR.jpg",
  "https://i.postimg.cc/FsTYkv0w/BARTOMEU-CASTELL-COMEDOR.jpg",
  "https://i.postimg.cc/tCBsnbFN/BARTOMEU-CASTELL-COMEDOR-COCINA.jpg",
  "https://i.postimg.cc/gkgxLp3R/BARTOMEU-CASTELL-COMEDOR-COCINA-02.jpg",
  "https://i.postimg.cc/KYMjWgwN/BARTOMEU-CASTELL-SALON-COMEDOR-01.jpg",
  "https://i.postimg.cc/q73qFCSx/BARTOMEU-CASTELL-SALON-COMEDOR-03.jpg",
  "https://i.postimg.cc/rwbzg9n1/BARTOMEU-CASTELL-GENERAL-SALON.jpg",
  "https://i.postimg.cc/hGdvY7NR/BARTOMEU-CASTELLS-COCINA-01.jpg",
  "https://i.postimg.cc/k5bGHtLm/BARTOMEU-ROSSELL-13-Comedor-cocina-01.jpg",
  "https://i.postimg.cc/HkKj3tZ9/BARTOMEU-CASTELL-HAB1.jpg",
  "https://i.postimg.cc/mgqhVSXV/BARTOMEU-CASTELL-HAB1-02.jpg",
  "https://i.postimg.cc/zDSb5Kv1/BARTOMEU-CASTE1LL-HAB2.jpg",
  "https://i.postimg.cc/439y0hqM/BARTOMEU-CASTELLA-HAB2.jpg",
  "https://i.postimg.cc/PrXLqJv5/BARTOMEU-CASTELL-BANO-HAB-1.jpg",
  "https://i.postimg.cc/DfdJFL02/BARTOLOMEU-CASTELL-BANO-HAB2.jpg",
  "https://i.postimg.cc/v8LgMfTM/BANO-HAB-3.jpg",
  "https://i.postimg.cc/WbND4zq3/BARTOMEU-CASTELL-BANO-HAB-3.jpg",
  "https://i.postimg.cc/bNyGvrSq/BARTOMEU-CASTELL-BANO-02.jpg",
  "https://i.postimg.cc/15v8VSpS/BARTOMEU-CASTELL-ENTRADA-ASEO.jpg",
  "https://i.postimg.cc/SxjJWPrp/BARTOMEU-CASTELL-ENTRADA-01.jpg",
  "https://i.postimg.cc/6pTydP03/BARTOMEU-CASTELL-ENTRADA-02.jpg",
  "https://i.postimg.cc/xdz8ZbhF/BARTOMEU-CASTELLA-ENTRADA-01.jpg",
  "https://i.postimg.cc/W1thMy7C/BARTOMEU-CASTELL-ENTRADA-B.jpg",
  "https://i.postimg.cc/Mp4XtYPc/BARTOMEU-CASTELL-FACHADA-02.jpg",
  "https://i.postimg.cc/6pTydP0Q/BARTOMEU-CASTELL-EXTERIOR-02.jpg",
  "https://i.postimg.cc/6pSTzhj1/BARTOMEU-CASTELL-JARDIN-02.jpg",
  "https://i.postimg.cc/FKLz6J8W/BARTOMEU-CASTELL-TERRAZA-01.jpg",
  "https://i.postimg.cc/Sx5jVGTz/BARTOMEU-CASTELL-GARAJE-01.jpg"
];

// REPLACE THIS ID WITH YOUR YOUTUBE VIDEO ID
export const YOUTUBE_VIDEO_ID = "Yvt-H_TkfQU";

export const FLOOR_PLANS = {
  ground: "https://i.postimg.cc/LXkbNNTL/Foto_plano_total_planta_baja_con_piscina.jpg",
  first: "https://i.postimg.cc/1RHdF7XY/Foto_plano_total_planta_primera.jpg"
};

export const FEATURES: PropertyFeature[] = [
  { labelKey: "surface", value: "180 m²", icon: <Ruler className="w-5 h-5" /> },
  { labelKey: "plot", value: "300 m²", icon: <Trees className="w-5 h-5" /> },
  { labelKey: "bedrooms", value: 3, icon: <Bed className="w-5 h-5" /> },
  { labelKey: "bathrooms", value: "3 Suites + 1", icon: <Bath className="w-5 h-5" /> },
  { labelKey: "pool", value: "Privada", icon: <Waves className="w-5 h-5" /> },
  { labelKey: "orientation", value: "Este / Oeste", icon: <Sun className="w-5 h-5" /> },
];

export const DISTANCES: DistanceInfo[] = [
  { placeKey: "beach", distance: "100 m", timeKey: "walk", timeValue: 2 },
  { placeKey: "club", distance: "250 m", timeKey: "walk", timeValue: 4 },
  { placeKey: "airport", distance: "3 km", timeKey: "drive", timeValue: 5 },
  { placeKey: "center", distance: "6 km", timeKey: "drive", timeValue: 10 },
  { placeKey: "shopping", distance: "2 km", timeKey: "drive", timeValue: 3 },
];

export const CLIMATE_DATA: ClimateData[] = [
  { month: 'Ene', temp: 15 },
  { month: 'Feb', temp: 15 },
  { month: 'Mar', temp: 17 },
  { month: 'Abr', temp: 19 },
  { month: 'May', temp: 23 },
  { month: 'Jun', temp: 27 },
  { month: 'Jul', temp: 30 },
  { month: 'Ago', temp: 30 },
  { month: 'Sep', temp: 27 },
  { month: 'Oct', temp: 23 },
  { month: 'Nov', temp: 19 },
  { month: 'Dic', temp: 16 },
];

export const FULL_CONTEXT_FOR_AI = `
Actúa como un agente inmobiliario experto y amable para una propiedad de lujo en Cala Gamba, Mallorca.

Detalles de la propiedad:
- Ubicación: Cala Gamba, Mallorca. C. Bartomeu Castell, 13.
- Tipo: Villa de lujo moderna con esencia tradicional mallorquina.
- Precio: 1.299.000 euros.
- Superficie construida: 180 m².
- Parcela: 300 m².
- Piscina: SÍ. Privada. Muy difícil de encontrar en esta zona.
- Habitaciones: 3 dobles, todas con baño en suite.
- Baños: 3 completos en suite y 1 aseo de cortesía.
- Año de renovación: 2025.
- Orientación: Este / Oeste.
- Garaje: Privado con puerta mecanizada.
- Climatización: Aerotermia de alta eficiencia y suelo radiante individual por estancia.
- Materiales: Pavimentos de gran formato, grifería de cobre de alta gama.

Distancias:
- Playa: 100m (2 min a pie).
- Club Náutico: 250m (4 min a pie).
- Aeropuerto: 3km (5 min en coche).
- Centro de Palma (Catedral): 6km (10 min en coche).
- Centro Comercial FAN: 2km (3 min en coche).

Descripción:
Refugio de lujo mediterráneo. Casa moderna que mantiene el toque mallorquín, la brisa marina y la tranquilidad.
Destaca especialmente por tener PISCINA, algo casi imposible de conseguir en Palma ciudad jardín/Cala Gamba.
Salón de concepto abierto con ventanal panorámico. Terraza privada en habitación principal.

Instrucciones:
- Responde a las preguntas de los usuarios sobre esta propiedad.
- Destaca siempre la piscina y la tranquilidad.
- Sé profesional, cortés y persuasivo.
- Responde en el mismo idioma que el usuario.
`;