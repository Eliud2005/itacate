'use client';

import Link from 'next/link';
import { Scale, ArrowLeft, FileText, AlertCircle, CalendarClock } from 'lucide-react';

export default function Terms() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-800 min-h-screen flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* 🔙 BOTÓN DE REGRESO */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-amber-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Regresar al Inicio
          </Link>
        </div>

        {/* 📝 ENCABEZADO */}
        <div className="border-b border-slate-100 pb-8 mb-10 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60">
            <Scale className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-950 tracking-tight">
            Términos de Servicio
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
            Última actualización: Mayo 2026
          </p>
        </div>

        {/* ⚖️ CUERPO DE LOS TÉRMINOS Y CONDICIONES */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-600">
          
          <p>
            Al acceder, navegar y utilizar el sitio web de <strong className="text-slate-950 font-semibold font-serif">Itacate Banquetes</strong> para consultar nuestros servicios o enviar solicitudes de presupuesto, usted acepta de manera expresa y sin reserva alguna los presentes Términos de Servicio. Si no está de acuerdo con estas cláusulas, le sugerimos abstenerse de utilizar el sitio.
          </p>

          {/* Sección 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <span className="text-amber-600 text-xs">01.</span> Naturaleza Informativa del Sitio
            </h3>
            <p>
              Este espacio digital ha sido diseñado con un propósito estrictamente publicitario, comercial e informativo. Su función principal es dar a conocer los paquetes culinarios, servicio de mesería, barras de bebidas y chef privado disponibles dentro de la región de Oaxaca, sirviendo como un canal directo de comunicación entre el cliente y nuestro equipo de atención.
            </p>
          </div>

          {/* Sección 2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <span className="text-amber-600 text-xs">02.</span> Políticas de Cotización y Reserva de Fechas
            </h3>
            <p>
              Para evitar cualquier malentendido en la planeación de sus eventos, el usuario acepta conocer las siguientes pautas operativas:
            </p>
            
            {/* Cláusula crítica de protección */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3 mt-2">
              <div className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <CalendarClock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-950 mb-1">Cláusula de No-Reserva Automática:</p>
                  El envío de un formulario de cotización a través de esta plataforma **no constituye un contrato definitivo, ni garantiza de ninguna manera el apartado o la disponibilidad de la fecha solicitada**.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-950 mb-1">Formalización del Servicio:</p>
                  Un servicio de banquetes o mesería únicamente se considerará reservado y agendado con firmeza legal una vez que se cumplan las dos condiciones administrativas internas: **la firma de nuestro contrato físico o digital formal** y **el depósito del anticipo correspondiente** acordado previamente con la administración de Itacate.
                </div>
              </div>
            </div>
          </div>

          {/* Sección 3 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <span className="text-amber-600 text-xs">03.</span> Precisión de Datos y Uso Correcto
            </h3>
            <p>
              El usuario se compromete a ingresar información verídica, exacta y vigente (especialmente su nombre, teléfono celular de 10 dígitos y correo electrónico) en los campos del formulario. Itacate Banquetes se reserva el derecho de descartar, ignorar o borrar cualquier solicitud que presente datos visiblemente falsos, erróneos o malintencionados.
            </p>
          </div>

          {/* Sección 4 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <span className="text-amber-600 text-xs">04.</span> Modificación de Menús y Precios
            </h3>
            <p>
              Debido a que la alta cocina tradicional depende directamente de la frescura e insumos locales de temporada en Oaxaca, Itacate Banquetes se reserva la facultad de modificar, actualizar o sustituir platillos, paquetes y precios estimados expuestos en el sitio web sin necesidad de aviso previo. Los importes vigentes y finales serán únicamente los estipulados de forma explícita en las cotizaciones formales enviadas por nuestros asesores.
            </p>
          </div>

          {/* Sección 5 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <span className="text-amber-600 text-xs">05.</span> Propiedad Intelectual
            </h3>
            <p>
              Todos los logotipos, diseños, combinaciones de colores, textos publicitarios y recursos fotográficos mostrados en este sitio web son propiedad exclusiva de Itacate Banquetes o se cuenta con las licencias correspondientes de uso. Queda estrictamente prohibida su reproducción parcial o total con fines comerciales de terceros sin autorización expresa.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}