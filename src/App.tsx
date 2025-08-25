import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import FilterSidebar from './components/FilterSidebar';
import CartSidebar from './components/CartSidebar';
import { useCart } from './hooks/useCart';
import type { Product, Filters } from './types';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Layout from './components/Layout';

// Datos mock
const initialProducts: Product[] = [
  {
    id: 1,
    name: "Botella de agua reutilizable",
    price: 15000,
    category: "hogar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ecoRating: 5
  },
  {
    id: 2,
    name: "Cepillo de bambú",
    price: 8000,
    category: "higiene",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1589365252845-092198ba5334?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ecoRating: 4
  },
  {
    id: 3,
    name: "Bolsa de tela orgánica",
    price: 1500,
    category: "moda",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ecoRating: 5
  },
  {
    id: 4,
    name: "Pack de alimentos orgánicos",
    price: 20000,
    category: "alimentación",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ecoRating: 5
  },
  {
    id: 5,
    name: "Jabón natural artesanal",
    price: 7000,
    category: "higiene",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ecoRating: 4
  },
  {
    id: 6,
    name: "Set de cubiertos de bambú",
    price: 12200,
    category: "hogar",
    rating: 4.7,
    image: "https://plus.unsplash.com/premium_photo-1716278500973-efa071ddd3c1?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ecoRating: 5
  },
  {
    id: 7,
    name: "Florero ecologico",
    price: 18000,
    category: "hogar",
    rating: 3.7,
    image: "https://plus.unsplash.com/premium_photo-1746241622934-8b69bf688aa5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ecoRating: 5
  },
  {
    id: 8,
    name: "Shampoo natural",
    price: 5300,
    category: "higiene",
    rating: 4,
    image: "https://plus.unsplash.com/premium_photo-1661637670781-a902c7f051b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ecoRating: 5
  },
  {
    id: 9,
    name: "Snack naturales",
    price: 3200,
    category: "alimentación",
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1677735299500-83bfbbadf830?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ecoRating: 5
  },
];

const EcoMarket: React.FC = () => {
  const [products] = useState<Product[]>(initialProducts);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    category: 'todos',
    minPrice: 0,
    maxPrice: 100000,
    minRating: 0
  });
  
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const filteredProducts = products.filter(product => {
    return (
      (filters.category === 'todos' || product.category === filters.category) &&
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      product.rating >= filters.minRating
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-ecoGreen-700 mb-2">EcoMarket</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Productos sostenibles para un estilo de vida consciente con el medio ambiente.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar 
            filters={filters} 
            setFilters={setFilters} 
          />
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {filteredProducts.length} productos encontrados
              </h2>
              <div className="text-sm text-gray-500">
                Mostrando {Math.min(filteredProducts.length, 10)} de {products.length} productos
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
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
      
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<EcoMarket />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
