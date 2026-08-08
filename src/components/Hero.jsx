import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 flex flex-col items-start gap-6"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-card text-sm font-semibold tracking-wide border border-blue-600/20 text-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.12)] dark:border-blue-400/20 dark:text-blue-400">
            Available for Internships
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight dark:text-white">
            Hi, I'm <br />
            <span className="text-gradient block mt-2">Ravi Prakash G R</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-700 font-medium tracking-wide dark:text-slate-300">
            B.Com Accounting & Finance Student
          </h2>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed dark:text-slate-400">
            Aspiring Financial Analyst | Data Analyst | Power BI Developer | Tally Prime Specialist | Advanced Excel
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.25)] group dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 glow-effect group">
            <div className="absolute inset-0 rounded-full border-2 border-blue-600/50 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 dark:border-blue-400/50"></div>

            <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-300 relative z-10 glass shadow-2xl bg-white/70 dark:border-slate-700 dark:bg-slate-800/70">
              <img
                src="/profile.png"
                alt="Ravi Prakash"
                className="w-full h-full object-cover object-center bg-slate-100 group-hover:scale-105 transition-transform duration-500 dark:bg-slate-900"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://ui-avatars.com/api/?name=Ravi+Prakash&background=112240&color=64ffda&size=512';
                }}
              />
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card px-6 py-4 flex items-center gap-4 z-20">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-bold leading-tight dark:text-white">Data Analytics & Data Scientist</p>
                <p className="text-slate-600 text-xs text-left dark:text-slate-400">Specialist</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
