import { TranslationStructure, Language } from './types';

export const TRANSLATIONS: Record<Language, TranslationStructure> = {
  es: {
    nav: {
      home: "Inicio",
      photos: "Fotos",
      video: "Video",
      plans: "Planos",
      location: "Ubicación",
      contact: "Contacto"
    },
    hero: {
      subtitle: "Cala Gamba · Mallorca",
      title: "Refugio de Lujo Mediterráneo",
      description: "Una villa moderna que respira la brisa marina y la calma del Mediterráneo, con el privilegio único de una piscina privada.",
      cta: "Descubrir Inmueble",
      price_prefix: "Precio de Venta"
    },
    specs: {
      surface: "Superficie",
      plot: "Parcela",
      bedrooms: "Habitaciones",
      bathrooms: "Baños",
      pool: "Piscina",
      orientation: "Orientación"
    },
    specs_values: {
      bathrooms: "3 Suites + 1 Aseo",
      orientation: "Este / Oeste",
      pool: "Privada (Exclusiva)"
    },
    description: {
      title_prefix: "Brisa Marina y",
      title_highlight: "Calma",
      p1: "Esta propiedad logra el equilibrio perfecto: una **vivienda moderna** que mantiene intacto el **toque mallorquín**. Aquí, el diseño de vanguardia convive con la esencia de la isla, permitiendo disfrutar de la brisa marina y un estilo de vida tranquilo y relajado.",
      p2: "Ubicada en Cala Gamba, esta villa ofrece algo prácticamente imposible de conseguir en esta zona de Palma: una **Piscina Privada**. Este oasis exterior, junto con la tecnología de Aerotermia y acabados de cobre, define un nuevo estándar de lujo.",
      p3: "La primera planta es un refugio de paz con tres dormitorios dobles, cada uno con **Baño en Suite**, diseñados para el máximo confort y privacidad.",
      list1: "**Piscina Privada**, una rareza en la zona",
      list2: "Salón abierto que conecta con el **jardín**",
      list3: "Esencia **mallorquina** con confort moderno"
    },
    plans: {
      title: "Distribución",
      subtitle: "Espacios diseñados para la funcionalidad y el confort",
      ground_floor: "Planta Baja",
      first_floor: "Primera Planta",
      disclaimer: "Planos orientativos no contractuales."
    },
    lifestyle: {
      title: "Vida Mediterránea Todo el Año",
      subtitle: "Temperatura media mensual en Palma de Mallorca (°C). Disfrute de inviernos suaves y veranos radiantes."
    },
    location: {
      title_prefix: "Ubicación",
      title_highlight: "Privilegiada",
      description: "Cala Gamba ofrece la tranquilidad de un pueblo costero tradicional con la conveniencia de estar conectado a Palma y al mundo en cuestión de minutos.",
      places: {
        beach: "Playa de Cala Gamba",
        club: "Club Náutico",
        airport: "Aeropuerto PMI",
        center: "Palma Centro (Catedral)",
        shopping: "Fan Mallorca Shopping"
      },
      times: {
        walk: "min a pie",
        drive: "min en coche"
      }
    },
    video: {
      title: "Experiencia Visual",
      subtitle: "Recorra cada rincón de esta propiedad exclusiva"
    },
    floating: {
      price_label: "Precio",
      price_value: "1.299.000 €",
      contact_button: "Contactar"
    },
    footer: {
      legal: "Nota legal: Los datos expuestos son aproximados y han sido proporcionados por la propiedad.",
      contact: "Contacto",
      privacy: "Privacidad",
      offices_title: "Oficinas"
    }
  },
  en: {
    nav: {
      home: "Home",
      photos: "Photos",
      video: "Video",
      plans: "Floor Plans",
      location: "Location",
      contact: "Contact"
    },
    hero: {
      subtitle: "Cala Gamba · Mallorca",
      title: "Luxury Mediterranean Refuge",
      description: "A modern villa that breathes the sea breeze and Mediterranean calm, with the unique privilege of a private pool.",
      cta: "Discover Property",
      price_prefix: "Asking Price"
    },
    specs: {
      surface: "Built Area",
      plot: "Plot",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      pool: "Pool",
      orientation: "Orientation"
    },
    specs_values: {
      bathrooms: "3 Suites + 1 Guest WC",
      orientation: "East / West",
      pool: "Private (Exclusive)"
    },
    description: {
      title_prefix: "Sea Breeze and",
      title_highlight: "Calm",
      p1: "This property achieves the perfect balance: a **modern home** that keeps the **Mallorcan touch** intact. Here, avant-garde design coexists with the essence of the island, allowing you to enjoy the sea breeze and a tranquil, relaxed lifestyle.",
      p2: "Located in Cala Gamba, this villa offers something practically impossible to find in this area of Palma: a **Private Pool**. This outdoor oasis, along with Aerothermal technology and copper finishes, defines a new standard of luxury.",
      p3: "The first floor is a haven of peace with three double bedrooms, each with an **En-suite Bathroom**, designed for maximum comfort and privacy.",
      list1: "**Private Pool**, a rarity in the area",
      list2: "Open living room connecting to the **garden**",
      list3: "**Mallorcan** essence with modern comfort"
    },
    plans: {
      title: "Layout",
      subtitle: "Spaces designed for functionality and comfort",
      ground_floor: "Ground Floor",
      first_floor: "First Floor",
      disclaimer: "Plans for illustrative purposes only."
    },
    lifestyle: {
      title: "Mediterranean Life All Year Round",
      subtitle: "Average monthly temperature in Palma de Mallorca (°C). Enjoy mild winters and radiant summers."
    },
    location: {
      title_prefix: "Privileged",
      title_highlight: "Location",
      description: "Cala Gamba offers the tranquility of a traditional coastal village with the convenience of being connected to Palma and the world in minutes.",
      places: {
        beach: "Cala Gamba Beach",
        club: "Yacht Club",
        airport: "PMI Airport",
        center: "Palma Center (Cathedral)",
        shopping: "Fan Mallorca Shopping"
      },
      times: {
        walk: "min walk",
        drive: "min drive"
      }
    },
    video: {
      title: "Visual Experience",
      subtitle: "Tour every corner of this exclusive property"
    },
    floating: {
      price_label: "Price",
      price_value: "€1,299,000",
      contact_button: "Contact"
    },
    footer: {
      legal: "Legal Note: Data shown is approximate and provided by the property.",
      contact: "Contact",
      privacy: "Privacy",
      offices_title: "Offices"
    }
  },
  de: {
    nav: {
      home: "Start",
      photos: "Fotos",
      video: "Video",
      plans: "Grundrisse",
      location: "Lage",
      contact: "Kontakt"
    },
    hero: {
      subtitle: "Cala Gamba · Mallorca",
      title: "Luxuszuflucht am Mittelmeer",
      description: "Eine moderne Villa, die die Meeresbrise und die mediterrane Ruhe atmet, mit dem einzigartigen Privileg eines privaten Pools.",
      cta: "Immobilie Entdecken",
      price_prefix: "Kaufpreis"
    },
    specs: {
      surface: "Wohnfläche",
      plot: "Grundstück",
      bedrooms: "Schlafzimmer",
      bathrooms: "Bäder",
      pool: "Pool",
      orientation: "Ausrichtung"
    },
    specs_values: {
      bathrooms: "3 Suiten + 1 Gäste-WC",
      orientation: "Ost / West",
      pool: "Privat (Exklusiv)"
    },
    description: {
      title_prefix: "Meeresbrise und",
      title_highlight: "Ruhe",
      p1: "Diese Immobilie schafft die perfekte Balance: ein **modernes Zuhause**, das den **mallorquinischen Touch** bewahrt. Hier koexistiert avantgardistisches Design mit der Essenz der Insel und ermöglicht es Ihnen, die Meeresbrise und einen ruhigen Lebensstil zu genießen.",
      p2: "In Cala Gamba gelegen, bietet diese Villa etwas, das in dieser Gegend von Palma fast unmöglich zu finden ist: einen **Privaten Pool**. Diese Außenoase definiert zusammen mit der Luftwärmepumpen-Technologie einen neuen Luxusstandard.",
      p3: "Der erste Stock ist ein Friedensrefugium mit drei Doppelzimmern, jedes mit **Bad en Suite**, entworfen für maximalen Komfort und Privatsphäre.",
      list1: "**Privater Pool**, eine Rarität in der Gegend",
      list2: "Offenes Wohnzimmer mit Zugang zum **Garten**",
      list3: "**Mallorquinische** Essenz mit modernem Komfort"
    },
    plans: {
      title: "Aufteilung",
      subtitle: "Räume für Funktionalität und Komfort entworfen",
      ground_floor: "Erdgeschoss",
      first_floor: "Erster Stock",
      disclaimer: "Grundrisse dienen nur zur Illustration."
    },
    lifestyle: {
      title: "Mediterranes Leben das ganze Jahr",
      subtitle: "Monatliche Durchschnittstemperatur in Palma de Mallorca (°C). Genießen Sie milde Winter und strahlende Sommer."
    },
    location: {
      title_prefix: "Privilegierte",
      title_highlight: "Lage",
      description: "Cala Gamba bietet die Ruhe eines traditionellen Küstendorfes mit der Bequemlichkeit, in wenigen Minuten mit Palma und der Welt verbunden zu sein.",
      places: {
        beach: "Strand Cala Gamba",
        club: "Yachtclub",
        airport: "Flughafen PMI",
        center: "Palma Zentrum (Kathedrale)",
        shopping: "Fan Mallorca Shopping"
      },
      times: {
        walk: "Min. zu Fuß",
        drive: "Min. Auto"
      }
    },
    video: {
      title: "Visuelles Erlebnis",
      subtitle: "Besichtigen Sie jeden Winkel dieser exklusiven Immobilie"
    },
    floating: {
      price_label: "Preis",
      price_value: "1.299.000 €",
      contact_button: "Kontaktieren"
    },
    footer: {
      legal: "Rechtlicher Hinweis: Die gezeigten Daten sind Annäherungswerte.",
      contact: "Kontakt",
      privacy: "Datenschutz",
      offices_title: "Büros"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      photos: "Photos",
      video: "Vidéo",
      plans: "Plans",
      location: "Emplacement",
      contact: "Contact"
    },
    hero: {
      subtitle: "Cala Gamba · Majorque",
      title: "Refuge de Luxe Méditerranéen",
      description: "Une villa moderne qui respire la brise marine et le calme méditerranéen, avec le privilège unique d'une piscine privée.",
      cta: "Découvrir la Propriété",
      price_prefix: "Prix de Vente"
    },
    specs: {
      surface: "Surface",
      plot: "Terrain",
      bedrooms: "Chambres",
      bathrooms: "Salles de bain",
      pool: "Piscine",
      orientation: "Orientation"
    },
    specs_values: {
      bathrooms: "3 Suites + 1 WC",
      orientation: "Est / Ouest",
      pool: "Privée (Exclusive)"
    },
    description: {
      title_prefix: "Brise Marine et",
      title_highlight: "Calme",
      p1: "Cette propriété atteint l'équilibre parfait : une **maison moderne** qui conserve intacte la **touche majorquine**. Ici, le design d'avant-garde coexiste avec l'essence de l'île, vous permettant de profiter de la brise marine et d'un mode de vie tranquille.",
      p2: "Située à Cala Gamba, cette villa offre quelque chose de pratiquement impossible à trouver dans ce quartier de Palma : une **Piscine Privée**. Cette oasis extérieure, avec la technologie aérothermique, définit un nouveau standard de luxe.",
      p3: "Le premier étage est un havre de paix avec trois chambres doubles, chacune avec **Salle de Bain Attenante**, conçues pour un confort maximal.",
      list1: "**Piscine Privée**, une rareté dans la région",
      list2: "Salon ouvert donnant sur le **jardin**",
      list3: "Essence **majorquine** avec confort moderne"
    },
    plans: {
      title: "Distribution",
      subtitle: "Espaces conçus pour la fonctionnalité et le confort",
      ground_floor: "Rez-de-Chaussée",
      first_floor: "Premier Étage",
      disclaimer: "Plans à titre indicatif uniquement."
    },
    lifestyle: {
      title: "Vie Méditerranéenne Toute l'Année",
      subtitle: "Température moyenne mensuelle à Palma de Majorque (°C). Profitez d'hivers doux et d'étés radieux."
    },
    location: {
      title_prefix: "Emplacement",
      title_highlight: "Privilégié",
      description: "Cala Gamba offre la tranquillité d'un village côtier traditionnel avec la commodité d'être connecté à Palma et au monde en quelques minutes.",
      places: {
        beach: "Plage de Cala Gamba",
        club: "Club Nautique",
        airport: "Aéroport PMI",
        center: "Centre de Palma (Cathédrale)",
        shopping: "Fan Mallorca Shopping"
      },
      times: {
        walk: "min à pied",
        drive: "min en voiture"
      }
    },
    video: {
      title: "Expérience Visuelle",
      subtitle: "Visitez chaque recoin de cette propriété exclusive"
    },
    floating: {
      price_label: "Prix",
      price_value: "1 299 000 €",
      contact_button: "Contacter"
    },
    footer: {
      legal: "Note légale : Les données affichées sont approximatives.",
      contact: "Contact",
      privacy: "Confidentialité",
      offices_title: "Bureaux"
    }
  },
  se: {
    nav: {
      home: "Hem",
      photos: "Foton",
      video: "Video",
      plans: "Planritningar",
      location: "Plats",
      contact: "Kontakt"
    },
    hero: {
      subtitle: "Cala Gamba · Mallorca",
      title: "Lyxig Medelhavstillflykt",
      description: "En modern villa som andas havsbris och medelhavslugn, med det unika privilegiet av en privat pool.",
      cta: "Upptäck Egendomen",
      price_prefix: "Utgångspris"
    },
    specs: {
      surface: "Boyta",
      plot: "Tomt",
      bedrooms: "Sovrum",
      bathrooms: "Badrum",
      pool: "Pool",
      orientation: "Orientering"
    },
    specs_values: {
      bathrooms: "3 Sviter + 1 WC",
      orientation: "Öst / Väst",
      pool: "Privat (Exklusiv)"
    },
    description: {
      title_prefix: "Havsbris och",
      title_highlight: "Lugn",
      p1: "Denna fastighet uppnår den perfekta balansen: ett **modernt hem** som behåller den **mallorkinska touchen** intakt. Här samexisterar avantgardistisk design med öns essens, vilket låter dig njuta av havsbrisen och en lugn livsstil.",
      p2: "Beläget i Cala Gamba, erbjuder denna villa något som är praktiskt taget omöjligt att hitta i detta område av Palma: en **Privat Pool**. Denna utomhusoas, tillsammans med luftvärmeteknik, definierar en ny standard för lyx.",
      p3: "Första våningen är en fristad av fred med tre dubbelrum, alla med **Badrum en Suite**, designade för maximal komfort och avskildhet.",
      list1: "**Privat Pool**, en sällsynthet i området",
      list2: "Öppet vardagsrum som ansluter till **trädgården**",
      list3: "**Mallorkinsk** essens med modern komfort"
    },
    plans: {
      title: "Layout",
      subtitle: "Utrymmen designade för funktionalitet och komfort",
      ground_floor: "Bottenvåning",
      first_floor: "Första Våningen",
      disclaimer: "Ritningar endast för illustrativa ändamål."
    },
    lifestyle: {
      title: "Medelhavsliv Året Runt",
      subtitle: "Genomsnittlig månadstemperatur i Palma de Mallorca (°C). Njut av milda vintrar och strålande somrar."
    },
    location: {
      title_prefix: "Privilegierat",
      title_highlight: "Läge",
      description: "Cala Gamba erbjuder lugnet i en traditionell kustby med bekvämligheten att vara ansluten till Palma och världen på några minuter.",
      places: {
        beach: "Cala Gamba Strand",
        club: "Yacht Club",
        airport: "PMI Flygplats",
        center: "Palma Centrum (Katedral)",
        shopping: "Fan Mallorca Shopping"
      },
      times: {
        walk: "min promenad",
        drive: "min bilfärd"
      }
    },
    video: {
      title: "Visuell Upplevelse",
      subtitle: "Besök varje hörn av denna exklusiva egendom"
    },
    floating: {
      price_label: "Pris",
      price_value: "1 299 000 €",
      contact_button: "Kontakta"
    },
    footer: {
      legal: "Rättslig anmärkning: Visade data är ungefärliga.",
      contact: "Kontakt",
      privacy: "Integritet",
      offices_title: "Kontor"
    }
  }
};