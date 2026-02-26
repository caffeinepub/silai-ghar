import React from 'react';
import { CalendarCheck, Clock, Scissors } from 'lucide-react';

export function Bookings() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="bg-card px-4 pt-12 pb-4 border-b border-border">
        <h2 className="font-serif text-xl font-bold text-foreground">My Bookings</h2>
        <p className="text-xs text-muted-foreground mt-0.5">Track your appointments</p>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-6 py-16 text-center gap-4">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
          <CalendarCheck size={36} className="text-primary/60" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground">No bookings yet</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            Your confirmed appointments with tailors will appear here.
          </p>
        </div>
        <div className="bg-secondary rounded-2xl p-4 w-full text-left space-y-3 border border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">How it works</p>
          <div className="flex items-start gap-3">
            <Scissors size={15} className="text-primary mt-0.5" />
            <p className="text-sm text-foreground">Browse tailors and select a service</p>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={15} className="text-primary mt-0.5" />
            <p className="text-sm text-foreground">Pick a date and time slot</p>
          </div>
          <div className="flex items-start gap-3">
            <CalendarCheck size={15} className="text-primary mt-0.5" />
            <p className="text-sm text-foreground">Confirm and track your booking here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
