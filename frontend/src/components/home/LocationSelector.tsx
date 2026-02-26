import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { MUMBAI_AREAS } from '../../data/mockTailors';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LocationSelectorProps {
  selectedArea: string;
  onAreaChange: (area: string) => void;
}

export function LocationSelector({ selectedArea, onAreaChange }: LocationSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1.5 bg-secondary rounded-full px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent transition-colors">
          <MapPin size={14} className="text-primary" />
          <span className="max-w-[140px] truncate">{selectedArea}</span>
          <ChevronDown size={14} className="text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52 bg-card border-border">
        {MUMBAI_AREAS.map(area => (
          <DropdownMenuItem
            key={area}
            onClick={() => onAreaChange(area)}
            className={`text-sm cursor-pointer ${selectedArea === area ? 'text-primary font-semibold' : 'text-foreground'}`}
          >
            <MapPin size={13} className="mr-2 text-muted-foreground" />
            {area}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
