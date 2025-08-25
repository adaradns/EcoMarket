import React from 'react';
import type { Filters } from '../../types';

interface FilterSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters }) => {
  const categories = ['todos', 'hogar', 'higiene', 'alimentación', 'moda'];
  const ratings = [4, 3, 2, 1];
  
  const categoryLabels: Record<string, string> = {
    'todos': 'Todos',
    'hogar': 'Hogar',
    'higiene': 'Higiene',
    'alimentación': 'Alimentación',
    'moda': 'Moda'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0 md:w-64">
      <h2 className="font-bold text-lg mb-4 text-gray-800">Filtros</h2>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2 text-gray-700">Categorías</h3>
        {categories.map(category => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="radio"
              id={category}
              name="category"
              checked={filters.category === category}
              onChange={() => setFilters({...filters, category})}
              className="mr-2 text-ecoGreen-500 focus:ring-ecoGreen-500"
            />
            <label htmlFor={category} className="text-gray-600 capitalize">{categoryLabels[category]}</label>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2 text-gray-700">Precio</h3>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-600">${filters.minPrice}</span>
          <span className="text-sm text-gray-600">${filters.maxPrice}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.maxPrice}
          onChange={(e) => setFilters({...filters, maxPrice: parseInt(e.target.value)})}
          className="w-full h-2 bg-ecoGreen-100 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2 text-gray-700">Valoración mínima</h3>
        {ratings.map(rating => (
          <div key={rating} className="flex items-center mb-2">
            <input
              type="radio"
              id={`rating-${rating}`}
              name="minRating"
              checked={filters.minRating === rating}
              onChange={() => setFilters({...filters, minRating: rating})}
              className="mr-2 text-ecoGreen-500 focus:ring-ecoGreen-500"
            />
            <label htmlFor={`rating-${rating}`} className="text-gray-600">
              {rating} estrellas o más
            </label>
          </div>
        ))}
      </div>
      
      <button
        onClick={() => setFilters({
          category: 'todos',
          minPrice: 0,
          maxPrice: 100000,
          minRating: 0
        })}
        className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
      >
        Limpiar filtros
      </button>
    </div>
  );
};

export default FilterSidebar;