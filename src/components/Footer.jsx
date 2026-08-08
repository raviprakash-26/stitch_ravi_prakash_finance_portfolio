import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-8 relative z-10 dark:border-white/10 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-slate-900 tracking-tighter block mb-2 dark:text-white">
              Ravi <span className="text-blue-600 dark:text-blue-400">Prakash</span>
            </a>
            <p className="text-slate-600 max-w-sm dark:text-slate-400">
              Transforming business data into meaningful insights through financial analysis and interactive dashboards.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/raviprakash2606" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400">
              <Linkedin size={20} />
            </a>
            <a href="mailto:raviprakash2662006@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="text-center border-t border-slate-200 pt-8 dark:border-white/10">
          <p className="text-slate-500 text-sm dark:text-slate-400">
            © {currentYear} Ravi Prakash G R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
