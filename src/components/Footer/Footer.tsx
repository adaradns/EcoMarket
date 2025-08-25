import React from 'react';
import { FaLeaf, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
             <FaLeaf className="text-ecoGreen-500 text-2xl mr-2" />
            <span className="font-bold text-ecoGreen-700">EcoMarket</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-ecoGreen-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-ecoGreen-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-ecoGreen-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-ecoGreen-500">
              <FaPinterest />
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} EcoMarket - Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;