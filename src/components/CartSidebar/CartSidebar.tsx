import React from 'react';
import type { CartItem } from '../../types';
import { FaTimes, FaMinus, FaPlus, FaTrash, FaShoppingCart } from 'react-icons/fa';

interface CartSidebarProps {
  cart: CartItem[];
  isOpen: boolean;
  toggleCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  cart, 
  isOpen, 
  toggleCart, 
  updateQuantity, 
  removeFromCart 
}) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = total > 10000 ? 0 : 5000;
  
  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Tu carrito</h2>
          <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={20} />
          </button>
        </div>
        
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <FaShoppingCart size={48} className="text-gray-300 mb-4" />
            <p className="text-gray-500">Tu carrito está vacío</p>
            <button 
              onClick={toggleCart}
              className="mt-4 px-4 py-2 bg-ecoGreen-500 text-white rounded-lg hover:bg-ecoGreen-600"
            >
              Seguir comprando
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex items-center mb-4 p-2 bg-gray-50 rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md"/>
                  <div className="ml-3 flex-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-ecoGreen-600 font-bold">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 bg-ecoGreen-100 text-ecoGreen-700 rounded-full flex items-center justify-center"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 ml-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Envío:</span>
                <span className="font-medium">{shippingCost === 0 ? 'Gratis' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total:</span>
                <span>${(total + shippingCost).toFixed(2)}</span>
              </div>
              
              <button className="w-full py-3 bg-ecoGreen-500 text-white rounded-lg font-medium hover:bg-ecoGreen-600 transition-colors">
                Proceder al pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;