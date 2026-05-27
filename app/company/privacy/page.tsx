'use client';

import Link from 'next/link';
import { Shield, ArrowLeft, Mail, Lock, Eye } from 'lucide-react';

export default function Privacy() {
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
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-950 tracking-tight">
            Aviso de Privacidad Simplificado
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
            Última actualización: Mayo 2026
          </p>
        </div>

        {/* ⚖️ CUERPO LEGAL DEL AVISO */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-600">
          
          <p>
            En <strong className="text-slate-950 font-semibold font-serif">Itacate Banquetes</strong>, con domicilio en el Estado de Oaxaca, México, valoramos la confianza que deposita en nosotros. Por ello, somos los responsables del tratamiento, uso y protección de sus datos personales, operando bajo los principios de licitud, consentimiento e información que dicta la legislación mexicana vigente.
          </p>

          {/* Sección 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <span className="text-amber-600 text-xs">01.</span> Datos Personales que Recopilamos
            </h3>
            <p>
              Para llevar a cabo las finalidades descritas en este documento, recopilamos únicamente los datos estrictamente necesarios a través de nuestro formulario web de cotización:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li>Nombre completo del organizador o contacto.</li>
              <li>Teléfono celular (para comunicación directa o WhatsApp).</li>
              <li>Detalles específicos de la celebración (fecha, número de invitados, tipo de menú o mesería requerida).</li>
            </ul>
            <p className="text-xs bg-slate-50 border border-slate-100 rounded-xl p-3 text-slate-500 mt-2 font-medium flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              Importante: Nuestro sitio web **no solicita, recopila ni procesa datos financieros** (tarjetas de crédito/débito) ni datos de carácter sensible.
            </p>
          </div>

          {/* Sección 2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <span className="text-amber-600 text-xs">02.</span> Finalidades del Tratamiento
            </h3>
            <p>
              Los datos personales que recabamos de usted serán utilizados exclusivamente para los siguientes objetivos comerciales esenciales:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              <li>Elaborar un presupuesto o cotización personalizada adaptada a sus requerimientos de banquetes o mesería.</li>
              <li>Establecer contacto telefónico o digital directo para dar seguimiento a la solicitud enviada.</li>
              <li>Agendar y verificar la disponibilidad de fechas operativas para su evento en Oaxaca.</li>
            </ol>
          </div>

          {/* Sección 3 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <span className="text-amber-600 text-xs">03.</span> Transferencia y Resguardo de Información
            </h3>
            <p>
              Nos comprometemos solemnemente a no vender, alquilar, transferir ni compartir sus datos personales con terceros, empresas aliadas o plataformas de publicidad ajenas a **Itacate Banquetes**. Su información es almacenada en entornos protegidos y accesibles únicamente por el personal administrativo encargado de las cotizaciones.
            </p>
          </div>

          {/* Sección 4 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <span className="text-amber-600 text-xs">04.</span> Derechos ARCO y Revocación del Consentimiento
            </h3>
            <p>
              Usted goza, en todo momento, del derecho constitucional de **Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO)** al uso de sus datos personales, así como de revocar el consentimiento que nos haya otorgado.
            </p>
            <p>
              Para ejercer cualquiera de estos derechos, basta con enviar una solicitud formal por escrito vía correo electrónico a la siguiente dirección oficial de atención:
            </p>
            
            {/* Box de correo */}
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl w-full max-w-md">
              <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Correo de Soporte</span>
                <a href="mailto:hola@itacatebanqueteria.com" className="text-sm font-bold text-slate-950 hover:text-amber-600 transition-colors underline">
                  hola@itacatebanqueteria.com
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}