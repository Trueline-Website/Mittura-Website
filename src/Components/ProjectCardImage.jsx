import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCardImage({ project, logoWhite }) {
  const images = project.images && project.images.length > 0
    ? project.images
    : project.mainImage
    ? [project.mainImage]
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultiple = images.length > 1;

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (project.isPlaceholder) {
    return (
      <div className="w-full h-full bg-gradient-to-r from-[#3D181A] via-[#812425] to-[#C43030] flex flex-col items-center justify-center p-6 text-center relative group-hover:scale-105 transition-transform duration-700">
        <img
          src={logoWhite}
          alt="Mittura Logo"
          className="h-10 w-auto object-contain mb-3 drop-shadow-md opacity-90"
        />
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
          AWARDED VILLA PROJECT
        </span>
        <span className="text-xs font-semibold text-white/80 mt-1">
          Project details forthcoming
        </span>
      </div>
    );
  }

  const currentImage = images[currentIndex] || project.mainImage || "/photo2.jpeg";

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      <img
        key={currentIndex}
        src={currentImage}
        alt={`${project.name} - ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        onError={(e) => {
          e.target.src = "/photo2.jpeg";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

      {/* Slider Controls (Next & Previous buttons) */}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#C43030] text-white flex items-center justify-center backdrop-blur-xs transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-110 shadow-md focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#C43030] text-white flex items-center justify-center backdrop-blur-xs transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-110 shadow-md focus:outline-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Slider Dots */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/50 px-2 py-1 rounded-full backdrop-blur-xs">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`transition-all rounded-full ${
                  i === currentIndex
                    ? "w-4 h-1.5 bg-[#D4AF37]"
                    : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
