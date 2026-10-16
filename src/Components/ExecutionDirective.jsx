import React from 'react';

const ExecutionDirective = () => {
  const points = [
    {
      title: "Elite Global Benchmarks",
      desc: "Operating under a fully integrated management system."
    },
    {
      title: "Uncompromised Resource Deployment",
      desc:
        "Guaranteeing the immediate availability of advanced equipment, capital, and top tier personnel to overpower any execution challenge."
    },
    {
      title: "Mastery of Risk & Safety",
      desc:
        "Actively identifying physical and operational hazards, enforcing a zero incident culture to completely eliminate workplace injuries and asset downtime."
    },
    {
      title: "Sustainable Infrastructure Leadership",
      desc:
        "Executing green building practices, strict waste management, and resource conservation to protect the environment on every development."
    },
    {
      title: "Flawless Transparency",
      desc:
        "Ensuring our strict Quality, Health, Safety, and Environment (QHSE) policies are perfectly communicated and aligned across all stakeholders and consortiums."
    }
  ];

  // Dark luxury gradient (WORDS ONLY)
  const gradientText =
    "bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent";

  return (
    <section className="relative w-full min-h-screen pt-24 bg-white flex flex-col md:flex-row overflow-hidden border-t border-slate-100">

      {/* Left Content Side */}
      <div className="w-full md:w-[60%] flex flex-col justify-center px-8 md:px-24 py-20 bg-white z-10">
        <div className="max-w-xl">

          {/* Main Heading */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight ${gradientText}`}
          >
            THE MITURRA <br /> EXECUTION DIRECTIVE
          </h2>

          {/* Description */}
          <p className="text-slate-600 font-bold text-lg mb-12 leading-relaxed opacity-90">
            Our leadership, engineers, and specialized teams are strictly
            committed to:
          </p>

          {/* List */}
          <ul className="space-y-8">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex gap-4 group"
              >

                {/* Gradient Bullet */}
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] mt-2 group-hover:scale-150 transition-transform duration-300" />

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">

                  {/* Point Title */}
                  <span
                    className={`font-bold block mb-1 ${gradientText}`}
                  >
                    {point.title}
                  </span>

                  {/* Point Description */}
                  {point.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Image Side with Diagonal Design */}
      <div className="relative w-full md:w-[40%] min-h-[50vh] md:min-h-screen overflow-hidden">

        {/* Diagonal Banner */}
        <div
          className="absolute inset-0 left-[-15%] w-[40%] z-10 bg-gradient-to-b from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c]"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 0% 100%, 40% 0)'
          }}
        />

        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: 'url("/execution-directive.png")',
            clipPath:
              'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5" />
        </div>
      </div>
    </section>
  );
};

export default ExecutionDirective;