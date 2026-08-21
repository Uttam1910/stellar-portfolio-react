import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { personalInfo } from '../data/portfolioData';
import { 
  FaFileDownload, 
  FaGithub, 
  FaLinkedin, 
  FaBars, 
  FaTimes,
  FaHome,
  FaUser,
  FaBriefcase,
  FaLaptopCode,
  FaTools,
  FaGraduationCap,
  FaEnvelope
} from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: 'Home', path: '/', icon: FaHome },
    { label: 'About', path: '/about', icon: FaUser },
    { label: 'Experience', path: '/experience', icon: FaBriefcase },
    { label: 'Projects', path: '/projects', icon: FaLaptopCode },
    { label: 'Skills', path: '/skills', icon: FaTools },
    { label: 'Education', path: '/education', icon: FaGraduationCap },
    { label: 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  // Prevent background scroll when mobile sidebar menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const mobileSidebarContent = (
    <>
      {/* Semi-transparent Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[999] md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Mobile Sidebar Panel */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 z-[1000] w-72 max-w-[85vw] bg-slate-900 border-r border-slate-700/80 shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-slate-700/80 flex items-center justify-between bg-slate-900/90 flex-shrink-0">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <img 
              src="/images/uttam.JPG" 
              alt="Uttam Thapa" 
              className="w-10 h-10 rounded-full border-2 border-blue-400 object-cover shadow-sm"
              onError={(e) => { (e.target as HTMLImageElement).src = '/images/avtar.png'; }}
            />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm text-white tracking-tight">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close sidebar navigation"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Status indicator badge */}
        <div className="px-4 py-2.5 bg-slate-800/60 border-b border-slate-700/60 flex items-center gap-2 text-[11px] font-mono text-slate-300 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
          <span className="truncate">Available for Software Roles</span>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-blue-500/15 text-blue-400 border-l-4 border-blue-400 pl-2.5 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`
                }
              >
                <Icon className="text-sm text-blue-400/80 flex-shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Footer: Social Links & Resume CTA */}
        <div className="p-4 border-t border-slate-700/80 bg-slate-900/90 space-y-3 flex-shrink-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-500/20 transition-all border border-slate-700/60"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-500/20 transition-all border border-slate-700/60"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-base" />
              </a>
            </div>
            <Link
              to="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all"
            >
              <FaFileDownload className="text-xs" />
              <span>Resume PDF</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );

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
          className="md:hidden text-slate-300 hover:text-white p-2 text-xl focus:outline-none"
          aria-label="Toggle navigation sidebar"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Render Mobile Sidebar Portal directly on document.body */}
      {mounted && createPortal(mobileSidebarContent, document.body)}
    </header>
  );
};
