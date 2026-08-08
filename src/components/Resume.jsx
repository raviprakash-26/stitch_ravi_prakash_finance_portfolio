import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="rounded-[32px] overflow-hidden shadow-2xl" style={{ backgroundColor: '#001B4D' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12 lg:p-16">
            {/* LEFT SIDE - TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Take my <span className="text-blue-400">Resume.</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Download my detailed professional CV including academic records, certification links, and a complete index of all analytical projects.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume/Ravi_Prakash_Resume.pdf"
                  download="Ravi_Prakash_Resume.pdf"
                  className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.25)] group dark:bg-blue-500"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE - RESUME PREVIEW */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <a
                href="/resume/Ravi_Prakash_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="relative w-full max-w-sm">
                  {/* Document card */}
                  <div className="rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[0_20px_60px_rgba(37,99,235,0.4)] transition-all duration-300 transform group-hover:scale-105 group-hover:-rotate-1 origin-center">
                    <div className="bg-white rounded-2xl p-8 aspect-[3/4] flex flex-col justify-between border-8 border-slate-100 shadow-lg">
                      {/* Document Header */}
                      <div className="border-b-2 border-slate-300 pb-4">
                        <div className="text-2xl font-bold text-slate-900 mb-2">Ravi Prakash</div>
                        <div className="text-sm text-blue-600 font-semibold">Financial, Data Analyst & Data Scientist</div>
                      </div>

                      {/* Document Content Placeholder */}
                      <div className="flex-1 py-4 space-y-3">
                        <div className="h-2 bg-slate-300 rounded w-3/4"></div>
                        <div className="h-2 bg-slate-300 rounded w-full"></div>
                        <div className="h-2 bg-slate-300 rounded w-5/6"></div>
                        <div className="mt-4 space-y-2">
                          <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                          <div className="h-1.5 bg-slate-200 rounded w-5/6"></div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                          <div className="h-1.5 bg-slate-200 rounded w-4/5"></div>
                        </div>
                      </div>

                      {/* Document Footer */}
                      <div className="border-t-2 border-slate-300 pt-4 text-center text-xs text-slate-500">
                        Page 1 of 2
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg group-hover:bg-blue-500 transition-colors">
                    Click to View
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
