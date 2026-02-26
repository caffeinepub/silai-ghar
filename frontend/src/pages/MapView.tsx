import React, { useState } from 'react';
import { ArrowLeft, List, MapPin } from 'lucide-react';
import { TailorPinMarker } from '../components/map/TailorPinMarker';
import { TailorPreviewCard } from '../components/map/TailorPreviewCard';
import { MOCK_TAILORS, type Tailor } from '../data/mockTailors';

// Normalized pin positions for a stylized Mumbai map (Andheri–Bandra corridor)
const PIN_POSITIONS: Record<string, { x: number; y: number }> = {
  '1': { x: 38, y: 22 },  // Andheri West
  '2': { x: 52, y: 68 },  // Bandra West
  '3': { x: 42, y: 42 },  // Juhu
  '4': { x: 60, y: 55 },  // Santacruz
  '5': { x: 55, y: 62 },  // Khar
  '6': { x: 28, y: 30 },  // Versova
  '7': { x: 65, y: 48 },  // Vile Parle
  '8': { x: 72, y: 25 },  // Andheri East
};

interface MapViewProps {
  onBack: () => void;
  onListView: () => void;
  onTailorClick: (tailor: Tailor) => void;
}

export function MapView({ onBack, onListView, onTailorClick }: MapViewProps) {
  const [selectedTailor, setSelectedTailor] = useState<Tailor | null>(null);

  const handlePinClick = (tailor: Tailor) => {
    setSelectedTailor(prev => prev?.id === tailor.id ? null : tailor);
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="bg-card px-4 pt-12 pb-3 border-b border-border">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h2 className="font-serif text-lg font-semibold text-foreground flex-1">Map View</h2>
          {/* Toggle */}
          <div className="flex bg-secondary rounded-xl p-1 gap-1">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium">
              <MapPin size={12} /> Map
            </button>
            <button
              onClick={onListView}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-muted-foreground text-xs font-medium hover:text-foreground transition-colors"
            >
              <List size={12} /> List
            </button>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative flex-1 bg-[#e8ddd0] overflow-hidden" style={{ minHeight: '420px' }}>
        {/* Stylized SVG map background */}
        <svg
          viewBox="0 0 400 420"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="400" height="420" fill="#ede5d8" />

          {/* Sea / water areas */}
          <path d="M0,0 L80,0 L60,420 L0,420 Z" fill="#c8dce8" opacity="0.5" />
          <path d="M320,0 L400,0 L400,420 L340,420 Z" fill="#c8dce8" opacity="0.3" />

          {/* Main roads */}
          <line x1="80" y1="0" x2="80" y2="420" stroke="#d4c4b0" strokeWidth="8" />
          <line x1="200" y1="0" x2="200" y2="420" stroke="#d4c4b0" strokeWidth="6" />
          <line x1="0" y1="140" x2="400" y2="140" stroke="#d4c4b0" strokeWidth="6" />
          <line x1="0" y1="280" x2="400" y2="280" stroke="#d4c4b0" strokeWidth="6" />
          <line x1="80" y1="0" x2="320" y2="420" stroke="#d4c4b0" strokeWidth="4" />

          {/* Secondary roads */}
          <line x1="140" y1="0" x2="140" y2="420" stroke="#ddd0be" strokeWidth="3" />
          <line x1="260" y1="0" x2="260" y2="420" stroke="#ddd0be" strokeWidth="3" />
          <line x1="0" y1="70" x2="400" y2="70" stroke="#ddd0be" strokeWidth="3" />
          <line x1="0" y1="210" x2="400" y2="210" stroke="#ddd0be" strokeWidth="3" />
          <line x1="0" y1="350" x2="400" y2="350" stroke="#ddd0be" strokeWidth="3" />

          {/* Area labels */}
          <text x="110" y="30" fontSize="9" fill="#9a8070" fontFamily="serif" fontWeight="600">VERSOVA</text>
          <text x="155" y="30" fontSize="9" fill="#9a8070" fontFamily="serif" fontWeight="600">ANDHERI W</text>
          <text x="270" y="30" fontSize="9" fill="#9a8070" fontFamily="serif" fontWeight="600">ANDHERI E</text>
          <text x="110" y="160" fontSize="9" fill="#9a8070" fontFamily="serif" fontWeight="600">JUHU</text>
          <text x="200" y="160" fontSize="9" fill="#9a8070" fontFamily="serif" fontWeight="600">SANTACRUZ</text>
          <text x="200" y="250" fontSize="9" fill="#9a8070" fontFamily="serif" fontWeight="600">KHAR</text>
          <text x="200" y="300" fontSize="9" fill="#9a8070" fontFamily="serif" fontWeight="600">BANDRA W</text>
          <text x="260" y="200" fontSize="9" fill="#9a8070" fontFamily="serif" fontWeight="600">VILE PARLE</text>

          {/* Parks / green areas */}
          <rect x="90" y="80" width="40" height="30" rx="4" fill="#c8d8b0" opacity="0.6" />
          <rect x="220" y="160" width="30" height="25" rx="4" fill="#c8d8b0" opacity="0.6" />
          <rect x="160" y="300" width="35" height="28" rx="4" fill="#c8d8b0" opacity="0.6" />
        </svg>

        {/* Pin markers */}
        {MOCK_TAILORS.map(tailor => {
          const pos = PIN_POSITIONS[tailor.id];
          if (!pos) return null;
          return (
            <TailorPinMarker
              key={tailor.id}
              tailor={tailor}
              x={pos.x}
              y={pos.y}
              isSelected={selectedTailor?.id === tailor.id}
              onClick={handlePinClick}
            />
          );
        })}

        {/* Legend */}
        <div className="absolute bottom-3 right-3 bg-card/90 rounded-xl px-3 py-2 text-xs text-muted-foreground border border-border">
          <p className="font-semibold text-foreground mb-1">Mumbai — West</p>
          <p>Tap a pin to preview</p>
        </div>
      </div>

      {/* Preview Card */}
      {selectedTailor && (
        <div className="py-3">
          <TailorPreviewCard
            tailor={selectedTailor}
            onViewProfile={onTailorClick}
            onClose={() => setSelectedTailor(null)}
          />
        </div>
      )}

      {/* Tailor count */}
      {!selectedTailor && (
        <div className="px-4 py-3 text-center">
          <p className="text-xs text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{MOCK_TAILORS.length} tailors</span> in your area
          </p>
        </div>
      )}
    </div>
  );
}
