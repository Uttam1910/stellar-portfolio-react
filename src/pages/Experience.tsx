import React from 'react';

const Experience: React.FC = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <section id="experience" className="bg-white shadow-md rounded-lg p-6 lg:ml-64 mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Experience</h1>
        
        <div className="experience-item mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Web Developer Intern</h2>
          <h3 className="text-xl text-gray-500">Internpe</h3>
          <p className="text-gray-600"><i className="fas fa-calendar-alt mr-2"></i>June 2024 - July 2024</p>
          <p className="text-gray-600">Assisted in the development of client websites using HTML, CSS, and JavaScript. Worked closely with the design team to ensure the websites were responsive and user-friendly.</p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Developed responsive web pages using HTML, CSS, and JavaScript.</li>
            <li>Collaborated with the design team to create user-friendly interfaces.</li>
            <li>Tested and debugged web applications to ensure cross-browser compatibility.</li>
          </ul>
        </div>

        <div className="experience-item mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Recursion Hackathon</h2>
          <h3 className="text-xl text-gray-500">Rajiv Gandhi College</h3>
          <p className="text-gray-600"><i className="fas fa-calendar-alt mr-2"></i>24-hour Hackathon, Web Development + AI/ML</p>
          <p className="text-gray-600">Participated in a team of 4 members to develop an innovative web application integrating web development and AI/ML technologies. Designed and implemented the front-end interface using React, ensuring a seamless user experience.</p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Collaborated with team members to integrate AI/ML features into the web application.</li>
            <li>Gained valuable experience in rapid development and teamwork under time constraints.</li>
          </ul>
          <p className="text-gray-600 mt-4"><strong>Technologies:</strong> React, JavaScript, HTML, CSS, Python (for AI/ML)</p>
        </div>

        <div className="experience-item mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Portfolio Website Development</h2>
          <h3 className="text-xl text-gray-500">Personal Project</h3>
          <p className="text-gray-600"><i className="fas fa-calendar-alt mr-2"></i>July 2024 - August 2024</p>
          <p className="text-gray-600">Designed and developed a personal portfolio website using React and TypeScript to showcase my projects and skills. Implemented a card grid layout for the project section, allowing users to click and view project details without taking extra space. Ensured the website is fully responsive and works seamlessly across different devices.</p>
          <p className="text-gray-600 mt-4"><strong>Technologies:</strong> React, TypeScript, CSS, HTML</p>
        </div>

        <div className="experience-item mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">LMS Development</h2>
          <h3 className="text-xl text-gray-500">Major Project</h3>
          <p className="text-gray-600"><i className="fas fa-calendar-alt mr-2"></i>May 2024 - July 2024</p>
          <p className="text-gray-600">Developed the front end and back end of a Learning Management System (LMS) and integrated the entire system to provide a seamless user experience for students and instructors.</p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Designed and implemented the front-end interface using React and Vite.</li>
            <li>Built the back-end server using Node.js and Express.</li>
            <li>Integrated the system with a MongoDB database for efficient data management.</li>
            <li>Ensured the application is scalable and maintains high performance.</li>
          </ul>
          <p className="text-gray-600 mt-4"><strong>Technologies:</strong> React, Node.js, Express, MongoDB, CSS, HTML, Javascript</p>
        </div>
        
      </section>
    </main>
  );
};

export default Experience;
