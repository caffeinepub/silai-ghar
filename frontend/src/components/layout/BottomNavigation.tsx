import React from 'react';
import { Home, Search, MapPin, CalendarCheck } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: 'home' | 'search' | 'map' | 'bookings';
  onTabChange: (tab: 'home' | 'search' | 'map' | 'bookings') => void;
}

const tabs = [
  { id: 'home' as const, label: 'Home', Icon: Home },
  { id: 'search' as const, label: 'Search', Icon: Search },
  { id: 'map' as const, label: 'Map', Icon: MapPin },
  { id: 'bookings' as const, label: 'Bookings', Icon: CalendarCheck },
];

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-card border-t border-border z-50">
      <div className="flex items-center justify-around px-2 py-2 pb-safe">
        {tabs.map(({ id, label, Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all duration-200 min-w-[60px] ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 1.8}
                className={isActive ? 'text-primary' : ''}
              />
              <span className={`text-[10px] font-medium tracking-wide ${isActive ? 'text-primary' : ''}`}>
                {label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
