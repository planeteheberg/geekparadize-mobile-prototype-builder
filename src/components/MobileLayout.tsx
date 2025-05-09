
import React from 'react';
import MobileNavbar from './MobileNavbar';
import MobileHeader from './MobileHeader';
import { cn } from '@/lib/utils';

interface MobileLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, className }) => {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-geek-light relative">
      <MobileHeader />
      <main className={cn("flex-1 overflow-y-auto pb-20", className)}>
        {children}
      </main>
      <MobileNavbar />
    </div>
  );
};

export default MobileLayout;
