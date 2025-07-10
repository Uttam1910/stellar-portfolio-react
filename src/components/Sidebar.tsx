import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCode, FaGraduationCap, FaEnvelope, FaFileAlt, FaLinkedin, FaGithub, FaBars, FaCertificate } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger button for small screens */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="text-white bg-teal-500 p-2 rounded-md">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`lg:w-64 bg-gray-800 text-white fixed h-full flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40`}>
        
        {/* Profile section */}
        <div className="flex items-center justify-center p-4">
          <img src="/images/uttam.JPG" alt="Uttam" className="w-24 h-26 rounded-full border-4 border-teal-400" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Uttam</h2>
            <p className="text-sm">Computer Science Student</p>
          </div>
        </div>
        
        {/* Navigation links with scrollable content */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col space-y-1">
            <li>
              <Link to="/" className="flex items-center p-4 hover:bg-teal-700" onClick={toggleSidebar}>
                <FaHome className="mr-3" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center p-4 hover:bg-teal-700" onClick={toggleSidebar}>
                <FaUser className="mr-3" /> About
              </Link>
            </li>
            <li>
              <Link to="/experience" className="flex items-center p-4 hover:bg-teal-700" onClick={toggleSidebar}>
                <FaBriefcase className="mr-3" /> Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className="flex items-center p-4 hover:bg-teal-700" onClick={toggleSidebar}>
                <FaProjectDiagram className="mr-3" /> Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="flex items-center p-4 hover:bg-teal-700" onClick={toggleSidebar}>
                <FaCode className="mr-3" /> Skills
              </Link>
            </li>
            <li>
              <Link to="/certificates" className="flex items-center p-4 hover:bg-teal-700" onClick={toggleSidebar}>
                <FaCertificate className="mr-3" /> Certificates
              </Link>
            </li>
            <li>
              <Link to="/education" className="flex items-center p-4 hover:bg-teal-700" onClick={toggleSidebar}>
                <FaGraduationCap className="mr-3" /> Education
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center p-4 hover:bg-teal-700" onClick={toggleSidebar}>
                <FaEnvelope className="mr-3" /> Contact
              </Link>
            </li>
            <li>
              <a href="/pdf/Uttam_py.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 hover:bg-teal-700" onClick={toggleSidebar}>
                <FaFileAlt className="mr-3" /> Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Social links */}
        <div className="p-4 flex justify-center space-x-4 bg-gray-900">
          <a href="https://www.linkedin.com/in/uttam-thapa-1798a925a/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/uttam1910" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-500">
            <FaGithub size={24} />
          </a>
        </div>
      </aside>

      {/* Overlay for small screens */}
      {isOpen && (
        <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"></div>
      )}
    </>
  );
};

export default Sidebar;
