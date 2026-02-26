import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { LocationSelector } from '../components/home/LocationSelector';
import { SearchBar } from '../components/home/SearchBar';
import { PromotedTailorsCarousel } from '../components/home/PromotedTailorsCarousel';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { ServicesHighlight } from '../components/home/ServicesHighlight';
import { type Tailor } from '../data/mockTailors';

interface HomeProps {
  onSearch: (query: string) => void;
  onCategorySelect: (categoryId: string) => void;
  onTailorClick: (tailor: Tailor) => void;
  selectedArea: string;
  onAreaChange: (area: string) => void;
}

export function Home({ onSearch, onCategorySelect, onTailorClick, selectedArea, onAreaChange }: HomeProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-card px-4 pt-12 pb-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img
                src="/assets/generated/silai-ghar-logo.dim_256x256.png"
                alt="Silai Ghar"
                className="w-7 h-7 rounded-lg object-cover"
              />
              <h1 className="font-serif text-xl font-bold text-foreground">Silai Ghar</h1>
            </div>
            <p className="text-xs text-muted-foreground">Find trusted tailors near you</p>
          </div>
          <div className="flex items-center gap-2">
            <LocationSelector selectedArea={selectedArea} onAreaChange={onAreaChange} />
            <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors">
              <Bell size={16} className="text-foreground" />
            </button>
          </div>
        </div>
        <div onKeyDown={e => e.key === 'Enter' && handleSearchSubmit()}>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onFocus={() => {}}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 py-5">
        <PromotedTailorsCarousel onTailorClick={onTailorClick} />
        <CategoryGrid onCategorySelect={onCategorySelect} />
        <ServicesHighlight />

        {/* Footer */}
        <footer className="px-4 pb-2 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Silai Ghar · Built with{' '}
            <span className="text-red-400">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'silai-ghar')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
