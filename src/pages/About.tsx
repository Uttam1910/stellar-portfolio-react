import React from "react";

const About: React.FC = () => {
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
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-teal-400 font-mono text-sm sm:text-base opacity-70">
              <span className="text-gray-500">&lt;</span>about
              <span className="text-gray-500">/&gt;</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              About <span className="text-teal-400">Me</span>
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg sm:text-xl">
              Hi, I'm Uttam. I'm a Full Stack Developer currently working at Growve,
              where I develop and maintain web applications using modern technologies.
              With a background in Computer Science and Engineering with a specialization in AI and ML,
              I bring a unique perspective to software development, combining theoretical knowledge
              with practical experience.
            </p>
            <p className="text-lg sm:text-xl">
              My strengths lie in Full Stack Development, Machine Learning, Web Development, and Database
              Management. I have a solid understanding of modern technologies including React, Node.js,
              Python, and various databases. I excel in developing innovative solutions and delivering
              high-quality software products.
            </p>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
              Technical <span className="text-teal-400">Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-4 hover:border-teal-500/40 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <i className="fas fa-code text-teal-400 mr-3 text-xl"></i>
                  <h3 className="text-teal-400 font-semibold text-lg">Languages</h3>
                </div>
                <p className="text-gray-300">Python, JavaScript, Java, C/C++, HTML/CSS, PHP, SQL</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-4 hover:border-teal-500/40 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <i className="fas fa-database text-teal-400 mr-3 text-xl"></i>
                  <h3 className="text-teal-400 font-semibold text-lg">Databases</h3>
                </div>
                <p className="text-gray-300">MySQL, Cloud, MongoDB</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-4 hover:border-teal-500/40 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <i className="fas fa-cube text-teal-400 mr-3 text-xl"></i>
                  <h3 className="text-teal-400 font-semibold text-lg">Libraries</h3>
                </div>
                <p className="text-gray-300">NumPy, Pandas, OpenCV</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-4 hover:border-teal-500/40 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <i className="fas fa-cogs text-teal-400 mr-3 text-xl"></i>
                  <h3 className="text-teal-400 font-semibold text-lg">Frameworks</h3>
                </div>
                <p className="text-gray-300">Express.js, React, Node.js, Tailwind CSS, Bootstrap</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-4 hover:border-teal-500/40 transition-all duration-300 md:col-span-2">
                <div className="flex items-center mb-2">
                  <i className="fas fa-tools text-teal-400 mr-3 text-xl"></i>
                  <h3 className="text-teal-400 font-semibold text-lg">Tools & Technologies</h3>
                </div>
                <p className="text-gray-300">Git, Docker, AWS</p>
              </div>
            </div>
          </div>

          {/* Closing paragraph */}
          <div className="text-center">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I am passionate about exploring new technologies and continually improving my skills to solve complex and significant real-world problems. I am seeking an opportunity to work in a position that combines my skills in Software Engineering, offers professional development, provides interesting experiences, and fosters personal growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
