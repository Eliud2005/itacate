'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowRight, CornerDownRight } from 'lucide-react';

// Base de conocimientos del Chatbot (Preguntas y Respuestas)
const FAQ_DATA = [
  {
    category: "📌 Logística y Cobertura",
    questions: [
      {
        q: "¿Cuál es el mínimo de invitados para contratar?",
        a: "Nos adaptamos a tu evento. Para servicios de Banquetes y Catering operamos a partir de un mínimo de 15 personas. Para experiencias de Chef Privado o barras de coctelería, podemos atender grupos más pequeños (desde 2 a 10 personas)."
      },
      {
        q: "¿Tienen cobertura fuera de Oaxaca de Juárez?",
        a: "Sí, cubrimos todo el estado de Oaxaca (Valles Centrales, Costa, e Istmo). Los eventos fuera de la ciudad de Oaxaca de Juárez o zonas conurbadas generan un cargo adicional por concepto de viáticos y transporte del equipo."
      },
      {
        q: "¿Con cuánta anticipación debo reservar?",
        a: "Recomendamos agendar su fecha con al menos 2 o 3 semanas de anticipación para eventos pequeños, y de 2 a 6 meses para eventos grandes (bodas, graduaciones). Esto nos permite garantizar la disponibilidad del personal y la frescura de los insumos."
      }
    ]
  },
  {
    category: "🍽️ Menú y Alimentos",
    questions: [
      {
        q: "¿Cuentan con opciones veganas, vegetarianas o sin gluten?",
        a: "Por supuesto. Diseñamos menús personalizados que contemplan alergias, restricciones alimenticias, opciones vegetarianas, veganas y libres de gluten para que todos tus invitados disfruten al máximo."
      },
      {
        q: "¿Ofrecen pruebas de menú?",
        a: "Sí, ofrecemos sesiones de degustación para banquetes mayores a 50 personas una vez realizado el anticipo del apartado de la fecha. Esto asegura que el sazón y la presentación sean exactamente lo que buscas."
      }
    ]
  },
  {
    category: "💼 Servicio y Equipo",
    questions: [
      {
        q: "¿Qué incluye el servicio de meseros y barman?",
        a: "Nuestros paquetes de personal incluyen el servicio profesional por un bloque estándar de 5 horas de evento. El personal asiste completamente uniformado y capacitado. Las horas extra se cotizan de manera independiente."
      },
      {
        q: "¿Ustedes ponen la vajilla y el mobiliario?",
        a: "Ofrecemos el servicio integral. Dependiendo de tu presupuesto, podemos coordinar el montaje completo: vajilla de gala, cristalería, mantelería fina y mobiliario, o bien, encargarnos únicamente del servicio de alimentos."
      }
    ]
  },
  {
    category: "💳 Pagos y Contratación",
    questions: [
      {
        q: "¿Cómo se realiza el apartado y cuáles son las formas de pago?",
        a: "La fecha se congela formalmente con un 50% de anticipo al firmar el contrato. El 50% restante se liquida de 7 a 10 días antes del evento. Aceptamos transferencias bancarias, depósitos y efectivo."
      },
     
    ]
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatStage, setChatStage] = useState<'welcome' | 'category' | 'answer'>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<typeof FAQ_DATA[0] | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<{ q: string; a: string } | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scrollear al fondo cuando cambia la conversación
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatStage, selectedAnswer]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Botón Flotante para abrir/cerrar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Ventana del Chatbot */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white border border-slate-100 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in text-slate-800">
          
          {/* Encabezado */}
          <div className="bg-slate-950 p-4 text-white flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            <div>
              <h4 className="font-bold text-sm">Asistente Itacate</h4>
              <p className="text-[11px] text-slate-400">Resuestas al instante • En línea</p>
            </div>
          </div>

          {/* Cuerpo del Chat (Mensajes) */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            
            {/* Mensaje de bienvenida fijo */}
            <div className="flex items-start gap-2 max-w-[85%]">
              <div className="bg-amber-600 text-white p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed shadow-sm">
                ¡Hola! Qué gusto saludarte. Soy el asistente virtual de **Itacate Banquetería**. Estoy aquí para resolver tus dudas frecuentes de inmediato. ¿Sobre qué categoría te gustaría consultar?
              </div>
            </div>

            {/* FASE: Selección de Categoría */}
            {(chatStage === 'welcome' || chatStage === 'category' || chatStage === 'answer') && (
              <div className="space-y-2 pt-2">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider px-1">Selecciona un tema:</p>
                <div className="grid grid-cols-1 gap-2">
                  {FAQ_DATA.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setChatStage('category');
                        setSelectedAnswer(null);
                      }}
                      className={`text-left text-xs p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                        selectedCategory?.category === cat.category
                          ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold'
                          : 'bg-white border-slate-200 hover:border-amber-500 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.category}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FASE: Preguntas dentro de la categoría seleccionada */}
            {chatStage !== 'welcome' && selectedCategory && (
              <div className="space-y-2 pt-2 border-t border-slate-100 animate-fade-in">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider px-1">Preguntas disponibles:</p>
                <div className="space-y-2">
                  {selectedCategory.questions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedAnswer(item);
                        setChatStage('answer');
                      }}
                      className={`w-full text-left text-xs p-2.5 rounded-xl border transition-all flex items-start gap-2 ${
                        selectedAnswer?.q === item.q
                          ? 'bg-slate-900 border-slate-900 text-white'
                          : 'bg-white border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <CornerDownRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 opacity-60" />
                      <span>{item.q}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FASE: Despliegue de la Respuesta Seleccionada */}
            {chatStage === 'answer' && selectedAnswer && (
              <div className="flex items-start gap-2 max-w-[90%] pt-2 animate-fade-in">
                <div className="bg-amber-50 border border-amber-200/80 text-slate-900 p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed shadow-sm">
                  <p className="font-bold mb-1 text-amber-900">💡 Respuesta:</p>
                  {selectedAnswer.a}
                </div>
              </div>
            )}

            {/* Div auxiliar para el auto-scroll */}
            <div ref={chatEndRef} />
          </div>

          {/* Pie de página con Call to Action para cotizar */}
          <div className="p-3 bg-white border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-500 mb-1.5">¿Quieres un presupuesto exacto para tu evento?</p>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 bg-slate-950 text-white text-xs font-bold py-2 px-4 rounded-xl hover:bg-slate-800 transition-all w-full"
            >
              <Send className="w-3 h-3" /> Hablar con un humano / Cotizar
            </a>
          </div>

        </div>
      )}
    </div>
  );
}