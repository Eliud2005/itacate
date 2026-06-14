"use client";

import Link from "next/link";
import { UtensilsCrossed, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gradient-to-b from-[#06080f] via-[#0c1120] to-[#06080f] text-zinc-300 border-t border-zinc-900/80 py-16 relative overflow-hidden">
      
      {/* Esfera de luz ambiental cian para simular el reflejo del diamante en el suelo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* REJILLA PRINCIPAL: 3 Columnas adaptadas al diseño limpio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca y Eslogan (Itacate) */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white">
              <UtensilsCrossed className="h-5 w-5 text-amber-500" />
              <span className="text-xl font-bold tracking-tight font-serif bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
                Itacate
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs font-light">
              Profesionales en banquetes, banquetes tradicionales y servicios de mesería calificada. Llevamos el mejor sabor y atención impecable a cualquier tipo de evento.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#servicios" className="text-zinc-400 hover:text-amber-500 font-medium transition-colors duration-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#galeria" className="text-zinc-400 hover:text-amber-500 font-medium transition-colors duration-200">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales en lista limpia */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Redes Sociales
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://www.facebook.com/profile.php?id=61589244178956&rdid=iaVEBYeUtuDaxyXT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17o17VWhGR%2F#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-500 font-medium transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  Facebook ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/itacatebanqueteria/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-500 font-medium transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/9516424737" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-500 font-medium transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  WhatsApp ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* LÍNEA DIVISORIA INFERIOR, DERECHOS Y FIRMA IDÉNTICA */}
        <div className="border-t border-zinc-900/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; {currentYear} Itacate. Todos los derechos reservados.
            </p>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <div className="flex gap-4 font-medium">
              <Link href="/company/privacy" className="hover:text-zinc-400 transition-colors duration-200">Aviso de Privacidad</Link>
              <Link href="/company/terms" className="hover:text-zinc-300 transition-colors duration-200">Términos de Servicio</Link>
            </div>
          </div>
          
          {/* 💎 SIGNATURE BADGE REPLICADO EXACTAMENTE IGUAL AL PRIMERO */}
          <p className="flex items-center gap-1.5 text-zinc-400 font-medium">
            Hecho con{" "}
            <span className="inline-block animate-[spin_4s_linear_infinite] origin-center text-[13px] select-none filter drop-shadow-[0_0_4px_rgba(34,211,238,0.4)]">
              💎
            </span>{" "}
            por{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold tracking-wide">
              DiamondCode
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}