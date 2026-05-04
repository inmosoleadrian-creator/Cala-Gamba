import { GoogleGenAI } from "@google/genai";
import { FULL_CONTEXT_FOR_AI } from '../constants';

const apiKey = process.env.API_KEY || ''; 

// Singleton instance setup
let ai: GoogleGenAI | null = null;

const getAIInstance = () => {
  if (!ai && apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const sendMessageToGemini = async (
  message: string, 
  history: {role: 'user' | 'model', text: string}[]
): Promise<string> => {
  try {
    const aiInstance = getAIInstance();
    if (!aiInstance) {
        return "El servicio de asistente virtual no está disponible (Falta API Key). Por favor contacte directamente con el agente.";
    }

    const model = 'gemini-3-flash-preview';

    // Convert history to format expected by API if creating a chat, 
    // but for single turn with strong context, generateContent is often sufficient and stateless.
    // However, to maintain conversation flow, let's use the chat feature.
    
    // We pre-pend the system instruction to the history context conceptually
    const chat = aiInstance.chats.create({
      model: model,
      config: {
        systemInstruction: FULL_CONTEXT_FOR_AI,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Lo siento, no he podido procesar tu respuesta.";
    
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ha ocurrido un error al conectar con el asistente. Por favor, inténtelo de nuevo más tarde.";
  }
};