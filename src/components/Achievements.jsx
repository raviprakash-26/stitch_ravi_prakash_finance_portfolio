import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Wrench, Database, LineChart } from 'lucide-react';

const Achievements = () => {
  const stats = [
    { value: '25+', label: 'Projects Completed', icon: <FolderGit2 size={32} /> },
    { value: '5+', label: 'Analytics Tools', icon: <Wrench size={32} /> },
    { value: '10k+', label: 'Records Analysed', icon: <Database size={32} /> },
    { value: '10+', label: 'Business Dashboards', icon: <LineChart size={32} /> },
  ];

  return (
    <section id="achievements" className="py-12 relative border-y border-slate-200 bg-slate-100/70 dark:border-white/5 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-blue-600 mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 dark:text-blue-400">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
                {stat.value}
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-medium tracking-wide uppercase dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
