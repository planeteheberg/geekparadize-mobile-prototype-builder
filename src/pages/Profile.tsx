
import React from 'react';
import MobileLayout from '@/components/MobileLayout';
import { Settings, Heart, BookOpen, MessageSquare, LogOut } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ProfileScreen = () => {
  return (
    <MobileLayout>
      <div className="flex flex-col items-center pt-6 pb-10 px-4">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-geek-primary">
            <img
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-0 right-0 bg-geek-accent text-white p-1.5 rounded-full">
            <Settings size={16} />
          </button>
        </div>
        
        <h1 className="text-xl font-bold">Martin Dupont</h1>
        <p className="text-gray-500 text-sm mb-6">martin.dupont@gmail.com</p>
        
        <div className="flex w-full justify-around mb-6 text-center">
          <div>
            <p className="font-bold text-lg">183</p>
            <p className="text-sm text-gray-500">Articles</p>
          </div>
          <div>
            <p className="font-bold text-lg">56</p>
            <p className="text-sm text-gray-500">Favoris</p>
          </div>
          <div>
            <p className="font-bold text-lg">12</p>
            <p className="text-sm text-gray-500">Commandes</p>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="w-full space-y-3">
          <button className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Heart size={20} className="text-geek-accent mr-3" />
              <span>Mes favoris</span>
            </div>
            <span className="text-gray-400">→</span>
          </button>
          
          <button className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <BookOpen size={20} className="text-geek-primary mr-3" />
              <span>Mes articles lus</span>
            </div>
            <span className="text-gray-400">→</span>
          </button>
          
          <button className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <MessageSquare size={20} className="text-geek-secondary mr-3" />
              <span>Mes commentaires</span>
            </div>
            <span className="text-gray-400">→</span>
          </button>
          
          <button className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mt-6">
            <div className="flex items-center">
              <LogOut size={20} className="text-red-500 mr-3" />
              <span className="text-red-500">Déconnexion</span>
            </div>
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ProfileScreen;
