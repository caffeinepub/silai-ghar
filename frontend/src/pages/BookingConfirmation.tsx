import React, { useState } from 'react';
import { ArrowLeft, Scissors } from 'lucide-react';
import { DateTimePicker } from '../components/booking/DateTimePicker';
import { BookingSuccessMessage } from '../components/booking/BookingSuccessMessage';
import { type Tailor } from '../data/mockTailors';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface BookingConfirmationProps {
  tailor: Tailor;
  service: string;
  onBack: () => void;
}

export function BookingConfirmation({ tailor, service, onBack }: BookingConfirmationProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [instructions, setInstructions] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const canConfirm = selectedDate && selectedTime;

  const handleConfirm = () => {
    if (canConfirm) {
      setConfirmed(true);
    }
  };

  if (confirmed) {
    return (
      <div className="flex flex-col min-h-full">
        <div className="bg-card px-4 pt-12 pb-3 border-b border-border">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 rounded-full hover:bg-secondary transition-colors">
              <ArrowLeft size={18} className="text-foreground" />
            </button>
            <h2 className="font-serif text-lg font-semibold text-foreground">Booking Confirmed</h2>
          </div>
        </div>
        <BookingSuccessMessage
          tailorName={tailor.name}
          tailorAddress={tailor.address}
          service={service}
          date={selectedDate}
          time={selectedTime}
        />
        <div className="px-4 pb-6">
          <Button
            onClick={onBack}
            variant="outline"
            className="w-full h-12 rounded-2xl border-primary/40 text-primary font-semibold hover:bg-primary/5"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="bg-card px-4 pt-12 pb-3 border-b border-border">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h2 className="font-serif text-lg font-semibold text-foreground">Book Appointment</h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-4 pb-8">
        {/* Tailor Summary */}
        <div className="bg-card border border-border rounded-2xl p-4 flex gap-3 shadow-xs">
          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-secondary">
            <img
              src={tailor.portfolioImages[0]}
              alt={tailor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-foreground truncate">{tailor.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">{tailor.address}</p>
            <div className="flex items-center gap-1.5 mt-2">
              <Scissors size={12} className="text-primary" />
              <span className="text-xs font-semibold text-primary">{service}</span>
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <div>
          <h3 className="font-serif text-base font-semibold text-foreground mb-3">Choose Date & Time</h3>
          <DateTimePicker
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateChange={setSelectedDate}
            onTimeChange={setSelectedTime}
          />
        </div>

        {/* Special Instructions */}
        <div>
          <h3 className="font-serif text-base font-semibold text-foreground mb-2">Special Instructions</h3>
          <Textarea
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            placeholder="E.g. Bring fabric samples, specific measurements, style references…"
            className="bg-secondary border-border rounded-xl text-sm resize-none min-h-[90px] focus:ring-primary/30"
            rows={3}
          />
        </div>

        {/* Confirm Button */}
        <Button
          onClick={handleConfirm}
          disabled={!canConfirm}
          className="w-full h-12 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-card"
        >
          Confirm Booking
        </Button>

        {!canConfirm && (
          <p className="text-center text-xs text-muted-foreground -mt-2">
            Please select a date and time to continue
          </p>
        )}
      </div>
    </div>
  );
}
