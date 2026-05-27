'use client';

import { UtensilsCrossed, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden flex items-center">
      
      {/* Decoración geométrica sutil de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-100/40 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto Principal (Izquierda) */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-amber-200/60 shadow-sm animate-fade-in">
              ✨ Servicio Profesional para Eventos
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-none font-serif">
              Tu banquetera de confianza. <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Sabor y servicio impecable.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Nos encargamos de todo para que disfrutes de tu evento. Platillos exquisitos con sazón casero y un equipo de meseros profesionales listos para atender a tus invitados como se merecen.
            </p>

            {/* Puntos clave de confianza */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-slate-700 font-medium pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Meseros calificados
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Banquetes a la medida
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Puntualidad garantizada
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#contacto" 
                className="bg-slate-950 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-slate-950/10 hover:bg-slate-800 transition-all text-center"
              >
                Ver Paquetes
              </a>
              <a 
                href="#menu" 
                className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all text-center shadow-sm"
              >
                Explorar Menú
              </a>
            </div>
          </div>

          {/* Composición Visual / Imagen (Derecha) */}
          <div className="relative lg:h-[500px] w-full hidden md:block">
            {/* Efecto de fondo girado */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-orange-100 rounded-3xl transform rotate-3 scale-95 opacity-60 filter blur-sm"></div>
            
            {/* Contenedor de Imagen Principal */}
            <div className="relative h-full w-full bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
              <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop" 
                alt="Servicio de banquetes y comida profesional" 
                className="w-full h-full object-cover"
              />
              
              {/* Tarjeta flotante interactiva */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg z-20 flex items-center gap-4 max-w-xs border border-white/20">
                <div className="bg-amber-500 text-white p-3 rounded-xl flex-shrink-0">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-950 text-sm">Eventos Exitosos</p>
                  <p className="text-xs text-slate-600">Bodas, banquetes familiares, graduaciones y reuniones ejecutivas.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}