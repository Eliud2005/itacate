'use client';

import { Camera, Sparkles, ZoomIn } from 'lucide-react';

export default function Gallery() {
  // Arreglo de fotos con imágenes profesionales de comida y eventos (puedes cambiarlas por las tuyas luego)
  const images = [
    {
      url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
      title: "Montaje de Banquetes",
      size: "md:col-span-2 md:row-span-2" // Tarjeta grande destacada
    },
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
      title: "Platillos Gourmet",
      size: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop",
      title: "Servicios de A y B",
      size: "md:col-span-1 md:row-span-2" // Tarjeta alta
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop",
      title: "Catas y Maridajes",
      size: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
      title: "Barras Libres y Coctelería",
      size: "md:col-span-2 md:row-span-1" // Tarjeta ancha
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-amber-200/60 uppercase">
              <Camera className="w-3.5 h-3.5" /> Galería Visual
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-slate-950">
              Momentos de nuestros <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">últimos eventos</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Un vistazo a la calidad de nuestros montajes, la presentación de los platillos y el servicio de nuestro equipo en acción.
            </p>
          </div>
          
          {/* Pequeña etiqueta de contador o texto decorativo */}
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" /> Sabor que se puede ver
          </div>
        </div>

        {/* Rejilla de Mosaico Asimétrica */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group shadow-md bg-slate-200 border border-white/40 ${img.size}`}
            >
              {/* Capa oscura superior interna al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-10" />
              
              {/* Imagen del Mosaico */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Contenido/Texto interactivo que aparece abajo de la foto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Servicio Itacate
                  </span>
                  <p className="text-lg font-bold text-white tracking-tight font-serif">
                    {img.title}
                  </p>
                </div>
                
                {/* Icono de zoom decorativo */}
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}