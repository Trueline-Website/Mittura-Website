import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  const colors = {
    darkBurgundy: '#2B0002',
    richMaroon: '#540507',
    deepCrimson: '#7A1216',
    luxuryRed: '#9D2426',
    mutedGold: '#D4AF37',
    deepEbony: '#1A0405',
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Reusable gradient text style
  const gradientText = (gradient) => ({
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  });

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#fcfcfc] overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 translate-x-1/4 skew-x-12" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Content Area */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1"
        >
          <motion.div variants={fadeInUp}>
            
            {/* Our Blueprint for Success */}
            <span
              className="font-bold tracking-widest uppercase text-sm mb-4 block"
              style={gradientText(`
                linear-gradient(
                  90deg,
                  ${colors.deepCrimson},
                  ${colors.luxuryRed}
                )
              `)}
            >
              Our Blueprint for Success
            </span>

            {/* Heading */}
            <h2 className="text-5xl lg:text-7xl font-extrabold mb-12 tracking-tighter leading-tight">
              
              {/* Vision */}
              <span
                style={gradientText(`
                  linear-gradient(
                    90deg,
                    ${colors.darkBurgundy},
                    ${colors.deepCrimson}
                  )
                `)}
              >
                Vision &{' '}
              </span>

              {/* Mission */}
              <span
                className="italic"
                style={gradientText(`
                  linear-gradient(
                    90deg,
                    ${colors.richMaroon},
                    ${colors.deepCrimson},
                    ${colors.luxuryRed}
                  )
                `)}
              >
                Mission
              </span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            
            {/* Vision Block */}
            <motion.div
              variants={fadeInUp}
              className="group flex gap-8 items-start p-6 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-red-900/5"
            >
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 bg-[#8b2626] text-white flex items-center justify-center font-bold text-2xl rounded-2xl z-10 relative transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6">
                  01
                </div>

                <div className="absolute inset-0 bg-[#8b2626]/20 blur-xl rounded-2xl group-hover:bg-[#8b2626]/40 transition-all" />
              </div>

              <div>
                {/* Our Vision Title */}
                <h3
                  className="text-2xl font-bold mb-3 transition-colors"
                  style={gradientText(`
                    linear-gradient(
                      90deg,
                      ${colors.richMaroon},
                      ${colors.luxuryRed}
                    )
                  `)}
                >
                  Our Vision
                </h3>

                <p className="text-slate-600 leading-relaxed text-lg lg:text-xl">
                  To be one of the UAE’s leading and most respected turnkey
                  contracting firms, recognized for delivering exceptional
                  quality and innovative solutions.
                </p>
              </div>
            </motion.div>

            {/* Mission Block */}
            <motion.div
              variants={fadeInUp}
              className="group flex gap-8 items-start p-6 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-red-900/5"
            >
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center font-bold text-2xl rounded-2xl z-10 relative transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-6">
                  02
                </div>

                <div className="absolute inset-0 bg-slate-900/20 blur-xl rounded-2xl group-hover:bg-slate-900/40 transition-all" />
              </div>

              <div>
                {/* Our Mission Title */}
                <h3
                  className="text-2xl font-bold mb-3 transition-colors"
                  style={gradientText(`
                    linear-gradient(
                      90deg,
                      ${colors.darkBurgundy},
                      ${colors.deepCrimson}
                    )
                  `)}
                >
                  Our Mission
                </h3>

                <p className="text-slate-600 leading-relaxed text-lg lg:text-xl">
                  Upholding a zero-accident safety culture and industry-leading
                  quality standards while delivering cost-effective, turnkey
                  excellence from design to handover.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative order-1 lg:order-2"
        >
          {/* Main Image Container */}
          <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group">
            <img
              src="/vision-img.png"
              alt="Kattam Construction Excellence"
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />

            {/* Floating Label */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p
                className="font-medium text-center"
                style={{ color: colors.mutedGold }}
              >
                Building the Future of UAE
              </p>
            </div>
          </div>

          {/* Decorative Frame */}
          <div
            className="absolute -top-6 -right-6 w-full h-full border-2 rounded-[3rem] -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"
            style={{
              borderColor: colors.deepCrimson,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;