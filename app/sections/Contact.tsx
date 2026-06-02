'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, Calendar, Users, Send, CheckCircle, MapPin } from 'lucide-react';

export default function Contact() {
  // Estados para controlar el envío manualmente
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [minDate, setMinDate] = useState('');

  // Calculamos la fecha de hoy de manera dinámica
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Función para enviar los datos directamente al Formspree de Itacate
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mkoedbje", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Hubo un problema al enviar tu solicitud. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión. Intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* --- INFORMACIÓN DE CONTACTO REAL --- */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-amber-200/60 uppercase">
                Cotizaciones
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-slate-950">
                ¿Planeas un evento? <br />
                <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  Cotiza hoy mismo
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Platícanos qué tienes en mente. Nos adaptamos a tu presupuesto para ofrecerte platillos deliciosos y la mejor atención en Oaxaca.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teléfonos de Atención</p>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+529516424737" className="text-base font-bold text-slate-950 hover:text-amber-600 transition-colors block">951 642 4737</a>
                    <a href="tel:+529515772145" className="text-base font-bold text-slate-950 hover:text-amber-600 transition-colors block">951 577 2145</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ubicación</p>
                  <p className="text-base font-bold text-slate-950">Oaxaca, México</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Correo Electrónico</p>
                  <a href="mailto:itacatebanqueteria@gmail.com" className="text-base font-bold text-slate-950 hover:text-amber-600 transition-colors">
                    itacatebanqueteria@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- FORMULARIO DE COTIZACIÓN --- */}
          <div className="lg:col-span-3 bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 relative">
            
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-950">¡Solicitud recibida!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Hemos guardado tus datos. En breve nos pondremos en contacto contigo para enviarte tu propuesta personalizada.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)} 
                  className="mt-6 text-sm font-semibold text-amber-600 hover:text-amber-700 underline"
                >
                  Enviar otra cotización
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nombre Completo</label>
                    <input 
                      type="text" id="name" name="Nombre completo" required
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Teléfono celular</label>
                    <input 
                      type="tel" id="phone" name="Teléfono" required
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900"
                      placeholder="10 dígitos"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Correo Electrónico</label>
                  <input 
                    type="email" id="email" name="_replyto" required
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900"
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="eventType" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Servicio Requerido</label>
                    <div className="relative">
                      <select 
                        id="eventType" name="Servicio requerido" required
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900 appearance-none cursor-pointer"
                      >
                        <option value="">Selecciona un servicio...</option>
                        <option value="Chef Privado">Chef Privado</option>
                        <option value="Servicio de Meseros">Servicio de Meseros</option>
                        <option value="Barman / Barra de bebidas">Barman / Barra de bebidas</option>
                        <option value="Banquetes y Catering">Banquetes y Catering</option>
                        <option value="Mesas de snacks y coctelería">Mesas de snacks y coctelería</option>
                        <option value="Servicio Integral">Todo para mi evento (Servicio Integral)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">▼</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="guests" className="text-xs font-bold text-slate-700 uppercase tracking-wider">No. de Invitados</label>
                    <div className="relative">
                      <Users className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                      <input 
                        type="number" id="guests" name="Número de invitados" required min="1"
                        className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900"
                        placeholder="Cantidad"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Fecha del Evento</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                    <input 
                      type="date" id="date" name="Fecha del evento" required min={minDate}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Detalles adicionales</label>
                  <textarea 
                    id="details" name="Detalles adicionales" rows={3}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="Cuéntanos más sobre tu evento..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-950 text-white font-bold py-4 px-6 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-950/10 flex items-center justify-center gap-2 disabled:bg-slate-400"
                >
                  <Send className="w-4 h-4" /> {isSubmitting ? 'Enviando...' : 'Enviar Solicitud de Cotización'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}