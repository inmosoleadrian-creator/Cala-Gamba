import React from 'react';

export type Language = 'es' | 'en' | 'de' | 'fr' | 'se';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface PropertyFeature {
  labelKey: string;
  value: string | number;
  icon?: React.ReactNode;
}

export interface DistanceInfo {
  placeKey: string;
  distance: string;
  timeKey: string; // e.g., 'walking', 'driving'
  timeValue: number;
}

export interface ClimateData {
  month: string;
  temp: number;
}

export interface TranslationStructure {
  nav: {
    home: string;
    photos: string;
    video: string;
    plans: string;
    location: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
    price_prefix: string;
  };
  specs: {
    surface: string;
    plot: string;
    bedrooms: string;
    bathrooms: string;
    pool: string;
    orientation: string;
  };
  specs_values: {
    bathrooms: string;
    orientation: string;
    pool: string;
  };
  description: {
    title_prefix: string;
    title_highlight: string;
    p1: string;
    p2: string;
    p3: string;
    list1: string;
    list2: string;
    list3: string;
  };
  plans: {
    title: string;
    subtitle: string;
    ground_floor: string;
    first_floor: string;
    disclaimer: string;
  };
  lifestyle: {
    title: string;
    subtitle: string;
  };
  location: {
    title_prefix: string;
    title_highlight: string;
    description: string;
    places: {
      beach: string;
      club: string;
      airport: string;
      center: string;
      shopping: string;
    };
    times: {
      walk: string;
      drive: string;
    };
  };
  video: {
    title: string;
    subtitle: string;
  };
  floating: {
    price_label: string;
    price_value: string;
    contact_button: string;
  };
  footer: {
    legal: string;
    contact: string;
    privacy: string;
    offices_title: string;
  };
}