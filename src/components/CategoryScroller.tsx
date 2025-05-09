
import React from 'react';
import { Gamepad2, Film, Tv, BookOpen, Cpu, BookMarked } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'Jeux Vidéo', icon: Gamepad2, color: 'bg-geek-primary/10 text-geek-primary' },
  { name: 'Films', icon: Film, color: 'bg-geek-accent/10 text-geek-accent' },
  { name: 'Séries', icon: Tv, color: 'bg-blue-500/10 text-blue-500' },
  { name: 'Mangas', icon: BookOpen, color: 'bg-yellow-500/10 text-yellow-500' },
  { name: 'Tech', icon: Cpu, color: 'bg-geek-secondary/10 text-geek-secondary' },
  { name: 'Comics', icon: BookMarked, color: 'bg-purple-500/10 text-purple-500' },
];

const CategoryScroller = () => {
  return (
    <div className="my-6">
      <h3 className="text-lg font-bold mb-3 px-4">Catégories</h3>
      <div className="flex overflow-x-auto pb-2 px-4 no-scrollbar gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex-shrink-0"
          >
            <button className="flex flex-col items-center justify-center">
              <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-1", category.color)}>
                <category.icon size={24} />
              </div>
              <span className="text-xs font-medium">{category.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroller;
