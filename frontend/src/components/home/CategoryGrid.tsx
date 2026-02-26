import React from 'react';
import { CATEGORIES } from '../../data/mockTailors';

interface CategoryGridProps {
  onCategorySelect: (categoryId: string) => void;
}

export function CategoryGrid({ onCategorySelect }: CategoryGridProps) {
  return (
    <div>
      <h2 className="font-serif text-lg font-semibold text-foreground px-4 mb-3">Browse by Category</h2>
      <div className="grid grid-cols-3 gap-3 px-4">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategorySelect(cat.id)}
            className="flex flex-col items-center gap-2 bg-card border border-border rounded-2xl p-3 hover:bg-secondary hover:border-primary/30 transition-all shadow-xs active:scale-95"
          >
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-secondary flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] font-medium text-foreground text-center leading-tight">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
