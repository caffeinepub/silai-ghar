import React, { useState } from 'react';
import { ArrowLeft, SlidersHorizontal, LayoutList, Map } from 'lucide-react';
import { TailorCard } from '../components/search/TailorCard';
import { FilterPanel, type FilterState } from '../components/search/FilterPanel';
import { useTailors } from '../hooks/useTailors';
import { type Tailor } from '../data/mockTailors';
import { Badge } from '@/components/ui/badge';

interface SearchResultsProps {
  initialCategory?: string;
  initialQuery?: string;
  onBack: () => void;
  onTailorClick: (tailor: Tailor) => void;
  onMapView: () => void;
}

const DEFAULT_FILTERS: FilterState = {
  locations: [],
  minBudget: 500,
  maxBudget: 20000,
  style: '',
  deliveryAvailable: false,
  homeConsultation: false,
};

export function SearchResults({ initialCategory, initialQuery, onBack, onTailorClick, onMapView }: SearchResultsProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [searchQuery] = useState(initialQuery || '');

  const { tailors, total } = useTailors({
    category: initialCategory,
    searchQuery,
    locations: filters.locations,
    minBudget: filters.minBudget,
    maxBudget: filters.maxBudget,
    deliveryAvailable: filters.deliveryAvailable || undefined,
    homeConsultation: filters.homeConsultation || undefined,
  });

  const activeFilterCount = [
    filters.locations.length > 0,
    filters.minBudget > 500 || filters.maxBudget < 20000,
    !!filters.style,
    filters.deliveryAvailable,
    filters.homeConsultation,
  ].filter(Boolean).length;

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="bg-card px-4 pt-12 pb-3 border-b border-border sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={onBack} className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <div className="flex-1">
            <h2 className="font-serif text-lg font-semibold text-foreground">
              {initialCategory
                ? initialCategory.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
                : initialQuery
                ? `"${initialQuery}"`
                : 'All Tailors'}
            </h2>
            <p className="text-xs text-muted-foreground">{total} tailors found</p>
          </div>
          <button
            onClick={onMapView}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Map size={18} className="text-foreground" />
          </button>
          <button
            onClick={() => setFilterOpen(true)}
            className="relative flex items-center gap-1.5 bg-secondary px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            <SlidersHorizontal size={15} />
            Filters
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Active filter chips */}
        {(filters.locations.length > 0 || filters.deliveryAvailable || filters.homeConsultation) && (
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {filters.locations.map(loc => (
              <Badge key={loc} variant="secondary" className="flex-shrink-0 text-xs rounded-full bg-primary/10 text-primary border-0">
                {loc}
              </Badge>
            ))}
            {filters.deliveryAvailable && (
              <Badge variant="secondary" className="flex-shrink-0 text-xs rounded-full bg-primary/10 text-primary border-0">
                🚚 Delivery
              </Badge>
            )}
            {filters.homeConsultation && (
              <Badge variant="secondary" className="flex-shrink-0 text-xs rounded-full bg-primary/10 text-primary border-0">
                🏠 Home Visit
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 p-4">
        {tailors.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <LayoutList size={40} className="text-muted-foreground mb-3" />
            <p className="font-semibold text-foreground">No tailors found</p>
            <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          tailors.map(tailor => (
            <TailorCard key={tailor.id} tailor={tailor} onClick={onTailorClick} />
          ))
        )}
      </div>

      <FilterPanel
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        onApply={setFilters}
      />
    </div>
  );
}
