import React, { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { SearchResults } from './pages/SearchResults';
import { TailorProfile } from './pages/TailorProfile';
import { MapView } from './pages/MapView';
import { BookingConfirmation } from './pages/BookingConfirmation';
import { Bookings } from './pages/Bookings';
import { type Tailor } from './data/mockTailors';

type Screen =
  | { name: 'home' }
  | { name: 'search'; category?: string; query?: string }
  | { name: 'profile'; tailor: Tailor }
  | { name: 'map' }
  | { name: 'booking'; tailor: Tailor; service: string }
  | { name: 'bookings' };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });
  const [selectedArea, setSelectedArea] = useState('Andheri West');

  const activeTab = (() => {
    if (screen.name === 'home') return 'home';
    if (screen.name === 'search') return 'search';
    if (screen.name === 'map') return 'map';
    if (screen.name === 'bookings' || screen.name === 'booking') return 'bookings';
    return 'home';
  })() as 'home' | 'search' | 'map' | 'bookings';

  const handleTabChange = (tab: 'home' | 'search' | 'map' | 'bookings') => {
    if (tab === 'home') setScreen({ name: 'home' });
    else if (tab === 'search') setScreen({ name: 'search' });
    else if (tab === 'map') setScreen({ name: 'map' });
    else if (tab === 'bookings') setScreen({ name: 'bookings' });
  };

  const renderScreen = () => {
    switch (screen.name) {
      case 'home':
        return (
          <Home
            selectedArea={selectedArea}
            onAreaChange={setSelectedArea}
            onSearch={query => setScreen({ name: 'search', query })}
            onCategorySelect={category => setScreen({ name: 'search', category })}
            onTailorClick={tailor => setScreen({ name: 'profile', tailor })}
          />
        );

      case 'search':
        return (
          <SearchResults
            initialCategory={screen.category}
            initialQuery={screen.query}
            onBack={() => setScreen({ name: 'home' })}
            onTailorClick={tailor => setScreen({ name: 'profile', tailor })}
            onMapView={() => setScreen({ name: 'map' })}
          />
        );

      case 'profile':
        return (
          <TailorProfile
            tailor={screen.tailor}
            onBack={() => setScreen({ name: 'search' })}
            onBookConsultation={(tailor, service) =>
              setScreen({ name: 'booking', tailor, service })
            }
          />
        );

      case 'map':
        return (
          <MapView
            onBack={() => setScreen({ name: 'home' })}
            onListView={() => setScreen({ name: 'search' })}
            onTailorClick={tailor => setScreen({ name: 'profile', tailor })}
          />
        );

      case 'booking':
        return (
          <BookingConfirmation
            tailor={screen.tailor}
            service={screen.service}
            onBack={() => setScreen({ name: 'home' })}
          />
        );

      case 'bookings':
        return <Bookings />;

      default:
        return null;
    }
  };

  return (
    <AppLayout activeTab={activeTab} onTabChange={handleTabChange}>
      {renderScreen()}
    </AppLayout>
  );
}
