import React from 'react';
import { FaCalendarAlt as FaCalendarAltIcon, FaGraduationCap as FaGraduationCapIcon } from 'react-icons/fa';

// ✅ TypeScript-safe casts for react-icons
const FaCalendarAlt = FaCalendarAltIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaGraduationCap = FaGraduationCapIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Mumbai University - MCT\'s Rajiv Gandhi Institute of Technology, Mumbai',
      period: 'December 2021 - June 2025',
      details: 'Relevant coursework: Data Structures and Algorithms, Machine Learning, Web Development, Database Systems, Operating Systems.',
      achievement: 'CGPA: 9.62 (up to the third year)'
    },
    {
      degree: 'High School Diploma',
      institution: 'V K Krishna Menon College',
      period: 'August 2019 - May 2021',
      details: 'Graduated with honors, focusing on mathematics and computer science.',
      achievement: '12th Grade Percentage: 91%'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'S.V.B\'S OXFORD HIGH SCHOOL',
      period: 'May 2019',
      details: '',
      achievement: '10th Grade Percentage: 87%'
    }
  ];

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Main content - centered */}
      <section className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="w-full max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-teal-400 font-mono text-sm sm:text-base opacity-70">
              <span className="text-gray-500">&lt;</span>education
              <span className="text-gray-500">/&gt;</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              My <span className="text-teal-400">Education</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey and achievements
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:border-teal-500/40 transition-all duration-300 animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-teal-400 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">{edu.degree}</h2>
                    <h3 className="text-xl text-teal-400 font-semibold mb-3">{edu.institution}</h3>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <FaCalendarAlt className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.details && (
                      <p className="text-gray-300 leading-relaxed mb-3">{edu.details}</p>
                    )}
                    <p className="text-teal-400 font-semibold">{edu.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
