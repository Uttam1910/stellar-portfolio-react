import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-700/60 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-sans font-bold text-sm text-white">
            {personalInfo.name} — Full-Stack Software Engineer
          </div>
          <p className="font-mono text-[11px] text-slate-400">
            © {new Date().getFullYear()} Uttam Thapa. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white text-base transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white text-base transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors font-mono text-[11px]"
        >
          <span>Back to Top</span>
          <FaArrowUp className="text-[10px]" />
        </button>

      </div>
    </footer>
  );
};
