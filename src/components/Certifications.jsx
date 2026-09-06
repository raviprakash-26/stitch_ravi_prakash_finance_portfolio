import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoom, setZoom] = useState(1);

  const certificates = [
    {
      id: 1,
      title: 'Data Analytics',
      provider: 'Simplilearn SkillUp',
      image: '/data-analytics.jpg',
      issueDate: 'June 2026',
      alt: 'Data Analytics Certificate',
    },
    {
      id: 8,
      title: 'Microsoft Applied Skills Generate reports with AI research agents',
      provider: 'Microsoft',
      image: '/certificates/Microsoft Applied Skills Generate reports with AI research agents.jpg',
      issueDate: 'September 5, 2026',
      alt: 'Microsoft Applied Skills Generate reports with AI research agents',
      credentialId: '54043CCE2C3353DB'
    },
    {
      id: 2,
      title: 'Data Visualization',
      provider: 'Simplilearn SkillUp',
      image: '/data-visualization.jpg',
      issueDate: 'June 2026',
      alt: 'Data Visualization Certificate',
    },
    {
      id: 3,
      title: 'SQL for Data Analysis',
      provider: 'Simplilearn SkillUp',
      image: '/sql-data-analysis.jpg',
      issueDate: 'June 2026',
      alt: 'SQL for Data Analysis Certificate',
    },
    {
      id: 4,
      title: 'MS Excel',
      provider: 'Microsoft & Simplilearn',
      image: '/ms-excel.jpg',
      issueDate: 'June 2026',
      alt: 'MS Excel Certificate',
    },
    {
      id: 5,
      title: 'Power BI',
      provider: 'Microsoft & Simplilearn',
      image: '/power-bi.jpg',
      issueDate: 'June 2026',
      alt: 'Power BI Certificate',
    },
    {
      id: 6,
      title: 'Digital Marketing',
      provider: 'Simplilearn SkillUp',
      image: '/digital-marketing.jpg',
      issueDate: 'June 2026',
      alt: 'Digital Marketing Certificate',
    },
    {
      id: 7,
      title: 'English Language Communication',
      provider: 'Tamil Nadu Skill Development Corporation (Naan Mudhalvan) & Pearson MePro',
      image: '/english-language-communication.jpg',
      issueDate: 'May 2026',
      alt: 'English Language Communication Certificate',
    },
    {
      id: 8,
      title: 'Microsoft Applied Skills: Generate reports with AI research agents',
      provider: 'Microsoft',
      image: '/certificates/microsoft-generate-reports-ai-research-agents.jpg',
      issueDate: 'September 5, 2026',
      alt: 'Microsoft Applied Skills - Generate reports with AI research agents',
      credentialId: '54043CCE2C3353DB'
    },
  ];

  const handleZoomIn = () => {
    if (zoom < 3) setZoom(zoom + 0.5);
  };

  const handleZoomOut = () => {
    if (zoom > 1) setZoom(zoom - 0.5);
  };

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 dark:text-white">
            Certifications & <span className="text-blue-600 dark:text-blue-400">Achievements</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed dark:text-slate-400">
            These certifications demonstrate my commitment to continuous learning and professional development in Data Analytics, Data Visualization, SQL, Microsoft Excel, Power BI, Digital Marketing, and Professional Communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card overflow-hidden rounded-xl transition-all duration-300 hover:border-blue-500/50 h-full flex flex-col">
                <div
                  className="relative overflow-hidden h-48 cursor-pointer bg-slate-200 dark:bg-slate-800"
                  onClick={() => { setSelectedCert(cert); setZoom(1); }}
                >
                  <motion.img
                    src={cert.image}
                    alt={cert.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="bg-blue-600/90 p-3 rounded-full"
                    >
                      <ZoomIn size={24} className="text-white" />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow dark:text-slate-400">
                    {cert.provider}
                  </p>
                  {cert.issueDate && (
                    <p className="text-xs text-slate-500 mb-4 dark:text-slate-500">
                      Issued: {cert.issueDate}
                    </p>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setSelectedCert(cert); setZoom(1); }}
                    className="w-full py-2 px-4 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg transition-all duration-300 font-medium text-sm dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-950"
                  >
                    View Certificate
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 bg-red-500/90 hover:bg-red-600 p-2 rounded-full text-white transition-all"
              >
                <X size={24} />
              </button>

              <div className="bg-white rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 sm:p-8 dark:bg-slate-900">
                <div className="overflow-auto max-w-full max-h-[70vh] flex items-center justify-center">
                  <motion.img
                    src={selectedCert.image}
                    alt={selectedCert.alt}
                    className="rounded-lg max-w-full"
                    style={{ transform: `scale(${zoom})` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleZoomOut}
                    disabled={zoom <= 1}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    Zoom Out
                  </motion.button>
                  <span className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium">
                    {Math.round(zoom * 100)}%
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleZoomIn}
                    disabled={zoom >= 3}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    Zoom In
                  </motion.button>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2 dark:text-slate-400">
                    {selectedCert.provider}
                  </p>
                  {selectedCert.issueDate && (
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      Issued: {selectedCert.issueDate}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
