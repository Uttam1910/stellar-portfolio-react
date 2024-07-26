import React from 'react';

const Experience = () => {
  return (
    <main className="ml-64 p-8"> {/* Added ml-64 to add left margin */}
      <section id="experience">
        <h1 className="text-3xl font-bold mb-6">Experience</h1>
        <div className="experience-item mb-6">
          <h2 className="text-2xl font-semibold">Web Developer Intern</h2>
          <h3 className="text-xl text-gray-600">Internpe</h3>
          <p className="text-gray-500"><i className="fas fa-calendar-alt"></i> June 2024 - July 2024</p>
          <p>Assisted in the development of client websites using HTML, CSS, and JavaScript. Worked closely with the design team to ensure the websites were responsive and user-friendly.</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Developed responsive web pages using HTML, CSS, and JavaScript.</li>
            <li>Collaborated with the design team to create user-friendly interfaces.</li>
            <li>Tested and debugged web applications to ensure cross-browser compatibility.</li>
          </ul>
        </div>
        <div className="experience-container">
          <div className="experience-item mb-6">
            <h2 className="text-2xl font-semibold">Software Engineer Intern</h2>
            <h3 className="text-xl text-gray-600">ABC Tech Company</h3>
            <p className="text-gray-500"><i className="fas fa-calendar-alt"></i> June 2023 - August 2023</p>
            <p>Worked on developing scalable web applications using React and Node.js. Improved the performance of existing applications and collaborated with the design team to implement new features.</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Developed a user authentication system using OAuth.</li>
              <li>Improved application performance by optimizing database queries.</li>
              <li>Collaborated with the frontend team to design and implement new UI components.</li>
            </ul>
          </div>
          <div className="experience-item mb-6">
            <h2 className="text-2xl font-semibold">Machine Learning Intern</h2>
            <h3 className="text-xl text-gray-600">XYZ Innovations</h3>
            <p className="text-gray-500"><i className="fas fa-calendar-alt"></i> January 2023 - May 2023</p>
            <p>Implemented machine learning models for predictive analytics and worked on data preprocessing and feature engineering for various datasets.</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Developed a predictive model for customer churn using Python and scikit-learn.</li>
              <li>Performed data preprocessing and feature engineering to improve model accuracy.</li>
              <li>Collaborated with the data science team to deploy models in a production environment.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
