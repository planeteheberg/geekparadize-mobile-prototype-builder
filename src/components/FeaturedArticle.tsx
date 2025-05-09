
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
  imageUrl: string;
  title: string;
  excerpt: string;
  category: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  imageUrl,
  title,
  excerpt,
  category,
}) => {
  return (
    <div className="geek-card relative aspect-[3/2] mb-6">
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-geek-dark/90 to-transparent" />
      </div>
      <div className="absolute top-3 left-3">
        <span className="bg-geek-accent text-white px-3 py-1 rounded-md text-xs font-bold">
          {category}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-200 line-clamp-2 mb-3">{excerpt}</p>
        <button className="text-geek-secondary flex items-center space-x-1 text-sm font-semibold">
          <span>Lire l'article</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedArticle;
