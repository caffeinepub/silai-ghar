import React from 'react';
import { CheckCircle2, Calendar, Clock, User, MapPin } from 'lucide-react';

interface BookingSuccessMessageProps {
  tailorName: string;
  tailorAddress: string;
  service: string;
  date: string;
  time: string;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(dateStr: string) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function BookingSuccessMessage({ tailorName, tailorAddress, service, date, time }: BookingSuccessMessageProps) {
  const bookingId = `SG${Date.now().toString().slice(-6)}`;

  return (
    <div className="flex flex-col items-center text-center px-4 py-6 animate-slide-up">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
        <CheckCircle2 size={36} className="text-green-600" />
      </div>
      <h2 className="font-serif text-xl font-bold text-foreground mb-1">Booking Confirmed!</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Your booking has been placed. The tailor will confirm shortly.
      </p>

      <div className="w-full bg-secondary rounded-2xl p-4 text-left space-y-3 border border-border">
        <div className="flex items-center gap-2 pb-2 border-b border-border">
          <span className="text-xs text-muted-foreground">Booking ID</span>
          <span className="ml-auto text-xs font-bold text-primary">#{bookingId}</span>
        </div>
        <div className="flex items-start gap-3">
          <User size={15} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Tailor</p>
            <p className="text-sm font-semibold text-foreground">{tailorName}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin size={15} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Address</p>
            <p className="text-sm text-foreground">{tailorAddress}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar size={15} className="text-primary flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Service</p>
            <p className="text-sm font-semibold text-foreground">{service}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock size={15} className="text-primary flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Date & Time</p>
            <p className="text-sm font-semibold text-foreground">{formatDate(date)} at {time}</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        A confirmation will be sent to your registered number.
      </p>
    </div>
  );
}
