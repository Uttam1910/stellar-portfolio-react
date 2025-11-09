import React from 'react';
import {
  FaCalendarAlt as FaCalendarAltIcon,
  FaLink as FaLinkIcon,
  FaGithub as FaGithubIcon,
  FaBriefcase as FaBriefcaseIcon
} from 'react-icons/fa';

// ✅ TypeScript-safe casts for react-icons
const FaCalendarAlt = FaCalendarAltIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaLink = FaLinkIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaGithub = FaGithubIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaBriefcase = FaBriefcaseIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Internpe',
      period: 'June 2024 - July 2024',
      description: 'Assisted in the development of client websites using HTML, CSS, and JavaScript. Worked closely with the design team to ensure the websites were responsive and user-friendly.',
      responsibilities: [
        'Developed responsive web pages using HTML, CSS, and JavaScript.',
        'Collaborated with the design team to create user-friendly interfaces.',
        'Tested and debugged web applications to ensure cross-browser compatibility.'
      ],
      certificate: 'Certificates/certificate6.pdf',
      type: 'internship'
    },
    {
      title: 'Software Developer Intern',
      company: 'Prodigy InfoTech',
      period: 'September 2024 - October 2024',
      description: 'Gained hands-on experience in software development by working on client projects. Improved system efficiency and functionality by collaborating with a team of developers and participating in code reviews.',
      responsibilities: [
        'Developed efficient algorithms to improve application performance.',
        'Participated in code reviews and worked on bug fixes.',
        'Collaborated with the team on project development and documentation.'
      ],
      certificate: 'Certificates/prodigyinfotech.pdf',
      type: 'internship'
    },
    {
      title: 'Recursion Hackathon',
      company: 'Rajiv Gandhi College',
      period: '24-hour Hackathon, Web Development + AI/ML',
      description: 'Participated in a team of 4 members to develop an innovative web application integrating web development and AI/ML technologies. Designed and implemented the front-end interface using React, ensuring a seamless user experience.',
      responsibilities: [
        'Collaborated with team members to integrate AI/ML features into the web application.',
        'Gained valuable experience in rapid development and teamwork under time constraints.'
      ],
      certificate: 'Certificates/Recursion.png',
      technologies: 'React, JavaScript, HTML, CSS, Python (for AI/ML)',
      type: 'hackathon'
    },
    {
      title: 'Portfolio Website Development',
      company: 'Personal Project',
      period: 'July 2024 - August 2024',
      description: 'Designed and developed a personal portfolio website using React and TypeScript to showcase my projects and skills. Implemented a card grid layout for the project section, allowing users to click and view project details without taking extra space.',
      technologies: 'React, TypeScript, Tailwind-CSS, HTML',
      github: 'https://github.com/Uttam1910/stellar-portfolio-react',
      type: 'project'
    },
    {
      title: 'LMS Development',
      company: 'Major Project',
      period: 'May 2024 - July 2024',
      description: 'Developed the front end and back end of a Learning Management System (LMS) and integrated the entire system to provide a seamless user experience for students and instructors.',
      responsibilities: [
        'Designed and implemented the front-end interface using React and Vite.',
        'Built the back-end server using Node.js and Express.',
        'Integrated the system with a MongoDB database for efficient data management.',
        'Ensured the application is scalable and maintains high performance.'
      ],
      technologies: 'React, Node.js, Express, MongoDB, CSS, HTML, Javascript',
      github: 'https://github.com/Uttam1910/EduMaster',
      type: 'project'
    }
  ];

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Main content - centered */}
      <section className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="w-full max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-teal-400 font-mono text-sm sm:text-base opacity-70">
              <span className="text-gray-500">&lt;</span>experience
              <span className="text-gray-500">/&gt;</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              My <span className="text-teal-400">Experience</span>
            </h1>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:border-teal-500/40 transition-all duration-300 animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBriefcase className="text-teal-400 text-xl" />
                      <h2 className="text-2xl font-bold text-white">{exp.title}</h2>
                    </div>
                    <h3 className="text-xl text-teal-400 font-semibold mb-2">{exp.company}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FaCalendarAlt className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                {exp.responsibilities && (
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                )}
                
                {exp.technologies && (
                  <p className="text-gray-300 mb-4">
                    <strong className="text-teal-400">Technologies: </strong>
                    <span>{exp.technologies}</span>
                  </p>
                )}
                
                <div className="flex flex-wrap gap-4 mt-4">
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-lg transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50"
                    >
                      <FaLink className="mr-2" />
                      View Certificate
                    </a>
                  )}
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-lg transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50"
                    >
                      <FaGithub className="mr-2" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
