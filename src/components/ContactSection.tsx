import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload, FaPaperPlane, FaCheckCircle, FaClock } from 'react-icons/fa';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setErrorMessage('');

    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '4MEZ7JWrUuIZ7yvCl';
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_buykzno';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_abvk0hf';

    try {
      emailjs.init(publicKey);
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err: any) {
      console.error('Email error:', err);
      setErrorMessage('Failed to submit form automatically. Please email direct: ' + personalInfo.email);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900 border-b border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
            Recruiter & Technical Outreach
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Open for Software Engineering roles, Full-Stack opportunities, AI software initiatives, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="surface-card p-6 sm:p-8 space-y-6">
              <h3 className="font-sans text-xl font-bold text-white">Direct Communication</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-blue-500 transition-colors group"
                >
                  <FaEnvelope className="text-blue-400 text-base group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{personalInfo.email}</div>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-blue-500 transition-colors group"
                >
                  <FaLinkedin className="text-blue-400 text-base group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">/in/uttam-thapa-1798a925a</div>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-blue-500 transition-colors group"
                >
                  <FaGithub className="text-blue-400 text-base group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">GitHub Repositories</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">github.com/uttam1910</div>
                  </div>
                </a>

                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-blue-500 transition-colors group"
                >
                  <FaFileDownload className="text-blue-400 text-base group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Curriculum Vitae</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">Download Resume PDF</div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-700 flex items-center gap-2 text-xs font-mono text-slate-400">
                <FaClock className="text-blue-400 text-xs" />
                <span>Personal response expectation: within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="surface-card p-6 sm:p-8">
              
              {showSuccess && (
                <div className="mb-6 p-4 rounded-lg bg-mint-500/10 border border-mint-500/30 flex items-center gap-3 text-mint-500 text-xs sm:text-sm font-medium">
                  <FaCheckCircle className="text-base flex-shrink-0" />
                  <span>Message submitted successfully. Uttam will reply to your email within 24 hours.</span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-2">
                    Name / Recruiter Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2">
                    Message / Position Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share role details, project brief, or interview schedules..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>{isSending ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
