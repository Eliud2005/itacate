'use client';

import Link from 'next/link';
import { UtensilsCrossed, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 items-start">
          
          {/* Columna 1: Marca y Eslogan */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <UtensilsCrossed className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold tracking-tight font-serif bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
                Itacate
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Profesionales en banquetes, banquetes tradicionales y servicios de mesería calificada. Llevamos el mejor sabor y atención impecable a cualquier tipo de evento social o empresarial.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#servicios" className="hover:text-amber-500 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#galeria" className="hover:text-amber-500 transition-colors">
                  Galería
                </Link>
              </li>
           
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Redes Sociales</h4>
            <div className="flex items-center gap-4 text-slate-400">
              
              {/* Botón de Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61589244178956&rdid=iaVEBYeUtuDaxyXT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17o17VWhGR%2F#" target="_blank" rel="noreferrer"
                className="hover:text-amber-500 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>

              {/* Botón de Instagram */}
              <a 
                href="https://www.instagram.com/itacatebanqueteria/" target="_blank" rel="noreferrer"
                className="hover:text-amber-500 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Botón de WhatsApp */}
              <a 
                href="https://wa.me/9516424737" target="_blank" rel="noreferrer"
                className="hover:text-amber-500 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* --- LÍNEA DIVISORIA Y COPYRIGHT --- */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
            <p>© {currentYear} Itacate. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              {/* 🔒 Enlaces reales cambiados a componentes <Link> */}
              <Link href="/company/privacy" className="hover:text-slate-400 transition-colors">
                Aviso de Privacidad
              </Link>
              <Link href="/company/terms" className="hover:text-slate-400 transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>

          {/* 💎 SIGNATURE BADGE: DIAMONDCODE */}
          <div className="flex items-center gap-2.5 text-slate-400 bg-slate-950 px-4 py-2 rounded-2xl border border-slate-900 shadow-inner group cursor-default transition-all duration-300 hover:border-cyan-500/20 hover:bg-gradient-to-r hover:from-slate-950 hover:to-slate-900">
            <span className="text-[11px] font-medium tracking-wide text-slate-500 group-hover:text-slate-400 transition-colors">
              Desarrollado por
            </span>
            
            <div className="flex items-center gap-2 pl-2 border-l border-slate-800 group-hover:border-cyan-500/30 transition-colors">
              <div className="relative w-7 h-7 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center shadow-md shadow-black/50 overflow-visible transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-500/30">
                <span className="text-sm select-none animate-[bounce_4s_infinite] drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)]">
                  💎
                </span>
                <div className="absolute inset-0 bg-cyan-500/0 rounded-lg group-hover:bg-cyan-500/5 blur-sm transition-all duration-300" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-xs font-black tracking-tight text-white transition-colors group-hover:text-cyan-200">
                  Diamond<span className="text-zinc-400 font-medium group-hover:text-white transition-colors">Code</span>
                </span>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </footer>
  );
}