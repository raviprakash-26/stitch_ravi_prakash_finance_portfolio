import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />, title: 'Financial Analytics', desc: 'Expertise in analyzing financial data to uncover trends.' },
    { icon: <BarChart3 className="text-blue-500 dark:text-blue-400" size={24} />, title: 'Business Intelligence', desc: 'Transforming raw data into actionable business insights.' },
    { icon: <Briefcase className="text-emerald-500" size={24} />, title: 'Accounting Expertise', desc: 'Strong foundation in financial principles and accounting.' },
    { icon: <PieChart className="text-purple-500" size={24} />, title: 'Dashboard Development', desc: 'Building interactive dashboards in Power BI and Tableau.' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 dark:text-white">About <span className="text-blue-600 dark:text-blue-400">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6 dark:text-slate-300">
              I am a <strong className="text-slate-900 dark:text-white">B.Com Accounting & Finance student</strong> deeply passionate about the intersection of finance and technology. My core focus lies in Financial Analysis, Accounting, Data Analytics, and Business Intelligence.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed dark:text-slate-300">
              I specialize in leveraging modern data tools—including <strong className="text-blue-600 dark:text-blue-400">Power BI, Excel, Tally Prime, and Tableau</strong>—to transform complex business data into meaningful, visual insights that drive strategic decision-making. My goal is to build powerful financial dashboards and models that add measurable value to businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300 border border-slate-200/70 hover:border-blue-500/30 dark:border-white/5 dark:hover:border-blue-400/30">
                <div className="bg-slate-100/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4 dark:bg-slate-900/50">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
