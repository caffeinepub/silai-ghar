import { useMemo } from 'react';
import { MOCK_TAILORS, type Tailor } from '../data/mockTailors';

export function useTailorById(id: string | undefined): Tailor | undefined {
  return useMemo(() => {
    if (!id) return undefined;
    return MOCK_TAILORS.find(t => t.id === id);
  }, [id]);
}
