import React, { useState } from 'react';
import type { Product } from '../../types';
import { FaStar, FaCheck, FaCartPlus } from 'react-icons/fa';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        onAddToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, i) => (
            <FaStar
                key={i}
                className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
                size={14}
            />
        ));
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-96"> {/* Altura fija de 24rem (384px) */}
            <div className="relative flex-shrink-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-ecoGreen-500 text-white text-xs px-2 py-1 rounded-full">
                    {product.ecoRating}/5 Eco
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-1 text-gray-800 line-clamp-2">
                    {product.name}
                </h3>
                <div className="flex items-center mb-2">
                    {renderStars(product.rating)}
                    <span className="text-xs text-gray-500 ml-1">({product.rating.toFixed(1)})</span>
                </div>
                <p className="text-ecoGreen-700 font-bold text-xl mb-3">${product.price.toFixed(2)}</p>

                <button
                    onClick={handleAddToCart}
                    className={`w-full py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center mt-auto ${added
                        ? 'bg-ecoGreen-700 text-white'
                        : 'bg-ecoGreen-100 text-ecoGreen-700 hover:bg-ecoGreen-500 hover:text-white'
                        }`}
                >
                    {added ? (
                        <>
                            <FaCheck className="mr-1" /> Añadido
                        </>
                    ) : (
                        <>
                            <FaCartPlus className="mr-1" /> Añadir al carrito
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;