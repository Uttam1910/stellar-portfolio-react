import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaFileDownload, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/80 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Identity Logo */}
        <Link to="/" className="flex flex-col group">
          <span className="font-sans font-bold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
            {personalInfo.name.toUpperCase()}
          </span>
          <span className="font-mono text-[11px] text-slate-400 tracking-wider">
            {personalInfo.subtitle}
          </span>
        </Link>

        {/* Center: Desktop Multi-Page Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                    : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Social & Resume CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white text-base transition-colors p-1"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white text-base transition-colors p-1"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all transform hover:scale-[1.02]"
          >
            <FaFileDownload className="text-xs" />
            <span>Resume</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 text-xl"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-semibold py-1 transition-colors ${
                    isActive ? 'text-blue-400' : 'text-slate-200 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
            <div className="flex gap-4 text-xl text-slate-300">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <Link
              to="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-500 rounded-lg"
            >
              <FaFileDownload />
              <span>Resume PDF</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
