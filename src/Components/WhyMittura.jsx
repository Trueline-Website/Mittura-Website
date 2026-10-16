import React from 'react';
import { motion } from 'framer-motion';

const WhyMittura = () => {
  const points = [
    { title: 'Expertise', desc: 'Highly qualified and professional team' },
    { title: 'Reliability', desc: 'Timely delivery with strict adherence to schedules' },
    { title: 'Efficiency', desc: 'Efficient output through optimized processes' },
    { title: 'Trust', desc: 'Strong, long-standing client relationships' },
    { title: 'Resources', desc: 'Ownership of equipment and trained workforce' },
    { title: 'Safety', desc: 'Zero-accident safety policy' },
    { title: 'Integrity', desc: 'Full design and build capability' },
  ];

  const colors = {
    darkBurgundy: '#2B0002',
    richMaroon: '#540507',
    deepCrimson: '#7A1216',
    luxuryRed: '#9D2426',
    mutedGold: '#D4AF37',
  };

  const gradientText = (gradient) => ({
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  });

  return (
    <section className="relative w-full min-h-screen bg-[#fafafa] px-6 py-20 lg:py-12 flex items-center overflow-hidden font-sans">
      
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 text-[18vw] font-black text-slate-100/50 select-none leading-none z-0 pointer-events-none">
        EXCELLENCE
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="h-[1px] w-12"
                  style={{
                    background: `linear-gradient(
                      90deg,
                      ${colors.deepCrimson},
                      ${colors.luxuryRed}
                    )`,
                  }}
                />

                <span
                  className="font-medium tracking-[0.4em] uppercase text-[10px]"
                  style={gradientText(`
                    linear-gradient(
                      90deg,
                      ${colors.richMaroon},
                      ${colors.deepCrimson},
                      ${colors.luxuryRed}
                    )
                  `)}
                >
                  Premier Contracting
                </span>
              </div>

              <h2 className="text-6xl lg:text-7xl font-light leading-[0.9] mb-8 tracking-tighter">
                <span
                  style={gradientText(`
                    linear-gradient(
                      90deg,
                      ${colors.darkBurgundy},
                      ${colors.deepCrimson}
                    )
                  `)}
                >
                  WHY
                </span>

                <br />

                <span
                  className="font-normal tracking-normal"
                  style={gradientText(`
                    linear-gradient(
                      90deg,
                      ${colors.richMaroon},
                      ${colors.deepCrimson},
                      ${colors.luxuryRed}
                    )
                  `)}
                >
                  MITTURA
                </span>
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed max-w-[300px] border-l border-slate-200 pl-6">
                Redefining structural integrity through innovation, safety,
                and unmatched craftsmanship in every pillar we raise.
              </p>
            </motion.div>
          </div>

          {/* MIDDLE LIST */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            {points.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex items-start gap-5 border border-slate-100 overflow-hidden"
              >
                {/* Hover Background */}
                <div
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-[0.03]"
                  style={{
                    background: `linear-gradient(
                      90deg,
                      ${colors.richMaroon},
                      ${colors.deepCrimson},
                      ${colors.luxuryRed}
                    )`,
                  }}
                />

                {/* Number Circle */}
                <div className="relative z-20 flex-shrink-0">
                  <div
                    className="relative w-12 h-12 rounded-full border flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-transparent"
                    style={{
                      borderColor: '#d8dee7',
                    }}
                  >
                    {/* Hover Background */}
                    <div
                      className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(
                          135deg,
                          ${colors.deepCrimson},
                          ${colors.luxuryRed}
                        )`,
                      }}
                    />

                    {/* NUMBER */}
                    <span
                      className="relative z-30 font-bold text-[12px] transition-colors duration-300 group-hover:text-white"
                      style={{
                        color: colors.deepCrimson,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="font-bold text-[13px] uppercase tracking-widest text-[#222] mb-1 transition-colors group-hover:text-[#8b2626]">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-[12px] leading-snug group-hover:text-slate-600 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-4 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] lg:h-[75vh] rounded-sm overflow-hidden shadow-2xl group"
            >
              <img
                src="/why-img.png"
                alt="Construction Team"
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />

              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    'linear-gradient(to top, rgba(84,5,7,0.75), transparent)',
                }}
              />

              <div className="absolute bottom-10 left-0 right-0 px-8">
                <div className="backdrop-blur-md bg-black/20 border border-white/10 p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[11px] font-light uppercase tracking-[0.3em]">
                    Built to last.{' '}
                    <span
                      className="font-bold"
                      style={{ color: colors.mutedGold }}
                    >
                      Designed to inspire.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyMittura;