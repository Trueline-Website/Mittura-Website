import React from 'react';
import { ShieldCheck, Clock, Award, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Technical Excellence",
      desc: "Specialized planning and execution of complex civil and structural projects with international engineering standards.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Strict Timelines",
      desc: "Meticulous project management ensuring every milestone is reached with precision and efficiency.",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Unwavering Quality",
      desc: "A commitment to luxury finishes and structural integrity that sets new benchmarks in the UAE market.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Expert Team",
      desc: "Combining global expertise with deep local knowledge to handle high-value contracting services.",
      icon: <Users className="w-8 h-8" />,
    }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover transition-transform duration-1000 scale-105"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#fdfdfd]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          
          {/* Accent Line */}
          <div className="h-[2px] w-24 rounded-full bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] mb-8" />

          <span className="text-white text-xs md:text-sm font-bold tracking-[0.7em] uppercase mb-4">
            Uncompromising Standards
          </span>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent">
              WHY CHOOSE US
            </span>
          </h2>

          <p className="max-w-2xl text-gray-300 text-sm md:text-lg font-light leading-relaxed px-6">
            MITTURA Building Constructions delivers technical excellence and meticulous
            project management across the United Arab Emirates.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-20 -mt-24 pb-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 shadow-2xl rounded-2xl border border-gray-100 hover:border-[#7a1c1c] transition-all duration-500 hover:-translate-y-4 overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <div className="absolute -right-4 -bottom-4 text-[#4b0f14]/5 transition-transform duration-700 group-hover:scale-150 group-hover:-rotate-12">
                {item.icon}
              </div>

              {/* Icon */}
              <div className="mb-6 text-[#4b0f14] transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">
                <span className="bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent">
                  {item.title}
                </span>
              </h3>

              {/* Text */}
              <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-700 transition-colors">
                {item.desc}
              </p>

              {/* Hover Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c]" />

              <h4 className="text-3xl font-semibold">
                <span className="bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent">
                  Engineering the Future of UAE
                </span>
              </h4>
            </div>

            <p className="text-slate-600 leading-loose">
              In a market as competitive and standards-driven as the UAE,
              <span className="font-bold bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent">
                {" "}MITTURA Constructions
              </span>
              {" "}has established itself as a contractor of choice. Our team combines
              international engineering expertise with deep local market
              knowledge to deliver projects that set new standards.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              alt="Construction Site"
            />

            <div className="absolute inset-0 bg-[#4b0f14]/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;