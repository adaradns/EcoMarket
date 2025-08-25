import React, { useState } from 'react';
import type { CartItem, Product } from '../types';

// Singleton para el estado del carrito
let globalCart: CartItem[] = [];
let listeners: Array<() => void> = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

export const useCart = () => {
  const [_, setState] = useState({});
  
  React.useEffect(() => {
    const listener = () => setState({});
    listeners.push(listener);
    
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);
  
  const addToCart = (product: Product) => {
    const existingItem = globalCart.find(item => item.id === product.id);
    
    if (existingItem) {
      globalCart = globalCart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
      );
    } else {
      globalCart = [...globalCart, {...product, quantity: 1}];
    }
    
    notifyListeners();
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    
    globalCart = globalCart.map(item => 
      item.id === id 
        ? {...item, quantity: newQuantity} 
        : item
    );
    
    notifyListeners();
  };

  const removeFromCart = (id: number) => {
    globalCart = globalCart.filter(item => item.id !== id);
    notifyListeners();
  };

  const clearCart = () => {
    globalCart = [];
    notifyListeners();
  };

  return {
    cart: globalCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  };
};