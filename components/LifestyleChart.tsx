import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CLIMATE_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

export const LifestyleChart: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-brand-dark mb-4">{t.lifestyle.title}</h3>
            <p className="text-stone-500">{t.lifestyle.subtitle}</p>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={CLIMATE_DATA}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c5a059" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#c5a059" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 12}} unit="°" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#b87333' }}
              />
              <Area type="monotone" dataKey="temp" stroke="#b87333" fillOpacity={1} fill="url(#colorTemp)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};