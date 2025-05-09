
import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileHeader = () => {
  return (
    <header className="sticky top-0 z-10 geek-glass px-4 py-3">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="font-geek text-2xl font-bold text-geek-primary">
            Geek<span className="text-geek-accent">Paradize</span>
          </div>
        </Link>
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-full hover:bg-geek-dark/5">
            <Search size={22} className="text-geek-dark" />
          </button>
          <button className="p-2 rounded-full hover:bg-geek-dark/5">
            <Menu size={22} className="text-geek-dark" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
