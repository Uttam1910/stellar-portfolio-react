import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { FaArrowUp, FaGithub, FaLinkedin, FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-700/60 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Identity & Parent Domain Direct Link */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="font-sans font-bold text-sm text-white flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span>{personalInfo.name} — Full-Stack Software Engineer</span>
            </div>
            <div className="font-mono text-[11px] text-slate-400 flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
              <span>© {new Date().getFullYear()} Uttam Thapa. All rights reserved.</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-300 font-medium inline-flex items-center gap-1.5">
                <FaGlobe className="text-blue-400 text-xs" />
                <span>Parent Website:</span>
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline font-semibold transition-colors inline-flex items-center gap-1"
                >
                  {personalInfo.domainDisplay}
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>
              </span>
            </div>
          </div>

          {/* Center: Quick Semantic Route Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/experience" className="hover:text-blue-400 transition-colors">Experience</Link>
            <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
            <Link to="/skills" className="hover:text-blue-400 transition-colors">Skills</Link>
            <Link to="/education" className="hover:text-blue-400 transition-colors">Education</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            <Link to="/resume" className="hover:text-blue-400 transition-colors">Resume</Link>
          </nav>

          {/* Right: Social & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-base transition-colors"
              aria-label="GitHub Profile of Uttam Thapa"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-base transition-colors"
              aria-label="LinkedIn Profile of Uttam Thapa"
            >
              <FaLinkedin />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors font-mono text-[11px]"
            >
              <span>Top</span>
              <FaArrowUp className="text-[10px]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
