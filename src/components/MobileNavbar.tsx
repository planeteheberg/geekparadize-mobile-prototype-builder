
import React from 'react';
import { Home, BookOpen, Gift, Gamepad2, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Accueil', icon: Home, path: '/' },
  { name: 'Articles', icon: BookOpen, path: '/articles' },
  { name: 'Boutique', icon: Gift, path: '/shop' },
  { name: 'Jeux', icon: Gamepad2, path: '/games' },
  { name: 'Profil', icon: User, path: '/profile' },
];

const MobileNavbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto geek-glass border-t border-geek-primary/20">
      <div className="flex justify-between items-center px-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-3 px-2",
                isActive ? "text-geek-primary" : "text-gray-500"
              )}
            >
              <item.icon size={24} className={cn(
                isActive ? "text-geek-primary" : "text-gray-500"
              )} />
              <span className="text-xs mt-1 font-medium">{item.name}</span>
              {isActive && (
                <span className="absolute bottom-0 w-10 h-1 bg-geek-primary rounded-t-md" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavbar;
