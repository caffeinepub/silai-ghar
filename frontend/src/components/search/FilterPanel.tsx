import React, { useState } from 'react';
import { X, SlidersHorizontal } from 'lucide-react';
import { MUMBAI_AREAS } from '../../data/mockTailors';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export interface FilterState {
  locations: string[];
  minBudget: number;
  maxBudget: number;
  style: string;
  deliveryAvailable: boolean;
  homeConsultation: boolean;
}

const DEFAULT_FILTERS: FilterState = {
  locations: [],
  minBudget: 500,
  maxBudget: 20000,
  style: '',
  deliveryAvailable: false,
  homeConsultation: false,
};

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onApply: (filters: FilterState) => void;
}

const STYLES = ['Casual', 'Formal', 'Ethnic', 'Bridal', 'Kids'];

export function FilterPanel({ isOpen, onClose, filters, onApply }: FilterPanelProps) {
  const [local, setLocal] = useState<FilterState>(filters);

  const toggleLocation = (area: string) => {
    setLocal(prev => ({
      ...prev,
      locations: prev.locations.includes(area)
        ? prev.locations.filter(l => l !== area)
        : [...prev.locations, area],
    }));
  };

  const handleReset = () => {
    setLocal(DEFAULT_FILTERS);
  };

  const handleApply = () => {
    onApply(local);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-[430px] bg-card rounded-t-3xl shadow-2xl animate-slide-up max-h-[85dvh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Filters</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-secondary transition-colors">
            <X size={18} className="text-muted-foreground" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-6">
          {/* Location */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-2.5">Location</p>
            <div className="flex flex-wrap gap-2">
              {MUMBAI_AREAS.map(area => (
                <button
                  key={area}
                  onClick={() => toggleLocation(area)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    local.locations.includes(area)
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-secondary text-secondary-foreground border-border hover:border-primary/40'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-sm font-semibold text-foreground">Budget Range</p>
              <span className="text-xs text-primary font-medium">
                ₹{local.minBudget.toLocaleString()} – ₹{local.maxBudget >= 20000 ? '20,000+' : local.maxBudget.toLocaleString()}
              </span>
            </div>
            <Slider
              min={500}
              max={20000}
              step={500}
              value={[local.minBudget, local.maxBudget]}
              onValueChange={([min, max]) => setLocal(prev => ({ ...prev, minBudget: min, maxBudget: max }))}
              className="w-full"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">₹500</span>
              <span className="text-xs text-muted-foreground">₹20,000+</span>
            </div>
          </div>

          {/* Style */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-2.5">Style of Outfit</p>
            <Select value={local.style} onValueChange={val => setLocal(prev => ({ ...prev, style: val }))}>
              <SelectTrigger className="w-full bg-secondary border-border rounded-xl text-sm">
                <SelectValue placeholder="Select a style…" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {STYLES.map(s => (
                  <SelectItem key={s} value={s.toLowerCase()} className="text-sm">{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Toggles */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">Delivery Available</p>
                <p className="text-xs text-muted-foreground">Pickup & drop of garments</p>
              </div>
              <Switch
                checked={local.deliveryAvailable}
                onCheckedChange={val => setLocal(prev => ({ ...prev, deliveryAvailable: val }))}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">Home Consultation</p>
                <p className="text-xs text-muted-foreground">Tailor visits your home</p>
              </div>
              <Switch
                checked={local.homeConsultation}
                onCheckedChange={val => setLocal(prev => ({ ...prev, homeConsultation: val }))}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-border flex gap-3">
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex-1 rounded-xl border-border text-foreground hover:bg-secondary"
          >
            Reset
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
