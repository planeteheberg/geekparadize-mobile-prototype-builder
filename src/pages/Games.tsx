
import React from 'react';
import MobileLayout from '@/components/MobileLayout';
import { Star, Download } from 'lucide-react';

const games = [
  {
    id: 1,
    name: 'Cyber Knights',
    category: 'RPG',
    rating: 4.8,
    downloads: '5M+',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
  },
  {
    id: 2,
    name: 'Stellar Impact',
    category: 'Stratégie',
    rating: 4.5,
    downloads: '2M+',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg'
  },
  {
    id: 3,
    name: 'Pixel Dungeon',
    category: 'Aventure',
    rating: 4.7,
    downloads: '10M+',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg'
  },
  {
    id: 4,
    name: 'Asphalt Legends',
    category: 'Course',
    rating: 4.6,
    downloads: '50M+',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg'
  },
  {
    id: 5,
    name: 'Shadow Fight',
    category: 'Combat',
    rating: 4.2,
    downloads: '100M+',
    image: 'https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg'
  },
  {
    id: 6,
    name: 'Mind Puzzle',
    category: 'Puzzle',
    rating: 4.4,
    downloads: '25M+',
    image: 'https://images.pexels.com/photos/2277653/pexels-photo-2277653.jpeg'
  }
];

const GamesScreen = () => {
  return (
    <MobileLayout>
      <div className="px-4 py-3">
        <h1 className="text-2xl font-bold mb-4">Jeux Mobile</h1>
        
        <div className="flex items-center overflow-x-auto pb-2 mb-6 gap-2 no-scrollbar">
          <button className="px-3 py-1 bg-geek-primary text-white rounded-full text-sm whitespace-nowrap">
            Tous
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            Action
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            RPG
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            Aventure
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            Stratégie
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            Puzzle
          </button>
        </div>
        
        <div className="space-y-4 mb-20">
          {games.map((game) => (
            <div key={game.id} className="geek-card flex overflow-hidden">
              <div className="w-1/3">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold">{game.name}</h3>
                  <p className="text-xs text-gray-500">{game.category}</p>
                  <div className="flex items-center mt-1">
                    <Star size={14} fill="#FFD700" stroke="#FFD700" />
                    <span className="text-xs ml-1">{game.rating}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <Download size={14} className="text-gray-500" />
                    <span className="text-xs ml-1 text-gray-500">{game.downloads}</span>
                  </div>
                </div>
                <button className="geek-button py-1.5 px-4 text-sm mt-2">
                  Télécharger
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default GamesScreen;
