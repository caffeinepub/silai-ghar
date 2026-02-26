import React from 'react';
import { ArrowLeft, Star, MapPin, Phone, Navigation, Scissors, Truck, Home as HomeIcon } from 'lucide-react';
import { PortfolioGallery } from '../components/tailor/PortfolioGallery';
import { type Tailor } from '../data/mockTailors';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TailorProfileProps {
  tailor: Tailor;
  onBack: () => void;
  onBookConsultation: (tailor: Tailor, service: string) => void;
}

export function TailorProfile({ tailor, onBack, onBookConsultation }: TailorProfileProps) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <div className="relative h-52 bg-secondary overflow-hidden">
        <img
          src={tailor.portfolioImages[0]}
          alt={tailor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <button
          onClick={onBack}
          className="absolute top-12 left-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md"
        >
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        {tailor.featured && (
          <span className="absolute top-12 right-4 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-5 pb-6">
        {/* Name & Rating */}
        <div className="px-4 pt-4">
          <div className="flex items-start justify-between gap-2">
            <h1 className="font-serif text-xl font-bold text-foreground leading-tight flex-1">{tailor.name}</h1>
            <span className="text-sm font-bold text-brown bg-cream-dark px-2 py-1 rounded-lg flex-shrink-0">
              {tailor.priceRange}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5 italic">{tailor.tagline}</p>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(star => (
                <Star
                  key={star}
                  size={14}
                  className={star <= Math.round(tailor.rating) ? 'fill-amber-500 text-amber-500' : 'text-muted-foreground'}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">{tailor.rating}</span>
            <span className="text-sm text-muted-foreground">({tailor.reviewCount} reviews)</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="px-4 grid grid-cols-2 gap-3">
          <div className="bg-secondary rounded-xl p-3 flex items-start gap-2">
            <MapPin size={15} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Address</p>
              <p className="text-xs text-foreground leading-snug mt-0.5">{tailor.address}</p>
            </div>
          </div>
          <div className="bg-secondary rounded-xl p-3 flex items-start gap-2">
            <Navigation size={15} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Distance</p>
              <p className="text-sm font-semibold text-foreground mt-0.5">{tailor.distance}</p>
              <p className="text-xs text-muted-foreground">{tailor.area}</p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="px-4">
          <a
            href={`tel:${tailor.phone}`}
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 hover:bg-secondary transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone size={16} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Phone</p>
              <p className="text-sm font-semibold text-primary">{tailor.phone}</p>
            </div>
            <span className="ml-auto text-xs text-primary font-medium">Tap to call</span>
          </a>
        </div>

        {/* Services */}
        <div className="px-4">
          <div className="flex items-center gap-2 mb-2.5">
            <Scissors size={15} className="text-primary" />
            <h3 className="font-serif text-base font-semibold text-foreground">Services Offered</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tailor.services.map(service => (
              <Badge key={service} variant="secondary" className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border-0">
                {service}
              </Badge>
            ))}
          </div>
        </div>

        {/* Availability badges */}
        <div className="px-4 flex gap-3">
          {tailor.deliveryAvailable && (
            <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-xl px-3 py-2">
              <Truck size={14} className="text-green-600" />
              <span className="text-xs font-medium text-green-700">Pickup & Delivery</span>
            </div>
          )}
          {tailor.homeConsultation && (
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
              <HomeIcon size={14} className="text-amber-600" />
              <span className="text-xs font-medium text-amber-700">Home Consultation</span>
            </div>
          )}
        </div>

        {/* Portfolio */}
        <PortfolioGallery images={tailor.portfolioImages} tailorName={tailor.name} />

        {/* Price Range */}
        <div className="px-4">
          <div className="bg-secondary rounded-xl p-4">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">Price Range</p>
            <p className="text-lg font-bold text-foreground">
              ₹{tailor.minPrice.toLocaleString()} – ₹{tailor.maxPrice.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">Prices vary by garment type and complexity</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 flex flex-col gap-3">
          <Button
            onClick={() => onBookConsultation(tailor, 'Home Consultation')}
            className="w-full h-12 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 shadow-card"
          >
            <HomeIcon size={16} className="mr-2" />
            Book Home Consultation
          </Button>
          <Button
            variant="outline"
            onClick={() => onBookConsultation(tailor, 'Pick-Up & Delivery')}
            className="w-full h-12 rounded-2xl border-primary/40 text-primary text-sm font-semibold hover:bg-primary/5"
          >
            <Truck size={16} className="mr-2" />
            Request Pick-Up & Delivery
          </Button>
        </div>
      </div>
    </div>
  );
}
