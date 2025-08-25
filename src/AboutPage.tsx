import React from 'react';
import { FaLeaf, FaRecycle, FaHandsHelping, FaHeart } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ecoGreen-700 mb-4">Sobre EcoMarket</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectando a consumidores conscientes con productos que cuidan del planeta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-ecoGreen-100 rounded-full flex items-center justify-center mb-6">
              <FaLeaf className="text-ecoGreen-500 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
            <p className="text-gray-600">
              Facilitar el acceso a productos sostenibles y ecológicos, promoviendo un estilo de vida 
              consciente que reduzca el impacto ambiental y apoye a comunidades locales y productores 
              responsables.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-ecoGreen-100 rounded-full flex items-center justify-center mb-6">
              <FaRecycle className="text-ecoGreen-500 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
            <p className="text-gray-600">
              Ser la plataforma líder en comercio sostenible, donde cada compra contribuya positivamente 
              al medio ambiente e inspire a más personas a unirse al movimiento eco-friendly.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-ecoGreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-ecoGreen-500 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sostenibilidad</h3>
              <p className="text-gray-600">
                Priorizamos productos que minimicen el impacto ambiental y promuevan la conservación de recursos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-ecoGreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-ecoGreen-500 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comunidad</h3>
              <p className="text-gray-600">
                Apoyamos a pequeños productores y comunidades locales que comparten nuestra visión ecológica.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-ecoGreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-ecoGreen-500 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparencia</h3>
              <p className="text-gray-600">
                Ofrecemos información clara sobre el origen e impacto ambiental de cada producto que vendemos.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestra Historia</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              EcoMarket nació en 2020 de la pasión de un grupo de amigos por la conservación ambiental 
              y la preocupación por el creciente problema de la contaminación por plásticos y el consumo 
              desmedido.
            </p>
            <p className="mb-4">
              Lo que comenzó como un pequeño proyecto local para promover productos ecológicos en nuestra 
              comunidad, pronto creció gracias al apoyo de personas conscientes que compartían nuestra 
              visión. Hoy somos una plataforma que conecta a miles de consumidores con productos que 
              realmente marcan la diferencia.
            </p>
            <p>
              Cada día trabajamos para expandir nuestro catálogo con productos que cumplan con los 
              estándares de sostenibilidad y calidad, siempre manteniendo nuestro compromiso 
              con el planeta y las futuras generaciones.
            </p>
          </div>
        </div>

        {/* Equipo */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'María González', role: 'Fundadora & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300' },
              { name: 'Carlos Rodríguez', role: 'Director de Sostenibilidad', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300' },
              { name: 'Ana Martínez', role: 'Jefa de Compras', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300' },
              { name: 'Javier López', role: 'Community Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-ecoGreen-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;