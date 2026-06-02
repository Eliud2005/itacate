'use client';

import { Utensils, Users, Wine, Cookie, Sparkles } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Chef Privado",
      description: "Experiencias gastronómicas exclusivas y menús personalizados preparados al momento por profesionales de la cocina."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Servicio de Meseros",
      description: "Personal de mesa calificado, uniformado y con amplia experiencia en etiqueta para asegurar una atención impecable a tus invitados."
    },
    {
      icon: <Wine className="w-6 h-6" />,
      title: "Barman y Barra de Bebidas",
      description: "Servicio profesional de coctelería, mixología moderna y barras libres diseñadas a la medida de tu celebración."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Banquetes y Catering",
      description: "Platillos exquisitos, buffets y una logística culinaria completa adaptada para todo tipo de eventos sociales y privados."
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Mesas de Snacks",
      description: "Estaciones de antojos, postres y bocadillos finamente decoradas que deleitarán visualmente y al paladar de tus comensales."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección (Premium & Real) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-amber-200/60 uppercase">
            Todo para tu evento en un solo lugar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-slate-950">
            Hacemos de tu evento una <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              experiencia inolvidable
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium tracking-wide max-w-xl mx-auto">
            Chef Privado • Barman • Meseros • Barra libre • Snacks • Banquetes <br />
            <span className="text-amber-600 font-semibold">Eventos sociales y privados</span>
          </p>
        </div>

        {/* Rejilla de Servicios Reales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md hover:bg-slate-950 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icono contenedor con transición al dorado/negro de tu marca */}
                <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-slate-950 transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Título y descripción */}
                <h3 className="text-xl font-bold text-slate-950 tracking-tight font-serif group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}