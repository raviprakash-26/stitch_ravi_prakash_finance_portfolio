import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    'Power BI', 'Microsoft Excel', 'Tally Prime', 'Tableau',
    'DAX', 'Power Query', 'Financial Analysis', 'Accounting',
    'Taxation', 'GST', 'Payroll Management', 'Inventory Management',
    'Business Analytics', 'Data Visualization',
  ];

  const softSkills = [
    'Communication Skills',
    'Analytical Thinking',
    'Problem-Solving Ability',
    'Time Management',
    'Attention to Detail',
    'Teamwork & Collaboration',
    'Adaptability',
    'Leadership Skills',
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-100/80 dark:bg-slate-800/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 dark:text-white">Technical & <span className="text-blue-600 dark:text-blue-400">Soft Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
          <div>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 dark:text-white">Technical Skills</h3>
              <p className="text-slate-600 dark:text-slate-400">Tools and technical capabilities used for data analysis and reporting.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 hover:border-blue-500/50 hover:-translate-y-1 transition-all cursor-default group"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-600 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.35)] transition-all"></div>
                  <span className="text-slate-700 font-medium tracking-wide group-hover:text-slate-900 transition-colors dark:text-slate-200 dark:group-hover:text-white">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 dark:text-white">Soft Skills</h3>
              <p className="text-slate-600 dark:text-slate-400">Personal strengths that support collaboration, problem solving, and leadership.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 hover:border-blue-500/50 hover:-translate-y-1 transition-all cursor-default group"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-600 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.35)] transition-all"></div>
                  <span className="text-slate-700 font-medium tracking-wide group-hover:text-slate-900 transition-colors dark:text-slate-200 dark:group-hover:text-white">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
