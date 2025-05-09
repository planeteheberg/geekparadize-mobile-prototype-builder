
import React from 'react';
import MobileLayout from '@/components/MobileLayout';
import { Filter, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'T-shirt One Piece',
    price: '24,99 €',
    image: 'https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg'
  },
  {
    id: 2,
    name: 'Figurine Marvel Avengers',
    price: '49,99 €',
    image: 'https://images.pexels.com/photos/5005399/pexels-photo-5005399.jpeg'
  },
  {
    id: 3,
    name: 'Mug Star Wars',
    price: '14,99 €',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg'
  },
  {
    id: 4,
    name: 'Poster Attack on Titan',
    price: '19,99 €',
    image: 'https://images.pexels.com/photos/1034665/pexels-photo-1034665.jpeg'
  },
  {
    id: 5,
    name: 'Porte-clés Pokemon',
    price: '9,99 €',
    image: 'https://images.pexels.com/photos/2523572/pexels-photo-2523572.jpeg'
  },
  {
    id: 6,
    name: 'BD Batman Edition Collector',
    price: '29,99 €',
    image: 'https://images.pexels.com/photos/5005399/pexels-photo-5005399.jpeg'
  }
];

const ShopScreen = () => {
  return (
    <MobileLayout>
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Boutique</h1>
          <div className="relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 bg-geek-accent text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
        </div>
        
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Filter size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-20">
          {products.map((product) => (
            <div key={product.id} className="geek-card">
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-1">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-geek-primary">{product.price}</span>
                  <button className="bg-geek-primary text-white p-1.5 rounded-md">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default ShopScreen;
