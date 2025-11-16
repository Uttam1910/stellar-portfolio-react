import React from "react";

const About: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '9+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Years Experience', value: '2+' },
    { label: 'Cup of Coffee', value: '∞' },
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
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="w-full max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-teal-400 font-mono text-sm sm:text-base opacity-70">
              <span className="text-gray-500">&lt;</span>about
              <span className="text-gray-500">/&gt;</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              About <span className="text-teal-400">Me</span>
            </h1>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-delay">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-4 text-center hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-3xl font-bold text-teal-400 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-300 leading-relaxed animate-fade-in-delay-2">
            <p className="text-lg sm:text-xl hover:text-gray-200 transition-colors duration-300">
              Hi, I'm Uttam. I'm a Full Stack Developer currently working at Growve,
              where I develop and maintain web applications using modern technologies.
              With a background in Computer Science and Engineering with a specialization in AI and ML,
              I bring a unique perspective to software development, combining theoretical knowledge
              with practical experience.
            </p>
            <p className="text-lg sm:text-xl hover:text-gray-200 transition-colors duration-300">
              My strengths lie in Full Stack Development, Machine Learning, Web Development, and Database
              Management. I have a solid understanding of modern technologies including React, Node.js,
              Python, and various databases. I excel in developing innovative solutions and delivering
              high-quality software products.
            </p>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-8 animate-fade-in-delay-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
              Technical <span className="text-teal-400">Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: 'fas fa-code', title: 'Languages', content: 'Python, JavaScript, Java, C/C++, HTML/CSS, PHP, SQL' },
                { icon: 'fas fa-database', title: 'Databases', content: 'MySQL, Cloud, MongoDB' },
                { icon: 'fas fa-cube', title: 'Libraries', content: 'NumPy, Pandas, OpenCV' },
                { icon: 'fas fa-cogs', title: 'Frameworks', content: 'Express.js, React, Node.js, Tailwind CSS, Bootstrap' },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:border-teal-500/40 transition-all duration-300 transform hover:scale-105 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-3">
                    <i className={`${skill.icon} text-teal-400 mr-3 text-xl group-hover:scale-125 transition-transform duration-300`}></i>
                    <h3 className="text-teal-400 font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300">{skill.title}</h3>
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{skill.content}</p>
                </div>
              ))}
              <div
                className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 hover:border-teal-500/40 transition-all duration-300 transform hover:scale-105 group md:col-span-2 animate-fade-in"
                style={{ animationDelay: `${4 * 0.1}s` }}
              >
                <div className="flex items-center mb-3">
                  <i className="fas fa-tools text-teal-400 mr-3 text-xl group-hover:scale-125 transition-transform duration-300"></i>
                  <h3 className="text-teal-400 font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300">Tools & Technologies</h3>
                </div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Git, Docker, AWS</p>
              </div>
            </div>
          </div>

          {/* Closing paragraph */}
          <div className="text-center animate-fade-in-delay-4">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
              I am passionate about exploring new technologies and continually improving my skills to solve complex and significant real-world problems. I am seeking an opportunity to work in a position that combines my skills in Software Engineering, offers professional development, provides interesting experiences, and fosters personal growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
