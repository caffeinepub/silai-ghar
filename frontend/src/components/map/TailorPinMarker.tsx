import React from 'react';
import { type Tailor } from '../../data/mockTailors';

interface TailorPinMarkerProps {
  tailor: Tailor;
  x: number;
  y: number;
  isSelected: boolean;
  onClick: (tailor: Tailor) => void;
}

export function TailorPinMarker({ tailor, x, y, isSelected, onClick }: TailorPinMarkerProps) {
  return (
    <button
      onClick={() => onClick(tailor)}
      style={{ left: `${x}%`, top: `${y}%` }}
      className="absolute -translate-x-1/2 -translate-y-full z-10 group"
    >
      <div className={`flex flex-col items-center transition-transform duration-200 ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
        <div
          className={`px-2 py-1 rounded-full text-[10px] font-bold shadow-md transition-colors ${
            isSelected
              ? 'bg-primary text-primary-foreground'
              : 'bg-card text-foreground border border-border'
          }`}
        >
          {tailor.priceRange}
        </div>
        <div
          className={`w-2 h-2 rounded-full mt-0.5 ${isSelected ? 'bg-primary' : 'bg-brown'}`}
        />
      </div>
    </button>
  );
}
