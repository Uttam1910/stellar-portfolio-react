import React from 'react';

const Experience = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section id="experience" className="bg-white shadow-md rounded-lg p-6 ml-64">
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
          <h2 className="text-2xl font-semibold text-gray-700">Software Engineer Intern</h2>
          <h3 className="text-xl text-gray-500">ABC Tech Company</h3>
          <p className="text-gray-600"><i className="fas fa-calendar-alt mr-2"></i>June 2023 - August 2023</p>
          <p className="text-gray-600">Worked on developing scalable web applications using React and Node.js. Improved the performance of existing applications and collaborated with the design team to implement new features.</p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Developed a user authentication system using OAuth.</li>
            <li>Improved application performance by optimizing database queries.</li>
            <li>Collaborated with the frontend team to design and implement new UI components.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2 className="text-2xl font-semibold text-gray-700">Machine Learning Intern</h2>
          <h3 className="text-xl text-gray-500">XYZ Innovations</h3>
          <p className="text-gray-600"><i className="fas fa-calendar-alt mr-2"></i>January 2023 - May 2023</p>
          <p className="text-gray-600">Implemented machine learning models for predictive analytics and worked on data preprocessing and feature engineering for various datasets.</p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Developed a predictive model for customer churn using Python and scikit-learn.</li>
            <li>Performed data preprocessing and feature engineering to improve model accuracy.</li>
            <li>Collaborated with the data science team to deploy models in a production environment.</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Experience;
