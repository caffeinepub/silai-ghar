import React from 'react';
import { Star, MapPin, Phone, Navigation } from 'lucide-react';
import { type Tailor } from '../../data/mockTailors';
import { Badge } from '@/components/ui/badge';

interface TailorCardProps {
  tailor: Tailor;
  onClick: (tailor: Tailor) => void;
}

export function TailorCard({ tailor, onClick }: TailorCardProps) {
  return (
    <button
      onClick={() => onClick(tailor)}
      className="w-full bg-card border border-border rounded-2xl overflow-hidden shadow-xs hover:shadow-card transition-shadow text-left active:scale-[0.99]"
    >
      <div className="flex gap-3 p-3">
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-20 h-24 rounded-xl overflow-hidden bg-secondary">
          <img
            src={tailor.portfolioImages[0]}
            alt={tailor.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <p className="font-semibold text-sm text-foreground leading-tight truncate pr-1">{tailor.name}</p>
            <span className="flex-shrink-0 text-xs font-bold text-brown bg-cream-dark px-1.5 py-0.5 rounded-md">
              {tailor.priceRange}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            {[1, 2, 3, 4, 5].map(star => (
              <Star
                key={star}
                size={11}
                className={star <= Math.round(tailor.rating) ? 'fill-amber-500 text-amber-500' : 'text-muted-foreground'}
              />
            ))}
            <span className="text-xs font-semibold text-foreground ml-0.5">{tailor.rating}</span>
            <span className="text-xs text-muted-foreground">({tailor.reviewCount})</span>
          </div>

          {/* Address */}
          <div className="flex items-start gap-1 mt-1.5">
            <MapPin size={11} className="text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground leading-tight line-clamp-2">{tailor.address}</p>
          </div>

          {/* Distance & Phone */}
          <div className="flex items-center gap-3 mt-1.5">
            <div className="flex items-center gap-1">
              <Navigation size={11} className="text-primary" />
              <span className="text-xs text-primary font-medium">{tailor.distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={11} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{tailor.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="flex gap-1.5 px-3 pb-3 flex-wrap">
        {tailor.services.slice(0, 3).map(service => (
          <Badge key={service} variant="secondary" className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border-0">
            {service}
          </Badge>
        ))}
        {tailor.deliveryAvailable && (
          <Badge variant="outline" className="text-[10px] px-2 py-0.5 rounded-full border-primary/40 text-primary">
            🚚 Delivery
          </Badge>
        )}
      </div>
    </button>
  );
}
