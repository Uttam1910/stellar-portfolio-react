import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import icons with aliases
import { 
  FaBars as FaBarsOriginal,
  FaHome as FaHomeOriginal,
  FaUser as FaUserOriginal,
  FaBriefcase as FaBriefcaseOriginal,
  FaProjectDiagram as FaProjectDiagramOriginal,
  FaCode as FaCodeOriginal,
  FaGraduationCap as FaGraduationCapOriginal,
  FaEnvelope as FaEnvelopeOriginal,
  FaFileAlt as FaFileAltOriginal,
  FaLinkedin as FaLinkedinOriginal,
  FaGithub as FaGithubOriginal,
  FaCertificate as FaCertificateOriginal,
  FaTimes as FaTimesOriginal
} from 'react-icons/fa';

// Cast icons to React ComponentType
const FaBars = FaBarsOriginal as React.ComponentType<any>;
const FaHome = FaHomeOriginal as React.ComponentType<any>;
const FaUser = FaUserOriginal as React.ComponentType<any>;
const FaBriefcase = FaBriefcaseOriginal as React.ComponentType<any>;
const FaProjectDiagram = FaProjectDiagramOriginal as React.ComponentType<any>;
const FaCode = FaCodeOriginal as React.ComponentType<any>;
const FaGraduationCap = FaGraduationCapOriginal as React.ComponentType<any>;
const FaEnvelope = FaEnvelopeOriginal as React.ComponentType<any>;
const FaFileAlt = FaFileAltOriginal as React.ComponentType<any>;
const FaLinkedin = FaLinkedinOriginal as React.ComponentType<any>;
const FaGithub = FaGithubOriginal as React.ComponentType<any>;
const FaCertificate = FaCertificateOriginal as React.ComponentType<any>;
const FaTimes = FaTimesOriginal as React.ComponentType<any>;

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { to: '/', icon: FaHome, label: 'Home' },
    { to: '/about', icon: FaUser, label: 'About' },
    { to: '/experience', icon: FaBriefcase, label: 'Experience' },
    { to: '/projects', icon: FaProjectDiagram, label: 'Projects' },
    { to: '/skills', icon: FaCode, label: 'Skills' },
    { to: '/certificates', icon: FaCertificate, label: 'Certificates' },
    { to: '/education', icon: FaGraduationCap, label: 'Education' },
    { to: '/contact', icon: FaEnvelope, label: 'Contact' },
  ];

  return (
    <>
      {/* Hamburger button for small screens */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleSidebar} 
          className="text-white bg-teal-500 hover:bg-teal-600 p-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Toggle menu"
        >
          <FaBars className="w-5 h-5" />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`lg:w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white fixed h-full flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 shadow-2xl border-r border-teal-500/10`}>
        
        {/* Close button for mobile */}
        <div className="lg:hidden flex justify-end p-4 border-b border-gray-700">
          <button 
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700 rounded-lg"
            aria-label="Close menu"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Profile section */}
        <div className="flex flex-col items-center p-6 border-b border-gray-700 animate-fade-in">
          <div className="relative mb-4 group">
            <img 
              src="/images/uttam.JPG" 
              alt="Uttam" 
              className="w-24 h-24 rounded-full border-4 border-teal-400 shadow-lg object-cover transition-transform duration-300 group-hover:scale-110 group-hover:shadow-glow" 
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-teal-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
          </div>
          <h2 className="text-xl font-bold text-white mb-1 text-center">Uttam</h2>
          <p className="text-sm text-gray-400 text-center">Full Stack Developer</p>
        </div>
        
        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col space-y-2 px-3">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <li key={link.to} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
                  <Link 
                    to={link.to} 
                    className={`flex items-center p-3 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                      active 
                        ? 'bg-teal-500 text-white shadow-lg transform scale-105' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={toggleSidebar}
                  >
                    {!active && (
                      <span className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/0 to-teal-500/0 group-hover:from-teal-500/0 group-hover:via-teal-500/20 group-hover:to-teal-500/0 transition-all duration-500"></span>
                    )}
                    <Icon className="mr-3 text-lg relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}
            <li className="animate-fade-in" style={{ animationDelay: `${navLinks.length * 50}ms` }}>
              <a 
                href="/pdf/Uttam_py.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center p-3 rounded-lg transition-all duration-300 group text-gray-300 hover:bg-gray-700 hover:text-white relative overflow-hidden`}
                onClick={toggleSidebar}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/0 to-teal-500/0 group-hover:from-teal-500/0 group-hover:via-teal-500/20 group-hover:to-teal-500/0 transition-all duration-500"></span>
                <FaFileAlt className="mr-3 text-lg relative z-10 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium relative z-10">Resume</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Social links */}
        <div className="p-4 border-t border-gray-700 bg-gray-900/50 animate-fade-in">
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/uttam-thapa-1798a925a/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/20 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-110 relative group"
              aria-label="LinkedIn"
            >
              <span className="absolute inset-0 bg-teal-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              <FaLinkedin className="w-5 h-5 relative z-10" />
            </a>
            <a 
              href="https://github.com/uttam1910" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/20 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-110 relative group"
              aria-label="GitHub"
            >
              <span className="absolute inset-0 bg-teal-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              <FaGithub className="w-5 h-5 relative z-10" />
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay for small screens */}
      {isOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 animate-fade-in"
        ></div>
      )}
    </>
  );
};

export default Sidebar;