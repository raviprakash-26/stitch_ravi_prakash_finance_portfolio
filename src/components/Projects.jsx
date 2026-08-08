import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Power BI');

  const categories = ['Power BI', 'Excel', 'Tally Prime', 'Tableau'];

  const projects = [
    {
      title: 'Sales Performance Dashboard',
      category: 'Power BI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      features: ['Revenue Analysis', 'Profit Analysis', 'Product Performance', 'Regional Analysis'],
    },
    {
      title: 'Financial Statement Analysis',
      category: 'Power BI',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      features: ['Revenue Trends', 'Expense Analysis', 'Profitability KPIs', 'Financial Ratios'],
    },
    {
      title: 'Customer Profitability Analysis',
      category: 'Power BI',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      features: ['Customer Segmentation', 'Profitability Tracking', 'Revenue Contribution'],
    },
    {
      title: 'Revenue Forecasting Dashboard',
      category: 'Power BI',
      image: '/revenue-forecasting-dashboard.png',
      features: ['Forecasting', 'Growth Analysis', 'Trend Monitoring'],
    },
    {
      title: 'Investment Risk Analysis',
      category: 'Power BI',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
      features: ['Sharpe Ratio', 'Risk Assessment', 'Volatility Analysis', 'Portfolio Performance'],
    },
    {
      title: 'Fraud Detection Dashboard',
      category: 'Excel',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
      features: ['Fraud Monitoring', 'Risk Identification', 'KPI Tracking'],
    },
    {
      title: 'Cash Flow Statement Analysis',
      category: 'Tally Prime',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      features: ['Operating Activities', 'Investing Activities', 'Financing Activities', 'Cash Position Tracking'],
    },
    {
      title: 'Profit & Loss Dashboard',
      category: 'Tally Prime',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
      features: ['Revenue Monitoring', 'Expense Analysis', 'Gross Profit', 'Net Profit Analysis'],
    },
    {
      title: 'Tax Calculation System',
      category: 'Tally Prime',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
      features: ['Income Tax Calculation', 'Tax Reporting', 'Tax Summary', 'Compliance Tracking'],
    },
    {
      title: 'GST Billing System',
      category: 'Tally Prime',
      image: '/gst-billing-system.png',
      features: ['GST Invoice Generation', 'GST Reports', 'Tax Breakdown', 'Sales Tracking'],
    },
    {
      title: 'Payroll Management System',
      category: 'Tally Prime',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
      features: ['Employee Management', 'Salary Processing', 'Attendance Tracking', 'Payroll Reports'],
    },
    {
      title: 'Inventory Management System',
      category: 'Tableau',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      features: ['Stock Monitoring', 'Inventory Turnover', 'Reorder Alerts', 'Warehouse Analytics'],
    },
  ];

  const filteredProjects = projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 dark:text-white">Featured <span className="text-blue-600 dark:text-blue-400">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.25)] dark:bg-blue-500 dark:text-slate-950'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/80 text-blue-600 backdrop-blur-sm border border-slate-200 text-xs font-bold px-3 py-1 rounded-full dark:bg-slate-900/80 dark:text-blue-400 dark:border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  <div className="mb-6 flex-grow">
                    <p className="text-sm text-slate-500 mb-3 font-semibold uppercase tracking-wider dark:text-slate-400">Key Features:</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-700 text-sm flex items-start gap-2 dark:text-slate-300">
                          <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5 dark:text-blue-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
