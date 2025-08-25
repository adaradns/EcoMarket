import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Agregar logica para enviar el form.
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te responderemos pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ecoGreen-700 mb-4">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-ecoGreen-100 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-ecoGreen-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@ecomarket.com</p>
                  <p className="text-gray-600">soporte@ecomarket.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-ecoGreen-100 rounded-full flex items-center justify-center mr-4">
                  <FaPhone className="text-ecoGreen-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">+53 011 -- --</p>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-ecoGreen-100 rounded-full flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-ecoGreen-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">Calle Sostenibilidad, 123</p>
                  <p className="text-gray-600">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="mt-8">
              <div className="bg-ecoGreen-100 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Visítanos</h3>
                <div className="aspect-video bg-gray-200 rounded">
                  {/* Aquí iría un mapa real con Google Maps o similar */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <FaMapMarkerAlt className="text-2xl mr-2" />
                    <span>Mapa de ubicación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecoGreen-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecoGreen-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecoGreen-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="consulta">Consulta general</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="devolucion">Devoluciones</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecoGreen-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ecoGreen-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-ecoGreen-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Preguntas frecuentes</h3>
              <div className="space-y-3">
                {[
                  { q: "¿Hacen envíos a todo el país?", a: "Sí, realizamos envíos programados a todo Argentina." },
                  { q: "¿Los productos son 100% ecológicos?", a: "Todos nuestros productos cumplen con estrictos criterios de sostenibilidad." },
                  { q: "¿Ofrecen garantía?", a: "Sí, todos los productos tienen garantía del fabricante." }
                ].map((faq, index) => (
                  <details key={index} className="bg-white rounded-lg shadow-sm p-4">
                    <summary className="font-medium text-gray-800 cursor-pointer">{faq.q}</summary>
                    <p className="mt-2 text-gray-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;