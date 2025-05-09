
import React from 'react';
import MobileLayout from '@/components/MobileLayout';
import FeaturedArticle from '@/components/FeaturedArticle';
import CategoryScroller from '@/components/CategoryScroller';
import ArticleCard from '@/components/ArticleCard';

const featuredArticle = {
  imageUrl: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg',
  title: 'Les jeux vidéo les plus attendus de 2025',
  excerpt: 'Découvrez notre sélection des titres qui vont marquer l\'industrie du jeu vidéo cette année.',
  category: 'Jeux Vidéo'
};

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
  }
];

const HomeScreen = () => {
  return (
    <MobileLayout className="bg-geek-light">
      <div className="px-4">
        <FeaturedArticle {...featuredArticle} />
      </div>

      <CategoryScroller />

      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">Articles Récents</h3>
          <button className="text-sm font-semibold text-geek-primary">Voir tout</button>
        </div>
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>

      <div className="px-4 mb-20">
        <div className="geek-card bg-gradient-to-r from-geek-primary to-geek-accent p-4 text-white">
          <h3 className="font-bold text-lg mb-2">Newsletter GeekParadize</h3>
          <p className="text-sm mb-3">Recevez nos actualités et bons plans directement dans votre boîte mail</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="flex-1 px-3 py-2 rounded-l-md text-black text-sm"
            />
            <button className="bg-geek-dark px-4 py-2 rounded-r-md font-semibold text-sm">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default HomeScreen;
