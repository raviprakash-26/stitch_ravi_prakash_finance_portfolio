import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Resume', href: '/resume/Ravi_Prakash_Resume.pdf', external: true },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between gap-3">
        <a href="#home" className="text-2xl font-bold text-slate-900 tracking-tighter hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400">
          Ravi <span className="text-blue-600 dark:text-blue-400">Prakash</span>
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-600 transition-all duration-300 tracking-wide font-medium dark:text-slate-300 dark:hover:text-blue-400"
            >
              {link.name === 'Resume' && <FileText size={14} className="shrink-0" />}
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button className="md:hidden text-slate-900 focus:outline-none dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-lg text-slate-600 hover:text-blue-600 transition-colors tracking-wide font-medium dark:text-slate-300 dark:hover:text-blue-400"
              >
                {link.name === 'Resume' && <FileText size={16} />}
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
