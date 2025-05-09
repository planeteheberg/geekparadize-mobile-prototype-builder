
import React from 'react';

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  title,
  excerpt,
  date,
  category,
}) => {
  return (
    <div className="geek-card flex h-24 mb-4">
      <div className="w-1/3">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="w-2/3 p-2 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-sm line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-600 line-clamp-1">{excerpt}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] bg-geek-primary/10 text-geek-primary px-2 py-px rounded-full">
            {category}
          </span>
          <span className="text-[10px] text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
