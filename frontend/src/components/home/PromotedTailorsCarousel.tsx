import React from 'react';
import { Star } from 'lucide-react';
import { FEATURED_TAILORS, type Tailor } from '../../data/mockTailors';

const BANNER_IMAGES = [
  '/assets/generated/featured-tailor-banner-1.dim_600x300.png',
  '/assets/generated/featured-tailor-banner-2.dim_600x300.png',
];

interface PromotedTailorsCarouselProps {
  onTailorClick: (tailor: Tailor) => void;
}

export function PromotedTailorsCarousel({ onTailorClick }: PromotedTailorsCarouselProps) {
  return (
    <div>
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="font-serif text-lg font-semibold text-foreground">Featured Tailors</h2>
        <span className="text-xs text-primary font-medium">See all</span>
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-1">
        {FEATURED_TAILORS.map((tailor, idx) => (
          <button
            key={tailor.id}
            onClick={() => onTailorClick(tailor)}
            className="flex-shrink-0 w-[280px] rounded-2xl overflow-hidden shadow-card bg-card border border-border text-left hover:shadow-card-hover transition-shadow"
          >
            <div className="relative h-[140px] overflow-hidden">
              <img
                src={BANNER_IMAGES[idx % BANNER_IMAGES.length]}
                alt={tailor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-2.5 left-2.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                Featured
              </span>
            </div>
            <div className="p-3">
              <p className="font-semibold text-sm text-foreground truncate">{tailor.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">{tailor.tagline}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-amber-500 text-amber-500" />
                  <span className="text-xs font-semibold text-foreground">{tailor.rating}</span>
                  <span className="text-xs text-muted-foreground">({tailor.reviewCount})</span>
                </div>
                <span className="text-xs font-medium text-primary">{tailor.area}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
