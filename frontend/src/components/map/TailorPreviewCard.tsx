import React from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { type Tailor } from '../../data/mockTailors';
import { Button } from '@/components/ui/button';

interface TailorPreviewCardProps {
  tailor: Tailor;
  onViewProfile: (tailor: Tailor) => void;
  onClose: () => void;
}

export function TailorPreviewCard({ tailor, onViewProfile, onClose }: TailorPreviewCardProps) {
  return (
    <div className="mx-4 bg-card border border-border rounded-2xl shadow-card p-4 animate-slide-up">
      <div className="flex gap-3">
        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-secondary">
          <img
            src={tailor.portfolioImages[0]}
            alt={tailor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-foreground truncate">{tailor.name}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <Star size={11} className="fill-amber-500 text-amber-500" />
            <span className="text-xs font-semibold">{tailor.rating}</span>
            <span className="text-xs text-muted-foreground">({tailor.reviewCount})</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <MapPin size={11} className="text-muted-foreground" />
            <p className="text-xs text-muted-foreground truncate">{tailor.area}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-muted-foreground text-lg leading-none self-start">×</button>
      </div>
      <Button
        onClick={() => onViewProfile(tailor)}
        className="w-full mt-3 rounded-xl bg-primary text-primary-foreground text-sm h-9 hover:bg-primary/90"
      >
        View Profile <ArrowRight size={14} className="ml-1" />
      </Button>
    </div>
  );
}
