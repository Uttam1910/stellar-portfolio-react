import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-gray-100 py-16 px-4 lg:ml-64">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-black mb-12 uppercase tracking-tight">
          Education
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-900 text-gray-300 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-teal-300 border-b-2 border-teal-300 pb-2 mb-4">
              Bachelor of Technology in Computer Science
            </h2>
            <h3 className="text-xl font-medium mb-2">
              Mumbai University - MCT's Rajiv Gandhi Institute of Technology, Mumbai.
            </h3>
            <p className="text-gray-400"><i className="fas fa-calendar-alt"></i> December 2021 - June 2025</p>
            <p className="text-base leading-relaxed mt-2">
              Relevant coursework: Data Structures and Algorithms, Machine Learning, Web Development, Database Systems, Operating Systems.
            </p>
            <p className="text-base leading-relaxed mt-2"><strong>CGPA:</strong> 9.62 (up to the third year)</p>
          </div>
          <div className="bg-gray-900 text-gray-300 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-teal-300 border-b-2 border-teal-300 pb-2 mb-4">
              High School Diploma
            </h2>
            <h3 className="text-xl font-medium mb-2">
            V K Krishna Menon College
            </h3>
            <p className="text-gray-400"><i className="fas fa-calendar-alt"></i> August 2019 - May 2021</p>
            <p className="text-base leading-relaxed mt-2">
              Graduated with honors, focusing on mathematics and computer science.
            </p>
            <p className="text-base leading-relaxed mt-2"><strong>12th Grade Percentage:</strong> 91%</p>
          </div>
          <div className="bg-gray-900 text-gray-300 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-teal-300 border-b-2 border-teal-300 pb-2 mb-4">
              Secondary School Certificate
            </h2>
            <h3 className="text-xl font-medium mb-2">
              S.V.B’S OXFORD HIGH SCHOOL
            </h3>
            <p className="text-gray-400"><i className="fas fa-calendar-alt"></i> May 2019</p>
            <p className="text-base leading-relaxed mt-2"><strong>10th Grade Percentage:</strong> 87%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
