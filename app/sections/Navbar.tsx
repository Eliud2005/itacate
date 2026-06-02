'use client';

import { useState } from 'react';
import { Menu, X, UtensilsCrossed, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
            {/* Logo */}
         {/* Logo */}
<div className="flex items-center gap-3 cursor-pointer">
  {/* Imagen del Logo Circular */}
  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-amber-500/30 shadow-md">
    <img 
      src="../assets/images/logo3.png" 
      alt="Itacate Banquetearía Logo" 
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Texto Estilizado al lado */}
  <div className="flex flex-col justify-center">
    <span className="text-lg font-bold tracking-tight font-serif text-slate-950 leading-none">
      Itacate
    </span>
    <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-600 mt-1 leading-none">
      Banquetería
    </span>
  </div>
</div>

          {/* Menú Escritorio (Desktop) */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-amber-600 transition-colors">Servicios</a>
            <a href="#gallery" className="hover:text-amber-600 transition-colors">Galería</a>
            <a 
              href="#contact" 
              className="bg-amber-600 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-amber-700 transition-all font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Cotizar Evento
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a 
            href="#services" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Servicios
          </a>
          <a 
            href="#gallery" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Menú
          </a>
          <a 
            href="#aboutus" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Nosotros
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block text-center bg-amber-600 text-white px-4 py-3 rounded-xl font-semibold shadow-sm hover:bg-amber-700 transition-colors"
          >
            Cotizar Evento
          </a>
        </div>
      )}
    </nav>
  );
}