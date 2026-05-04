import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const VirtualAgent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy tu asistente virtual para la residencia de Cala Gamba. ¿En qué puedo ayudarte? Pregúntame sobre distancias, calidades o el entorno.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Filter only last few messages for context to keep it snappy if needed, 
    // though the service handles history mapping.
    const responseText = await sendMessageToGemini(input, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-copper/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-2 bg-brand-gold/10 rounded-full mb-4">
                <Sparkles className="text-brand-gold w-5 h-5 mr-2" />
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">AI Concierge</span>
            </div>
            <h3 className="text-3xl font-serif text-white">¿Tienes preguntas?</h3>
            <p className="text-stone-400 mt-2">Nuestro agente inteligente conoce cada rincón de la propiedad.</p>
        </div>

        <div className="bg-stone-900 rounded-xl shadow-2xl overflow-hidden border border-stone-800">
          <div className="h-[400px] overflow-y-auto p-6 space-y-4 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-gold text-brand-dark rounded-tr-none' 
                    : 'bg-stone-800 text-stone-200 rounded-tl-none border border-stone-700'
                }`}>
                  {msg.role === 'model' && (
                    <div className="flex items-center mb-2 opacity-50 text-xs uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 mr-1" /> Asistente
                    </div>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-stone-800 rounded-lg rounded-tl-none p-4 border border-stone-700 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-brand-gold animate-spin" />
                  <span className="text-xs text-stone-400">Escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-stone-950 border-t border-stone-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ej: ¿Hay piscina? ¿A qué distancia está el aeropuerto?"
                className="flex-1 bg-stone-900 text-white placeholder-stone-600 border border-stone-700 rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-brand-gold hover:bg-white hover:text-brand-dark text-brand-dark px-4 py-2 rounded-md transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            {!process.env.API_KEY && (
                 <p className="text-[10px] text-red-400 mt-2 text-center">
                    * API Key no configurada. El chat no funcionará correctamente.
                 </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};