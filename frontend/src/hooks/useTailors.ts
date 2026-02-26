import { useMemo } from 'react';
import { MOCK_TAILORS, type Tailor } from '../data/mockTailors';

export interface TailorFilters {
  locations?: string[];
  minBudget?: number;
  maxBudget?: number;
  style?: string;
  deliveryAvailable?: boolean;
  homeConsultation?: boolean;
  category?: string;
  searchQuery?: string;
}

export function useTailors(filters?: TailorFilters) {
  const tailors = useMemo(() => {
    let result = [...MOCK_TAILORS];

    if (filters?.locations && filters.locations.length > 0) {
      result = result.filter(t =>
        filters.locations!.some(loc => t.area.toLowerCase().includes(loc.toLowerCase()))
      );
    }

    if (filters?.minBudget !== undefined) {
      result = result.filter(t => t.maxPrice >= filters.minBudget!);
    }

    if (filters?.maxBudget !== undefined) {
      result = result.filter(t => t.minPrice <= filters.maxBudget!);
    }

    if (filters?.deliveryAvailable === true) {
      result = result.filter(t => t.deliveryAvailable);
    }

    if (filters?.homeConsultation === true) {
      result = result.filter(t => t.homeConsultation);
    }

    if (filters?.category) {
      result = result.filter(t => t.categories.includes(filters.category!));
    }

    if (filters?.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.area.toLowerCase().includes(q) ||
        t.services.some(s => s.toLowerCase().includes(q)) ||
        t.address.toLowerCase().includes(q)
      );
    }

    return result;
  }, [filters]);

  return { tailors, total: tailors.length };
}
