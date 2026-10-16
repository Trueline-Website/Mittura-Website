import React from 'react';
import { motion } from 'framer-motion';

const workforceData = [
  { label: "Engineers", img: "./workforce/engineers.png" },
  { label: "Quantity Surveyors", img: "./workforce/surveyors.png" },
  { label: "General Foremen", img: "./workforce/foremen_gen.png" },
  { label: "Civil & MEP Foremen", img: "./workforce/foremen_mep.png" },
  { label: "Masons", img: "./workforce/masons.png" },
  { label: "Carpenters", img: "./workforce/carpenters.png" },
  { label: "Steel Fixers", img: "./workforce/steel_fixers.png" },
  { label: "General Labor", img: "./workforce/general_labor.png" },
  { label: "Plumbers", img: "./workforce/plumbers.png" },
  { label: "Electricians", img: "./workforce/electricians.png" },
  { label: "HVAC Technicians", img: "./workforce/hvac.png" },
  { label: "Drivers", img: "./workforce/drivers.png" }
];

const Workforce = () => {
  return (
    <section
      id="workforce"
      className="pt-10 pb-30 px-4 md:px-12 lg:px-24 bg-white overflow-hidden relative"
    >
      {/* Structural Accent Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 skew-x-[-12deg] translate-x-20" />

      <div className="max-w-7xl mx-auto">

        {/* Heading Section */}
        <div className="flex flex-col mb-16">

          {/* Gradient Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            className="h-[3px] bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] mb-8 rounded-full"
          />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight uppercase"
          >
            <span className="bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent">
              Our
            </span>{" "}
            <span className="bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent">
              Workforce
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg max-w-xl font-normal leading-relaxed"
          >
            Mittura maintains a diverse, highly trained team of specialists
            dedicated to turning complex visions into structural reality with
            precision.
          </motion.p>
        </div>

        {/* Workforce Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
          {workforceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              whileHover={{ y: -10 }}
              className="flex flex-col group"
            >

              {/* Image Container */}
              <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm transition-all duration-500 group-hover:border-[#7a1c1c]/20 group-hover:shadow-xl group-hover:shadow-[#4b0f14]/10">

                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">

                  {/* Gradient Line */}
                  <div className="w-8 h-[2px] bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] mb-2 translate-x-[-20px] group-hover:translate-x-0 transition-transform duration-500 delay-100" />

                  <span className="text-white text-[10px] font-bold tracking-widest uppercase opacity-80">
                    Mittura Team
                  </span>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/0 group-hover:border-white/40 transition-all duration-500 m-4" />

                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/0 group-hover:border-white/40 transition-all duration-500 m-4" />
              </div>

              {/* Text Content */}
              <div className="relative pl-1">

                {/* Expertise Label */}
                <span className="block text-[10px] tracking-[0.2em] uppercase mb-1 opacity-80 font-bold bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent">
                  Expertise
                </span>

                {/* Title */}
                <h3 className="font-bold text-sm md:text-base tracking-tight transition-all duration-300">
                  <span className="bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent group-hover:brightness-125">
                    {item.label}
                  </span>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workforce;