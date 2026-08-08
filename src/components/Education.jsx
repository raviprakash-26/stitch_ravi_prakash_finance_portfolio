import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 dark:text-white">My <span className="text-blue-600 dark:text-blue-400">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-blue-600/30 pl-8 md:pl-0 md:border-l-0 dark:border-blue-400/30">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600/30 -translate-x-1/2 dark:bg-blue-400/30"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row items-center justify-between mb-12 w-full group"
          >
            <div className="absolute -left-[41px] md:left-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white md:-translate-x-1/2 shadow-[0_0_15px_rgba(37,99,235,0.25)] group-hover:scale-125 transition-transform z-10 dark:border-slate-950"></div>

            <div className="w-full md:w-[45%] md:text-right md:pr-10 mb-4 md:mb-0">
              <div className="glass-card p-6 border-l-4 border-l-blue-600 md:border-l-0 md:border-r-4 md:border-r-blue-600 hover:bg-white/60 transition-colors dark:hover:bg-slate-800/60">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 mb-3 dark:text-slate-400">St. Thomas College of Arts & Science</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 dark:text-white">Bachelor of Commerce</h3>
                <h4 className="text-blue-600 text-lg mb-4 dark:text-blue-400">Accounting & Finance</h4>
                <div className="flex items-center gap-2 text-slate-600 md:justify-end dark:text-slate-400">
                  <Calendar size={16} />
                  <span>2025 - 2028</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[45%] md:pl-10 flex items-center gap-4 hidden md:flex">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-slate-900 dark:text-white">
                <GraduationCap size={32} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
