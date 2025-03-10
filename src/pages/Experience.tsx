import React from 'react';
import { FaCalendarAlt, FaLink, FaGithub } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <section id="experience" className="bg-white shadow-md rounded-lg p-6 lg:ml-64 mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Experience</h1>
        
        <div className="experience-item mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Web Developer Intern</h2>
          <h3 className="text-xl text-gray-500">Internpe</h3>
          <p className="text-gray-600"><FaCalendarAlt className="inline-block mr-2" />June 2024 - July 2024</p>
          <p className="text-gray-600">Assisted in the development of client websites using HTML, CSS, and JavaScript. Worked closely with the design team to ensure the websites were responsive and user-friendly.</p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Developed responsive web pages using HTML, CSS, and JavaScript.</li>
            <li>Collaborated with the design team to create user-friendly interfaces.</li>
            <li>Tested and debugged web applications to ensure cross-browser compatibility.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <a href="Certificates/certificate6.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
              <FaLink className="inline-block mr-2" />View Certificate
            </a>
          </p>
        </div>

        <div className="experience-item mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Software Developer Intern</h2>
          <h3 className="text-xl text-gray-500">Prodigy InfoTech</h3>
          <p className="text-gray-600"><FaCalendarAlt className="inline-block mr-2" />September 2024 - October 2024</p>
          <p className="text-gray-600">Gained hands-on experience in software development by working on client projects. Improved system efficiency and functionality by collaborating with a team of developers and participating in code reviews.</p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Developed efficient algorithms to improve application performance.</li>
            <li>Participated in code reviews and worked on bug fixes.</li>
            <li>Collaborated with the team on project development and documentation.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <a href="Certificates/prodigyinfotech.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
              <FaLink className="inline-block mr-2" />View Certificate
            </a>
          </p>
        </div>

        <div className="experience-item mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Recursion Hackathon</h2>
          <h3 className="text-xl text-gray-500">Rajiv Gandhi College</h3>
          <p className="text-gray-600"><FaCalendarAlt className="inline-block mr-2" />24-hour Hackathon, Web Development + AI/ML</p>
          <p className="text-gray-600">Participated in a team of 4 members to develop an innovative web application integrating web development and AI/ML technologies. Designed and implemented the front-end interface using React, ensuring a seamless user experience.</p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Collaborated with team members to integrate AI/ML features into the web application.</li>
            <li>Gained valuable experience in rapid development and teamwork under time constraints.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <a href="Certificates/Recursion.png" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
              <FaLink className="inline-block mr-2" />View Certificate
            </a>
          </p>
          <p className="text-gray-600 mt-4"><strong>Technologies:</strong> React, JavaScript, HTML, CSS, Python (for AI/ML)</p>
        </div>

        <div className="experience-item mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Portfolio Website Development</h2>
          <h3 className="text-xl text-gray-500">Personal Project</h3>
          <p className="text-gray-600"><FaCalendarAlt className="inline-block mr-2" />July 2024 - August 2024</p>
          <p className="text-gray-600">Designed and developed a personal portfolio website using React and TypeScript to showcase my projects and skills. Implemented a card grid layout for the project section, allowing users to click and view project details without taking extra space. Ensured the website is fully responsive and works seamlessly across different devices.</p>
          <p className="text-gray-600 mt-4"><strong>Technologies:</strong> React, TypeScript, Tailwind-CSS, HTML</p>
          <p className="text-gray-600 mt-4">
            <a href="https://github.com/Uttam1910/stellar-portfolio-react" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
              <FaGithub className="inline-block mr-2" />View on GitHub
            </a>
          </p>
        </div>

        <div className="experience-item mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">LMS Development</h2>
          <h3 className="text-xl text-gray-500">Major Project</h3>
          <p className="text-gray-600"><FaCalendarAlt className="inline-block mr-2" />May 2024 - July 2024</p>
          <p className="text-gray-600">Developed the front end and back end of a Learning Management System (LMS) and integrated the entire system to provide a seamless user experience for students and instructors.</p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Designed and implemented the front-end interface using React and Vite.</li>
            <li>Built the back-end server using Node.js and Express.</li>
            <li>Integrated the system with a MongoDB database for efficient data management.</li>
            <li>Ensured the application is scalable and maintains high performance.</li>
          </ul>
          <p className="text-gray-600 mt-4"><strong>Technologies:</strong> React, Node.js, Express, MongoDB, CSS, HTML, Javascript</p>
          <p className="text-gray-600 mt-4">
            <a href="https://github.com/Uttam1910/EduMaster" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
              <FaGithub className="inline-block mr-2" />View on GitHub
            </a>
          </p>
        </div>
        
      </section>
    </main>
  );
};

export default Experience;
