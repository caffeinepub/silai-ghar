import React from 'react';

interface PortfolioGalleryProps {
  images: string[];
  tailorName: string;
}

export function PortfolioGallery({ images, tailorName }: PortfolioGalleryProps) {
  return (
    <div>
      <h3 className="font-serif text-base font-semibold text-foreground px-4 mb-3">Portfolio</h3>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-1">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-36 h-44 rounded-2xl overflow-hidden bg-secondary shadow-xs"
          >
            <img
              src={src}
              alt={`${tailorName} portfolio ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
