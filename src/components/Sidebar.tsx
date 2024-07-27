import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCode, FaGraduationCap, FaEnvelope, FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white fixed h-full flex flex-col">
      <div className="flex items-center justify-center p-4">
      <img src="/images/uttam.jpg" alt="Uttam" className="w-24 h-26 rounded-full border-4 border-teal-400" />

        <div className="ml-4">
          <h2 className="text-xl font-semibold">Uttam</h2>
          <p className="text-sm">Computer Science Student</p>
        </div>
      </div>
      <nav className="flex-1">
        <ul className="flex flex-col space-y-1">
          <li><Link to="/" className="flex items-center p-4 hover:bg-teal-700"><FaHome className="mr-3"/> Home</Link></li>
          <li><Link to="/about" className="flex items-center p-4 hover:bg-teal-700"><FaUser className="mr-3"/> About</Link></li>
          <li><Link to="/experience" className="flex items-center p-4 hover:bg-teal-700"><FaBriefcase className="mr-3"/> Experience</Link></li>
          <li><Link to="/projects" className="flex items-center p-4 hover:bg-teal-700"><FaProjectDiagram className="mr-3"/> Projects</Link></li>
          <li><Link to="/skills" className="flex items-center p-4 hover:bg-teal-700"><FaCode className="mr-3"/> Skills</Link></li>
          <li><Link to="/education" className="flex items-center p-4 hover:bg-teal-700"><FaGraduationCap className="mr-3"/> Education</Link></li>
          <li><Link to="/contact" className="flex items-center p-4 hover:bg-teal-700"><FaEnvelope className="mr-3"/> Contact</Link></li>
          <li><a href="pdf/jobresume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 hover:bg-teal-700"><FaFileAlt className="mr-3"/> Resume</a></li>
        </ul>
      </nav>
      <div className="p-4 flex justify-center space-x-4 bg-gray-900">
        <a href="https://www.linkedin.com/in/uttam-thapa-1798a925a/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-500">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/uttam1910" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-500">
          <FaGithub size={24} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;