import React from 'react';

const ConstructionLoader = () => {
  // Dark luxury gradient (WORDS ONLY)
  const gradientText =
    "bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent";

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden select-none font-sans">

      <div className="relative w-full max-w-[600px] flex flex-col items-center justify-center p-8">

        {/* SITTING CHIBI BOY */}
        <div className="relative w-full aspect-square flex items-center justify-center max-w-[350px]">

          <img
            src="./loader-boy-sitting.png"
            alt="Loading..."
            className="w-full h-auto mix-blend-multiply transition-opacity duration-500 animate-[chibi-float_4s_infinite_ease-in-out]"
          />
        </div>

        {/* LOADING SECTION */}
        <div className="mt-2 flex flex-col items-center w-full">

          {/* Gradient Loading Text */}
          <h2
            className={`text-[52px] font-[1000] tracking-[0.2em] uppercase leading-none text-center ${gradientText}`}
          >
            Loading
          </h2>

          {/* Gradient Progress Bar */}
          <div className="w-64 h-2 bg-slate-50 rounded-full mt-10 relative overflow-hidden border border-slate-100">

            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] animate-[refined-progress_3s_infinite_linear]" />

          </div>
        </div>
      </div>

      <style>{`
        @keyframes chibi-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes refined-progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ConstructionLoader;