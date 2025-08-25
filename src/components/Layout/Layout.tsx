import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import CartSidebar from '../CartSidebar';
import { useCart } from '../../hooks/useCart';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, updateQuantity, removeFromCart } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header cartItems={cart} toggleCart={toggleCart} />
      
      <main className="flex-1">
        {children}
      </main>
      
      <CartSidebar 
        cart={cart}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleCart}
        ></div>
      )}
      
      <Footer />
    </div>
  );
};

export default Layout;