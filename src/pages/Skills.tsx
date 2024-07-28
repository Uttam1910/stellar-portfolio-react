import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-white py-16 px-4 lg:ml-64">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-12 uppercase tracking-tight">
          Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-200 text-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-teal-500 border-b-2 border-teal-500 pb-2 mb-4">
              Programming Languages
            </h2>
            <p className="text-base leading-relaxed">
              JavaScript, TypeScript, Python, Java, C++
            </p>
          </div>
          <div className="bg-gray-200 text-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-teal-500 border-b-2 border-teal-500 pb-2 mb-4">
              Web Development
            </h2>
            <p className="text-base leading-relaxed">
              HTML, CSS, React, Node.js, Express.js
            </p>
          </div>
          <div className="bg-gray-200 text-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-teal-500 border-b-2 border-teal-500 pb-2 mb-4">
              Database Management
            </h2>
            <p className="text-base leading-relaxed">
              MySQL, MongoDB
            </p>
          </div>
          <div className="bg-gray-200 text-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-teal-500 border-b-2 border-teal-500 pb-2 mb-4">
              DevOps
            </h2>
            <p className="text-base leading-relaxed">
              Docker, Kubernetes, Jenkins, AWS, Azure
            </p>
          </div>
          <div className="bg-gray-200 text-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-teal-500 border-b-2 border-teal-500 pb-2 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-base leading-relaxed">
              Git, VS Code, Linux
            </p>
          </div>
          <div className="bg-gray-200 text-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-teal-500 border-b-2 border-teal-500 pb-2 mb-4">
              Soft Skills
            </h2>
            <p className="text-base leading-relaxed">
              Team Collaboration, Problem Solving, Communication, Agile Methodologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
