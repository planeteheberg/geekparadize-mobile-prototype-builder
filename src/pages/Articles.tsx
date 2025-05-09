
import React from 'react';
import MobileLayout from '@/components/MobileLayout';
import ArticleCard from '@/components/ArticleCard';

const articles = [
  {
    imageUrl: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
    title: 'Review: Le nouveau casque VR de Sony',
    excerpt: 'Notre test complet du PlayStation VR2',
    date: '12 mai',
    category: 'Tech'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/8885024/pexels-photo-8885024.jpeg',
    title: 'Le MCU dévoile son planning jusqu\'en 2026',
    excerpt: 'Marvel présente ses futures productions',
    date: '10 mai',
    category: 'Films'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/2240171/pexels-photo-2240171.jpeg',
    title: 'One Piece: Notre avis sur le chapitre 1086',
    excerpt: 'Eiichirō Oda surprend encore les fans',
    date: '8 mai',
    category: 'Mangas'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    title: 'Les nouveaux smartphones gaming en 2025',
    excerpt: 'Comparatif des meilleurs modèles',
    date: '5 mai',
    category: 'Tech'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg',
    title: 'The Boys saison 4: date de sortie et casting',
    excerpt: 'Tout ce qu\'on sait sur la nouvelle saison',
    date: '3 mai',
    category: 'Séries'
  },
  {
    imageUrl: 'https://images.pexels.com/photos/4145744/pexels-photo-4145744.jpeg',
    title: 'Top 10 des comics DC à lire absolument',
    excerpt: 'Notre sélection pour les fans de super-héros',
    date: '1 mai',
    category: 'Comics'
  }
];

const ArticlesScreen = () => {
  return (
    <MobileLayout>
      <div className="px-4 py-3">
        <h1 className="text-2xl font-bold mb-4">Tous les Articles</h1>
        
        <div className="flex items-center overflow-x-auto pb-2 mb-6 gap-2 no-scrollbar">
          <button className="px-3 py-1 bg-geek-primary text-white rounded-full text-sm whitespace-nowrap">
            Tous
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            Jeux Vidéo
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            Films
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            Séries
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            Mangas
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap">
            Tech
          </button>
        </div>
        
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </MobileLayout>
  );
};

export default ArticlesScreen;
