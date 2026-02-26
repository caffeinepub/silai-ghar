import React from 'react';
import { BottomNavigation } from './BottomNavigation';

interface AppLayoutProps {
  activeTab: 'home' | 'search' | 'map' | 'bookings';
  onTabChange: (tab: 'home' | 'search' | 'map' | 'bookings') => void;
  children: React.ReactNode;
}

export function AppLayout({ activeTab, onTabChange, children }: AppLayoutProps) {
  return (
    <div className="min-h-dvh bg-background flex justify-center">
      <div className="mobile-container bg-background relative">
        <main className="pb-20 min-h-dvh overflow-y-auto">
          {children}
        </main>
        <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
      </div>
    </div>
  );
}
