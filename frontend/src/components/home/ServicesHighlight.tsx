import React from 'react';
import { Truck, Home, Sparkles, Scissors } from 'lucide-react';

const SERVICES = [
  {
    icon: Truck,
    title: 'Home Pickup & Delivery',
    desc: 'We collect & return your garments',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Home,
    title: 'At-Home Consultation',
    desc: 'Tailor visits you at home',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    icon: Sparkles,
    title: 'Style Guidance',
    desc: 'Expert advice on cuts & fabrics',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    icon: Scissors,
    title: 'Custom Stitching',
    desc: 'Coordinated from design to delivery',
    color: 'bg-stone-100 text-stone-700',
  },
];

export function ServicesHighlight() {
  return (
    <div className="px-4">
      <h2 className="font-serif text-lg font-semibold text-foreground mb-3">What Silai Ghar Offers</h2>
      <div className="grid grid-cols-2 gap-3">
        {SERVICES.map(({ icon: Icon, title, desc, color }) => (
          <div
            key={title}
            className="bg-card border border-border rounded-2xl p-4 shadow-xs flex flex-col gap-2"
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
              <Icon size={18} />
            </div>
            <p className="text-sm font-semibold text-foreground leading-tight">{title}</p>
            <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
