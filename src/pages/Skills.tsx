import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: 'JavaScript, TypeScript, Python, Java, C++'
    },
    {
      title: 'Web Development',
      icon: 'fas fa-globe',
      skills: 'HTML, CSS, React, Node.js, Express.js'
    },
    {
      title: 'Database Management',
      icon: 'fas fa-database',
      skills: 'MySQL, MongoDB'
    },
    {
      title: 'DevOps',
      icon: 'fas fa-server',
      skills: 'Docker, Kubernetes, Jenkins, AWS, Azure'
    },
    {
      title: 'Tools & Technologies',
      icon: 'fas fa-tools',
      skills: 'Git, VS Code, Linux'
    },
    {
      title: 'Soft Skills',
      icon: 'fas fa-users',
      skills: 'Team Collaboration, Problem Solving, Communication, Agile Methodologies'
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
        <div className="w-full max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-teal-400 font-mono text-sm sm:text-base opacity-70">
              <span className="text-gray-500">&lt;</span>skills
              <span className="text-gray-500">/&gt;</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              My <span className="text-teal-400">Skills</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 transform hover:scale-105 animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <i className={`${category.icon} text-teal-400 text-3xl mr-4`}></i>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{category.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
