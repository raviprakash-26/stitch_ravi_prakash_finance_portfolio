import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init('k6OAkj1J1aq7Lbpa6');
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_6mb4tto',
        'template_5hr6jgj',
        {
          to_email: 'raviprakash2662006@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'k6OAkj1J1aq7Lbpa6',
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      const message = err?.text || err?.statusText || err?.status || 'Failed to send message. Please try again.';
      setError(message);
      console.error('EmailJS error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-100/80 dark:bg-slate-800/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 dark:text-white">Get In <span className="text-blue-600 dark:text-blue-400">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg dark:text-slate-400">
            Whether you have a question, a project, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 flex items-center gap-6 group hover:border-blue-500/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all dark:bg-blue-400/10 dark:text-blue-400 dark:group-hover:bg-blue-400 dark:group-hover:text-slate-950">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1 dark:text-slate-400">Email</p>
                <a href="mailto:raviprakash2662006@gmail.com" className="text-slate-900 font-medium hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400">
                  raviprakash2662006@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-6 group hover:border-blue-500/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all dark:bg-blue-400/10 dark:text-blue-400 dark:group-hover:bg-blue-400 dark:group-hover:text-slate-950">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1 dark:text-slate-400">Phone</p>
                <a href="tel:+918825507081" className="text-slate-900 font-medium hover:text-blue-500 transition-colors dark:text-white dark:hover:text-blue-400">
                  +91 8825507081
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-6 group hover:border-blue-500/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all dark:bg-blue-400/10 dark:text-blue-400 dark:group-hover:bg-blue-400 dark:group-hover:text-slate-950">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1 dark:text-slate-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/raviprakash2606" target="_blank" rel="noreferrer" className="text-slate-900 font-medium hover:text-blue-600 transition-colors break-all dark:text-white dark:hover:text-blue-400">
                  linkedin.com/in/raviprakash2606
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-6 group hover:border-blue-500/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-slate-500/10 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-slate-500 group-hover:text-white transition-all dark:text-slate-300 dark:group-hover:bg-slate-500 dark:group-hover:text-white">
                <Github size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1 dark:text-slate-400">GitHub</p>
                <a href="https://github.com/raviprakash-26" target="_blank" rel="noreferrer" className="text-slate-900 font-medium hover:text-blue-600 transition-colors break-all dark:text-white dark:hover:text-blue-400">
                  github.com/raviprakash-26
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/80 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 dark:bg-slate-900/70 dark:border-white/10 dark:text-white dark:placeholder:text-slate-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/80 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 dark:bg-slate-900/70 dark:border-white/10 dark:text-white dark:placeholder:text-slate-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/80 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 dark:bg-slate-900/70 dark:border-white/10 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/80 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 resize-none dark:bg-slate-900/70 dark:border-white/10 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Hello Ravi, I would like to..."
                  required
                ></textarea>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {submitted && <p className="text-blue-600 text-sm dark:text-blue-400">Message sent successfully! 🎉</p>}

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-500 disabled:bg-slate-400 transition-all flex items-center justify-center gap-2 group mt-2 shadow-[0_0_20px_rgba(37,99,235,0.2)] dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

