import React from 'react';

const CoreCommitment = () => {
  // Dark luxury gradient (WORDS ONLY)
  const gradientText =
    "bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent";

  return (
    <section className="relative w-full overflow-hidden flex flex-col md:flex-row bg-white">

      <style>
        {`
          .commitment-overlay {
            clip-path: none;
          }

          @media (min-width: 768px) {
            .commitment-overlay {
              clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
            }
          }
        `}
      </style>

      {/* Background Image */}
      <div
        className="relative md:absolute md:inset-0 w-full h-[40vh] md:h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/commitment-bg-exact.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* White Content Overlay */}
      <div className="relative z-10 w-full md:w-[55%] ml-auto bg-white flex flex-col justify-center px-6 md:px-20 py-16 md:min-h-screen commitment-overlay">

        <div className="max-w-xl space-y-16 md:space-y-24 mx-auto">

          {/* QUALITY Section */}
          <div className="relative">
            <div className="relative inline-block mb-4">

              {/* Gradient Line */}
              <div className="absolute left-[-60px] top-[55%] w-[120%] h-[1px] bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] z-0 opacity-30" />

              {/* Title */}
              <h2
                className={`relative z-10 text-4xl md:text-6xl font-black tracking-tighter uppercase pr-4 bg-white inline-block leading-none ${gradientText}`}
              >
                QUALITY
              </h2>
            </div>

            {/* Subtitle */}
            <h4
              className={`font-bold text-[0.75rem] md:text-sm tracking-[0.2em] uppercase mb-4 leading-tight ${gradientText}`}
            >
              WE DON'T JUST INSPECT QUALITY. WE ENFORCE IT.
            </h4>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-sm md:text-lg font-medium">
              Quality is the backbone of heavy execution. At Mittura, we
              eliminate human error and subpar delivery by enforcing a
              zero-tolerance policy across every asset, material, and
              procedure. From advanced material testing before breaking
              ground to rigorous, tier-1 engineering checks at every single
              milestone, we guarantee that your physical asset doesn't just
              meet industry benchmarks it sets them. We don't just plan for
              excellence; we build it.
            </p>
          </div>

          {/* TIME Section */}
          <div className="relative">
            <div className="relative inline-block mb-4">

              {/* Gradient Line */}
              <div className="absolute left-[-60px] top-[55%] w-[120%] h-[1px] bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] z-0 opacity-30" />

              {/* Title */}
              <h2
                className={`relative z-10 text-4xl md:text-6xl font-black tracking-tighter uppercase pr-4 bg-white inline-block leading-none ${gradientText}`}
              >
                TIME
              </h2>
            </div>

            {/* Subtitle */}
            <h4
              className={`font-bold text-[0.75rem] md:text-sm tracking-[0.2em] uppercase mb-4 leading-tight ${gradientText}`}
            >
              WE DON'T TRACK TIMELINES. WE MASTER THEM.
            </h4>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-sm md:text-lg font-medium">
              In large scale project execution, a delayed day is a wasted
              fortune. We treat project timelines as absolute, unbreakable
              metrics. By deploying aggressive supply chain management and
              live operational tracking, we strip away delays before they
              can even form. Our clients receive direct, transparent updates
              the exact second a project phase goes live. We don't guess
              delivery dates; we lock them in and execute with military
              precision.
            </p>
          </div>

          {/* COST Section */}
          <div className="relative">
            <div className="relative inline-block mb-4">

              {/* Gradient Line */}
              <div className="absolute left-[-60px] top-[55%] w-[120%] h-[1px] bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] z-0 opacity-30" />

              {/* Title */}
              <h2
                className={`relative z-10 text-4xl md:text-6xl font-black tracking-tighter uppercase pr-4 bg-white inline-block leading-none ${gradientText}`}
              >
                COST
              </h2>
            </div>

            {/* Subtitle */}
            <h4
              className={`font-bold text-[0.75rem] md:text-sm tracking-[0.2em] uppercase mb-4 leading-tight ${gradientText}`}
            >
              WE DON'T PREDICT COSTS. WE DEFINE THEM.
            </h4>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-sm md:text-lg font-medium">
              Massive construction and turnkey projects require ruthless
              financial discipline. Mittura eliminates budget overruns,
              hidden fees, and scope creep through a hardened, iron-clad
              cost control framework. We map out precise overhead,
              material, and labor costs from day one, using active,
              real-time monitoring to safeguard your resources. Your
              project will be delivered on scale, on time, and exactly on
              budget.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreCommitment;