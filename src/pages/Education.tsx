import React from 'react';
import { FaCalendarAlt as FaCalendarAltIcon, FaGraduationCap as FaGraduationCapIcon, FaTrophy as FaTrophyIcon } from 'react-icons/fa';

// ✅ TypeScript-safe casts for react-icons
const FaCalendarAlt = FaCalendarAltIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaGraduationCap = FaGraduationCapIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaTrophy = FaTrophyIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Mumbai University - MCT\'s Rajiv Gandhi Institute of Technology, Mumbai',
      period: 'December 2021 - June 2025 (Completed)',
      details: 'Relevant coursework: Data Structures and Algorithms, Machine Learning, Web Development, Database Systems, Operating Systems.',
      achievement: 'CGPA: 9.56 (average across all 4 years) — Degree completed',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      degree: 'High School Diploma',
      institution: 'V K Krishna Menon College',
      period: 'August 2019 - May 2021',
      details: 'Graduated with honors, focusing on mathematics and computer science.',
      achievement: '12th Grade Percentage: 91%',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'S.V.B\'S OXFORD HIGH SCHOOL',
      period: 'May 2019',
      details: '',
      achievement: '10th Grade Percentage: 87%',
      color: 'from-cyan-500 to-teal-500'
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
          <div className="space-y-6 relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-cyan-500 opacity-30 hidden md:block ml-6"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="md:ml-16 bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:border-teal-500/40 transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:shadow-teal-500/10 animate-fade-in-delay group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-8 hidden md:block">
                  <div className={`w-4 h-4 bg-gradient-to-r ${edu.color} rounded-full border-4 border-gray-900 shadow-lg group-hover:shadow-glow transition-all duration-300`}></div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${edu.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110`}>
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">{edu.degree}</h2>
                    <h3 className="text-xl text-teal-400 font-semibold mb-3">{edu.institution}</h3>
                    <div className="flex items-center text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
                      <FaCalendarAlt className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.details && (
                      <p className="text-gray-300 leading-relaxed mb-3 group-hover:text-gray-200 transition-colors duration-300">{edu.details}</p>
                    )}
                    <div className="flex items-center text-teal-400 font-semibold gap-2 group-hover:text-cyan-400 transition-colors duration-300">
                      <FaTrophy className="w-4 h-4" />
                      <span>{edu.achievement}</span>
                    </div>
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
