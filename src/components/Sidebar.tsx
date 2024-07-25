import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPage = location.pathname.split('/').pop();

  return (
    <aside className="bg-gray-900 w-64 p-6">
      <nav>
        <ul className="list-none p-0">
          <li id="profile-picture" className="flex justify-center mb-6">
            <img
              src="/images/uttam.jpg"
              alt="Profile Picture"
              className="w-48 h-56 rounded-full border-4 border-teal-500"
            />
          </li>
          <li className="my-4">
            <Link to="/" className={`flex items-center text-white text-lg ${currentPage === "" ? "underline" : ""}`}>
              <i className="fas fa-home mr-2"></i> Home
            </Link>
          </li>
          <li className="my-4">
            <Link to="/about" className={`flex items-center text-white text-lg ${currentPage === "about" ? "underline" : ""}`}>
              <i className="fas fa-user mr-2"></i> About
            </Link>
          </li>
          <li className="my-4">
            <Link to="/experience" className={`flex items-center text-white text-lg ${currentPage === "experience" ? "underline" : ""}`}>
              <i className="fas fa-briefcase mr-2"></i> Experience
            </Link>
          </li>
          <li className="my-4">
            <Link to="/projects" className={`flex items-center text-white text-lg ${currentPage === "projects" ? "underline" : ""}`}>
              <i className="fas fa-project-diagram mr-2"></i> Projects
            </Link>
          </li>
          <li className="my-4">
            <Link to="/skills" className={`flex items-center text-white text-lg ${currentPage === "skills" ? "underline" : ""}`}>
              <i className="fas fa-code mr-2"></i> Skills
            </Link>
          </li>
          <li className="my-4">
            <Link to="/education" className={`flex items-center text-white text-lg ${currentPage === "education" ? "underline" : ""}`}>
              <i className="fas fa-graduation-cap mr-2"></i> Education
            </Link>
          </li>
          <li className="my-4">
            <Link to="/contact" className={`flex items-center text-white text-lg ${currentPage === "contact" ? "underline" : ""}`}>
              <i className="fas fa-envelope mr-2"></i> Contact
            </Link>
          </li>
          <li className="my-4">
            <a href="/pdf/jobresume.pdf" target="_blank" className="flex items-center text-white text-lg">
              <i className="fas fa-file-alt mr-2"></i> Resume
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
