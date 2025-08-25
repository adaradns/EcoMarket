import React from 'react';
import type { CartItem } from '../../types';
import { FaLeaf, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItems: CartItem[];
  toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, toggleCart }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <FaLeaf className="text-ecoGreen-500 text-2xl mr-2" />
          <h1 className="text-xl font-bold text-ecoGreen-700">EcoMarket</h1>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-ecoGreen-500">Inicio</Link>
          <Link to="/about" className="text-gray-600 hover:text-ecoGreen-500">Sobre nosotros</Link>
          <Link to="/contact" className="text-gray-600 hover:text-ecoGreen-500">Contacto</Link>
        </div>
        
        <div className="flex items-center">
          <button className="relative p-2" onClick={toggleCart}>
            <FaShoppingCart className="text-gray-700 text-xl" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-ecoGreen-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;